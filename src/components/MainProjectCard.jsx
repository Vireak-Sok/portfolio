import { A } from "@solidjs/router"
import OutlineButton from "./OutlineButton"
import { Icon } from "@iconify-icon/solid"

function MainProjectCard({title, duration, description, path}) {
  return (
    <section>
      <A href={"/work/" + path}  class="flex flex-col justify-between flex-1 w-full h-full py-8 px-8 group border border-solid border-slate-400 group hover:border-slate-800 dark:hover:border-slate-100 hover:cursor-pointer gap-8 transition-all ease-in-out">
        <div class="w-full">
          <p class="pb-2 w-full text-slate-400">{duration}</p>
          <h1 class="pb-6 text-4xl font-bold tracking-wide">{title}</h1>
          <p class="w-full">{description}</p>
        </div>
        <OutlineButton label={"read more"} hover={"group-hover:text-slate-800 dark:group-hover:text-slate-100 group-hover:tracking-wide"} icon={<Icon icon={"ic:round-arrow-forward"}/>}/>
      </A>
    </section>
  )
}

export default MainProjectCard