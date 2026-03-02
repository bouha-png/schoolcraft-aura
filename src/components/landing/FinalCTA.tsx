const FinalCTA = () => {
  return (
    <section
      id="demo"
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Soft gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, hsla(278, 40%, 94%, 0.6) 0%, transparent 50%)',
        }}
      />
      <div className="section-container text-center relative z-10">
        <p className="text-overline mb-4">PRÊT À COMMENCER ?</p>
        <h2 className="text-display mb-6">
          Voyez par <span className="text-gradient">vous-même.</span>
        </h2>
        <p className="text-body-lg max-w-[500px] mx-auto mb-10">
          Demandez une démonstration personnalisée. Découvrez comment Synapse
          transforme votre établissement.
        </p>
        <a href="mailto:contact@scanditek.com" className="btn-primary btn-primary-lg">
          Demander votre démonstration
        </a>
        <p className="mt-6">
          <a href="mailto:contact@scanditek.com" className="text-caption hover:text-primary transition-colors">
            contact@scanditek.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
