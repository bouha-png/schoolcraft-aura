import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/i18n/LanguageContext';
import sectionPortals from '@/assets/section-portals.jpg';
import {
  Crown, GraduationCap, BookOpen, Heart, ClipboardList,
  Users, Wallet, Bus, Wrench, Server,
  Smartphone, MessageCircle, Calendar, UsersRound,
} from 'lucide-react';

const roleIcons: Record<string, React.ElementType> = {
  crown: Crown,
  graduationCap: GraduationCap,
  bookOpen: BookOpen,
  heart: Heart,
  clipboardList: ClipboardList,
  users: Users,
  wallet: Wallet,
  bus: Bus,
  wrench: Wrench,
  server: Server,
};

const featureIcons = [Smartphone, MessageCircle, Calendar, UsersRound];

const UserPortals = () => {
  const { ref, visible } = useScrollReveal();
  const { t } = useLanguage();

  // Bento grid: first 2 roles are large, rest are compact
  const largeRoles = t.portals.roles.slice(0, 2);
  const smallRoles = t.portals.roles.slice(2);

  return (
    <section id="portals" className="section-padding bg-background relative overflow-hidden">
      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 30% 20%, hsla(278, 40%, 94%, 0.5) 0%, transparent 50%)',
        }}
      />

      <div ref={ref} className="section-container relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 reveal ${visible ? 'visible' : ''}`}>
          <p className="text-overline mb-4">{t.portals.overline}</p>
          <h2 className="text-section">
            {t.portals.title} <span className="text-gradient">{t.portals.titleHighlight}</span>
          </h2>
          <p className="text-body-lg max-w-[600px] mx-auto mt-4">{t.portals.subtitle}</p>
        </div>

        {/* Hero image */}
        <div className={`mb-16 reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
          <div className="rounded-2xl overflow-hidden" style={{ boxShadow: 'var(--shadow-image)' }}>
            <img
              src={sectionPortals}
              alt={t.portals.imgAlt}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {/* Two large cards */}
          {largeRoles.map((role, i) => {
            const Icon = roleIcons[role.icon] || Crown;
            return (
              <div
                key={i}
                className={`group relative p-8 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-500 reveal ${visible ? 'visible' : ''}`}
                style={{
                  transitionDelay: visible ? `${0.15 + i * 0.08}s` : '0s',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'var(--gradient-soft)' }}
                />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: 'var(--gradient-cta)' }}>
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">{role.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{role.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compact grid for remaining roles */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-16">
          {smallRoles.map((role, i) => {
            const Icon = roleIcons[role.icon] || Users;
            return (
              <div
                key={i}
                className={`group relative p-5 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-500 reveal ${visible ? 'visible' : ''}`}
                style={{
                  transitionDelay: visible ? `${0.3 + i * 0.05}s` : '0s',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'var(--gradient-soft)' }}
                />
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ background: 'var(--gradient-cta)' }}>
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h4 className="font-display text-sm font-bold text-foreground mb-1">{role.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{role.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Connected features strip */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.5s' }}>
          {t.portals.features.map((feat, i) => {
            const Icon = featureIcons[i];
            return (
              <div
                key={i}
                className="flex items-start gap-3 p-5 rounded-xl border border-border/50 bg-muted/30"
              >
                <div className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center bg-primary/10">
                  <Icon className="w-4.5 h-4.5 text-primary" />
                </div>
                <div>
                  <h5 className="font-display text-sm font-semibold text-foreground mb-0.5">{feat.title}</h5>
                  <p className="text-xs text-muted-foreground leading-relaxed">{feat.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UserPortals;
