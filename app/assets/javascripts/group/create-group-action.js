function createGroup() {
  $("#create_group").on("click", function (e) {
    var members = [];
    var memberEmails = $('#new-group-form input[name="member-id"]');
    for (var i = 0; i < memberEmails.length; i++) {
      members.push($(memberEmails[i]).val());
    }

    $.ajax({
      type: "post",
      url: "/groups",
      data: {
        group:{
          name: $('#new-group-form input[name="name"]').val(),
          description: $('#new-group-form textarea[name="description"]').val()
        },
        members: members
      }
    }).done(function (data) {
      $("#panel-group-list").append(
        "<a href='#' class='list-group-item' data-id='"+ data.id +"'>"+
        "<span class='edit-group-action glyphicon glyphicon-pencil' aria-hidden='true'></span>"+ data.name +"</a>"
      );
      resetGroupForm();
    }).fail(function (data) {
      console.log("not saved");
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
