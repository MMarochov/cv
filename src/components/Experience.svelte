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
    <h3>{position} @ <a class="hover-1" target="_blank" {href}>{org}</a></h3>
    <img {src} {alt} />
  </div>
  <p class="description">{description}</p>
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
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  a {
    padding: 5px 10px;
    margin: 0 2px;
    border-radius: 10px;
  }

  img {
    height: 30px;
    padding: 0 15px;
  }

  .description {
    margin: 0 0 25px 0;
  }

  @media only screen and (max-width: 599px) {
    a {
    padding: 5px 0;
    margin: 0 2px;
    border-radius: 10px;
  }}
</style>
