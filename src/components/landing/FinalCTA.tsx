import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Send, CheckCircle } from 'lucide-react';

const FinalCTA = () => {
  const { t } = useLanguage();
  const ct = t.contact;
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', school: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Demande de démo — ${form.school || form.name}\n\nNom: ${form.name}\nEmail: ${form.email}\nTéléphone: ${form.phone}\nÉtablissement: ${form.school}\n\nMessage:\n${form.message}`
    );
    const whatsappUrl = `https://wa.me/212614615816?text=${text}`;
    const openedWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    if (!openedWindow) {
      window.location.href = whatsappUrl;
    }

    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setForm({ name: '', email: '', phone: '', school: '', message: '' });
  };

  return (
    <section id="demo" className="section-padding bg-background relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, hsla(278, 40%, 94%, 0.6) 0%, transparent 50%)',
        }}
      />
      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <p className="text-overline mb-4">{t.finalCta.overline}</p>
          <h2 className="text-display mb-6">
            {t.finalCta.title} <span className="text-gradient">{t.finalCta.titleHighlight}</span>
          </h2>
          <p className="text-body-lg max-w-[500px] mx-auto">
            {t.finalCta.subtitle}
          </p>
        </div>

        <div className="max-w-[560px] mx-auto">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto" style={{ background: 'var(--gradient-soft)' }}>
                <CheckCircle className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-xl text-foreground">{ct.successTitle}</h3>
              <p className="text-muted-foreground">{ct.successMessage}</p>
              <button onClick={resetForm} className="text-sm text-primary hover:underline mt-2">
                {ct.submit === 'Envoyer' ? 'Envoyer un autre message' : 'إرسال رسالة أخرى'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-foreground/70 mb-1.5 block">{ct.name} *</label>
                  <input
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full h-11 px-4 rounded-xl border border-border/60 bg-background text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
                    placeholder={ct.namePlaceholder}
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-foreground/70 mb-1.5 block">{ct.phone}</label>
                  <input
                    type="tel"
                    maxLength={20}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full h-11 px-4 rounded-xl border border-border/60 bg-background text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
                    placeholder={ct.phonePlaceholder}
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-foreground/70 mb-1.5 block">{ct.email} *</label>
                <input
                  required
                  type="email"
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full h-11 px-4 rounded-xl border border-border/60 bg-background text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
                  placeholder={ct.emailPlaceholder}
                />
              </div>
              <div>
                <label className="text-xs font-medium text-foreground/70 mb-1.5 block">{ct.school}</label>
                <input
                  maxLength={150}
                  value={form.school}
                  onChange={(e) => setForm({ ...form, school: e.target.value })}
                  className="w-full h-11 px-4 rounded-xl border border-border/60 bg-background text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
                  placeholder={ct.schoolPlaceholder}
                />
              </div>
              <div>
                <label className="text-xs font-medium text-foreground/70 mb-1.5 block">{ct.message}</label>
                <textarea
                  maxLength={1000}
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border/60 bg-background text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all resize-none"
                  placeholder={ct.messagePlaceholder}
                />
              </div>
              <button
                type="submit"
                className="w-full h-12 rounded-xl text-sm font-semibold text-primary-foreground flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90 cursor-pointer"
                style={{ background: 'var(--gradient-cta)', boxShadow: '0 2px 10px rgba(119,47,159,0.2)' }}
              >
                <Send className="w-4 h-4" />
                {ct.submit}
              </button>
            </form>
          )}

          <p className="mt-8 text-center">
            <a href="mailto:contact@scanditek.ma" className="text-caption hover:text-primary transition-colors">
              contact@scanditek.ma
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
