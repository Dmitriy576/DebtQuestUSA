(function() {
  $(document).ready(function () {
    var debtAmount = $('#debtAmount .select__head');
    var debtAmountDrop = $('#debtAmount .select__drop');

    debtAmount.on('click', function () {
      $(this).siblings('.select__drop').toggleClass('open');
      $(this).toggleClass('open');
    });
    var selectDropItems = $('#debtAmount .select__drop .item');
    selectDropItems.on('click', function (){
      selectDropItems.removeClass('active');
      $(this).addClass('active');
      console.log($(this).text());
      var rep_text = $(this).text();
      $('#debtAmount .inner-text.inner-text').text(rep_text);
      debtAmount.toggleClass('open');
      debtAmountDrop.toggleClass('open');
    });
    //
    var paymentsStatus = $('#paymentsStatus .select__head');
    var paymentsStatusDrop = $('#paymentsStatus .select__drop');

    paymentsStatus.on('click', function () {
      $(this).siblings('.select__drop').toggleClass('open');
      $(this).toggleClass('open');
    });
    var payDropItems = $('#paymentsStatus .select__drop .item');
    payDropItems.on('click', function (){
      payDropItems.removeClass('active');
      $(this).addClass('active');
      console.log($(this).text());
      var rep_text = $(this).text();
      $('#paymentsStatus .inner-text.inner-text').text(rep_text);
      paymentsStatus.toggleClass('open');
      paymentsStatusDrop.toggleClass('open');
    });
    //
    var debtSelect = $('#debtSelect .select__head');
    var debtSelectDrop = $('#debtSelect .select__drop');
    debtSelect.on('click', function () {
      $(this).siblings('.select__drop').toggleClass('open');
      $(this).toggleClass('open');
    });
    var debtSelectItems = $('#debtSelect .select__drop .item');
    debtSelectItems.on('click', function (){
      debtSelectItems.removeClass('active');
      $(this).addClass('active');
      console.log($(this).text());
      var rep_text = $(this).text();
      $('#debtSelect .inner-text.inner-text').text(rep_text);
      debtSelect.toggleClass('open');
      debtSelectDrop.toggleClass('open');
    });
  });

  $(document).click(function () {
    var selectHead = $('.select__head');
    var selectDrop = $('.select__drop');
    if (!$(event.target).closest('.select').length) {
      selectHead.removeClass('open');
      selectDrop.removeClass('open');
    }
  });

  let playVideo = false;
  $('.play').click(function () {
    if (!playVideo) {
      $('.video-banner video').trigger('play');
    } else {
      $('.video-banner video').trigger('pause');
    }
    playVideo = !playVideo;
  });

  $('.hide-desc').click(function () {
    $('.hide-tablet').slideToggle();
  });

  let nav = $('.nav');
  $('.menu-button').click(function () {

    nav.toggleClass('open');
    $('.burger').toggleClass('open');
    $('body').toggleClass('fixed');
  });

  $(window).on('resize', function () {
    console.log(document.body.offsetWidth);
    if (document.body.offsetWidth <= 768) {
      nav.css({
        'height': window.innerHeight + 'px'
      });
    }
  }).trigger('resize');

  $(window).on('orientationchange', function () {
    if (document.body.offsetWidth <= 768) {
      nav.css({
        'height': window.innerHeight + 'px'
      });
    }
  }).trigger('orientationchange');
  $('.sub-nav-tablet').click(function () {
    $(this).toggleClass('active');
    $(this).parent().siblings('.drop__block').toggleClass('open');
  });

  $('.play-video').fancybox({
    type: 'inline'
  });
  // play-video-popup
  $(document).ready(function () {
    let playVideo = false;
    $('.video-modal video').click(function () {
      if (!playVideo) {
        $('.video-modal video').trigger('play');
      } else {
        $('.video-modal video').trigger('pause');
      }
      playVideo = !playVideo;
    });
  });
})();


