// https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/#std-label-install-mdb-community-ubuntu

// sudo apt-get install gnupg curl

// curl -fsSL https://www.mongodb.org/static/pgp/server-7.0.asc | \
//    sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg \
//    --dearmor

// echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list

// sudo apt-get update

// sudo apt-get install -y mongodb-org

// sudo systemctl start mongod
// sudo systemctl status mongod
// sudo systemctl stop mongod
// sudo systemctl restart mongod

// mongosh

// wget https://downloads.mongodb.com/compass/mongodb-compass_1.43.5_amd64.deb
// sudo apt install ./mongodb-compass_1.43.5_amd64.deb
// mongodb-compass
