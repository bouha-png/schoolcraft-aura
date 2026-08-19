import { useState } from 'react';
import associationsModules from '@/i18n/associationsModules';
import ExpandableModuleCard from './ExpandableModuleCard';

const EcosystemSection = () => {
  const { section, modules, trust, trustCards } = associationsModules;
  const [openKey, setOpenKey] = useState<string | null>(null);
  const toggle = (key: string) => setOpenKey((prev) => (prev === key ? null : key));

  return (
    <section id="platform" className="bg-background">
      <div className="section-container section-padding">
        <div className="max-w-[760px]">
          <p className="text-overline">{section.overline}</p>
          <h2 className="text-section mt-5">
            {section.title1}
            <br />
            <span className="text-gradient">{section.title2}</span>
          </h2>
          {section.intro.map((p, i) => (
            <p key={i} className="text-body mt-4">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 items-start">
          {modules.map((m, i) => (
            <ExpandableModuleCard
              key={m.title}
              item={m}
              open={openKey === `m${i}`}
              onToggle={() => toggle(`m${i}`)}
              moreLabel={section.more}
              lessLabel={section.less}
            />
          ))}
        </div>
      </div>

      <div className="surface-alt border-y border-subtle">
        <div className="section-container py-20 md:py-28">
          <div className="max-w-[720px]">
            <h2 className="text-subsection">{trust.title}</h2>
            <p className="text-body mt-3">{trust.subtitle}</p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 md:gap-6">
            {trustCards.map((m, i) => (
              <ExpandableModuleCard
                key={m.title}
                item={m}
                variant="trust"
                open={openKey === `t${i}`}
                onToggle={() => toggle(`t${i}`)}
                moreLabel={section.more}
                lessLabel={section.less}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
