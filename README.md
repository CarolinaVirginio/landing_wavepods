# WavePods — Landing Page Fullstack

O WavePods é um projeto de nível profissional desenvolvido para praticar o desenvolvimento fullstack moderno. Ele apresenta uma interface customizada, um backend robusto em Node.js e um fluxo de pagamento seguro integrado ao Stripe.

- Frontend: Desenvolvido com React + Vite & Material UI.
- Backend: Node + Express com arquitetura modular.
- Infraestrutura: Totalmente conteinerizado com Docker & Nginx.
- Pagamentos: Integração segura com Stripe Checkout.
- Validação: Validação de e-mail customizada no lado do servidor e cabeçalhos de segurança.

## Funcionalidades

- Design Responsivo: Experiência fluida em dispositivos móveis, tablets e desktop.
- Arquitetura Limpa: Separação de responsabilidades entre rotas, controladores e utilitários.
- Validação de E-mail: Validação customizada baseada em Regex no backend para captura de leads.
- Segurança: Política de CORS dinâmica para lidar com múltiplos ambientes (Dev/Prod).
- Dockerizado: Configuração com um único comando para frontend e backend.

## Estrutura do Projeto

```
landing_wavepods/
├── client/                 # Frontend React + Vite
│   ├── src/
│   │   ├── api/            # Serviços de chamada de API
│   │   └── components/     # Componentes de UI modulares
│   └── nginx.conf          # Configuração do Nginx para produção
│
├── server/                 # Backend Node.js + Express
│   ├── routes/             # Rotas modulares da API
│   ├── utils/              # Funções auxiliares (Validação, etc.)
│   ├── index.js            # Ponto de entrada principal do servidor
│   └── .env.production     # Variáveis de produção (ignorado pelo git)
│
├── docker-compose.yml      # Orquestração de toda a stack
└── package.json            # Scripts para rodar ambientes Dev/Prod
```

## Tecnologias

**Frontend**

- React (Vite)
- React Router DOM
- Material UI
- Framer Motion (opcional)

**Backend**

- Node.js + Express
- Stripe API / Stripe Node SDK
- dotenv
- CORS

**Infraestrutura (Ops)**

- Docker, Docker Compose, Nginx.

## Variáveis de Ambiente

Para rodar este projeto, você precisará de um arquivo .env (para dev local) e um arquivo .env.production (para Docker).

**Desenvolvimento Local (server/.env):**

```
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PRICE_ID=price_...
FRONTEND_URL=http://localhost:5173
PORT=4242
```

**Produção Docker (server/.env.production):**

```
STRIPE_SECRET_KEY=
STRIPE_PRICE_ID=
FRONTEND_URL=http://localhost:8080
PORT=4242
```

## Como Rodar o Projeto

## ▶ Opção 1 — Com Docker (Recomendado)

```
docker-compose up --build
```

Acesse a aplicação em: http://localhost:8080

Este comando:

- Constrói o frontend (React + Vite)
- Constrói o backend (Node + Express)
- Inicia o Nginx servindo o frontend
- Faz o Proxy das requisições /api/\* para o backend

**URLs**

- Frontend: http://localhost:8080
- Backend (via proxy): http://localhost:8080/api
- Acesso direto ao Backend: http://localhost:4242

Para parar os containers: CTRL + C ou docker-compose down

## ▶ Opção 2 — Modo Dev Local

1. Clone esse repositório

```
git clone https://github.com/CarolinaVirginio/landing_wavepods.git
cd landing_wavepods
```

2. Instale as dependências em ambas as pastas (npm install).

**Client**

```
cd client
npm install
```

**Server**

```
cd server
npm install
```

3. Crie suas variáveis de ambiente:

Dentro de /server , crie o arquivo .env:

```
STRIPE_SECRET_KEY=
STRIPE_PRICE_ID=
FRONTEND_URL=http://localhost:5173
PORT=4242
```

4. Rode a partir da raiz:

```
cd ..
npm run dev
```

Acesse a aplicação em: http://localhost:5173

Este comando:

- Inicia o backend com nodemon
- Inicia o frontend com Vite
- Mantém ambos rodando simultaneamente usando concurrently

**URLs:**

Frontend: http://localhost:5173

Backend: http://localhost:4242

## Screenshots

**(Clique para ampliar)**

[![Main](./client/public/contentmain.jpeg)](./client/public/contentmain.jpeg)
[![Features](./client/public/features.jpeg)](./client/public/features.jpeg)
[![Motivation1](./client/public/motivation1.jpeg)](./client/public/motivation1.jpeg)
[![Motivation2](./client/public/motivation2.jpeg)](./client/public/motivation2.jpeg)
[![Motivation3](./client/public/motivation3.jpeg)](./client/public/motivation3.jpeg)
[![Buy](./client/public/buysection-footer.jpeg)](./client/public/buysection-footer.jpeg)

## Autor

**Carolina Virginio**

Desenvolvido como parte do meu portfólio frontend e processo de aprendizado fullstack.

## Licença

© 2025 Carolina Virginio. Todos os direitos reservados. Este projeto é proprietário e não pode ser copiado ou usado sem permissão.
