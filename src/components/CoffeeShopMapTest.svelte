<script>
    // https://www.npmjs.com/package/leaflet-openweathermap
    // https://openweathermap.org/current
import axios from "axios";
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
        //  console.log(url)
        let parsedURL = url.substring(35)
        console.log('PArsed Url -> ' + parsedURL);
        coffeeShop = await coffeeHubService.getCoffeeShopsById(parsedURL);
        //Thanks to Adam Gibbons for the help with getting around the Cors issue and using https://cors-anywhere.herokuapp.com //
        String = ' https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?lat='+coffeeShop.lat+'&lon='+ coffeeShop.lng+'&appid='+ appId;
         console.log('LAST ONE !! -> ' + String)
        currentWeather = await axios
      .get(String, config)
      .then((response) => {
        return response.data;
      })
      
  });
</script>

{#if currentWeather}
  <div>
    <!-- start current weather tile -->
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box" style="text-align:center">
          <div class="columns is-vcentered">
            <div class="column">
              <p class="title">
                {coffeeShop.coffeeShopName}
              </p>
              <p class="subtitle">
                {Date.now()}
              </p>
              <img
                id="currentIcon"
                style="margin-top: -1.5em"
                src="https://openweathermap.org/img/wn/{currentWeather.weather[0].icon}@2x.png"alt={currentWeather.weather[0].description}/>
            </div>
            <div class="column" style="font-weight:600;">
              <div id="currentTemperature">
                Temperature: {currentWeather.main.temp}°C
              </div>
              <div id="currentHumidity">
                Humidity: {currentWeather.main.humidity}%
              </div>
              <div id="currentWindSpeed">
                Wind Speed: {currentWeather.wind.speed}m/s
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
  <br />
{:else}
  <p>Connection Error to API but vie raw data -> </p> <a href= {String}> Here </a>
{/if}

