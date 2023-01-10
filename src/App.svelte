<script>
  import Social from "./components/Social.svelte";

  let socials = [
    {
      name: "Website",
      href: "itsmel.io",
      icon: "fa-solid fa-cube"
    },
    {
      name: "GitHub",
      href: "github.com/MMarochov",
      icon: "fa-brands fa-square-github",
    },
    {
      name: "LinkedIn",
      href: "linkedin.com/in/melanie-marochov-a41385172",
      icon: "fa-brands fa-linkedin",
    },
  ];
</script>

<main>
  <header>
    <img src="./images/mel.jpg" alt="Mel's headshot" />
    <h1>Melanie Marochov</h1>
    <p>Geospatial Data Scientist and Developer</p>
    <div class="social">
      {#each socials as s}
        <Social name={s.name} href={s.href} icon={s.icon} />
      {/each}
    </div>
  </header>
</main>
<footer>Designed and built by Mel Marochov | 2023</footer>

<style>
  main {
    width: 100%;
    max-width: 960px;
    background: white;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.8);
    border-radius: 5px;
    display: flex;
    margin: 0 auto;
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 25%;
    border-radius: 50%;
    margin-block-start: 3em;
  }

  .social {
    display: flex;
  }

  footer {
    color: white;
    text-align: center;
    padding: 40px;
  }
</style>
