#!/bin/bash -e

PORT="27017"
host=`hostname`

echo "hostname => $host"

if [ "$host" != "mongodb" ];then
    echo "please run this script from vagrant box"
    exit 1
fi

echo "shutting down mongodb"
mongo --port "$PORT" admin --eval "db.shutdownServer()"
echo "DONE"
