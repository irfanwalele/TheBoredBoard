// Congratulations! Your new application key is fcb8bhZMVpHTfWJV.
// https://api.eventful.com/docs
// https://api.eventful.com/libs/javascript/

// capture button click
$("#button").on("click", function (event) {
    // this prevents from relaoding the page
    event.preventDefault();

    // This should grab the values?
    var what = $("#what").val();
    console.log(what);

    var where = $("#where").val();
    console.log(where);

    var radius = $("#radius").val();
    console.log(radius);

    var queryURL = "https://api.eventful.com/json/events/search?keywords="+ what +"&l="+ where +"&within"+ radius +"&units=miles&app_key=fcb8bhZMVpHTfWJV"
    console.log(queryURL);


// This is the AJAX request. The 'p' at the end of jsonp is just a hack so that the request actually works. 
    $.ajax({
        url:queryURL,
        method: "GET",
        dataType:'jsonp'
    }) .then(function (response){
        console.log(response.events.event[0])
        
        var eventList = $("<ul>");
        eventList.addClass("list-group");
    
    // We use a for-loop here to create an array of the results. 
        for (var i = 0; i < response.events.event.length; i++){
            console.log(response.events.event[i])
            // console.log(response.events[i])

            // COme back to this to review
            eventsToHtml(response.events.event[i])
            
        }
    });
});

function eventsToHtml(data){
    console.log(eventsToHtml);
    if (data.image){
        var image = "http:"+data.image.medium.url
        console.log(image)
    } else {
        var image = "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500"
    };
    
    var title = data.title;
    var date = data.start_time;
    var url = data.url;
    
    
    var div = $("<div>");
    div.html(`<div class='animate slideInRight'>
    <div class="card" "col-4">
    <div class="card-body" >
    <img src="${image}" alt="" class="card-image">
    </div>
    <div class="col-4">
    <h2>"${title}"</h2>
    <h3>"${date}"</h3>
    <h4><a href=${url} class="card-link">${title}</a></h4>
    </div>
    </div>
    </div>`);
    
    
    
    $("section").append(div);
    
    
    
    // var queryTimeURL = "http://worldclockapi.com/api/json/est/now";
    // console.log(queryTimeURL);
    
    // // $.ajax({
        //     "$id": "1",
        //     "currentDateTime": "2019-06-15T10:28-04:00",
        //     "utcOffset": "-04:00:00",
        //     "isDayLightSavingsTime": true,
        //     "dayOfTheWeek": "Saturday",
        //     "timeZoneName": "Eastern Standard Time",
//     "currentFileTime": 132050681317363790,
//     "ordinalDate": "2019-166",
//     "serviceResponse": null
//     })

// added } below
}
var span = document.getElementById('footer');

function time() {
    var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  span.textContent = h + ":" + m + ":" + s;
};

setInterval(time, 1000);


// API Key Name	Keys	Actions
// BoredBoard
// HMNEI5LA6MRBDVOWA3
// Show client secret and API keys
// API key details
// App product page 
// App URL


// Public API key
// E35HN42CJGH4744CTNPX


// url base :
// 	https://www.eventbriteapi.com/v3
// GET

// /users/me/ = Shows information about the current user (i.e. you)

// /users/me/events  = Displays a list of Events you can manage


// BORED AIP
var boredURL = "https://www.boredapi.com/api/activity?type=";
var activityType = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"];
// create a random button as well as buttons for activity types 
// event listener below. 
$("#boredAPI").on("click", function(event){
    event.preventDefault();
    $(".types").empty();
    for(var i = 0; i < activityType.length; i++){
		//create a button for each activity type
        $(".types").append("<button type='submit' value='"+activityType[i]+"'>" + activityType[i]+"</button>")
    };
        $("button").on("click", function(event){
            event.preventDefault();
            var buttonVal = $(this).text();
            
            console.log(buttonVal);
            var boredPull = boredURL + buttonVal;
            console.log(boredPull);
            $.ajax({
                url:boredPull,
                method: "GET",
            }).then(function(response){
                console.log(response.activity)
                $(".types").append("<p class='animated bounceInLeft' id='activity'>" + response.activity + "</p>");
            })

    });
});

// Description of the queried activity
// accessibility
// A factor describing how possible an event is to do with zero being the most accessible
// [0.0, 1.0]
// type
// Type of the activity
// ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]
// participants
// The number of people that this activity could involve
// [0, n]
// price
// A factor describing the cost of the event with zero being free
// [0, 1]
// key
// A unique numeric id
// [1000000, 9999999]






