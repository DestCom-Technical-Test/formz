# Formz
Le principe etait de créer un formulaire qui lors de son envoi, envoi un lien via SMS à l'utilisateur, qui affiche les informations précedemments rentrée.

Ce projet a été développé sous React avec create-react-app, l'API OVH, normalize.css, react-router, firebase, uuid and react-loader-spinner.

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