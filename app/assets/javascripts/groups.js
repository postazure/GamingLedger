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
  closeStages();
  $("#show-group").show();

  var id = group.data("id");
  $.ajax({
    type:"get",
    url:"/groups/"+id
  }).done(function (data) {
    group = data[0];
    members = data[1];
    $("#show-group #name")[0].innerText = group.name;
    $('#show-group #description')[0].innerText = group.description;

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

function newGroupPage() {
  closeStages();
  $("#new-group-form").show();
  $("#new-group-action").addClass("active-link");
  createGroup();

}

function editGroupPage(selectedGroup) {
  closeStages();

  var id = selectedGroup.parent().data("id");
  $.ajax({
    type:"get",
    url:"/groups/"+id
  }).done(function (data) {
    var members = data[1];
    var group = data[0];
    $("#new-group-form").show();
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
      $("#new-group-form #form-member-list").append( memberItem );
    }
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
    $("#form-member-list").append(
      '<div class="form-group">'+
        '<input type="text" placeholder="New Member" class="form-control" name="member-id">'+
      '</div>'
    );
  });
}
