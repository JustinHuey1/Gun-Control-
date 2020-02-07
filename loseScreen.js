/* global upgrades */

$("#replay").click(function()
  {
    location.replace("game.html");
    upgrades.forEach(function(law) {law.purchased = false;});
  });
$("#menu").click(function()
  {
    location.replace("index.html");
    upgrades[0].purchased = false;
  });