import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Sarah Johnson",
      role: "CEO",
      company: "Tech Innovations Inc.",
      content: "Working with this team transformed our business. Their insights and strategic approach delivered results beyond our expectations. Highly recommended!",
      rating: 5,
    },
    {
      id: "2",
      name: "Michael Chen",
      role: "Director of Operations",
      company: "Global Solutions Ltd.",
      content: "The assessments provided invaluable clarity on our challenges. The implementation was smooth, and we saw measurable improvements within weeks.",
      rating: 5,
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      role: "VP of Marketing",
      company: "Creative Brands Co.",
      content: "Exceptional service and expertise. They understood our unique needs and delivered tailored solutions that made a real difference.",
      rating: 5,
    },
    {
      id: "4",
      name: "David Thompson",
      role: "Founder",
      company: "StartUp Ventures",
      content: "The resources and guidance provided helped us scale rapidly while maintaining quality. Their approach is both practical and visionary.",
      rating: 5,
    },
    {
      id: "5",
      name: "Lisa Anderson",
      role: "Chief Strategy Officer",
      company: "Enterprise Systems",
      content: "Professional, knowledgeable, and results-driven. They've become a trusted partner in our growth journey.",
      rating: 5,
    },
    {
      id: "6",
      name: "Robert Kim",
      role: "Managing Director",
      company: "Innovation Group",
      content: "The case studies and insights shared were eye-opening. We've implemented many of their recommendations with great success.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear what our clients say about their experience working with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-border/50 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="h-16 w-16 text-primary" />
              </div>
              <CardContent className="pt-6 relative">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
