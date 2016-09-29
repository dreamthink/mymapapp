<h1>My Weather App</h1>

http://dreamthink.github.io/myweatherapp

<h4>FRAMEWORKS USED:</h4>
HTML, CSS, jQuery, JavaScript, AngularJS, API

<h4>OVERVIEW:</h4>
Never get caught in the rain without your umbrella again! Check the current weather of your current location with the My Weather App. The user can toggle between Fahrenheit and Celsius.

<h4>DETAILS</h4>
Because browser geolocation has been deprecated on non-secure origins (non-HTTPS) on Chrome 50, I utilized a workaround because my GitHub is served by dreamthinkstudios.com which is non-HTTPS. I used the Google Map API as a fallback option to obtain the latitude and longitude coordinates of the browser (Google Map API is not affected by this deprecation). Then these coordinates were fed into the Open Weather Map API.

Please read the below article for more information on Chrome geolocation deprecation:
https://developers.google.com/web/updates/2016/04/geolocation-on-secure-contexts-only?hl=en
