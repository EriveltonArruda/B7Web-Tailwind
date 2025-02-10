Estamos simulando um projeto com Node, então foi necessário criar um arquivo package.json com o comando:

- npm init

## Instalando o Tailwind

Adicionando dependências de desenvolvimento:

- npm i -D tailwindcss

Siga a documentação:

- https://tailwindcss.com/docs/installation/tailwind-cli

Em seguida rode o comando para fazer o tailwind ficar monitorando:

- npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch

E crie um link no header apontando para a pasta ./output.css, com isso o Tailwind funcionará.
