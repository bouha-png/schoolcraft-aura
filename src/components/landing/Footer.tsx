const footerLinks = {
  Produit: ['Fonctionnalités', 'Modules', 'Intelligence IA', 'Tarifs', 'Sécurité'],
  Entreprise: ['À propos', 'Contact', 'Partenaires', 'Carrières'],
  Ressources: ['Documentation', 'Blog', 'Statut', 'Mentions légales'],
};

const Footer = () => {
  return (
    <footer className="bg-[hsl(240,5%,12%)] text-[hsl(240,2%,54%)] pt-20 pb-10">
      <div className="section-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div>
            <p className="font-display font-bold text-xl text-[hsl(0,0%,98%)] mb-3">
              Synapse
            </p>
            <p className="text-sm leading-relaxed">
              Gestion scolaire intelligente par ScandiTek.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="font-display font-semibold text-sm text-[hsl(0,0%,98%)] mb-4 uppercase tracking-wide">
                {title}
              </p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm hover:text-[hsl(210,17%,98%)] transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[hsl(0,0%,20%)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            © 2026 ScandiTek · Scandinavian Tecknologie · Education · Innovation
          </p>
          <div className="flex gap-4 text-xs">
            <a href="#" className="hover:text-[hsl(210,17%,98%)] transition-colors">FR</a>
            <a href="#" className="hover:text-[hsl(210,17%,98%)] transition-colors">AR</a>
            <a href="#" className="hover:text-[hsl(210,17%,98%)] transition-colors">EN</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
