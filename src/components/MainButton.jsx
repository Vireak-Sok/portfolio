import { useLocation } from "@solidjs/router";
import { Icon } from "@iconify-icon/solid"

function MainButton({label, icon, file_source}) {
  const location = useLocation();
  function downloadFunc(){
    var anchor=document.createElement('a');
    anchor.setAttribute('href', file_source);
    anchor.setAttribute('download', '');
    document.body.appendChild(anchor);
    anchor.click();
    anchor.parentNode.removeChild(anchor);
  }

  function goBackFunc(){
    history.back()
  }

  function goHomeFunc(){
    window.location = "/"
  }

  return (
    <button class='flex items-center justify-center gap-2 px-2 sm:px-4 py-2 border border-solid border-slate-900 dark:border-slate-200 text-slate-900 hover:text-slate-200 dark:text-slate-200 dark:hover:text-slate-800 font-semibold transition-all duration-500 ease-in-out delay-100 hover:bg-slate-800 dark:hover:bg-slate-200 hover:font-light' onclick={location.pathname == '/' ? () => downloadFunc() : (location.pathname=="/work" || location.pathname=="/contact" || location.pathname=="/about") ? () => goHomeFunc() : () => goBackFunc()}>
      <Icon icon={icon}/>
      <p class="sm:flex hidden">{label}</p>
    </button>
  )
}

export default MainButton