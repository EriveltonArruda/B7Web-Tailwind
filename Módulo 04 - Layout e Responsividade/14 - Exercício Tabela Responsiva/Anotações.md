## Descrição

Faça uma tabela que tenha nome, título, email, função e um botão de editar, ela é responsiva.

Na versão mobile ela terá Nome e função como header da tabela e o título e email serão parágrafos comuns que ficarão abaixo do nome.

### passo a passo

Primeiro de tudo vamos criar a estrutura, uma tabela com theader e tbody e colocar os respectivos itens necessários.

### Colunas

Para deixar os itens um abaixo do outro vamos fazer um "jogo", basicamente vamos colocar o título e email to header como hidden, assim como o cafezeira e o email no tbody.

Vamos fazer uma estilizações básicas na tabela (espaçamento, cores e etc).

Em seguida precisamos fazer com que o título e email do header e body apareçam na versão desktop.

Como queremos que eles virem uma célula de tabela e para não ter que transformar eles em display:block, existe uma classe chamada table-cell que transforma o elemento em uma célula de tabela.

### Informações do usuário

Antes de mais nada vamos fazer uma estilização no <tr> que tem o Nome do usuário.

Como na versão mobile precisamos que o título e o email sejam informações do usuário, faremos o seguinte:
No td que tem o nome do usuário vamos adicionar as informações de título e email, eles aparecerão somente na versão mobile.

Para fazer isso colocamos todas as informações dentro de um <p>, assim poderemos colocar a classe hidden neles quando a tela ficar maior utilizando o md:.

### editar

Para finalizar vamos apenas dar uma estilização para o "botão" de editar e fazer mais 4 usuários (afinal é uma tabela).
