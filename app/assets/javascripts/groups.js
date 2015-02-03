function loadGroups() {
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

function showGroupPage(group) {
  // var id = group.data("id");
  // $.ajax({
  //   type:"get",
  //   url:"/groups/"+id
  // }).done(function (data) {
  //   $("#new-group-form").show();
  //   $('#new-group-form input[name="name"]').val(data.name);
  //   $('#new-group-form textarea[name="description"]').val(data.description);
  // }).fail(function (data) {
  //   throw "failed to load (edit) info";
  // });
}

function newGroupPage() {
  $("#new-group-form").show();
  $("#new-group-action").addClass("active-link");
  createGroup();

}

function cancelGroupPage() {
  $("#new-group-form").hide();
  $("#new-group-action").removeClass("active-link");
  $('#new-group-form .form-control').val("");
}


function editGroupPage(selectedGroup) {
  var id = selectedGroup.parent().data("id");
  $.ajax({
    type:"get",
    url:"/groups/"+id
  }).done(function (data) {
    $("#new-group-form").show();
    $('#new-group-form input[name="name"]').val(data.name);
    $('#new-group-form textarea[name="description"]').val(data.description);
    console.log(data)

  }).fail(function (data) {
    throw "failed to load (edit) info";
  });
}


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

    }).fail(function (data) {
      console.log("not saved");
    });
  });

  $("#more-members").on("click", function (e) {
    $("#member-list").append(
      '<div class="form-group">'+
        '<input type="text" placeholder="New Member" class="form-control" name="member-id">'+
      '</div>'
    );
  });

}
