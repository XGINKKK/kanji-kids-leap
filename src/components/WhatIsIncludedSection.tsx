import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Book, Target, Gift, MessageCircle, CheckCircle } from "lucide-react";
import kitMockup from "@/assets/kit-mockup.jpg";

const items = [
  {
    icon: Book,
    title: "300+ Cartões de Reconhecimento Visual",
    description: "Baseados na técnica japonesa de memorização por padrões",
    badge: "Principal",
    badgeVariant: "default" as const,
  },
  {
    icon: Target,
    title: "Guia Completo do Método Kanji Kids™",
    description: "Passo a passo detalhado para você aplicar em casa, mesmo sem experiência",
    badge: null,
    badgeVariant: null,
  },
  {
    icon: Book,
    title: "Método Visual Japonês Adaptado",
    description: "Técnica milenar comprovada, traduzida para o português brasileiro",
    badge: null,
    badgeVariant: null,
  },
  {
    icon: Gift,
    title: "BÔNUS: Jogos de Alfabetização Lúdica",
    description: "Material extra exclusivo para tornar o aprendizado ainda mais divertido",
    badge: "Bônus",
    badgeVariant: "secondary" as const,
  },
  {
    icon: MessageCircle,
    title: "Suporte Pedagógico Especializado",
    description: "Tire suas dúvidas com profissionais que entendem o método",
    badge: null,
    badgeVariant: null,
  },
  {
    icon: CheckCircle,
    title: "Garantia Incondicional de 30 dias",
    description: "Risco zero para você — satisfação total ou dinheiro de volta",
    badge: "Garantia",
    badgeVariant: "outline" as const,
  },
];

export const WhatIsIncludedSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-fredoka text-3xl md:text-4xl lg:text-5xl font-bold text-navy">
            O que você recebe no Kit Completo
          </h2>
          <p className="font-nunito text-lg md:text-xl text-muted-foreground">
            Tudo que você precisa para alfabetizar seu filho em casa usando o método japonês
          </p>
        </div>

        {/* Mockup Image */}
        <div className="max-w-4xl mx-auto mb-16">
          <img
            src={kitMockup}
            alt="Kit Kanji Kids completo"
            className="w-full h-auto rounded-3xl shadow-2xl"
          />
        </div>

        {/* Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="bg-gradient-to-br from-card to-soft-blue/10 border border-border/50 hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-full bg-yellow-soft/30 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    {item.badge && item.badgeVariant && (
                      <Badge variant={item.badgeVariant} className="font-nunito">
                        {item.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="font-nunito text-lg text-navy">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-inter text-sm text-foreground/80 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
