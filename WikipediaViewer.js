//grab word from search bar - completed
//make a call to Wiki api - completed
//make clickable links to each result - completed
//extra
//change search bar
//example api
//https://en.wikipedia.org/wiki/Special:Random
//https://en.wikipedia.org/w/api.php?action=opensearch&search=bee&limit=1&format=json
// var api = "https://en.wikipedia.org/w/api.php?action=opensearch&search=";
//var action = "&limit=10&format=json";

$(document).ready(function() {
  $("#click").click(function() {
    var search = document.getElementById("searchTxt").value;

    var api =
      "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?           action=opensearch&search=";

    var action = "&limit=10&format=json";

    var url = api + search + action;

    $.getJSON(url, function(data) {
      //console.log(data);
      //loop going through data creating a clickable link for each result
      for (var i = 0; i < data[1].length; i++) {
        
            var item =data[1][i];
            var des = data[2][i];
            var link = data[3][i];
        
            $("#hits").prepend($('<div class="vert-space1"></div>'));
            $("#hits").prepend($('<a href="' + link + '"><div class="text-left" id="hit"><p id="text">' + item + "<br>" + des + '</p></div></a>'));  

        }
     });  
  });
});
