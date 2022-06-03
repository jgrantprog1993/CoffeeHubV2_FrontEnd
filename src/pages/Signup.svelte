<script>
    import signup2 from "/src/assets/signup2.png";
    import WelcomeNavigator from "../components/WelcomeNavigator.svelte";
    import TitleBar from "../components/TitleBar.svelte";
    import SignupForm from "../components/SignupForm.svelte";
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
      <TitleBar subTitle={"Sign up or Log in"} title={"CoffeeHub"}/>
    </div>
    <div class="column">
      <WelcomeNavigator/>
    </div>
  </div>
  
  <div class="columns">
    <div class="column">
      <div class="box">
        <h1 class="title">Sign-Up</h1>
        <SignupForm/>
      </div>
    </div>
    <div class="column has-text-centered">
      <img alt="signup" src="{signup2}" >
    </div>
  </div>