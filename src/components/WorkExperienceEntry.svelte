<script>
  export let position;
  export let org;
  export let date;
  export let src;
  export let alt;
</script>

<section class="container">
  <div class="text">
    <p class="date">{date}</p>
  <h3>{position}</h3>
  <p>{org}</p>
  </div>
  <img {src} {alt} />
</section>

<style>
  .container {
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .text {
    display: flex;
    flex-direction: column;
  }

  h3, p {
    margin: 0;
  }

  img {
    height: 30px;
  }
</style>
