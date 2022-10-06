// JavaScript Document


$(function(){
    
    
	
	////////////////////     LNB     ////////////////////
	
	/*   LNB 로드   */
	$("#lnb").load('../_inc/lnb.html',function(){
		lnbLoad();
	});
	
	function lnbLoad(){
		$("#lnb .menu li").eq(m).addClass("on");
	};
    
    
    $(document).on("click",".menu ul li a",function(){
			
			var self = this;
			
			
			
			//현재 선택된 메뉴의 하위메뉴 의 열림,닫힘 상태를 변수에 담는다.
			var openLength = $(this).closest("ul").find("li ul[style*='block']").length;
			var open = $(this).closest("ul").find("li ul[style*='block']");
			var displayCondition = $(this).next().css("display");
				
			//클릭한 버튼에 하위 메뉴가 있고 slide 이벤트가 완료가 되었다면 (더블 클릭 방지)
			if($(this).next().is("ul") == true){
				
				if( openLength > 0 && displayCondition=="none"){  // 클릭한 메뉴의 하위메뉴는 닫혀있고 다른 메뉴가 열려있을때
                    //console.log("a");
					open.slideUp(500,'easeInOutExpo',function(){
						$("#lnb a[class^='on']").removeClass("on");
						$(self).addClass("on");	
						$(self).parents("ul").siblings("a").addClass("on");
						$(self).next().slideDown(500,'easeInOutExpo');
						
					});
					return false;
						
				}else if( openLength > 0 && displayCondition=="block"){  // 클릭한 메뉴의 하위메뉴가 열려있을때
                    //console.log("b");
					open.slideUp(500,'easeInOutExpo',function(){
						open.prev().removeClass("on");
					});
					return false; 
							
				}else if( openLength == 0 && displayCondition=="none" ){  // 아무런 메뉴도 열리지 않았을때
                    //console.log("c");
					$("#lnb a[class^='on']").removeClass("on");
					$(self).addClass("on");	
					$(self).parents("ul").siblings("a").addClass("on");
					$(self).next().slideDown(500,'easeInOutExpo');
					return false;	
				}
				
			}else{
				
				open.slideUp(500,'easeInOutExpo');
				$("#lnb a[class^='on']").removeClass("on");
				$(self).addClass("on");	
				$(self).parents("ul").siblings("a").addClass("on");
			
			}
		}); //메뉴 버튼 클릭 이벤트 END	
    
	
	////////////////////     라디오 그룹     ////////////////////
	
	
	$(document).on("click",".radio-group .item",function(){
        $(this).closest(".radio-group").find(".item").removeClass("on");
		$(this).addClass("on");
        
	});
    
    ////////////////////     테이블소팅     ////////////////////
	
	
	$(document).on("click",".table-group .item",function(){
        $(this).closest(".table-group").find(".item").removeClass("on");
		$(this).addClass("on");
        if($(this).hasClass("up")){
            $(this).removeClass("up");
            $(this).addClass("down");
        }else{
            $(this).removeClass("down");
            $(this).addClass("up");
        }
        
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
    
    $(document).on("click",".btn-close",function(){
		
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
    
    
    
});








