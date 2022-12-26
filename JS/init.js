document.getElementById('btn_generace').addEventListener('click', function () {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
})


document.getElementById('btn_reset').addEventListener('click', function () {
    document.getElementById('firstNameOutput').innerText = '';
    document.getElementById('secondNameOutput').innerText = '';
    document.getElementById('genderOutput').innerText = '';
    document.getElementById('birthYearOutput').innerText = '';
    document.getElementById('surnameOutput').innerText = '';
    document.getElementById('professionOutput').innerText = '';
})



