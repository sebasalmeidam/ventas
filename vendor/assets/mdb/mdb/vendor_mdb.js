//= require mdb/js/jquery
//= require mdb/js/popper
//= require mdb/js/bootstrap
//= require mdb/src/vendor/pro/ofi
//= require mdb/js/mdb

$(document).ready(function () {
  let isOpen = false;
  let $windowWidth = $(window).width();
  const $btnCollapse = $(".button-collapse");
  const $content = $('#content');

  $(window).resize(function () {

    $windowWidth = $(window).width();
    if ($windowWidth > 1200) {
      $content.css('padding-left', '250px');
      if (isOpen == false) {
        //$btnCollapse.css('left', '0');
        isOpen = true;
      }
    } else if ($windowWidth < 530 && isOpen) {
      // $btnCollapse.css('left', '0'); 
      $content.css('padding-left', '0');
      //$('#sidenav-overlay').css('display', 'block'); $btnCollapse.trigger('click');
    } else {
      if (isOpen == false) {
        $content.css('padding-left', '0');
      }
    }
  }); // SideNav Button Initialization 
  $btnCollapse.sideNav({
    breakpoint: 1200,
    slim: true,
    showOverlay: false
  });

  $btnCollapse.on('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    isOpen = !isOpen;
    if ($windowWidth > 1200) {
      const elPadding = isOpen ? '0' : '250px';
      //$btnCollapse.css('left', elPadding);
      $content.css('padding-left', elPadding);
      //$('#sidenav-overlay').css('display', 'none');
    } else {
      $('#sidenav-overlay').on('click', () => {
        isOpen = !isOpen;
      });
    }
  });
  $('#sidenav-overlay').on('click', () => {
    isOpen = !isOpen;
  });

  var sideNavScrollbar = document.querySelector('.custom-scrollbar');
  var ps = new PerfectScrollbar(sideNavScrollbar);

  $("#toggle-side").on("click", (function (e) {
    e.preventDefault()
    console.log('debería funcionar')
    if ($windowWidth > 1200) {
      $("#slide-out").hasClass("slim") ? ($("#slide-out").removeClass("slim"), $(".sv-slim-icon").removeClass("fa-angle-double-right").addClass("fa-angle-double-left"), $(".fixed-sn .double-nav").css({
        transition: "all .3s ease-in-out",
        "padding-left": "15.9rem"
      }), $(".fixed-sn main, .fixed-sn footer").css({
        transition: "all .3s ease-in-out",
        "padding-left": "15rem"
      })) : ($("#slide-out").addClass("slim"), $(".sv-slim-icon").removeClass("fa-angle-double-left").addClass("fa-angle-double-right"), $(".fixed-sn .double-nav").css("padding-left", "4.6rem"), $(".fixed-sn main, .fixed-sn footer").css({
        "padding-left": "3.7rem"
      }))
    }
  }))
});