$(function(){
	   if (window.localStorage) {
        //get the highscores object
        var storiesList = JSON.parse(localStorage.getItem("stories"));
        for (i=0;i<storiesList.length;i++){
            alert(JSON.stringify(storiesList[i]));
        }
    }
});


 
