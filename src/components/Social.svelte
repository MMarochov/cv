<!-- Social.svelte -->
<script>
  export let name;
  export let href;
  export let icon;
</script>

<p>
  <i class={icon} /> <a {href}>{name}</a>
</p>

<style>
  p {
    margin: 10px;
  }

  a {
    color: inherit;
  }

  a:hover {
    text-decoration: underline;
  }
</style>
