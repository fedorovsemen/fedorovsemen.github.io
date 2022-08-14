//let sum = 0, days = 0;
//function calc(){
// let type = prompt("Какой тип сайта? 1 - Сайт-визитка 2 - Интернет-магазин");
//    if(type == "1"){
//    sum += 1000;
//        days += 2;
//}
//else if(type == "2"){
//    sum += 5000;
//      days += 5;
//} 
//    else{
//        alert("Вы вели что-то не то!");
//      
//    }
//    
// let  disign = prompt("Какой тип дизайна? 1 - Шаблон 2 - Уникальный");
//     if(disign == "1"){
//    sum += 5000;
//        days += 4;
//}
//else if(disign == "2"){
//    sum += 6000;
//      days += 7;
//} 
//    else{
//        alert("Вы вели что-то не то!");
//   
//    }
//    
// let  adaptive = prompt("Какой тип адаптивности? 1 - ПК 2 - ПК + телефон");
// if(adaptive == "1"){
//    sum += 10000;
//        days += 3;
//}
//else if(adaptive == "2"){
//    sum += 15000;
//      days += 15;
//} 
//    else{
//        alert("Вы вели что-то не то!");
//     
//    }
//    alert("Сроки:" + days +"Стоимость:" +sum);
//    }
//    calc();


let site, design, adaptive;

let calculator = {
    price: [
        [100, 500, 1000],
        [500, 1000, 2000],
        [1000, 2000, 5000],
    ],
    days: [
        [1, 2, 3],
        [3, 2, 4],
        [1, 5, 6],
    ],
    run(siteType, desingType, adaptiveType){
        let sum = parseInt(calculator.price[0][siteType-1]) + parseInt(calculator.price[1][desingType-1]) + parseInt(calculator.price[2][adaptiveType-1]);
        let days = parseInt(calculator.days[0][siteType-1]) + parseInt(calculator.days[1][desingType-1]) + parseInt(calculator.days[2][adaptiveType-1]);
         alert("Стоимость: "+ sum +"\n Сроки: "+ days);
    }
}

function getAnswers() {
site = prompt("Введите тип сайта: \n1 - Визитка, \n2 - Корпоративный, \n3 - Интернет-магазин");
    if(site != 1 && site != 2 && site != 3 ){
        alert("Такого варианта нет");
        getAnswers();
        return;
    }
design = prompt("Выберите дизайн: \n1 - Шаблонный, \n2 - Уникальный, \n3 - WOW-Дизайн");
    if(design != 1 && design != 2 && design != 3 ){
        alert("Такого варианта нет");
        getAnswers();
        return;
    }
adaptive = prompt("Адаптивность: \n1 - Только ПК, \n2 - Только Мобильная версия, \n3 - ПК + Мобильный");
    if(design != 1 && design != 2 && design != 3 ){
        alert("Такого варианта нет");
        getAnswers();
        return;
    }
    calculator.run(site, design, adaptive);
    
}

getAnswers();
    
    








































































