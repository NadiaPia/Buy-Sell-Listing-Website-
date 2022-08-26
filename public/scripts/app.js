$(document).ready(() => {
  $(".filter").on("mouseover", filterShow)
  $(".filter").on("mouseleave", filterHide)
  $(".ai-card__favorite").on("click", favoriteClicked)

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

const favoriteClicked = function() {
  const userId = req.cookies["user_id"]
  const isFavorite = $(this).children('i').css("color") === 'rgb(255, 0, 0)';
  const productId = $(this).attr("id").split("heart-").pop();
  const data = { users_id: userId, products_id: productId };

  const addFavorite = function(heartIcon) {

    $.ajax("/acclaim/favorites", { method: "POST", data })
      .then((res) => {
        heartIcon.children('i').css({
          color: 'red'
        })
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





