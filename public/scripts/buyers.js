const filterCliked = () => {  
    //$(".slideText").css({display: "flex"})
    $(".slideText").slideDown({
      start: function() {
        const isVisible = $(this).css("display") === "flex"
        $(this).css({
          display: isVisible ? "none" : "flex",
        });
      },
    });
  
  console.log("zlcjlcvkjhfl'kb;lcv';lb;lkcv")
}

$(document).ready(() => {
  $(".filter").on("mouseover", filterCliked )
});

