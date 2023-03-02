async function conectaAPI() {
    const conecta = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL");
    const conectTraduzido = await conecta.json();
    postMessage(conectTraduzido.USDBRL);
}

addEventListener("message", () => {
    conectaAPI();
    setInterval(() => conectaAPI(), 5000);
})