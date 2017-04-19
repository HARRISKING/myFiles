//点击隐藏
// $(".details").tap(function() {
//   //  $(".two, .three, .four, .five").show("slow");
//   //  $(".transparent_1").addClass("line-btm");
//   //  $(".detail").hide();
// 	// $(this).parents("li").siblings("li").show("slow");
// 	$(this).parents("ul").addClass("line-btm");
// 	$(this).parents("ul").children("li[class=two]").show();
//   // $(this).siblings(".smalls").children("span[class=detail]").hide();
//   $(this).siblings(".smalls").children("span[class=detail]").siblings(".small").show();
//
//   // $(".detail").hide();
// 	// $(".detail").siblings(".small").show();
// });


$(".smalls").on('click',function() {


  if(!$(this).closest('ul').hasClass('line-btm')){

    $(this).closest('ul').addClass("line-btm");
    $(this).closest('ul').children("li[class=two]").show();
    $(this).children("img[class=small]").show();

    // $(this).siblings(".smalls").children("span[class=detail]").hide();
    // $(this).show();

  }else{
    $(this).closest('ul').children("li[class=two]").hide();
    $(this).children("img[class=small]").hide();

    // $(this).children(".detail").show();
    $(this).closest('ul').removeClass("line-btm");

  }
    //$(".two, .three, .four, .five").hide();
    //$(".transparent_1").removeClass("line-btm");
    //$(".detail").show();
	/*$(this).parents("ul").children("li").hide();
	$(this).parents("ul").removeClass("line-btm");
	$(this).parents("ul").children("li").eq(0).show();
	$(this).parents("ul").children("li").eq(0).children("p").children("span[class=detail]").show();*/
});

//调整数字位置
  var width = document.body.clientWidth * 0.8;
  var left = width / 2;
  var flipper = document.querySelector(".flipper").style;
  flipper.top = (left - 2.2 * 16 / 2) + "px";
  flipper.left = (left - 2.2 * 16) + "px";

//调整检测得分文字
  var goalText = document.querySelector(".goalText").style;
  goalText.top = (left + 2.2 * 16 / 2 + 0.8 * 16 / 2) + "px";
  goalText.left = (left - 0.8 * 16 * 2) + "px";

//修改数字
  var goal = 95; //结束数字
  var speed = 25; //速度
  var chance = 0.7;
  var count = 0;
  var ten = 0;

  function setGoal(aa){
  	console.log('分数是：'+aa);
  	aa=aa>99?99:aa;
  	goal=aa;
  	console.log('分数是：'+aa);
    console.log(goal);
  	secondPoint(goal);
  	convert();
  }

  function convert() {
      if ((ten * 10 + count) == goal) {
          changeBackground(count);
          clearTimeout(endCount)
          if(goal >= 99){
            changeBackground3(count);
          }
      } else {
          var seed = Math.random();

          if (seed <= chance) {
              changeBackground(count);
          }
          count++;
          if (speed >= 150) {
              speed += 50;
          }
          if (count == 10) {
              count = 0;
              if (++ten < 10) {
                  changeBackground2(ten);
                  changeBackground(0);
              };
          }
          if (goal - (ten * 10 + count) == 3) {
              speed = 150;
              chance = 1;
          }

          // 在这里做手脚


          endCount = setTimeout(convert, speed);
      }
  }

function changeBackground(num) {
    document.querySelector(".front2").style.backgroundImage = "url(./img/check/" + num + ".png)";
}

function changeBackground2(num) {
    document.querySelector(".front1").style.backgroundImage = "url(./img/check/" + num + ".png)";
}

function changeBackground3(num) {
    document.querySelector(".front1").style.backgroundImage = "url(./img/check/" + num*100 + ".png)";
    document.querySelector(".front2").style.backgroundImage = "url(./img/check/" + num*100 + ".png)";
    document.querySelector(".flipper").style.backgroundImage = "url(./img/check/number100－2.png)";
    document.querySelector(".flipper").style.backgroundSize = "width:135px;height:70px";

}

//调整旋转中心到圆心
var pointer = document.querySelector(".pointer").style;
pointer.top = width * 0.67 + "px";
pointer.left = (width * 0.5 - width * 0.02) + "px";
pointer.transformOrigin = "50% -" + width * 0.17 + "px";
pointer.webkitTransformOriginX = "50%";
pointer.webkitTransformOriginY = "-" + width * 0.17 + "px";

//修改秒针
function secondPoint(goal1) {
    var goalDeg = 0;
    var goalTime = 0;
    goalDeg = (goal1 / 100) * 300;
    goalTime = (goal1 - 3) / 40 + 1;
    pointer.webkitAnimationDuration = goalTime + "s";
    var rule = "@-webkit-keyframes action {from{-webkit-transform: rotate(0deg);}to{-webkit-transform: rotate(" + goalDeg + "deg);}}";
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '';
    document.getElementsByTagName('head')[0].appendChild(style);
    this.stylesheet = document.styleSheets[document.styleSheets.length - 1];
    this.stylesheet.insertRule(rule, this.stylesheet.rules.length);
    $('.pointer').addClass("action");
}

//secondPoint(goal);
//convert();
