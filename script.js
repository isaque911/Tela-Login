// filepath: z:\Isaque de Carvalho\Documents\GitHub\projetos\projeto-1\script.js
document.querySelector('form').addEventListener('submit', (event) => 
    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;

    if (!email || !senha) {
        alert('Por favor, preencha todos os campos.');
        event.preventDefault(); // Impede o envio do formulário se os campos estiverem vazios
    } else {
        alert('Login realizado com sucesso!');
    }
    event.preventDefault(); // Impede o envio do formulário para fins de demonstração
});
