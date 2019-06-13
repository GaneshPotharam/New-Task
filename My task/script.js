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
    






















