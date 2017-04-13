$(document).ready(function() {
  $("#navnav a[href]").each(function() {
    if ((window.location.pathname).indexOf($(this).attr("href"))==0) {
      $(this).attr("class", "list-group-item active");
    }
    if($("#roletype").val()==1)
    {
    if ((window.location.pathname).indexOf("/customers/")>=0 && $(this).attr("href").indexOf("/customers")>=0) {
      $(this).attr("class", "list-group-item active");
    }
    if ((window.location.pathname).indexOf("/users/")>=0 && $(this).attr("href").indexOf("/users")>=0) {
      $(this).attr("class", "list-group-item active");
    }
    if ((window.location.pathname).indexOf("/services/")>=0 && $(this).attr("href").indexOf("/services")>=0) {
      $(this).attr("class", "list-group-item active");
    }
    if ((window.location.pathname).indexOf("/serviceorders/")>=0 && $(this).attr("href").indexOf("/serviceorders")>=0) {
      $(this).attr("class", "list-group-item active");
    }
    if ((window.location.pathname).indexOf("/finances/")>=0 && $(this).attr("href").indexOf("/finances")>=0) {
      $(this).attr("class", "list-group-item active");
    }
    if ((window.location.pathname).indexOf("/orders/")>=0 && $(this).attr("href").indexOf("/orders")>=0) {
      $(this).attr("class", "list-group-item active");
    }
    if ((window.location.pathname).indexOf("/products/")>=0 && $(this).attr("href").indexOf("/products")>=0) {
      $(this).attr("class", "list-group-item active");
    }
    if ((window.location.pathname).indexOf("/services/")>=0 && $(this).attr("href").indexOf("/services")>=0) {
      $(this).attr("class", "list-group-item active");
    }
    if ((window.location.pathname).indexOf("/packages/")>=0 && $(this).attr("href").indexOf("/packages")>=0) {
      $(this).attr("class", "list-group-item active");
    }
    }
    if ((window.location.pathname).indexOf("/balance/")>=0 && $(this).attr("href").indexOf("/balance/")>=0) {
      $(this).attr("class", "list-group-item active");
    }
  })
});

$('.dropdown').hover(function(){
  $('.dropdown').removeClass('open');
  $(this).addClass('open');
});
$('.dropdown').mouseleave(function(){
  $('.dropdown').removeClass('open');
});

function opendeleteserviceModal(code) {
  $('#deleteservicecode').val(code);
  $('#deleteserviceModal').modal();
}
//删除户型
function deleteservice() {
  window.location.href = "/services/"
      + $('#deleteservicecode').val() + "/delete";
}

$('.nav-pills li').on('click',function(){
  $('.nav-pills li').removeClass('active');
  $(this).addClass('active');
})
