function checkAnswers() {
    // Respostas corretas cadastradas
    const answers = { q1: "B", q2: "C", q3: "A" };
    
    let score = 0;
    const form = document.getElementById('quizForm');
    const formData = new FormData(form);

    // Verifica cada resposta selecionada
    if (formData.get('q1') === answers.q1) score++;
    if (formData.get('q2') === answers.q2) score++;
    if (formData.get('q3') === answers.q3) score++;

    const resultDiv = document.getElementById('result');
    const congratsDiv = document.getElementById('congratsBonus');

    // Se acertar as 3 perguntas
    if (score === 3) {
        resultDiv.innerHTML = "Pontuação: 3/3 - Excelente!";
        resultDiv.style.color = "#2e7d32";
        congratsDiv.style.display = "block"; // Faz a tela de parabéns aparecer
    } else {
        resultDiv.innerHTML = `Você acertou ${score} de 3. Tente novamente para gabaritar o quiz!`;
        resultDiv.style.color = "#d32f2f";
        congratsDiv.style.display = "none"; // Garante que fica escondida se errar
    }
}