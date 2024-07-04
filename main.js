// Script JavaScript para funcionalidades interativas (exemplo básico)

// Exemplo de código JavaScript para manipulação de eventos
document.addEventListener('DOMContentLoaded', function() {
    // Exemplo: alterar a cor de fundo ao passar o mouse sobre o título
    var headerTitle = document.querySelector('header h1');
    headerTitle.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#333';
        this.style.color = '#fff';
    });
    headerTitle.addEventListener('mouseleave', function() {
        this.style.backgroundColor = 'rgba(0, 100, 0, 0.7)';
        this.style.color = '#fff';
    });
});
