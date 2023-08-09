import { A, useLocation } from "@solidjs/router"
import ThemeToggler from "./ThemeToggler";
import { Icon } from "@iconify-icon/solid";
import { createSignal } from "solid-js";

function NavBar() {

  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = createSignal(false)

  function menuToggler(){
    document.querySelector('.mobile-menu').classList.toggle('hidden')
    setIsMenuOpen(!isMenuOpen())
  };

  return (
    <div class='w-full bg-slate-100 dark:bg-slate-800 sticky top-0 py-4 md:py-8 transition-color duration-500 ease-in-out delay-100 border-b border-opacity-20 dark:border-slate-100 border-slate-800 z-50 capitalize'>
      <nav class='w-full flex justify-between px-6 md:px-16'>
        <ul class="flex gap-4 items-center">
          <li class="flex items-center">
            <a class="hover:text-slate-400 hover:cursor-pointer flex items-center"  onclick="history.back()"><Icon icon={"majesticons:arrow-left-line"}/></a>
          </li>
          <li class="flex items-center">
            <A class="hover:text-slate-400 hover:cursor-pointer flex items-center"  href="/"><Icon icon={"mingcute:home-3-line"}/></A>
          </li>
          <div class="flex justify-center items-center overflow-hidden h-8 w-8 relative">
            <ThemeToggler translateProp={"translate-y-0"} animationProp={"animate-none"} client:load/>
          </div>
        </ul>
        <ul class="hidden md:flex gap-4">
          <li>
            <A href='/work' class={
              location.pathname.includes('/work')
              ? "text-slate-800 dark:text-slate-100 font-semibold cursor-default"
              : "text-slate-400 hover:text-slate-800 dark:hover:text-slate-100"
              }
            >
              work  
            </A>
          </li>
          <li>
            <A href='/contact' class={
              location.pathname == '/contact'
              ? "text-slate-800 dark:text-slate-100 font-semibold cursor-default"
              : "text-slate-400 hover:text-slate-800 dark:hover:text-slate-100"
              }
            >
              contact
            </A>
          </li>
          <li>
            <A href='/about' class={
              location.pathname == '/about'
              ? "text-slate-800 dark:text-slate-100 font-semibold cursor-default"
              : "text-slate-400 hover:text-slate-800 dark:hover:text-slate-100"
              }
            >
              about
            </A>
          </li>
        </ul>
        <button class='toggler md:hidden flex items-center' onclick={menuToggler}>
          {isMenuOpen() ? <Icon icon={"line-md:menu-to-close-alt-transition"}/> : <Icon icon={"line-md:close-to-menu-alt-transition"}/>}
        </button>
      </nav>
      <div class='mobile-menu hidden md:hidden absolute flex-col items-center justify-center text-3xl bg-slate-100 dark:bg-slate-800 w-full top-full h-screen z-50'>
        <ul class="flex gap-4 flex-col items-center justify-center h-full">
          <li>
            <A href='/work' class={
              location.pathname.includes('/work')
              ? "text-slate-800 dark:text-slate-100 font-semibold cursor-default"
              : "text-slate-400 hover:text-slate-800 dark:hover:text-slate-100"
              }
            >
              work  
            </A>
          </li>
          <li>
            <A href='/contact' class={
              location.pathname == '/contact'
              ? "text-slate-800 dark:text-slate-100 font-semibold cursor-default"
              : "text-slate-400 hover:text-slate-800 dark:hover:text-slate-100"
              }
            >
              contact
            </A>
          </li>
          <li>
            <A href='/about' class={
              location.pathname == '/about'
              ? "text-slate-800 dark:text-slate-100 font-semibold cursor-default"
              : "text-slate-400 hover:text-slate-800 dark:hover:text-slate-100"
              }
            >
              about
            </A>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
