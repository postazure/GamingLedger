function cancelMessageForm() {
  $('.screen.active').removeClass('active');
  $('input[name="subject"]').val("");
  $('textarea[name="message-body"]').val("");
  $('#index-message-group').addClass('active'); //return to message index
}
