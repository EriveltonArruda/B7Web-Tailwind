## Descrição do exercício

Será uma área de classificados de uma casa, com 3 imagens, onde a primeira é maior que as outras, é exatamente o dobro de tamanho.

Embaixo teremos o título e 3 tags.

Quando estamos em dispositivos menores, uma imagem ficará embaixo da outra.

### Área geral

Começaremos pela área geral para deixar tudo alinhado, um padding, bordas arredondadas e um fundo cinza

### Título

Não tem muito o que fazer, só colocar um tamanho de texto, deixar em negrito e colocar um margin-top

### área das tags

Nas tags vamos deixar a área das tags em flex, com gap entre elas e um margin-top

### Tags

As tags terão bordas arredondadas, padding lateral um pouco maior e um padding de cima e de baixo bem pequeno, o texto será small as cores serão um verde escuro de background e um texto branco.

### Imagens

Na área de imagens ela precisará ser grid e dentro dela teremos 3 divs (uma para cada imagem).

Lembre-se que estamos fazendo mobile-first, então será apenas uma coluna, as 3 colunas só aparecerão em telas maiores, ou seja, quando for aplicar a responsividade.

### Responsividade

Primeira coisa a ser feita, alterar a quantidade de colunas do grid, como a foto principal tem o dobro de tamanho das demais, colocamos o grid com 3 colunas e na foto de destaque colocamos como pegando duas colunas.

Na imagem que vai ocupar duas colunas colocamos o col-span, ela também pega 2 linhas.

Também precisamos colocar em h-full a altura da imagem em destaque, assim ela pegará todo o espaço disponível.
