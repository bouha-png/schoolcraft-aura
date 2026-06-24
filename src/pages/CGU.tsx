import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';

const CGU = () => {
  useEffect(() => {
    document.title = "Conditions Générales d'Utilisation — Synapse (Scanditek)";
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#1d2533]">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 py-10 sm:py-14">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-[#1f5fbf] hover:underline mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Retour à l'accueil
        </Link>

        <div className="border-b border-[#e6e9ef] pb-6 mb-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-[#1f5fbf] text-white font-bold flex items-center justify-center">
              S
            </div>
            <div className="font-semibold">
              Synapse <span className="text-[#5b6573] font-normal">par Scanditek</span>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-2">
            Conditions Générales d'Utilisation
          </h1>
          <p className="text-sm text-[#5b6573] mb-4">Dernière mise à jour : 21 juin 2026</p>
          <p className="leading-relaxed">
            Les présentes Conditions Générales d'Utilisation (ci-après « <strong>CGU</strong> ») régissent
            l'utilisation de la plateforme et des applications mobiles <strong>Synapse</strong> (ci-après «{' '}
            <strong>l'Application</strong> » ou « <strong>la Plateforme</strong> »), éditée et exploitée par la
            société <strong>Scanditek</strong> (ci-après « <strong>Scanditek</strong> » ou «{' '}
            <strong>nous</strong> »), sise à Technopark, Casablanca, Maroc.
          </p>
          <p className="leading-relaxed mt-3">
            Synapse est une plateforme SaaS de gestion scolaire mise à disposition des établissements scolaires.
            L'Application est destinée à différentes catégories d'utilisateurs :{' '}
            <strong>administrateurs, enseignants, élèves et personnel de l'établissement</strong>.
          </p>
          <p className="leading-relaxed mt-3">
            En accédant à ou en utilisant l'Application, vous acceptez sans réserve les présentes CGU, la{' '}
            <Link to="/confidentialite" className="text-[#1f5fbf] hover:underline">
              Politique de confidentialité
            </Link>{' '}
            ainsi que, le cas échéant, le règlement intérieur applicable à l'établissement scolaire concerné. Si
            vous n'acceptez pas ces conditions, veuillez ne pas utiliser l'Application.
          </p>
        </div>

        <article className="prose-legal">
          <h2 id="s1">1. Objet de l'Application</h2>
          <p>
            Synapse est une solution de gestion scolaire permettant, selon les fonctionnalités activées par
            l'établissement et le profil de l'utilisateur, de :
          </p>
          <ul>
            <li>consulter et gérer les informations scolaires des élèves ;</li>
            <li>assurer le suivi pédagogique et administratif (notes, présences, devoirs, emplois du temps, bulletins) ;</li>
            <li>communiquer entre l'établissement, le personnel, les enseignants et les élèves ;</li>
            <li>accéder à certains services scolaires (transport, facturation, notifications, ressources pédagogiques).</li>
          </ul>
          <p>Les fonctionnalités disponibles dépendent de l'établissement scolaire et du rôle attribué à chaque utilisateur.</p>

          <h2 id="s2">2. Accès et Comptes Utilisateurs</h2>
          <ul>
            <li>L'accès à l'Application est réservé aux utilisateurs autorisés par l'établissement scolaire (administrateurs, enseignants, élèves et personnel).</li>
            <li>Les comptes et identifiants sont créés ou validés par l'établissement scolaire et/ou l'administrateur de la Plateforme.</li>
            <li>Les identifiants de connexion sont <strong>personnels et confidentiels</strong>. Vous êtes responsable de leur protection et de toute utilisation effectuée avec votre compte.</li>
            <li>Vous vous engagez à fournir des informations exactes et à les maintenir à jour.</li>
            <li>Vous devez informer sans délai l'établissement ou Scanditek de toute utilisation non autorisée ou compromission de votre compte.</li>
          </ul>

          <h2 id="s3">3. Rôles et Niveaux d'Accès</h2>
          <p>
            L'Application repose sur un système d'accès basé sur les rôles. Chaque utilisateur n'accède qu'aux
            données et fonctionnalités correspondant à son profil :
          </p>
          <ul>
            <li><strong>Administrateur</strong> : gestion de l'établissement, des utilisateurs, des paramètres, des données scolaires et administratives.</li>
            <li><strong>Enseignant</strong> : gestion pédagogique des classes (notes, présences, devoirs, communication avec les élèves).</li>
            <li><strong>Élève</strong> : consultation de ses informations scolaires, emplois du temps, devoirs et communications autorisées.</li>
            <li><strong>Personnel (staff)</strong> : accès aux fonctionnalités administratives ou opérationnelles définies par l'établissement, y compris, le cas échéant, la gestion et le suivi du transport scolaire.</li>
          </ul>
          <p>Toute tentative d'accès à des données ou fonctionnalités non autorisées est strictement interdite.</p>

          <h2 id="s4">4. Règles d'Utilisation</h2>
          <p>
            Vous vous engagez à utiliser l'Application de manière responsable et uniquement à des fins scolaires
            et professionnelles légitimes. Il est strictement interdit de :
          </p>
          <ul>
            <li>tenter d'accéder à des données ou des comptes non autorisés ;</li>
            <li>partager des informations scolaires, des données personnelles ou des accès avec des tiers non autorisés ;</li>
            <li>perturber, contourner ou compromettre le fonctionnement ou la sécurité de l'Application ;</li>
            <li>diffuser des contenus illicites, offensants, diffamatoires ou préjudiciables ;</li>
            <li>utiliser l'Application à des fins commerciales, frauduleuses ou contraires à la loi ;</li>
            <li>extraire, copier ou réutiliser massivement les données de la Plateforme.</li>
          </ul>

          <h2 id="s5">5. Contenus et Services Scolaires</h2>
          <p>
            Les informations et services disponibles dans l'Application dépendent des fonctionnalités activées
            par l'établissement scolaire.{' '}
            <strong>L'établissement demeure seul responsable du contenu pédagogique et administratif</strong>{' '}
            affiché dans l'Application (notes, communications, documents, facturation, etc.). Scanditek agit en
            qualité de fournisseur technique de la Plateforme et de sous-traitant des données pour le compte de
            l'établissement.
          </p>

          <h2 id="s6">6. Service de Transport et Suivi (si activé)</h2>
          <p>Lorsque l'établissement propose le service de transport scolaire :</p>
          <ul>
            <li>l'Application peut afficher les adresses de prise en charge et de l'école, les itinéraires et la position du bus en temps réel ou quasi temps réel ;</li>
            <li>le suivi est fourni <strong>exclusivement à des fins de sécurité et d'organisation</strong> ;</li>
            <li>le suivi est <strong>limité aux horaires de transport scolaire</strong> ;</li>
            <li><strong>aucune géolocalisation continue ou en arrière-plan</strong> de l'élève n'est effectuée ;</li>
            <li>le personnel autorisé utilise les fonctionnalités de transport uniquement dans le cadre de leur mission et s'engage à respecter les règles de sécurité applicables.</li>
          </ul>

          <h2 id="s7">7. Facturation et Paiements</h2>
          <ul>
            <li>L'Application peut afficher les factures, les montants dus et le statut des paiements.</li>
            <li>Les paiements sont traités par des <strong>prestataires de paiement certifiés</strong>.</li>
            <li>Les <strong>données bancaires ne sont jamais stockées</strong> par l'Application.</li>
            <li>Les conditions de facturation, de remboursement et de frais relèvent de la politique de l'établissement scolaire et de la législation applicable.</li>
          </ul>

          <h2 id="s8">8. Propriété Intellectuelle</h2>
          <p>
            L'Application, son contenu, ses fonctionnalités, sa marque et tous les éléments associés sont
            protégés par les lois relatives à la propriété intellectuelle et demeurent la propriété exclusive de
            Scanditek ou de ses concédants. Vous bénéficiez d'un droit d'utilisation{' '}
            <strong>personnel, non exclusif et non transférable</strong>, strictement limité à un usage scolaire
            ou professionnel autorisé. Toute reproduction, modification ou distribution non autorisée est
            interdite.
          </p>

          <h2 id="s9">9. Disponibilité et Évolution de l'Application</h2>
          <ul>
            <li>L'Application est fournie « <strong>en l'état</strong> » et « selon disponibilité ».</li>
            <li>Des interruptions temporaires peuvent survenir pour maintenance, mises à jour ou raisons techniques.</li>
            <li>Scanditek se réserve le droit de modifier, suspendre ou supprimer certaines fonctionnalités afin d'améliorer le service ou de se conformer aux obligations légales.</li>
          </ul>

          <h2 id="s10">10. Données Personnelles</h2>
          <p>
            Le traitement des données personnelles est effectué conformément à la <strong>loi n° 09-08</strong>{' '}
            relative à la protection des personnes physiques à l'égard du traitement des données à caractère
            personnel (CNDP – Maroc) et au <strong>Règlement Général sur la Protection des Données (RGPD)</strong>,
            lorsque applicable. Les modalités complètes sont détaillées dans la{' '}
            <Link to="/confidentialite" className="text-[#1f5fbf] hover:underline">
              Politique de confidentialité – Synapse
            </Link>
            .
          </p>

          <h2 id="s11">11. Protection des Mineurs</h2>
          <p>
            L'Application traite des données relatives à des élèves susceptibles d'être mineurs. Ces données sont
            traitées exclusivement dans le cadre scolaire, sous la responsabilité de l'établissement et, le cas
            échéant, avec le consentement des représentants légaux recueilli par l'établissement. Scanditek ne
            réalise aucune publicité ciblée ni profilage commercial à l'égard des élèves. Les comptes des élèves
            sont créés et supervisés par l'établissement.
          </p>

          <h2 id="s12">12. Suspension ou Résiliation</h2>
          <p>L'accès à l'Application peut être suspendu ou résilié :</p>
          <ul>
            <li>à la demande de l'établissement scolaire ;</li>
            <li>en cas de non-respect des présentes CGU ;</li>
            <li>pour des raisons légales, de sécurité ou techniques.</li>
          </ul>
          <p>
            À la fin de la relation contractuelle entre l'établissement et Scanditek, l'accès aux comptes
            associés peut être désactivé conformément à la Politique de confidentialité et aux obligations de
            conservation applicables.
          </p>

          <h2 id="s13">13. Limitation de Responsabilité</h2>
          <p>Dans les limites autorisées par la loi :</p>
          <ul>
            <li>Scanditek ne saurait être tenue responsable des <strong>dommages indirects</strong> (perte de données, perte d'exploitation, préjudice commercial, etc.) ;</li>
            <li>Scanditek n'est pas responsable des <strong>décisions prises par l'établissement</strong> sur la base des informations affichées dans l'Application ;</li>
            <li>Scanditek ne garantit pas que l'Application sera exempte d'erreurs ou disponible sans interruption.</li>
          </ul>

          <h2 id="s14">14. Modification des CGU</h2>
          <p>
            Scanditek se réserve le droit de modifier les présentes CGU à tout moment. Les utilisateurs seront
            informés des modifications substantielles par tout moyen approprié (notification dans l'Application,
            courriel). La poursuite de l'utilisation de l'Application après l'entrée en vigueur des modifications
            vaut acceptation des nouvelles CGU.
          </p>

          <h2 id="s15">15. Droit Applicable</h2>
          <p>
            Les présentes CGU sont régies par le droit applicable dans le pays d'établissement de l'école, et à
            défaut par le droit marocain, sous réserve des dispositions impératives de protection des
            consommateurs.
          </p>

          <h2 id="s16">16. Contact</h2>
          <div className="bg-[#f5f7fa] border border-[#e6e9ef] rounded-lg p-4 my-4">
            <p className="m-0">Pour toute question relative aux présentes Conditions Générales d'Utilisation :</p>
            <p className="mt-2 mb-0">
              <strong>Email :</strong>{' '}
              <a className="text-[#1f5fbf]" href="mailto:contact@scanditek.ma">
                contact@scanditek.ma
              </a>
              <br />
              <strong>Société :</strong> Scanditek
              <br />
              <strong>Adresse :</strong> Technopark, Casablanca, Maroc
            </p>
          </div>
        </article>

        <footer className="mt-12 pt-6 border-t border-[#e6e9ef] text-sm text-[#5b6573]">
          <p>
            © 2026 Scanditek — Technopark, Casablanca, Maroc. Synapse est une plateforme éditée par Scanditek.
            Tous droits réservés.
          </p>
          <p className="mt-2">
            <Link to="/confidentialite" className="text-[#1f5fbf] hover:underline">
              Voir la Politique de Confidentialité
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default CGU;
