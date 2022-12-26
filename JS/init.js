document.getElementById('btn_generace').addEventListener('click', function () {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
})


document.getElementById('btn_reset').addEventListener('click', function () {
    document.getElementById('firstNameOutput').innerText = 'firstName';
    document.getElementById('secondNameOutput').innerText = 'secondNameOutput';
    document.getElementById('genderOutput').innerText = 'genderOutput';
    document.getElementById('birthYearOutput').innerText = 'birthYearOutput';
    document.getElementById('surnameOutput').innerText = 'surnameOutput';
})



