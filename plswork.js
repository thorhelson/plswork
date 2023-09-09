  // Wait for the DOM to be fully loaded
  document.addEventListener("DOMContentLoaded", function () {
    // Get the banner-1YaD3N element
    var banner1YaD3N = document.querySelector('.banner-1YaD3N');

    // Get the bannerSVGWrapper-2CLfzN element
    var bannerSVGWrapper = document.querySelector('.bannerSVGWrapper-2CLfzN');

    // Check if banner-1YaD3N has a background image
    var style = window.getComputedStyle(banner1YaD3N);
    if (style.getPropertyValue('background-image') === 'none' || style.getPropertyValue('background-image') === 'initial') {
      // If no background image, hide bannerSVGWrapper
      bannerSVGWrapper.style.display = 'none';
    }
  });
