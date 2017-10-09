// 
//        $(function(){   
//          
//          var nav = $('header');  
//          var salva = $('.salva');
//		  var superbg = $('.sumiu');
//          $(window).scroll(function () { 
//            if ($(this).scrollTop() > 900) {
//              nav.addClass("active"); 
//              salva.addClass("salvaa");
//			  superbg.addClass("super");
//              superbg.removeClass("sumiu")
//            } else {  
//              salva.removeClass("salvaa"); 
//              nav.removeClass("active"); 
//              superbg.removeClass("super"); 
//              superbg.addClass("sumiu"); 
//              
//            } 
//          });  
//          
//        });

 
        $(function(){   
          
          var nav = $('header');  
          var salva = $('.salva');
          var superbg = $('.super');
					var superbg = $('.sumiu');
 
          $(window).scroll(function () { 
            if ($(this).scrollTop() > 300) {
              nav.addClass("active"); 
              salva.addClass("salvaa"); 
              superbg.addClass("super");
							superbg.removeClass("sumiu")

            } else {  
              salva.removeClass("salvaa"); 
              nav.removeClass("active"); 
              superbg.removeClass("super");
							superbg.addClass("sumiu"); 
            } 
          });  
          
        });