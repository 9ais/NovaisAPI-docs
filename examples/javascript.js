async function consultarAPI() {
    const nick = 'seu_nick_aqui';
    const url = `https://novaisapi.onrender.com/wins/flamemc/${nick}`;
    
    const response = await fetch(url);
    const data = await response.text();
    
    console.log('Resultado:', data);
}

consultarAPI();
