#!/bin/bash -x

BASEDIR=`dirname $0`
cd ${BASEDIR}

docker compose down

sleep 3
rm -Rf ./docker/postgres/data

docker compose up -d --build

sleep 20

# cp -n .env.example .env

docker compose exec node bash -c "npm run migrate"
docker compose exec node bash -c "npm run seed"

echo "Demo site for SaaSus Platform has bees deployed!"
echo "Node base: http://localhost:80/login  Email: user@example.com Password: password"
echo "React base: http://localhost:3000/board"
