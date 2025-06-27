# Github User Search 

Aplicação feita em Angular que permite a pesquisa de perfis de usuários do Github e visualizar informações como repositórios, informações do perfil entre outros.

## Requisitos para rodar o projeto

- **Node.js:** `>=20.17.0`
- **Gerenciador de pacotes:** `npm` (instalado com o Node.js)
- **Angular.js:** `>=19.2.15`

## Como rodar o projeto localmente

- **Clone o repositório:**  
`git clone https://github.com/vjarruda/github-user-search.git`  
`cd github-user-search`

- **Instale as dependências:**  
`npm install`

- **Para executar o ambiente de desenvilvimento:**  
`ng serve`

- **Para rodar a build de deploy da aplicação:**  
 `Instale o http-server com o comando: npm i -g http-server`  
 `Faça o build da aplicação com o comando: ng build`  
 `Navegue ate a pasta onde foi feito o build: cd .\dist\github-user-search\browser\`  
 `Execute o build com o comando: http-server`  

 ## Motivação das escolhas técnicas

 - **Angular 19**
 `Escolhido pela familiaridade com a sintaxe`

 - **FortAwesome/FontAwesome**
 `Para estilizar a página com ícones`

 - **RxJs**
`Preferi usar o RxJs por ter melhor controle do fluxo e ser menos verboso que o fetch do Js`

- **CSS**
`Preferi fazer o css na mão por ter mais familiaridade`

## Estrutura do Projeto 
src/  
├── app/  
│   ├── pages/             # Páginas principais da aplicação (busca, perfil)  
│   ├── services/          # Serviços para integração com a API do GitHub  
│   ├── models/            # Interfaces dos dados utilizados  
│   ├── app.component.ts   # Componente raiz  
│   └── app.module.ts      # Módulo principal  
└── index.html             # Arquivo principal HTML  