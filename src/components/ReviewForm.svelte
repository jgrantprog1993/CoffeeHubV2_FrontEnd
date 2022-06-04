<script>
 
  const dispatch = createEventDispatcher();
  import {createEventDispatcher, getContext, onMount} from "svelte";

  const coffeeHubService = getContext("CoffeeHubService");

  let rating = 0;
  let coffeeShopName ="";
  let lat = 0;
  let lng = 0;
  let location="";
  //let coffeeShopList = [];
  //let selectedCoffeeShop = "";
  let locationList = [];
  let selectedLoctaion ="";

  let message = "Add CoffeeShop";
  // https://svelte.dev/repl/b17c13d4f1bb40799ccf09e0841ddd90?version=3.29.0
  


  onMount(async () => {
    // coffeeShopList = await coffeeHubService.getCoffeeShops()
    locationList = await coffeeHubService.getLocations()
  });

  async function addCoffeeShop() {
      const location = locationList.find(location => location.locationName == selectedLoctaion);
      const newCoffeeShop = {
        coffeeShopName: coffeeShopName,
        lat: Number(lat),
        lng: Number(lng),
        rating: Number(rating),
        location: location.locationName,

      };
      const success = coffeeHubService.addCoffeeShop(rating, coffeeShopName, lat, lng, location);
      if (!success) {
        message = "Not Added - some error occurred";
        return;
      }
      message = `Thanks! You gave ${rating} Stars to ${newCoffeeShop.coffeeShopName}`;
      dispatch("message", {
        coffeeShop: newCoffeeShop,
      });
  }
</script>


<form on:submit|preventDefault={addCoffeeShop}>
  <div class="field is-horizontal">
    <div class="field-body">
      <div class="field">
        <label for="coffeeShopName" class="label">Name</label>
        <input bind:value={coffeeShopName} class="input" id="coffeeShopName" name="coffeeShopName" placeholder="coffeeShopName" type="text">
      </div>
      
      <div class="field">
        <label for="Location" class="label">Location</label>
        <div class="select">
          <select bind:value={selectedLoctaion}>
            {#each locationList as location}
              <option>{location.locationName}</option>
            {/each}
          </select>
        </div>
      </div>

      <div class="field">
          <label for="lat" class="label">Lat</label>
          <input bind:value={lat} class="input" id="lat" name="lat" placeholder="Lattitude XX.XXX" type="number" step=".0001">
      </div>
      <div class="field">
        <label for="lng" class="label">Lng</label>
        <input bind:value={lng} class="input" id="lng" name="lng" placeholder="Longitude XX.XXX" type="number" step=".0001">
      </div>
      <div class="field">
        <label for="rating" class="label">/5 Stars</label>
        <input bind:value={rating} class="input" id="rating" name="rating" placeholder="Stars" type="number" step=".01">
      </div>
    </div>
  </div>
  

  <div class="field">
    <div class="control">
      <button class="button is-link is-light">Add</button>
    </div>
  </div>
  <div class="section">
    {message}
  </div>
</form>

