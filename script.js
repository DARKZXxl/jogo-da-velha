const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const jogadorDaVez = document.getElementById('turnPlayer');
const start = document.getElementById('start');
const div = document.querySelectorAll('.cell');
const h2 = document.querySelector('#h2')
const reiniciar = document.getElementById('reiniciar')
let jogoFinalizado = false
const vencedor = document.getElementById('vencedo')
let x = []
let o = []

start.addEventListener('click', function () {
  jogoFinalizado = false
  div.forEach( function(item) {
    item.innerText = ''
    item.style.backgroundColor = 'white'
    item.style.color = 'black'
    item.style.pointerEvents = 'auto'
  })
  vencedor.style.display = 'none'
  h2.style.display = 'block'
  x.length = 0
  o.length = 0
  console.log(o)
  console.log(x)
  vencedor.innerText = ''
  vencedor.style.display = 'block'
  if (player1.value === '' || player2.value === '') {
    alert('Digite o nome dos jogadores');
  } else {
    jogadorDaVez.innerText = player1.value;
  }
});


function pintarVitoria(cells) {
  cells.forEach(cell => {
    cell.style.backgroundColor = 'green'; 
  });

  cells.forEach(cell => {
    cell.style.pointerEvents = 'none'; 
  });
  jogoFinalizado = true;
}

div.forEach(function (item) {
  item.addEventListener('click', function oi() {
    
    if(player1.value === '' || player2.value === '') {
      alert('digite o nome dos jogadores')
      return
    }
    if (jogoFinalizado) {
      return
    }
    if(o.includes(item.dataset.positon) || x.includes(item.dataset.positon)) {
      
    }  else {
        if (jogadorDaVez.innerText === player1.value) {
          item.innerText = 'X' 
          jogadorDaVez.innerText = player2.value;
          x.push(item.dataset.positon)
        }
         else {
              item.innerText = 'O' 
              jogadorDaVez.innerText = player1.value; 
              o.push(item.dataset.positon)
            }
          }
          if(x.includes('0.0') && x.includes('0.1') && x.includes('0.2')) {
            h2.style.display = 'none'
            vencedor.innerText =  `o jogador ${player1.value} ganhou`
            pintarVitoria([div[0], div[1], div[2]]);
          }
          if(x.includes('1.0') && x.includes('1.1') && x.includes('1.2')) {
            h2.style.display = 'none'
            vencedor.innerText =  `o jogador ${player1.value} ganhou`
            pintarVitoria([div[3], div[4], div[5]]);
          }
          if(x.includes('2.0') && x.includes('2.1') && x.includes('2.2')) {
            h2.style.display = 'none'
            vencedor.innerText =  `o jogador ${player1.value} ganhou`
            pintarVitoria([div[6], div[7], div[8]]);
          }
          // 
          if(x.includes('0.0') && x.includes('1.0') && x.includes('2.0')) {
            h2.style.display = 'none'
            vencedor.innerText =  `o jogador ${player1.value} ganhou`
            pintarVitoria([div[0], div[3], div[6]]);
          }
          if(x.includes('0.1') && x.includes('1.1') && x.includes('2.1')) {
            h2.style.display = 'none'
            vencedor.innerText =  `o jogador ${player1.value} ganhou`
            pintarVitoria([div[1], div[4], div[7]]);
          }
          if(x.includes('0.2') && x.includes('1.2') && x.includes('2.2')) {
            h2.style.display = 'none'
            vencedor.innerText =  `o jogador ${player1.value} ganhou`
            pintarVitoria([div[2], div[5], div[8]]);
          }
          // 
          if(x.includes('0.0') && x.includes('1.1') && x.includes('2.2')) {
            h2.style.display = 'none'
            vencedor.innerText =  `o jogador ${player1.value} ganhou`
            pintarVitoria([div[0], div[4], div[8]]);
          }
          if(x.includes('0.2') && x.includes('1.1') && x.includes('2.0')) {
            h2.style.display = 'none'
            vencedor.innerText =  `o jogador ${player1.value} ganhou`
            pintarVitoria([div[2], div[4], div[6]]);
          }
          else {
            if(o.includes('0.0') && o.includes('0.1') && o.includes('0.2')) {
              h2.style.display = 'none'
              vencedor.innerText =  `o jogador ${player2.value} ganhou`
              pintarVitoria([div[0], div[1], div[2]]);

            }
            if(o.includes('1.0') && o.includes('1.1') && o.includes('1.2')) {
              h2.style.display = 'none'
              vencedor.innerText =  `o jogador ${player2.value} ganhou`
              pintarVitoria([div[3], div[4], div[5]]);

            }
            if(o.includes('2.0') && o.includes('2.1') && o.includes('2.2')) {
              h2.style.display = 'none'
              vencedor.innerText =  `o jogador ${player2.value} ganhou`
              pintarVitoria([div[6], div[7], div[8]]);

            }
            // 
            if(o.includes('0.0') && o.includes('1.0') && o.includes('2.0')) {
              h2.style.display = 'none'
              vencedor.innerText =  `o jogador ${player2.value} ganhou`
              pintarVitoria([div[0], div[3], div[6]]);

            }
            if(o.includes('0.1') && o.includes('1.1') && o.includes('2.1')) {
              h2.style.display = 'none'
              vencedor.innerText =  `o jogador ${player2.value} ganhou`
              pintarVitoria([div[1], div[4], div[7]]);

            }
            if(o.includes('0.2') && o.includes('1.2') && o.includes('2.2')) {
              h2.style.display = 'none'
              vencedor.innerText =  `o jogador ${player2.value} ganhou`
              pintarVitoria([div[2], div[5], div[8]]);

            }
            // 
            if(o.includes('0.0') && o.includes('1.1') && o.includes('2.2')) {
              h2.style.display = 'none'
              vencedor.innerText =  `o jogador ${player2.value} ganhou`
              pintarVitoria([div[0], div[4], div[8]]);

            }
            if(o.includes('0.2') && o.includes('1.1') && o.includes('2.0')) {
              h2.style.display = 'none'
              vencedor.innerText =  `o jogador ${player2.value} ganhou`
              pintarVitoria([div[2], div[4], div[6]]);

              
          }
        }
        reiniciar.addEventListener('click', function() {
          player1.value = ''
          player2.value = ''
          vencedor.style.display = 'none'
          h2.style.display = 'block'
          jogadorDaVez.innerText = ''
          item.innerText = ''
          item.style.backgroundColor = 'white'
          item.style.color = 'black'
          x.length = 0
          o.length = 0
          console.log(x,o)
          jogoFinalizado = false
        })
      })
    }); 
