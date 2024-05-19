async function getAddressByCep() {
    const cep = document.getElementById('cep').value;
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        document.getElementById('rua').value = data.logradouro;
        document.getElementById('bairro').value = data.bairro;
        document.getElementById('cidade').value = data.localidade;
        console.log(data);
    } catch (error) {
        alert(error.message);
    }
}

async function getPrevisao() {
    const latitude = document.getElementById('latitude').value;
    const longitude = document.getElementById('longitude').value;

    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`);
        const data = await response.json();
        console.log(data);
        document.getElementById('resposta').innerHTML = "";
        for(let index=0; index < data.hourly.temperature_2m.length; index++) {
            document.getElementById('resposta').innerHTML += `<div>${data.hourly.time[index]} - ${data.hourly.temperature_2m[index]}</div>`;
        }
    } catch (error) {
        alert(error.message);
    }
}