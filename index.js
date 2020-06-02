/* eslint-disable strict */
// Note: must work with keyboard
// when a user selects one of the thumbnail images
// selector for thumbnail image $(‘.thumbnail img’)
// thumbnail is a link
// selector for top image: $(‘hero img’)
// 1. that image should be displayed in the full -size image container at the top
// 2. updating the image should also update its alt attribute


function handleThumbnailClicks() {

  // 1. that image should be displayed in the full -size image container at the top
  // 2. updating the image should also update its alt attribute
  $('.thumbnail').click(event => {
    event.preventDefault();
    const thumbSrc = $(event.currentTarget).find('img').attr('src');
    $('.hero img').attr('src', thumbSrc);
    const thumbAlt = $(event.currentTarget).find('img').attr('alt');
    $('.hero img').attr('alt', thumbAlt);

  });
}

$(handleThumbnailClicks);
