const graficoDolar = document.getElementById('graficoDolar')

const graficoParaDolar = new Chart(graficoDolar, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
        }]
    }
});

setInterval(() => conectaAPI(), 5000)

async function conectaAPI() {
    const conecta = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL')
    const conectaTraduzido = await conecta.json();
    console.log(conectaTraduzido);
}
