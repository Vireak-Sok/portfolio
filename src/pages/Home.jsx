import data from "../assets/db.json"
import InfoButton from "../components/InfoButton"
import { onMount } from "solid-js"
import NavBar from "../components/NavBar"
import BottomBar from "../components/BottomBar"
import { Icon } from "@iconify-icon/solid"

function Home() {

  onMount(() => {
    document.title = 'Vireak Sok'
  });

  return (
      <main class="min-h-screen flex flex-col font-main-font pb-8 bg-slate-100 dark:bg-slate-800 transition-all duration-500 ease-in-out delay-100">
        <NavBar/>
        <section class="flex flex-1  drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
          <div class="flex-1 hidden sm:flex justify-center items-center text-slate-400">
            <div class="flex justify-center items-center flex-col gap-4">
              <div class="text-center">
                <h1 class="text-xl font-bold text-slate-900 dark:text-slate-200 transition-all duration-500 ease-in-out delay-100">10+ <br/> Done</h1>
                <p>Projects</p>
              </div>
              <div class="text-center">
                <h1 class="text-xl font-bold text-slate-900 dark:text-slate-200 transition-all duration-500 ease-in-out delay-100">2 <br/> Awards</h1>
                <p>start-up</p>
              </div>
              <div class="text-center">
                <h1 class="text-xl font-bold text-slate-900 dark:text-slate-200 transition-all duration-500 ease-in-out delay-100">2+ <br/> Years</h1>
                <p>Experience</p>
              </div>
              <div class="flex h-[168px] w-4 whitespace-nowrap justify-center items-center">
                <p class="-rotate-90">Available for discussion</p>
              </div>
              <div class="w-3 h-3 bg-lime-400 rounded-lg"/>
            </div>
          </div>
          <div class="flex-1 flex items-center justify-center flex-col text-slate-800 dark:text-slate-100 duration-500 ease-in-out delay-100">
            <section class="flex flex-col items-center gap-6">
              <h1 class='p-0 text-2xl sm:text-4xl md:text-7xl text-center font-semibold tracking-widest uppercase font-hero-font'>{data.info.name}</h1>
              <h1>{data.info.title} at 
                <a href="https://en.kirirom-digital.com" target="_blank" class="group hover:cursor-alias hover:dark:text-slate-100 hover:text-slate-800 hover:transition-all duration-75 ease-in-out font-semibold">
                  Kirirom Digital
                </a>
              </h1>
            </section>
          </div>
          <div class="flex-1 hidden sm:flex justify-center items-center text-slate-400">
            <div class="flex justify-center items-center flex-col gap-4">
              <a  href={data.contacts[0].url} rel='noreferrer' target='_blank' class="flex h-[200px] w-4 whitespace-nowrap justify-center items-center text-slate-400 hover:text-slate-800 dark:hover:text-slate-100">
                <p class="-rotate-90">sokvireak2000@gmail.com</p>
              </a>
              <a href={data.contacts[5].url} rel='noreferrer' target='_blank' class="flex justify-center items-center w-8 h-8 group border border-solid border-slate-400 hover:border-slate-800 dark:hover:border-slate-100 transition-all ease-in-out">
                <Icon icon={data.contacts[5].icon} class="text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-100"/>
              </a>
              <a href={data.contacts[4].url} rel='noreferrer' target='_blank' class="flex justify-center items-center w-8 h-8 group border border-solid border-slate-400 hover:border-slate-800 dark:hover:border-slate-100 transition-all ease-in-out">
                <Icon icon={data.contacts[4].icon} class="text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-100"/>
              </a>
              <a href={data.contacts[2].url} rel='noreferrer' target='_blank' class="flex justify-center items-center w-8 h-8 group border border-solid border-slate-400 hover:border-slate-800 dark:hover:border-slate-100 transition-all ease-in-out">
                <Icon icon={data.contacts[2].icon} class="text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-100"/>
              </a>
              <a href={data.contacts[3].url} rel='noreferrer' target='_blank' class="flex justify-center items-center w-8 h-8 group border border-solid border-slate-400 hover:border-slate-800 dark:hover:border-slate-100 transition-all ease-in-out">
                <Icon icon={data.contacts[3].icon} class="text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-100"/>
              </a>
            </div>
          </div>
        </section>    
        <BottomBar/>
        <InfoButton/>
      </main>
  )
}

export default Home