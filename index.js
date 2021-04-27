//抽奖人员名单
// var allPerson = "张三;李四;陈五;王六;蔡七;赖八";
var allPerson = "父谷义莎;耿马学;寿无霭;卞心;苏友婵;谢艳;官欧歌博;乐九梅;宗信;跋夹勤;跋夹孝朗;明上佳;彭娴;劳仁;黄钰启;傅岚;高鸣;戴信惠;家育;向山;桂钰清;路树;尚友茗;习影;驷公好环;钱顺;澹台星;房启;燕卿;邢孝谦;孙慕震;乐哲;武行;郝凯婵;卜仁强;颜孝贞;束友叶;韦仁淑;欧阳被羽;吉凡;家礼环;舒孝时;谢爽;郁学;冶宗环;奚易融;魏玉姣;邴策;刁义萍;滕玉功;高真;顾礼辉;左易辉;宗有;秦笑峰;空亓海;祖先;丁世;尚心;鲍芬;山易芳;路贝璧;詹中淑;唐亮;解巧;谢笑红;荣凯红;冉九学;傅忠才;游歌承;郎功;孙仲易楠;子颛榕;公良歌毓;干巧;包都萍;吉歌进;张贝宜;吉电博;骆滢;齐九辰;公榕;林娜;石萍;南宫贝秀;武忠露;林金发;危智星;路岩;凤加先;红器良;车瑗;周仁才;万笑时;司行;蔡钰功;台公无志;戈凯翰;郁易元;熊平";
//未中奖人员名单
var remainPerson = allPerson.toString().split(";");
//中奖人员名单
var luckyMan = [];
var luckyManOne = [];
var luckyManTwo = [];
var luckyManThree = [];
var luckyManPart = [];
var timer;//定时器
var times = 1;//抽奖次数,如果不是第一次，不加粗显示领导姓名
$(function () {
    iconAnimation();
    //开始抽奖

    //抽一等奖
    $("#btnStart").on("click", function () {
        $("#btnStartTwo").text("二等奖");
        $("#btnStartThree").text("三等奖");
        $("#btnStartPart").text("参与奖");
        //判断是开始还是结束
        if ($("#btnStart").text() === "一等奖"){
            $("#result").fadeOut();
            $("#luckyDrawing").fadeOut();
            $("#btnStart").text("开始");
        }
        else if ($("#btnStart").text() === "开始") {
            // if (!$("#txtNum").val()) {
            //     showDialog("请输入中奖人数");
            //     return false;
            // }
            // if ($("#txtNum").val() > 49) {
            //     showDialog("一次最多只能输入49人");
            //     return false;
            // }
            if (1 > remainPerson.length) {
                showDialog("当前抽奖人数大于奖池总人数<br>当前抽奖人数：1人,奖池人数：<b>" + remainPerson.length + "</b>人");
                return false;
            }
            $("#result").fadeOut();
            //显示动画框，隐藏中奖框
            $("#luckyDrawing").show().next().addClass("hide");
            move();
            $("#btnStart").text("停止");
            $("#bgLuckyDrawEnd").removeClass("bg");
        }
        else {
            $("#btnStart").text("开始");//设置按钮文本为开始
            // var luckyDrawNum = $("#txtNum").val();
            var luckyDrawNum = 1;
            startLuckDraw(luckyDrawNum, 1);//抽奖开始

            $("#luckyDrawing").fadeOut();
            clearInterval(timer);//停止输入框动画展示
            $("#luckyDrawing").val(luckyMan[luckyMan.length - 1]);//输入框显示最后一个中奖名字
            $("#result").fadeIn().find("div").removeClass().addClass("p" + luckyDrawNum);//隐藏输入框，显示中奖框
            $("#bgLuckyDrawEnd").addClass("bg");//添加中奖背景光辉
            // $("#txtNum").attr("placeholder", "输入中奖人数(" + remainPerson.length + ")");
        }
    });


    //抽二等奖
    $("#btnStartTwo").on("click", function () {
        $("#btnStart").text("一等奖");
        $("#btnStartThree").text("三等奖");
        $("#btnStartPart").text("参与奖");
        //判断是开始还是结束
        if ($("#btnStartTwo").text() === "二等奖"){
            $("#result").fadeOut();
            $("#luckyDrawing").fadeOut();
            $("#btnStartTwo").text("开始");
        }
        else if ($("#btnStartTwo").text() === "开始") {
            if (2 > remainPerson.length) {
                showDialog("当前抽奖人数大于奖池总人数<br>当前抽奖人数：2人,奖池人数：<b>" + remainPerson.length + "</b>人");
                return false;
            }
            $("#result").fadeOut();
            //显示动画框，隐藏中奖框
            $("#luckyDrawing").show().next().addClass("hide");
            move();
            $("#btnStartTwo").text("停止");
            $("#bgLuckyDrawEnd").removeClass("bg");
        }
        else {
            $("#btnStartTwo").text("开始");//设置按钮文本为开始
            var luckyDrawNum = 2;
            startLuckDraw(luckyDrawNum, 2);//抽奖开始

            $("#luckyDrawing").fadeOut();
            clearInterval(timer);//停止输入框动画展示
            $("#luckyDrawing").val(luckyMan[luckyMan.length - 1]);//输入框显示最后一个中奖名字
            $("#result").fadeIn().find("div").removeClass().addClass("p" + luckyDrawNum);//隐藏输入框，显示中奖框
            $("#bgLuckyDrawEnd").addClass("bg");//添加中奖背景光辉
        }
    });


    //抽三等奖
    $("#btnStartThree").on("click", function () {
        $("#btnStart").text("一等奖");
        $("#btnStartTwo").text("二等奖");
        $("#btnStartPart").text("参与奖");
        //判断是开始还是结束
        if ($("#btnStartThree").text() === "三等奖"){
            $("#result").fadeOut();
            $("#luckyDrawing").fadeOut();
            $("#btnStartThree").text("开始");
        }
        else if ($("#btnStartThree").text() === "开始") {
            if (3 > remainPerson.length) {
                showDialog("当前抽奖人数大于奖池总人数<br>当前抽奖人数：3人,奖池人数：<b>" + remainPerson.length + "</b>人");
                return false;
            }
            $("#result").fadeOut();
            //显示动画框，隐藏中奖框
            $("#luckyDrawing").show().next().addClass("hide");
            move();
            $("#btnStartThree").text("停止");
            $("#bgLuckyDrawEnd").removeClass("bg");
        }
        else {
            $("#btnStartThree").text("开始");//设置按钮文本为开始
            var luckyDrawNum = 3;
            startLuckDraw(luckyDrawNum, 3);//抽奖开始

            $("#luckyDrawing").fadeOut();
            clearInterval(timer);//停止输入框动画展示
            $("#luckyDrawing").val(luckyMan[luckyMan.length - 1]);//输入框显示最后一个中奖名字
            $("#result").fadeIn().find("div").removeClass().addClass("p" + luckyDrawNum);//隐藏输入框，显示中奖框
            $("#bgLuckyDrawEnd").addClass("bg");//添加中奖背景光辉
        }
    });


    //抽参与奖
    $("#btnStartPart").on("click", function () {
        $("#btnStart").text("一等奖");
        $("#btnStartTwo").text("二等奖");
        $("#btnStartThree").text("三等奖");
        //判断是开始还是结束
        if ($("#btnStartPart").text() === "参与奖"){
            $("#result").fadeOut();
            $("#luckyDrawing").fadeOut();
            $("#btnStartPart").text("开始");
        }
        else if ($("#btnStartPart").text() === "开始") {
            if (6 > remainPerson.length) {
                showDialog("当前抽奖人数大于奖池总人数<br>当前抽奖人数：6人,奖池人数：<b>" + remainPerson.length + "</b>人");
                return false;
            }
            $("#result").fadeOut();
            //显示动画框，隐藏中奖框
            $("#luckyDrawing").show().next().addClass("hide");
            move();
            $("#btnStartPart").text("停止");
            $("#bgLuckyDrawEnd").removeClass("bg");
        }
        else {
            $("#btnStartPart").text("开始");//设置按钮文本为开始
            var luckyDrawNum = 6;
            startLuckDraw(luckyDrawNum, 4);//抽奖开始

            $("#luckyDrawing").fadeOut();
            clearInterval(timer);//停止输入框动画展示
            $("#luckyDrawing").val(luckyMan[luckyMan.length - 1]);//输入框显示最后一个中奖名字
            $("#result").fadeIn().find("div").removeClass().addClass("p" + luckyDrawNum);//隐藏输入框，显示中奖框
            $("#bgLuckyDrawEnd").addClass("bg");//添加中奖背景光辉
            // $("#txtNum").attr("placeholder", "输入中奖人数(" + remainPerson.length + ")");
        }
    });
	
	
	$("#btnStartWin").on("click", function () {
		showDialog("<p>中奖人</p><p>一等奖：" + luckyManOne + "</p><p>二等奖：" + luckyManTwo + "</p><p>三等奖：" + luckyManThree + "</p><p>参与奖：" + luckyManPart + "</p>");
	});


    $("#btnReset").on("click", function () {
        //确认重置对话框
        var confirmReset = false;
        showConfirm("确认重置吗？所有已中奖的人会重新回到抽奖池！", function () {
            //重置未中奖人员名单
            remainPerson = allPerson.toString().split(";");
			luckyManOne.length = 0;
			luckyManTwo.length = 0;
			luckyManThree.length = 0;
			luckyManPart.length = 0;
            //中奖人数框置空
            // $("#txtNum").val("").attr("placeholder", "请输入中奖人数");
            $("#showName").val("");
            //隐藏中奖名单,然后显示抽奖框
            $("#result").fadeOut();//.prev().fadeIn()
            $("#bgLuckyDrawEnd").removeClass("bg");//移除背景光辉
            times++;
            console.log(times);


        });
    });
});

