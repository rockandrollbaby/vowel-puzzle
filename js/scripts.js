$(document).ready(function() {
  $("#submit").click(function(event) {
    //console.log("#puzzleInput");
    var processing = $("input#puzzleText").val();
    $("#puzzleBody").show();
    $("#firstSection").hide();
    alert("Answer this question: " + processing);

    event.preventDefault();

  });
});
