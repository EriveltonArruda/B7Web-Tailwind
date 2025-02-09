## O que é?

É uma biblioteca para construir interfaces.

Ele difere do Bootstrap em alguns aspectos, com o bootstrap já temos códigos prontos que só precisamos importar (um botão por exemplo).

O Tailwind funciona de forma diferente, ele age como um auxílio ao css para lhe ajudar a criar suas interfaces.

O Tailwind trabalha através de classes prontas que fazem determinada ação sem que você precise criar um arquivo de css.

Por exemplo:

```
text-lg (deixa o texto maior)
font-medium (grossura do texto)
text-sky-500 (cor do texto, 500 é a tonalidade da cor sky que é azul)
text-slate-700 (tonalidade de uma cor específica (cinza))
```

O tailwind é um pós processador, a vantagem é que ela tem uma automação no projeto, tudo que você for utilizando vai sendo guardado para que quando você gere a versão final do projeto, o tailwind vai pegar apenas o que foi utilizado e vai compactar todos os estilos em um arquivo apenas com as propriedades que você utilizou para criar o seu projeto.
