<script>
    import coffee6 from "/src/assets/coffee6.jpg";
    import TitleBar from "../components/TitleBar.svelte";
    import WelcomeNavigator from "../components/WelcomeNavigator.svelte";
    import {getContext} from "svelte";
    
    const coffeeHubService= getContext("CoffeeHubService");
    coffeeHubService.logout();
  </script>
  <style>
          img {
              border-radius: 40%;
          }
        a {
              border-bottom: 1px dashed #333;
        }
  </style>
  <div class="columns is-vcentered">
    <div class="column is-two-thirds">
      <TitleBar title={"CoffeeHub"} subTitle={"Home Page "}/>
    </div>
    <div class="column">
      <WelcomeNavigator/>
    </div>
  </div>
  
  <div class="columns is-vcentered content">
    <div class="column has-text-centered">
      <img  src="{coffee6}" alt="Icon">
    </div>
    <div class="column">
      <div class="box">
      <h1 class="title">Welcome to CoffeeHub V2</h1>
      <p>This time this app is seperated out into Front End and Back End.</p>
      <p>The Back end is stil completed in <a href="https://hapi.dev/">Hapi</a> and is based on the work completed in the last project. This time the front end is written in <a href="https://svelte.dev/">Svelte.</a></p>

      <p> This is an App the a user can add their Favourite CoffeeShop to the Map for other users to view and leave a review !</p>
    
    </div>
    </div>
  </div>