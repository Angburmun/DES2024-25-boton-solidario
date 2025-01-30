(function(window, undefined) {

    /*********************** START STATIC ACCESS METHODS ************************/

    var older = jimUtil.loadScrollBars;
    jQuery.extend(jimUtil, {
        "loadScrollBars": function() {
        	if (older != undefined)
        		older();
            jQuery(".s-66a322e3-9db4-4795-8bd8-6e15aff2ff77 .ui-page").overscroll({ showThumbs:true, direction:'vertical', roundCorners:false, backgroundColor:'#a3a3a3', opacity:'0.75', thickness:'4', scrollSpacing:'0'});
         }
    });

    /*********************** END STATIC ACCESS METHODS ************************/

}) (window);