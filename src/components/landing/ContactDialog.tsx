import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useLanguage } from '@/i18n/LanguageContext';
import { Send, CheckCircle } from 'lucide-react';

interface ContactDialogProps {
  children: React.ReactNode;
}

const ContactDialog = ({ children }: ContactDialogProps) => {
  const { t } = useLanguage();
  const ct = t.contact;
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', school: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate with backend
    setSubmitted(true);
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: '', email: '', phone: '', school: '', message: '' });
      }, 300);
    }
  };

  return (
    <Dialog onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[480px] p-0 gap-0 overflow-hidden border-border/50">
        {/* Header */}
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle className="font-display text-xl font-bold text-foreground">
            {ct.title}
          </DialogTitle>
          <p className="text-sm text-muted-foreground mt-1">{ct.subtitle}</p>
        </DialogHeader>

        {submitted ? (
          <div className="px-6 pb-8 pt-4 flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'var(--gradient-soft)' }}>
              <CheckCircle className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-lg text-foreground">{ct.successTitle}</h3>
            <p className="text-sm text-muted-foreground">{ct.successMessage}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 pb-6 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-medium text-foreground/70 mb-1 block">{ct.name} *</label>
                <input
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full h-10 px-3 rounded-lg border border-border/60 bg-background text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
                  placeholder={ct.namePlaceholder}
                />
              </div>
              <div>
                <label className="text-xs font-medium text-foreground/70 mb-1 block">{ct.phone}</label>
                <input
                  type="tel"
                  maxLength={20}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full h-10 px-3 rounded-lg border border-border/60 bg-background text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
                  placeholder={ct.phonePlaceholder}
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-foreground/70 mb-1 block">{ct.email} *</label>
              <input
                required
                type="email"
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full h-10 px-3 rounded-lg border border-border/60 bg-background text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
                placeholder={ct.emailPlaceholder}
              />
            </div>
            <div>
              <label className="text-xs font-medium text-foreground/70 mb-1 block">{ct.school}</label>
              <input
                maxLength={150}
                value={form.school}
                onChange={(e) => setForm({ ...form, school: e.target.value })}
                className="w-full h-10 px-3 rounded-lg border border-border/60 bg-background text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
                placeholder={ct.schoolPlaceholder}
              />
            </div>
            <div>
              <label className="text-xs font-medium text-foreground/70 mb-1 block">{ct.message}</label>
              <textarea
                maxLength={1000}
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-border/60 bg-background text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all resize-none"
                placeholder={ct.messagePlaceholder}
              />
            </div>
            <button
              type="submit"
              className="w-full h-11 rounded-xl text-sm font-semibold text-primary-foreground flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90 mt-1"
              style={{ background: 'var(--gradient-cta)', boxShadow: '0 2px 10px rgba(119,47,159,0.2)' }}
            >
              <Send className="w-4 h-4" />
              {ct.submit}
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
