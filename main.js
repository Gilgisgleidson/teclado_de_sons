function toca (som){
    const elemento = document.querySelector(som);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        alert('Elemento não encontrado ou inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla')

for (const element of listaDeTeclas) {
    const tecla = element,
        instrumento = tecla.classList[1],
        idAudio = `#som_${instrumento}`;

    tecla.onclick = function (){
        toca(idAudio);
    }

    tecla.onkeydown = function (evento){
        console.log(evento.code === 'Space')
        if (evento.code === 'Space' || evento.code === 'Enter' ) {            
            tecla.classList.add('ativa');
        }
        
    }
    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }
}

