$(function(){
    
    
    var myHeader = $(".header .slider"),
        bToTop = $(".back-to-top");
    
    /***** Back window to top ******/
    bToTop.on("click",function(){
        $('html,body').animate({scrollTop:0},1000);
    });
    
    /* set the heigt of header equal to the heigt of window*/
    myHeader.height($(window).height());
    
    /* smoth scroll window to the section*/
    var myLink = $(".nav-links >li >a");
    $(".nav-links >li >a").on("click",function(){
        
        $(this).parent("li").addClass("active").siblings().removeClass("active");
        $('body,html').animate({   
            scrollTop:$($(this).attr("href")).offset().top + 2       
        },1000);
    });
    
    
    
    

    /* set the natural navbar to fixed */
    function fixedNavBar(){
        
        var myNavBar = $(".navbar"),
            n_logo = $(".header .navbar a .logo"),
            f_logo = $(".header .navbar a .logo-alt");

        if($(window).scrollTop() > 0){
            myNavBar.addClass("fixed-nav");
            f_logo.css("display","none");
            n_logo.css("display","block");
        }else{
            myNavBar.removeClass("fixed-nav");
            f_logo.css("display","block");
            n_logo.css("display","none");
        }
    };
    
    /* Scroll the Window to top*/    
    function backToTop() {    
        if($(window).scrollTop() > 700){
            bToTop.fadeIn(1000);
        }else{
            bToTop.fadeOut(1000);
        }
      
    }
    
    /* setting when resize the window*/
    $(window).resize(function(){
        /* set the heigt of header equal to the heigt of window*/
        myHeader.height($(this).height());
        
        
    });

    
    $(window).scroll(function(){
        
        /* Scroll the Window to top*/    
        backToTop();
        
        /* set the natural navbar to fixed */
        fixedNavBar();
    
        /* sync the navBar links with section*/
        $("section").each(function(){
            if($(window).scrollTop() > $(this).offset().top){
               var sectionId = $(this).attr("id");
               $(".nav-links >li>a[href='#"+ sectionId +"']").parent("li").addClass("active").siblings().removeClass("active");
            }
        });
        
    });
    
    
    $(window).on("load",function(){
        /* Scroll the Window to top*/    
        backToTop();
        
        /* set the natural navbar to fixed */
        fixedNavBar();
        
         /* sync the navBar links with section*/
        $("section").each(function(){
            if($(window).scrollTop() > $(this).offset().top){
               var sectionId = $(this).attr("id");
               $(".nav-links >li>a[href='#"+ sectionId +"']").parent("li").addClass("active").siblings().removeClass("active");
            }
        });

    });
});