//抽奖主程序
function startLuckDraw(luckyDrawNum, type) {
    //抽奖人数
    // var luckyDrawNum = $("#txtNum").val();
    if (luckyDrawNum > remainPerson.length) {
        alert("抽奖人数大于奖池人数！请修改人数。或者点重置开始将新一轮抽奖！");
        return false;
    }
    //随机中奖人
    var randomPerson = getRandomArrayElements(remainPerson, luckyDrawNum);
    var tempHtml = "";
    $.each(randomPerson, function (i, person) {
        var sizeStyle = "";
        if (person.length > 3) {
            sizeStyle = " style=font-size:" + 3 / person.length + "em";
        }
//      if (leaderArr.indexOf(person) > -1 && times == 1) {
//          tempHtml += "<span><span " + sizeStyle + "><b>" + person + "</b></span></span>";
//      }
//      else {
//          tempHtml += "<span><span " + sizeStyle + ">" + person + "</span></span>";
//      }
		tempHtml += "<span><span " + sizeStyle + ">" + person + "</span></span>";
    });
    $("#result>div").html(tempHtml);
    //剩余人数剔除已中奖名单
    remainPerson = remainPerson.delete(randomPerson);
    //中奖人员
    luckyMan = luckyMan.concat(randomPerson);
    //设置抽奖人数框数字为空
    // $("#txtNum").val("");
	if (type == 1){
		remainPerson = remainPerson.concat(luckyManOne);
		luckyManOne = randomPerson;
	}
	else if (type == 2){
		remainPerson = remainPerson.concat(luckyManTwo);
		luckyManTwo = randomPerson;
	}
	else if (type == 3){
		remainPerson = remainPerson.concat(luckyManThree);
		luckyManThree = randomPerson;
	}
	else{
		remainPerson = remainPerson.concat(luckyManPart);
		luckyManPart = randomPerson;
	}
}

//跳动的数字
function move() {
    var $showName = $("#showName"); //显示内容的input的ID
    var interTime = 30;//设置间隔时间
    timer = setInterval(function () {
        var i = GetRandomNum(0, remainPerson.length);
        $showName.val(remainPerson[i]);//输入框赋值
    }, interTime);
}

//顶上的小图标，随机动画
function iconAnimation() {
    var interTime = 200;//设置间隔时间
    var $icon = $("#iconDiv>span");
    var arrAnimatoin = ["bounce", "flash", "pulse", "rubberBand", "shake", "swing", "wobble", "tada"];
    var timer2 = setInterval(function () {
        var i = GetRandomNum(0, $icon.length);
        var j = GetRandomNum(0, arrAnimatoin.length);
        //console.log("i:" + i + ",j:" + j);
        $($icon[i]).removeClass().stop().addClass("animated " + arrAnimatoin[j]);//输入框赋值
    }, interTime);

}
