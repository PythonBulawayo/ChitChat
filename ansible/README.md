# Ansible playbooks for server setup and deployment

## Prerequisites

The setup script assumes you have an SSH public key called `id_ed25519` in your `~/.ssh/` directory. Create one before
running it:

Create an SSH keypair in your `~/.ssh/aardwolf` directory:

```shell
ssh-keygen -t ed25519 

```


## Setup the server:

```sh
ansible-playbook setup.yml --verbose
```


Deploy:
```sh
ansible-playbook deploy.yml --verbose
```