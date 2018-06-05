$(document).ready(function() {
  $("#submit").click(function(event) {
    //console.log("#puzzleInput");
    var processing = $("input#puzzleText").val();
    $("#puzzleBody").show();
    $("#firstSection").hide();
    // alert("Answer this question: " + processing);
    // split input string into array
    // foreach on array to push to new array
    // if vowel, push "-" instead
    // otherwise push consonant
    // dispaly new array as string on html
    var procArray = processing.split("");
    var outArray =[];
    function transform(param1, param2){
      param1.forEach(function(step) {
        if (step.toString().toLowerCase() === "a") {
          param2.push("*")
        } else {
          param2.push(step)
        }
      });
      return param2;
    };
    var bob = transform(procArray,outArray);
    var fred = bob.join("");
    alert(fred);
    event.preventDefault();

  });
});
