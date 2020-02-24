$(document).ready(function(){
  $("#search").focus(function(){
      $(this).css("box-shadow", "0px 0px 3px #dd1f26");
      $(this).css('border', '2px solid #dd1f26');
  });
  $("#search").blur(function(){
      $(this).css( "box-shadow", "0px 0px 0px #dd1f26");
      $(this).css("border", " 2px solid #3d3d3d");
  });               
  
                                
  $('#menu_open_mobile').width(0);                                 
  $('.linha_menu').css("display", "none");                              
  $('.icon_mobile').click(function () {                         
      $("#menu_open_mobile").css("height", "96%");
      $(".linha_menu").css("width", "100%");
      $('#menu_open_mobile').show().animate({
          "width": "96%",                        
      }, 500);
      $(".linha_menu").fadeIn(800);
  });                                                
  $('.close').click(function () {                      
      $('#menu_open_mobile').show().animate({
          "width": "0%",                        
      }, 500);
      $(".linha_menu").fadeOut(400);   
      setTimeout(function(){                         
          $("#menu_open_mobile").css("height", "0%");
          $(".linha_menu").css("width", "0%");
      }, 501);                                                                                                                                                                               
  });                                                


  $(".lupa_mobile").click(function(){
      $(".menu_mobile_init").css("display", "none");
      $(".menu_search_all").css("display", "block");
  })
  $(".close_search").click(function(){
      $(".menu_mobile_init").css("display", "flex");
      $(".menu_search_all").css("display", "none");
  })


  $(".pc").mouseover(function(){                    
      $(".prod").css("padding-top", "22px");
      $(".pc").css("border-bottom", "2px solid #dd1f26");
      $(".prod_item").css("display", "block");
      $(".banner").css("margin-top", "-300px");
      $(".seta").css("display", "none");                    
      $(".change").css("margin-top", "120px");
  });
  $(".pc").mouseout(function(){
      $(".prod").css("padding-top", "20px");
      $(".pc").css("border-bottom", "0px");
      $(".prod_item").css("display", "none");
      $(".banner").css("margin-top", "-100px");
      $(".seta").css("display", "flex");                  
      $(".change").css("margin-top", "0px");                
  });

  $(".acessorios").mouseover(function(){                    
      $(".prod").css("padding-top", "22px");
      $(".acessorios").css("border-bottom", "2px solid #dd1f26");
      $(".prod_item").css("display", "block");
      $(".banner").css("margin-top", "-300px");
      $(".seta").css("display", "none");
      $(".change").css("margin-top", "120px");
  });
  $(".acessorios").mouseout(function(){
      $(".prod").css("padding-top", "20px");
      $(".acessorios").css("border-bottom", "0px");
      $(".prod_item").css("display", "none");
      $(".banner").css("margin-top", "-100px");
      $(".seta").css("display", "flex");                  
      $(".change").css("margin-top", "0px");                
  });

  $(".hardware").mouseover(function(){                    
      $(".prod").css("padding-top", "22px");
      $(".hardware").css("border-bottom", "2px solid #dd1f26");
      $(".prod_item").css("display", "block");
      $(".banner").css("margin-top", "-300px");
      $(".seta").css("display", "none");
      $(".change").css("margin-top", "120px");
  });
  $(".hardware").mouseout(function(){
      $(".prod").css("padding-top", "20px");
      $(".hardware").css("border-bottom", "0px");
      $(".prod_item").css("display", "none");
      $(".banner").css("margin-top", "-100px");
      $(".seta").css("display", "flex");                  
      $(".change").css("margin-top", "0px");                
  });

  $(".perif").mouseover(function(){                    
      $(".prod").css("padding-top", "22px");
      $(".perif").css("border-bottom", "2px solid #dd1f26");
      $(".prod_item").css("display", "block");
      $(".banner").css("margin-top", "-300px");
      $(".seta").css("display", "none");
      $(".change").css("margin-top", "120px");
  });
  $(".perif").mouseout(function(){
      $(".prod").css("padding-top", "20px");
      $(".perif").css("border-bottom", "0px");
      $(".prod_item").css("display", "none");
      $(".banner").css("margin-top", "-100px");
      $(".seta").css("display", "flex");                  
      $(".change").css("margin-top", "0px");                
  });

  $(".escritorio").mouseover(function(){                    
      $(".prod").css("padding-top", "22px");
      $(".escritorio").css("border-bottom", "2px solid #dd1f26");
      $(".prod_item").css("display", "block");
      $(".banner").css("margin-top", "-300px");
      $(".seta").css("display", "none");
      $(".change").css("margin-top", "120px");
  });
  $(".escritorio").mouseout(function(){
      $(".prod").css("padding-top", "20px");
      $(".escritorio").css("border-bottom", "0px");
      $(".prod_item").css("display", "none");
      $(".banner").css("margin-top", "-100px");
      $(".seta").css("display", "flex");                    
      $(".change").css("margin-top", "0px");              
  });

  $(".shop").mouseover(function(){                    
      $(".prod").css("padding-top", "22px");
      $(".shop").css("border-bottom", "2px solid #dd1f26");                    
  });
  $(".shop").mouseout(function(){
      $(".prod").css("padding-top", "20px");
      $(".shop").css("border-bottom", "0px");                              
  });            

  $(".seta_right").click(function(){
      showSlides(0);
  });
  $(".seta_left").click(function(){
      slideIndex = slideIndex - 2;
      if(slideIndex < 0){
          slideIndex = 5;
      }
      showSlides(0);
  });
  $(".first").click(function(){
      slideIndex = 0;
      showSlides();
  })
  $(".second").click(function(){
      slideIndex = 1;
      showSlides();
  })
  $(".third").click(function(){
      slideIndex = 2;
      showSlides();
  })
  $(".fourth").click(function(){
      slideIndex = 3;
      showSlides();
  })
  $(".fifth").click(function(){
      slideIndex = 4;
      showSlides();
  })
  $(".sixth").click(function(){
      slideIndex = 5;
      showSlides();
  })

  var slideIndex = 0;
  var inicio_slide = 0;
  showSlides(x);
  inicio_slide = setInterval(showSlides, 15000);      
  var x = 0;
  function showSlides(x) {                                                                    
      var i;
      var slides = document.getElementsByClassName("banner");
      var button = document.getElementsByClassName("change_button");                

      for(i = 0; i < slides.length; i++) {                        
          slides[i].style.display = "none";  
      }                    
      slideIndex++;

      if(slideIndex > slides.length) {
          slideIndex = 1;
      }      
      
      for(i = 0; i < slides.length; i++){
          button[i].className = button[i].className.replace("button_on", "");
      }
      
      if(x == undefined){
          x = 0;
      }                               
      var num_slide = (slideIndex - 1) - x;
      console.log(slideIndex);
      console.log("x"+ x);
      console.log("slide"+num_slide);
      console.log("slide sem x"+(slideIndex - 1));
      slides[num_slide].style.display = "block";                     
      button[slideIndex-1].className += " button_on";                                                                           
  }                                

  $(".button_down").click(function(){                
      $(this).css("display", "none");
      $(".button_up").css("display", "flex");
      $(".links_show").animate({
          height: "608px",
      });            
      $(".links_hide a").css("display", "block");                          
  });                
  $(".button_up").click(function(){                
      $(this).css("display", "none");
      $(".button_down").css("display", "flex");
      $(".links_show").animate({
          height: "30px",
      });                
      setTimeout(function(){
          $('.links_hide a').css("display", "none");                                                                   
      }, 320);                                                     
  });
  $(".button_down2").click(function(){                
      $(this).css("display", "none");
      $(".button_up2").css("display", "flex");
      $(".links_show2").animate({
          height: "476px",
      });                                      
      $(".links_hide2 a").css("display", "block");                          
  });                
  $(".button_up2").click(function(){                
      $(this).css("display", "none");
      $(".button_down2").css("display", "flex");
      $(".links_show2").animate({
          height: "30px",
      });            
      setTimeout(function(){
          $('.links_hide2 a').css("display", "none");                                                                   
      }, 320);                 
  });                
  $(".button_down3").click(function(){                
      $(this).css("display", "none");
      $(".button_up3").css("display", "flex");
      $(".links_show3").animate({
          height: "520px",
      });           
      $(".links_hide3 a").css("display", "block");                                                     
  });                
  $(".button_up3").click(function(){                
      $(this).css("display", "none");
      $(".button_down3").css("display", "flex");
      $(".links_show3").animate({
          height: "30px",
      });            
      setTimeout(function(){
          $('.links_hide3 a').css("display", "none");                                                                   
      }, 320);                 
  });                
  $(".button_down4").click(function(){                
      $(this).css("display", "none");
      $(".button_up4").css("display", "flex");
      $(".links_show4").animate({
          height: "256px",
      });           
      $(".links_hide4 a").css("display", "block");                                                     
  });                
  $(".button_up4").click(function(){                
      $(this).css("display", "none");
      $(".button_down4").css("display", "flex");
      $(".links_show4").animate({
          height: "30px",
      });            
      setTimeout(function(){
          $('.links_hide4 a').css("display", "none");                                                                   
      }, 320);                                                                     
  });                
  $(".button_down5").click(function(){                
      $(this).css("display", "none");
      $(".button_up5").css("display", "flex");
      $(".links_show5").animate({
          height: "212px",
      });           
      $(".links_hide5 a").css("display", "block");                                                     
  });                
  $(".button_up5").click(function(){                
      $(this).css("display", "none");
      $(".button_down5").css("display", "flex");
      $(".links_show5").animate({
          height: "30px",
      });            
      setTimeout(function(){
          $('.links_hide5 a').css("display", "none");                                                                   
      }, 320);                 
  });                                
});