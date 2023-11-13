function InfoButton() {
  return (
    <div class="hidden sm:inline-block absolute bottom-8 right-8 transition-all">
        <span class="peer border-solid border-slate-800 dark:border-slate-100 text-slate-800 dark:text-slate-100 px-2 py-1 border hover:cursor-help duration-500 ease-in-out delay-100">?</span>
        <span class="peer-hover:opacity-100 transition-opacity h-full w-max flex justify-center items-center bg-slate-800 dark:bg-slate-100 text-slate-100 dark:text-slate-800 px-2 text-sm absolute top-0 right-[120%] opacity-0 hover:cursor-default">Press D to toggle theme!</span>
      </div>
  )
}

export default InfoButton