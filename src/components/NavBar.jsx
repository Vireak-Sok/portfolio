import { A, useLocation } from "@solidjs/router"
import ThemeToggler from "./ThemeToggler";
import logo from  "../assets/favicon.png";
import MainButton from "./MainButton";

function NavBar() {
  const location = useLocation();
  return (
    <nav class='w-full flex justify-between items-center sticky top-0 z-50 bg-slate-100/30 dark:bg-slate-800/30 transition-all duration-500 ease-in-out delay-100 backdrop-blur-md'>
      <ul class='flex-1 flex w-full justify-between items-center px-4 sm:px-8 md:px-16 lg:px-32 py-4 relative'>
        <li>
          <MainButton label={location.pathname == '/' ? "Resume" : (location.pathname=="/work" || location.pathname=="/contact" || location.pathname=="/about") ? "Home" : "Back"} icon={location.pathname == '/' ? "solar:file-download-outline"  : (location.pathname=="/work" || location.pathname=="/contact" || location.pathname=="/about") ? "bx:home" : "material-symbols:arrow-back-rounded"} file_source={"https://raw.githubusercontent.com/Vireak-Sok/portfolio/main/src/assets/resume-vireak-sok.pdf"}/>
        </li>
        <li  class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <A href='/'>
            <img src={logo} alt="logo"/>
          </A>
        </li>
        <li>
          <ThemeToggler/>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar