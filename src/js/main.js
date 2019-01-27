$(window).on('load', function () {
  $('.select__head').on('click', function () {
    $(this).siblings('.select__drop').toggleClass('open');
    $(this).toggleClass('open');
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
