<!-- Social.svelte -->
<script>
  export let social;
  export let name;
  export let href;
  export let icon;
</script>

<p class="hover-1">
  <i class={icon} />
  <a {href}>{name}</a>
</p>

<style>

  p {
    margin: 8px;
    padding: 3px 7px 3px 7px;
    display: flex;
    align-items: center;
    border-radius: 2px;
  }

  i {
    font-size: larger;
  }

  a {
    margin-left: 5px;
  }

  /* a:hover {
    text-decoration: underline;
  } */
</style>
