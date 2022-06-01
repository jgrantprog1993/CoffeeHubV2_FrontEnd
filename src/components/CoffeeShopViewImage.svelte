<script>
    import {getContext, onMount} from 'svelte'
    //  export let params = {};
    const coffeeHubService = getContext("CoffeeHubService");
    let coffeeShop = [];

    let url = ``;

    export function updateImage(ImageUrl){
        coffeeShop.img = ImageUrl;
    }

    onMount(async () => {
            url = window.location.href
            //  console.log(url)
            let parsedURL = url.substring(35)
            // console.log(parsedURL);
            coffeeShop = await coffeeHubService.getCoffeeShopsById(parsedURL);
            // console.log(coffeeShopId)
        });

    

</script>

<div class="column has-text-centered">
    <h1 class="title is-4">Coffee Shop Image</h1>
   <img src ={coffeeShop.img} alt="ImageTest" width="500" height="600">
  </div>