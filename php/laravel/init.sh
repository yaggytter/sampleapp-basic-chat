#!/bin/bash -x

BASEDIR=`dirname $0`
cd ${BASEDIR}

docker compose down

sleep 3
rm -Rf ./docker/postgres/data
# rm -Rf ./api/vendor/

docker compose up -d --build

sleep 20

cp -n api/.env.example api/.env

docker compose exec php bash -c "cd api ; composer install"
docker compose exec php bash -c "cd api ; php artisan migrate --seed"
docker compose exec php bash -c "cd api ; bash -x ./clearcache.sh"

echo "Demo site for SaaSus Platform has bees deployed!"
echo "Blade base: http://localhost/board  Email: user@example.com Password: password"
echo "React base: http://localhost:3000/  Email: user2@example.com Password: password"
