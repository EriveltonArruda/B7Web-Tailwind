### textos

Ao digitar text-<propriedade> temos acesso à propriedade selecionada, nesse caso escolheremos a cor.

Quando trabalhamos com cores no tailwind precisamos definir sua intensidade (menos no branco, branco não tem intensidade), essa intensidade vai de 50 a 900 (caso esteja usanto tailwind intelisense, ele vai mostrar as opções).

### Cores personalizadas

Contudo, o tailwind trabalha com cores pré definidas, se você souber o código hexadecimal de alguma cor e quiser colocar essa cor no seu texto, coloque dentro de colchetes [].

### combinações de cor

Temos variações de transparência também (opacidade), basta colocar uma / depois da cor selecionada

### Combinando propriedades

Para exemplificar a combinação de propriedades, vamos adicionar um background, as propriedades de cores funcionam da mesma forma que foi utilizada no text, a diferença é que como é um background, utilizamos bg-<propriedade>.

### Bordas

Com relação as cores nas bordas, temos a opção de colocar cores nos 4 cantos da borda:

- t para top
- l para esquerda (left)
- r para direita (right)
- b para baixo (bottom)

Caso você coloque a borda de uma cor e coloque somente a parte esquerda de outra cor, toda a borda terá a cor que foi definida em border e somente o lado esquero terá outra cor.

### Documentação

https://tailwindcss.com/docs/colors
