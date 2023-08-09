import NavBar from "../components/NavBar"
import ContactCard from "../components/ContactCard"
import data from "../assets/db.json"
import { For, Show, onMount } from "solid-js"

function Contact() {
  const contacts = data.contacts

  onMount(() => {
    document.title = 'Vireak Sok - Contact'
  });

  return (
    <Show when={contacts} fallback={<p>Loading ...</p>}>
      <main>
        <NavBar/>
        <section class="page-section">
          <h1 class="page-title">Contact</h1>
          <p class="page-description">Get in touch with me for our future potential collaboration.</p>
          <div class="container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 md:mt-16 ">
            <For each={contacts}>
              {(contact) => (
                <ContactCard icon={contact.icon} content={contact.content} type={contact.type} url={contact.url}/>
              )}
            </For>
          </div>
        </section>
      </main>
    </Show>
  )
}

export default Contact