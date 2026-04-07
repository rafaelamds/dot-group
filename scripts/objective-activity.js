export function initObjectiveActivity(container) {
    const formObjective = container.querySelector('.form-checkboxes');
    const btnResponderObj = container.querySelector('#btn-responder-obj');
    const btnAlterarObj = container.querySelector('#btn-alterar-obj');
    const feedbackObj = container.querySelector('#feedback-message-obj');
    const btnFecharFeedbackObj = container.querySelector('#btn-fechar-feedback-obj');

    if (!formObjective || !btnResponderObj || !btnAlterarObj) return;

    const checkboxes = formObjective.querySelectorAll('input[type="checkbox"]');

    const checkSelectionStatus = () => {
        let hasSelection = false;

        checkboxes.forEach(cb => {
            const wrapper = cb.closest('.checkbox-item');

            if (cb.checked) {
                hasSelection = true;
                wrapper.classList.add('is-selected');
            } else {
                wrapper.classList.remove('is-selected');
            }
        });

        btnResponderObj.disabled = !hasSelection;
    };

    checkboxes.forEach(cb => {
        cb.addEventListener('change', checkSelectionStatus);
    });

    btnResponderObj.addEventListener('click', () => {
        checkboxes.forEach(cb => {
            cb.disabled = true;
            cb.closest('.checkbox-item').classList.add('is-disabled');
        });

        feedbackObj.classList.remove('d-none');
        btnResponderObj.disabled = true;
        btnAlterarObj.disabled = false;

        feedbackObj.setAttribute('tabindex', '-1');
        feedbackObj.focus();
    });

    btnAlterarObj.addEventListener('click', () => {
        checkboxes.forEach(cb => {
            cb.disabled = false;
            cb.closest('.checkbox-item').classList.remove('is-disabled');
        });

        feedbackObj.classList.add('d-none');
        btnAlterarObj.disabled = true;

        checkSelectionStatus();
    });

    if (btnFecharFeedbackObj) {
        btnFecharFeedbackObj.addEventListener('click', () => {
            feedbackObj.classList.add('d-none');
        });
    }
}