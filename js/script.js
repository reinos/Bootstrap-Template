//on ready
$(function(){
	//.. your code
    
});



//--------------------------------------------------------------------------
//snapp.js
//--------------------------------------------------------------------------
$(function(){
	//config
	var menu_trigger_left = '#toggle-left-menu';
	var menu_trigger_right = '#toggle-right-menu';

	//add snapper
	var snapper = new Snap({
        element: document.getElementById('snap-content'),
        touchToDrag : false
    });
    
    //responsive snapper
    $(window).resize(function(){
	   if($(document).width() < 770) {
		   snapper.enable(); 
	   } else {
		   snapper.disable(); 
	   }
    }).trigger('resize');
    
    //open left
    $(menu_trigger_left).click(function(){
    
    	if($('.snapjs-left').length) {
	    	snapper.close();
    	} else {
	    	snapper.open('left');

    	}
	});
	//open right
    $(menu_trigger_right).click(function(){
    
    	if($('.snapjs-right').length) {
	    	snapper.close();
    	} else {
	    	snapper.open('right');

    	}
	});
});