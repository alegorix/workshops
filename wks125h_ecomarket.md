# Workshop Développement Web : EcoMarket Pro (125h)

## Informations Générales
* **Durée :** 125 heures (15 séances de 8h + 5h finales)
* **Équipe :** Groupes de 4 personnes
* **Technologies :** PHP Procédural, MySQL, Bootstrap 5, JavaScript
* **Objectif :** Créer une marketplace C2C (Particulier à Particulier) complète et sécurisée.

---

## Le Concept
Développer **EcoMarket**, une plateforme où chaque utilisateur peut vendre et acheter des objets d'occasion. Le projet simule une commande réelle en agence : de la conception de la base de données à la mise en ligne d'un produit fini et sécurisé.

---

## Objectifs de l'Atelier
1.  **Conception :** Modéliser une base de données complexe (10+ tables).
2.  **Architecture :** Organiser un projet PHP procédural de grande envergure de manière modulaire.
3.  **Sécurité :** Implémenter des protections contre les failles SQL et XSS sans framework.
4.  **UX/UI :** Utiliser JavaScript pour dynamiser les formulaires et Bootstrap pour un rendu professionnel mobile-first.

---

## Structure de Dossiers Imposée
Pour éviter le "code spaghetti", la structure suivante est obligatoire :



* `/config` : Connexion BDD (`db.php`) et constantes.
* `/includes` : Éléments répétitifs (`header.php`, `footer.php`, `navbar.php`).
* `/functions` : Logique métier (`auth.php`, `ads.php`, `utils.php`).
* `/actions` : Scripts de traitement des formulaires (sans HTML).
* `/uploads` : Stockage des images des annonces.
* `/assets` : CSS, JS, et images statiques.

---

## Fonctionnalités du MVP (Minimum Viable Product)

### 1. Gestion des Comptes
* Inscription (hachage `password_hash`) et Connexion.
* Espace "Mon Profil" (bio, avatar, modification des infos).
* Gestion des rôles (Utilisateur / Modérateur).

### 2. Moteur d'Annonces
* Création d'annonces avec multi-upload d'images.
* CRUD complet : Modifier, supprimer, mettre en pause une annonce.
* Système de catégories et de recherche multicritères (prix, état, mots-clés).

### 3. Social & Transaction
* Système de **Favoris** (sans rechargement de page via JS).
* **Messagerie Interne** : Fil de discussion entre acheteur et vendeur.
* **Avis & Notes** : Système de notation après transaction.

---

## Planning des Séances (15 x 8h)

| Phase | Séances | Objectifs |
| :--- | :--- | :--- |
| **I. Conception** | S1 - S2 | MCD, Wireframes, Installation Git, Création de la BDD. |
| **II. Auth & Profil** | S3 - S5 | Inscription, Login, Sessions, Upload d'avatar. |
| **III. Annonces** | S6 - S9 | Formulaire complexe, traitement multi-images, affichage grille. |
| **IV. Recherche** | S10 - S11 | Filtres SQL avancés, pagination, moteur de recherche. |
| **V. Social** | S12 - S14 | Messagerie, Avis, Favoris, Notifications. |
| **VI. Finalisation** | S15 | Optimisation, Debugging, Sécurité (XSS/CSRF), Démo. |



---

## Les 5 Commandements de la Qualité (Pièges à éviter)

1.  **Séparation des pouvoirs :** Aucun code de traitement SQL ou de redirection (`header('Location...')`) ne doit se trouver au milieu du HTML.
2.  **Sécurité PDO :** Utilisation systématique de `prepare()` et `execute()`. Aucune variable directe dans les requêtes.
3.  **Affichage propre :** Utilisation systématique de `htmlspecialchars()` sur toutes les variables affichées (faille XSS).
4.  **Modularité :** Si un bloc de code est utilisé deux fois, il doit devenir une fonction dans `/functions`.
5.  **Gestion des erreurs :** Utilisation des sessions (`$_SESSION['error']`) pour afficher des alertes Bootstrap claires à l'utilisateur.

---

## Analyse Visuelle (Cahier de style)

* **Grid System :** Utiliser les classes `row-cols-1 row-cols-md-3` pour les listes d'annonces.
* **Modales :** Obligatoires pour les actions de suppression (confirmation).
* **JavaScript :** * Prévisualisation immédiate des images lors de l'upload.
    * Validation HTML5/JS des formulaires avant envoi.
    * Filtres de prix avec curseurs (sliders).
