<!-- Experience.svlete -->
<script>
  export let position;
  export let org;
  export let date;
  export let src;
  export let alt;
  export let href;
  export let description;
</script>

<section class="container">
  <p class="date">{date}</p>
  <div class="header">
    <h3>{position} @ <a class="hover-1" {href}>{org}</a></h3>
    <img {src} {alt} />
  </div>
  <p>{description}</p>
</section>

<style>
  .container {
    text-align: left;
  }

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  h3 {
    margin: 0;
  }

  a {
    padding: 5px 10px 10px 10px;
    border-radius: 10px;
  }

  img {
    height: 30px;
  }
</style>
