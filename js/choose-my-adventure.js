/* globals $ */

var story = {
    "start": "Bala is a Commerce graduate and also had the diploma in Information Technology from NIIT, India, she started to plan for a career, select carrer or Newjourney",
    "career": "She started her career as a Network administrator and got certfied in NT Server. she worked for 3 threeyears and started a new journey, did she continue Newjourney or newcareer",
    "Newjourney": "Thoroughly enjoyed as a home sitting mom to take care of the family, she was again started planning to start her carrer. she decided to start a part time job. e started working as a clerk at St.Louis county library, but she is looking for opportunity to go back to IT.and her goal is to study programing.choose new career or goals ",
    "goals": "her desire learning new thing and start her career in IT grew stronger n stonger. she started learning coding and set a goal to become frontend WebDeveloper",
    "newcareer": "plan is to get certfied in frontend webdevelopment and start a new career as a programmer."
};
var choice = prompt( story.start );
var output = document.querySelector( "#output" );
var end2 = false;

if( choice === "career" ){
    output.textContent = story.career;
}
else if( choice === "Newjourney" ){
    choice = prompt( story.Newjourney );

    if( choice === "goals" || choice === "newcareer" ){
        output.textContent = story[choice];
    }
    else{
        output.textContent = "you didn't choose a real option!";
    }
}
else{
    output.textContent = "you didn't choose a real option!";
}

// $( "button" ).click( function(){
    // $( "body" ).css( "background-color","blue" );
  /*  while( end2 != true ){
        if( choice === "Career" || choice === "Newjourney" || choice === "goals" || choice === "newcareer" ){
            end2 = true;
            $( "#output" ).text( story[choice] );
        }
        else if( choice === "career" || choice === "goals" || choice === "newcareer" ){
            $( "#output" ).text( story[choice] );
            choice = prompt( story[choice] );
        }
    }
} );
*/
