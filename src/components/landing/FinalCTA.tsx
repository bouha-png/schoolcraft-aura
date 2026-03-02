const FinalCTA = () => {
  return (
    <section
      id="demo"
      className="section-padding bg-background relative"
      style={{
        background: 'radial-gradient(ellipse at center, rgba(119,47,159,0.04) 0%, transparent 50%)',
      }}
    >
      <div className="section-container text-center">
        <h2 className="text-display mb-6">Voyez par vous-même.</h2>
        <p className="text-body-lg max-w-[500px] mx-auto mb-10">
          Demandez une démonstration personnalisée. Découvrez comment Synapse
          transforme votre établissement.
        </p>
        <a href="mailto:contact@scanditek.com" className="btn-primary btn-primary-lg">
          Demander votre démonstration
        </a>
        <p className="mt-6">
          <a
            href="mailto:contact@scanditek.com"
            className="text-caption hover:underline"
          >
            contact@scanditek.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
