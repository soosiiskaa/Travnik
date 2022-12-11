/*читать больше/меньше*/

function myFunction(){
    var dots = document.getElementById("dots");
    var btnText = document.getElementById("myBtn");

    if(dots.style.display === "none"){
        dots.style.display = "inline";
        btnText.innerHTML = "Читать меньше...";
    } 
    else{
        dots.style.display = "none";
        btnText.innerHTML = "Читать больше...";
    }
}

function myFun(){
    var more = document.getElementById("more");
    var btText = document.getElementById("myBt");

    if(more.style.display === "none"){
        more.style.display = "inline";
        btText.innerHTML = "Читать меньше...";
    } 
    else{
        more.style.display = "none";
        btText.innerHTML = "Читать больше...";
    }
}

/*тема*/

function st(){
    document.body.style.background=("white")
}

/*валидация*/

function test(form){

    //логин почта пароль

    if(form.login.value == ""){
        alert("Заполните поле логина!")
    }
    else{
        document.getElementById("result1").innerHTML = "<p>Спасибо, "+form.login.value+"!</p>"
    }

    if(form.email.value == ""){
        alert("Заполните поле почты!")
    }
    else{
        document.getElementById("result2").innerHTML = "<p>Ваша почта "+form.email.value+" введена корректно!</p>"
    }

    if(form.password.value == ""){
        alert("Заполните поле пароля!")
    }
    else{
        document.getElementById("result3").innerHTML = "Пароль корректный!"
    }

    //изображение

    document.getElementById("result4").innerHTML = "<p>Ваше изображение:<img src='"+form.img.value+"'></p>";

    //список с множественным выбором 

    switch (form.pol.value){
        case "1": document.getElementById("result5").innerHTML = "<p>Ваш пол: женский</p>"; break;
        case "2": document.getElementById("result6").innerHTML = "<p>Ваш пол: мужской</p>"; break;

    }

    //чекбокс

    if(form.kof.checked){ 
        document.getElementById("result7").innerHTML = "Спасибо, что приняли политику конфиденциальности!"
    }
    else{
    alert("Примите политику конфиденциальности!")
    document.getElementById("result8").innerHTML = ""
    }

}

