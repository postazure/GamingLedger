function indexMaps(group) {
  $.ajax({
    type: "get",
    url: "/maps",
    data: {group_id: group.id}
  }).done(function (data) {
    $(".map-list").empty();
    for (var i = 0; i < data.length; i++) {
      $(".map-list").append(
          "<li class='list-group-item' data-id='"+ data[i].id +"' data-url='"+ data[i].img_url.url +"'>"+ data[i].title +"</li>"
      );
    }
  });


  $("input[name='new-map']").on("click", function () {
    $('.screen.active').removeClass('active');
    $('#map .new').addClass('active');
    newMap(group);
  });

  $(".map-list").on("click", "li", function () {
    $('.screen.active').removeClass('active');
    $('#map .show').addClass('active');

    var imgSrc = $(this).data("url");
    $("#map #map-view-field").empty();

    $("#map-view-field").append('<h4 class="screen active">'+ $(this).text() +'</h4>');
    $("#map-view-field").append("<img class='screen active' src="+ imgSrc +" />");
  });


}
