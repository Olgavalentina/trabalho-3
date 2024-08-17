function changeStatus(element) {
    if (element.classList.contains('livre')) {
        element.classList.remove('livre');
        element.classList.add('ocupado');
        element.querySelector('p').textContent = 'Ocupado';
    } else if (element.classList.contains('ocupado')) {
        element.classList.remove('ocupado');
        element.classList.add('manutencao');
        element.querySelector('p').textContent = 'Manutenção';
    } else if (element.classList.contains('manutencao')) {
        element.classList.remove('manutencao');
        element.classList.add('livre');
        element.querySelector('p').textContent = 'Livre';
    }
}