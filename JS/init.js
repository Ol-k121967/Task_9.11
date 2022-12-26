document.getElementById('btn_generace').addEventListener('click', function () {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
})


document.getElementById('btn_reset').addEventListener('click', function () {
    document.getElementById('firstNameOutput').innerText = 'Имя';
    document.getElementById('secondNameOutput').innerText = 'Отчество';
    document.getElementById('genderOutput').innerText = 'Генерация пола';
    document.getElementById('birthYearOutput').innerText = 'Генерация года рождения';
    document.getElementById('surnameOutput').innerText = 'Генерация фамилии';
    document.getElementById('professionOutput').innerText = 'Профессия';
})



