console.log('\'Allo \'Allo!');
$(document).foundation('reflow');

$('#folderBtn').on('click', function () {
    $(this).siblings('.addBtn').toggleClass('mui-hide');
});

$('.sign').on('click', function(){
  $('.introCard').toggleClass('hide');
})

$('a').on('click', function () {

    $(this).siblings('.addBtn').toggleClass('mui-hide');
});

$('.folder').on('click', function () {
  $('#folderView').removeClass('hide');
  $('#docView').addClass('hide');
});

$('.document').on('click', function () {
  $('#docView').removeClass('hide');
  $('#folderView').addClass('hide');
});
