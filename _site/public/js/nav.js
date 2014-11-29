$(function() {
    $('nav a').click(function() {
        var $linkClicked = $(this).attr('href');
        document.location.hash = $linkClicked;
        $('li').removeClass("active");
        if (!$(this).hasClass("active")) {
            $(this.parentNode).addClass("active");
            $('#main-content section').hide();
            $($linkClicked).fadeIn();
            return false;
        }
        else {
            return false;
        }
    });
    var hash = window.location.hash;
    hash = hash.replace(/^#/, '');
    $("#" + hash + "-link").trigger("click");
    window.scrollTo(0,0);
});

window.onload = function () {
  if (location.hash) {
      window.scrollTo(0, 0);
  }
};
