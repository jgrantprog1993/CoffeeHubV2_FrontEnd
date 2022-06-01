<script>
// @ts-nocheck

    import coffee4 from "/src/assets/coffee4.png";
    import CoffeeShopList from "../components/CoffeeShopList.svelte";
    import TitleBar from "../components/TitleBar.svelte";
    import MainNavigator from "../components/MainNavigator.svelte";
    import CoffeeShopperCountyCharts from "../components/CoffeeShopperCountyCharts.svelte"
  </script>
  
  <div class="columns is-vcentered">
    <div class="column is-two-thirds">
      <TitleBar subTitle={"Current Reviews"} title={"CoffeeHub"}/>
    </div>
    <div class="column">
      <MainNavigator/>
    </div>
  </div>
  
  
      <CoffeeShopperCountyCharts/>
    
  
  <div>
    <div class="column box has-text-centered">
      <h1 class="title is-4">Reviews to date</h1>
      <CoffeeShopList/>
    </div>
  </div>