/**
 * 
 */

$(document).ready(function(){
  $("li").click(function(event){
//     let id = this.id;
//     let div_content = ;
//     console.log(div_content);
    $("#"+this.id + "_content").slideToggle();
  });
  $('li').css('cursor', 'pointer');
  
  
  
  
    $(".macro_section").click(function(event){
        console.log("macro sezione");  
        $("#"+this.id + "_contents").slideToggle();
    });
});

