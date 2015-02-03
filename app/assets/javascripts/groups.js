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

function newGroupPage() {
  $("#new-group-form").show();
  $("#new-group-action").addClass("active-link");


  $("#create_group").on("click", function (e) {
    $.ajax({
      type: "post",
      url: "/groups",
      data: {
        group:{
          name: $('#new-group-form input[name="name"]').val(),
          description: $('#new-group-form textarea[name="description"]').val()
        }
      }
    }).done(function (data) {
      $('#new-group-form .form-control').val("");
      $("#panel-group-list").append("<a href='#' class='list-group-item' data-id='"+ data.id +"'>"+ data.name +"</a>");
    }).fail(function (data) {
      console.log("not saved");
    });
  });

  $("#more-members").on("click", function (e) {
    $("#member-list").append(
      '<div class="form-group">'+
        '<input type="text" placeholder="New Member" class="form-control">'+
      '</div>'
    );
  });
}

function cancelGroupPage() {
  $("#new-group-form").hide();
  $("#new-group-action").removeClass("active-link");
  $('#new-group-form .form-control').val("");
}
