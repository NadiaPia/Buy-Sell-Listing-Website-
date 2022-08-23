
//functionality on click event---------------------------------------------------------------
/*
const filterShow = (event) => {  
    
     $(".slideFilter").slideDown({
       start: function() {
         const isVisible = $(this).css("display") === "flex"
         $(this).css({
           display: isVisible ? "none" : "flex",
        });
       },
     });

     $(document).ready(() => {
      $(".filter").on("click", filterShow);
      $(".slideFilter").on("click", (event) => {
        event.stopPropagation();    
      })
    
    }); 

}*/

//functionality on nav event---------------------------------------------------------------


const filterShow = (event) => {  
  
  $(".slideFilter").slideDown({
    start: function() {
      $(this).css({
        display: "flex",
      });
    },
  });

//console.log("I am working");
}


const filterHide = () => {
  $(".slideFilter").css({display: 'none'})
};

const favoriteClicked = function() {
  const data = {users_id: 1, products_id: 6};
  const isFavorite = $(this).children('i').css("color") === 'rgb(255, 0, 0)';
  
  const addFavorite = function(heartIcon) {
    //console.log(heartIcon)
    $.ajax("/buyers/favorites", { method: "POST", data})
      .then((res) => {
        //console.log("resnse res",res); //console.log:  [{products_id: 6, users_id: 1}]        
        //console.log('coloring',$(this).children('svg').css("fill")); //console.log: rgb(128, 128, 128)
          heartIcon.children('i').css({
          color: 'red'
          })
      });
  }

  const deleteFavorite = function(heartIcon) {
    $.ajax("/buyers/favorites", { method: "DELETE", data})
      .then((res) => {
        //console.log("response res",res); //console.log:  [{products_id: 6, users_id: 1}]        
        //console.log('coloring',$(this).children('svg').css("fill")); //console.log: rgb(128, 128, 128)
          heartIcon.children('i').css({
          color: 'grey'
          })
      });
  }
  if (isFavorite) {
    deleteFavorite($(this))
  } else {
    addFavorite($(this))
  }

}

$(document).ready(() => {
  $(".filter").on("mouseover", filterShow )
  $(".filter").on("mouseleave", filterHide )
  $(".ai-card__favorite").on("click", favoriteClicked )

});






