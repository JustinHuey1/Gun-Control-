/*global L, upgrades*/
// Variables

//time variables
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November" , "December"];
var monthCounter = 1;
var yearCounter = 2016;

//people variables
var population = 331002651;
var deathPopulation = 0;
var totalDeaths = 0;

//percent of people dying from gun incidents
var percentDeath = 0.001; //use decimal for percent

//money variables
var money = 0;
var moneyAdded = 30;

var mymap = L.map('mapid').setView([37.7749, -122.4194], 3);
var effectivenessBar = 

$(".population").html(population);
$(".deaths").html(deathPopulation);
$("#Howtoplay").hide();
$(".startButton").click(function(){
              $("#Howtoplay").toggle("slow")

 
  
});
// Timing
setInterval(function()
  {
    $("#dateValue").text(months[monthCounter%12] + " " + yearCounter);
    monthCounter++;
  
    if (monthCounter%12 === 0)
      {
        yearCounter++;
        money = money + moneyAdded;
      }
  
    $(".money").text(money);

    deathTick(percentDeath);
    winCheck();
    percentDeath = percentDeath * 1.00002;
  }, 1000);

function deathTick(percent)
{
  //population should increase each month depending on a rate
  deathPopulation = Math.floor(population * percent);
  
  population = Math.floor(population - deathPopulation);
  totalDeaths = totalDeaths + deathPopulation;

  //converts numbers calculated with commas
  let number = numberWithCommas(population);
  let number2 = numberWithCommas(deathPopulation);
  let number3 = numberWithCommas(totalDeaths);
  
  //assign numbers to the text
  $(".population").text(number);
  $(".deaths").text(number2);
  $(".totalDeaths").text(number3);
}

//makes every 3 number have a comma
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//checks to see if you have met the win condition
function winCheck()
{
  if(deathPopulation < 20)
  {
    clearInterval(); 
    location.replace("winScreen.html");
  }
}

function loseCheck()
{
  if(population < 20)
  {
    clearInterval();
    location.replace("loseScreen.html");
  }
}
// Map
var marker = L.marker([37.7749, -122.4194]).addTo(mymap);
var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);
var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap);

 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);



//functon ()

let style = 0;

$("#groups0").click(function(){
      if (upgrades[0].purchased === false && money >= upgrades[0].cost){
        style = style + 25;
        $(".progress-bar").css("width", style + "%");
        money = money - upgrades[0].cost;
        percentDeath = percentDeath - 0.00002;
        upgrades[0].purchased = true;
        $("#groups0").css("background-color", "grey");
    }
});



  $("#groups1").click(function(){
    if (upgrades[1].purchased === false && money >= upgrades[1].cost){
        style = style + 25;
      $(".progress-bar").css("width", style + "%");
      money = money - upgrades[1].cost;
      percentDeath = percentDeath - 0.00010;
      upgrades[1].purchased = true;
      $("#groups1").css("background-color", "grey");
    }
  });



  $("#groups2").click(function(){
    if (upgrades[2].purchased === false && money >= upgrades[2].cost){
        style = style + 25;
      $(".progress-bar").css("width", style + "%");
      money = money - upgrades[2].cost;
      percentDeath = percentDeath - 0.004;
      upgrades[2].purchased = true;
      $("#groups2").css("background-color", "grey");
    }
  });


  $("#groups3").click(function(){
    if (upgrades[3].purchased === false && money >= upgrades[3].cost){
      style = style + 25;
      $(".progress-bar").css("width", style + "%");
      money = money - upgrades[3].cost;
      percentDeath = percentDeath - 5;
      upgrades[3].purchased = true;
      $("#groups3").css("background-color", "grey");
    }
  });

