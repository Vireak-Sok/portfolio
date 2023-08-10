import NavBar from "../components/NavBar"
import data from "../assets/db.json"
import { For, Show, onMount } from "solid-js"
import OutlineButton from "../components/OutlineButton"
import AboutCard from "../components/AboutCard"

function About() {
  const experiences = data.experiences
  const educations = data.educations
  const awards = data.awards

  onMount(() => {
    document.title = 'Vireak Sok - About'
  });

  return (
    <Show when={data} fallback={<p>loading ...</p>}>
      <main class="scrollbar-hide">
        <NavBar/>
        <section class="page-section">
          <h1 class="page-title">Experiences</h1>
          <p  class="page-description">I've worked for various position as an intern and full time staff.</p>
          <div class="container m-auto grid grid-cols-1 md:grid-cols-2 gap-8 my-8 md:my-16">
            <For each={experiences}>
              {(experience) => (
                <AboutCard title={experience.position} duration={experience.duration} description={experience.description} company={experience.company_name}/>
              )}
            </For>
          </div>
        </section>
        <section class="page-section">
          <h1 class="page-title">Educations</h1>
          <p  class="page-description">Where I got all my degrees and knowledge.</p>
          <div class="container m-auto grid grid-cols-1 md:grid-cols-2 gap-8 my-8 md:my-16">
            <For each={educations}>
              {(education) => (
                <AboutCard title={education.degree} duration={education.duration} company={education.school_name}/>
              )}
            </For>
          </div>
        </section>
        <section class="page-section">
          <h1 class="page-title">Awards</h1>
          <p  class="page-description">I've been participated in several startup competition and won some awards.</p>
          <div class="container m-auto grid grid-cols-1 md:grid-cols-2 gap-8 my-8 md:my-16">
            <For each={awards}>
              {(award) => (
                <AboutCard title={award.rank} duration={award.date} company={award.event}/>
              )}
            </For>
          </div>
        </section>
        <OutlineButton dowload={true} label={"Download PDF"} download_url={"https://drive.google.com/file/d/1uWz27hsxHO1tY2I5-d5ncnTpCPI7CJeG/view?usp=sharing"} hover={"hover:text-slate-800 dark:hover:text-slate-100 hover:tracking-wide"}/>
      </main>
    </Show>
  )
}

export default About