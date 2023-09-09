  // Get the banner-1YaD3N element
  var banner1YaD3N = document.querySelector('.banner-1YaD3N');

  // Get the bannerSVGWrapper-2CLfzN element
  var bannerSVGWrapper = document.querySelector('.bannerSVGWrapper-2CLfzN')

  // Check if banner-1YaD3N has a background image
  if (window.getComputedStyle(banner1YaD3N)['background-image'] === 'none') {
    // If no background image, hide bannerSVGWrapper
    bannerSVGWrapper.style.display = 'none';
  }
