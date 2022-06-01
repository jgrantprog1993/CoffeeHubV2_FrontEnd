<script>
    import {createEventDispatcher, getContext, onMount} from 'svelte'
    import CoffeeShopList from './CoffeeShopList.svelte';
    import CoffeeShopViewImage from './CoffeeShopViewImage.svelte'
        //  export let params = {};
    const coffeeHubService = getContext("CoffeeHubService");
    let coffeeShopId = [];
    let coffeeShopList = [];
    let selectedCoffeeShop ="";
    let url = ``;
    let message = "Add Image to CoffeeShop";
    let parsedURL ='';
    const dispatch = createEventDispatcher();

    let files;

	$: if (files) {
		// Note that `files` is of type `FileList`, not an Array:
		// https://developer.mozilla.org/en-US/docs/Web/API/FileList
		console.log(files);

		for (const file of files) {
			console.log(`${file.name}: ${file.size} bytes`);
		}
    }


    onMount(async () => {
        url = window.location.href
        //  console.log(url)
        parsedURL = url.substring(35)
        // console.log(parsedURL);
        coffeeShopId = await coffeeHubService.getCoffeeShopsById(parsedURL);
        console.log('coffeeShopId Object -> ' + coffeeShopId)
        console.log('coffeeShopId Object.id -> ' + coffeeShopId.id)
        console.log('coffeeShopId Object._id -> ' + coffeeShopId._id)
        coffeeShopList = await coffeeHubService.getCoffeeShops();
    });


    async function addImageToCoffeeShop() {
        //let parsedURL = url.substring(35)
         
        coffeeShopId = await coffeeHubService.getCoffeeShopsById(parsedURL);
         
         console.log('This is the File  Y ->' + files[0].name)
         console.log('This is the File  Z ->' + files.length)
        const success = await coffeeHubService.addImageToCoffeeShop(coffeeShopId._id, files[0])
        if (!success) {
        message = "Not Added - some error occurred";
        return;
      }
      console.log('Success Response ->' + success);
      message = `Thanks! You uploaded a Image to ${coffeeShopId.coffeeShopName}`;
      dispatch("message", {
        img: files,
      });

    }

</script>
  
<form on:submit|preventDefault={addImageToCoffeeShop}>
    <label for="img">Upload a picture:</label>
    <input
        accept="image/png, image/jpeg"
        bind:files
        id="img"
        name="img"
        type="file"
    />
    <div class="field">
        <div class="control">
          <button class="button is-link is-light">Add</button>
        </div>
    </div>
    <div class="section">
        {message}
    </div>
</form>