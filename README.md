# 🦸‍♂️ Super Heróis

> Uma aplicação em Angular para explorar super-heróis, filtrar personagens e visualizar seus atributos em uma interface moderna e responsiva.

![Angular](https://img.shields.io/badge/Angular-19-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Styles-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Status](https://img.shields.io/badge/Status-Concluido-22c55e?style=for-the-badge)

## ✨ Sobre o projeto

O **Super Heróis** é um projeto desenvolvido para praticar Angular na prática, consumindo uma API pública de personagens e exibindo os dados em uma interface com cards, filtros, busca e tela de detalhes.

A proposta é simular uma experiência de catálogo, onde o usuário pode pesquisar heróis, filtrar por editora, abrir os detalhes de cada personagem e voltar para a lista mantendo o estado anterior da navegação.

Esse projeto faz parte da minha evolução como **Desenvolvedor Front-end Júnior**, colocando em prática conceitos importantes de Angular, TypeScript, CSS e organização de componentes.

## 🚀 Funcionalidades

- 🔎 Busca de heróis por nome
- 🏢 Filtro por editora, como Marvel e DC
- 🃏 Cards responsivos com imagem dos personagens
- 📊 Barras visuais para atributos dos heróis
- 📄 Tela de detalhes com informações completas
- 🧭 Navegação entre páginas com Angular Router
- 💾 Preservação de busca, filtro e scroll com `sessionStorage`
- 🎨 Interface estilizada com gradientes, sombras e efeitos de hover

## 🧠 Conceitos praticados

- Componentes standalone
- Data binding
- Event binding
- Two-way binding com `ngModel`
- Services e injeção de dependência
- Consumo de API com `HttpClient`
- Observables e `subscribe`
- Rotas dinâmicas com parâmetro de ID
- Lifecycle hooks: `OnInit` e `AfterViewInit`
- Separação de responsabilidades entre componentes

## 🛠️ Tecnologias

| Tecnologia     | Uso no projeto                            |
| -------------- | ----------------------------------------- |
| Angular 19     | Estrutura da aplicação                    |
| TypeScript     | Lógica dos componentes e services         |
| HTML           | Templates das telas                       |
| CSS            | Estilização, grid, cards e responsividade |
| RxJS           | Manipulação das respostas HTTP            |
| Angular Router | Navegação entre lista e detalhes          |
| Angular Forms  | Busca e filtros com `ngModel`             |

## 🗂️ Estrutura principal

```text
src/
  app/
    super-hero-list/
      super-hero-list.component.ts
      super-hero-list.component.html
      super-hero-list.component.css

    super-hero-detail/
      super-hero-detail.component.ts
      super-hero-detail.component.html
      super-hero-detail.component.css

    super-hero-card/
      super-hero-card.component.ts
      super-hero-card.component.html
      super-hero-card.component.css

  service/
    super-hero.service.ts
```

## ⚙️ Como executar

Clone o repositório:

```bash
git clone <url-do-repositorio>
```

Acesse a pasta do projeto:

```bash
cd super_herois
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm start
```

Acesse no navegador:

```text
http://localhost:4200
```

## 📦 Build

Para gerar a versão de produção:

```bash
npm run build
```

Os arquivos finais serão criados na pasta:

```text
dist/
```

## 🌐 API utilizada

Os dados dos personagens são consumidos da **Superhero API**:

```text
https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api
```

Endpoints usados:

| Endpoint        | Descrição                                  |
| --------------- | ------------------------------------------ |
| `/all.json`     | Retorna todos os heróis                    |
| `/id/{id}.json` | Retorna os detalhes de um herói específico |

## 📚 Aprendizados

Durante o desenvolvimento deste projeto, pratiquei como estruturar uma aplicação Angular usando componentes, services e rotas. Também trabalhei com consumo de API, filtros em tempo real, manipulação de estado simples no navegador e criação de uma interface mais atrativa com CSS.

Um dos pontos mais interessantes foi preservar a experiência do usuário ao navegar entre telas, mantendo a busca, o filtro e a posição do scroll quando ele volta para a listagem.

## 👨‍💻 Autor

Desenvolvido por **Arthur** como projeto de estudo em Angular e Front-end.

Atualmente estou em busca da minha primeira oportunidade como **Desenvolvedor Front-end Júnior**.

## 🤝 Conecte-se comigo

Se você tiver feedbacks, dicas ou souber de alguma oportunidade, será muito bem-vindo entrar em contato.

```text
Feedbacks são sempre bem-vindos.
```
