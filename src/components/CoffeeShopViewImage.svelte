<script>
// @ts-nocheck

    import {createEventDispatcher} from 'svelte'
    const dispatch = createEventDispatcher()
    import {getContext, onMount} from 'svelte'
    //  export let params = {};
    import {push} from "svelte-spa-router";
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
            console.log(coffeeShop._id)
        });

    function deleteImage(){

        //coffeeHubService.deleteImage(coffeeShop._id, coffeeShop.img)
        
        coffeeHubService.deleteImage(coffeeShop._id)
        dispatch("message", {img:""})
        
    }

    

    

</script>
<form on:submit|preventDefault={deleteImage}>
        <div class="column has-text-centered">
            <h1 class="title is-4">Coffee Shop Image</h1>
        
        </div>
       
            {#if coffeeShop.img}
                <img src ={coffeeShop.img} alt="ImageTest" width="500" height="600">
            {:else}
                <img src = "https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc=" alt="ImageTest" width="500" height="600">
            {/if}
      
       
            <div class="field">
                <div class="control">
                    {#if coffeeShop.img}
                    <button class="button is-danger is-large is-fullwidth">Delete</button>
                    {:else}
                    <button class="button is-danger is-large is-fullwidth" title="Disabled button" disabled>Delete Disabled</button>
                    {/if}
                </div>
            </div>
       
</form>