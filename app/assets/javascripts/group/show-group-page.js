function showGroupPage(group) {
  var id = group.data("id");
  $.ajax({
    type:"get",
    url:"/groups/"+id
  }).done(function (data) {
    group = data[0];
    members = data[1];
    $("#show-group #name")[0].innerText = group.name;
    $('#show-group #description')[0].innerText = group.description;

    $("#show-group #group-member-list").empty();
    for (var i = 0; i < members.length; i++) {
      $("#show-group #group-member-list").append("<li>"+ members[i].email +"</li>");
      if (group.owner_id === members[i].id) {
        $('#show-group #owner')[0].innerText = members[i].email;
      }
    }
  }).fail(function (data) {
    throw "failed to load (edit) info";
  });
}
