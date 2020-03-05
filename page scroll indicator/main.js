let PageScrollIndicator = {};

PageScrollIndicator.createProgressBar = function (progressBarLocation, contentToTrack) {

  // Create the container div
  let progressContElement = document.createElement("div");
  progressContElement.classList.add("scroll-progress-container")

  // Create the progress bar itself
  let progressBarElement = document.createElement("div");
  progressBarElement.classList.add("scroll-progress-bar")
  progressBarElement.style.width = "0%";

  progressContElement.append(progressBarElement);

  let locationObject = document.querySelector(progressBarLocation);

  locationObject.prepend(progressContElement);

  // Event handler that updates the width of the progress bar based
  // on how far the contentToTrack elemt has been scrolled
  window.addEventListener('scroll', function (event) {
    let pageHeight = window.innerHeight;
    let container = document.querySelector(contentToTrack);

    let adjustedHeight = container.clientHeight - pageHeight;

    let progress = ((window.pageYOffset / adjustedHeight) * 100);

    progressBarElement.style.width = progress + "%";
  })
}


PageScrollIndicator.createProgressBar("header", "body");




// jQuery version

// let PageScrollIndicator = {};

// PageScrollIndicator.createProgressBar = function (progressBarLocation, contentToTrack) {

  // Create the container div
  // let $progressContElement = $("<div class='scroll-progress-container'></div>");

  // Create the progress bar itself
  // let $progressBarElement = $("<div class='scroll-progress-bar'></div>");
  // $progressBarElement.css("width", "0%");

  // $progressContElement.append($progressBarElement);

  // let $locationObject = $(progressBarLocation);
  // $locationObject.prepend($progressContElement);

  // Event handler that updates the width of the progress bar based
  // on how far the contentToTrack elemt has been scrolled
  // $(window).scroll(function (e) {
    // let pageHeight = $(window).height();
    // let $container = $(contentToTrack);

    // Adjusted height
    // let adjustedHeight = $container.innerHeight() - pageHeight;
    // let progress = (($(window).scrollTop() / adjustedHeight) * 100);
    // $progressBarElement.css("width", progress + "%");
  // });
// }