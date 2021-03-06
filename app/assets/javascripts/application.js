// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require bootstrap-sprockets


$('document').ready(function () {
  init();

  // Groups
  $("#panel-group-list").on("click",".list-group-item", function () {
    $('.screen.active').removeClass('active');
    $('#show-group').addClass('active');
    showGroupPage($(this));
  });

  $("#new-group-action").on("click", function () {
    $('.screen.active').removeClass('active');
    $('#new-group-form').addClass('active');
    newGroupPage();
  });

  $("#panel-group-list").on("click",".edit-group-action", function () {
    $('.screen.active').removeClass('active');
    $('#new-group-form').addClass('active');
    editGroupPage($(this));
    return false;
  });

  $("#full-stage").on("click", ".remove-group-member", function () {
    removeGroupMember($(this));
  });

  // Messages
  $('input[name="go-to-messages"]').on("click", function () {
    $('.screen.active').removeClass('active');
    $('#index-message-group').addClass('active');
    indexMessages($(this).data("group"));
  });

  $('input[name="new-message"]').on("click", function () {
    $('.screen.active').removeClass('active');
    $('#new-message-group').addClass('active');
    $("#new-message-group > .group-name").text($(this).data("group").name);
    newMessage($(this).data("group"));
  });

  //Maps
  $("input[name='go-to-maps']").on("click", function () {
    $('.screen.active').removeClass('active');
    $('#map .index').addClass('active');
    indexMaps($(this).data("group"));
  });
});
