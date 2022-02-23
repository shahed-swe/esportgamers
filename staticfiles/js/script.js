$(function(){
    $(document).ready(function(){

      


        // Responsive Menu Js

        $('.toggle-social').on('click', function(){
            $('.social-menu').toggleClass('show');
        });

        $('.toggle-class').on('click', function(){
            $('.main-menu').toggleClass('slide');
        });
        
        
        
        var socialMenu = $('.social-menu');

        $('#close-click').on('click', function(e){
          if ($(".show")[0]){
            socialMenu.removeClass('show')
          }
        })
        
        var mainMenu = $('.main-menu');

        $('#close-click').on('click', function(e){
          if ($(".slide")[0]){
            mainMenu.removeClass('slide')
          }
        })

        // Typeit Jq

        new TypeIt('.typ', {
          strings: "",
          loop: true,
          speed: 90,
          cursor: false,
          waitUntilVisible: true,
          deleteSpeed: null
        }).go();


        // Slider Jq

        $('.slide-team').slick({
            centerMode: true,
            centerPadding: '00px',
            slidesToShow: 5,
            dots: false,
            prevArrow: '<i class="fas fa-angle-double-left arrow_left"></i>',
            nextArrow: '<i class="fas fa-angle-double-right arrow_right"></i>',
            autoplay: 3000,
            responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                  }
                },
                {
                    breakpoint: 992,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1,
                      arrows: false
                    }
                  },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false
                  }
                },
                {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false
                  }
                }

              ]
        });
        
        
        
        // Menu Fix Js

        var Menu = $('.logo-menu');
        var MenuHeight = Menu.offset().top;
          //console.log(MenuHeight)

        $(window).on('scroll', function(){
          var scrlTop =$(window).scrollTop();
            //console.log(scrlTop);

            if(scrlTop > MenuHeight){
              Menu.addClass('menufix');
              }else{
                 Menu.removeClass('menufix');
              }
        });
        
        
        
        
        
        // Scroll Top
        
        const toTop = document.querySelector('.to-top');

            window.addEventListener('scroll', () => {
                if(window.pageYOffset > 100) {
                    toTop.classList.add('active');
                        } else{
                            toTop.classList.remove('active')
                                }
        });
        
        //Active Class Js
        
          $('.main-menu ul li').on('click', function () {
            $('.main-menu ul li').removeClass('active');
              $(this).addClass('active');
          });


  


        // Mouse Cursor Js
        
        function mousecursor() {
            if ($("body")) {
                const e = document.querySelector(".cursor-in"),
                    t = document.querySelector(".cursor-out");
                let n, i = 0,
                    o = !1;
                window.onmousemove = function (s) {
                    o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
                }, $("body").on("mouseenter", ".team-member-img, .arrow_right, .arrow_left, .clients-logo, .service-img, a, .cursor-pointer", function () {
                    e.classList.add("cursor-pointer-hover"), t.classList.add("cursor-pointer-hover")
                }), $("body").on("mouseleave", ".team-member-img, .arrow_right, .arrow_left, .clients-logo, .service-img, a, .cursor-pointer", function () {
                    $(this).is(".team-member-img, .arrow_right, .arrow_left, .clients-logo, .service-img, a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-pointer-hover"), t.classList.remove("cursor-pointer-hover"))
                }), e.style.visibility = "visible", t.style.visibility = "visible"
            }
        };
        
        $(function () {
            mousecursor();
        });
        
        
        // PreLoder Js
        
        paceOptions = {
            ajax: true,
            document: true,
            eventLag: false
        };
  
        Pace.on('done', function() {
            $('#preloader').addClass("isok");
            $('.loading-text').addClass("isok");
        });




    });
});



setTimeout(function () {
  $('.count').countUp({
      delay: 15,
      time: 950
  });
}, 1000);
setInterval(function () {
  $('.count').countUp({
      delay: 15,
      time: 950
  });
}, 500000);