Todos os exemplos citados tem na documentação, lá está mais completo.

https://tailwindcss.com/docs

## Variações do xl

Além dos tamanhos das classes de texto vistas anteriormente, temos variações do xl:

- text-6xl (vai do 1 até o 9)

## Tamanho normal do texto

- text-base (tamanho normal, 16px)

## Centralizar o texto

- text-center (centralizado)
- text-right (direita)
- text-left (esquerda)

## sublinhar o texto

- underline
- line-through (linha no meio do texto)
- italic (deixa o texto em itálico)
- not-italic (remove o itálico)

## lidando com fonte

- font-bold (negrito)
- font-semibold
- font-black (intensidade 900)

- uppercase (texto maiúsculo)
- lowercase (texto minúsculo)

## truncate

A classe truncate basicamente coloca ... caso o texto passe do tamanho e não caiba no espaço livre, para fazer isso funcionar no css seria necessário 3 propriedades:

```
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
```

## line-clamp

Com essa classe podemos definir a partir de quantas linhas o texto começará a ser quebrado, só colocar a quantidade de linhas depois do clamp, por exemplo

- line-clamp-3
