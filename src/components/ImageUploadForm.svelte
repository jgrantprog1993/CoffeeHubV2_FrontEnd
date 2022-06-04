<script>
// @ts-nocheck

    import {createEventDispatcher, getContext, onMount} from 'svelte'
    import CoffeeShopViewImage from "../components/CoffeeShopViewImage.svelte";
    // import { user } from 'src/stores';
    const dispatch = createEventDispatcher();
    import Uploader from '../components/UploaderTest.svelte';
   
    
    //  export let params = {};
    const coffeeHubService = getContext("CoffeeHubService");
    let coffeeShop = [];

    let url = ``;
    let img = "";
    let parsedURL = '';

    onMount(async () => {
        url = window.location.href
        //  // console.log(url)
        parsedURL = url.substring(54)
        // // console.log(parsedURL);
        coffeeShop = await coffeeHubService.getCoffeeShopsById(parsedURL);
        // // console.log(coffeeShopId)
    });
    
    function handleSingleUpload(event){
		// console.log("handleSingleUpload returned url ==> ", event.detail);
    img = event.detail;
    // console.log('Image => ' + img);
        // @ts-ignore
    // console.log('CS_ID => ' + coffeeShop._id);
    // @ts-ignore
    coffeeHubService.addImageToCoffeeShop(coffeeShop._id, img);
    dispatch("message", {
        img: img,
    })

	}
	
	function handleMultipleUpload(event) {
		// console.log("handleMultipleUpload returned urls ==> ", event.detail)
    img = event.detail;
    // console.log('Images => ' + img);
    coffeeHubService.addImageToCoffeeShop(parsedURL, img)
	}

  export function updateImage(event) {
    // console.log(event.detail.img);
    coffeeHubService.updateImage(event.detail.img);
  }

</script>

<h1 class="title is-4">Upload Images for {coffeeShop.coffeeShopName} CoffeeShop </h1>
	  <p>Single File upload</p>
	  <Uploader on:upload={handleSingleUpload}/>
	  <p>Multiple File upload</p>
	  <Uploader multiple={true} on:upload={handleMultipleUpload}/>