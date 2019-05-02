
// Check on/off any todos that are clicked - when an 'li' is clicked inside of an 'ul'
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

// Remove a todo when the 'X' span is clicked inside of a 'ul'
$("ul").on("click", "span", function(event) {
    // removes the parent 'li' of the clicked span
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    // stops 'event bubbling'
    event.stopPropagation();
});

// Add To-Do's typed into the input box to the list
$("input[type='text']").on("keypress", function(event) {
    // if enter is pressed
    if(event.which === 13) {
        // grab the new todo text
        var todoText = $(this).val();
        // clear the input text
        $(this).val("");
        // create a new li and add to the ul
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " +todoText+ "</li>");
    }
});

// Fade in/out the input box when we click the 'plus' icon
$(".fa-plus-circle").on("click", function() {
    $("input[type='text']").fadeToggle(300);
});