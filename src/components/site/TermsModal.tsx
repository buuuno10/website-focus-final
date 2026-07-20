import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface TermsModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TermsModal({ isOpen, onOpenChange }: TermsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent
        id="terms-modal-content"
        className="max-w-2xl bg-neutral-950 border-neutral-800 text-neutral-200"
      >
        <DialogHeader>
          <DialogTitle
            id="terms-modal-title"
            className="font-display text-2xl text-white tracking-wide"
          >
            Termos e Condições de Utilização — Focus
          </DialogTitle>
        </DialogHeader>

        <div className="max-h-[60vh] overflow-y-auto pr-3 space-y-6 text-sm text-neutral-400 scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-transparent">
          <p className="text-xs text-neutral-500">Última atualização: 20 de Julho de 2026</p>

          <p>
            Bem-vindo(a) à Focus (&quot;Aplicação&quot;, &quot;App&quot;, &quot;Serviço&quot;), uma
            aplicação de preparação mental e performance para jogadores de futebol. Estes Termos e
            Condições (&quot;Termos&quot;) regulam o acesso e a utilização da Aplicação,
            disponibilizada pela 90focus (&quot;nós&quot;, &quot;a Focus&quot;).
          </p>

          <p>
            Ao aceder ou utilizar a Aplicação, o utilizador (&quot;tu&quot;, &quot;utilizador&quot;)
            aceita ficar vinculado a estes Termos. Se não concordares com algum destes pontos, não
            deves utilizar a Aplicação.
          </p>

          <section className="space-y-2">
            <h3 className="font-semibold text-white">1. Descrição do Serviço</h3>
            <p>
              A Focus é uma aplicação de apoio à preparação mental e ao acompanhamento de
              performance desportiva, destinada a jogadores de futebol de diferentes escalões
              (Sub-13 a Pro). A Aplicação permite, entre outras funcionalidades:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Criar um perfil de jogador (posição, escalão, características físicas, objetivos);
              </li>
              <li>
                Registar um diário de jogos e treinos, incluindo estado emocional, estatísticas e
                notas pessoais;
              </li>
              <li>Definir e acompanhar objetivos desportivos;</li>
              <li>Consultar um calendário de jogos, treinos e descanso;</li>
              <li>
                Utilizar um assistente conversacional de apoio mental (&quot;Mental Coach&quot;),
                com respostas geradas com recurso a inteligência artificial;
              </li>
              <li>Consultar gráficos e indicadores de evolução de performance.</li>
            </ul>
            <p className="text-xs text-neutral-500 italic mt-2">
              A Focus não é um serviço médico, psicológico, psiquiátrico ou de saúde mental, nem
              substitui o aconselhamento de profissionais de saúde, psicólogos do desporto,
              treinadores certificados ou outros técnicos qualificados. Em caso de sofrimento
              emocional significativo, ansiedade persistente ou qualquer preocupação de saúde, o
              utilizador (ou o seu encarregado de educação) deve procurar apoio profissional
              adequado.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-semibold text-white">2. Idade mínima e consentimento parental</h3>
            <p>
              A Aplicação destina-se a jogadores de futebol de diversas idades, incluindo escalões
              de formação jovem (a partir de Sub-13). Caso o utilizador tenha menos de 18 anos, a
              utilização da Aplicação depende da autorização e supervisão de um pai, mãe ou
              encarregado de educação, que aceita estes Termos e a Política de Privacidade em nome e
              no interesse do menor.
            </p>
            <p>
              Se te identificares como pai/mãe/encarregado de educação, és responsável por
              supervisionar a utilização da Aplicação pelo menor a teu cargo, incluindo os dados que
              são introduzidos e as interações com o assistente de inteligência artificial.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-semibold text-white">3. Conta e armazenamento de dados</h3>
            <p>
              A Focus não requer criação de conta com email ou palavra-passe. Os dados introduzidos
              pelo utilizador (perfil, diário, objetivos, calendário) ficam guardados localmente no
              dispositivo/navegador utilizado (&quot;armazenamento local&quot;).
            </p>
            <p>Isto implica que:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Não existe cópia automática dos teus dados nos nossos servidores;</li>
              <li>
                Se desinstalares a aplicação, limpares os dados do navegador, ou mudares de
                dispositivo, poderás perder permanentemente o histórico introduzido, salvo se
                existir funcionalidade de exportação/sincronização explicitamente disponibilizada;
              </li>
              <li>
                É da tua responsabilidade (ou do encarregado de educação, no caso de menores) fazer
                a gestão e salvaguarda dos dados que consideres importantes.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h3 className="font-semibold text-white">
              4. Funcionalidade de Inteligência Artificial (Mental Coach)
            </h3>
            <p>
              A Aplicação disponibiliza um assistente conversacional (&quot;Mental Coach&quot;) que
              gera respostas com recurso a modelos de inteligência artificial de terceiros
              (atualmente, tecnologia Google Gemini).
            </p>
            <p>Ao utilizares esta funcionalidade, aceitas que:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                As tuas mensagens, bem como determinados dados do teu perfil (posição, escalão,
                principal desafio, referências de inspiração) e excertos recentes do teu diário,
                poderão ser enviados a um fornecedor externo de inteligência artificial para gerar a
                resposta;
              </li>
              <li>
                As respostas do Mental Coach são geradas automaticamente e têm caráter motivacional
                e informativo, não constituindo aconselhamento psicológico, médico ou profissional
                de qualquer tipo;
              </li>
              <li>
                As respostas podem, ocasionalmente, ser imprecisas, incompletas ou não adequadas à
                tua situação concreta — usa sempre o teu discernimento e, se necessário, recorre a
                um profissional qualificado;
              </li>
              <li>
                Caso o serviço de inteligência artificial esteja indisponível, a Aplicação poderá
                apresentar respostas alternativas geradas por regras pré-definidas, sem recurso a
                IA.
              </li>
            </ul>
            <p>
              Não deves introduzir no chat dados sensíveis desnecessários (ex.: dados de saúde de
              terceiros, informação financeira) para além do que é pedido pela própria
              funcionalidade.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-semibold text-white">5. Nomes e referências de terceiros</h3>
            <p>
              A Aplicação pode utilizar, para fins meramente ilustrativos e motivacionais nos
              exercícios de visualização mental, nomes de jogadores de futebol profissionais reais
              (ex.: referências a jogadores conhecidos internacionalmente). Estas referências são
              utilizadas exclusivamente como inspiração desportiva e não implicam qualquer
              afiliação, parceria, patrocínio ou endosso por parte dessas pessoas, clubes ou
              entidades em relação à Focus.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-semibold text-white">6. Regras de utilização</h3>
            <p>Ao utilizar a Aplicação, comprometes-te a:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Fornecer informação verdadeira e não te fazeres passar por outra pessoa;</li>
              <li>Não utilizar a Aplicação para fins ilegais, fraudulentos ou abusivos;</li>
              <li>
                Não tentar aceder indevidamente ao código, servidores ou infraestrutura da
                Aplicação;
              </li>
              <li>
                Não utilizar a funcionalidade de IA para gerar conteúdo ofensivo, ilegal ou
                prejudicial.
              </li>
            </ul>
            <p>
              Reservamo-nos o direito de suspender ou limitar o acesso à Aplicação, no todo ou em
              parte, em caso de utilização abusiva ou contrária a estes Termos.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-semibold text-white">7. Propriedade intelectual</h3>
            <p>
              O design, o código, os textos, os gráficos, a marca &quot;Focus&quot; e demais
              elementos da Aplicação são propriedade de 90focus ou dos respetivos licenciadores,
              sendo protegidos pelas leis de propriedade intelectual aplicáveis. Não é permitida a
              reprodução, distribuição ou exploração comercial destes elementos sem autorização
              prévia por escrito.
            </p>
            <p>
              Os dados que introduzes na Aplicação (diário, notas, objetivos) permanecem teus; ao
              utilizares a funcionalidade de IA, autorizas o envio pontual dessa informação ao
              fornecedor de IA nos termos descritos na secção 4, exclusivamente para gerar a
              resposta solicitada.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-semibold text-white">8. Isenção de garantias</h3>
            <p>
              A Aplicação é disponibilizada &quot;tal como está&quot; (&quot;as is&quot;), sem
              garantias de qualquer tipo, expressas ou implícitas, quanto à sua exatidão,
              disponibilidade contínua, ausência de erros ou adequação a um fim específico. Não
              garantimos resultados desportivos, melhorias de performance ou qualquer resultado
              concreto decorrente da utilização da Aplicação.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-semibold text-white">9. Limitação de responsabilidade</h3>
            <p>
              Na máxima medida permitida por lei, a 90focus não será responsável por danos
              indiretos, incidentais, especiais ou consequentes resultantes do uso ou da
              impossibilidade de uso da Aplicação, incluindo, sem limitação, a perda de dados
              armazenados localmente, decisões tomadas com base em respostas do assistente de IA, ou
              indisponibilidade temporária do serviço.
            </p>
            <p>
              Nada nestes Termos exclui ou limita responsabilidade que não possa ser legalmente
              excluída ou limitada, nomeadamente em caso de dolo ou negligência grave.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-semibold text-white">10. Alterações aos Termos</h3>
            <p>
              Podemos atualizar estes Termos periodicamente, para refletir alterações na Aplicação,
              na legislação aplicável ou nas nossas práticas. A versão atualizada será publicada
              nesta página, com indicação da data de revisão. A utilização continuada da Aplicação
              após a publicação de alterações implica a aceitação dos novos Termos.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-semibold text-white">11. Cessação</h3>
            <p>
              Podes deixar de utilizar a Aplicação a qualquer momento, bastando desinstalá-la ou
              deixar de a aceder. Podemos, a nosso critério, suspender ou descontinuar a Aplicação
              ou parte das suas funcionalidades, procurando dar aviso prévio razoável sempre que
              possível.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-semibold text-white">12. Lei aplicável e foro</h3>
            <p>
              Estes Termos regem-se pela lei portuguesa. Para a resolução de qualquer litígio
              emergente destes Termos, é competente o foro da comarca de Lisboa, sem prejuízo das
              regras imperativas aplicáveis à proteção de consumidores.
            </p>
            <p>
              Em caso de litígio de consumo, o utilizador pode ainda recorrer a uma entidade de
              Resolução Alternativa de Litígios (RAL), como o Centro de Arbitragem de Conflitos de
              Consumo de Lisboa (CACCL), ou à Plataforma Europeia de Resolução de Litígios em Linha
              (https://ec.europa.eu/consumers/odr).
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-semibold text-white">13. Contacto</h3>
            <p>
              Para questões sobre estes Termos, podes contactar-nos através de:{" "}
              <a href="mailto:hello@90focus.app" className="text-brand hover:underline">
                hello@90focus.app
              </a>
              .
            </p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}
