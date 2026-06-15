# Development Environment
Reproducible developer environment.

## Local Development Workflow
```
Host
├── Neovim
├── Git
├── Mise
├── SSH
└── Docker

Project
├── compose.yaml
├── Dockerfile
└── source code

Container
├── Python/Node/Rust
├── Dependencies
└── Runtime

cd project_root
nvim .

docker compose up -d
```

## Remote Development Workflow
```
Host
├── Neovim
├── Git
├── Mise
└── SSH

Remote Machine
├── Docker
├── Git
├── Project
└── Containers

ssh remote_machine

cd project_root
nvim .

docker compose up -d
```
