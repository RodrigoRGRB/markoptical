$(function(){
	$("#effect1").hide();
	$("#effect2").hide();
	$("#effect3").hide();
	$("#effect4").hide();
	
	function runEffect(pokemon){
		var selectedEffect="blind";
		var options={};
		
		if(selectedEffect==="scale"){
			options={percent:50};
		}else if(selectedEffect==="size"){
			options={to:{width:200,height:60}};
		}
		
		if(pokemon==1){
			$("#effect2").hide(selectedEffect,options,250);
			$("#effect3").hide(selectedEffect,options,250);
			$("#effect4").hide(selectedEffect,options,250);
			$("#effect1").delay(250).toggle(selectedEffect,options,250);
      $('html, body').animate({scrollTop:2700},800);
		}else if(pokemon==2){
			
			$("#effect1").hide(selectedEffect,options,250);
			$("#effect3").hide(selectedEffect,options,250);
			$("#effect4").hide(selectedEffect,options,250);
			$("#effect2").delay(250).toggle(selectedEffect,options,250);
      $('html, body').animate({scrollTop:2700},800);
		}else if(pokemon==3){
			
			$("#effect2").hide(selectedEffect,options,250);
			$("#effect1").hide(selectedEffect,options,250);
			$("#effect4").hide(selectedEffect,options,250);
			$("#effect3").delay(250).toggle(selectedEffect,options,250);
      $('html, body').animate({scrollTop:2700},800);
		}
		else if(pokemon==4){
			
			$("#effect2").hide(selectedEffect,options,250);
			$("#effect1").hide(selectedEffect,options,250);
			$("#effect3").hide(selectedEffect,options,250);
			$("#effect4").delay(250).toggle(selectedEffect,options,250);
      $('html, body').animate({scrollTop:2700},800);
		}
	};
	
	$("#button").on("click",function(){runEffect(1);});
	$("#button2").on("click",function(){runEffect(2);});
	$("#button3").on("click",function(){runEffect(3);});
	$("#button4").on("click",function(){runEffect(4);});
	
	$("#multi").on("click",function(){
		$("#paragrafo").html("<div class='item-paragrafo'>Multifocal com tecnologia Mark. Para quem busca conforto, esta lente proporciona amplo campo de visão tanto longe como perto, qualidade com o preço acessível. Confeccionada em processo digital, possui sua versão “short” ideal para armações pequenas, com altura mínima de 15mm. <br>Bloco de 70mm - mono design.</div><div class='item-paragrafo'> </div>");
		$("#titulo").html("<i>Multi<b> Gradual</b></i>");
		$("#desc").html("LENTES MULTIFOCAIS AO SEU ALCANCE<br>");
		$("#marcadores").html("");
        $("#rodape").html("Possui garantia para defeitos de fábrica de 3 meses e de adaptação de 30 dias.");
		$("#imagem").html("<img src='imagens/multi-gradualN.png' class='imagem-mitem''>");
		$('html, body').animate({scrollTop:2700},800);
	});
		
		$("#mk").on("click",function(){
			$("#paragrafo").html("Conforto, estética aliado a um campo de visão mais amplo evitando movimentos bruscos com a cabeça para enxergar melhor. Qualidade e preço acessível.<br>Bloco de 80mm<br>03 desenhos por adição<br>");
			$("#titulo").html("<i>MK<b> Vision</b></i>");
			$("#desc").html("Lentes Multifocais com AMPLO CAMPO DE VISÃO para longe e transição suave entre os campos.<br>");
			$("#marcadores").html("<li>De 1.00 a 1.50</li><li>De 1.75 a 2.50</li><li>De 2.75 a 3.50</li>");
			$("#imagem").html("<img src='imagens/mkvisionN.png' class='imagem-mitem''>");
            $("#rodape").html("Possui garantia para defeitos de fábrica de 3 meses e de adaptação de 21 dias.");
			$('html, body').animate({scrollTop:2700},800);
		});
		
		$("#digital").on("click",function(){
			$("#paragrafo").html("Conforto, nitidez e melhor adaptação. Lentes Digital Clear foram desenvolvidas para usuários exigentes amantes da tecnologia.<br> Campo de visão amplo com alto desempenho de longe e intermediário de perto.<br> 11 desenhos  <br>");
			$("#titulo").html("<i>Digital<b> Clear</b></i>");
			$("#desc").html("A LENTE MULTIFOCAL PARA SUA VIDA DIGITAL! <br>");
			$("#marcadores").html(" ");
			$("#imagem").html("<img src='imagens/digital-clearN.png' class='imagem-mitem''>");
            $("#rodape").html("Possui garantia para defeitos de fábrica de 3 meses e de adaptação de 15 dias.");
			$('html, body').animate({scrollTop:2700},800);
		});
		
			$("#vision").on("click",function(){
				$("#paragrafo").html("O que há de melhor no mercado óptico.<br>Sua tecnologia proporciona uma área útil nítida com visão de perto mais ampla. Aliada a qualidade comprovada proporcionando ao usuário opções de desenhos infinitos por sua tecnologia <b>Free Form.</b><br>");
				$("#titulo").html("<i>Free<b>Vision</b></i>");
				$("#desc").html("Free Form<br>");
				$("#marcadores").html("<li>Software avançado que permite escolher diversos  tipos de desenhos (multi-design);</li>                  <li>Campo de visão intermediário mais amplo do que é possível com lentes multifocais tradicionais;</li>                  <li>Qualidade comprovada;</li><li>Design verdadeiro e único;</li><li>Lentes mais finas. </li>");
				$("#imagem").html("<img src='imagens/visionN.png' class='imagem-mitem''>");
                $("#rodape").html("Possui garantia para defeitos de fábrica de 3 meses e de adaptação de 15 dias.");
				$('html, body').animate({scrollTop:2700},800);
			});
      
      //Tratamento
      $("#btratamento1").on("click",function(){
        $("#titulo-tratamento").html("O tratamento de lentes para sua vida!");
        $("#desc-tratamento").html("Na maioria das vezes não sabemos disso, mas os equipamentos eletrônicos que possuímos hoje em dia emitem raios azuis que são prejudiciais aos nossos olhos e visão ao longo do tempo. Este tratamento com tecnologia Mark Optical, permite que grande desses mesmos raios azuis sejam bloqueados. Conforto e segurança para todos os seus momentos de trabalho e lazer.");
        $("#imagem-tratamento").html("<img src='imagens/bluecareN.png'>");
        $('html, body').animate({scrollTop:2700},800);
      });
  
  $("#btratamento2").on("click",function(){
        $("#titulo-tratamento").html("Tecnologia fotossensível Mark Optical.");
        $("#desc-tratamento").html("Agora a Mark Optical chega com o tratamento fotossensível MOVE. Este tratamento faz com que a lente se adeque a cada intensidade de luz que é exposto, proporcionando conforto, estilo e praticidade em qualquer momento do seu dia a dia e ambiente que esteja.");
        $("#imagem-tratamento").html("<img src='imagens/moveN.png'>");
        $('html, body').animate({scrollTop:2700},800);
      });
				
  //tratamento
			$('.teste a[href^="#"]').on('click',function(e){
				e.preventDefault();var id=$(this).attr('href'),targetOffset=$(id).offset().top;
				$('html, body').animate({scrollTop:targetOffset-100},800);
				$(window).scroll(function(){
					if($(this).scrollTop()>100){
						$('a[href="#top"]').fadeIn();
					}else{
						$('a[href="#top"]').fadeOut();
					}
				});
			
			$('a[href="#top"]').click(function(){

				$('html, body').animate({scrollTop:0},800);return false;
			});
			});
			$('a[href="#header"]').click(function(){

		$('html, body').animate({scrollTop:0},800);
		});
		});


		