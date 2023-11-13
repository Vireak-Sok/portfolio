import { Icon } from "@iconify-icon/solid";
import { createSignal, onMount } from "solid-js";

function ThemeToggler() {
  const [theme, setTheme] = createSignal("")

  onMount(() => {
    sessionStorage.setItem("theme", (sessionStorage.getItem("theme") === null) ? "dark" : sessionStorage.getItem("theme"))
    if(sessionStorage.getItem("theme") === null || sessionStorage.getItem("theme") === "dark"){
      document.documentElement.classList.add("dark")
      setTheme("dark")
    }else{
      document.documentElement.classList.add("light")
      setTheme("light")
    }
  });

  function handleClick(){
    document.documentElement.classList.remove((theme() === "dark" ? "dark" : "light"))
    document.documentElement.classList.add((theme() === "dark" ? "light" : "dark"))
    sessionStorage.setItem("theme", (theme() === "dark" ? "light" : "dark"))
    setTheme(sessionStorage.getItem("theme"))
  }

  // Add event listener on keyup
  document.addEventListener('keyup', (event) => {
    var name = event.key;
    var code = event.code;

    if(code === "KeyD"){handleClick()}
    // Alert the key name and key code on keydown
    // alert(`Key pressed ${name} \r\n Key code value: ${code}`);
  }, false);

  return (
      <button 
        class='flex items-center justify-center gap-2 px-2 sm:px-4 py-2 border border-solid border-slate-900 dark:border-slate-200 text-slate-900 hover:text-slate-200 dark:text-slate-200 dark:hover:text-slate-800 font-semibold transition-all duration-500 ease-in-out delay-100 hover:bg-slate-800 dark:hover:bg-slate-200 hover:font-light'
        aria-label="Toggle Dark Mode"
        onclick={() => {handleClick()}}
      >
        <p class="sm:flex hidden">Theme</p>
        {theme() === "dark" ? <Icon icon={"line-md:sunny-outline-to-moon-alt-loop-transition"}/> : <Icon icon={"line-md:moon-alt-to-sunny-outline-loop-transition"}/>}
      </button>
  )
}

export default ThemeToggler