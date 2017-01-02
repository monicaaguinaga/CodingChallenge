
$(function() {
  $(".draggable").draggable({
    revert : function(event, ui) {
    // on older version of jQuery use "draggable"
    // $(this).data("draggable")
    $(this).data("uiDraggable").originalPosition = {
        top : 0,
        left : 0
      };
      return !event;
      // return (event !== false) ? false : true;
    }
  });
  $("#droppable").droppable();

    $( "#sortable" ).sortable({
        placeholder: "ui-sortable-placeholder"
    });
  // $( ".draggable" ).draggable();
});
