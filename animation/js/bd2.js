var active_page=0;
	var active_z=0;
	$('.book-page-box').click(function(){
		console.log($(this));
		if($(this).hasClass('flip-animation-start')){
			if(active_page==0){
				return false;
			}
			$('.book-page-box').eq(4-active_page).removeClass('flip-animation-start').addClass('flip-animation-end').css('z-index',0);
			active_page--;
			active_z--;
		}else{
			if(active_page>3){
				return false;
			}
			$('.book-page-box').eq(3-active_page).removeClass('flip-animation-end').addClass('flip-animation-start').css('z-index',active_z);
			active_page++;
			active_z++;
		}
		console.log(active_page);
	})