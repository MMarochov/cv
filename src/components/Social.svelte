<!-- Social.svelte -->
<script>
  export let name;
  export let href;
  export let icon;
</script>

<p class="hover-1">
  <i class={icon} />
  <a {href} target="_blank">{name}</a>
</p>

<style>
  p {
    margin: 8px;
    padding: 3px 10px;
    display: flex;
    align-items: center;
    border-radius: 10px;
  }

  i {
    font-size: larger;
  }

  a {
    margin-left: 5px;
  }
</style>
