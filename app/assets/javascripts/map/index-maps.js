function indexMaps(group) {
  $.ajax({
    type: "get",
    url: "/maps",
    data: {group_id: group.id}
  }).done(function (data) {
    console.log(data);
    $(".map-list").empty();
    for (var i = 0; i < data.length; i++) {
      $(".map-list").append(
          "<li data-id="+ data[i].id +">"+ data[i].title +"</li>"
      );
    }
  });


  $("input[name='new-map']").on("click", function () {
    $('.screen.active').removeClass('active');
    $('#map .new').addClass('active');
    newMap(group);
  });




}
