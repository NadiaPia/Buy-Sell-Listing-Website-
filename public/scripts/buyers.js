
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

console.log("I am working");
}


const filterHide = () => {
  $(".slideFilter").css({display: 'none'})
};

const favoriteClicked = function() {
  const data = {users_id: 1, products_id: 6};

  $.ajax("/favorites", { method: "POST", data})
    .then((res) => {
      console.log(res);
      const isFavorite = $(this).children('svg').css("fill") === 'rgb(255, 0, 0)';
          console.log($(this).children('svg').css("fill"));
          $(this).children('svg').css({
          fill: isFavorite ? 'grey' : 'red'
  })
    });

  
}



$(document).ready(() => {
  $(".filter").on("mouseover", filterShow )
  $(".filter").on("mouseleave", filterHide )
  $(".ai-card__favorite").on("click", favoriteClicked )

});






