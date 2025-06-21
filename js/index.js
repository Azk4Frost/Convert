//Constantes obtendo o seletor de tags e ID's para manipulação em Javascript
const form = document.querySelector('form');
const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const reset = document.getElementById('resetButton');
const reseticon = document.getElementById('resetIcon');

//Constantes com elementos do footer e suas tags filhas
const footer = document.querySelector('footer')
const description = document.getElementById('description')
const resultValue = document.getElementById('result')

/*Aplica um evento que vai escutar o input
E implementa um regex em tudo o que for escrito nele,
Substituindo letras por string vazia e fazendo com que só se permita escrever numeros no campo*/
amount.addEventListener('input', () => {
    const regexr = /\D+/g
    amount.value = amount.value.replace(regexr, "")
})

/* Evento de submit no formulário que será responsável por
pegar as informações digitadas pelo usuário e transformar */
form.onsubmit = (event) => {
    event.preventDefault()
    const selectedCurrency = currency.value
    const amountValue = parseFloat(amount.value)
    switch(selectedCurrency) {
        case 'USD':
            let USD = 5
            convertcurrency(amountValue,USD,'US$')
            break
        case 'EUR':
            let EUR = 6
            convertcurrency(amountValue,EUR,'€')
            break
        case 'GBP':
            let GBP = 7
            convertcurrency(amountValue, GBP, '£')
            break
        case 'AOA':
            let AOA = 0.006
            convertcurrency(amountValue, AOA, 'Kz')
    }
}

// função responsável por fazer as informações corretas aparecerem no footer
const convertcurrency = (amount,price,symbol) => {
    try{
        const convertedValue = (amount / price).toFixed(2)
        description.textContent = `${symbol} 1 = ${price} reais`
        resultValue.textContent = `${symbol} ${convertedValue}`
        footer.classList.add('show-result')
    }catch(error) {
        footer.classList.remove('show-result')
        console.log(error)
    }
}


reset.onclick = (event) => {
    if(footer.classList.contains('show-result')) {
        footer.classList.remove('show-result')

        reseticon.classList.remove('degrease');
        void reseticon.offsetWidth;
        reseticon.classList.add('degrease');

        
    }else {
        return console.error('houve um erro inespeado.');
    }
};

