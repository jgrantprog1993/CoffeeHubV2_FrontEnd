<script>
  import {push} from "svelte-spa-router";
  import {getContext} from "svelte";

  let email = ""
  let password = "";
  let errorMessage = "";

  const coffeeHubService = getContext("CoffeeHubService");

  async function login() {
    let success = await coffeeHubService.login(email, password)
    if (success) {
      push("/report");
    } else {
      email = "";
      password = "";
      errorMessage = "Invalid Credentials";
    }
  }
</script>

<form on:submit|preventDefault={login}>
  <div class="field">
    <label class="label" for="email">Email</label>
    <input bind:value={email} class="input" id="email" name="email"placeholder="Enter email" type="text">
  </div>
  <div class="field">
    <label class="label" for="password">Password</label>
    <input bind:value={password} class="input" id="password" name="password" placeholder="Enter Password" type="password">
  </div>
  <div class="field is-grouped">
    <button class="button is-link">Log In</button>
  </div>
</form>
{#if errorMessage}
  <div class="section">
    {errorMessage}
  </div>
{/if}
