import { html } from "../../node_modules/lit-html/lit-html.js"
import { dataService } from "../dataService.js"


const dashBoardTemp = (data) => html `
<h2>Current Events</h2>
${data.length > 0 ? 
html `<section id="dashboard">
  ${data.map(item => eventCard(item))}
  </section>` : 
  html `<h2>No events yet.</h2>`
}`

 

 const eventCard = (item) => html `<div class="event">
 <img src=${item.imageUrl} alt="example1" />
 <p class="title">
   ${item.name}
 </p>
 <p class="date">${item.date}</p>
 <a class="details-btn" href="/details/${item._id}">Details</a>
</div>`

export async function showDashboard(ctx) {
    const data = await dataService.getAllEvents();
    ctx.render(dashBoardTemp(data));
}