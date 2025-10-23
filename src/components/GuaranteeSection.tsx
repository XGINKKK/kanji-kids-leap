import { Shield } from "lucide-react";

export const GuaranteeSection = () => {
  return (
    <section className="py-20 bg-beige/70">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border-4 border-success/50 rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="flex flex-col items-center text-center space-y-6">
              {/* Icon */}
              <div className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center">
                <Shield className="w-12 h-12 text-success" />
              </div>

              {/* Title */}
              <h2 className="font-fredoka text-3xl md:text-4xl font-bold text-navy">
                Garantia de Satisfação Total de 30 Dias
              </h2>

              {/* Description */}
              <div className="space-y-4 font-inter text-base md:text-lg text-foreground/90 leading-relaxed">
                <p>
                  Teste o Kit Kanji Kids™ por <span className="font-bold text-primary">30 dias completos</span>. 
                  Se você não estiver completamente satisfeita com a evolução do seu filho na leitura, 
                  devolvemos <span className="font-bold text-primary">100% do seu investimento</span>.
                </p>
                <p className="font-bold">
                  Sem perguntas incômodas, sem burocracia.
                </p>
                <p className="italic text-lg">
                  O risco é todo nosso. A transformação é toda do seu filho.
                </p>
              </div>

              {/* Visual elements */}
              <div className="flex flex-wrap justify-center gap-6 pt-4">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center">
                    <span className="text-success font-bold">📅</span>
                  </div>
                  <span className="font-nunito">30 dias</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center">
                    <span className="text-success font-bold">💰</span>
                  </div>
                  <span className="font-nunito">100% do valor</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center">
                    <span className="text-success font-bold">🛡️</span>
                  </div>
                  <span className="font-nunito">Sem burocracia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
