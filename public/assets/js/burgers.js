// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change").on("click", function(event) {
    const id = $(this).data("id");
    const newEats = $(this).data("newEats");

    var newState = {
      hungry: newEats
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newState
    }).then(
      function() {
        console.log("changed eats to", newEats);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#bu").val().trim(),
      hungry: $("[name=hungry]:checked").val().trim()
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
});
