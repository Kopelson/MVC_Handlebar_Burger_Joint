//Loads after the window is loaded
$(function() {
    //adds a click handler on .change-devoured class
    $(".change-devoured").on("click", function(event) {
      //assigns id to the data "id" of the clicked item
      let id = $(this).data("id");
      //assigns isDevoured to the data "devoured" of the clicked item
      let isDevoured = $(this).data("devoured");
      //creates an object of the data
      let isDevouredState = {
        devoured: isDevoured
      };
      // Sends the PUT request
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: isDevouredState
      }).then(
        function() {
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
    //puts a click handler on the class "delete-burger"
    $(".delete-burger").on("click", function(event){
        //assigns id to the data "id" of the clicked item
        let id = $(this).data("id");
        //assigns burgerName to the data "burger_name" of the clicked item
        let burgerName = $(this).data("burger_name");
        //Sends a DELETE request
        $.ajax("/api/burgers/" + id, {
            type: "DELETE",
            data: burgerName
        }).then(
            function(){
                // Reload the page to get the updated list
                location.reload();
            }
        )
    })
})