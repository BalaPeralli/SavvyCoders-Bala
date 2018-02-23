

var greetuser = function greetuser(){
    var firstName = prompt( "What is your name" );

    if( !firstName ){
        greetuser();
    }
    else{
        alert( "Hello" + firstName );
    }
};

greetuser();
