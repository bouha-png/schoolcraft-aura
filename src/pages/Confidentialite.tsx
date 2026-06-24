import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';

const Confidentialite = () => {
  useEffect(() => {
    document.title = 'Politique de Confidentialité — Synapse (Scanditek)';
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
            Politique de Confidentialité
          </h1>
          <p className="text-sm text-[#5b6573] mb-4">Dernière mise à jour : 21 juin 2026</p>
          <p className="leading-relaxed">
            La présente Politique de confidentialité décrit comment la plateforme et les applications mobiles{' '}
            <strong>Synapse</strong> (ci-après « <strong>l'Application</strong> » ou «{' '}
            <strong>la Plateforme</strong> »), éditées et exploitées par la société{' '}
            <strong>Scanditek</strong> (ci-après « <strong>Scanditek</strong> » ou « <strong>nous</strong> »),
            sise à Technopark, Casablanca, Maroc, collectent, utilisent, partagent et protègent les données à
            caractère personnel des utilisateurs : <strong>administrateurs, enseignants, élèves et personnel</strong>{' '}
            des établissements scolaires.
          </p>
          <p className="leading-relaxed mt-3">
            Le traitement des données est effectué conformément à la <strong>loi n° 09-08</strong> relative à la
            protection des personnes physiques à l'égard du traitement des données à caractère personnel (CNDP –
            Maroc) et au <strong>Règlement Général sur la Protection des Données (RGPD)</strong> lorsqu'il est
            applicable.
          </p>
        </div>

        <article className="prose-legal">
          <h2 id="s1">1. Responsable du traitement et rôles</h2>
          <ul>
            <li>
              L'<strong>établissement scolaire</strong> est le <strong>responsable du traitement</strong> des
              données scolaires de ses utilisateurs. Il détermine les finalités et les moyens du traitement.
            </li>
            <li>
              <strong>Scanditek</strong>, éditeur de la plateforme Synapse, agit en qualité de{' '}
              <strong>sous-traitant</strong>, traitant les données pour le compte et sur instruction de
              l'établissement, dans le cadre de la fourniture de la Plateforme.
            </li>
          </ul>
          <p>
            Pour toute question concernant l'usage de vos données par un établissement, veuillez contacter
            directement cet établissement. Pour les questions techniques relatives à la Plateforme, vous pouvez
            contacter Scanditek (voir section Contact).
          </p>

          <h2 id="s2">2. Données collectées</h2>
          <p>
            Les données collectées varient selon le rôle de l'utilisateur et les fonctionnalités activées par
            l'établissement :
          </p>
          <h3>Données d'identification et de compte</h3>
          <p>
            Nom, prénom, identifiant, adresse e-mail, numéro de téléphone, photo de profil (le cas échéant),
            rôle/profil, établissement de rattachement.
          </p>
          <h3>Données scolaires (élèves)</h3>
          <p>
            Classe, niveau, notes, présences/absences, devoirs, emplois du temps, bulletins, observations
            pédagogiques.
          </p>
          <h3>Données de transport (si activé)</h3>
          <p>
            Adresse de prise en charge, adresse de l'école, point de prise en charge, itinéraire, et position du
            bus pendant les horaires de transport.
          </p>
          <h3>Données de facturation</h3>
          <p>
            Factures, montants dus, statut des paiements. <strong>Les données bancaires ne sont pas stockées par
            l'Application</strong> ; elles sont traitées par des prestataires de paiement certifiés.
          </p>
          <h3>Données techniques</h3>
          <p>
            Type d'appareil, système d'exploitation, identifiants techniques, journaux de connexion, données
            d'utilisation, jetons de notification push.
          </p>

          <h2 id="s3">3. Finalités du traitement</h2>
          <p>Les données sont traitées pour :</p>
          <ul>
            <li>créer et gérer les comptes et les accès basés sur les rôles ;</li>
            <li>fournir les services de suivi pédagogique et administratif ;</li>
            <li>permettre la communication entre l'établissement, le personnel, les enseignants et les élèves ;</li>
            <li>assurer le service de transport scolaire et la sécurité des élèves (si activé) ;</li>
            <li>gérer la facturation et les paiements ;</li>
            <li>envoyer des notifications relatives à la scolarité ;</li>
            <li>assurer la sécurité, la maintenance et l'amélioration de la Plateforme ;</li>
            <li>respecter les obligations légales et réglementaires.</li>
          </ul>

          <h2 id="s4">4. Base légale du traitement</h2>
          <p>Selon les cas, le traitement repose sur :</p>
          <ul>
            <li>
              l'<strong>exécution d'un contrat</strong> ou de mesures précontractuelles (relation école–utilisateur) ;
            </li>
            <li>
              le <strong>consentement</strong> de la personne concernée ou de son représentant légal, notamment
              pour certaines fonctionnalités optionnelles ;
            </li>
            <li>
              l'<strong>intérêt légitime</strong> de l'établissement et de Scanditek (sécurité, amélioration du
              service) ;
            </li>
            <li>le respect d'une <strong>obligation légale</strong>.</li>
          </ul>

          <h2 id="s5">5. Géolocalisation et service de transport</h2>
          <p>Lorsque le service de transport est activé :</p>
          <ul>
            <li>
              la position du bus peut être affichée en temps réel ou quasi temps réel{' '}
              <strong>uniquement pendant les horaires de transport scolaire</strong> ;
            </li>
            <li>
              la géolocalisation est utilisée{' '}
              <strong>exclusivement à des fins de sécurité et d'organisation</strong> ;
            </li>
            <li>
              <strong>aucune géolocalisation continue ou en arrière-plan</strong> de l'élève n'est effectuée ;
            </li>
            <li>les données de localisation ne sont pas utilisées à des fins publicitaires.</li>
          </ul>

          <h2 id="s6">6. Paiements</h2>
          <p>
            L'Application peut afficher les factures et le statut des paiements. Les transactions de paiement
            sont traitées par des <strong>prestataires de paiement certifiés</strong> disposant de leurs propres
            mesures de sécurité. <strong>Scanditek ne stocke aucune donnée bancaire</strong> (numéros de carte,
            codes de sécurité).
          </p>

          <h2 id="s7">7. Données des mineurs (élèves)</h2>
          <p>
            L'Application traite des données relatives à des élèves susceptibles d'être mineurs,{' '}
            <strong>exclusivement à des fins scolaires</strong> et sous la responsabilité de l'établissement. À
            cet égard :
          </p>
          <ul>
            <li>les comptes des élèves sont créés et supervisés par l'établissement ;</li>
            <li>
              Scanditek ne réalise{' '}
              <strong>aucune publicité ciblée, profilage commercial ou vente</strong> des données des élèves ;
            </li>
            <li>le consentement des représentants légaux est recueilli par l'établissement lorsque la loi l'exige ;</li>
            <li>les données des mineurs bénéficient de mesures de protection renforcées.</li>
          </ul>

          <h2 id="s8">8. Partage des données et sous-traitants</h2>
          <p>Les données peuvent être partagées avec :</p>
          <ul>
            <li>l'<strong>établissement scolaire</strong> responsable du traitement ;</li>
            <li>
              les <strong>utilisateurs autorisés</strong> dans le cadre de leur rôle (ex. : un enseignant accède
              aux données de ses classes) ;
            </li>
            <li>
              des <strong>prestataires techniques</strong> (hébergement, infrastructure cloud, services de
              notification, prestataires de paiement) agissant en qualité de sous-traitants, soumis à des
              obligations de confidentialité et de sécurité ;
            </li>
            <li>les <strong>autorités compétentes</strong> lorsque la loi l'exige.</li>
          </ul>
          <p>
            Les données ne sont <strong>jamais vendues</strong> à des tiers.
          </p>

          <h2 id="s9">9. Transferts internationaux</h2>
          <p>
            Lorsque des données sont hébergées ou traitées en dehors du pays de l'établissement, Scanditek met en
            œuvre les garanties appropriées (clauses contractuelles, mesures de sécurité) conformément à la loi
            09-08 et au RGPD applicables.
          </p>

          <h2 id="s10">10. Durée de conservation</h2>
          <p>Les données sont conservées :</p>
          <ul>
            <li>pendant la durée de la relation entre l'établissement et l'utilisateur, et tant que le compte est actif ;</li>
            <li>pendant les durées légales de conservation applicables (obligations comptables, scolaires, etc.) ;</li>
            <li>
              puis supprimées ou anonymisées à l'expiration de ces durées ou sur instruction de l'établissement
              responsable du traitement.
            </li>
          </ul>

          <h2 id="s11">11. Sécurité des données</h2>
          <p>
            Scanditek met en œuvre des mesures techniques et organisationnelles appropriées pour protéger les
            données contre l'accès non autorisé, la perte, l'altération ou la divulgation : chiffrement des
            données en transit, contrôle d'accès basé sur les rôles, journalisation, sauvegardes et hébergement
            sécurisé.
          </p>

          <h2 id="s12">12. Permissions de l'application</h2>
          <p>
            Selon votre rôle et les fonctionnalités utilisées, l'Application peut demander les autorisations
            suivantes sur votre appareil :
          </p>
          <ul>
            <li>
              <strong>Localisation</strong> : pour le suivi du transport scolaire (affichage de la position du
              bus aux utilisateurs autorisés), limitée aux horaires de transport.
            </li>
            <li>
              <strong>Notifications</strong> : pour vous informer des événements scolaires, communications et
              alertes.
            </li>
            <li>
              <strong>Caméra / Photos</strong> : pour ajouter une photo de profil ou joindre des documents (le
              cas échéant).
            </li>
            <li>
              <strong>Stockage</strong> : pour télécharger ou consulter des documents (le cas échéant).
            </li>
          </ul>
          <p>Vous pouvez à tout moment gérer ou révoquer ces autorisations dans les réglages de votre appareil.</p>

          <h2 id="s13">13. Vos droits</h2>
          <p>
            Conformément à la loi 09-08 (CNDP) et au RGPD, vous disposez des droits suivants :{' '}
            <strong>accès, rectification, effacement, opposition, limitation du traitement et portabilité</strong>{' '}
            de vos données, ainsi que le droit de retirer votre consentement.
          </p>
          <p>
            L'exercice de ces droits s'effectue auprès de l'<strong>établissement scolaire</strong> responsable
            du traitement. Pour les aspects techniques, vous pouvez contacter Scanditek à l'adresse indiquée
            ci-dessous. Vous disposez également du droit d'introduire une réclamation auprès de la{' '}
            <strong>CNDP (Maroc)</strong> ou de l'autorité de protection des données compétente.
          </p>

          <h2 id="s14">14. Modifications de la présente Politique</h2>
          <p>
            La présente Politique de confidentialité peut être mise à jour. Les modifications substantielles
            seront communiquées par tout moyen approprié (notification dans l'Application ou courriel). La date
            de dernière mise à jour figure en haut du document.
          </p>

          <h2 id="s15">15. Contact</h2>
          <div className="bg-[#f5f7fa] border border-[#e6e9ef] rounded-lg p-4 my-4">
            <p className="m-0">
              Pour toute question relative à la présente Politique de confidentialité ou à la protection de vos
              données :
            </p>
            <p className="mt-2 mb-0">
              <strong>Email (vie privée) :</strong>{' '}
              <a className="text-[#1f5fbf]" href="mailto:privacy@scanditek.ma">
                privacy@scanditek.ma
              </a>
              <br />
              <strong>Email (général) :</strong>{' '}
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
            <Link to="/cgu" className="text-[#1f5fbf] hover:underline">
              Voir les Conditions Générales d'Utilisation
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Confidentialite;
