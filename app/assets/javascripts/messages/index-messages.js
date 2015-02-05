function indexMessages(group) {
  var groupId = group.id;
  $.ajax({
    type:"get",
    url:"/messages",
    data: {group_id:groupId}
  }).done(function (data) {
    $(".group-name").text(group.name);
    $(".group-messages").empty();

    loadMessaged(data);

  }).fail(function () {
    throw("failed to load messages(index)");
  });
}

function loadMessaged(data) {
  $("#index-message-group .group-messages").empty();
  for (var i = 0; i < data.length; i++) {
    var message = $("<div class='message-item panel panel-default'></div>");
    $("#index-message-group .group-messages").append(message);
    message.append(
      "<div class='message-title panel-heading'>"+
        data[i].subject +
        "<span class='pull-right'>"+ data[i].created_at + "</span>"+
      "</div>"
    );
    message.append("<div class='message-body panel-body'>"+ data[i].body +"</div>");
  }
}
