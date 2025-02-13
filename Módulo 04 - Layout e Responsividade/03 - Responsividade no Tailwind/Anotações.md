O Tailwind foi pensado para mobile-first, por isso responsividade nele é muito mais fácil do que no css puro.

Quando trabalhamos com responsividade no Tailwind usamos prefixos.

### Exemplo da aula

Quero que meu texto tenha cores diferentes em cada tamanho de tela, só preciso colocar o prefixo relacionado ao tamanho da tela e depois dos dois pontos eu coloco a propriedade que quero.

Para colocar na tela small seria assim:

```
sm: bg-blue-500
```

### Tamanho da tela

Os tamanhos de tela são iguais aos vistos na aula de container.

- sm = max-width: 640px;
- md = max-width: 768px;
- lg = max-width: 1024px;
- xl = max-width: 1280px;
- 2xl = max-width: 1536px;

Para entender melhor sobre como funciona, funciona assim:

Se colocar uma cor em sm, aquela cor ficará de sm em diante, caso coloque outra cor em md, a cor de sm respeitará seu max-width e a partir do momento que chegar no width inicial de md, a cor de md será aplicada de md em diante, essa é a lógica.

Essa lógica é aplicável para tudo, não somente à cor.

Você também pode repetir quantas vezes quiser, ou seja, se você colocou uma cor para ser executada em md e precise colocar um padding também, você coloca o md de cor e depois repete o md com o padding.

### Ordem das classes

Lembre-se que as classes são substitutivas, então o último sempre será o predominante, então deixe pra fazer as alterações de responsividade no final da classe.
