function closeStages() {
  closeNewGroupForm();
  closeShowGroup();
}

function closeShowGroup() {
  $("#show-group").hide();
  $("#group-member-list").empty("");
  $("#form-member-list").removeClass("list-group");
  $("#form-member-list").empty("");
}

function closeNewGroupForm() {
  $("#new-group-form").hide();
  $("#new-group-action").removeClass("active-link");
}
