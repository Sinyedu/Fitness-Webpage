document.addEventListener("DOMContentLoaded", function() {
    var controller = new ScrollMagic.Controller();
  
    // Add ScrollMagic scenes for each trainer element
    document.querySelectorAll('.trainer-info').forEach(function(trainer) {
      var scene = new ScrollMagic.Scene({
        triggerElement: trainer,
        triggerHook: 0.8 // Adjust as needed
      })
      .setClassToggle(trainer, 'fade-in')
      .addTo(controller);
    });
  });
  