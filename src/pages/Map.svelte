<script>
    import TitleBar from "../components/TitleBar.svelte";
    import MainNavigator from "../components/MainNavigator.svelte";
    import CoffeeShopMap from "../components/CoffeeShopMap.svelte";

    
    import { getContext, onMount } from "svelte";
    
    let url = '';
    let coffeeShop={};
  
    const coffeeHubService = getContext("CoffeeHubService")
    onMount(async () => {
        url = window.location.href
        //  console.log(url)
        let parsedURL = url.substring(35)
        console.log('PArsed Url -> ' + parsedURL);
        coffeeShop = await coffeeHubService.getCoffeeShopsById(parsedURL);
      
      }
    )
  

  </script>
  
  <div class="columns is-vcentered">
    <div class="column is-two-thirds">
      <TitleBar subTitle={"Map of CoffeeShop Locations"} title={"CoffeeHub"}/>
    </div>
    <div class="column">
      <MainNavigator/>
    </div>
  </div>
  
  <CoffeeShopMap/>
 