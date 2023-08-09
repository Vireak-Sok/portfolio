function ResumeCard({duration, title, description, company}) {
  return (
    <section class="flex flex-col justify-between flex-1 border border-solid border-slate-400">
      <p class="pt-6 px-6 w-full text-slate-400">{duration}</p>
      <h1 class="pb-2 px-6 text-3xl font-bold tracking-wide">{title}</h1>
      <p class="w-full px-6 pb-2 text-lg">{company}</p>
      <p class="w-full px-6 pb-6 text-slate-400">{description}</p>
    </section>
  )
}

export default ResumeCard