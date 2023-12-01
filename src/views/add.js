import { html } from "../../node_modules/lit-html/lit-html.js"
import { dataService } from "../dataService.js"

const addTemp = () => html `<section id="create">
<div class="form">
  <h2>Add Event</h2>
  <form @submit=${submitHandler} class="create-form">
    <input
      type="text"
      name="name"
      id="name"
      placeholder="Event"
    />
    <input
      type="text"
      name="imageUrl"
      id="event-image"
      placeholder="Event Image URL"
    />
    <input
      type="text"
      name="category"
      id="event-category"
      placeholder="Category"
    />


    <textarea
      id="event-description"
      name="description"
      placeholder="Description"
      rows="5"
      cols="50"
    ></textarea>
    
    <input
    type="text"
    name="date"
    id="date"
    placeholder="When?"
  />

    <button type="submit">Add</button>
  </form>
</div>
</section>`

let context = null
export function showAdd(ctx) {
     context = ctx
     ctx.render(addTemp())
}

async function submitHandler(e){
     e.preventDefault()
     const formData = new FormData(e.target)
     const {name, imageUrl, category, description, date} = Object.fromEntries(formData)

     if(!name || !imageUrl || !category || !description || !date) {
          return window.alert('Error')
     }

     await dataService.createEvent({name, imageUrl, category, description, date})
     context.goTo("/dashboard")
}