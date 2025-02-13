## grid

Para definir o display de uma div como grid, basta digitar grid no tailwind.

### Colunas

Defina as colunas com o comando:

- grid-cols-<number> (quantidade de colunas).

### Personalização de um item

Cada item do grid é personalizável.

- col-span-full (pega todo o espaço disponível).
- col-span-<number> (pega a quantidade de espaços passados no número).

Para exemplificar sobre essas duas propriedades, quero que o item 05 pegue a posição dele e a posição do item 06, para isso preciso determinar a posição inicial e final do espaço que ele vai pegar.

- col-start-<number> (posição da coluna inicial do elemento).
- col-end-<number> (posição da coluna final do elemento).

Caso queira mudar a linha, troque o col pelo row.

- row-start-<number>
- row-end-<number>
- row-span-full
- row-span-<number>

Veja a documentação.
https://tailwindcss.com/docs/display#grid
