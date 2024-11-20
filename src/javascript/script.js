$(document).ready(function () {
    const sections = $("section");
    const navItems = $(".nav-item");

    // Scrollspy para destacar a seção ativa na navegação
    $(window).on("scroll", function () {
        const scrollPosition = $(window).scrollTop() + $(window).height() / 2;

        let activeSectionIndex = -1;

        sections.each(function (index) {
            const sectionTop = $(this).offset().top;
            const sectionBottom = sectionTop + $(this).outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = index;
                return false;
            }
        });

        if (scrollPosition >= $(sections.last()).offset().top) {
            activeSectionIndex = sections.length - 1;
        }

        navItems.removeClass("active");
        if (activeSectionIndex >= 0) {
            $(navItems[activeSectionIndex]).addClass("active");
        }
    });

    // Troca de mapas e botão ativo
    $(".simulation-btn").on("click", function () {
        const targetId = $(this).data("target");

        // Remove "active" de todos os mapas e adiciona no selecionado
        $(".map").removeClass("active");
        $(`#${targetId}`).addClass("active");

        // Destaque o botão ativo
        $(".simulation-btn").removeClass("active");
        $(this).addClass("active");
    });

    // Alternância de palavras no banner com efeito de fade-in
    const palavras = ["otimizada", "automatizada", "integrada", "em tempo real"];
    let index = 0;
    const palavraElemento = $(".title span"); // Seleciona o elemento span

    function alternarPalavrasComFade() {
        palavraElemento.fadeOut(500, function () {
            // Muda a palavra após o fade-out
            index = (index + 1) % palavras.length;
            palavraElemento.text(palavras[index]);

            // Traz o texto de volta com fade-in
            palavraElemento.fadeIn(500);
        });
    }

    setInterval(alternarPalavrasComFade, 2000); // Alterna a palavra a cada 2 segundos

    // Animação de fade-in para elementos
    const fadeElements = $(".fade-up, .fade-left, .fade-right");

    function checkFadeIn() {
        const scrollPosition = $(window).scrollTop() + $(window).height();
        const windowTop = $(window).scrollTop();

        fadeElements.each(function () {
            const elementTop = $(this).offset().top;
            const elementBottom = elementTop + $(this).outerHeight();

            // Se o elemento está dentro do viewport
            if (scrollPosition >= elementTop && windowTop <= elementBottom) {
                $(this).addClass("show"); // Adiciona animação
            } else {
                $(this).removeClass("show"); // Remove a animação para que ela possa ser reproduzida novamente
            }
        });
    }

    $(window).on("scroll", checkFadeIn); // Verifica ao rolar
    checkFadeIn(); // Verifica inicialmente caso os elementos já estejam visíveis
});
