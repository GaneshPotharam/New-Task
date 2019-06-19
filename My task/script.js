
(function(){ 
  let imageSize = [500 ,500]; 
  function readImg(input){
      if(input.files[0]){
      let read = new FileReader();
          read.onload = function(e){
                $('.base .pieces').css({'background-image':'url('+e.target.result+')'});
                }
          read.readAsDataURL(input.files[0]); 
      }
    }
    $("input:file").on("change", function() {
          readImg(this);           
          let gridSize = $(".selection option:selected").val();
          console.log("gridSize", gridSize);
          setGrid(gridSize,imageSize);
    }); 
        
    function setGrid(gridSize = 4, img) {
          let percentage = 100 / (gridSize - 1);
          for (let i = 0; i < (gridSize * gridSize - 1); i++) {
          console.log(percentage);
          let xpos = (percentage * (i % gridSize)) + '%';
          let ypos = (percentage * Math.floor(i / gridSize)) + '%';
          let div = $('<div class="pieces"></div>').css({
                      'background-size': (gridSize * 100) + '%' ,
                      'background-position': xpos + ' ' + ypos,
                      'width': img[0] / gridSize,
                      'height': img[1] / gridSize
                  });
                  $('.base').append(div);
                   if(i == gridSize * gridSize){
                     let blank = Math.floor((Math.random() * gridSize * gridSize) + 1);
                     let dv = $('<div class="pieces"></div>').html('').css({'background-image':''+blank+''})
                     $('.base').append(dv);
                    } 
                  }
                  $('.base').randomize();                   
           };
}());
$(document).ready(function(){
  $('jumbotron').css({
    'width' :'100%'
  })
});

$.fn.randomize = function (selector) {
  let $elems = selector ? $(this).find(selector) : $(this).children(),
      $parents = $elems.parent();
  $parents.each(function () {
      $(this).children(selector).sort(function () {
          return Math.round(Math.random()) - 0.5;
      }).remove().appendTo(this);
  });
  return this;
};
  
    
 

  
