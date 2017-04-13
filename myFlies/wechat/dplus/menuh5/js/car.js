
    function overTurn(){
    var over;
    var childNode = $('.flip');
    var childNum = childNode.length;
    console.log(childNum);
    over = setInterval(turn, 3000);

    var animate="";
    var idx = Math.floor(Math.random()*2);
    if(idx ==0){
      animate="animate1";
    }else if(idx==1){
      animate="animate2";
    };
    function turn(){
      var num = Math.floor(Math.random()*childNum);
      childNode.removeClass(animate);
      childNode.eq(num).addClass(animate);
    };
    function stopOverTurn(){
      clearInterval(over);
    }
    };
    overTurn();
