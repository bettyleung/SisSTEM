$(document).ready(function () {

$("#submitbutton").click(function () {
   //alert("saved!");
    if (window.localStorage) {
        var story = {};
        //debugger;
        story.date = new Date();
        //alert(story.date);
        story.user = $("#usernameid").val();
       //alert(story.user);
        story.singlestory = $("#storyid").val(); // blank from text ; //create id for storie text 
        //alert(story.singlestory);
        try{
            var stories = JSON.parse(localStorage.getItem("stories"));
            if (typeof stories !== "object" ) {
             stories = []; 
            }
        } catch(err) {
            stories = [];
        }
        stories.push(story);
        localStorage.setItem("stories",JSON.stringify(stories)); // maybe stringify 
        alert("The data has been stored successfully!");
    } else {
        alert("Your Browser does not support LocalStorage.");
    }
    //return false;

   // window.location = "viewposts.html";
   window.location = "DwnjTNuvVt/index.html";
});

/*
$("#readLocal").click(function () {
    if (window.localStorage) {
        //get the highscores object
        var scores = localStorage.getItem("highscores");
        scores = JSON.parse(scores);
        for (i=0;i<scores.length;i++){
            alert(scores[i]);
        }
    }
}

}); */
});