function OutlineButton({label, url, hover, icon, dowload, download_url}) {

  function downloadFunc(){
    var anchor=document.createElement('a');
    anchor.setAttribute('href', download_url);
    anchor.setAttribute('download', '');
    document.body.appendChild(anchor);
    anchor.click();
    anchor.parentNode.removeChild(anchor);
  }

  function redirectFunc(){
    window.open({url}, "_blank");
  }
  
  return (
    <button onclick={dowload ? () => downloadFunc() : () => redirectFunc()} class={`w-max flex items-center justify-center gap-2 pb-2 text-base text-slate-400 capitalize border-b border-slate-400 font-medium hover:cursor-pointer ${hover} transition-all ease-in-out`} href={url} target="_blank">
      {label} {icon}
    </button>
  )
}

export default OutlineButton