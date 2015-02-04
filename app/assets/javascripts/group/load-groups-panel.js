function loadGroups() {
  $("#panel-group-list").empty();
  $.get("/groups").done(function (data) {
    for (var i = 0; i < data.length; i++) {
      $("#panel-group-list").append(
        "<a href='#' class='list-group-item' data-id='"+ data[i].id +"'>"+
        "<span class='edit-group-action glyphicon glyphicon-pencil' aria-hidden='true'></span>"+ data[i].name +"</a>"
      );
    }
  }).fail(function () {
    throw "failed to load groups list";
  });
}
