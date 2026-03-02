import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/i18n/LanguageContext';
import sectionPortals from '@/assets/section-portals.jpg';
import {
  Crown, GraduationCap, BookOpen, Heart, ClipboardList,
  Users, Wallet, Bus, Wrench, Server,
  Smartphone, MessageCircle, Calendar, UsersRound,
  Network, ChevronDown,
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

// Indices in the roles array that get their own node
const STANDALONE_INDICES = [0, 1, 2, 3, 7]; // Direction, Enseignants, Élèves, Parents, Transport
// Indices grouped as "Personnel"
const STAFF_INDICES = [4, 5, 6, 8, 9]; // Admin, RH, Finance, Services, DSI

type HubNode = {
  type: 'single';
  roleIndex: number;
} | {
  type: 'group';
  label: string;
  roleIndices: number[];
};

const UserPortals = () => {
  const { ref, visible } = useScrollReveal();
  const { t } = useLanguage();
  const [selectedNode, setSelectedNode] = useState<number | null>(null);
  const [expandedStaff, setExpandedStaff] = useState(false);

  const roles = t.portals.roles;

  const hubNodes: HubNode[] = [
    { type: 'single', roleIndex: 0 },  // Direction
    { type: 'single', roleIndex: 1 },  // Enseignants
    { type: 'single', roleIndex: 2 },  // Élèves
    { type: 'group', label: 'Personnel', roleIndices: STAFF_INDICES },
    { type: 'single', roleIndex: 3 },  // Parents
    { type: 'single', roleIndex: 7 },  // Transport
  ];

  const totalNodes = hubNodes.length;

  const getNodeIcon = (node: HubNode): React.ElementType => {
    if (node.type === 'single') return roleIcons[roles[node.roleIndex].icon] || Crown;
    return Users;
  };

  const getNodeTitle = (node: HubNode): string => {
    if (node.type === 'single') return roles[node.roleIndex].title;
    return node.label;
  };

  const getNodeDescription = (node: HubNode): string | null => {
    if (node.type === 'single') return roles[node.roleIndex].description;
    return null;
  };

  return (
    <section id="portals" className="section-padding bg-background relative overflow-hidden">
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

        {/* ===== DESKTOP HUB ===== */}
        <div className={`hidden md:block reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
          <div className="relative mx-auto" style={{ width: '680px', height: '680px' }}>
            {/* Orbit ring */}
            <div className="absolute inset-[80px] rounded-full border border-border/30" />
            <div className="absolute inset-[82px] rounded-full border border-border/10" />

            {/* Central hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div
                className="w-28 h-28 rounded-full flex items-center justify-center border-2 border-primary/20"
                style={{
                  background: 'var(--gradient-cta)',
                  boxShadow: '0 0 60px hsla(var(--primary) / 0.2), 0 0 120px hsla(var(--primary) / 0.08)',
                }}
              >
                <Network className="w-12 h-12 text-primary-foreground" />
              </div>
            </div>

            {/* Detail panel in center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
              style={{ marginTop: '76px', width: '240px' }}
            >
              {selectedNode !== null && (
                <div className="text-center animate-in fade-in-0 zoom-in-95 duration-300">
                  {hubNodes[selectedNode].type === 'single' ? (
                    <>
                      <h4 className="font-display text-base font-bold text-foreground mb-1.5">
                        {getNodeTitle(hubNodes[selectedNode])}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {getNodeDescription(hubNodes[selectedNode])}
                      </p>
                    </>
                  ) : (
                    <div className="space-y-1.5">
                      {(hubNodes[selectedNode] as { type: 'group'; label: string; roleIndices: number[] }).roleIndices.map((ri) => {
                        const Icon = roleIcons[roles[ri].icon] || Users;
                        return (
                          <div key={ri} className="flex items-center gap-2 text-left pointer-events-auto">
                            <Icon className="w-3.5 h-3.5 text-primary shrink-0" />
                            <span className="text-xs text-foreground font-medium">{roles[ri].title}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
              {selectedNode === null && (
                <p className="text-center text-xs text-muted-foreground/60 font-medium animate-pulse">
                  Cliquez sur un rôle
                </p>
              )}
            </div>

            {/* Nodes */}
            {hubNodes.map((node, i) => {
              const Icon = getNodeIcon(node);
              const angle = (i / totalNodes) * 360 - 90;
              const rad = (angle * Math.PI) / 180;
              const radius = 260;
              const cx = 340, cy = 340;
              const x = cx + radius * Math.cos(rad);
              const y = cy + radius * Math.sin(rad);
              const isSelected = selectedNode === i;
              const isGroup = node.type === 'group';

              return (
                <button
                  key={i}
                  onClick={() => setSelectedNode(isSelected ? null : i)}
                  className="absolute flex flex-col items-center gap-2 group transition-all duration-300 cursor-pointer"
                  style={{ left: `${x}px`, top: `${y}px`, transform: 'translate(-50%, -50%)' }}
                >
                  {/* Connector line */}
                  <svg className="absolute pointer-events-none" style={{ width: '680px', height: '680px', left: `${cx - x}px`, top: `${cy - y}px` }}>
                    <line
                      x1={x} y1={y} x2={cx} y2={cy}
                      className={`transition-all duration-500 ${isSelected ? 'stroke-primary' : 'stroke-border/25'}`}
                      strokeWidth={isSelected ? 2.5 : 1}
                      strokeDasharray={isSelected ? 'none' : '6 4'}
                    />
                  </svg>

                  {/* Person silhouette bg for emphasis */}
                  <div className="relative z-10">
                    {/* Outer glow on selection */}
                    {isSelected && (
                      <div
                        className="absolute -inset-2 rounded-full animate-in fade-in-0 duration-500"
                        style={{ background: 'hsla(var(--primary) / 0.12)', filter: 'blur(8px)' }}
                      />
                    )}
                    <div
                      className={`relative w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                        isSelected
                          ? 'border-primary scale-110'
                          : 'border-border bg-card group-hover:border-primary/40 group-hover:scale-105'
                      }`}
                      style={isSelected
                        ? { background: 'var(--gradient-cta)', boxShadow: '0 4px 24px hsla(var(--primary) / 0.3)' }
                        : { boxShadow: '0 2px 12px hsla(0 0% 0% / 0.06)' }
                      }
                    >
                      <Icon className={`w-7 h-7 transition-colors duration-300 ${isSelected ? 'text-primary-foreground' : 'text-primary'}`} />
                      {isGroup && (
                        <span className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-accent text-accent-foreground text-[10px] font-bold flex items-center justify-center border border-background">
                          {(node as { roleIndices: number[] }).roleIndices.length}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Label */}
                  <span className={`relative z-10 text-xs font-semibold leading-tight text-center max-w-[100px] transition-colors duration-300 ${
                    isSelected ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'
                  }`}>
                    {getNodeTitle(node)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ===== MOBILE ===== */}
        <div className={`md:hidden reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
          {/* Central hub */}
          <div className="flex justify-center mb-8">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ background: 'var(--gradient-cta)', boxShadow: '0 0 30px hsla(var(--primary) / 0.2)' }}
            >
              <Network className="w-7 h-7 text-primary-foreground" />
            </div>
          </div>

          <div className="space-y-2.5">
            {/* Standalone roles */}
            {STANDALONE_INDICES.map((ri) => {
              const role = roles[ri];
              const Icon = roleIcons[role.icon] || Crown;
              const isSelected = selectedNode === ri + 100; // offset to avoid collision

              return (
                <button
                  key={ri}
                  onClick={() => setSelectedNode(isSelected ? null : ri + 100)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                    isSelected ? 'border-primary/40 bg-primary/5' : 'border-border bg-card'
                  }`}
                  style={{ boxShadow: isSelected ? '0 0 20px hsla(var(--primary) / 0.1)' : '0 1px 4px hsla(0 0% 0% / 0.04)' }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`shrink-0 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300`}
                      style={isSelected ? { background: 'var(--gradient-cta)' } : { background: 'hsla(var(--primary) / 0.1)' }}
                    >
                      <Icon className={`w-5 h-5 ${isSelected ? 'text-primary-foreground' : 'text-primary'}`} />
                    </div>
                    <span className="font-display text-sm font-bold text-foreground">{role.title}</span>
                  </div>
                  {isSelected && (
                    <p className="mt-3 pl-14 text-xs text-muted-foreground leading-relaxed animate-in fade-in-0 slide-in-from-top-1 duration-200">
                      {role.description}
                    </p>
                  )}
                </button>
              );
            })}

            {/* Staff group */}
            <div
              className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                expandedStaff ? 'border-primary/40 bg-primary/5' : 'border-border bg-card'
              }`}
              style={{ boxShadow: expandedStaff ? '0 0 20px hsla(var(--primary) / 0.1)' : '0 1px 4px hsla(0 0% 0% / 0.04)' }}
            >
              <button
                onClick={() => setExpandedStaff(!expandedStaff)}
                className="w-full text-left p-4 flex items-center gap-3"
              >
                <div
                  className="shrink-0 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300"
                  style={expandedStaff ? { background: 'var(--gradient-cta)' } : { background: 'hsla(var(--primary) / 0.1)' }}
                >
                  <Users className={`w-5 h-5 ${expandedStaff ? 'text-primary-foreground' : 'text-primary'}`} />
                </div>
                <span className="font-display text-sm font-bold text-foreground flex-1">Personnel</span>
                <span className="text-[10px] font-bold text-muted-foreground bg-muted rounded-full w-5 h-5 flex items-center justify-center mr-1">
                  {STAFF_INDICES.length}
                </span>
                <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${expandedStaff ? 'rotate-180' : ''}`} />
              </button>

              {expandedStaff && (
                <div className="px-4 pb-4 space-y-2 animate-in fade-in-0 slide-in-from-top-2 duration-200">
                  {STAFF_INDICES.map((ri) => {
                    const role = roles[ri];
                    const Icon = roleIcons[role.icon] || Users;
                    return (
                      <div key={ri} className="flex items-start gap-3 pl-3 py-2 rounded-lg bg-background/60">
                        <Icon className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <div>
                          <p className="text-xs font-semibold text-foreground">{role.title}</p>
                          <p className="text-[11px] text-muted-foreground leading-relaxed">{role.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Connected features strip */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.5s' }}>
          {t.portals.features.map((feat, i) => {
            const Icon = featureIcons[i];
            return (
              <div key={i} className="flex items-start gap-3 p-5 rounded-xl border border-border/50 bg-muted/30">
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
