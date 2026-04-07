export function initDiscursiveActivity(container) {
    const textarea = container.querySelector('.comment-zone');
    const btnResponder = container.querySelector('#btn-responder');
    const btnAlterar = container.querySelector('#btn-alterar');
    const feedback = container.querySelector('#feedback-message');
    const btnFecharFeedback = container.querySelector('#btn-fechar-feedback');

    let comentarioSalvo = "";

    if (!textarea || !btnResponder || !btnAlterar) return;

    btnResponder.addEventListener('click', () => {
        const textoAtual = textarea.value.trim();

        if (textoAtual !== "") {
            comentarioSalvo = textarea.value;
            textarea.value = "";
            textarea.disabled = true;

            feedback.classList.remove('d-none');

            btnResponder.disabled = true;
            btnAlterar.disabled = false;
        }
    });

    btnAlterar.addEventListener('click', () => {
        textarea.value = comentarioSalvo;
        textarea.disabled = false;
        textarea.focus();

        feedback.classList.add('d-none');

        btnAlterar.disabled = true;
        btnResponder.disabled = false;
    });

    if (btnFecharFeedback) {
        btnFecharFeedback.addEventListener('click', () => {
            feedback.classList.add('d-none');
        });
    }
}