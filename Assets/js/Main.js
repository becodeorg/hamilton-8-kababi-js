document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".first_section_img .img-wrapper ");
  
    images.forEach(function(image) {
      image.addEventListener("click", function() {
        // Retirer la classe "selected" de toutes les autres images
        images.forEach(function(otherImage) {
          if (otherImage !== image) {
            otherImage.classList.remove("selected");
          }
        });
  
        // Ajouter ou retirer la classe "selected" à l'image actuelle
        image.classList.toggle("selected");
      });
    });
  });
  