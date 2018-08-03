$(function(){
	$('.btn').click(function(){
		var name = $('#name').val(),
			bank = $('#bank').val(),
			banknum = $('#banknum').val(),
			bankp = $('#bankp').val(),
			bankc = $('#bankc').val(),
			bankadd = $('#bankadd').val(),
			tel = $('#tel').val(),
			paypassword = $('#paypassword').val(),
			qq = $('#qq').val();
			if(name == ''){
				myConfirm('请输入您的真实姓名','取消','确定','1',function(res){
					if(res.status){	
						//用户点击确定
					}else {
						//用户点击取消
					}
				});
				return false;
			}else if(bank == '0'){
				myConfirm('请输入您的银行卡号','取消','确定','1',function(res){
					
				});
				return false;
			}
		
	})
})
