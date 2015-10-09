console.log('\'Allo \'Allo!');
$(document).foundation('reflow');

$('#folderBtn').on('click', function () {
    $(this).siblings('.addBtn').toggleClass('mui-hide');
});
