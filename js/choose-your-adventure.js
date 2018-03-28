/* globals $ */
var story = {
    "start": "The story begins in the woods, where they are looking for a magic tree house to appear.",
    "treeHouse": "The magic tree house appears before them and they climb the tree when the ladder comesdown.And once they climbed the tree there was lighting and thunders and they found torch and spell book",
    "lookAfter": "they started looking for the person who was missing and they wanted to give a note to him.they came to the market and showed the picture to ask people if they have seen him.The bread seller told he did see him in the church.",
    "struggle": "after great struggle looking in different places final they found the person and they hanndover the note.",
    "return": "at the end the magic tree house appeared and took them all home."
};

var choice = prompt( story.start );
var output = $( "#output" );

if( choice === "treeHouse" ){
    output.text( story.treeHouse );
}
else if( choice === "lookAfter" ){
    choice = prompt( story.lookAfter ) ;
    if( choice === "struggle" || choice === "return" ){
        output.textContent = ( story[choice] );
    }
    else{
        output.textContent = "you didn't choose a real option";
    }
}
else{
    output.textContent = "you didn't choose option ";
}
