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

        //County Groups
        map.addLayerGroup('Antrim');
        map.addLayerGroup('Armagh');
        map.addLayerGroup('Carlow');
        map.addLayerGroup('Cavan');
        map.addLayerGroup('Clare');
        map.addLayerGroup('Cork');
        map.addLayerGroup('Derry');
        map.addLayerGroup('Donegal');
        map.addLayerGroup('Down');
        map.addLayerGroup('Dublin');
        map.addLayerGroup('Fermanagh');
        map.addLayerGroup('Galway');
        map.addLayerGroup('Kerry');
        map.addLayerGroup('Kildare');
        map.addLayerGroup('Kilkenny');
        map.addLayerGroup('Laois');
        map.addLayerGroup('Leitrim');
        map.addLayerGroup('Limerick');
        map.addLayerGroup('Longford');
        map.addLayerGroup('Louth');
        map.addLayerGroup('Mayo');
        map.addLayerGroup('Meath');
        map.addLayerGroup('Monaghan');
        map.addLayerGroup('Offaly');
        map.addLayerGroup('Roscommon');
        map.addLayerGroup('Sligo');
        map.addLayerGroup('Tipperary');
        map.addLayerGroup('Tyrone');
        map.addLayerGroup('Waterford');
        map.addLayerGroup('Westmeath');
        map.addLayerGroup('Wexford');
        map.addLayerGroup('Wicklow');

        map.showLayerControl();
       
        const coffeeShops =  await coffeeHubService.getCoffeeShops();
        coffeeShops.forEach(coffeeShop => {
        //map.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng});
        addCoffeeShopMarker(coffeeShop)
        
    });
});

    export function addCoffeeShopMarker(coffeeShop) {
        
        const coffeeShopStr = `<a href="/#/coffeeShop/${coffeeShop._id}" >${coffeeShop.coffeeShopName}<a/> 
        Rating : ${coffeeShop.rating.toString()}/5 <i class="fas fa-star" style="color:rgb(255, 165, 0)"></i>`;
        //map.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "CoffeeShops");
        //map.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
        console.log('coffeeShop.location.locationName => ' + coffeeShop.location.locationName)
        console.log('coffeeShop.location => ' + coffeeShop.location)
        
        if(coffeeShop.location.locationName == "Antrim" || coffeeShop.location == "Antrim" ) {
            map.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Antrim");
            map.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Armagh" || coffeeShop.location == "Armagh" ) {
            map.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Armagh");
            map.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Carlow" || coffeeShop.location == "Carlow" ) {
            map.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Carlow");
            map.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Cavan" || coffeeShop.location == "Cavan" ) {
            map.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Cavan");
            map.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Clare" || coffeeShop.location == "Clare" ) {
            map.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Clare");
            map.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Cork" || coffeeShop.location == "Cork" ) {
            map.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Cork");
            map.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Derry" || coffeeShop.location == "Derry" ) {
            map.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Derry");
            map.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Donegal" || coffeeShop.location == "Donegal" ) {
            map.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Donegal");
            map.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Down" || coffeeShop.location == "Down" ) {
            map.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Down");
            map.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Dublin" || coffeeShop.location == "Dublin" ) {
            map.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Dublin");
            map.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Fermanagh" || coffeeShop.location == "Fermanagh" ) {
            map.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Fermanagh");
            map.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Galway" || coffeeShop.location == "Galway" ) {
            map.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Galway");
            map.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Kerry" || coffeeShop.location == "Kerry" ) {
            map.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Kerry");
            map.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Kildare" || coffeeShop.location == "Kildare" ) {
            map.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Kildare");
            map.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Kilkenny" || coffeeShop.location == "Kilkenny" ) {
            map.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Kilkenny");
            map.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Laois" || coffeeShop.location == "Laois" ) {
            map.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Laois");
            map.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Leitrim" || coffeeShop.location == "Leitrim" ) {
            map.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Leitrim");
            map.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Limerick" || coffeeShop.location == "Limerick" ) {
            map.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Limerick");
            map.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Longford" || coffeeShop.location == "Longford" ) {
            map.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Longford");
            map.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Louth" || coffeeShop.location == "Louth" ) {
            map.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Louth");
            map.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Mayo" || coffeeShop.location == "Mayo" ) {
            map.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Mayo");
            map.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Meath" || coffeeShop.location == "Meath" ) {
            map.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Meath");
            map.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Monaghan" || coffeeShop.location == "Monaghan" ) {
            map.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Monaghan");
            map.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Offaly" || coffeeShop.location == "Offaly" ) {
            map.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Offaly");
            map.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Roscommon" || coffeeShop.location == "Roscommon" ) {
            map.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Roscommon");
            map.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Sligo" || coffeeShop.location == "Sligo" ) {
            map.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Sligo");
            map.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Tipperary" || coffeeShop.location == "Tipperary" ) {
            map.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Tipperary");
            map.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Tyrone" || coffeeShop.location == "Tyrone" ) {
            map.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Tyrone");
            map.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Waterford" || coffeeShop.location == "Waterford" ) {
            map.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Waterford");
            map.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Westmeath" || coffeeShop.location == "Westmeath" ) {
            map.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Westmeath");
            map.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Wexford" || coffeeShop.location == "Wexford" ) {
            map.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Wexford");
            map.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }
            else if(coffeeShop.location.locationName == "Wicklow" || coffeeShop.location == "Wicklow" ) {
            map.addMarker({lat: coffeeShop.lat, lng: coffeeShop.lng}, coffeeShopStr, "Wicklow");
            map.moveTo(8, {lat: coffeeShop.lat, lng: coffeeShop.lng});
            }



           
    }
        
        
    
  </script>
  
  <div class="box" id="coffeeShop-map" style="height:800px">
  </div>