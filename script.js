var feet = document.getElementById('feet');
var inch = document.getElementById('inch');


feet.addEventListener('input', function(){
    let f = this.value; 
    let i = f*12;
    inch.value = i;
})

inch.addEventListener('input', function(){
    let i = this.value; 
    let f = i/12;
    feet.value = f;
})

// <======== m to cm ====>>

var meter = document.getElementById('meter');
var centimeter = document.getElementById('centimeter');


meter.addEventListener('input', function(){
    let f = this.value; 
    let i = f*100;
    centimeter.value = i;
})

centimeter.addEventListener('input', function(){
    let i = this.value; 
    let f = i/100;
    meter.value = f;
})

// <========= mile to kilometer  ======>

var mile = document.getElementById('mile');
var kilometer = document.getElementById('kilometer');


mile.addEventListener('input', function(){
    let f = this.value; 
    let i = f*1.60934;
    kilometer.value = i;
})

kilometer.addEventListener('input', function(){
    let i = this.value; 
    let f = i/1.60934;
    mile.value = f;
})

// <========= gram to kilogram  ======>

var gram = document.getElementById('gram');
var kilogram = document.getElementById('kilogram');


gram.addEventListener('input', function(){
    let f = this.value; 
    let i = f*0.001;
    kilogram.value = i;
})

kilogram.addEventListener('input', function(){
    let i = this.value; 
    let f = i/0.001;
    gram.value = f;
})


// <========= gram to kilogram  ======>

var litre = document.getElementById('litre');
var milli_litre = document.getElementById('milli-litre');


litre.addEventListener('input', function(){
    let f = this.value; 
    let i = f*1000;
    milli_litre.value = i;
})

milli_litre.addEventListener('input', function(){
    let i = this.value; 
    let f = i/1000;
    litre.value = f;
})



// <========= celcius to fahrenheit  ======>

var celcius = document.getElementById('celcius');
var fahrenheit = document.getElementById('fahrenheit');


celcius.addEventListener('input', function(){
    let f = this.value; 
    let i = (f*(9/5)+32);
    fahrenheit.value = i;
})

fahrenheit.addEventListener('input', function(){
    let i = this.value; 
    let f = ((5/9)*(i-32));
    celcius.value = f;
})