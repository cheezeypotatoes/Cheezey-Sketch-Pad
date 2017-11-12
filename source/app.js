$(document).ready(function() {

  //clears any existing grid before drawing a new one.
  $('.create').click(function() {
    $("#app-container").empty()
    let gridSize = $('.select-grid-size').val()

    //creates the flex containers according to gridSize value.
    for (let i = 1; i <= gridSize; i++) {
      $('#app-container').append('<div class="flex-container"></div>')
    }
    //creates the flex items inside each flex container according to gridSize.
    $('.flex-container').each(function() {
      for (let i2 = 1; i2 <= gridSize; i2++) {
        $(this).append('<div class="flex-item">X</div>')
      }
    })

    //Event handler uses isDrawing to determine if the app is drawing or not and executes events accordingly. isDrawing gets toggled accordingly.
    let isDrawing = false
    console.log(isDrawing);
    $('.flex-item').click(function() {
      let color = $('.select-color').val()

      if(isDrawing) {
        $('.flex-item').unbind('mouseover')
        isDrawing = !isDrawing
        console.log(isDrawing);

      } else {
        $('.flex-item').mouseover(function() {
          $(this).addClass(color)
        })
        isDrawing = !isDrawing
        console.log(isDrawing);
      }
    })
  })
})
