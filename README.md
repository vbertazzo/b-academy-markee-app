<h1 align='center'>Markee.</h1>
<h2 align='center'>B. Academy - Markdown Editor</h2>
<p align='center'>
  <img
    src='https://res.cloudinary.com/voss/image/upload/v1631818995/readme_logos/markee-screenshot_ny2ojs.png'
    alt='Markee Screenshot'
  />
</p>

Veja o resultado final em:

#### [Link para o app](http://markee-app-vbertazzo.netlify.app)

## 🎯 O que é?

Markee é um editor markdown web desenvolvido durante o bootcamp da [B. Academy](https://b-academy.brainn.co).

O aplicativo deve respeitar uma série de requisitos, que foram dispostos por meio de desafios durante o curso e também ser fiel a um design disponibilizado pela equipe no Figma.

## ⚖️ Decisões e Pontos Relevantes

Adicionei um botão para copiar o conteúdo markdown, que utiliza uma funcionalidade de notificação toast por meio de react hooks como feedback. Por considerar que seria um recurso útil a esse tipo de aplicação e poderia ser adicionado sem muitas mudanças no core do projeto, decidi adicionar mesmo não fazendo parte do escopo inicial.

### Acessibilidade

Esse projeto foi uma boa oportunidade para aprender mais sobre como tornar diferentes tipos de aplicações acessíveis. Principalmente em conseguir identificar melhor que áreas podem ser melhoradas para se adequarem às especificações de acessibilidade.  
Fiquei satisfeito com as soluções encontradas em relação ao indicador de foco nos elementos `input` e `textarea` e também por disponibilizar a possibilidade de navegação somente pelo teclado. Ainda estou estudando mais sobre a navegação utilizada pelos leitores de tela, para conseguir oferecer uma melhor experiência a todos.

## 🚀 Tecnologia, Ferramentas e Conceitos

Esse projeto utiliza:

- [React.js](https://reactjs.org/)
- [Styled Components](https://styled-components.com/)
- [LocalForage](https://github.com/localForage/localForage)
- [ESLint](https://eslint.org/)
- [Husky](https://github.com/typicode/husky)
- [Typescript](https://www.typescriptlang.org/)
- [Netlify](https://www.netlify.com)

## 🔧 Como instalar e rodar

Instalar dependências:

```
$ yarn install
# ou apenas
$ yarn
```

Servir localmente com hot reload em `localhost:3000`.

```
$ yarn dev
```

Build para produção e iniciar servidor

```
$ yarn build
$ yarn start
```

## 📝 Licença

Esse projeto usa a licença [MIT](https://github.com/vbertazzo/b-academy-markee-app/blob/main/LICENSE).
