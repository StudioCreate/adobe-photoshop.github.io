(function () {
  'use strict';
}());

// get contributors
var url = "https://api.github.com/repos/adobe/brackets/contributors?per_page=20";

function displayJson(data) {
  "use strict";
  //console.log('displayJson');
  var displayContent = "", 
      contributors = document.getElementById("contributors");
  data.forEach(function (member) {
    displayContent += '<div class="column_5">';
    displayContent += '<a href="' + member.html_url + '">';
    displayContent += '<img src="' + member.avatar_url.split("?")[0] + '?s=128" title="' + member.login + '" class="icon large oval">';
    displayContent += '</a>';
    displayContent += '</div>';
  });

  if (displayContent) {
    contributors.innerHTML = displayContent;
  }
}

function requestJson() {
  "use strict";
  //console.log('requestJson');
  var request = new XMLHttpRequest();

  request.open('GET', url, true);
  request.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status >= 200 && this.status < 400) {
        // Success! run your success function
        displayJson(JSON.parse(this.responseText));
      } else {
        // Error :( run your error function
      }
    }
  };
  request.send();
  request = null;
}

// By Chris Coyier & tweaked by Mathias Bynens

function resizeYoutubeVideos() {
  "use strict";
  // Find all YouTube videos
  var $allVideos = $("iframe[src^='https://www.youtube.com']"),

      // The element that is fluid width
      $fluidEl = $('.row.spaced');

  // Figure out and save aspect ratio for each video
  $allVideos.each(function() {
    $(this)
      .data('aspectRatio', this.height / this.width)

      // and remove the hard coded width/height
      .removeAttr('height')
      .removeAttr('width');
  });

  // When the window is resized
  // (You'll probably want to debounce this)
  $(window).resize(function() {
      var newWidth = $fluidEl.width();

      // Resize all videos according to their own aspect ratio
      $allVideos.each(function() {

          var $el = $(this);
          $el
              .width(newWidth)
              .height(newWidth * $el.data('aspectRatio'));
      });

  // Kick off one resize to fix all videos on page load
  }).resize();

};

window.onload = function () {
  'use strict';
  requestJson();
  resizeYoutubeVideos();
};