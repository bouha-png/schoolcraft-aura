const footerLinks = {
  Produit: ['Fonctionnalités', 'Modules', 'Intelligence IA', 'Tarifs', 'Sécurité'],
  Entreprise: ['À propos', 'Contact', 'Partenaires', 'Carrières'],
  Ressources: ['Documentation', 'Blog', 'Statut', 'Mentions légales'],
};

const Footer = () => {
  return (
    <footer className="bg-foreground text-muted-foreground pt-20 pb-10">
      <div className="section-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div>
            <p className="font-display font-bold text-xl text-background mb-3">
              Synapse
            </p>
            <p className="text-sm leading-relaxed opacity-60">
              Gestion scolaire intelligente par ScandiTek.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="font-display font-semibold text-sm text-background mb-4 uppercase tracking-wide">
                {title}
              </p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm opacity-60 hover:opacity-100 transition-opacity duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-background/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs opacity-50">
            © 2026 ScandiTek · Scandinavian Tecknologie · Education · Innovation
          </p>
          <div className="flex gap-4 text-xs">
            <a href="#" className="opacity-50 hover:opacity-100 transition-opacity">FR</a>
            <a href="#" className="opacity-50 hover:opacity-100 transition-opacity">AR</a>
            <a href="#" className="opacity-50 hover:opacity-100 transition-opacity">EN</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
