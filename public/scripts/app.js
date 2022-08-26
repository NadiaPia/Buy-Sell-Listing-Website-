<<<<<<< HEAD
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



=======

>>>>>>> master
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

<<<<<<< HEAD
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
=======
const favoriteClicked = function() {
  //const userId = req.cookies["user_id"]
  //console.log("user_id", req.cookies)
  const userId = Number(document.cookie.split("user_id=").pop());
  //console.log("userIDDDDDDDDDDDDDD", userId)
  const isFavorite = $(this).children('i').css("color") === 'rgb(255, 0, 0)';
  //console.log($(this))
  const productId = Number($(this).attr("id").split("heart-").pop());
  const data = { users_id: userId, products_id: productId };

  const addFavorite = function(heartIcon) {
    console.log('Add Favorite', data)
    $.ajax("/acclaim/favorites", { method: "POST", data })
      .then((res) => {
        heartIcon.children('i').css({
          color: 'red'
        })
        .catch(err => console.log('AJAX POST to acclaim/favorites FAIL: ', err))
      });
  }

  const deleteFavorite = function(heartIcon) {
    $.ajax("/acclaim/favorites", { method: "DELETE", data })
      .then((res) => {
        heartIcon.children('i').css({
          color: 'grey'
        });
        $(`#favorite-card-${productId}`).css({ display: "none" })
      });
  }
  if (isFavorite) {
    deleteFavorite($(this))
>>>>>>> master
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

$(document).ready(() => {
  $(".filter").on("mouseover", filterShow)
  $(".filter").on("mouseleave", filterHide)
  $(".ai-card__favorite").on("click", favoriteClicked)

});





