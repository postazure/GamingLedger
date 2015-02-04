function editGroupPage(selectedGroup) {
  $("#update_group").show();
  $("#create_group").hide();
  var id = selectedGroup.parent().data("id");
  $.ajax({
    type:"get",
    url:"/groups/"+id
  }).done(function (data) {
    var members = data[1];
    var group = data[0];

    $('#new-group-form input[name="name"]').val(group.name);
    $('#new-group-form textarea[name="description"]').val(group.description);

    for (var i = 0; i < members.length; i++) {
      $("#form-member-list").addClass("list-group");

      var memberItem;
      if (members[i].id === group.owner_id) {
        memberItem = $(
          "<div class='list-group-item' data-id='"+ members[i].id +"'>"+
            "<strong> Owner </strong> "+ members[i].email +
          "</div>");
      }else {
        memberItem = $(
          "<div class='list-group-item' data-id='"+ members[i].id +"'>"+
            members[i].email +
            "<a class='remove-group-member pull-right'>Remove from Group</a>"+
          "</div>"
      );
      }
      $("#new-group-form #form-member-list").empty();
      $("#new-group-form #form-member-list").append( memberItem );
    }
  }).fail(function (data) {
    throw "failed to load (edit) info";
  });

  updateGroup(selectedGroup);
}
