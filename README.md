# Calculateur d'Âge en JavaScript

[![Aperçu](https://img.shields.io/badge/Aperçu-Live-brightgreen)](https://shoopstv.github.io/calculateur-age/)

## Description

Ce projet est un calculateur d'âge simple et interactif, développé avec HTML, CSS et JavaScript. Il permet de calculer l'âge d'une personne en années, mois et jours, à partir de sa date de naissance. Le calculateur prend en compte les années bissextiles et affiche des messages d'erreur clairs en cas de saisie incorrecte.

## Aperçu

Vous pouvez utiliser le calculateur d'âge ici : [https://shoopstv.github.io/calculateur-age/](https://shoopstv.github.io/calculateur-age/)

## Technologies Utilisées

*   **HTML5 :** Structure de la page web, formulaire de saisie et affichage des résultats.
*   **CSS3 :** Style et mise en page du calculateur (design responsive).
*   **JavaScript (ES6+) :** Logique de calcul de l'âge et validation des entrées.

## Structure du Projet
Use code with caution.
Markdown
calculateur-age/

├── index.html # Page HTML principale

├── style.css # Fichier CSS pour le style

└── script.js # Fichier JavaScript contenant la logique


## Fonctionnement

Le fichier `script.js` est le cœur du projet.  Il contient les fonctions et la logique suivantes :

1.  **`calculateAge()` :**  Cette fonction est le point d'entrée principal. Elle est déclenchée lorsque l'utilisateur clique sur le bouton de calcul (ou appuie sur Entrée).

2.  **Validation des entrées :**
    *   `isValidDate(day, month, year)` : Vérifie si la date saisie est valide (jours existants dans le mois, mois entre 1 et 12, année raisonnable).
    *   Gestion des erreurs : Affiche des messages d'erreur spécifiques pour chaque champ (jour, mois, année) si la saisie est invalide (champ vide, valeur hors limites, date future, etc.).  Les messages d'erreur sont affichés directement sur la page, à côté des champs concernés. Les champs invalides sont mis en évidence (bordure rouge, par exemple).

3.  **Calcul de l'âge :**
    *   Si la date est valide, la fonction crée des objets `Date` pour la date de naissance et la date actuelle.
    *   Calcule la différence en millisecondes entre les deux dates.
    *   Convertit cette différence en années, mois et jours.  Le calcul prend en compte les mois de longueurs différentes et les années bissextiles.

4.  **Affichage des résultats :**
    *   Met à jour les éléments HTML (probablement des `<span>` ou des `<p>`) pour afficher l'âge calculé en années, mois et jours.
    *   Animation des nombres : Les nombres de l'âge (années, mois, jours) sont affichés avec une animation de comptage, partant de 0 jusqu'à la valeur finale. Ceci ajoute un effet visuel agréable.

5. **Gestion des evenements**
    * Des écouteurs d'évènements sont utiliser pour la soumission du formulaire ainsi que la touche "Entrée"

## Améliorations Possibles

*   **Localisation :**  Traduire les messages d'erreur et les libellés dans différentes langues.
*   **Calcul de l'âge à une date spécifique :**  Ajouter un champ supplémentaire pour que l'utilisateur puisse spécifier une date autre que la date actuelle pour le calcul de l'âge.
*   **Affichage d'informations supplémentaires :**  Afficher le nombre de jours restants jusqu'au prochain anniversaire, le signe astrologique, etc.
* **Meilleur design des messages d'erreur:** Le design peut toujours être amélioré.

## Installation et Utilisation

1.  **Cloner le dépôt :**

    ```bash
    git clone https://github.com/shoopstv/calculateur-age.git
    ```

2.  **Ouvrir le fichier `index.html`** dans un navigateur web.  Aucune installation de serveur n'est nécessaire (projet front-end pur).

## Contribution

Les contributions sont les bienvenues !  Si vous souhaitez améliorer ce calculateur d'âge, suivez les étapes habituelles :

1.  Forkez le projet.
2.  Créez une branche (`git checkout -b nouvelle-fonctionnalite`).
3.  Faites vos modifications.
4.  Commitez vos changements (`git commit -m "Description de la modification"`).
5.  Poushez vers la branche (`git push origin nouvelle-fonctionnalite`).
6.  Créez une Pull Request.

## Auteur

*   [shoopstv](https://github.com/shoopstv)
