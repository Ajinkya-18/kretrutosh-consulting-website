const ClientLogos = () => {
  // Placeholder logos - in a real app, these would be images
  const clients = [
    "Alida", "Zykrr", "Symega", "Maveric Systems", "InLife", 
    "Value Retail", "IGE", "Sankey Solutions", "Kraft Heinz", 
    "Circles Life", "BPI", "JUF", "Mission Bio", "Terlato Wine Group"
  ];

  return (
    <section className="py-12 bg-muted/50 overflow-hidden border-y border-border/50">
      <div className="container mx-auto px-4 mb-8 text-center">
        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
          Trusted by Industry Leaders
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-4">
          {clients.map((client, index) => (
            <span key={index} className="text-2xl font-bold text-muted-foreground/50 hover:text-primary transition-colors cursor-default">
              {client}
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {clients.map((client, index) => (
            <span key={`dup-${index}`} className="text-2xl font-bold text-muted-foreground/50 hover:text-primary transition-colors cursor-default">
              {client}
            </span>
          ))}
        </div>
        
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      </div>
    </section>
  );
};

export default ClientLogos;
