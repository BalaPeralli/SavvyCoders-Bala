/* globals $*/

    
/* globals $ */

var $submit = $( "#submit-user" );
var $user = $( "#user" );
var $h2 = $( "h2" );
var title = $h2.text();

function greetUser(){
    var firstName = $user.val();

    if( firstName ){
        $h2.text( title + " " + firstName );
    }
}
function inputCallBack( event ){
    if( event.which === 13 ){
        greetUser();
    }
}
$submit.on( "click", greetUser );
$user.on( "keypress", inputCallBack );

// else{
// document.querySelector( "h2" ).textContent += " " + firstName;
// }
// });
