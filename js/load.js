$(document).ready(function(){

    //Monitorar todos os cliques em cima do elemento "a" do nosso documento HTML

    $('a').click(function(e){
        e.preventDefault()

        //Criar uma variável local que receba o atributo href do link
        let page = $(this).attr('href')

        $('.modal-title').empty()
        $('.modal-body').empty()

        //Verificar qual conteúdo eu devo carregar
        switch(page){
            //Se for para abria a página sobre mim...
            case 'convencional': 
                $('.modal-title').append('Bike Convencional')
                $('.modal-body').append(`<img class="img-fluid" id="bike" src="imagens/bike-convencional.jpg" alt=""></br>
                <p> </p>
                <p>A bicicleta convencional foi feita para você que queruma bike somente para passeio e para uso urbano, contendo um preço mais acessível e sendo uma ótima opção para o uso no dia a dia.</p>
                <p>A invenção da bicicleta de pedais é atribuída ao ferreiro escocês Kirkpatrick MacMillan, em 1839, apesar de seu modelo ter começado a ser fabricado pelo inglês Thomas McCall, 30 anos depois. Alguns historiadores duvidam que o invento possa ser creditado a MacMillan: não restam nem esboços nem modelos anteriores aos de McCall.</p>`)
                $('#modal-info').modal('show')
            break
            //Se for para abria a página trabalhos...
            case 'mountain': 
                $('.modal-title').append('Mountain Bike')
                $('.modal-body').append(` <img class="img-fluid" id="bike" src="imagens/moutain-bike.jfif" alt=""><br>
                <p> </p>
                <p>As bicicletas Moutain Bike, ou MTB, são para você que ama fazer trilhas, apresentando suspenções para ter maior controle na terra. Porém também podem ser utilizadas no dia a dia.</p>
                <p>Assim como o BMX, o mountain bike surgiu da curiosidade e da ânsia por aventura dos norte-americanos da década de 1970. Foi no estado da Califórnia que ciclistas que buscavam uma experiência diferente do asfalto das estradas resolveram enfrentar trilhas e terrenos acidentados com suas bicicletas.</p>`)
                $('#modal-info').modal('show') 
            break
            //Se for para abria a página meus clientes...
            case 'road': 
                $('.modal-title').append('Road Bike')
                $('.modal-body').append(` <img class="img-fluid" id="bike" src="imagens/road-bike.jpg" alt=""><br>
                <p> </p>
                <p>As Road Bikes foram feitas para você que procura velocidade e gosta de andar em grupos e principalmente na estrada, alcançando incríveis velocidades, além de que são bikes com uma aparência impecável.</p>
                <p>A primeira road bike foi criada pelo alemão Karl Drais Von Sauerbronn. O modelo era o princípio de uma nova era nos esportes, no mundo, por isso a importância. Vários anos depois, veio a bicicleta Rover, um grande avanço em tecnologia para bicicletas. O modelo, feito em 1855, já tinha pedais, quadro com formato parecido com os de hoje e a pilotagem era mais segura. Esse seria um prenúncio da modalidade de estrada.</p>
                <p>Não muito tempo depois, surgiram as primeiras bikes com corrente. Elas tinham um formato mais aerodinâmico, peso menor e guidão curvado. Era o início de uma nova era no esporte que, digamos, começava a “pedalar com rodinhas”!</p>`)
                $('#modal-info').modal('show') 
            break
            //Se for para abria a página meus contatos...
            case 'bmx': 
                $('.modal-title').append('BMX')
                $('.modal-body').append(` <img class="img-fluid" id="bike" src="imagens/bmx.jpg" alt=""><br>
                <p> </p>
                <p>As BMXs são bikes pequenas e de manobras, para você que procura desafios ou gosta de fazer graça em cima da bicicleta, não foram feitas para passeio, mas são muito perigosas, deve-se estar com proteção para realizar manobras nela.</p>
                <p>O BMX surgiu graças à admiração de jovens norte-americanos pelo MotoCross. A vontade de imitar as manobras dos ídolos aliada à falta de equipamento fez com que bicicletas fossem utilizadas em pistas de terra. Nasceu, então, o Bicycle Moto Cross, ou simplesmente BMX.</p>`)
                $('#modal-info').modal('show')  
            break
            default: alert('link não encontrado')
        }

    })
})