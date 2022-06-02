<script>
    import TitleBar from "../components/TitleBar.svelte";
    import MainNavigator from "../components/MainNavigator.svelte";
    import CoffeeShopInfo from "../components/CoffeeShopInfo.svelte";
    // To be deleted import CoffeeShopImages from "../components/CoffeeShopImages.svelte";
    import CoffeeShopViewImage from "../components/CoffeeShopViewImage.svelte";
    // import { user } from 'src/stores';
    import Uploader from '../components/UploaderTest.svelte';
    import ImageUpload from '../components/ImageUploadForm.svelte';
    import {getContext, onMount} from 'svelte'
    //  export let params = {};
    const coffeeHubService = getContext("CoffeeHubService");
    let coffeeShop = [];
    const sleep = ms => new Promise(f => setTimeout(f, ms))
    let url = ``;
    let img = "";
    let parsedURL = '';
    let unique = {};
    let toggle =1;
    onMount(async () => {
        url = window.location.href
        //  console.log(url)
        parsedURL = url.substring(35)
        // console.log(parsedURL);
        coffeeShop = await coffeeHubService.getCoffeeShopsById(parsedURL);
        // console.log(coffeeShopId)
    });
    
    function handleSingleUpload(event){
		console.log("handleSingleUpload returned url ==> ", event.detail);
    img = event.detail;
    console.log('Image => ' + img);
        // @ts-ignore
    console.log('CS_ID => ' + coffeeShop._id);
    // @ts-ignore
    coffeeHubService.addImageToCoffeeShop(coffeeShop._id, img)
	}
	
	function handleMultipleUpload(event) {
		console.log("handleMultipleUpload returned urls ==> ", event.detail)
    img = event.detail;
    console.log('Images => ' + img);
    coffeeHubService.addImageToCoffeeShop(coffeeShop._id, img)
	}

  let updateImageNew = null;

  function updateImage(event) {
    console.log('Event Dispatch->' + event.detail.img);
    updateImageNew.updateImage(event.detail.img);
    toggle =1
  }

 async function restart() {
  await sleep(1000) 
  unique = {}
  await sleep(1000)
   toggle *=-1
 }

</script>
  
<div class="columns is-vcentered">
    <div class="column is-two-thirds">
      <TitleBar title={"CoffeeHub"} subTitle={"CoffeeShop Info"}/>
    </div>
    <div class="column">
      <MainNavigator/>
    </div>
</div>

<div class="columns">
  <div class="column has-text-centered">
    {#key unique}
      <CoffeeShopViewImage on:message={restart} bind:this ={updateImageNew}/>
    {/key}
  </div>
  <div class="column box has-text-centered">
    <h1 class="title is-4">Coffee Shop Information</h1>
    <CoffeeShopInfo/>
    
    <ImageUpload on:message={updateImage}/>
    
  </div>
  
  
</div>
  
 