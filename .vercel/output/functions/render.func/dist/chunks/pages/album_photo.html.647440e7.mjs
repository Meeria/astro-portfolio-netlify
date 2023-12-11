/* empty css                                 */
function render({ slots: ___SLOTS___ }) {
		return `<!DOCTYPE html>
<html lang="fr" style="background-color: hsl(0, 0%, 0%);">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Album Photo</title>
    <link href="style.css" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500&amp;display=swap"
        rel="stylesheet">

</head>

<body style="font-family:Manrope; margin-left: 50px;margin-right: 50px;">
    <h1 style="color:hsl(189, 87%, 97%);">Album Photo</h1>
    <p style="color: hsl(0, 0%, 67%);">Exploration de PHP et de l'architecture MVC à travers la création d'un album
        photo interactif.</p>

    <div class="text" style="display:flex;">
        <img src="/public/album.png" alt="Photo du projet" style="max-width: 50%; height: auto; margin-bottom: 20px;">
        <div style="margin-left: 150px;">
            <p style="color:hsl(0, 0%, 67%);line-height: 27px;">"Mon premier projet significatif a été la création d'un
                <strong style="color:white;">album photo</strong> en ligne, une application web conçue lors de mon
                parcours académique. Ce
                projet m'a offert
                une opportunité précieuse d'explorer le langage <strong style="color:white;">PHP</strong> et de
                comprendre en profondeur
                l'approche de
                l'architecture <strong style="color:white;">Modèle-Vue-Contrôleur (MVC)</strong>.

                L'objectif principal était de concevoir une plateforme interactive permettant aux utilisateurs de gérer
                et de partager des images.

                En utilisant l'architecture <strong style="color:white;">MVC</strong>, j'ai séparé les différentes
                composantes de
                l'application. Le modèle
                représentait la logique métier et la gestion des données relatives aux images, assurant ainsi une
                manipulation et un stockage efficaces. La vue a été pensée pour offrir une interface utilisateur
                intuitive, permettant aux utilisateurs de naviguer facilement dans leur galerie d'images et de partager
                leurs souvenirs. Quant au contrôleur, il a été le maître d'orchestre, gérant les requêtes des
                utilisateurs et orchestrant les interactions entre le modèle et la vue.

                Ce projet m'a permis de consolider mes connaissances en <strong style="color:white;">programmation
                    orientée objet
                    (POO)</strong>, en gestion
                de <strong style="color:white;">bases de données</strong> et en <strong style="color:white;">sécurité
                    des applications web</strong>."
            </p>
        </div>
    </div>

    //Second Bloc

    <div class="text" style="display:flex;justify-content: end;">
        <div style="margin-right: 150px;">
            <h3 style="color:hsl(189, 87%, 97%);">Technologies utilisées :</h3>
            <ul style="color:hsl(0, 0%, 67%);">
                <li>JavaScript</li>
                <li>PHP</li>
                <li>SQL</li>
                <li>CSS</li>
                <li>HTML</li>
            </ul>
            <h3 style="color:hsl(189, 87%, 97%);">Compétences validées :</h3>
            <ul style="color:hsl(0, 0%, 67%);">
                <li>Analyser les objectifs et les modalités d’organisation d’un projet</li>
                <li>Évaluer les indicateurs de suivi d’un projet et analyser les écarts</li>
                <li>Traiter des demandes concernant les applications</li>
                <!-- Ajoutez ici les compétences validées par votre projet -->
            </ul>
        </div>
        <video loop autoplay style="max-width: 50%; height: auto; margin-bottom: 20px;margin-left: 150px;">
            <source src="/public/album_video.mkv" type="video/mp4" />
            <p>
                Votre navigateur ne prend pas en charge les vidéos HTML5. Voici
                <a href="myVideo.mp4">un lien pour télécharger la vidéo</a>.
            </p>
        </video>
    </div>
</body>

</html>`
	}
render["astro:html"] = true;

export { render as default };
