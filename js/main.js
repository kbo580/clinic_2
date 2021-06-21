$(function(){

  // スマホ用固定ヘッダーを隠してスクロールで出す
  $('#sp_fixed_nav').hide();
  
  $(window).scroll(function(){
    if($(this).scrollTop()>105){
      $('#sp_fixed_nav').fadeIn();
    }else{
      $('#sp_fixed_nav').fadeOut(200);
    }
  });
  

  $(".show").click(function () {
    $("#modal").toggleClass('active');
    $("#modal").toggleClass('modalactive');
    $("html,body").css("overflow", "hidden");
  });
  $("#close").click(function () {
    $("#modal").toggleClass('active');
    $("#modal").toggleClass('modalactive');
    $('body,html').css('overflow', 'visible');
  });

  $("#modal a").click(function () {
      $(".show").removeClass('active');
      $("#modal").removeClass('modalactive');
      $('body,html').css('overflow', 'visible');
  });

  $('#modal').click(function(){
  // モーダルが出ている時に画面をクリックすると
    $("#modal a").click();
  // 閉じるボタンを押した時のイベントが起こる
  });










});

