$(document).ready(function() {
  let text = ''
  let redRGB = $('#red').val(text)
  let greenRGB = $('#green').val(text)
  let blueRGB = $('#blue').val(text)
  let colorLabel = $('#color-label')
  let savedColors = []


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

    //button to togggle grid lines on/off
    let isShowingGrid = false
    $('.toggle-grid-lines').click(function() {
      if(isShowingGrid) {

        $('.flex-item').removeClass('grid-lines')
        isShowingGrid = !isShowingGrid
        // console.log(isShowingGrid);
      } else {

        $('.flex-item').addClass('grid-lines')
        isShowingGrid = !isShowingGrid
        // console.log(isShowingGrid);
      }
    })
    //button to save a custom RGB color, a label must be entered or user is alerted
    $('.save-color').click(function() {
      if (colorLabel.val() === '') {
        alert("Please enter a label for your color")
        return
      }
      savedColors.push(redRGB.val() + ', ' + greenRGB.val() + ', ' + blueRGB.val() + " " + colorLabel.val())
      $('.saved-colors').append('<option class="custom-color" value="' + redRGB.val() + ', ' + greenRGB.val() + ', ' + blueRGB.val() +'">' + colorLabel.val() + '</option>')
      $('#color-label').val('')
    })
    //button to load a saved custom color.
    $('.load-saved-color').click(function() {
      array = []
      array.push($('.saved-colors').val())
      array = array.join().split(',')
      $('#red').val(array[0])
      $('#green').val(array[1])
      $('#blue').val(array[2])
      $('.select-color').val('custom')

    })



    //Event handler uses isDrawing to determine if the app is drawing or not and executes events accordingly. isDrawing gets toggled accordingly.
    let isDrawing = false
    console.log(isDrawing);
    $('.flex-item').click(function() {
      let color = $('.select-color').val()
      if($('.select-color').val() === 'custom') {
        let rgbColor = redRGB.val() + ', ' + greenRGB.val() + ', ' + blueRGB.val()
        $(this).css('background-color', 'rgb(' + rgbColor + ')')
        $(this).css('color', 'rgb(' + rgbColor + ')')
      }

      $(this).css('background-color',  color)
      $(this).css('color', color)

      if(isDrawing) {
        $('.flex-item').unbind('mouseover')
        isDrawing = !isDrawing
        console.log(isDrawing);

      } else {
        $('.flex-item').mouseover(function() {
          if($('.select-color').val() === 'custom') {
            let rgbColor = redRGB.val() + ', ' + greenRGB.val() + ', ' + blueRGB.val()
            $(this).css('background-color', 'rgb(' + rgbColor + ')')
            $(this).css('color', 'rgb(' + rgbColor + ')')
          }

          $(this).css('background-color',  color)
          $(this).css('color', color)
        })
        isDrawing = !isDrawing
        console.log(isDrawing);
      }
    })
  })
})
