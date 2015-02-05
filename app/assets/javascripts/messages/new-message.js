function newMessage(group) {
  $("input[name='send-message-action']").on("click", function () {
    var groupId = group.id;

    $.ajax({
      type:"post",
      url: "/messages",
      data:{
        message: {
          subject: $('input[name="subject"]').val(),
          body: $('textarea[name="message-body"]').val()
        },
        group_id: groupId
      }
    }).done(function (data) {
      $('.screen.active').removeClass('active');
      $('#index-message-group').addClass('active');
      $('input[name="subject"]').val("");
      $('textarea[name="message-body"]').val("");
      indexMessages(group);

    }).fail(function () {
      throw("failed to post message(new)");
    });

  });
}
