$(function() {
    // $(".change-completed").on("click", function(event) {
    //   var id = $(this).data("id");
    //   var newCompleted = $(this).data("newCompleted");
  
    //   var newCompletedState = {
    //     completed: newCompleted
    //   };
  
    //   // Send the PUT request.
    //   $.ajax("/api/burgers/" + id, {
    //     type: "PUT",
    //     data: newCompletedState
    //   }).then(
    //     function() {
    //       console.log("changed completed to", newCompleted);
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
       
        name: document.getElementsByTagName("input")[0].value,
        completed: defaultValue= false
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    // $(".delete-burger").on("click", function(event) {
    //   var id = $(this).data("id");
  
    //   // Send the DELETE request.
    //   $.ajax("/api/burgers/" + id, {
    //     type: "DELETE"
    //   }).then(
    //     function() {
    //       console.log("deleted burger", id);
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });
  });
  
  $("#submit").on("click", function () {
    $("<button>").attr(this.id);
    $("#devoured").append(burgers);
});