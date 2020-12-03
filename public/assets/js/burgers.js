$(function() {
    $(".change-devoured").on("click", function(event) {
      let id = $(this).data("id");
      let isDevoured = $(this).data("devoured");
        //console.log($(this).data("id"));
        //console.log($(this).data("devoured"));
      let isDevouredState = {
        devoured: isDevoured
      };

      //console.log(isDevouredState);
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: isDevouredState
      }).then(
        function() {
          console.log("changed devoured to", isDevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
})