<script>
// @ts-nocheck

    import download2 from "/src/assets/download2.jpg";
    import TitleBar from "../components/TitleBar.svelte";
    import MainNavigator from "../components/MainNavigator.svelte";
    import Chart from 'svelte-frappe-charts';
    import {getContext, onMount} from "svelte";
    
    const coffeeHubService = getContext("CoffeeHubService");

    let data = {
      labels: ["Antrim", "Armagh", "Carlow", "Cavan", "Clare", "Cork", "Derry", "Donegal", "Down", "Dublin", "Fermanagh", "Galway", "Kerry", "Kildare", "Kilkenny", "Laois", "Leitrim", "Limerick", "Longford", "Louth", "Mayo", "Meath", "Monaghan", "Offaly", "Roscommon", "Sligo", " Tipperary", " Tyrone", " Waterford", " Westmeath", " Wexford", " Wicklow"],
      datasets: [
        {
          values: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        }
      ]
    };

    onMount(async () => {
    let coffeeShopList = await coffeeHubService.getCoffeeShops();
    coffeeShopList.forEach(coffeeShop => {
      if (coffeeShop.location.locationName == "Antrim") {
        data.datasets[0].values[0] += 1
      } else if (coffeeShop.location.locationName == "Armagh") {
        data.datasets[0].values[1] += 1
      } else if (coffeeShop.location.locationName == "Carlow") {
        data.datasets[0].values[2] += 1
      } else if (coffeeShop.location.locationName == "Cavan") {
        data.datasets[0].values[3] += 1
      } else if (coffeeShop.location.locationName== "Clare") {
        data.datasets[0].values[4] += 1
      } else if (coffeeShop.location.locationName == "Cork") {
        data.datasets[0].values[5] += 1
      } else if (coffeeShop.location.locationName == "Derry") {
        data.datasets[0].values[6] += 1
      } else if (coffeeShop.location.locationName == "Donegal") {
        data.datasets[0].values[7] += 1
      } else if (coffeeShop.location.locationName == "Down") {
        data.datasets[0].values[8] += 1
      } else if (coffeeShop.location.locationName == "Dublin") {
        data.datasets[0].values[9] += 1
      } else if (coffeeShop.location.locationName == "Fermanagh") {
        data.datasets[0].values[10] += 1
      } else if (coffeeShop.location.locationName == "Galway") {
        data.datasets[0].values[11] += 1
      } else if (coffeeShop.location.locationName == "Kerry") {
        data.datasets[0].values[12] += 1
      } else if (coffeeShop.location.locationName == "Kildare") {
        data.datasets[0].values[13] += 1
      } else if (coffeeShop.location.locationName == "Kilkenny") {
        data.datasets[0].values[14] += 1
      } else if (coffeeShop.location.locationName == "Laois") {
        data.datasets[0].values[15] += 1
      } else if (coffeeShop.location.locationName == "Leitrim") {
        data.datasets[0].values[16] += 1
      } else if (coffeeShop.location.locationName == "Limerick") {
        data.datasets[0].values[17] += 1
      } else if (coffeeShop.location.locationName == "Longford") {
        data.datasets[0].values[18] += 1
      } else if (coffeeShop.location.locationName == "Louth") {
        data.datasets[0].values[19] += 1
      } else if (coffeeShop.location.locationName == "Mayo") {
        data.datasets[0].values[20] += 1
      } else if (coffeeShop.location.locationName == "Meath") {
        data.datasets[0].values[21] += 1
      } else if (coffeeShop.location.locationName == "Monaghan") {
        data.datasets[0].values[22] += 1
      } else if (coffeeShop.location.locationName == "Offaly") {
        data.datasets[0].values[23] += 1
      } else if (coffeeShop.location.locationName == "Roscommon") {
        data.datasets[0].values[24] += 1
      } else if (coffeeShop.location.locationName == "Sligo") {
        data.datasets[0].values[25] += 1
      } else if (coffeeShop.location.locationName == "Tipperary") {
        data.datasets[0].values[26] += 1
      } else if (coffeeShop.location.locationName == "Tyrone") {
        data.datasets[0].values[27] += 1
      } else if (coffeeShop.location.locationName == "Waterford") {
        data.datasets[0].values[28] += 1
      } else if (coffeeShop.location.locationName == "Westmeath") {
        data.datasets[0].values[29] += 1
      } else if (coffeeShop.location.locationName =="Wexford") {
        data.datasets[0].values[30] += 1
      } else if (coffeeShop.location.locationName == "Wicklow") {
        data.datasets[0].values[31] += 1
    }
  })
  });

  </script>
  
  
  <div class="columns">
    <div class="column box has-text-centered">
      <h1 class="title is-4">No. of Reviews per County</h1>
      <Chart data={data} type="bar" />
    </div>
    
  </div>