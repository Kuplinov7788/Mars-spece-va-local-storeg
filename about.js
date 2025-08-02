let getStudents = JSON.parse(localStorage.getItem('studets'))
console.log(getStudents);


let avatar = document.querySelectorAll('.avatar')
let names = document.querySelector('.name')

names.textContent = `${getStudents.names} | ${getStudents.surname}`
avatar[0].src = getStudents.profilRasimi
avatar[1].src = getStudents.profilRasimi