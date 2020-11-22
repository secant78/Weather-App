$(document).ready(function() {
  
  //assign variables latitude and longitude
  var latitude = "";
  var longitude = "";
  
  var d = new Date();
  //console.log(d);
var n = d.getDate();
  //console.log(n);
  var m = d.getMonth() +1;
  //console.log(m);
  var month = "";
  switch(m){
    case 1:
      month = "January";
      break;
    case 2:
      month = "February";
      break;
    case 3:
      month = "March";
      break;
       case 3:
      month = "March";
      break; 
    case 4:
      month = "April";
      break; 
    case 5:
      month = "May";
      break; 
    case 6:
      month = "June";
      break; 
    case 7:
      month = "July";
      break; 
    case 8:
      month = "August";
      break; 
    case 9:
      month = "September";
      break; 
    case 10:
      month = "October";
      break; 
    case 11:
      month = "November";
      break;
    case 12:
      month = "December";
      break;
          }
  var currentyear = d.getFullYear();
  var currenthours = d.getHours();
  var currentminutes = d.getMinutes();
  for (i=0; i <10; i++){
    if(currentminutes == i){
      currentminutes = "0"+i;
    }
  }
  $("#time").html(month + " " + n + ", " + currentyear);
  $("#hours").html(currenthours + ":" + currentminutes);
  
  
  
   function displayWeather(latitude, longitude){
  
  var openWeather = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&units=metric&appid=8a59a00a1af867de06b28f568e6ae2fc";
  
  
     
 //ajax call to openweather.org
      $.ajax({
      type: "GET",
      url: openWeather,
      async: false,
      dataType: "json",
      success: function (data){
        console.log(data);
     
        //displays the current temperature on the screen
        var jsonTempC = Math.round(data.main.temp);
        var jsonTempF = data.main.temp;
        var cToF = Math.round((9/5) * jsonTempF + 32);
        
        var weatherId = data.weather[0].description;
        weatherId = weatherId.replace(/\b\w/g, function (m) {
            return m.toUpperCase();});
        var city = data.name;
       //var district = geoplugin_city();
//	$("#cityId").append("<option value='1' selected>"+district+"");
        var country = data.sys.country;
        var weathericon = data.weather[0].id;
        
        var clouds = "https://andersbjornsbo.files.wordpress.com/2011/12/treeinclouds.jpg";
        var cloudsnight = 'http://www.troyjohnstone.com/astrophotography/images/sky_clouds_night_moon_2006_09_09_04.jpg';
        var cloudsicon =  "http://openweathermap.org/img/w/02d.png";
        var cloudsnighticon = "http://gdurl.com/Yw3c";
        var clearsky = "https://upload.wikimedia.org/wikipedia/commons/0/07/Clear_Sky.jpg";
        var clearskyicon = "http://gdurl.com/I5o6";
        var clearskynight = "https://www.walldevil.com/wallpapers/a57/sky-moon-night-star.jpg";
        var clearskynighticon =  "http://gdurl.com/gK5W";
        var lightsnow = "https://blissfulblurbs.files.wordpress.com/2014/04/snow-falling.jpg";
        var lightsnowicon = 'http://gdurl.com/GeIZ';
        var rain = "https://4.bp.blogspot.com/-vXP7B_gJzzw/T6_OYI1vtCI/AAAAAAAAAi4/wqsEtvXnTZ8/s1600/Rain.jpg";
        var rainicon;
        var drizzle = "http://img07.deviantart.net/ea88/i/2012/198/6/b/drizzle__by_niki91-d57kcpt.jpg";
        var drizzleicon;
        var atmosphere = "https://images.alphacoders.com/290/290353.jpg";
        var atmosphereicon = "http://gdurl.com/Q6Kj"; 
          
        
        switch(weathericon){
          case 300:
          case 301:
          case 302:
          case 310:
            $("#weather2").attr("src", drizzle);
            break;
          case 500:
          case 501:
          case 502:
          case 503:
          case 504:
            $('#weather2').attr("src", rain);
             $('#background').css('background-image', 'url('+rain+')');
            $('#background').css('background-size', 'cover'); 
            break;
          case 600:
          case 601:
          case 602:
            $("#weather2").attr("src", lightsnowicon);
            $('#background').css('background-image', 'url('+lightsnow+')');
            $('#background').css('background-size', 'cover');        
            break;
            case 701:
          case 711:
          case 721:
          case 731:
          case 741:
          case 751:
          case 761:
          case 762:
          case 771:
          case 781:
             $("#weather2").attr("src", atmosphereicon);
            $('#background').css('background-image', 'url('+atmosphere+')');
            $('#background').css('background-size', 'cover');    
            break;
          case 800:
            if(currenthours >17 || currenthours <7){
    $("#weather2").attr("src", clearskynighticon);
              $('#background').css('background-image', 'url('+clearskynight+')');
           $('#background').css('background-size', 'cover');   
            }
            else{
               $("#weather2").attr("src", clearskyicon);
            $('#background').css('background-image', 'url('+clearsky+')');
            $('#background').css('background-size', 'cover');
            }
          break;
          case 801:
          case 802:
          case 803:
          case 804:
          case 805:
             if(currenthours >17 || currenthours <7){
    $("#weather2").attr("src", cloudsnighticon);
              $('#background').css('background-image', 'url('+cloudsnight+')');
           $('#background').css('background-size', 'cover');   
            }
            else{
    $("#weather2").attr("src",cloudsicon);
             $('#background').css('background-image', 'url('+clouds+')');
            $('#background').css('background-size', 'cover');
          break;
            }
                          }
        
        
  $("#tempC").html(JSON.parse(jsonTempC) + "\u00B0C");
 //      $("#tempF").html(JSON.parse(cToF)  + "\u00B0F");
        $("#weatherconditions").html(weatherId);
        //$("#cityId").html(city);
        //$("#countryId").html(country);
     //console.log(cToF);
        
       $("#clickF").on('click', function(){
      $('#tempC').html(cToF  + "\u00B0F");
          //console.log(cToF);
                       
                       });
        $("#clickC").on('click', function(){
          $('#tempC').html(jsonTempC  + "\u00B0C");
        });
                       
                       
                       
  
     }
    }); 
  }
  
  displayWeather('75.6046', '39.2998');
  
  
  
 var Fah = function useFahrenheit(Fahrenheit){
   var Fah = Fahrenheit;
   //console.log(Fah);
   return Fahrenheit;
}
  
  
  
  

  
  function display_Lat_Lon(lat,lon){
    
    // sets the values of latitude and longitude to the data values of JSON object from ip-api.com
    latitude = lat;
    longitude = lon;
   displayWeather(latitude, longitude);
  }
  
  
  
   $.getJSON("http://ip-api.com/json/?callback=?", function(data) {  
    
            var table_body = "";
            $.each(data, function(k, v) {
                table_body += "<tr><td>" + k + "</td><td><b>" + v + "</b></td></tr>";
            });
            $("#test5").html(table_body);
     
     
     //displays latitude and longitude coordinates on the screen
     $("#coordinates").html("latitude: " + JSON.stringify(data.lat) + "<br>longitude: " + JSON.stringify(data.lon));
     console.log(data);
     var city = JSON.stringify(data.city);
     console.log(city);
     var region = JSON.stringify(data.region);
     $("#cityId").html(data.city);
     $("#countryId").html(data.region);
     var lati = JSON.stringify(data.lat);
     var loni = JSON.stringify(data.lon);
     //calls the function to assign latitude and longitude data values to the variables latitude and longitude
    display_Lat_Lon(lati,loni);       
        });
  $.error(function(xhr) {
                    alert(xhr)
                })
  
  
 });