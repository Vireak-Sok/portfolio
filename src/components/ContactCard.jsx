import { Icon } from "@iconify-icon/solid"

function ContactCard({icon, content, type, url}) {
  return (
    <a href={`${url}`} rel='noreferrer' target='_blank'>
      <section class="flex flex-col justify-between items-center border border-solid border-slate-400 group dark:hover:border-slate-100 hover:border-slate-800 hover:cursor-fancy gap-4 py-16 transition-all ease-in-out">
        <div class="flex justify-center items-center w-10 h-10 border border-solid border-slate-400 group-hover:border-slate-800 dark:group-hover:border-slate-100 transition-all ease-in-out">
          <Icon icon={icon} class="text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-100"/>
        </div>
        <h1 class="text-xl font-bold group-hover:tracking-wide truncate w-full text-center overflow-hidden transition-all ease-in-out">{content}</h1>
        <p class="text-slate-400 text-sm capitalize">{type}</p>
      </section>
    </a>
  )
}

export default ContactCard