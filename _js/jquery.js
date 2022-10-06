// JavaScript Document


////////////////////     BROWSER POPUP      ////////////////////
	
function openWin(url, width, height){
	window.open(url, "", "width="+width+", height="+height+", toolbar=no, menubar=no, scrollbars=yes, resizable=no" );
} 

$(function(){
    
    
    
    /*var loginTime = 1800;
    
    setInterval(function(){
        
        if( loginTime > 0){
        
        loginTime--; 
        
        console.log(loginTime);
            
        }else{
            alert("out")
        }
        
        
    },1000);
    
    $(document).on("keydown, mousemove","",function(){
        
        loginTime = 1800;
        
    });
	*/
	
	////////////////////     LNB     ////////////////////
	
	/*   LNB 로드   */
	/*$("#lnb").load('../_inc/lnb.html',function(){
		lnbLoad();
	});*/
	
	function lnbLoad(){
		$("#lnb .menu li").eq(m).addClass("on");
	};
	
	////////////////////     라디오 그룹     ////////////////////
	
	
	$(document).on("click",".radio-group .item",function(){
        $(this).closest(".radio-group").find(".item").removeClass("on");
		$(this).addClass("on");
        
	});
	
	
	
	////////////////////     탭     ////////////////////
	
	$(".tab li").click(function(){
		var idx = $(this).index();
		$(this).closest(".tab-wrap").find(".tab-con").hide();
		$(this).closest(".tab-wrap").find(".tab-con").eq(idx).show();
		$(this).closest(".tab").find("li").removeClass("on");
		$(this).addClass("on");
	});
	
	
	////////////////////     modal     ////////////////////    
    
    $(document).on("click",".btn-modal",function(){
        var target = $(this).attr("data-target");
        modalPopup(target)
        
	});
    
    function modalPopup(tg){
        
        var target = $("."+tg);
        target.show();
    }
    
    $(document).on("click",".modal-close",function(){
		
        $(this).closest("#modal-wrap").hide();
	});
	
	
	//    달력
    
   /* $( "#datepicker,#datepicker2,#datepicker3,#datepicker4" ).datepicker({
        inline: true,
		dayNamesMin:['일','월','화','수','목','금','토'],
		monthNames:['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
    });*/
	
	
	////////////////////     acodion     //////////////////// 
	
	$(document).on("click",".btn-aco",function(){
		if($(this).closest(".acodion").hasClass("on")){
			$(this).closest(".acodion").removeClass("on");	
			$(this).closest(".acodion").find(".aco-con").slideUp(500,"easeInOutExpo");
		}else{
			$(this).closest(".acodion").addClass("on");
			$(this).closest(".acodion").find(".aco-con").slideDown(500,"easeInOutExpo");
		}
        
	});
	
	$(document).on("click",".multi-sel .item",function(){
        $(this).remove();    
    });
    
    
    
});








