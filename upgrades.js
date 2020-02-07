const upgrades = [
  {
    name: 'Reporting Lost And Stolen Guns',
    effectiveness: 1, //percent
    image: "https://data.nbcstations.com/national/2017/missing-pieces-guns/images/stolen-makes2.png",
    link: "https://lawcenter.giffords.org/gun-laws/policy-areas/gun-owner-responsibilities/reporting-lost-stolen-guns/",//link
    description: "Every year, hundreds of thousands of guns are stolen in America; lost and stolen reporting laws helps reduce gun trafficking!",
    cost: 30, // dollars
    purchased: false
  },
  {
    name: "Minimum Age To Purchase And Possess",
    effectiveness: 2, // percent
    image: "https://assets.realclear.com/images/44/443140.png",
    link: "https://lawcenter.giffords.org/gun-laws/policy-areas/gun-owner-responsibilities/reporting-lost-stolen-guns/",
    description: "Because young adults are at elevated risk of attempting suicide and violent behaviors, strengthening minimum age laws for purchasing and possesing guns will help protect young people and the public at large!",
    cost: 100, // dollars
    purchased: false
  },
  {
    name: 'Better Gun Dealers',
    effectiveness: 1, //percent
    image: "https://cdn0.thetruthaboutguns.com/wp-content/uploads/2015/11/courtesy-arunwithaview.wordpress.com_.jpg",
    link: "https://lawcenter.giffords.org/gun-laws/policy-areas/gun-sales/gun-dealers/",//link
    description: "Due to inadequate funding and gun lobby backed legislation almost often allows corrupt or irresponsible gun dealers to cause the public to be in danger!",
    cost: 60, // dollars
    purchased: false
  },
  {
    name: "Bulk Gun Purchase Prevention",
    effectiveness: 2, // percent
    image: "https://www.newshub.co.nz/dam/form-uploaded-images-ordered/2019/06/20/Weapons-hand%20guns-rifles-ammunition-GettyImages-607613969-1120.jpg",
    link: "https://lawcenter.giffords.org/gun-laws/policy-areas/crime-guns/bulk-gun-purchases/",
    description: "Laws limit the number of firearms a person can buy within a certain time frame to help reduce how many guns end up on the secondary market!",
    cost: 200, //s dollars
    purchased: false
  }
];

$(".upgrades").hide();
$(".buttonCloseUpgrade").hide()

$(".buttonUpgrade").click(function(){
  $(".upgrades").show();
  $(".buttonCloseUpgrade").show();
  $(".buttonUpgrade").hide();
});

$(".buttonCloseUpgrade").click(function(){
  $(".upgrades").hide();
  $(".buttonUpgrade").show();
  $(".buttonCloseUpgrade").hide();
});

$("#groups0").append("<h1>" + upgrades[0].name + "</h1>");
$("#groups1").append("<h1>" + upgrades[1].name + "</h1>");
$("#groups2").append("<h1>" + upgrades[2].name + "</h1>");
$("#groups3").append("<h1>" + upgrades[3].name + "</h1>");

$("#groups0").append("<p>Effectiveness: " + upgrades[0].effectiveness + "</p>");
$("#groups1").append("<p>Effectiveness: " + upgrades[1].effectiveness + "</p>");
$("#groups2").append("<p>Effectiveness: " + upgrades[2].effectiveness + "</p>");
$("#groups3").append("<p>Effectiveness: " + upgrades[3].effectiveness + "</p>");

$("#groups0").append("<img class= 'dataImage' src= '" + upgrades[0].image + "'>");
$("#groups1").append("<img class= 'dataImage' src= '" + upgrades[1].image + "'>");
$("#groups2").append("<img class= 'dataImage' src= '" + upgrades[2].image + "'>");
$("#groups3").append("<img class= 'dataImage' src= '" + upgrades[3].image + "'>");

$("#groups0").append("<a href= '" + upgrades[0].link + "'>Link</a>");
$("#groups1").append("<a href= '" + upgrades[1].link + "'>Link</a>");
$("#groups2").append("<a href= '" + upgrades[2].link + "'>Link</a>");
$("#groups3").append("<a href= '" + upgrades[3].link + "'>Link</a>");

$("#groups0").append("<p>" + upgrades[0].description + "</p>");
$("#groups1").append("<p>" + upgrades[1].description + "</p>");
$("#groups2").append("<p>" + upgrades[2].description + "</p>");
$("#groups3").append("<p>" + upgrades[3].description + "</p>");

$("#groups0").append("<p>Cost: " + upgrades[0].cost + "</p>");
$("#groups1").append("<p>Cost: " + upgrades[1].cost + "</p>");
$("#groups2").append("<p>Cost: " + upgrades[2].cost + "</p>");
$("#groups3").append("<p>Cost: " + upgrades[3].cost + "</p>");

$("#groups0").append(upgrades[0].purchased);
$("#groups1").append(upgrades[1].purchased);
$("#groups2").append(upgrades[2].purchased);
$("#groups3").append(upgrades[3].purchased);
