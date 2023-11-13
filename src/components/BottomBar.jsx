import { A, useLocation } from "@solidjs/router"

function BottomBar() {
  const location = useLocation();
  return (
    <div class="flex justify-center w-full fixed bottom-4">
      <ul class="w-[280px] flex justify-between gap-4 py-4 px-8 mx-4 sm:mx-0 border border-solid border-slate-400 bg-slate-100/30 dark:bg-slate-800/30 transition-all duration-500 ease-in-out delay-100 backdrop-blur-sm">
        <li>
          <A href='/work' class={ 
            location.pathname.includes('/work')
            ? "text-slate-800 dark:text-slate-100 font-semibold cursor-default transition-all duration-500 ease-in-out delay-100"
            : "text-slate-400 hover:text-slate-800 dark:hover:text-slate-100 transition-all duration-500 ease-in-out delay-100"
            }
          >
            work  
          </A>
        </li>
        <li> 
          <A href='/contact' class={
            location.pathname == '/contact'
            ? "text-slate-800 dark:text-slate-100 font-semibold cursor-default transition-all duration-500 ease-in-out delay-100"
            : "text-slate-400 hover:text-slate-800 dark:hover:text-slate-100 transition-all duration-500 ease-in-out delay-100"
            }
          >
            contact
          </A>
        </li>
        <li>
          <A href='/about' class={
            location.pathname == '/about'
            ? "text-slate-800 dark:text-slate-100 font-semibold cursor-default transition-all duration-500 ease-in-out delay-100"
            : "text-slate-400 hover:text-slate-800 dark:hover:text-slate-100 transition-all duration-500 ease-in-out delay-100"
            }
          >
            about
          </A>
        </li>
      </ul>
    </div>
  )
}

export default BottomBar