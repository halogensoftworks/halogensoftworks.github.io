document.addEventListener("DOMContentLoaded", function() {
  if (/WebKit/.test(navigator.userAgent)) {
    document.querySelector(".logo").classList.add("space")
  }
});
