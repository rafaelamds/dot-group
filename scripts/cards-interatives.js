export function initInteractiveCards(container) {
    const botoesAbrir = container.querySelectorAll('.btn-abrir');
    const botoesFechar = container.querySelectorAll('.btn-fechar');

    botoesAbrir.forEach((botao) => {
        botao.addEventListener('click', function () {
            const cardSelecionado = this.closest('.flip-card');

            container.querySelectorAll('.flip-card.is-flipped').forEach(cardAberto => {
                if (cardAberto !== cardSelecionado) {
                    cardAberto.classList.remove('is-flipped');
                    cardAberto.style.zIndex = '1';
                }
            });

            cardSelecionado.style.zIndex = '10';
            cardSelecionado.classList.add('is-flipped');
        });
    });

    botoesFechar.forEach(botao => {
        botao.addEventListener('click', function () {
            const cardSelecionado = this.closest('.flip-card');
            cardSelecionado.classList.remove('is-flipped');

            setTimeout(() => {
                if (!cardSelecionado.classList.contains('is-flipped')) {
                    cardSelecionado.style.zIndex = '1';
                }
            }, 600);
        });
    });
}