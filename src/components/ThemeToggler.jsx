import { Icon } from "@iconify-icon/solid";
import { createSignal, onMount } from "solid-js";

function ThemeToggler({translateProp, animationProp}) {
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
    <div class="flex justify-center items-center w-full overflow-hidden h-9 relative">
      <button 
        class={`h-8 w-8 bg-slate-300 dark:bg-slate-600 flex items-center justify-center ${translateProp} ${animationProp}`} aria-label="Toggle Dark Mode"
        onclick={() => {handleClick()}}
      >
        {theme() === "dark" ? <Icon icon={"line-md:sunny-outline-to-moon-alt-loop-transition"}/> : <Icon icon={"line-md:moon-alt-to-sunny-outline-loop-transition"}/>}
      </button>
    </div>
  )
}

export default ThemeToggler