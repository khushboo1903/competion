function cursoranimation() {
	var mousecursor = document.querySelector(".cursor");
	window.addEventListener("mousemove", cursor);
	function cursor(e) {
		mousecursor.style.top = e.pageY + "px";
		mousecursor.style.left = e.pageX + "px";
	}
	var link = document.querySelectorAll(".link");
	link.forEach((link) => {
		link.addEventListener("mouseover", growlink);
		link.addEventListener("mouseleave", shrinklink);
	});

	function growlink(e) {
		mousecursor.classList.add("linkgrow");
	}
	function shrinklink(e) {
		mousecursor.classList.remove("linkgrow");
	}
}
cursoranimation();
function aboutscroll() {
	var tl = gsap.timeline({
		scrollTrigger: {
			trigger: "#main",
			// markers: true,
			start: "100% 100%",
			end: "200% 100%",
			scrub: 2,
			pin: true,
		},
	});
	tl.to(
		"#center",
		{
			height: "100vh",
		},
		"a"
	)
		.to(
			"#top",
			{
				top: "-100%",
			},
			"a"
		)

		.to(".content", {
			delay: -0.4,
			marginTop: "0%",
		});
}
aboutscroll();
function panelanimation() {
	var panels = document.querySelectorAll(".panel");
	panels.forEach((panel) => {
		panel.addEventListener("click", panelgrow);
		function panelgrow() {
			panels.forEach((panel) => {
				panel.classList.remove("active");
			});
			panel.classList.add("active");
		}
	});
}
panelanimation();
