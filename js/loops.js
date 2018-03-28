var output = document.querySelector( "#output" );
var list = "<ol>";
var fizzybuzz = "<ul>";

for( let i = 1; i <= 10; i++ ){
    list += "<li>" + i + "</li>";
}
list += "</ol>";
output.innerHTML = list;

for( let i = 1; i <= 100; i++ ){
    if( i % 3 === 0 && i % 5 === 0 ){
        fizzybuzz += "<li>fizzbuzz</li>";
    }
    else if( i % 3 === 0 ){
        fizzybuzz += "<li>fizz</li>";
    }
    else if( i % 5 === 0 ){
        fizzybuzz += "<li>buzz</li>";
    }
    else{
        fizzybuzz += "<li>" + i +  "</li>";
    }
}
fizzybuzz += "</ul>";

output.innerHTML += fizzybuzz;
