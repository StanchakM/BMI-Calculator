const btn = document.getElementById('calculate');

btn.addEventListener('click', function() {

    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;

    if(height == '' || weight == '') {
        alert('Будь ласка вкажіть свої дані!');
        return;
    }

    // BMI = weight in kg / (height in m * height in m)

    height = height / 100

    let BMI = (weight / (height * height));

    BMI = BMI.toFixed(2);

    document.querySelector('#result').innerHTML = BMI;

    let status = '';

    if(BMI < 18.5){
        status = "Вам слід набрати вагу! Вага недостатня, щоб бути здоровим!";
    }
    if(BMI >= 18.5 && BMI < 25){
        status = "Ви молодець, Ваша вага в нормі!";
    }
    if(BMI >= 25 && BMI < 30){
        status = "Вага надмірна! Контролюйте раціон і займайтеся спортом! ";
    }
    if(BMI >= 30){
        status = "Велика надмірна вага! Вам треба худнути!";
    }

    document.querySelector('.comment').innerHTML = `<span id="comment">${status}</span>`;
});