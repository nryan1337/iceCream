$(function() {
  var flavours = ['chocolate', 'strawberry', 'vanilla']

  flavours.forEach(function(flav) {
    $("#output ul").append("<li>" + flav + "</li>");
  });
});
