## Flex

Quando colocamos flex como display, os itens automaticamente ficarão um ao lado do outro, ou seja, o flex-row fica como padrão.

### Lista de propriedades do flex

- flex-row (deixa um do lado do outro, em linha).
- flex-col (deixa um em cima do outro, como coluna).
- gap (respiro entre os itens).

### Itens relacionados ao justify-content:

- justify-center (centraliza o conteúdo).
- justify-between (espaço entre um item e outro)
- justify-around (espaço ao redor dos itens)

### Itens referentes ao align-items:

- items-end (alinhamento dos itens no fim)
- items-center (alinhamento dos itens no centro).
- items-stretch (comportamento padrão do alinhamento)
- items-start (alinha no começo)

### flex-1 e grow

Essa propriedade controla como os itens flex vão aumentar ou diminuir.

Tenha em mente que o flex-1 funciona da mesma forma do grow

- flex-1 (permite um item flex crescer ou diminuir o quanto for necessário).
- flex-initial (faz o item diminuir e não aumentar).
- flex-auto (permite o item aumentar ou diminuir automaticamente de acordo com o tamanho livre).
- flex-none (previne que um item aumente ou diminua).

Para mais detalhes, siga a documentação, ela é sua melhor amiga.

https://tailwindcss.com/docs/flex#basic-example

### order

com essa classe mudamos a posição de um item flex.

### Dica adicional

Com flex podemos trabalhar ainda mais a responsividade, no exemplo colocamos que a div flex será por padrão flex-col (em coluna), mas a partir de uma tela maior, ela mudará para flex-row.
