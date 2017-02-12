# mongodb_vagrant_dev
Provision simple vagrant environment with MongoDB installed

This simple vagrant box provides a quick sandbox setup for MongoDB project on local machine. This project was implemented on OSX El-Capitan as of early 2017.

# Prerequisite:
  - Vagrant 1.7.2 or later
  - VirtualBox 4.3.40 or later
  - OSX 10.11 or later
  
## Usage
Step 1: Copy the git branch to local directory
```
    $ git clone git@github.com:octobrick/mongodb_vagrant_dev.git
    $ cd mongodb_vagrant_dev
```
Step 2: Start the vagrant box
```
    $ vagrant up
```
Check the status of the vagrant Machine
```
    $ vagrant status
```
Note:  **Vagrant status** should output the following when Vagrant box is initialized correctly.
```
    $ vagrant status
    Current machine states:

    database                  running (virtualbox)

    The VM is running. To stop this VM, you can run `vagrant halt` to
    shut it down forcefully, or you can run `vagrant suspend` to simply
    suspend the virtual machine. In either case, to restart it again,
    simply run `vagrant up`.
```
Step 3: ssh to Vagrant box
```
    $ vagrant ssh
 ```   
which should display
```
    vagrant@mongodb:~$
```

Step 4: Start MongoDB with a start script from the **~/shared** folder
```
    vagrant@mongodb:~$ cd ~/shared
    vagrant@mongodb:~/shared$ ./start_mongod.sh
```
Step 5: Check that MongoDB has started
```
    vagrant@mongodb:~$ ps -ef|grep mongo
    vagrant   6344     1  1 23:54 ?        00:00:05 mongod --dbpath /data/db --logpath /data/db/mongod.log --logappend --fork --port 27017
    vagrant   6456  6439  0 23:59 pts/0    00:00:00 grep --color=auto mongo
```
Step 6: Testing Mongo Shell access via host.
- Start a separate Terminal session on OSX host
- Access port 27017 with mongo
```
    $ mongo
```
or to specify the host:port pair,
```
    $ mongo --host "localhost:27017"
    > show dbs
    admin  0.000GB
    local  0.000GB
    
``` 
Congratulation! You have set up a MongoDB database instance running in a Vagrant sandbox environment. Now you can interact your App with port 27017 to store and read data.

*(Optional)* Step 7: Run script below to generate some test user data from Vagrant environment
```
   vagrant$ cd ~/shared
   vagrant$ mongo localhost:27017/test load_test_data.js
```
Then, after data import, run the command below to confirm 100,000 test user documents were inserted.
```
    vagrant$ mongo localhost:27017/test --eval "db.users.count()"
    100000
```
