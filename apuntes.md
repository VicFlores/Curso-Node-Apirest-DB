# Postgresql

## Crear un servicio de Postgresql

1. Creamos nuestro servicio en: docker-compose.yml

2. Crear el servicio: docker compose up -d nombre_servicio

3. Conectar con el servicio: docker compose exec nombre_servicio bash

## Acceder a nuestro servicio de Postgresql via terminal

_Ejecutamos_: psql -h localhost -d my_store -U vicflores11

- h => host que designamos

- d => nombre de la db que creamos

- U => nombre de usuario que elegimos

## Comandos de Postgres via terminal

- Ver las tablas: \d+

- Salir de la DB: \q

# Pgadmin

## Crear un servicio de Pgadmin

1. Creamos nuestro servicio en: docker-compose.yml

2. Crear el servicio: docker compose up -d nombre_servicio

## Conectarnos a Pgadmin

1.  Accedemos a la web y usamos el localhost:puerto_designado

2.  Creamos un nuevo server y escribimos el nombre

3.  Rellenamos los campos con los valores definidos en el servicio de postgres

4.  Para saber la ip de nuestro server

        - Inspeccionamos el contenedor de postgres usando su ID: docker inspect ID
        - Seleccionamos la ip de IPAdress para conectar nuestro pgadmin
