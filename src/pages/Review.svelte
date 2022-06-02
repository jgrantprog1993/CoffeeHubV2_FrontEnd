<script>
// @ts-nocheck

    import coffee3 from "/src/assets/coffee3.png";
    import ReviewForm from "../components/ReviewForm.svelte";
    import TitleBar from "../components/TitleBar.svelte";
    import MainNavigator from "../components/MainNavigator.svelte";
    import CoffeeShopMap from "../components/CoffeeShopMap.svelte";

    function coffeeShopAdded(event) {
    console.log(event.detail.coffeeShop);
  }

  let coffeeShopMap = null;

  function coffeeShopMade(event) {
    console.log(event.detail.coffeeShop);
    console.log("Event Happened should be updating Map!!");
    coffeeShopMap.addCoffeeShopMarker(event.detail.coffeeShop);
}
  </script>
  
  <div class="columns is-vcentered">
    <div class="column is-two-thirds">
      <TitleBar subTitle={"Please Add a Review"} title={"CoffeeHub"}/>
    </div>
    <div class="column">
      <MainNavigator/>
    </div>
  </div>
  
  <div class="columns is-vcentered">
    <div class="column has-text-centered">
      <CoffeeShopMap bind:this={coffeeShopMap}/>
    </div>
    <div class="column box has-text-centered">
      <h1 class="title is-4">Add CoffeeShop</h1>
      <ReviewForm on:message={coffeeShopMade}/>
    </div>
  </div>