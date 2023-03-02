addEventListener("message", () => {
    conectaAPI();
    setInterval(() => conectaAPI(), 5000);
});

async function conectaAPI() {
    const conecta = await fetch("https://economia.awesomeapi.com.br/json/last/JPY-BRL");
    const conectTraduzido = await conecta.json();
    postMessage(conectTraduzido.JPYBRL);
}