$(function(){
	//登陆注册切换
	$('.tab_login').click(function(){
		$('.s_h').show();
		$('.s_h_2').hide();
		$('.login_con').removeClass('active_con')
		$('.tab_login').addClass('active')
		$('.tab_reg').removeClass('active');
		$('.login_footer').css("margin-top",'0px')
	});
	$('.tab_reg').click(function(){
		$('.s_h').hide();
		$('.s_h_2').show();
		$('.login_footer').css("margin-top",'100px')
		$('.login_con').addClass('active_con')
		$('.tab_login').removeClass('active')
		$('.tab_reg').addClass('active');
	});
	
	//登录页面二维码
	$('.saoma').mouseover(function(){
		$('.big_ma').show()
	});
	$('.saoma').mouseout(function(){
		$('.big_ma').hide()
	});
	
	//登录页面图片上传
	$(".shang_btn").click(function () {
		$(".shangchuan").click();
	}); 
	
	//银行资料
	$('.ld_bank').addClass('bank_active');$('.name_bank').hide();
	$('.ld_bank').click(function(){
		$('.ld_bank').addClass('bank_active');
		$('.hk_bank').removeClass('bank_active');
		$('.name_bank').hide();
		$('.order').css('margin','52px auto 36px auto')
		$('.your_add,.your_add_ipt,.youzheng').show()
	});
	$('.hk_bank').click(function(){
		$('.hk_bank').addClass('bank_active');
		$('.ld_bank').removeClass('bank_active');
		$('.name_bank').show();
		$('.order').css('margin','38px auto 36px auto')
		$('.your_add,.your_add_ipt,.youzheng').hide();
	})
	
	
	
	$('.geren_a').addClass('ziliao_tab_active_a')
	$('.geren').click(function(){
		$('.ziliao_edit').show();
		$('.ziliao_right').css('height','821px');
		$('.ziliao_bank,.bangding,.piaohao').hide();
		$('.geren').addClass('ziliao_tab_active');
		$('.geren_a').addClass('ziliao_tab_active_a')
		$('.ziliao,.bang_hao,.shezhi').removeClass('ziliao_tab_active');
		$('.ziliao_a,.bang_hao_a,.shezhi_a,.shezhi_a').removeClass('ziliao_tab_active_a')
	})
	$('.ziliao').click(function(){
		$('.ziliao_bank').show();
		$('.ziliao_right').css('height','821px');
		$('.ziliao_edit,.bangding,.piaohao').hide();
		$('.ziliao').addClass('ziliao_tab_active');
		$('.ziliao_a').addClass('ziliao_tab_active_a');
		$('.geren,.bang_hao,.shezhi').removeClass('ziliao_tab_active');
		$('.geren_a,.bang_hao_a,.shezhi_a').removeClass('ziliao_tab_active_a')
	});
	$('.bang_hao').click(function(){
		$('.bangding').show();
		$('.ziliao_right').css('height','821px');
		$('.ziliao_edit,.ziliao_bank,.piaohao').hide();
		$('.bang_hao').addClass('ziliao_tab_active');
		$('.bang_hao_a').addClass('ziliao_tab_active_a');
		$('.geren,.ziliao,.shezhi').removeClass('ziliao_tab_active');
		$('.geren_a,.ziliao_a,.shezhi_a').removeClass('ziliao_tab_active_a')
	});
	$('.shezhi').click(function(){
		$('.piaohao').show();
		$('.ziliao_right').css('height','auto');
		$('.ziliao_edit,.ziliao_bank,.bangding').hide();
		$('.shezhi').addClass('ziliao_tab_active');
		$('.shezhi_a').addClass('ziliao_tab_active_a');
		$('.geren,.ziliao,.bang_hao').removeClass('ziliao_tab_active');
		$('.geren_a,.ziliao_a,.bang_hao_a').removeClass('ziliao_tab_active_a')
	})
	
	
	$('.pic_13_2').css('border','1px solid #ADB9C1');
	$('.pic_13').css('background-image','url(../images/pic_13.png)');
	$('.pic_13_2').click(function(){
		$('.pic_13').css('background-image','');
		$('.pic_13').css('border','1px solid #ADB9C1');
		$('.pic_13_2').css('border','');
		$('.pic_13_2').css('background-image','url(../images/pic_13.png)');
	});
	$('.pic_13').click(function(){
		$('.pic_13_2').css('background-image','');
		$('.pic_13_2').css('border','1px solid #ADB9C1');
		$('.pic_13').css('border','');
		$('.pic_13').css('background-image','url(../images/pic_13.png)');
	})
	
	
	
	$(".btn_4").click(function () {
		$(".file_2").click();
	}); 
	
	
	$('#cha,.look_1').mouseover(function(){
		$('.look_1').show()
	})
	$('#cha,.look_1').mouseout(function(){
		$('.look_1').hide()
	})
	
	$('#cha_2,.look_2').mouseover(function(){
		$('.look_2').show()
	})
	$('#cha_2,.look_2').mouseout(function(){
		$('.look_2').hide()
	})
	
	
	//转出股票
	$('.tr_2').mouseover(function(){
		$(this).css('background','#E0F7FF')
	})
	$('.tr_2').mouseout(function(){
		$(this).css('background','')
	})
	
	$('.lianxi1,.lianxi2,.add_num').hide()
	$(".cb").click(function(){
		$('.cb_p').show();
		$('.lianxi1,.lianxi2,.add_num').hide()
	})
	$(".write").click(function(){
		$('.cb_p').hide();
		$('.lianxi1,.lianxi2,.add_num').show()
	})
	
	
})