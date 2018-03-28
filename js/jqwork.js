/* globals $ */

var secondImageOptions = {
    "my": "left top",
    "at": "right bottom",
    "of": "#img1"
};

var thirdImageOptions = {
    "my": "left top",
    "at": "right bottom",
    "of": "#img2"
};

$( "#animateMe " ).text( "thank you!" );

$( "#img2" ).position( secondImageOptions );
$( "#img3" ).position( thirdImageOptions );
