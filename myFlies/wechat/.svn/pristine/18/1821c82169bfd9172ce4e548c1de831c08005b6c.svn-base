

$('.star').addClass('stars');
$('.star-bg a').on('click',function(){
  var idx = $('.star').index($(this));
  $('.star').removeClass('stars');
  for(var i=0; i<=idx; i++){
    $('.star').eq(i).addClass('stars');
  }
  if(idx===0){
    $('.assess').text('（差）');
  }else if(idx===1){
    $('.assess').text('（较差）');
  }else if(idx===2){
    $('.assess').text('（良）');
  }else if(idx===3){
    $('.assess').text('（好）');
  }else if(idx===4){
    $('.assess').text('（优秀）');
  };

});


  $('.button').on('click',function(){
  window.location.href = "./app_confirm3.html";
})
