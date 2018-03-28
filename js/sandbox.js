/* globals $ */
var css = {
    "background-color": "chartreuse",
    "position": "fixed",
    "top": 0
};
var animations = {
    "font-size": "500%",
    "top": "20vh"
};
var $h2 = $( "<h2>" )
    .text( "This is also came from jquerys" )
    .css( "position", "fixed" );

var animationOptions = {
    "duration": 5000,
    "complete": animateH2
};
var $h1 = $( "<h1>" )
    .text( "Hello Worlds" )
    .css( css )
    .animate( animations, animationOptions );

function animateH2(){
    $h2.animate( { "left": "100vw" } );
}

$( "#output" )

    .append( $h1, $h2 );
