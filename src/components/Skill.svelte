<script>
  // Imports
  import CircleProgressBar from "./CircleProgressBar.svelte";
  // Props
  export let name;
  export let progress;
</script>

<div class="container">
  <CircleProgressBar {progress} />
  <div id="details">
    <h4>{name}</h4>
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

  h4 {
    margin: 0;
  }

  #details {
    padding-left: 10px;
    max-width: 310px;
  }
</style>
