import ThemeToggler from "../components/ThemeToggler"
import { A } from "@solidjs/router"
import data from "../assets/db.json"
import InfoButton from "../components/InfoButton"
import { onMount } from "solid-js"

function Home() {

  onMount(() => {
    document.title = 'Vireak Sok'
  });

  return (
    <main class="flex min-h-screen flex-col items-center justify-between pt-64 m-0 pb-32 transition-color duration-500 ease-in-out delay-100 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100">
      <InfoButton/>
      <nav class="flex justify-center items-center w-full overflow-hidden h-6 relative text-slate-400">
        <ul class="flex justify-center gap-4 translate-y-6 animate-load-in">
          <li>
            <A href='/worksdfsd' class="hover:text-slate-800 dark:hover:text-slate-100 transition-colors">Work</A>
          </li>
          <li>
            <A href='/contact' class="hover:text-slate-800 dark:hover:text-slate-100 transition-colors">Contact</A>
          </li>
          <li>
            <A href='/about' class="hover:text-slate-800 dark:hover:text-slate-100 transition-colors">About</A>
          </li>
        </ul>
      </nav>
      <section class="w-full flex flex-col items-center justify-center gap-4">
        <div class="w-2/3 relative overflow-hidden animate-reveal-sm md:animate-reveal-md dark:md:animate-reveal-md-dark">
            <h1 class="p-0 pb-2 md:pb-4 h-10 md:h-24 m-0 text-2xl sm:text-4xl md:text-7xl text-center font-semibold tracking-widest uppercase font-hero-font">{data.info.name}</h1>
        </div>
        <div class="flex justify-center items-center w-full overflow-hidden h-6 relative text-slate-400">
          <h1 class="flex justify-center gap-4 -translate-y-6 animate-reverse-load-in text-custom-grey">
            <span>
              {data.info.title} at 
              <a href="https://en.kirirom-digital.com" target="_blank" class="group hover:cursor-alias hover:dark:text-slate-100 hover:text-slate-800 hover:transition-all duration-75 ease-in-out font-semibold">
                Kirirom Digital
                <span class="absolute -right-[2px] bottom-0 w-[107px] h-[1px] dark:bg-slate-500 bg-slate-300 group-hover:h-1/2 group-hover:transition-all -z-10 "></span>
              </a>
            </span>
          </h1>
        </div>
      </section>
	    <div class="flex justify-center items-center w-full overflow-hidden h-9 relative">
        <ThemeToggler translateProp={"translate-y-9"} animationProp={"animate-load-in"} client:load/>
      </div>
    </main>
  )
}

export default Home