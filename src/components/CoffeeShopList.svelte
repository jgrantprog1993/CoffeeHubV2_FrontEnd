<script>
    // import { user } from 'src/stores';
    import {getContext, onMount} from 'svelte'
  
    const coffeeHubService = getContext("CoffeeHubService");
    let coffeeShopList = [];
  
    onMount(async () => {
      coffeeShopList = await coffeeHubService.getCoffeeShops();
      // console.log(coffeeShopList)
    });
</script>
  
  <table class="table is-fullwidth">
    <thead>
        <th>Name</th>
        <th>Rating</th>
        <th>location</th>
        <th>Reviewer</th>
        <th>Lat</th>
        <th>Lng</th>
    </thead>
    <tbody>
      {#each coffeeShopList as coffeeShop}
        <tr>
            <td>
                {coffeeShop.coffeeShopName}
            </td>
            <td>
                {coffeeShop.rating}
            </td>
            <td>
                {coffeeShop.location.locationName}
            </td>
            <td>
                {coffeeShop.user.email}
            </td>
            <td>
                {coffeeShop.lat}
            </td>
            <td>
                {coffeeShop.lng}
            </td>
        </tr>
      {/each}
    </tbody>
  </table>