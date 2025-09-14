#Todolist Application

#Description

Application Todolist fullstack permettant de gérer des tâches avec un frontend React et un backend Django.

#Technologies utilisées

* Frontend :
    * React (JSX/TSX)
    * Vite
    * TanStack Query
    * shadcn/ui
    * 
* Backend :
    * Django
    * Django REST Framework
    * PostgreSQL
    * 
* Conteneurisation :
    * Docker
    * Docker Compose
    * 
#Fonctionnalités

* Ajouter une tâche
* Lister toutes les tâches existantes
* Modifier le statut d’une tâche (À faire / En cours / Terminé)
* Supprimer une tâche

#Structure du projet

* backend/ : code Django + API REST
* frontend/ : code React + composants shadcn/ui + gestion des appels API avec TanStack Query
* docker-compose.yml : services backend, frontend et base de données

#Installation et lancement

git clone https://github.com/LesleyOulla/todolist.git
cd todolist

#Lancer les services avec Docker Compose :
docker-compose up --build

#Accéder à l’application frontend :
http://localhost:5173

L’API backend est disponible sur :
http://localhost:8000/api/tasks/

#Dépendances principales

#Frontend

npm install react react-dom
npm install @tanstack/react-query
npm install @shadcn/ui
npm install vite

#Backend

pip install django
pip install djangorestframework
pip install psycopg2-binary
pip install django-cors-headers


#Docker
* Docker
* Docker Compose
