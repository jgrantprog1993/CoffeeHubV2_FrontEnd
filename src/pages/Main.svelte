<script>
    import coffee2 from "/src/assets/coffee2.png";
    import TitleBar from "../components/TitleBar.svelte";
    import WelcomeNavigator from "../components/WelcomeNavigator.svelte";
    import {getContext} from "svelte";
    
    const coffeeHubService= getContext("CoffeeHubService");
    coffeeHubService.logout();
  </script>
  
  <div class="columns is-vcentered">
    <div class="column is-two-thirds">
      <TitleBar title={"CoffeeHub"} subTitle={"Sign up or Log in"}/>
    </div>
    <div class="column">
      <WelcomeNavigator/>
    </div>
  </div>
  
  <div class="columns is-vcentered content">
    <div class="column has-text-centered">
      <img width="300" src="{coffee2}" alt="Icon">
    </div>
    <div class="column">
      <h1 class="title">PlaceHolder Text</h1>
      <p>PlaceHolder Text</p>
    </div>
  </div>