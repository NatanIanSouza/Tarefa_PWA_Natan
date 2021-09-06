$(document).ready(function(){

    $('a').addClass('text-white')

    $('#btn-dark').click(function(light){
        light.preventDefault()

        $('.jumbotron').removeClass('bg-natan-souza')
        $('.jumbotron').removeClass('bg-light')
        $('.jumbotron').addClass('bg-dark')
        $('a').addClass('text-white')
        $('a').removeClass('text-dark')

        $('.navbar').removeClass('bg-menu')
        $('.navbar').removeClass('bg-menu-light')
        $('.navbar').addClass('bg-menu-dark')
        $('a').addClass('text-white')
        $('a').removeClass('text-dark')

        $('.container-fluid').removeClass('bg-rodape')
        $('.container-fluid').removeClass('bg-rodape-light')
        $('.container-fluid').addClass('bg-rodape-dark')
        $('a').addClass('text-white')
        $('a').removeClass('text-dark')
    })

    $('#btn-light').click(function(light){
        light.preventDefault()

        $('.jumbotron').removeClass('bg-natan-souza')
        $('.jumbotron').removeClass('bg-dark')
        $('.jumbotron').addClass('bg-light')
        $('a').addClass('text-dark')
        $('a').removeClass('text-white')

        $('.navbar').removeClass('bg-menu')
        $('.navbar').removeClass('bg-menu-dark')
        $('.navbar').addClass('bg-menu-light')
        $('a').addClass('text-dark')
        $('a').removeClass('text-white')
        
        $('.container-fluid').removeClass('bg-rodape')
        $('.container-fluid').removeClass('bg-rodape-dark')
        $('.container-fluid').addClass('bg-rodape-light')
        $('a').addClass('text-dark')
        $('a').removeClass('text-white')

    })

    $('#btn-original').click(function(light){
        light.preventDefault()

        $('.jumbotron').removeClass('bg-light')
        $('.jumbotron').removeClass('bg-dark')
        $('.jumbotron').addClass('bg-natan-souza')
        $('a').addClass('text-white')
        $('a').removeClass('text-dark')

        $('.navbar').removeClass('bg-menu-light')
        $('.navbar').removeClass('bg-menu-dark')
        $('.navbar').addClass('bg-menu')
        $('a').addClass('text-white')
        $('a').removeClass('text-dark')

        $('.container-fluid').removeClass('bg-rodape-light')
        $('.container-fluid').removeClass('bg-rodape-dark')
        $('.container-fluid').addClass('bg-rodape')
        $('a').addClass('text-white')
        $('a').removeClass('text-dark')

    })
})