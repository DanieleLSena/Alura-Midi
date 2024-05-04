function tocaSom (seletorAudio) {
        const elemento = document.querySelector(seletorAudio);
        
        if (elemento != null && elemento.localName === 'audio') {
                elemento.play();          
            }
        
        else {
             // alert('Elemento não encontrado');
             console.log('Elemento não encontrado ou seletor inválido');
            }
}

//consolida a lista de teclas, ao inves de usar o document.querySelector que informa individualemente cada referência;
const listaDeTeclas = document.querySelectorAll('.tecla');

//enquanto - whille
//for
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;  //tamplete string
    //console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio)
    }

    tecla.onkeydown = function (evento) {

        if (evento.code ==='Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

        // if (evento.code === 'Enter') {
        //     tecla.classList.add('ativa');
        // }
    }
        

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
    

    //lógica
    // contador = contador +1; virou contador++
    //console.log(contador);
}

