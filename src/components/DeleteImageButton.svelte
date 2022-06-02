<script>
// @ts-nocheck


    import {createEventDispatcher} from 'svelte'
    const dispatch = createEventDispatcher()
    import {getContext, onMount} from 'svelte'
    const coffeeHubService = getContext("CoffeeHubService");
    let coffeeShop = [];
    let url = ``;
    let parsedURL = '';
    
    onMount(async () => {
            url = window.location.href
            //  console.log(url)
            let parsedURL = url.substring(35)
            // console.log(parsedURL);
            coffeeShop = await coffeeHubService.getCoffeeShopsById(parsedURL);
            console.log('NEED TO Check this HERE ------> ' + coffeeShop._id)
        });

    
        async  function deleteImage(){
        coffeeShop = await coffeeHubService.getCoffeeShopsById(parsedURL);
        //coffeeHubService.deleteImage(coffeeShop._id, coffeeShop.img)
        coffeeHubService.deleteImage(coffeeShop._id)
        dispatch("message", {img:""})
        }

</script>

<form on:submit|preventDefault={deleteImage}>
    
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