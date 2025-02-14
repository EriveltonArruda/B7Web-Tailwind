## Conceito

O conceito de concainter é criar uma área delimitada e dentro dessa área colocar o que quiser.

## padrões

Com relação à containers no tailwind temos os padrões:

- none (padrão) = width: 100%;
- sm = max-width: 640px;
- md = max-width: 768px;
- lg = max-width: 1024px;
- xl = max-width: 1280px;
- 2xl = max-width: 1536px;

Mesmo que você coloque o none na propriedade do container, o máximo que ele suporta vai ser sempre 1.536px, então se seu monitor tiver mais que 1536px, ele não vai pegar toda a tela.

## Uso do container em site

Muita gente usa esse container para criar o site todo dentro dele, contudo se colocar somente a classe container não vai resolver porque ele não está centralizado, podemos centralizar ele utilizando um mx-auto (inclusive é o recomendado) ou podemos fazer com que o próprio container fique centralizado, para isso é necessário ir na configuração do tailwind e colocar o center como true.

```
theme: {
  container: {
    center: true
  }
}
```

### Documentação

https://tailwindcss.com/docs/responsive-design#container-queries
