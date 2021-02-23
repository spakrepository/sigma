$(document).ready(function() {
  // Add smooth scrolling to all links
  $("a").on("click", function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          //scrollTop: $(hash).offset().top
        },
        100,
        function() {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
          var $this = $(this);
          $this.offset({ top: 1 });
        }
      );
    } //End if
  });

  $(".management-wrapper-btn-bottom").fadeOut();

  $(".management-wrapper-btn-top > a").on("click", function(event) {
    event.preventDefault();
    var $this = $(this);
    $this
      .parent(".management-wrapper-btn-top")
      .siblings(".container")
      .slideDown();
    $this.parents(".management-wrapper").css({ background: "#e2e3e4" });

    $("html, body").animate(
      {
        scrollTop: $this.parents(".management-wrapper").offset().top
      },
      1000,
      function() {
        $this.parent(".management-wrapper-btn-top").fadeOut("slow");
        $this
          .parent(".management-wrapper-btn-top")
          .siblings(".management-wrapper-btn-bottom")
          .delay("slow")
          .fadeIn("slow");
      }
    );

    $(".management-wrapper-btn-bottom > a").on("click", function(event) {
      event.preventDefault();
      var $this = $(this);
      $this
        .parent(".management-wrapper-btn-bottom")
        .siblings(".container")
        .slideUp(function() {
          $this
            .parents(".management-wrapper")
            .css({ background: "transparent" });
          $(".management-wrapper-btn-top")
            .delay(1000)
            .fadeIn();
          $this
            .parent(".management-wrapper-btn-bottom")
            .delay("slow")
            .fadeOut();
        });
    });
  });

  $(".product-catalogue-btn").on("click", function(event) {
    event.preventDefault();
    var $this = $(this);

    $this
      .siblings(".row")
      .removeClass("hide-row")
      .addClass("show-row");

    $this.find("i").addClass("rotate-icon-90");

    $this
      .parent(".product-catalogue-wrapper-bottom")
      .siblings(".product-catalogue-wrapper-bottom")
      .find(".product-catalogue-btn")
      .find("i")
      .removeClass("rotate-icon-90")
      .addClass("rotate-icon-0");

    $this
      .parent(".product-catalogue-wrapper-bottom")
      .siblings(".product-catalogue-wrapper-bottom")
      .find(".row")
      .removeClass("show-row")
      .addClass("hide-row");

    // if($this.siblings('.row').hasClass('show-row'))
    // {
    //   $this.find('i').addClass('rotate-icon-90');
    // }
    // else
    // {
    //   $this.find('i').addClass('rotate-icon-0');
    // }
  });

  $(".regular").slick({
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $(".toggle-remaining-wrapper-btn").on("click", function(event) {
    event.preventDefault();
    var $this = $(this);

    $this
      .parents(".toggle-remaining-content-wrapper")
      .find(".toggle-remaining-content-wrapper-inner")
      .slideDown();

    if ($this.find("i").hasClass("fa-plus-circle")) {
      $this.find("i").removeClass("fa-plus-circle");
      $this.find("i").addClass("fa-minus-square");
    } else {
      $this.find("i").addClass("fa-plus-circle");
    }
  });

  $(".panel-default >.panel-heading").css({
    backgroundColor: "rgba(40, 127, 74, 0.9)"
  });

  // $('.panel-default>.panel-heading')[1].style.backgroundColor = 'rgba(40, 127, 74, 0.8)';
  // $('.panel-default>.panel-heading')[1].style.borderColor = 'rgba(40, 127, 74, 0.8)';
  // $('.panel-default>.panel-heading')[2].style.backgroundColor = 'rgba(40, 127, 74, 0.7)';
  // $('.panel-default>.panel-heading')[2].style.borderColor = 'rgba(40, 127, 74, 0.7)';
  // $('.panel-default>.panel-heading')[3].style.backgroundColor = 'rgba(40, 127, 74, 0.6)';
  // $('.panel-default>.panel-heading')[3].style.borderColor = 'rgba(40, 127, 74, 0.6)';
  // $('.panel-default>.panel-heading')[4].style.backgroundColor = 'rgba(40, 127, 74, 0.7)';
  // $('.panel-default>.panel-heading')[4].style.borderColor = 'rgba(40, 127, 74, 0.7)';
  // $('.panel-default>.panel-heading')[5].style.backgroundColor = 'rgba(40, 127, 74, 0.8)';
  // $('.panel-default>.panel-heading')[5].style.borderColor = 'rgba(40, 127, 74, 0.8)';
  // $('.panel-default>.panel-heading')[6].style.backgroundColor = 'rgba(40, 127, 74, 0.9)';
  // $('.panel-default>.panel-heading')[6].style.borderColor = 'rgba(40, 127, 74, 0.9)';

  // $('[data-toggle="collapse"]').on('click', function(event){
  //   event.preventDefault();
  //     var $this = $(this);
  //     // $('[data-toggle="collapse"]').index(this);

  //   if($this.find('.toggle-plus-minus').find('i').hasClass('fas fa-plus-circle'))
  //       {
  //           $this.find('.toggle-plus-minus')
  //               .find('i')
  //               .removeClass('fas fa-plus-circle')
  //               .addClass('fas fa-minus-square');
  //       }
  //     else
  //         {
  //             $this.find('.toggle-plus-minus')
  //                 .find('i')
  //                 .removeClass('fas fa-minus-square')
  //                 .addClass('fas fa-plus-circle');
  //         }

  // });

  $(".getImg").on("click", function(event) {
    event.preventDefault();
    var $this = $(this);
    var getImgValue = $this.find("img").attr("src");
    console.log(getImgValue);
    $(".setimg").attr({ src: getImgValue });
  });

  // $('.certificate-modify').css({
  //   'background':'rgba(0, 179, 0, 0.7)'
  // });

  // $('.quick-turn-modify').css({
  //   background:'rgba(0, 179, 0, 0.8)'
  // });

  // $('.our-network-modify').css({
  //   background:'rgb(0, 179, 0)'
  // });

  $("[data-parent]").on("click", function(e) {
    e.preventDefault();

    var $this = $(this);

    $this
      .parents(".panel")
      .find('[role="tabpanel"]')
      .toggleClass("in");

    var chkhasclass = $this
      .parents(".panel")
      .find('[role="tabpanel"]')
      .hasClass("in");
    console.log(chkhasclass);

    if (chkhasclass == true) {
      $this
        .parents(".panel")
        .find(".toggle-plus-minus")
        .find("i")
        .removeClass("fas fa-plus-circle")
        .addClass("fas fa-minus-square");
    } else {
      $this
        .parents(".panel")
        .find(".toggle-plus-minus")
        .find("i")
        .removeClass("fas fa-minus-square")
        .addClass("fas fa-plus-circle");
    }

    // $this.parents('.panel').find('.toggle-plus-minus').find('i').removeClass('fas fa-plus-circle').addClass('fas fa-minus-square');
    $this
      .parents(".panel")
      .siblings(".panel")
      .find(".toggle-plus-minus")
      .find("i")
      .addClass("fas fa-plus-circle");
  });

  $(".for-mobile").on("click", function(e) {
    e.preventDefault();
    $(".navigation").fadeToggle(500);
  });

  var $window_width = $(window).width();

  if ($window_width < 769) {
  }
});
