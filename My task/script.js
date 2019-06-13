$(document).ready(function(){
    $('.jumbotron').css({'height':'700px'})
    $("input:file").on('change', function () {
        var read = new FileReader();
        read.onload = function (e) {
            $(".base").css({
                "background-image": "url("+e.target.result+")",
                "background-size" : "cover"
            });
        }
        read.readAsDataURL($(this)[0].files[0]);
        setGrid(3);
    });
       // $('button').click(function(){  
       // })
});           
var setGrid = function(gridSize=4) {
    $('.base').css({'position':'absolute','height':'500px','width':'500px'}) 
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
