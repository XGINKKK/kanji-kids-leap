import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana Paula M.",
    location: "São Paulo, SP",
    text: "Minha filha de 4 anos estava travada nas vogais há meses. Com o método japonês, em 3 semanas ela já estava formando palavras! Parece mágica, mas é ciência.",
    initials: "AP",
  },
  {
    name: "Carlos Eduardo S.",
    location: "Rio de Janeiro, RJ",
    text: "Meu filho tem autismo e eu achava impossível alfabetizar em casa. O Kit Kanji Kids mudou tudo. Ele ama as atividades visuais e já reconhece mais de 50 palavras!",
    initials: "CE",
  },
  {
    name: "Juliana Santos",
    location: "Belo Horizonte, MG",
    text: "Parei de brigar na hora de estudar. Agora minha pequena PEDE para fazer as atividades. Melhor investimento da vida!",
    initials: "JS",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-soft-blue/30 via-background to-beige/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-fredoka text-3xl md:text-4xl lg:text-5xl font-bold text-navy">
            O que os pais estão dizendo
          </h2>
          <p className="font-nunito text-lg md:text-xl text-muted-foreground">
            Milhares de famílias já transformaram a alfabetização dos seus filhos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card hover:shadow-2xl transition-shadow duration-300 border-none"
            >
              <CardContent className="p-8 space-y-6">
                {/* Stars */}
                <div className="flex gap-1 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-soft text-yellow-soft" />
                  ))}
                </div>

                {/* Avatar */}
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-xl font-nunito">
                      {testimonial.initials}
                    </span>
                  </div>
                </div>

                {/* Testimonial text */}
                <p className="font-inter text-base text-foreground/90 italic text-center leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="text-center">
                  <p className="font-nunito font-bold text-navy">{testimonial.name}</p>
                  <p className="font-inter text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-nunito text-lg text-muted-foreground">
            ⭐ Mais de <span className="font-bold text-primary">15.000 famílias</span> já
            confiaram no método
          </p>
        </div>
      </div>
    </section>
  );
};
