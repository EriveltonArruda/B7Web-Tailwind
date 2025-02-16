## Aplicação do group

A propriedade group não se aplica somente a hover, mas o exemplo mais famoso é com hover.

Como exemplo, quero que o fundo da div fique verde e o texto que está cinza fique branco também, então ao passar o clique na div geral, quero que os elementos de texto também apliquem propriedades.

Precisamos aplicar a propriedade group no elemento pai, que nesse caso é a div geral, assim a div geral e os elementos filhos dela farão parte de um grupo.

Depois de colocar o group na div pai, precisamos ir no elemento filho e colocar o que queremos que seja aplicado no grupo quando o hover acontecer, nesse caso queremos que o texto fique branco, então nos elementos filhos colocamos assim:

```
group-hover:text-white
```

### Nomear o grupo

É utilizado quando trabalhamos com diversos grupos, nomeando eles fica mais organizado.

- group/coisa (nomeando um grupo).
- group-hover/coisa:text-white (aplicando a propriedade ao grupo nomeado).
