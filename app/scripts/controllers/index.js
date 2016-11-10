//mobile菜单点击事件
var caidan = document.getElementById("zwd_btn_menu");
var ospan = caidan.getElementsByTagName("span");
var pd = false;
caidan.onclick=function(){
		if(pd==false){
			ospan[1].style.left = 50+"px";
			ospan[0].style.transform = "rotate(45deg) translate3d(5px, 5px, 0)";
			ospan[2].style.transform = "rotate(-45deg) translate3d(5px, -5px, 0)";
			setTimeout(function(){
				ospan[1].style.display = "none";
			},250)
			zwd_nav.style.display = "block";
			pd = true
		}else{
			ospan[1].style.display = "block";
			ospan[0].style.transform = "rotate(0deg) translate3d(0px, 0px, 0)";
			ospan[2].style.transform = "rotate(0deg) translate3d(0px, 0px, 0)";
			setTimeout(function(){
				ospan[1].style.left = 12+"px";
			},50)
			zwd_nav.style.display = "none";
			pd = false;
		}
		
}
//mobile菜单点击事件--

		
	
		
	
		























