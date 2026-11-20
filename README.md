# Hunt Pokémon (protótipo)

Protótipo de jogo idle de hunt no navegador, pensado para celular.

- `index.html`: página, estilos e carregamento dos dados de animação.
- `game.js`: código do jogo (versão minificada de `src/game.src.js`).
- Para gerar o `game.js` de novo depois de editar o código-fonte:
  `npx terser src/game.src.js -c passes=3,toplevel -m toplevel -o game.js`

## Créditos

Fan game sem fins lucrativos. Pokémon e todos os nomes relacionados pertencem à Nintendo, Game Freak e The Pokémon Company.

Sprites e retratos: [PMD Collab](https://sprites.pmdcollab.org/), sob a licença CC BY-NC 4.0, com sprites originais da Spike Chunsoft. Eles são carregados direto do repositório do PMD Collab e não estão neste repositório. A lista de artistas fica na aba Ajustes do jogo.

Ícones de itens: [PokeAPI](https://github.com/PokeAPI/sprites). Fonte Pixelify Sans, licença SIL OFL.

A licença dos sprites não permite uso comercial. Antes de cobrar qualquer coisa no jogo, eles precisam ser trocados por arte própria.
