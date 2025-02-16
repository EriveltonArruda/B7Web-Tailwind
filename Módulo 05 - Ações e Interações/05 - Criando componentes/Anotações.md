## Components

Componentes são grupos de estilizações padrão que são aplicados a um elemento, colocamos um nome nesse componente e ao chamar ele em determinado elemento, todas as propriedades que estão no grupo de componentes serão aplicadas ao elemento.

Esses grupos são feitos no arquivo geral de css.

```
@layer components {
  .card {
    @apply p-3 border-2 border-gray-700 m-2 rounded-md;
  }
}
```

Sempre que um elemento com a classe .card for criado, todas as propriedades do componente serão aplicadas.

Componentes são muito utilizados, são uma ótima forma de organizar e padronizar seu código, imagine que você quer que todos os botões do seu site sejam iguais, crie um componente e aplique nos botões, assim todos ficarão padronizados.

### Documentação

A forma de aplicar os componentes mudou no tailwind V4, siga a documentação:

https://tailwindcss.com/docs/styling-with-utility-classes#using-components
