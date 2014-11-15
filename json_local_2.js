$(document).ready(function () {

$("#saveLocal").click(function () {
    alert("saved!");
    if (window.localStorage) {
        var story = {};
        story.datae = new Date();
        story.user = "A"; // create id for document.getelement.id.value
        story.story = ""; // blank from text ; //create id for storie text 
        var stories = localStorage.getItem("stories") || [];
        stories.push(story);

        localStorage.setItem("stories",stories); // maybe stringify 
        alert("The data has been stored successfully!");
    } else {
        alert("Your Browser does not support LocalStorage.");
    }
});

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

});
});