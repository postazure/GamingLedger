function updateGroup(selectedGroup) {
  var id = selectedGroup.parent().data("id");
  $("#update_group").on("click", function (e) {
    var members = [];
    var memberEmails = $('#new-group-form input[name="member-id"]');
    for (var i = 0; i < memberEmails.length; i++) {
      members.push($(memberEmails[i]).val());
    }

    $.ajax({
      type: "patch",
      url: "/groups/"+id,
      data: {
        group:{
          name: $('#new-group-form input[name="name"]').val(),
          description: $('#new-group-form textarea[name="description"]').val()
        },
        members: members
      }
    }).done(function (data) {
      loadGroups();
      resetGroupForm();

    }).fail(function (data) {
      console.log("not updated");
    });
  });

  $("#more-members").on("click", function (e) {
    $("#form-member-list").append(
      '<div class="form-group">'+
        '<input type="text" placeholder="New Member" class="form-control" name="member-id">'+
      '</div>'
    );
  });
}
