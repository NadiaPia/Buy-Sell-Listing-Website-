
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

$(document).ready(() => {
  $(".filter").on("mouseover", filterShow )
  $(".filter").on("mouseleave", filterHide )
});




