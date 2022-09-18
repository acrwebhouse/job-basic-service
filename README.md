# job-basic-service

build docker
docker build . -t acrwebdev/job-basic-service

docker push
docker push acrwebdev/job-basic-service

docker pull acrwebdev/job-basic-service:latest

run docker
docker run -p 19000:19000 --env SERVER_IP=35.234.42.100 --env SERVER_PORT=19000 --env NAS_DIR=/usr/src/app/nas --env SWAGGER_IP=35.234.42.100 -v /home/acr_dev_webhouse/nas:/usr/src/app/nas --restart=always --name=job-basic-service -d acrwebdev/job-basic-service
