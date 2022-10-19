function allRead() {
    $('#mark-read').click(() => {
        $('.list-group-item').removeClass('active');
        $('#notif-number').text( $(this).closest( "ul" ).children('li.active').length);
    })
};

allRead();

var optionLinks = document.querySelectorAll(".list-group li");

var clickFn = function (e) {
    e.preventDefault();

    this.classList.toggle("active");
        
    $(optionLinks).on('click', function() {
        $('#notif-number').text( $(this).closest( "ul" ).children('li.active').length);  
    });
}

for (var i = 0; i < optionLinks.length; i++) {
    optionLinks[i].addEventListener("mousedown", clickFn, false);

}