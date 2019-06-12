$(document).ready(function(){    
     $('input:file').on('change',function(){
        var read = new FileReader();
            read.onload = getImg;
            read.readAsDataURL=$(this).forms[0];
    }); 
   function getImg(e){
    $('.base').css({'margin-left':'400px','height ':'600px','width':'600px','background-image':'url('+e.target.result+')','background-repeat':'no-repeat','background-size':'cover'});
   } 
   setGrid(3);          
});
           
var setGrid = function(gridSize=4) {
        for(let i=0;i<gridSize;i++){
             $('.base').append("<tr></tr>")  
            }
            $('tr').each(function(){
                for(let j=0;j<gridSize;j++){
                    $(this).append('<td class="col-sm-4"></td>')
                }
            }); 

        }
























//   for (var i = 0; i < gridSize * gridSize; i++) {
//     var xpx = (percentage * (i % gridSize)) + '%';
//     var ypx = (percentage * Math.floor(i / gridSize)) + '%';
//     var td = $('<td class="col-sm-4"></td>').css({
//         'background-image': 'url(images/london-bridge.jpg)',
//         'background-size': (gridSize * 100) + '%',
//         'background-position': xpx + ' ' + ypx,
//         'width': 500 / gridSize,
//         'height': 500 / gridSize
//     });




//   $.fn.randomize = function (selector) {
//     var $elems = selector ? $(this).find(selector) : $(this).children(),
//         $parents = $elems.parent();
//     $parents.each(function () {
//         $(this).children(selector).sort(function () {
//             return Math.round(Math.random()) - 0.5;
//         }).remove().appendTo(this);
//     });
//     return this;
// };