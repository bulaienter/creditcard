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
				alert('请输入您的真实姓名');
				return false;
			}else if(bank == '0'){
				alert('请选择开户行');
				return false;
			}
		
	})
})
