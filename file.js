alert("Гра 'Вгадай число'");
alert("Суть гри – вгадати за меншу кількість спроб число, яке загадав робот.")
alert("Я загадав випадкове значення від 0 до 100")

let randomValue = Math.floor(Math.random() * 101);
let attempt = 0;

while(true){
    attempt++;
    let user = prompt("Спробуйте вгадати. Введіть значення");
    if(user == "стоп" || user == "Стоп"){
        break;
    }

    if(attempt == 5){
        alert("Якщо хочите закінчити гру напишіть 'cтоп'");
    }

    if(user < randomValue){
        alert("я загадав значення більше, ніж " + user);
    }
    else if(user > randomValue){
        alert("я загадав значення менше, ніж " + user);
    }
    else if(user == randomValue){
        alert("Правильно! Загадане значення " + randomValue + ". Ви вгадали з" + attempt + " -ї спроби.");
    }
}
