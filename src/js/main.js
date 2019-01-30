(function() {
  $(document).ready(function () {
    var debtAmount = $('#debtAmount .select__head');
    var debtAmountDrop = $('#debtAmount .select__drop');
    var paymentsStatus = $('#paymentsStatus .select__head');
    var paymentsStatusDrop = $('#paymentsStatus .select__drop');

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
  });




  $(document).click(function () {
    var selectHead = $('#debtAmount .select__head');
    var selectDrop = $('#debtAmount .select__drop');
    if (!$(event.target).closest('.select').length) {
      selectHead.removeClass('open');
      selectDrop.removeClass('open');
    }
  });
})();


