# local_mongodb_vagrant_dev
Provision simple vagrant environment with MongoDB installed

This simple vagrant box provides a quick sandbox setup for MongoDB project on local machine. This project was implemented on OSX El-Capitan as of Early 2017.

# Prerequisite:
  - Vagrant 1.7.2 or later
  - VirtualBox 4.3.40 or later
  
## Usage
1. Copy the git branch to local directory
    $ git clone git@github.com:octobrick/local_mongodb_vagrant_dev.git
    $ cd local_mongodb_vagrant_dev.git

2. Start the vagrant box
    vagrant up

3. Check the status of the vagrant Machine
    vagrant status