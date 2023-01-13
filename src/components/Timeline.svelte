<!-- ExperienceEntry.svelte -->
<script>
  // Imports
  import { slide } from "svelte/transition";

  // Props
  export let open;
  export let org;
  export let role;
  export let team;
  export let months;
  export let years;
  export let description;

  let isOpen = false;
  const toggle = () => (isOpen = !isOpen);
  if (open) isOpen = true;
</script>

<article id="timeline">
  <section id="timeline-entry">
    <div id="date">
      <p>{months}</p>
    </div>
    <summary id="panel" on:click={toggle}>
      <button>
        {role} | {team}
      </button>
      {#if isOpen}
        <p id="description" transition:slide={{ duration: 300 }}>
          {description}
        </p>
      {/if}
    </summary>
  </section>
</article>

<style>
  #timeline {
    width: 80%;
    max-width: 960px;
    display: flex;
  }

  #timeline-entry {
    position: relative;
    width: 100%;
    margin: 0px;
    padding: 0.4rem 0 0.4rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  #date {
    width: 20%;
    padding-top: 0.3rem;
    font-size: 0.8rem;
    font-weight: bold;
  }

  p {
    margin: 0;
  }

  #panel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 70%;
    overflow: hidden;
    position: relative;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.148);
    border-radius: 3px;
    padding: .5rem;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    font-size: .9rem;
  }

  #panel:hover {
    background: rgba(0, 0, 0, 0.023);
  }

  button {
    display: contents;
    border: none;
    background: none;
    color: inherit;
    cursor: pointer;
    font-weight: bold;
  }

  #description {
    text-align: left;
    padding-top: 5px;
  }

  #timeline-entry:before {
    top: 0;
    bottom: 0;
    left: 22%;
    position: absolute;
    content: "";
    width: 0.1rem;
    background: #000;
    box-shadow: 1px 1px 6px #0000003a, -1px -1px 6px #0000001f;
  }

  #timeline-entry:after {
    content: "";
    height: 0.1rem;
    width: 0.8rem;
    left: 22%;
    background: #000;
    position: absolute;
    box-shadow: 1px 1px 6px #0000003a, -1px -1px 6px #0000001f;
  }

  :global(main.dark-mode) #timeline-entry:before {
    background: #d7e3f5;
  }

  :global(main.dark-mode) #timeline-entry:after {
    background: #d7e3f5;
  }

  :global(main.dark-mode) #panel:hover {
    background: rgb(215, 227, 245, 0.15);
  }

  @media only screen and (max-width: 1050px) {
    #timeline {
      max-width: 80%;
    }

    #timeline-entry {
      justify-content: center;
      align-items: center;
      display: block;
      text-align: left;
    }

    #timeline-entry:before {
      display: none;
    }

    #timeline-entry:after {
      display: none;
    }

    #panel {
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.148);
      width: 100%;
      align-items: flex-end;
      border-radius: 0px;
    }

    #date {
      position: absolute;
      padding-left: 1rem;
      width: 40%;
    }

    #description {
      padding-top: 25px;
    }
  }

  @media only screen and (max-width: 810px) {
    #timeline {
      padding: 0.6rem 0 0.6rem;
      max-width: 100%;
    }

    #timeline-entry {
      display: flex;
      flex-direction: column;
      border-radius: 3px;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.148);
      justify-content: left;
      padding: 0.6rem;
    }

    #date {
      position: unset;
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      padding: 0;
    }

    #panel {
      box-shadow: none;
      padding: 0;
      background: 0;
      align-items: flex-start;
    }

    #panel:hover {
      background: none;
    }

    :global(main.dark-mode) #panel:hover {
      background: none;
    }
  }
</style>
