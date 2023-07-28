<script>
  // Imports
  import Social from "./components/Social.svelte";
  import Timeline from "./components/Timeline.svelte";
  import Experience from "./components/Experience.svelte";
  import Award from "./components/Award.svelte";
  import EducationEntry from "./components/EducationEntry.svelte";
  import WorkExperienceEntry from "./components/WorkExperienceEntry.svelte";
  import Skill from "./components/Skill.svelte";
  import { socials } from "./socials.js";
  import { placements } from "./placements.js";
  import { education } from "./education.js";
  import { workExperience } from "./workExperience.js";
  import { skills } from "./skills.js";
  import { interests } from "./interests.js";
  import { projects } from "./projects.js";
</script>

<main>
  <div class="content">
    <header>
      <img src="./images/mel.jpg" alt="Mel's headshot" />
      <h1>Melanie Marochov</h1>
      <p class="intro">I'm a geospatial data scientist and developer. I’m adaptable, always learning, and ready to be thrown in at the deep end! Outside of work I love being creative or out in nature ⋆｡☾ ﾟ⋆｡ </p>
      <div class="social">
        {#each socials as s}
          <Social social={s.social} name={s.name} href={s.href} icon={s.icon} />
        {/each}
      </div>
    </header>
    <section>
      <h2>Employment History</h2>
      <Experience
        position="Associate Data Scientist"
        ,
        org="Ordnance Survey"
        date="June 2023 - present"
        src="./images/Ordnance-Survey-logo-dark.svg"
        alt="Ordnance Survey logo"
        href="https://www.ordnancesurvey.co.uk/"
        description="As a member of the Earth Observation and Analytics Squad, I am currently focused on enhancing the robustness of our machine learning methods for peatland classification, utilizing remotely sensed imagery to provide actionable insights for customers interested in carbon finance. I've particularly enjoyed experimenting with different unsupervised segmentation techniques and supporting graduates in their technical development."
      />
      <Experience
        position="Graduate Scheme"
        org="Ordnance Survey"
        date="September 2021 - June 2023"
        src="./images/Ordnance-Survey-logo-dark.svg"
        alt="Ordnance Survey logo"
        href="https://www.ordnancesurvey.co.uk/"
        description="Throughout the graduate scheme I specialised in spatial data science, web development, and practical ethics at the intersection of geospatial data and artifical intelligence (GeoAI). I traversed the business through four placements:"
      />
      {#each placements as p}
        <Timeline
          open={p.open}
          role={p.role}
          team={p.team}
          months={p.months}
          years={p.years}
          skills={p.skills}
          description={p.description}
        />
      {/each}
    </section>
    <section class="education">
      <h2>Education</h2>
      {#each education as e}
        <EducationEntry
          education={e.education}
          institution={e.institution}
          date={e.date}
          headline={e.headline}
          description={e.description}
        />
      {/each}
    </section>
    <section />
    <section id="duo-column">
      <div class="col first">
        <section class="box">
          <h2>Skills</h2>
          {#each skills as s}
            <Skill name={s.name}>{s.text}</Skill>
          {/each}
        </section>
        <section class="box">
          <h2>Publications</h2>

          <p class="hover-1">
            <a href="https://tc.copernicus.org/articles/15/5041/2021/"
              >Image classification of marine-terminating outlet glaciers in
              Greenland using deep learning methods</a
            >
          </p>
          <p>
            Marochov et al. 2021 | The Cryosphere, European Geosciences Union
          </p>
        </section>
        <section class="box">
          <h2>Awards</h2>
          <Award
            position="The Willimott Prize"
            org="Durham Geography Department"
            date="2019"
            description=""
          />
          <!-- I was awarded the Willimott Prize by Durham Geography Department for attaining the second highest grade in the year and substantial work in glacial geomorphology and sedimentology. -->
          <Award
            position="Duke of Ediburgh's Award"
            org="Gold, Silver, and Bronze"
            date="2014 - 2017"
            description=""
          />
        </section>
      </div>
      <div class="col second">
        <section class="box">
          <h2>Projects</h2>
          {#each projects as p}
            <div class="project-title">
              <h3>{p.title}</h3>
              {#if p.link}
                <a class="link-icon" target="_blank" href={p.link}
                  ><img
                    class="link"
                    src="./images/Website_lightmode.svg"
                    alt="link"
                  /></a
                >
              {/if}
            </div>
            <p>{p.description}</p>
          {/each}
        </section>
        <section class="box">
          <h2>Work Experience</h2>
          {#each workExperience as w}
            <WorkExperienceEntry
              position={w.position}
              org={w.org}
              date={w.date}
              src={w.src}
              alt={w.alt}
            />
          {/each}
        </section>
        <section class="box">
          <h2>Interests</h2>
          <div id="interest">
            {#each interests as i}
              <img class="interest" src={i.src} alt={i.alt} />
            {/each}
          </div>
        </section>
      </div>
    </section>
  </div>
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
    flex-direction: column;
    margin: 0 auto;
  }

  h3 {
    font-size: 1.1em;
    margin: 0;
  }

  .hover-1 {
    padding: 5px;
    border-radius: 10px;
  }


  .interest {
    height: 30px;
    width: 30px;
    margin: 0;
    padding: 5px;
    border-radius: 0;
  }

  #interest {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }

  .content {
    width: 84%;
    align-self: center;
  }

  h2 {
    text-align: center;
    margin: 5px;
  }

  .project-title {
    display: flex;
    align-items: center;
    margin: 15px 0 5px 0;
  }

  .link {
    width: 20px;
    margin: 0;
    border-radius: 0;
    padding: 0 10px;
  }

  .link-icon {
    display: flex;
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .education {
    border-radius: 5px;
  }

  #duo-column {
    display: flex;
    align-self: center;
  }

  .col {
    width: 50%;
  }

  .first {
    margin-right: 10px;
  }

  .second {
    margin-left: 10px;
  }

  .box {
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.148);
    border-radius: 5px;
    padding: 20px;
    margin: 20px 0;
  }

  img {
    width: 28%;
    border-radius: 50%;
    margin-block-start: 3em;
  }

  p {
    margin: 0;
    text-align: left;
  }

  .social {
    display: flex;
    align-items: center;
  }

  section {
    text-align: -webkit-center;
    margin: 60px 0;
  }

  footer {
    color: white;
    text-align: center;
    padding: 40px;
  }

  @media only screen and (max-width: 800px) {
    #duo-column {
      flex-wrap: wrap;
      justify-content: center;
    }

    .col {
      width: 100%;
      margin: 0;
    }

  }
</style>
