<script>
    import 'leaflet/dist/leaflet.css';
    import {LeafletMap} from '../services/leaflet-map.js';
    import {getContext, onMount} from "svelte";
  
    const coffeeHubService = getContext("CoffeeHubService");

    const mapConfig = {
      location: {lat: 52.160858, lng: -7.152420},
      zoom: 8,
      minZoom: 1,
    };
    let map = null;
  
    onMount(async () => {
        map = new LeafletMap("coffeeShop-map", mapConfig);
        map.showZoomControl();
        map.addLayerGroup('CoffeeShops');
        map.showLayerControl();
       
        const coffeeShops =  await coffeeHubService.getCoffeeShops();
        coffeeShops.forEach(coffeeShop => {
        // map.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng});
        addCoffeeShopMarker(coffeeShop)
        
    });
});

    export function addCoffeeShopMarker(coffeeShop) {
        const coffeeShopStr = `<a href="/#/coffeeShop/${coffeeShop._id}" >${coffeeShop.coffeeShopName}<a/> 
            Rating : ${coffeeShop.rating.toString()}/5 <i class="fas fa-star" style="color:rgb(255, 165, 0)"></i>`;
        map.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "CoffeeShops");
        map.moveTo(11, {lat: coffeeShop.lat, lng: coffeeShop.lng});
    }
  </script>
  
  <div class="box" id="coffeeShop-map" style="height:800px">
  </div>