<script>
  import Social from "./components/Social.svelte";
  import Timeline from "./components/Timeline.svelte";
  import Experience from "./components/Experience.svelte";
  import Award from "./components/Award.svelte";

  let socials = [
    {
      social: "Website",
      name: "itsmel.io",
      href: "https://itsmel.io",
      icon: "fa-solid fa-rocket"
    },
    {
      social: "GitHub",
      name: "MMarochov",
      href: "https://github.com/MMarochov",
      icon: "fa-brands fa-square-github",
    },
    {
      social: "LinkedIn",
      name: "Melanie Marochov",
      href: "https://linkedin.com/in/melanie-marochov-a41385172",
      icon: "fa-brands fa-linkedin",
    },
  ];

  let placements = [
    {
      open: true,
      org: "Ordnance Survey",
      role: "Graduate Technical Consultant",
      team: "Developer Experience Team",
      months: "September - present",
      years: "2022/23",
      description:
        "As part of the Developer Experience team within Consultancy and Technical Services, I've worked on shaping a critical national dataset that will underpin the census, gained valuable insight into customer relationships, and increased my skills in data visualisation and manipulation.",
    },
    {
      open: true,
      org: "Ordnance Survey",
      role: "Graduate Data Scientist",
      team: "Rapid Prototyping Team",
      months: "April - September",
      years: "2022",
      description:
        "Joining the Rapid Prototyping Team got me thrown in at the deep end of geospatial data science and web development. I worked on a diverse array of prototypes, enhancing skills such as Python programming and agile development. The fast-paced environment and fun team culture made the RPT my favourite placement.",
    },
    {
      open: true,
      org: "Ordnance Survey",
      role: "Graduate Research Scientist",
      team: "Research Team",
      months: "September - March",
      years: "2021/22",
      description:
        "In my first placement I focused on advancing OS's efforts to incorporate ethical practice in geospatial data and artificial intelligence (GeoAI) workflows. Some of the highlights were running an external-facing hybrid workshop on practical tools in GeoAI ethics, and creating a Model Hub for OS's machine learning algorithms.",
    }
  ];
</script>

<main>
  <header>
    <img src="./images/mel.jpg" alt="Mel's headshot" />
    <h1>Melanie Marochov</h1>
    <p>Geospatial Data Scientist and Developer</p>
    <div class="social">
      {#each socials as s}
        <Social social={s.social} name={s.name} href={s.href} icon={s.icon} />
      {/each}
    </div>
  </header>
  <section>
    <h2>Employment History</h2>
    <Experience 
    position="Graduate Scheme"
    org="Ordnance Survey"
    date="September 2021 - present"
    src="./images/Ordnance-Survey-logo-dark.svg"
    alt="Ordnance Survey logo"
    href="https://www.ordnancesurvey.co.uk/"
    description="I began the Ordnance Survey Graduate Scheme in 2021 and have traversed the business through three placements:"/>
    {#each placements as p}
      <Timeline
        open={p.open}
        org={p.org}
        role={p.role}
        team={p.team}
        months={p.months}
        years={p.years}
        description={p.description}
      />
    {/each}
  </section>
  <section>
    <h2>Education</h2>
    <Experience 
    position="M. Sc. (Research), Geography"
    org="Durham University"
    date="October 2019 ‑ December 2020"
    src="./images/Durham-University-logo-dark.svg"
    alt="Durham University logo"
    href="https://www.durham.ac.uk/departments/academic/geography/"
    description="The crux of my postgraduate research was to develop a method which uses deep learning for semantic segmentation of Sentinel-2 satellite imagery containing marine-terminating glaciers in Greenland. I published a paper in one of the top peer-reviewed glaciology journals, presented at the EGU2020: Sharing Geoscience Online conference, and demonstrated in undergraduate Remote Sensing practicals."/>
    <Experience 
    position="B. Sc., Geography"
    org="Durham University"
    date="October 2016 ‑ July 2019"
    src="./images/Durham-University-logo-dark.svg"
    alt="Durham University logo"
    href="https://www.durham.ac.uk/departments/academic/geography/"
    description="First Class Honours"/>
    <Experience 
    position="Advanced Highers, Highers"
    org="Jedburgh Grammar School"
    date="June 2015 - June 2016"
    src=""
    alt=""
    href=""
    description="Advanced Highers: Geography (A), Biology (B), English (B) · Highers: 5 (3A, 2B)"/>
  </section>
  <section>
    <h2>Work Experience</h2>
    <Experience 
    position="Research Assistant"
    org="Durham University"
    date="May - June 2021"
    src="./images/Durham-University-logo-dark.svg"
    alt=""
    href="https://www.durham.ac.uk/departments/academic/geography/"
    description="Used QGIS to map the historical and contemporary movement of penguin colonies in Antarctica from Landsat and Sentinel imagery using the Google Earth Engine Digitisation Tool."/>
    <Experience 
    position="GIS Consultant"
    org="Findlay Ecology Services"
    date="Janueary 2021"
    src="./images/Findlay-ecology-services-logo-transparent-001.png"
    alt="Findlay Ecology Services"
    href="http://www.findlayecologyservices.co.uk/"
    description="Freelance mapping using QGIS for a local ecology company to show land‑cover and map project‑specific data. I created a series of maps which were incorporated into a vegetation survey report and produced a set of clear instructions on how to repeat work for consultant’s future use."/>
    <Experience 
    position="Marine Geoscientist"
    org="British Geological Survey"
    date="Janueary 2021"
    src="./images/British_Geological_Survey.png"
    alt="British Geological Survey"
    href="https://www.bgs.ac.uk/"
    description="I joined the Marine Geoscience Team to map geomorphology, sediments and bedrock geology offshore of Anglesey in an area dominated by landforms associated with the Irish Sea Ice Stream and contemporary marine processes. I reviewed previous literature and gained experience with the SIGMA geological mapping tools in ArcGIS, as well as familiarity with bathymetric geospatial data to create a high quality map which has been incorporated into the BGS Anglesey offshore mapping project."/>
  </section>
  <section>
    <h2>Awards</h2>
    <Award 
    position="The Willimott Prize"
    org="Durham Geography Department"
    date="2019"
    description="I was awarded the Willimott Prize by Durham Geography Department for attaining the second highest grade in the year and substantial work in glacial geomorphology and sedimentology."/>
    <Award 
    position="Duke of Ediburgh's Award"
    org="Gold, Silver, and Bronze"
    date="2014 - 2017"
    description=""/>
  </section>
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

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 22%;
    border-radius: 50%;
    margin-block-start: 3em;
  }

  /* h1 {
    font-weight: normal;
  } */

  p {
    margin: 0;
  }

  .social {
    display: flex;
    align-items: center;
  }

  section {
    text-align: -webkit-center;
  }

  footer {
    color: white;
    text-align: center;
    padding: 40px;
  }
</style>
