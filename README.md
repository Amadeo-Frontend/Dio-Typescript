##

# Desafio - Implementando uma tela de Login com validação usando TypeScript

</br>

<div style="display: inline_block" align="center">
     <img align="center" alt="Amadeo-ReactJs" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
     <img align="center" alt="Amadeo-JS" src="https://img.shields.io/badge/TypeScript-323330?style=for-the-badge&logo=typescript&logoColor">
     <img align="center" alt="Amadeo-styled" src="https://img.shields.io/badge/styled-components-1572B6?style=for-the-badge&logo=styled-components&logoColor=white">
  </div>
  </br>

# Projeto

Este é um projeto de uma tela de login simples construído com React, styled-components e TypeScript. Ele usa Yup para validação de formulário e react-hook-form para gerenciamento de estado do formulário.

## Recursos Principais

- Valida o formato de e-mail e senha usando Yup e expressões regulares: Verifica se o e-mail está no formato correto e se a senha tem pelo menos 6 caracteres, incluindo pelo menos uma letra e um número.
A validação é acionada quando o formulário perde o foco (onBlur) e revalida quando o valor de um campo muda (onChange).

- Desabilita o botão de login até que o formulário seja preenchido corretamente: Isso é determinado pela propriedade isValid do objeto formState retornado pelo hook useForm.
  
- Simula uma função de login que registra uma mensagem no console: A função handleLogin é chamada quando o botão de login é clicado. Neste exemplo, ela simplesmente registra uma mensagem no console.

## Tecnologias Utilizadas

- **React JS:** O framework JavaScript utilizado como base para a construção da aplicação.

- **Styled-components**: O estilo da aplicação é criado com styled-components para uma experiência visual atraente.

- **typescript**: O TypeScript é usado para adicionar tipos estáticos à aplicação. Isso ajuda a prevenir erros em tempo de execução, melhora a legibilidade do código e facilita a refatoração e a manutenção do código.

## Instalação

1. Clone este repositório.
2. Instale as dependências usando `npm install`.
3. Execute a aplicação com `npm start`.
4. Comece a buscar e explorar repositórios do GitHub!

Apreciamos o seu interesse neste projeto e esperamos que esta aplicação torne sua experiência de busca de repositórios no GitHub mais eficiente e agradável. Se tiver alguma sugestão ou feedback, por favor, compartilhe comigo!

## Live

(<https://dio-typescript.vercel.app/>)

#

![Image Generation App](https://github.com/Amadeo-Frontend/images_sites/blob/main/dio-login.png)
