# Formz
Le principe etait de créer un formulaire qui lors de son envoi, envoi un lien via SMS à l'utilisateur, qui affiche les informations précedemments rentrée.

Ce projet a été développé sous React avec create-react-app, l'API OVH, normalize.css, react-router, firebase, uuid and react-loader-spinner.

[Voir une demo.](#demo)
[Le lancer soit même.](#le-lancer-via-localhost)

## Qu'utilise ce projet :
- create-react-app, permet de demarrer une app react rapidement. https://github.com/facebook/create-react-app
- react-loader-spinner, un écran de chargement pour react. https://github.com/mhnpd/react-loader-spinner
- react-router, un router pour react. https://github.com/ReactTraining/react-router
- firebase, sert a stocker temporairement les données. https://firebase.google.com/ - https://github.com/firebase/firebase-js-sdk
- l'API OVH, sert a envoyer le SMS. https://docs.ovh.com/fr/sms/ - http://ovh.github.io/node-ovh/ - https://github.com/ovh/node-ovh
- uuid, genere un identifiant unique, permettant de sécurisé le stockage d'informations. https://github.com/uuidjs/uuid
- normalize.css, reinitialise le CSS pour tout les navigateurs. https://github.com/necolas/normalize.css/

## Le lancer via localhost
Vous pouvez lancer ce projet en quelques étapes :
1. Clonez ce répertoire,
2. lancez la commande ```npm install ```,
3. Ensuite renommez le fichier ```'.env.dist'``` en ```'.env'```,
4. Vous aurez besoin d'un compte OVH Cloud & Google Firebase,
5. Une fois en possesion de vos comptes, remplacez les variables dans le fichier ```'.env'``` par les votres.
6. Vous pouvez desormais le lancer :
    - en mode développement : avec la commande ```npm start ```
    - ou creer un build : avec la commande ```npm run build ```
#### Précisions
- Le mode développement lance un serveur localement sur votre machine sur [http://localhost:3000](http://localhost:3000), la page s'actualisera lors des mises a jours, et les erreurs de ESlint seront affichées dans la console.
- Le build, créera un dossier ```'build'``` contenant le site prèt a l'utilisation sur n'importe quel serveur, le poids des fichiers est minifié.

## Demo

Une démonstration est disponible sur : 
Un quotas d'envoi de SMS a pu etre atteint, empéchant donc le bon fonctionnement de l'app