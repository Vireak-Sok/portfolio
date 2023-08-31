import { onMount } from "solid-js"
import OutlineButton from "../components/OutlineButton"
import { A } from "@solidjs/router"

function NotFound() {
  onMount(() => {
      sessionStorage.setItem("theme", (sessionStorage.getItem("theme") === null) ? "dark" : sessionStorage.getItem("theme"))
    if(sessionStorage.getItem("theme") === null || sessionStorage.getItem("theme") === "dark"){
      document.documentElement.classList.add("dark")
    }else{
      document.documentElement.classList.add("light")
    }
    }   
  )
  return (
    <main class="justify-center">
    <lottie-player src="https://lottie.host/e9c7ad1b-41c1-4d9d-9ef2-6ec45b376587/r9ejSzEpuC.json" class=" w-full md:w-2/3 lg:w-1/2 -mb-8 md:-mb-6 lg:-mb-12" background="transparent" speed="1" loop autoplay></lottie-player>
    <h1 class="font-hero-font font-semibold text-2xl sm:text-4xl md:text-5xl pb-6">This page could not be found!</h1>
    <A href={"/"}>
      <OutlineButton label={"Go back home"} hover={"hover:text-slate-800 dark:hover:text-slate-100 hover:tracking-wide"}/>
    </A>
    </main>
  )
}

export default NotFound