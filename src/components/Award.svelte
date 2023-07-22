<!-- Experience.svlete -->
<script>
  export let position;
  export let org;
  export let date;
  export let description;
</script>

<section class="container">
  <p class="date">{date}</p>
  <div class="header">
    <h3>{position} | {org}</h3>
  </div>
  <p>{description}</p>
</section>

<style>
  .container {
    text-align: left;
  }

  .date {
    color: grey;
    margin: 0;
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
</style>
