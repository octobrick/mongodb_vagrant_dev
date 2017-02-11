# Provisioning Ubuntu 14.04 LTS and setting up internal network
#   - expose host port 27017 to internal MongoDB shell port 27017
#
# Alan (octobrick@gmail.com)
#
Vagrant.configure("2") do |config|
  config.vm.define :database do |database|
    database.vm.box = "ubuntu/trusty64"
    database.vm.network :private_network, ip: "192.168.100.100"
    database.vm.hostname = "mongodb.local"
    database.vm.provision :shell, path: "provision-database", args: ENV['ARGS']
    database.vm.synced_folder "shared/", "/home/vagrant/shared", create: true

    database.vm.provider "virtualbox" do |vb|
      vb.customize ["modifyvm", :id, "--cpus", "1", "--memory", 2048]
    end
  end

  # setup port forwarding and bind host port 27017 to vm port 27017
  config.vm.network "forwarded_port", guest: 27017, host: 27017

end
