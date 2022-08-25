$(document).ready(() => {
  $(".filter").on("mouseover", filterShow)
  $(".filter").on("mouseleave", filterHide)

  const featuredHearts = document.querySelectorAll('.featured')
  featuredHearts.forEach((item) => {
    item.addEventListener('click', () => {
      const userId = Number(item.getAttribute('data-userId'))
      const featureId = Number(item.getAttribute('data-featureId'))
      favoriteClicked(userId, featureId, item);
    })
  })

  const allHearts = document.querySelectorAll('.allArt')
  allHearts.forEach((item) => {
    item.addEventListener('click', () => {
      const userId = Number(item.getAttribute('data-allUserId'))
      const featureId = Number(item.getAttribute('data-cardId'))
      favoriteClicked(userId, featureId, item);
    })
  })

  const favHearts = document.querySelectorAll('.favArt')
  favHearts.forEach((item) => {
    item.addEventListener('click', () => {
      const userId = Number(item.getAttribute('data-favUserId'))
      const featureId = Number(item.getAttribute('data-cardId'))
      favoriteClicked(userId, featureId, item);
    })
  })
});



// Client facing scripts here


//functionality on nav event---------------------------------

const filterShow = (event) => {
  $(".slideFilter").slideDown({
    start: function() {
      $(this).css({
        display: "grid",
      });
    },
  });
}

const filterHide = () => {
  $(".slideFilter").css({ display: 'none' })
};

// -------------------------------------------

const favoriteClicked = function(userId, featureId, item) {
  const data = { users_id: userId, products_id: featureId };
  if (item.classList.contains('favorited')) {
    console.log('.favorited');
    $.ajax({
      url: '/acclaim/favorites',
      method: 'DELETE',
      data: { users_id: userId, products_id: featureId },
      type: "application/json",
      success: function(res) {
        console.log(res);
        item.style.color = 'grey';
        item.classList.remove('favorited')
      }
    })
  } else {
    $.ajax({
      url: '/acclaim/favorites/click',
      method: 'POST',
      data: { users_id: userId, products_id: featureId },
      type: "application/json",
      success: function(res) {
        console.log(res);
        item.style.color = 'red';
        item.classList.add('favorited')
      }
    })
  }
}







