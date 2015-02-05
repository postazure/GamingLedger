function newGroupPage() {
  $("#cancel_create_group").on("click", function () {
    resetGroupForm();
    $('.screen.active').removeClass('active');
  });

  $("#update_group").hide();
  $("#create_group").show();
  $('#new-group-form input[name="name"]').val("");
  $('#new-group-form textarea[name="description"]').val("");
  $("#new-group-action").addClass("active-link");
  createGroup();
}
