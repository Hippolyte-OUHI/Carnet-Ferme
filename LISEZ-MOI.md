# Carnet de Bande — Suivi Ferme Pondeuse
### Hippo Consulting — connecter pour grandir

Cette application se présente comme un site web, mais c'est en réalité une
**application installable (PWA)** : une fois hébergée en ligne, elle
s'installe sur téléphone et sur PC comme une vraie application, avec sa
propre icône et sans barre d'adresse. Toutes les données restent stockées
sur l'appareil de l'éleveur (rien n'est envoyé sur internet).

**`index.html` est entièrement autonome** : le logo et les bibliothèques
de graphiques/PDF sont intégrés directement dans ce fichier unique (aucun
dossier ni fichier annexe requis pour que l'application fonctionne). Vous
pouvez donc le déplacer, le renommer ou l'ouvrir seul : logo, saisie,
graphiques, impression PDF et export CSV fonctionneront toujours. Les
fichiers `manifest.json`, `sw.js` et les icônes ne servent qu'à
l'installation en application (écran d'accueil / barre des tâches) et au
fonctionnement hors-ligne renforcé — ils sont optionnels pour l'usage de
base.

## Fonctionnalités

- Saisie journalière sur 6 périodes × 10 semaines × 7 jours, avec calculs
  automatiques (stock, cumul d'aliment, TPPP, taux de mortalité, taux de
  ponte).
- Saisie des chiffres avec virgule (ex : 230,5) et heure de distribution.
- En-tête de chaque semaine : stock, ponte, mortalité, taux de ponte.
- **Archives** : clôturez une bande terminée (elle passe en lecture seule
  et se range dans l'onglet Archives) ; réactivable à tout moment.
- **Impression PDF, envoi PDF et export CSV** disponibles à chaque semaine
  et sur le récapitulatif complet.
- 4 graphiques d'évolution (stock, ponte, mortalité, aliment), disponibles
  hors-ligne.

## 1. Mettre l'application en ligne

L'installation sur téléphone/PC exige que l'appli soit servie en HTTPS
(ce n'est pas possible en ouvrant directement le fichier depuis l'ordinateur).
La solution la plus simple et gratuite :

1. Créez un compte sur [Netlify](https://app.netlify.com) (ou GitHub Pages,
   Vercel, Firebase Hosting…).
2. Glissez-déposez le dossier complet (`index.html`, `manifest.json`,
   `sw.js`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`) dans
   Netlify Drop : https://app.netlify.com/drop
3. Netlify vous donne une adresse du type
   `https://carnet-ferme-xxxx.netlify.app`.

## 2. Installer sur téléphone (Android)

1. Ouvrez l'adresse dans Chrome.
2. Menu (⋮) → **Installer l'application** (ou une bannière apparaît
   automatiquement en bas de l'écran).
3. L'icône « Carnet Ferme » apparaît sur l'écran d'accueil, comme une
   application classique.

## 3. Installer sur iPhone (Safari)

1. Ouvrez l'adresse dans Safari.
2. Bouton **Partager** (le carré avec la flèche) → **Sur l'écran
   d'accueil**.
3. L'icône apparaît sur l'écran d'accueil.

## 4. Installer sur PC (Windows / Mac, Chrome ou Edge)

1. Ouvrez l'adresse dans Chrome ou Edge.
2. Une icône d'installation apparaît dans la barre d'adresse (à droite),
   ou menu (⋮) → **Installer Carnet de Bande…**
3. L'application s'ouvre ensuite dans sa propre fenêtre, épinglable à la
   barre des tâches / au dock.

## Fonctionnement hors-ligne

Après la première ouverture, l'application continue de fonctionner sans
connexion internet (saisie, calculs, récapitulatif). Seul le premier
chargement nécessite une connexion.

## Sauvegarde des données

Les données sont stockées dans le navigateur de l'appareil utilisé. Elles
ne se synchronisent pas automatiquement entre plusieurs appareils. Pensez à
toujours utiliser le même téléphone/ordinateur pour une même bande, ou
demandez-moi une fonction d'export/import si vous voulez transférer des
données d'un appareil à l'autre.
