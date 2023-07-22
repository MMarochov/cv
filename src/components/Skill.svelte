<script>
  // Imports
  import CircleProgressBar from "./CircleProgressBar.svelte";
  // Props
  export let name;
</script>

<div class="container">
  <div id="details">
    <h3>{name}</h3>
    <slot />
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: left;
    padding: 10px 0;
  }

  h3 {
    margin: 0;
    font-size: 1.1em;
  }
</style>
