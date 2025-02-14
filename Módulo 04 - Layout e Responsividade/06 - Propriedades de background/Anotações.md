## Imagem no background

Temos duas formas de fazer isso, a primeira é utilizando o style="url()" igual no css, mas podemos fazer no tailwind também, dessa forma:

- bg-[url(<imagem>)]; (pode colocar link ou o caminho da pasta da imagem).

Para que a imagem apareça é necessário colocar altura e largura na div.

### Outras propriedades

- overflow-y-scroll = faz com que apareça uma barra de rolagem para textos grandes.
- bg-local = faz com que a imagem se mova junto com o scroll
- bg-scroll = faz com que os textos rolem e a imagem fique parada.

### posicionamento

- bg-right = mostra o lado direito da imagem.
- bg-right-bottom = mostra a parte de baixo do lado direito.
- bg-bottom = mostra a parte de baixo da imagem.
- bg-center = mostra o meio da imagem (o centro).
- bg-left = mostra o lado esquerdo da imagem.
- bg-left-bottom = mostra a parte de baixo do lado esquerdo.
- bg-repeat = vai fazer com que a imagem fique repetindo até preencher o tamanho.
- bg-no-repeat = não repete a imagem.
- bg-cover = faz com que toda a imagem apareça preenchida no tamanho livre da div.

## Dúvidas?

Veja a documentação, sempre!

https://tailwindcss.com/docs/background-image#basic-example
