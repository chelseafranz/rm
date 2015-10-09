console.log('\'Allo \'Allo!');
$(document).foundation('reflow');

$('.mui-btn').on('click', function () {
    $(this).siblings('.addBtn').toggleClass('mui-hide');
});
