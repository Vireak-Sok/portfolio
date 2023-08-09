import { useParams } from "@solidjs/router"
import data from "../assets/db.json"
import NavBar from "../components/NavBar";
import OutlineButton from "../components/OutlineButton";
import { createStore } from "solid-js/store"
import { Icon } from "@iconify-icon/solid"
import { onMount } from "solid-js";

function Project() {
  const params = useParams()
  const [project, setProject] = createStore()

  params.name.includes("side") ? setProject(data.sideProjects.filter(item => item.path === params.name)) : setProject(data.projects.filter(item => item.path === params.name))

  onMount(() => {
    document.title = `Work - ${project[0].project_name}`
  });

  return (
    <main>
      <NavBar/>
      <section class="w-full flex flex-1 flex-col justify-center items-center pt-6 md:pt-12 gap-8 md:px-24 lg:px-64 px-6">
        <h1 class="md:pb-4 h-10 md:h-24 m-0 text-2xl sm:text-3xl md:text-6xl text-center font-semibold uppercase flex justify-center pb-2">{project[0].project_name}</h1>
        <p class="flex justify-center text-center md:w-3/4">{project[0].project_description}</p>

        {
          project[0].external_url === undefined ? (
            project[0].prototype_url != undefined ? <OutlineButton label={"Prototype"} url={project[0].prototype_url} hover={"hover:text-slate-800 dark:hover:text-slate-100 hover:tracking-wide"} icon={<Icon icon={"tabler:click"}/>}/>
            : null
          ) : (
            <OutlineButton label={"visit website"} url={project[0].external_url} hover={"hover:text-slate-800 dark:hover:text-slate-100 hover:tracking-wide"} icon={<Icon icon={"ic:round-arrow-outward"}/>}/>
          )
        }
        {project[0].design_detail == undefined ? <img src={project[0].thumbnail} width={"640px"}/> :

        <div class="w-full flex flex-col justify-center items-center gap-8">
          {/* <div class="text-xl w-full flex gap-4 items-center text-slate-300 uppercase tracking-wide mt-4 md:mt-10"> <div class="h-[1px] bg-slate-400 flex-1"/><p class="w-fit">Design Process</p><div class="h-[1px] bg-slate-400 flex-1"/> </div> */}

          <img src={project[0].design_detail}/>
          <OutlineButton label={"Download as PDF"} dowload={true} download_url={project[0].download_url} hover={"hover:text-slate-800 dark:hover:text-slate-100 hover:tracking-wide"}/>
        </div>
        }
      </section>
    </main>
  )
}

export default Project