let studets = [
    {
        id: 2,
        names: 'Bilol',
        surname: 'PDD',
        coin: 12221,
        quvvat: 441,
        daraja: 'hard',
        ustoziniIsmi: 'Ertan Emirhan',
        qaysiGUrux: 1951,
        profilRasimi: '',
        login: 10202020,
        password: 32313,

    },
    {
        id: 1,
        names: 'abu',
        surname: 'Abujonka',
        coin: 2024,
        quvvat: 590,
        daraja: 'bot',
        ustoziniIsmi: 'Ertan Emirhan',
        qaysiGUrux: 1951,
        profilRasimi: '',
        login: 343221,
        password: 444112,
    }

]



let submit = document.querySelector('.submit-btn')

submit.addEventListener('click', (e) => {
    e.preventDefault()
    let inputpassword = document.querySelector('.password')
    let valuepassword = inputpassword.value
    let loginid = document.querySelector('.login')
    let valueLogin = loginid.value

    let result = studets.find((e) => Number(valueLogin) === e.login && Number(valuepassword) === e.password)
    console.log(result);

})

