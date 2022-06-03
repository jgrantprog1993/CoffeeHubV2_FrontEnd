<script>
    import download2 from "/src/assets/download2.jpg";
    import WelcomeNavigator from "../components/WelcomeNavigator.svelte";
    import TitleBar from "../components/TitleBar.svelte";
    import LoginForm from "../components/LoginForm.svelte";
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
      <TitleBar title={"CoffeeHub"} subTitle={"Sign up or Log in"}/>
    </div>
    <div class="column">
      <WelcomeNavigator/>
    </div>
  </div>
  
  <div class="columns">
    <div class="column has-text-centered">
      <img alt="coffee6" src="{download2}" width="700">
    </div>
    <div class="column">
      <div class="box">
        <h1 class="title">Login</h1>
        <LoginForm/>
      </div>
    </div>
  </div>