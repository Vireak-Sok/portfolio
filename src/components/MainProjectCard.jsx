import { A } from "@solidjs/router"
import { Icon } from "@iconify-icon/solid"

function MainProjectCard({title, duration, description, path}) {
  return (
    <section>
      <A href={"/work/" + path}  class="flex flex-col justify-between flex-1 w-full h-full py-8 px-8 group border border-solid border-slate-400 hover:border-slate-800 dark:hover:border-slate-100 hover:cursor-pointer gap-8 transition-all duration-500 ease-in-out delay-100">
        <div class="w-full">
          <p class="pb-2 w-full text-slate-400">{duration}</p>
          <h1 class="pb-6 text-4xl font-bold tracking-wide">{title}</h1>
          <p class="w-full">{description}</p>
        </div>
        <p class="w-max flex justify-baseline items-center group-hover:text-slate-800 dark:group-hover:text-slate-100 group-hover:tracking-wide  gap-2 pb-2 text-base text-slate-400 capitalize border-b border-slate-400 font-medium hover:cursor-pointer">
        read more
          <span>
            <Icon icon={"ic:round-arrow-forward"} class="pt-2"/>
          </span>
        </p>
      </A>
    </section>
  )
}

export default MainProjectCard