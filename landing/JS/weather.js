/* Name     = weather.js
 * Author   = Noah H. Smith <noah@batteredoats.com> (http://noazark.github.com/)
 * Version  = 0.0.3
 * License  = MIT
 * About    = A conclusive JavaScript weather library.
*/


var isModule="undefined"!=typeof module&&module.exports;isModule&&(http=require("http"),URL=require("url"));var Weather={Utils:{}};Weather.VERSION="0.0.3";var jsonp=Weather.Utils.jsonp=function(a,b){return new Promise(function(b,c){var d="_"+Math.round(1e4*Math.random()),e="jsonp_callback_"+d,f=document.getElementsByTagName("head")[0]||document.body||document.documentElement,g=document.createElement("script"),h=a+"&callback="+e;window[e]=function(a){delete window[e];var c=document.getElementById(d);c.parentNode.removeChild(c),b(a)},g.src=h,g.id=d,g.addEventListener("error",c),f.appendChild(g)})};Weather.setApiKey=function(a){Weather.APIKEY=a},Weather.getApiKey=function(){return Weather.APIKEY},Weather.kelvinToFahrenheit=function(a){return 1.8*this.kelvinToCelsius(a)+32},Weather.kelvinToCelsius=function(a){return a-273.15},Weather.getCurrent=function(a,b){var c="http://api.openweathermap.org/data/2.5/forecast?q="+encodeURIComponent(a)+"&cnt=1";return Weather.APIKEY?c=c+"&APPID="+Weather.APIKEY:console.log("WARNING: You must set an apiKey for openweathermap"),this._getJSON(c,function(a){b(new Weather.Current(a))})},Weather.getForecast=function(a,b){var c="http://api.openweathermap.org/data/2.5/forecast?q="+encodeURIComponent(a)+"&cnt=1";return Weather.APIKEY?c=c+"&APPID="+Weather.APIKEY:console.log("WARNING: You must set an apiKey for openweathermap"),this._getJSON(c,function(a){b(new Weather.Forecast(a))})},Weather._getJSON=function(a,b){if(isModule)return http.get(URL.parse(a),function(a){return b(a.body)});jsonp(a).then(b)};var maxBy=Weather.Utils.maxBy=function(a,b){var c,d=function(a,d){var e=b(d);return(null===a||e>c)&&(c=e,a=d),a};return a.reduce(d,null)},minBy=Weather.Utils.minBy=function(a,b){var c,d=function(a,d){var e=b(d);return(null===a||e<c)&&(c=e,a=d),a};return a.reduce(d,null)},isOnDate=Weather.Utils.isOnDate=function(a,b){var c=a.getYear()===b.getYear(),d=a.getMonth()===b.getMonth(),e=a.getDate()===b.getDate();return c&&d&&e};Weather.Forecast=function(a){this.data=a},Weather.Forecast.prototype.startAt=function(){return new Date(1e3*minBy(this.data.list,function(a){return a.dt}).dt)},Weather.Forecast.prototype.endAt=function(){return new Date(1e3*maxBy(this.data.list,function(a){return a.dt}).dt)},Weather.Forecast.prototype.day=function(a){return new Weather.Forecast(this._filter(a))},Weather.Forecast.prototype.low=function(){if(0!==this.data.list.length){return minBy(this.data.list,function(a){return a.main.temp_min}).main.temp_min}},Weather.Forecast.prototype.high=function(){if(0!==this.data.list.length){return maxBy(this.data.list,function(a){return a.main.temp_max}).main.temp_max}},Weather.Forecast.prototype._filter=function(a){return{list:this.data.list.filter(function(b){var c=1e3*b.dt;if(isOnDate(new Date(c),a))return b})}},Weather.Current=function(a){this.data=a},Weather.Current.prototype.temperature=function(){return this.data.list[0].main.temp},Weather.Current.prototype.conditions=function(){return this.data.list[0].weather[0].description},isModule?module.exports=Weather:window.Weather=Weather;