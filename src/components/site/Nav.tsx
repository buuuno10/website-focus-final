import { useEffect, useState, useRef } from "react";

const links = [
  { href: "#app", label: "A App" },
  { href: "#treino", label: "Treino" },
  { href: "#para-quem", label: "Para quem" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const isScrollingToRef = useRef<string | null>(null);

  const linkRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
    top: 0,
    opacity: 0,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // If we are actively performing a smooth scroll, don't update from scroll event
      if (isScrollingToRef.current !== null) {
        return;
      }

      const scrollPosition = window.scrollY + 120; // adding offset for better matching

      // We have the main sections
      let currentSection = "";

      // For waitlist, let's see if the waitlist element is in view
      const waitlistElement = document.getElementById("waitlist");
      if (waitlistElement) {
        const top = waitlistElement.offsetTop;
        const height = waitlistElement.offsetHeight;
        // If waitlist is in view, we prioritize it
        if (scrollPosition >= top && scrollPosition < top + height + 300) {
          currentSection = "#waitlist";
        }
      }

      if (!currentSection) {
        for (const id of ["app", "treino", "para-quem", "faq"]) {
          const element = document.getElementById(id);
          if (element) {
            const top = element.offsetTop;
            const height = element.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              currentSection = `#${id}`;
              break;
            }
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update animated indicator size and position
  useEffect(() => {
    const updateIndicator = () => {
      const activeEl = linkRefs.current[activeSection];
      if (activeEl) {
        setIndicatorStyle({
          left: activeEl.offsetLeft,
          width: activeEl.offsetWidth,
          top: activeEl.offsetTop + activeEl.offsetHeight - 4,
          opacity: 1,
        });
      } else {
        setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
      }
    };

    updateIndicator();

    const rAF = requestAnimationFrame(updateIndicator);
    const timeoutId = setTimeout(updateIndicator, 150);

    window.addEventListener("resize", updateIndicator);

    return () => {
      cancelAnimationFrame(rAF);
      clearTimeout(timeoutId);
      window.removeEventListener("resize", updateIndicator);
    };
  }, [activeSection, scrolled]);

  const smoothScrollTo = (targetId: string) => {
    isScrollingToRef.current = `#${targetId}`;
    setActiveSection(`#${targetId}`);

    const targetElement = document.getElementById(targetId);
    if (!targetElement) {
      isScrollingToRef.current = null;
      return;
    }

    const navbarHeight = 64;
    const targetPosition = targetElement.offsetTop - navbarHeight;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 800; // ms
    let startTime: number | null = null;

    const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeOutCubic(progress);

      window.scrollTo(0, startPosition + distance * ease);

      if (progress < 1) {
        requestAnimationFrame(animation);
      } else {
        window.scrollTo(0, targetPosition);
        // Add a slight delay to clear the ref to let the scroll settle
        setTimeout(() => {
          isScrollingToRef.current = null;
        }, 50);
      }
    };

    requestAnimationFrame(animation);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            smoothScrollTo("top");
          }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <span className="font-display text-xl tracking-widest">90FOCUS</span>
        </a>
        <nav className="relative hidden items-center gap-8 md:flex">
          {links.map((l) => {
            const isActive = activeSection === l.href;
            return (
              <a
                key={l.href}
                href={l.href}
                ref={(el) => {
                  linkRefs.current[l.href] = el;
                }}
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo(l.href.slice(1));
                }}
                className={`relative py-2 text-sm uppercase tracking-wider transition-colors duration-300 ${
                  isActive
                    ? "text-brand font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </a>
            );
          })}

          {/* Extremely smooth sliding indicator */}
          <span
            className="absolute h-0.5 bg-brand transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] pointer-events-none"
            style={{
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`,
              top: `${indicatorStyle.top}px`,
              opacity: indicatorStyle.opacity,
            }}
          />
        </nav>
        <a
          href="#waitlist"
          onClick={(e) => {
            e.preventDefault();
            smoothScrollTo("waitlist");
          }}
          className="rounded-sm bg-brand px-4 py-2 text-xs font-bold uppercase tracking-widest text-brand-foreground transition hover:brightness-110 cursor-pointer"
        >
          Aderir
        </a>
      </div>
    </header>
  );
}
