<script>
    import {getContext, onMount} from 'svelte'
    //  export let params = {};
    const coffeeHubService = getContext("CoffeeHubService");
    let coffeeShopId = [];
    let locationName ="";
    let email = "";
    let url = ``;
    onMount(async () => {
        url = window.location.href
        //  console.log(url)
        let parsedURL = url.substring(35)
        console.log('PArsed Url -> ' + parsedURL);
        coffeeShopId = await coffeeHubService.getCoffeeShopsById(parsedURL);
        console.log('After err? ' + coffeeShopId)
        console.log(coffeeShopId.location.locationName)
        console.log(coffeeShopId.user.email)
        locationName = coffeeShopId.location.locationName;
        email = coffeeShopId.user.email;
    });
</script>
  <table class="table is-fullwidth">
    <thead>
        <th>Name</th>
        <th>Rating</th>
        <th>Lat</th>
        <th>Lng</th>
        <th>Reviewer</th>
        <th>Location</th>
    </thead>
    <tbody>
            <tr>
                <td>
                    {coffeeShopId.coffeeShopName}
                </td>
                <td>
                    {coffeeShopId.rating}
                </td>
                <td>
                    {coffeeShopId.lat}
                </td>
                <td>
                    {coffeeShopId.lng}
                </td>
                <td>
                    {locationName}
                </td>
                <td>
                    {email}
                </td>
             
            </tr>
       
    </tbody>
  </table>