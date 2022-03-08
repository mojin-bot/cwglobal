$(function() {

    /*
    .music_a_off{ display: none;}
    */
	
    
    $(".music_a_off").css({'display':'none'});   
      

    $(".music_a_on").click(function() {
        $(".music_a_on").css({'display':'none'});  
        $(".music_a_off").css({'display':'block'});  
        $(".audioplay_bg_a").css({'opacity':'1'}); 
        $(".audioplay_bg_b").css({'opacity':'0'});
        $(".audioplay_bg_c").css({'opacity':'0'});
        $(".audioplay_item-flex_a").css({'background-color':'#a3261d', 'border-color':'#a3261d'});
        $(".audioplay_item-flex_b").css({'background-color':'#000', 'border-color':'#fff'});
        $(".audioplay_item-flex_c").css({'background-color':'#000', 'border-color':'#fff'});
        
        $("#audio_1").get(0).play();
        $("#audio_2").get(0).pause();
        $("#audio_3").get(0).play();
        
    });	
    
    $(".music_a_off").click(function() {
        $(".music_a_off").css({'display':'none'});  
        $(".music_a_on").css({'display':'block'});  
        $(".audioplay_bg_a").css({'opacity':'1'}); 
        $(".audioplay_bg_b").css({'opacity':'0'});
        $(".audioplay_bg_c").css({'opacity':'0'});
        $(".audioplay_item-flex_a").css({'background-color':'#000', 'border-color':'#fff'});
        $(".audioplay_item-flex_b").css({'background-color':'#000', 'border-color':'#fff'});
        $(".audioplay_item-flex_c").css({'background-color':'#000', 'border-color':'#fff'});
        $("#audio_1").get(0).pause();
        $("#audio_2").get(0).pause();
        $("#audio_3").get(0).pause();
        
    });	


    
    $(".audioplay_item-flex_a").click(function() {
        $(".music_a_on").css({'display':'none'});  
        $(".music_a_off").css({'display':'block'});  
        $(".audioplay_bg_a").css({'opacity':'1'}); 
        $(".audioplay_bg_b").css({'opacity':'0'});
        $(".audioplay_bg_c").css({'opacity':'0'});
        $(".audioplay_item-flex_a").css({'background-color':'#a3261d', 'border-color':'#a3261d'});
        $(".audioplay_item-flex_b").css({'background-color':'#000', 'border-color':'#fff'});
        $(".audioplay_item-flex_c").css({'background-color':'#000', 'border-color':'#fff'});
        
        $("#audio_1").get(0).play();
        $("#audio_2").get(0).pause();
        $("#audio_3").get(0).play();        
    });	
    
    $(".audioplay_item-flex_b").click(function() {
        $(".music_a_on").css({'display':'none'});  
        $(".music_a_off").css({'display':'block'});  
        $(".audioplay_bg_a").css({'opacity':'1'}); 
        $(".audioplay_bg_b").css({'opacity':'1'});
        $(".audioplay_bg_c").css({'opacity':'0'});
        $(".audioplay_item-flex_a").css({'background-color':'#000', 'border-color':'#fff'});
        $(".audioplay_item-flex_b").css({'background-color':'#a3261d', 'border-color':'#a3261d'});
        $(".audioplay_item-flex_c").css({'background-color':'#000', 'border-color':'#fff'});
        
        $("#audio_1").get(0).pause();
        $("#audio_2").get(0).play();
        $("#audio_3").get(0).play();        
    });	

    $(".audioplay_item-flex_c").click(function() {
        $(".music_a_on").css({'display':'none'});  
        $(".music_a_off").css({'display':'block'});  
        $(".audioplay_bg_a").css({'opacity':'1'}); 
        $(".audioplay_bg_b").css({'opacity':'1'});
        $(".audioplay_bg_c").css({'opacity':'1'});
        $(".audioplay_item-flex_a").css({'background-color':'#000', 'border-color':'#fff'});
        $(".audioplay_item-flex_b").css({'background-color':'#000', 'border-color':'#fff'});
        $(".audioplay_item-flex_c").css({'background-color':'#a3261d', 'border-color':'#a3261d'});
        
        $("#audio_1").get(0).pause();
        $("#audio_2").get(0).pause();
        $("#audio_3").get(0).play();        
    });	




});
