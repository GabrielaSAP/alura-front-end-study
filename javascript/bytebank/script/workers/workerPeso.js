async function conectaAPI() {
    const conecta = await fetch('https://economia.awesomeapi.com.br/last/ARS-BRL')
    const conectaTraduzido = await conecta.json();
    postMessage(conectaTraduzido.ARSBRL)
}

addEventListener('message', () => {
    conectaAPI();
    setInterval(() => conectaAPI(), 5000);
})