// var source   = $("#time-template").html();
// var template = Handlebars.compile(source);
// var context  = { time: new Date().getTime() };

var source   = $("#time-template").html(),
    template = Handlebars.compile(source),
    data = {  sunrise: "",
              sunset: ""
           };

$("#time-placeholder").html(template(data));

$(function(){

  var sunrise = $('.sunrise');
  var sunset = $('.sunset');

  $.support.cors = true;
  var url = 'http://api.wunderground.com/api/7b81b99e5f4ac7ee/astronomy/q/Australia/Sydney.json';
  $.getJSON(url + "?callback=?", function(data) {
    console.log(data);
    sunrise.text(data.moon_phase.sunrise.hour + ":" + data.moon_phase.sunrise.minute);
    sunset.text(data.moon_phase.sunset.hour + ":" + data.moon_phase.sunset.minute);
  });

  $('.sun-animation').css('width', '70%');
  $('.sun-symbol-path').css('-webkit-transform', 'rotateZ(20deg)');
});