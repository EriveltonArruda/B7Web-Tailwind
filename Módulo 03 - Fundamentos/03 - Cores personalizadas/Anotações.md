Se tivermos que usar cores personalizadas que não tem na lista de cores do tailwind, podemos criar a nossa própria lista de cores, isso evita de repetir o hexadecimal toda vez que for usar, sua utilização é muito parecida com uma variável no css.

Basta ir no arquivo de configuração do tailwind e adicionar um objeto colors dentro do objeto extend.

## Arquivo tailwind.config

Caso não tenha um arquivo de config, adicione manualmente na raiz do seu projeto, crie um arquivo chamado tailwind.config.js e adicione o seguinte código:

```
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // adicionando cores no tailwind
      colors: {
        'vermelho': '#FF0000',
        'vermelho-escuro': '#990000'
      }
    },
  },
  plugins: [],
}
```

### Documentação

https://tailwindcss.com/docs/colors#using-a-custom-palette
