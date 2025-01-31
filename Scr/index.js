// Alterna o tema claro e escuro
function toggleTheme() {
    const body = document.body;
    const calculator = document.getElementById('calculator');
    body.classList.toggle('dark');
    calculator.classList.toggle('dark');
}

// Adiciona números e operadores ao display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Limpa o display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Apaga o último dígito digitado
function clearLast() {
    let displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slice(0, -1);
}

// Calcula a expressão e adiciona no histórico
function calculate() {
    try {
        let expression = document.getElementById('display').value;

        // Tratar operação de raiz quadrada
        if (expression.includes("Math.sqrt")) {
            expression = expression.replace("Math.sqrt(", "Math.sqrt(").replace(")", ")");
        }

        let result = eval(expression);

        // Exibe o resultado no display
        document.getElementById('display').value = result;

        // Adiciona a expressão e o resultado ao histórico
        addToHistory(expression + ' = ' + result);
    } catch (e) {
        document.getElementById('display').value = 'Erro';
    }
}

// Adiciona uma entrada no histórico
function addToHistory(entry) {
    const historyDiv = document.getElementById('history');
    const historyEntry = document.createElement('div');
    historyEntry.textContent = entry;
    historyDiv.prepend(historyEntry);  // Adiciona no topo
}
