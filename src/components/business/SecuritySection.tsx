import { ShieldCheck, Lock, Scale, Languages, Server, KeyRound } from 'lucide-react';

const T = {
  fr: { o: 'Sécurité des données', t: 'Vos données protégées, en toute confiance.', i: 'La sécurité est au cœur de la plateforme, dès la conception.', items: [
    ['Chiffrement de bout en bout', 'Toutes les données sont chiffrées, en transit et au repos.'],
    ['Conforme à la loi 09-08', 'Données personnelles protégées selon la loi marocaine et les exigences de la CNDP.'],
    ['Accès par rôle', 'Chaque utilisateur accède uniquement à ce qui le concerne.'],
    ['Sauvegardes sécurisées', 'Vos données sont sauvegardées et restent disponibles.'],
    ['Arabe et français', 'La plateforme est disponible en arabe et en français, pour toutes vos équipes.'],
  ] },
  en: { o: 'Data security', t: 'Your data, protected with confidence.', i: 'Security is built into the platform from the ground up.', items: [
    ['End-to-end encryption', 'All data is encrypted, in transit and at rest.'],
    ['Compliant with Law 09-08', 'Personal data protected under Moroccan law and CNDP requirements.'],
    ['Role-based access', 'Each user only sees what concerns them.'],
    ['Secure backups', 'Your data is backed up and always available.'],
    ['Arabic and French', 'The platform is available in Arabic and French for all your teams.'],
  ] },
  no: { o: 'Datasikkerhet', t: 'Dataene dine, trygt beskyttet.', i: 'Sikkerhet er bygget inn i plattformen fra starten.', items: [
    ['Ende-til-ende-kryptering', 'All data er kryptert, både under overføring og lagring.'],
    ['I tråd med lov 09-08', 'Personopplysninger beskyttes etter marokkansk lov og CNDPs krav.'],
    ['Rollebasert tilgang', 'Hver bruker ser kun det som gjelder dem.'],
    ['Sikre sikkerhetskopier', 'Dataene sikkerhetskopieres og er alltid tilgjengelige.'],
    ['Arabisk og fransk', 'Plattformen er tilgjengelig på arabisk og fransk for alle team.'],
  ] },
  ar: { o: 'أمن البيانات', t: 'بياناتكم محمية بكل ثقة.', i: 'الأمن في صميم المنصة منذ تصميمها.', items: [
    ['تشفير شامل', 'جميع البيانات مشفرة أثناء النقل والتخزين.'],
    ['مطابقة للقانون 09-08', 'حماية المعطيات الشخصية وفق القانون المغربي ومتطلبات اللجنة الوطنية CNDP.'],
    ['ولوج حسب الدور', 'كل مستخدم يصل فقط إلى ما يخصه.'],
    ['نسخ احتياطية آمنة', 'بياناتكم محفوظة ومتاحة دائمًا.'],
    ['العربية والفرنسية', 'المنصة متوفرة بالعربية والفرنسية لجميع فرقكم.'],
  ] },
};
const icons = [Lock, Scale, KeyRound, Server, Languages];

export default function SecuritySection({ lang }: { lang: string }) {
  const c = T[(lang in T ? lang : 'fr') as keyof typeof T];
  return (
    <section className="relative py-20 md:py-28 bg-[#0A0C24]">
      <div className="mx-auto max-w-[1180px] px-5 md:px-8">
        <div className="text-center max-w-[720px] mx-auto">
          <span className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] text-[#A76CFF]"><ShieldCheck className="w-4 h-4" />{c.o}</span>
          <h2 className="mt-4 font-display text-[30px] md:text-[44px] font-bold leading-tight text-white">{c.t}</h2>
          <p className="mt-4 text-[16px] text-[#B8B5C8]">{c.i}</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {c.items.map(([h, d], k) => {
            const I = icons[k];
            return (
              <div key={h} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur">
                <span className="grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#772F9F] to-[#A76CFF]"><I className="w-5 h-5 text-white" /></span>
                <p className="mt-4 font-semibold text-[15px] text-white">{h}</p>
                <p className="mt-1.5 text-[13px] leading-[1.6] text-[#B8B5C8]">{d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
