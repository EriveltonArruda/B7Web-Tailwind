## Documentação

https://tailwindcss.com/docs/animation

### Exemplo da aula

Ao passar o mouse no elemento, ele terá que ir até o fim da tela, primeiramente precisamos aplicar um hover no elemento:

- hover:w-full

### Propriedade transition

Em seguida precisamos combinar algumas propriedades, começaremos com a transition, só de colocar a propriedade transition já temos animações, mesmo que imperceptíveis, a propriedade transition tem algumas variações:

- transition all = qualquer propriedade desse elemento fará transição.
- transition-colors = animação de cores.
- transition-opacity = animação de opacidade.

### Duração da animação

Em seguida colocamos a duração usando a propriedade duration

- duration-(0-1000)

### Funcionamento

Também precisamos colocar o funcionamento da animação, utilizamos o ease para isso.

- ease-linear
- ease-in
- ease-in-out
- ease-initial
- ease-out

### Delay

Também podemos controlar quanto tempo demore a começar a animação.

- delay-500

### animate

No Tailwind existem classes de animações pré definidas, é a classe animate.

Quando utilizamos ela não precisamos colocar transition, nem duração, nem funcionamento, apenas colocar animate-<funcionalidade>:

- animate-spin
- animate-ping
- animate-pulse
- animate-bounce
- animate-none
