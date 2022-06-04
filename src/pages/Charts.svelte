<script>
    // @ts-nocheck
    
        import coffee4 from "/src/assets/coffee4.png";
        import CoffeeShopList from "../components/CoffeeShopList.svelte";
        import TitleBar from "../components/TitleBar.svelte";
        import MainNavigator from "../components/MainNavigator.svelte";
        import CoffeeShopByUsersChart from "../components/CoffeeShopByUsersChart.svelte";
        import CoffeeShopperCountyCharts from "../components/CoffeeShopperCountyCharts.svelte"
        import CoffeeShopByUsersChartPie from "../components/CoffeeShopByUsersChart_pie.svelte"
        import CoffeeShopperCountyChartsPie from "../components/CoffeeShopperCountyCharts_pie.svelte";
        
        let chartTypeToggle = 1;
        let unique ={}
        function toggleChartType() {
          chartTypeToggle*=-1;
          // console.log( 'chartTypeToggle =>' +  chartTypeToggle)
          unique ={}
        }


</script>
      
      <div class="columns is-vcentered">
        <div class="column is-two-thirds">
          <TitleBar subTitle={"Current Reviews"} title={"CoffeeHub"}/>
        </div>
        <div class="column">
          <MainNavigator/>
        </div>
      </div>
      <div>
        <button on:click={toggleChartType} class="button is-info is-medium is-fullwidth">Toggle Chart Type</button>
        <br/>
      </div>
      {#key unique}
      {#if chartTypeToggle>0}
          <CoffeeShopByUsersChart/>
          <br/>
          <CoffeeShopperCountyCharts/>
        {:else}
          <CoffeeShopByUsersChartPie/>
          <br/>
          <CoffeeShopperCountyChartsPie/>
      {/if}
      {/key}