$(document).ready(function() {
	anim();
	function anim() {
		$(".nav-bar a").click(function(e) {
			e.preventDefault();
			var stranaID = e.currentTarget.id + "Strana";
			$("html, body").animate({
				scrollTop: $("#" + stranaID).offset().top
			}, 1500)
			if ($("#strana3").children("div").hasClass("levo")) {
				$(".bar").css("transform", "translateX(100%)").removeClass("levo").addClass("desno");
			}
			if ($("#uniclevoStrana").hasClass("izaso")) {
				$("#uniclevoStrana").css("transform", "translateX(-90%)").removeClass("izaso").addClass("vratio");
			}
			if ($("#unicdesnoStrana").hasClass("izaso")) {
				$("#unicdesnoStrana").css("transform", "translateX(90%)").removeClass("izaso").addClass("vratio");
			}
		})
	}

		$(".nav-bar-uni a").click(function(e) {
			e.preventDefault();
			var stranaID = e.currentTarget.id + "Strana";
			var ovo = $("#" + stranaID);
			if ($("#strana3").children("div").hasClass("levo")) {
				$(".bar").css("transform", "translateX(100%)").removeClass("levo").addClass("desno");
				ovo.css("transform", "translateX(-100%)").removeClass("desno").addClass("levo");
			}
			else if (ovo.hasClass("desno")) {
				ovo.css("transform", "translateX(-100%)").removeClass("desno").addClass("levo");
			}
		});



		$("#unicdesno").click(function(e) {
			e.preventDefault();
			if ($("#uniclevoStrana").hasClass("izaso")) {
				$("#uniclevoStrana").css("transform", "translateX(-90%)").removeClass("izaso").addClass("vratio");
				$("#unicdesnoStrana").css("transform", "translateX(-90%)").removeClass("vratio").addClass("izaso");
			}
			else $("#unicdesnoStrana").css("transform", "translateX(-90%)").removeClass("vratio").addClass("izaso");
		});

		$("#uniclevo").click(function(e) {
			e.preventDefault();
			if ($("#unicdesnoStrana").hasClass("izaso")) {
				$("#unicdesnoStrana").css("transform", "translateX(90%)").removeClass("izaso").addClass("vratio");
				$("#uniclevoStrana").css("transform", "translateX(90%)").removeClass("vratio").addClass("izaso");
			}
			else $("#uniclevoStrana").css("transform", "translateX(90%)").removeClass("vratio").addClass("izaso");
		});

		$("#unicsredina").click(function(e) {
			e.preventDefault();
			if ($("#uniclevoStrana").hasClass("izaso")) {
				$("#uniclevoStrana").css("transform", "translateX(-90%)").removeClass("izaso").addClass("vratio");
			}
			if ($("#unicdesnoStrana").hasClass("izaso")) {
				$("#unicdesnoStrana").css("transform", "translateX(90%)").removeClass("izaso").addClass("vratio");
			}
		});

		$('[data-fancybox="images"]').fancybox({
		  buttons : [
		    'zoom',
		    'close'
		  ]
		});
});