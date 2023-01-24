/*$(function(){
	var current = location.pathname;
	$("#nav li a").each(function(){
		var $this = $(this);
		if($this.attr('href').indexOf(current) !== -1){
			$this.addClass("active");
		}
	})
})*/

$(document).ready(function(){
	var page = location.pathname.substring(location.pathname.lastIndexOf('/')+1);
	//page = fullPath.replace(/^.*[\\\/]/, '');
	if(page === "rightdiv.html"){
		$("#home").addClass("active");
		$("#about").removeClass("active");
		$("#services").removeClass("active");
	} else if(page === "rightdiv1.html"){
		$("#home").removeClass("active");
		$("#about").addClass("active");
		$("#services").removeClass("active");
	} else if(page === "rightdiv2.html"){
		$("#home").removeClass("active");
		$("#about").removeClass("active");
		$("#services").addClass("active");
	}
});