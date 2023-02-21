### Dev web

Ceci est une commande :
``` bash
    mkdir test
```

Ceci est du code :
``` javascript
const test = 'Hello World';
``` 

La commande :
```
git int
```
permet d'initialiser un depot Git. Elle retourne :
```
Initialized empty Git repository in C:/Users/alesi/code/.git/
```

Pour verifier l'etat de votre depot Git ultiliser la commande :
```
git status
```

Commit definition : 
```
L'historique des versions d'un projet
```

Le depot git ou repository est le dossier qui contient les donnees que l'on souhaite visionner. On y trouve un dossier cache :
```
.git
```

La commande :
```
git commit -m "message de commit"
```
sert a sauvegarder

git init : permet d'initialiser un depot git local dans le repertoire courant. Cela se traduit par le presence d'un dossier caché git/ a la racine du depot.

L'edition ou l'ajout de fichier dans ce repertoire sera detecte par Git, pour le visualiser dans le terminal on ultilise la commande 
```
git status
```

Avant de sauvegarder les modifications, il faut ajouter les modifications que l'on souhaite sauvegarder avec la commande :
```
git add <nom de fichier>
```
pour sauvegarder :
```
git add .
git commit -m "message"
git push
```
