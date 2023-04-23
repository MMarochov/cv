<!-- EducationEntry.svelte -->

<script>
  export let education;
  export let institution;
  export let date;
  export let headline;
  export let description;
</script>

<section class="container">
  <p class="date">{date}</p>
  <div class="header">
    <h3>{education} @ {institution}</h3>
    {#if headline}
      <p>{headline}</p>
    {/if}
  </div>
  {#if description}
    <p>{description}</p>
  {/if}
</section>

<style>
  .container {
    text-align: left;
    margin: 30px 0;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  p,
  h3 {
    margin: 0;
  }
</style>
