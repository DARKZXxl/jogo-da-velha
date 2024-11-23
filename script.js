const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const jogadorDaVez = document.getElementById('turnPlayer');
const start = document.getElementById('start');
const div = document.querySelectorAll('.cell');
const h2 = document.querySelector('h2')
const reiniciar = document.getElementById('reiniciar')
let jogoFinalizado = false
const x = []
const o = []

start.addEventListener('click', function () {
  if (player1.value === '' || player2.value === '') {
    alert('Digite o nome dos jogadores');
  } else {
    jogadorDaVez.innerText = player1.value;
  }
});


function pintarVitoria(cells) {
  cells.forEach(cell => {
    cell.style.backgroundColor = 'green'; // Altere a cor do fundo para verde
  });

  cells.forEach(cell => {
    cell.style.pointerEvents = 'none'; // Impede qualquer interação com as células vencedoras
  });
  jogoFinalizado = true; // Marca o jogo como finalizado
}



div.forEach(function (item) {
  item.addEventListener('click', function (ev) {
    if (jogoFinalizado) {
      return; // Se o jogo acabou, não permite mais cliques
    }
    if(o.includes(item.dataset.positon) || x.includes(item.dataset.positon)) {
      
    } else {
        if (jogadorDaVez.innerText === player1.value) {
          item.innerText = 'X' 
          jogadorDaVez.innerText = player2.value;
          x.push(item.dataset.positon)
            } else {
              item.innerText = 'O' 
              jogadorDaVez.innerText = player1.value; 
              o.push(item.dataset.positon)
            }
          }
          if(x.includes('0.0') && x.includes('0.1') && x.includes('0.2')) {
            h2.innerText =  `o jogador ${player1.value} ganhou`
            pintarVitoria([div[0], div[1], div[2]]);
          }
          if(x.includes('1.0') && x.includes('1.1') && x.includes('1.2')) {
            h2.innerText =  `o jogador ${player1.value} ganhou`
            pintarVitoria([div[3], div[4], div[5]]);
          }
          if(x.includes('2.0') && x.includes('2.1') && x.includes('2.2')) {
            h2.innerText =  `o jogador ${player1.value} ganhou`
            pintarVitoria([div[6], div[7], div[8]]);
          }
          // 
          if(x.includes('0.0') && x.includes('1.0') && x.includes('2.0')) {
            h2.innerText =  `o jogador ${player1.value} ganhou`
            pintarVitoria([div[0], div[3], div[6]]);
          }
          if(x.includes('0.1') && x.includes('1.1') && x.includes('2.1')) {
            h2.innerText =  `o jogador ${player1.value} ganhou`
            pintarVitoria([div[1], div[4], div[7]]);
          }
          if(x.includes('0.2') && x.includes('1.2') && x.includes('2.2')) {
            h2.innerText =  `o jogador ${player1.value} ganhou`
            pintarVitoria([div[2], div[5], div[8]]);
          }
          // 
          if(x.includes('0.0') && x.includes('1.1') && x.includes('2.2')) {
            h2.innerText =  `o jogador ${player1.value} ganhou`
            pintarVitoria([div[0], div[4], div[8]]);
          }
          if(x.includes('0.2') && x.includes('1.1') && x.includes('2.0')) {
            h2.innerText =  `o jogador ${player1.value} ganhou`
            pintarVitoria([div[2], div[4], div[6]]);
          }
          else {
            if(o.includes('0.0') && o.includes('0.1') && o.includes('0.2')) {
              h2.innerText =  `o jogador ${player2.value} ganhou`
            pintarVitoria([div[0], div[1], div[2]]);
            }
            if(o.includes('1.0') && o.includes('1.1') && o.includes('1.2')) {
              h2.innerText =  `o jogador ${player2.value} ganhou`
            pintarVitoria([div[3], div[4], div[5]]);
            }
            if(o.includes('2.0') && o.includes('2.1') && o.includes('2.2')) {
              h2.innerText =  `o jogador ${player2.value} ganhou`
            pintarVitoria([div[6], div[7], div[8]]);
            }
            // 
            if(o.includes('0.0') && o.includes('1.0') && o.includes('2.0')) {
              h2.innerText =  `o jogador ${player2.value} ganhou`
            pintarVitoria([div[0], div[3], div[6]]);
            }
            if(o.includes('0.1') && o.includes('1.1') && o.includes('2.1')) {
              h2.innerText =  `o jogador ${player2.value} ganhou`
            pintarVitoria([div[1], div[4], div[7]]);
            }
            if(o.includes('0.2') && o.includes('1.2') && o.includes('2.2')) {
              h2.innerText =  `o jogador ${player2.value} ganhou`
            pintarVitoria([div[2], div[5], div[8]]);
          }
          // 
          if(o.includes('0.0') && o.includes('1.1') && o.includes('2.2')) {
            h2.innerText =  `o jogador ${player2.value} ganhou`
            pintarVitoria([div[0], div[4], div[8]]);
          }
          if(o.includes('0.2') && o.includes('1.1') && o.includes('2.0')) {
            h2.innerText =  `o jogador ${player2.value} ganhou`
            pintarVitoria([div[2], div[4], div[6]]);
          }
        }
    })
  }); 
  reiniciar.addEventListener('click', function() {
    jogadorDaVez.innerText = ''
    player1.value = ''
    player2.value = ''
    item.innerText = ''
    for(let i = 0;i < x.length;i++) {
      x.pop()
    }
    for(let i = 0;i < o.length;i++) {
      o.pop()
    }
    console.log(x,o)
    jogoFinalizado = false;
  })
  