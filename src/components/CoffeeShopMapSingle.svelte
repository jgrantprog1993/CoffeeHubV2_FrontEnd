<script>
    import 'leaflet/dist/leaflet.css';
    import {LeafletMap} from '../services/leaflet-map.js';
    import {getContext, onMount} from "svelte";
  
    const coffeeHubService = getContext("CoffeeHubService");

    const mapConfig1 = {
      location: {lat: 52.160858, lng: -7.152420},
      zoom: 8,
      minZoom: 1,
    };
    const mapConfig2 = {
      location: {lat: 52.160858, lng: -7.152420},
      zoom: 8,
      minZoom: 1,
    };
    let map1 = null;
    let map2 = null;
    let email = '';
    onMount(async () => {
        map1 = new LeafletMap("coffeeShop-map", mapConfig1);
        map1.showZoomControl();

        //County Groups
        map1.addLayerGroup('Antrim');
        map1.addLayerGroup('Armagh');
        map1.addLayerGroup('Carlow');
        map1.addLayerGroup('Cavan');
        map1.addLayerGroup('Clare');
        map1.addLayerGroup('Cork');
        map1.addLayerGroup('Derry');
        map1.addLayerGroup('Donegal');
        map1.addLayerGroup('Down');
        map1.addLayerGroup('Dublin');
        map1.addLayerGroup('Fermanagh');
        map1.addLayerGroup('Galway');
        map1.addLayerGroup('Kerry');
        map1.addLayerGroup('Kildare');
        map1.addLayerGroup('Kilkenny');
        map1.addLayerGroup('Laois');
        map1.addLayerGroup('Leitrim');
        map1.addLayerGroup('Limerick');
        map1.addLayerGroup('Longford');
        map1.addLayerGroup('Louth');
        map1.addLayerGroup('Mayo');
        map1.addLayerGroup('Meath');
        map1.addLayerGroup('Monaghan');
        map1.addLayerGroup('Offaly');
        map1.addLayerGroup('Roscommon');
        map1.addLayerGroup('Sligo');
        map1.addLayerGroup('Tipperary');
        map1.addLayerGroup('Tyrone');
        map1.addLayerGroup('Waterford');
        map1.addLayerGroup('Westmeath');
        map1.addLayerGroup('Wexford');
        map1.addLayerGroup('Wicklow');

       
        map1.showLayerControl();
       
        const coffeeShops =  await coffeeHubService.getCoffeeShops();
        coffeeShops.forEach(coffeeShop => {
        //map1.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng});
        addCoffeeShopMarker(coffeeShop)
        
    });
});

    export function addCoffeeShopMarker(coffeeShop) {
   
        const coffeeShopStr = `<a href="/#/coffeeShop/${coffeeShop._id}" >${coffeeShop.coffeeShopName}<a/> <br/>
        Rating : ${coffeeShop.rating.toString()}/5 <i class="fas fa-star" style="color:rgb(255, 165, 0)"></i><br/>`;
        //map1.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "CoffeeShops");
        //map1.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
         console.log('coffeeShop.location.locationName => ' + coffeeShop.location.locationName)
         console.log('coffeeShop.location => ' + coffeeShop.location)
        
        if(coffeeShop.location.locationName == "Antrim" || coffeeShop.location == "Antrim" ) {
            map1.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Antrim");
            map1.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Armagh" || coffeeShop.location == "Armagh" ) {
            map1.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Armagh");
            map1.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Carlow" || coffeeShop.location == "Carlow" ) {
            map1.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Carlow");
            map1.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Cavan" || coffeeShop.location == "Cavan" ) {
            map1.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Cavan");
            map1.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Clare" || coffeeShop.location == "Clare" ) {
            map1.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Clare");
            map1.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Cork" || coffeeShop.location == "Cork" ) {
            map1.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Cork");
            map1.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Derry" || coffeeShop.location == "Derry" ) {
            map1.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Derry");
            map1.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Donegal" || coffeeShop.location == "Donegal" ) {
            map1.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Donegal");
            map1.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Down" || coffeeShop.location == "Down" ) {
            map1.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Down");
            map1.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Dublin" || coffeeShop.location == "Dublin" ) {
            map1.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Dublin");
            map1.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Fermanagh" || coffeeShop.location == "Fermanagh" ) {
            map1.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Fermanagh");
            map1.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Galway" || coffeeShop.location == "Galway" ) {
            map1.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Galway");
            map1.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Kerry" || coffeeShop.location == "Kerry" ) {
            map1.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Kerry");
            map1.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Kildare" || coffeeShop.location == "Kildare" ) {
            map1.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Kildare");
            map1.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Kilkenny" || coffeeShop.location == "Kilkenny" ) {
            map1.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Kilkenny");
            map1.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Laois" || coffeeShop.location == "Laois" ) {
            map1.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Laois");
            map1.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Leitrim" || coffeeShop.location == "Leitrim" ) {
            map1.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Leitrim");
            map1.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Limerick" || coffeeShop.location == "Limerick" ) {
            map1.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Limerick");
            map1.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Longford" || coffeeShop.location == "Longford" ) {
            map1.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Longford");
            map1.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Louth" || coffeeShop.location == "Louth" ) {
            map1.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Louth");
            map1.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Mayo" || coffeeShop.location == "Mayo" ) {
            map1.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Mayo");
            map1.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Meath" || coffeeShop.location == "Meath" ) {
            map1.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Meath");
            map1.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Monaghan" || coffeeShop.location == "Monaghan" ) {
            map1.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Monaghan");
            map1.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Offaly" || coffeeShop.location == "Offaly" ) {
            map1.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Offaly");
            map1.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Roscommon" || coffeeShop.location == "Roscommon" ) {
            map1.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Roscommon");
            map1.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Sligo" || coffeeShop.location == "Sligo" ) {
            map1.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Sligo");
            map1.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Tipperary" || coffeeShop.location == "Tipperary" ) {
            map1.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Tipperary");
            map1.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Tyrone" || coffeeShop.location == "Tyrone" ) {
            map1.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Tyrone");
            map1.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Waterford" || coffeeShop.location == "Waterford" ) {
            map1.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Waterford");
            map1.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Westmeath" || coffeeShop.location == "Westmeath" ) {
            map1.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Westmeath");
            map1.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Wexford" || coffeeShop.location == "Wexford" ) {
            map1.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Wexford");
            map1.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Wicklow" || coffeeShop.location == "Wicklow" ) {
            map1.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Wicklow");
            map1.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }

            
           
    }
        
        
    
  </script>
  
  <div class="float-container">

    <div class="float-child">
        <div class="box" id="coffeeShop-map" style="height:800px"></div>
    </div>

    
</div> 

<style>
	.float-container {
    border: 3px solid rgb(255, 255, 255);
    padding: 20px;
}

</style>