function loadGroups() {
  $.get("/groups").done(function (data) {
    for (var i = 0; i < data.length; i++) {
      $("#panel-group-list").append("<a href='#' class='list-group-item' data-id='"+ data[i].id +"'>"+ data[i].name +"</a>");
    }
  }).fail(function () {
    throw "failed to load groups list";
  });
}

function showGroupPage(group) {
  console.log(group.data("id"));
}
