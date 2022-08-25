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
  const isFavorite = $(this).children('i').css("color") === 'rgb(255, 0, 0)';
  //console.log($(this).attr("id")) //heart-12
  console.log($(this).attr("id").split("heart-").pop()) //12
  const productId = $(this).attr("id").split("heart-").pop();
  const data = { users_id: 1, products_id: productId };

  const addFavorite = function(heartIcon) {
    //console.log(heartIcon)
    $.ajax("/buyers/favorites", { method: "POST", data })
      .then((res) => {
        //console.log("resnse res",res); //console.log:  [{products_id: 6, users_id: 1}]
        //console.log('coloring',$(this).children('svg').css("fill")); //console.log: rgb(128, 128, 128)
        heartIcon.children('i').css({
          color: 'red'
        })
      });
  }

  const deleteFavorite = function(heartIcon) {
    $.ajax("/buyers/favorites", { method: "DELETE", data })
      .then((res) => {
        //console.log("response res",res); //console.log:  [{products_id: 6, users_id: 1}]
        //console.log('coloring',$(this).children('svg').css("fill")); //console.log: rgb(128, 128, 128)
        heartIcon.children('i').css({
          color: 'grey'
        });
        $(`#favorite-card-${productId}`).css({ display: "none" })
      });
  }
  if (isFavorite) {
    deleteFavorite($(this))
  } else {
    addFavorite($(this))
  }

}







