/*var sitebasepath = window.location.protocol + "//" + window.location.host+ Drupal.settings.basePath;
var thisfolderpath = 'sites/all/themes/university_guam/js/';
includejs=function(url) {
    document.write('<script src="' + url + '"></script>');
}
includecss=function(url) {
    document.write('<link rel="stylesheet" href="' + url + '">');
}

includejs(sitebasepath+thisfolderpath+"jquery.mousewheel.js");
includejs(sitebasepath+thisfolderpath+"collapse.js");*/

requirejs(["bootstrap-tabcollapse"], function(tabCollapse) {});


 
addAllListeners=function() {
	}


ON_READY=function() {
	}

ON_LOAD=function(){
	

	
	jQuery('.pane-menu-menu-quick-links ul li, #block-menu-menu-footer-quick-links ul li').each(function() {
		var text = jQuery(this).find('a').html();
		jQuery(this).find('a').html('<span>'+text+'</sapn>')
	});
	
	jQuery('.form-submit').addClass('btn');
	jQuery('.form-submit').click(function(){
		jQuery(this).addClass('btn');
	});
	
	
	jQuery('.page-search .tabs .tabs li:last-child a').text('Files');	
	
	
	/*Responsive Screen Width */
	var windowsize = jQuery(window).width();
	jQuery(window).resize(function() {
	  var windowsize = jQuery(window).width();
	  
	var pagerlen = jQuery('.bx-has-pager .bx-pager-item').length;
	if(pagerlen == 1){
		jQuery('.bx-has-pager .bx-pager-item').hide();
	};

	});
	
/*	jQuery('.view-directory-prinable table tr td').each(function() {
		tallest = jQuery(this).outerHeight();
		jQuery(this).children('.page_braek').css({'height': tallest});
	});*/
	
	jQuery('.graduates_image img').click(function(){
		jQuery('#ui-accordion-2-panel-0').slideToggle('slow', function() {
			jQuery('#ui-accordion-1-header-0 .ui-accordion-header-icon').toggleClass('ui-accordion-header-active');
		  });		
											 
	});
	jQuery('.undergradutes_image img').click(function(){
		jQuery('#ui-accordion-1-panel-0').slideToggle('slow', function() {
			jQuery('#ui-accordion-1-header-0 .ui-accordion-header-icon').toggleClass('ui-accordion-header-active');
		  });			
											 
	});	
	
	jQuery('.navbar-toggle').click(function(){
		jQuery('#top-nav').slideToggle();
		jQuery('#search').toggle();
	});
	
	if(navigator.userAgent.indexOf('Mac') > 0) {
		
		jQuery('body').addClass('safari_browser');
	}
		
		
	jQuery( ".content_area .news_search a" ).click(function() {
	  jQuery( "#views-exposed-form-news-and-announcements-page" ).slideToggle( "slow", function() {
	  });
		
	  jQuery( this ).toggleClass( "highlight" );
	});	
	
	jQuery( ".mid_area #block-block-85 .news_search a" ).click(function() {
 		jQuery( "#views-exposed-form-events-page" ).slideToggle( "slow", function() {
	  });			
	  jQuery( this ).toggleClass( "highlight" );
	});	
	
	
	jQuery( "#block-block-86 .news_search a" ).click(function() {
 		jQuery( "#block-menu-menu-events-category-listing" ).slideToggle( "slow", function() {
	  });			
	  jQuery( this ).toggleClass( "highlight" );
	});
	
	
	
	
	jQuery('.navbar-toggle1').click(function(){
		jQuery('.site_menu .pane-menu-menu-student-achievement .pane-content > .menu').slideToggle();
	});	
	jQuery('.navbar-toggle1').click(function(){
		jQuery('.site_menu .pane-menu-student-achievement .pane-content .menu-name-menu-student-achievement > .menu').slideToggle();
	});		
	
	jQuery(".ui-menu-item").live("click", function(){										   
		jQuery('#views-exposed-form-directory-db-block-8').submit();
	});	
	
		jQuery('#views-exposed-form-directory-db-page-3').prop('action', '/browse-by-experts');
	
	

	jQuery('#myTab').tabCollapse();
	jQuery('#minisiteTab').tabCollapse();


	jQuery(".view-degree-program-detail .nav-tabs li.tab_link a").unbind('click');
	jQuery(".view-degree-program-detail .nav-tabs li.tab_link a").click(function () {
	    location.href = this.href;
	});
	
	if (windowsize < 767) {
	jQuery('#block-tb-megamenu-main-menu li.level-1.dropdown>a').click(function(){
		if(!jQuery(this).parent().hasClass('selected')){
			jQuery('#block-tb-megamenu-main-menu li.level-1').removeClass('selected');
			//jQuery('#menu .mega-dropdown-menu').animate({ "height": "0" });
			jQuery(this).parent().addClass('selected');
			//jQuery(this).parent().find('.mega-dropdown-menu').animate({ "height": "auto" });
			return false;
		}else{
			jQuery('#block-tb-megamenu-main-menu li.level-1').removeClass('selected');
			//jQuery('#menu .mega-dropdown-menu').animate({ "height": "0" });
			return false;
		};
		return false;
	});
	jQuery('body').click(function() {
		jQuery('#block-tb-megamenu-main-menu li.level-1').removeClass('selected');
		//jQuery('#menu .mega-dropdown-menu').hide();
	});
	jQuery('#block-tb-megamenu-main-menu').click(function(event){
		event.stopPropagation();
	});
	}
	

	
	
	
	jQuery('.new_window>a').attr('target','_blank');
	
	jQuery('#tb-megamenu-main-menu li.home a').attr('title','Home Page');
	
	jQuery( ".field-name-field-events-end-time" ).prepend( "<b> to </b>" );	
	jQuery( "#node_event_full_group_events_end_time" ).prepend( "<b> to </b>" );	
	
	
	
	jQuery('.pane-degrees-programs-panel-pane-1 .views-row').each(function() {
		var acdHeight = jQuery(this).find('.ui-accordion-content').height() + 10;
		jQuery(this).find('.ui-accordion-content .views-field-body').css('min-height',acdHeight);
		jQuery(this).find('.ui-accordion-content .views-field-body').css('min-height',acdHeight);
	});
	//Hide pager
	var pagerlen = jQuery('.bx-has-pager .bx-pager-item').length;
	if(pagerlen == 1){
		jQuery('.bx-has-pager .bx-pager-item').hide();
	};
	
jQuery( ".directory_more_details a" ).live( "click", function() {
	var rel = jQuery(this).attr('rel');
	jQuery( this ).toggleClass('dir_active');
  jQuery( "#"+rel ).slideToggle( "slow", function() {
    // Animation complete.
  });
});	

jQuery( ".more_db_details .jq_close" ).live( "click", function() {
	var dir_id = jQuery( this ).parent().parent().attr('id')
	jQuery('.'+dir_id).removeClass('dir_active');
	jQuery( this ).parent().parent().slideToggle( "slow", function() {
		// Animation complete.
	  });			
});		
	

	jQuery(".media-video-play").colorbox({
		transition: "elastic",
		iframe:true,
		rel: false,
		opacity: .9,
		current : false,
		width:'640',
		height:'380',
		maxWidth:'90%',
		maxHeight:'90%',
		close:'Close'
	});	
	jQuery(".videopopup").colorbox({
		transition: "elastic",
		iframe:true,
		rel: false,
		opacity: .9,
		current : false,
		width:'640',
		height:'380',
		maxWidth:'90%',
		maxHeight:'90%',
		close:'Close'
	});		
		
	
	jQuery(".image-popup").colorbox({
		transition: "elastic",
		opacity: .9,
		close:'Close',
		maxWidth:'90%'
	});
	
	
	if (windowsize < 767) {
		jQuery(".front #featured").appendTo("#apply_uog");
	jQuery( ".menu-block-ctools-menu-spring-2015-commencement-me-1, .menu-block-ctools-menu-spring-2016-commencement-me-1, .pane-menu-center-for-island-sustainab .pane-title" ).click(function() {
  		jQuery( ".menu-block-ctools-menu-spring-2015-commencement-me-1 > ul, .menu-block-ctools-menu-spring-2016-commencement-me-1 > ul, .pane-menu-center-for-island-sustainab .pane-content" ).slideToggle( "slow", function() {
  	});
	
});			
		
	}
	
	jQuery( "#accordion .panel-title a" ).click(function() {
	  jQuery( this ).toggleClass( "active" );
	});	
	
	jQuery("#block-menu-menu-events-category-listing .menu  ul li").click(function() {
        jQuery(this).siblings().removeClass('activeClass');
        jQuery(this).addClass('activeClass');
    });	
	
	jQuery('.sharethis-wrapper').find('img:not([alt])').attr('alt', 'Share Icons');	
	
	/*Jab JS*/
	jQuery(".tab-pane").hide(); //Hide all content
	jQuery("ul.nav-tabs li:first").addClass("active").show(); //Activate first tab
	jQuery(".tab-pane:first").show(); //Show first tab content
	
	
	
	
	//On Click Event
	jQuery("ul.nav-tabs li").click(function() {
		jQuery("ul.nav-tabs li").removeClass("active"); //Remove any "active" class
		jQuery(this).addClass("active"); //Add "active" class to selected tab
		jQuery(".tab-pane").hide(); //Hide all tab content
		var activeTab = jQuery(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
		jQuery(activeTab).fadeIn(); //Fade in the active content
		return false;
	});//END Jab JS
	
	
	
	
	
	if (windowsize >= 768 ) {


 var hash = window.location.hash;
  hash && jQuery('ul.nav-tabs li a[href="' + hash + '"]').tab('show');
  hash && jQuery(".tab-pane").hide();
  hash && jQuery(hash).show();

  jQuery('ul.nav-tabs li a').click(function (e) {
    jQuery(this).tab('show');
    var scrollmem = jQuery('body').scrollTop();
    window.location.hash = this.hash;
/*	jQuery('#pagearea-minisites').animate({scrollTop:scrollmem}, 'slow');
*/  });

  // Change tab on hashchange
  window.addEventListener('hashchange', function() {
    var changedHash = window.location.hash;
    changedHash && jQuery('ul.nav-tabs li a[href="' + changedHash + '"]').tab('show');
	changedHash && jQuery(".tab-pane").hide();
	changedHash && jQuery(changedHash).show();
  }, false);
	}
	
	jQuery(".cd_internal ul.nav-tabs li").removeClass("active"); //Activate first tab
	
  
	jQuery(".cd .tab-pane").hide(); //Activate first tab
  
	
	
	/*Dropdown Toggle JS*/	
	jQuery('.dropdown-toggle').click(function(){
		var rel = jQuery(this).attr('rel');
		jQuery("#"+rel).toggle();
		jQuery("#"+rel).toggleClass('show-dropdown');
	});
	
	jQuery('body').click(function() {
		jQuery('.btn-group .dropdown-menu').hide();
		jQuery('.btn-group .dropdown-menu').removeClass('show-dropdown');
	});
	
	jQuery('.dropdown-toggle').click(function(event){
		event.stopPropagation();
	});
	
	
	jQuery('.teaser_block .panel-pane .pane-content').click(function(){
		window.location=jQuery(this).find("a").attr("href");
		return false;
	});
	
	jQuery('#graphical-calendar').click(function(){
		window.location=jQuery('.view-calendar-block-events h3 a').attr("href");
		return false;
	});
	
	jQuery('#slider li').each(function(){
		var cp_width = jQuery(this).find('.views-field-field-caption-container-width .field-content').html();
		jQuery(this).find('.caption').width(cp_width);
	});
	
	/*if (windowsize > 1024 ) {
		jQuery("#tb-megamenu-main-menu li.level-1>a").click(function(){
			window.location=jQuery(this).attr("href"); 
			return false;
		});
	}*/
	
	var currentpagefullpath = window.location.href;
	jQuery('#block-menu-menu-events-category-listing li a[href="'+currentpagefullpath+'"]').addClass('active');
	var currentpagebasepath = location.pathname;
	if(currentpagebasepath == '/events'){
		jQuery('#block-views-calendar-block-events-block-1').show();
		jQuery('.view-all-events').hide();
	}
	if (window.location.href.indexOf("day-events") > -1) {
		jQuery('#block-views-calendar-block-events-block-1').show();
	}
	if (window.location.href.indexOf("keys") > -1) {
          jQuery('#block-views-featured-news-block').hide();
		  jQuery('.view-news-and-announcements .view-header').hide();
		  jQuery('.page-news-announcements .view-all-news').show();
		  
    }
	if (window.location.href.indexOf("key") > -1) {
		  jQuery('#block-views-75ca16fb4f8d9faaf8f85ade7ecb694b').hide();
		  jQuery('.view-all-events').show();
		jQuery('.view-all-events').hide();
		  
    }
	
	jQuery('#minisites .left_area .menu-block-wrapper li.expanded>h3').click(function(){
		if(!jQuery(this).parent().hasClass('selected')){
			jQuery('#minisites .left_area .menu-block-wrapper li.expanded').removeClass('selected');
			jQuery('#minisites .left_area .menu-block-wrapper li.expanded>ul').slideUp();
			jQuery(this).parent().addClass('selected');
			jQuery(this).parent().find('.menu').slideDown();
			return false;
		}else{
			jQuery('#minisites .left_area .menu-block-wrapper li.expanded').removeClass('selected');
			jQuery('#minisites .left_area .menu-block-wrapper li.expanded>ul').slideUp();
			return false;
		};
		return false;
	});
	jQuery('#minisites .left_area .menu-block-wrapper li.expanded.active-trail>ul.menu').show();
	jQuery('#minisites .left_area .menu-block-wrapper li.expanded>a').next().show();
	
jQuery('#minisites .left_area .menu-block-wrapper.menu-name-menu-knowledge-guam-initiative li.expanded>h3').click(function(event){
		event.stopPropagation();				  
});	
	
jQuery('#minisites .left_area .menu-block-wrapper.menu-name-menu-knowledge-guam-initiative li.expanded').addClass('selected');
jQuery('#minisites .left_area .menu-block-wrapper.menu-name-menu-knowledge-guam-initiative li.expanded>ul').slideDown('slow');	

	jQuery('.featured_colorbox').click(function(){
		var featured_body = jQuery(this).parents('li').find('.views-field-body').html();
		jQuery('#featured_colorbox').html(featured_body);
	})
	
	jQuery(".featured_colorbox").colorbox({
		transition:"elastic",
		opacity: .85,
		close:'Close',
		width: '800',
		height: '640',		
		inline:true,
		scrolling:true
	});
	
	jQuery(".pane-block-49 .pane-content").colorbox({
		transition:"elastic",
		opacity: .85,
		close:'Close',
		width: '800',
		height: '640',	
		maxWidth:'90%',
		maxHeight:'90%',		
		inline:true,
		scrolling:true,
		href: function () {
				  return ".pane-block-50 .pane-content";
			   } 		
	});	
	
	//checkMobile();
	
	jQuery('.bx-loading').hide();
		
		
	
	
}




//Check Mobile Devices
var checkMobile = function(){

    //Check Device
    var isTouch = ('ontouchstart' in document.documentElement);

    //Check Device //All Touch Devices
    if ( isTouch ) {
        jQuery('html').addClass('touch');
    }
    else {
        jQuery('html').addClass('no-touch');
    };

};






listen=function(evnt, elem, func) {
    if (elem.addEventListener)  // W3C DOM
        elem.addEventListener(evnt,func,false);
    else if (elem.attachEvent) { // IE DOM
        var r = elem.attachEvent("on"+evnt, func);
    return r;
    }
}	
	
listen("ready", document, ON_READY);
listen("load", window, ON_LOAD);