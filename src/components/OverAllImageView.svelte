<script>
import CoffeeShopViewImage from "./CoffeeShopViewImage.svelte";
import DeleteImageButton from "./DeleteImageButton.svelte";



let unique = {}

    function restart() {
    unique = {} // every {} is unique, {} === {} evaluates to false
    }
</script>

<div class="column has-text-centered">
    <h1 class="title is-4">Coffee Shop Image</h1>
</div>

{#key unique}
    <CoffeeShopViewImage/>
{/key}
{#key unique}
    <DeleteImageButton on:message={restart}/>
{/key}