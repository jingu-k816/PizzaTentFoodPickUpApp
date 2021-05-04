const createMenuItem = function(foodObj) {
  const image = foodObj.photo_url
  const name = foodObj.name
  const price = foodObj.price
  const ing = foodObj.ingredients
  const menuItem = $(`<article class = "menu-container">
  <div class = "item-text">
  <div class = "item-name">${name}</div>
  <div class = "price">$${price}</div>
  <div class = "Ingredients">Ingredients: ${ing}
  </div>
  <img class = "item-img" src = "${image}"/>
        </div>
    </article>`)

    return menuItem
}


const renderMenuItems = function(items) {
  for (let item of items) {
    if (item.category === 'standard pizza'){
    $('#all-std-items').prepend(createMenuItem(item))
    }
    if (item.category === 'signature pizza'){
    $('#all-sig-items').prepend(createMenuItem(item))
    }
    if (item.category === 'sides'){
    $('#all-side-items').prepend(createMenuItem(item))
    }
    if (item.category === 'drink'){
    $('#all-drink-items').prepend(createMenuItem(item))
    }
    if (item.category === 'dessert'){
    $('#all-dessert-items').prepend(createMenuItem(item))
    }
}
}


$(document).ready(function() {
  $.get("/foods", function(foods){
    renderMenuItems(foods)
  })

  $("#search_form").click(function(){
    const query = document.getElementById('search').value;
    window.find(query);
    return true;
})
  const target = $('.toc')
  target.after('<div class="affix" id="affix"></div>')

  const affix = $('.affix')
  affix.append(target.clone(true))

  // Show affix on scroll.
  const element = document.getElementById('affix')
  if (element !== null) {
    const position = target.position()
    window.addEventListener('scroll', function () {
      const height = $(window).scrollTop()
      if (height > position.top - 120) {
        target.css('visibility', 'hidden')
        affix.css('display', 'block')
      } else {
        affix.css('display', 'none')
        target.css('visibility', 'visible')
      }
    })
  }
})
