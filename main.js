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
        profilRasimi: 'https://petepop.com.br/wp-content/uploads/2024/03/instagram-2.jpg',
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
        natija: '⭐⭐⭐⭐',
        ustoziniIsmi: 'Ertan Emirhan',
        qaysiGUrux: 1951,
        profilRasimi: 'https://avatars.mds.yandex.net/i?id=d1bc69e82e3c08f99cc4d25e0399f015_l-5338379-images-thumbs&n=13',
        login: 343221,
        password: 444112,
    },
    {
        id: 3,
        names: 'Azizbek',
        surname: 'Surmanov',
        coin: -90,
        quvvat: 100,
        daraja: 'starter',
        ustoziniIsmi: 'Ertan Emirhan',
        qaysiGUrux: 3212,
        profilRasimi: 'https://sun9-76.userapi.com/impg/BH2W9722Ce0jD7skEULOVJZ8Cp7et_8-2u5a5w/cxlD6Z-2NsI.jpg?size=1080x1335&quality=95&sign=c1a50b5124821b0b9f8b853c721f4961&c_uniq_tag=ggD_cjRNs1XrHayvW-_bhZ8jk5YgTkVtRIoSLC4cX-k&type=album',
        login: 3321412,
        password: 6668544,
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
    if (!result) {
        let eroor = document.querySelector('.eroor')
        eroor.style.display = 'block'
        eroor.innerHTML = `Login yokida parol xato`
        inputpassword.value = ''
        loginid.value = ''
        let intervar = setTimeout(() => {
            eroor.style.display = 'none'
        }, 2000)
    } else {
        let eroor = document.querySelector('.eroor')
        eroor.style.display = 'block'
        eroor.style.color = 'green'
        let saveLocal = localStorage.setItem('studets', JSON.stringify(result))
        window.location.href = 'about.html'
        inputpassword.value = ''
        loginid.value = ''

        eroor.innerHTML = `${result.names} xush kelibsiz`
        let intervar = setTimeout(() => {
            eroor.style.display = 'none'
        }, 2000)
    }
})

