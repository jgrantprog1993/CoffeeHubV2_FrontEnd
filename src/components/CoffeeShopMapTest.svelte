<script>
    // https://www.npmjs.com/package/leaflet-openweathermap
    // https://openweathermap.org/current
import axios from "axios";
//import converterfile from "../services/converterfile.js"
const coffeeHubService = getContext("CoffeeHubService");
import {getContext, onMount} from "svelte";
let coffeeShop;
let url ='';
const appId = 'd0e81b222b07ba19597172d040fb609e';
let currentWeather;
let String = '';
  onMount(async () => {
        
        const config = {
        headers: {
        accept: 'application/json',
        },
        data: {},
        };
        url = window.location.href
        //  // console.log(url)
        let parsedURL = url.substring(35)
        // console.log('PArsed Url -> ' + parsedURL);
        coffeeShop = await coffeeHubService.getCoffeeShopsById(parsedURL);
        //Thanks to Adam Gibbons for the help with getting around the CORS issue and using https://cors-anywhere.herokuapp.com //
        String = ' https://morning-reef-56940.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?lat='+coffeeShop.lat+'&lon='+ coffeeShop.lng+'&appid='+ appId;
         // console.log('LAST ONE !! -> ' + String)
        currentWeather = await axios.get(String, config).then((response) => {
          return response.data;
        })
  });

  function kelvintoDegC(kelvin){
        let celcius = kelvin - 273.15;
        return celcius.toFixed(2);
    }
</script>
<style>
.weatherIcon {
    display: block;
    margin-left: auto;
    margin-right: auto;
}
h2 {
  color: #158FFA;
    border-bottom:1px solid #CCC;
    text-align:center;
}
span{
    position:relative;
    top:1px;
    display:inline-block;
    border-bottom:1px solid #AAA;
}
h3 {
    font-weight: bold;
    display: inline
}
</style>
{#if currentWeather}

          <div class="weatherIcon">
          <img id="weatherIcon"
          src="https://openweathermap.org/img/wn/{currentWeather.weather[0].icon}.png"alt={currentWeather.weather[0].description} width="100" height="150"/>
        </div>
        <div>
          <h1> <span>Weather Description</span></h1>
          <h3>Country:</h3> {currentWeather.sys.country} <br/><h3>Location:</h3> {currentWeather.name} 
          <br/><h3>Weather:</h3> {currentWeather.weather[0].main} ({currentWeather.weather[0].description})
          <br/>
        </div>
          <div class="columns is-vcentered">
            <div class="column" >
              <div>
                <h2>Temperature</h2>
                <h3>Temp:</h3> {kelvintoDegC(currentWeather.main.temp)}°C<br/>
                <h3>Feels Like:</h3> {kelvintoDegC(currentWeather.main.feels_like)}°C<br/>
                <h3>Min:</h3> {kelvintoDegC(currentWeather.main.temp_min)}°C<br/>
                <h3>Max:</h3> {kelvintoDegC(currentWeather.main.temp_max)}°C<br/>
                <br/>
              </div>
            </div>
            <div class="column">
              <div>
                <h2>Wind</h2>
                <h3>Speed:</h3> {currentWeather.wind.speed}m/s<br/>
                <h3>Visibility:</h3> {currentWeather.visibility}m<br/>
                <h3>Cloudiness:</h3> {currentWeather.clouds.all}% <br/>
                <h3>Humidity:</h3> {currentWeather.main.humidity}%<br/>
                <h3>Pressure:</h3> {currentWeather.main.pressure}hPa<br/>
              </div>
            </div>
          </div>
       

  <br />
{:else}
  <p>Loading Api Connection OR Connection Error to API but view raw data -> </p> <a href= {String}> Here </a>
{/if}

