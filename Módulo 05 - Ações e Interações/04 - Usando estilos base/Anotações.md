## O que é?

Como o próprio nome diz, é a estilização base de um elemento, podemos definir a estilização base que determinado elemento virá por padrão, digamos que queremos que todos os h1 que forem usados venham como padrão um texto grande e um fundo amarelo, fazemos assim:

```
@layer base {
  h1 {
    @apply text-2xl;
    @apply bg-yellow-600;
  }
}
```

Fique ciente que ao aplicar uma nova propriedade na classe do elemento, essas propriedades serão substituídas.

### Importante!

Não funciona no Tailwind V4, apenas no V3.
