$(function(){
  $('#hamburger').on('click',function(){
    $('#hamburger').toggleClass("open");
    $('#header-menu').slideToggle();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuWrapper = document.getElementById("header-menu-wrapper");
  const hamburger = document.getElementById("hamburger");
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

  // ハンバーガーメニューの開閉
  hamburger.addEventListener("click", function () {
    menuWrapper.classList.toggle("active");
  });

  // CATEGORYとTASTEの開閉
  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", function (event) {
      event.preventDefault();
      this.parentElement.classList.toggle("active");
    });
  });
});