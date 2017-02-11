#!/bin/bash -e

PORT="27017"
host="`hostname`"
echo "checking to see if this script runs from vagrant and not from host"

echo "hostname => $host"

if [ "$host" == "mongodb" ]
then
    echo "safe to proceed"
else
    echo "please run this script from vagrant box"
    exit 1
fi

echo "starting mongod on port 27017"


if [ "`ls /data`" == "db" ]
then
    echo "/data/db directory already created, all good"
else
    sudo mkdir -p /data/db
    sudo chown -R vagrant:vagrant /data
fi



mongod --dbpath /data/db --logpath /data/db/mongod.log --logappend --fork --port "$PORT" 
echo "DONE"
