# job-basic-service

build docker
docker build . -t acrwebdev/job-basic-service:0.0.1

docker push
docker push acrwebdev/job-basic-service:0.0.1

docker pull acrwebdev/job-basic-service:0.0.1

run docker
docker run -p 19000:19000 --env SERVER_IP=34.80.78.75 --env SERVER_PORT=19000 --env NAS_DIR=/usr/src/app/nas --env SWAGGER_IP=34.80.78.75 -v /home/acr_renthouse/GCS/nas/house:/usr/src/app/nas --restart=always --name=job-basic-service -d acrwebdev/job-basic-service:0.0.1
