function newMap(group) {
  // console.log("clicked input[name='new-map']");
  $("#map .new input[name='map_submit']").off('.addMap');
  $("#map .new input[name='map_submit']").on("click.addMap", function () {
    var data = new FormData();
    data.append("file", $("#map > .new > input[name='map_file']")[0].files[0]);
    data.append("title", $("#map > .new > input[name='map_title']").val());
    data.append("group_id", group.id);

    $.ajax({
      type: "post",
      url:"/uploadmaps",
      contentType: false,
      processData: false,
      data: data
    }).done(function function_name(data) {
      $("#map > .new > input[name='map_file']").val("");
      $("#map > .new > input[name='map_title']").val("");
      $('.screen.active').removeClass('active');
      $('#map .index').addClass('active');
      indexMaps(group);
    }).fail(function () {
      throw "could not save map";
    });
  });
}
