# Hunt Pokémon (protótipo)

Protótipo de jogo idle de hunt no navegador, pensado para celular.

- `index.html`: página, estilos e carregamento dos dados de animação.
- `game.js`: código do jogo (versão minificada de `src/game.src.js`).
- Para gerar o `game.js` de novo depois de editar o código-fonte:
  `npx terser src/game.src.js -c passes=3,toplevel -m toplevel -o game.js`

## O que tem

- Hunt idle em visão lateral, com cenário em camadas por bioma (Floresta, Vulcão, Lago, Usina, Caverna) e 4 faixas de nível.
- 285 espécies e 93 formas mega/primal. As formas mega usam sprite próprio do PMD Collab quando existe; as outras usam o sprite da espécie com aura.
- Mega Evolução: Pulseira Mega + pedra segurada + Nv 30. A energia enche batendo; dura 45 s.
- Especial de cada Pokémon: 3 cargas, uma volta a cada 20 s, com cena de corte e efeito por tipo.
- Arena com combo de 3 golpes, esquiva perfeita em câmera lenta, chefe furioso aos 50% de vida e torre infinita com recorde semanal.
- Arena vista de cima (estilo arena oval): Liga melhor de 3 contra bot com ranks (Bronze a Mestre) e Chefes difíceis com 3 fases. Botões Atq, Hab, Q, ULT, Esquiva e Evo. Online com outros jogadores ainda não ligado.
- Arena: luta 1 contra 1 controlada pelo jogador (joystick na tela, controle de videogame ou teclado) contra 16 chefes mega. Os golpes do chefe avisam onde vão cair. A entrada do jogador passa toda por um objeto `INP`, que é o mesmo formato que um PvP online mandaria pela rede.

## Créditos

Fan game sem fins lucrativos. Pokémon e todos os nomes relacionados pertencem à Nintendo, Game Freak e The Pokémon Company.

Sprites e retratos: [PMD Collab](https://sprites.pmdcollab.org/), sob a licença CC BY-NC 4.0, com sprites originais da Spike Chunsoft. Eles são carregados direto do repositório do PMD Collab e não estão neste repositório. A lista de artistas fica na aba Ajustes do jogo.

Ícones de itens: [PokeAPI](https://github.com/PokeAPI/sprites). Fonte Pixelify Sans, licença SIL OFL.

A licença dos sprites não permite uso comercial. Antes de cobrar qualquer coisa no jogo, eles precisam ser trocados por arte própria.
