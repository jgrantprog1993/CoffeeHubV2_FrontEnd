<script>
// @ts-nocheck

  import Main from "./pages/Main.svelte"
  import Login from "./pages/Login.svelte"
  import Signup from "./pages/Signup.svelte"
  import Review from "./pages/Review.svelte";
  import Report from "./pages/Report.svelte";
  import Map from "./pages/Map.svelte";
  import {CoffeeHubService} from "./services/coffeeHub-service";
  import {setContext} from 'svelte'
  import Router from "svelte-spa-router";
  import Charts from "./pages/Charts.svelte";
  import CoffeeShopPage from "./pages/CoffeeShopInfoMain.svelte";

  setContext("CoffeeHubService", new CoffeeHubService("https://polar-beach-34658.herokuapp.com"));

  let routes = {
    "/": Main,
    "/login": Login,
    "/signup": Signup,
    "/main": Main,
    "/review": Review,
    "/report": Report,
    "/map": Map,
    "/charts": Charts,
    "/logout": Main,
    "/coffeeShop/*": CoffeeShopPage,
  }
</script>

<div class="container">
  <Router {routes}/>
</div>