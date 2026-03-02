import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/i18n/LanguageContext';
import sectionPortals from '@/assets/section-portals.jpg';
import {
  Crown, GraduationCap, BookOpen, Heart, ClipboardList,
  Users, Wallet, Bus, Wrench, Server,
  Smartphone, MessageCircle, Calendar, UsersRound,
  Network,
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
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const roles = t.portals.roles;
  const totalRoles = roles.length;

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

        {/* Interactive Hub Diagram */}
        <div className={`reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
          {/* Desktop: circular layout */}
          <div className="hidden md:block">
            <div className="relative mx-auto" style={{ width: '600px', height: '600px' }}>
              {/* Orbit ring */}
              <div
                className="absolute inset-[60px] rounded-full border border-border/40"
                style={{ boxShadow: '0 0 40px hsla(var(--primary) / 0.05)' }}
              />

              {/* Central hub */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center border-2 border-primary/20 transition-all duration-500"
                  style={{ background: 'var(--gradient-cta)', boxShadow: '0 0 50px hsla(var(--primary) / 0.25)' }}
                >
                  <Network className="w-10 h-10 text-primary-foreground" />
                </div>
                {selectedIndex === null && (
                  <p className="absolute top-full mt-3 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-muted-foreground font-medium">
                    Cliquez sur un rôle
                  </p>
                )}
              </div>

              {/* Role nodes on the circle */}
              {roles.map((role, i) => {
                const Icon = roleIcons[role.icon] || Crown;
                const angle = (i / totalRoles) * 360 - 90; // start from top
                const rad = (angle * Math.PI) / 180;
                const radius = 240; // px from center
                const x = 300 + radius * Math.cos(rad);
                const y = 300 + radius * Math.sin(rad);
                const isSelected = selectedIndex === i;

                return (
                  <button
                    key={i}
                    onClick={() => setSelectedIndex(isSelected ? null : i)}
                    className={`absolute flex flex-col items-center gap-1.5 group transition-all duration-300 cursor-pointer`}
                    style={{
                      left: `${x}px`,
                      top: `${y}px`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    {/* Connector line */}
                    <svg
                      className="absolute pointer-events-none"
                      style={{
                        width: '600px',
                        height: '600px',
                        left: `${300 - x}px`,
                        top: `${300 - y}px`,
                      }}
                    >
                      <line
                        x1={x}
                        y1={y}
                        x2="300"
                        y2="300"
                        className={`transition-all duration-300 ${isSelected ? 'stroke-primary' : 'stroke-border/30'}`}
                        strokeWidth={isSelected ? 2 : 1}
                        strokeDasharray={isSelected ? 'none' : '4 4'}
                      />
                    </svg>

                    {/* Icon circle */}
                    <div
                      className={`relative z-10 w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                        isSelected
                          ? 'border-primary scale-110'
                          : 'border-border bg-card group-hover:border-primary/50 group-hover:scale-105'
                      }`}
                      style={isSelected ? { background: 'var(--gradient-cta)', boxShadow: '0 0 20px hsla(var(--primary) / 0.3)' } : { boxShadow: 'var(--shadow-card)' }}
                    >
                      <Icon className={`w-6 h-6 transition-colors duration-300 ${isSelected ? 'text-primary-foreground' : 'text-primary'}`} />
                    </div>

                    {/* Label */}
                    <span
                      className={`relative z-10 text-[11px] font-semibold leading-tight text-center max-w-[90px] transition-colors duration-300 ${
                        isSelected ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'
                      }`}
                    >
                      {role.title}
                    </span>
                  </button>
                );
              })}

              {/* Detail panel - shown inside the circle */}
              {selectedIndex !== null && (
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] text-center z-20 mt-16 animate-in fade-in-0 zoom-in-95 duration-300"
                >
                  <h4 className="font-display text-base font-bold text-foreground mb-1.5">
                    {roles[selectedIndex].title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {roles[selectedIndex].description}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Mobile: vertical list with expandable items */}
          <div className="md:hidden space-y-3">
            {/* Central hub icon */}
            <div className="flex justify-center mb-6">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: 'var(--gradient-cta)', boxShadow: '0 0 30px hsla(var(--primary) / 0.2)' }}
              >
                <Network className="w-7 h-7 text-primary-foreground" />
              </div>
            </div>

            {roles.map((role, i) => {
              const Icon = roleIcons[role.icon] || Crown;
              const isSelected = selectedIndex === i;

              return (
                <button
                  key={i}
                  onClick={() => setSelectedIndex(isSelected ? null : i)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                    isSelected
                      ? 'border-primary/40 bg-primary/5'
                      : 'border-border bg-card hover:border-primary/20'
                  }`}
                  style={{ boxShadow: isSelected ? '0 0 20px hsla(var(--primary) / 0.1)' : 'var(--shadow-card)' }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        isSelected ? '' : 'bg-primary/10'
                      }`}
                      style={isSelected ? { background: 'var(--gradient-cta)' } : {}}
                    >
                      <Icon className={`w-5 h-5 ${isSelected ? 'text-primary-foreground' : 'text-primary'}`} />
                    </div>
                    <span className={`font-display text-sm font-bold ${isSelected ? 'text-foreground' : 'text-foreground'}`}>
                      {role.title}
                    </span>
                  </div>
                  {isSelected && (
                    <p className="mt-3 pl-[52px] text-xs text-muted-foreground leading-relaxed animate-in fade-in-0 slide-in-from-top-1 duration-200">
                      {role.description}
                    </p>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Connected features strip */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.5s' }}>
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
