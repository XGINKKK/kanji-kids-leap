import { Button } from "@/components/ui/button";
import { Check, Lock } from "lucide-react";
import heroImage from "@/assets/hero-child-reading.jpg";

export const HeroSection = () => {
  const scrollToCheckout = () => {
    document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-soft-blue/20 to-background">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <div className="w-16 h-16 rounded-full bg-pink-soft animate-float" />
      </div>
      <div className="absolute bottom-32 right-20 opacity-20">
        <div className="w-24 h-24 rounded-full bg-yellow-soft animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="font-fredoka text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight">
              Descubra a{" "}
              <span className="text-primary">técnica japonesa milenar</span> que
              ensina crianças a ler até{" "}
              <span className="text-primary">5 vezes mais rápido</span>, naturalmente!
            </h1>

            <p className="font-nunito text-xl md:text-2xl text-foreground/80">
              Com apenas <span className="font-bold text-primary">10 minutos por dia</span>
            </p>

            <div className="space-y-4">
              {[
                "Ideal para crianças de 2 a 12 anos, no ritmo natural de cada uma",
                "Mesmo que ainda não reconheça letras ou sons",
                "Funciona também com crianças com TDAH, Autismo ou dificuldades de foco",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <Check className="w-6 h-6 text-success" />
                  </div>
                  <p className="font-inter text-base md:text-lg text-foreground/90">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <Button
                onClick={scrollToCheckout}
                variant="hero"
                size="xl"
                className="w-full sm:w-auto animate-pulse-soft font-nunito"
              >
                Quero meu filho lendo com confiança!
              </Button>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Lock className="w-4 h-4" />
                <span>🔒 Compra 100% Segura + Garantia de 30 dias</span>
              </div>
            </div>
          </div>

          {/* Right: Hero image */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <img
                src={heroImage}
                alt="Criança feliz lendo com método japonês"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
