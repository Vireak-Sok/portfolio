import NavBar from "../components/NavBar"
import data from "../assets/db.json"
import { For, Show, onMount } from "solid-js"
import MainProjectCard from "../components/MainProjectCard"
import SideProjectCard from "../components/SideProjectCard"
import BottomBar from "../components/BottomBar"

function Work() {

  onMount(() => {
    document.title = 'Vireak Sok - Work'
  });

  const projects = data.projects
  const sideProjects = data.sideProjects

  return (
    <Show when={data} fallback={<p>loading ...</p>}>
      <main class="scrollbar-hide pb-24">
        <NavBar/>
        <section class="page-section">
          <h1 class="page-title">Projects</h1>
          <p class="page-description">Some of the projects are from work and some are on my own time.</p>
          <div class="container m-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 md:mt-16">
            <For each={projects}>
              {(project) => (
                <MainProjectCard title={project.project_name} description={project.project_description} duration={project.project_duration} path={project.path}/>
              )}
            </For>
          </div>
          <div class="container m-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 md:mt-16">
            <For each={sideProjects}>
              {(sideProject) => (
                <SideProjectCard title={sideProject.project_name} description={sideProject.project_description} duration={sideProject.project_duration} path={sideProject.path}/>
              )}
            </For>
          </div>
        </section>
        <BottomBar/>
      </main>
    </Show>
  )
}

export default Work