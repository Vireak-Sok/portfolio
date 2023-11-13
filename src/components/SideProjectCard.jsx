import { A } from "@solidjs/router"

function SideProjectCard({title, description, path}) {
  return (
    <section>
      <A href={"/work/" + path}  class="flex flex-col justify-between flex-1 h-full py-8 px-8 group border border-solid border-slate-400 group hover:border-slate-800 dark:hover:border-slate-100 hover:cursor-pointer gap-2 transition-all duration-500 ease-in-out delay-100">
        <h1 class="text-2xl font-bold tracking-wide">{title}</h1>
        <p class="w-full text-xs">{description}</p>
      </A>
    </section>
  )
}

export default SideProjectCard