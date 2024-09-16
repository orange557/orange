$(function () {
	//繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺ｮ謨ｰ蛟､繧定｡ｨ遉ｺ
	$("#scrollArea").scroll(function () {
	  $("#out").text("scrollLeft: " + $(this).scrollLeft())
	})
	//繝懊ち繝ｳ繧呈款縺吶→蜿ｳ縺ｫ0.3遘偵°縺代※500px遘ｻ蜍�
	$("#right").click(function () {
	  $("#scrollArea").animate(
		{
		  scrollLeft: $("#scrollArea").scrollLeft() + 500,
		},
		300
	  )
	  return false
	})
	//繝懊ち繝ｳ繧呈款縺吶→蟾ｦ縺ｫ0.3遘偵°縺代※500px遘ｻ蜍�
	$("#left").click(function () {
	  $("#scrollArea").animate(
		{
		  scrollLeft: $("#scrollArea").scrollLeft() - 500,
		},
		300
	  )
	  return false
	})
  })