import { html } from "../../node_modules/lit-html/lit-html.js"
import { dataService } from "../dataService.js"
import { userHelper } from "../userHelper.js"
 
 
const detailsTemp = (item, isOwner) => html `<section id="details">
<div id="details-wrapper">
  <img id="details-img" src=${item.imageUrl} alt="example1" />
  <p id="details-title">${item.name}</p>
  <p id="details-category">
    Category: <span id="categories">${item.category}</span>
  </p>
  <p id="details-date">
    Date:<span id="date">${item.date}</span></p>
  <div id="info-wrapper">
    <div id="details-description">
      <span
        >${item.description}</span>
    </div>
 
  </div>
 
  <h3>Going: <span id="go">0</span> times.</h3>
 
  <!--Edit and Delete are only for creator-->
  ${isOwner ? 
    html `<div id="action-buttons">
  <a href="/edit/${item._id}" id="edit-btn">Edit</a>
  <a @click=${delEvent} href="javascript:void(0)" id="delete-btn">Delete</a>
</div>` : "" 
    }
 
  </div>
</div>
</section>`

let context = null
export async function showDetails(ctx) {
  debugger
    context = ctx
    const id = ctx.params.id
    const data = await dataService.getSingleEvent(id)
    const isOwner = userHelper.getUserID() === data._ownerId
    ctx.render(detailsTemp(data, isOwner))
 
}
 
 
async function delEvent(e){
    const id = context.params.id
    await dataService.delEvent(id)
    context.goTo("/dashboard")
}