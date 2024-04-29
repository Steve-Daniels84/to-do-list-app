//add an item
function newItem () {
    let inputValue = $('#input').val();

    if (inputValue === '') {
        alert('You must enter an item value');
    } else {
        $('#list').append('<li class="item">' + inputValue + '</li>');
        $('.item').on('dblclick', function (event) {
            const children = $(event.target).children();
            if (children.length === 0){
                crossOut(event)
            }       
        });
    }
}

// cross an item out
function crossOut (element) {
    let target = element.target;
    $(target).addClass('strike');
    $(target).append ('<span class="crossOutButton">X</span>');
    $('.crossOutButton').on('click', function (event) {
        removeItem (event)

    })
}

//remove a crossed out item
function removeItem (element) {
    let button = element.target;
    let target = $(button).parent();
    $(target).addClass ('delete')
}

//reorder items
$('#list').sortable();