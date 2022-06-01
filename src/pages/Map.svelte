<script>
    import TitleBar from "../components/TitleBar.svelte";
    import MainNavigator from "../components/MainNavigator.svelte";
    import CoffeeShopMap from "../components/CoffeeShopMap.svelte";
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