function defer(method) {
    if (window.jQuery)
      method();
    else
      setTimeout(function() {
        defer(method)
      }, 50);
  }
  defer(function() {
    (function($) {
      
      function doneResizing() {
        var totalScroll = $('.resource-slider-frame').scrollLeft();
        var itemWidth = $('.resource-slider-item').width();
        var difference = totalScroll % itemWidth;
        if ( difference !== 0 ) {
          $('.resource-slider-frame').animate({
            scrollLeft: '-=' + difference
          }, 500, function() {
            // check arrows
            checkArrows();
          });
        }
      }
      
      function checkArrows() {
        var totalWidth = $('#resource-slider .resource-slider-item').length * $('.resource-slider-item').width();
        var frameWidth = $('.resource-slider-frame').width();
        var itemWidth = $('.resource-slider-item').width();
        var totalScroll = $('.resource-slider-frame').scrollLeft();
        
        if ( ((totalWidth - frameWidth) - totalScroll) < itemWidth ) {
          $(".next").css("visibility", "hidden");
        }
        else {
          $(".next").css("visibility", "visible");
        }
        if ( totalScroll < itemWidth ) {
          $(".prev").css("visibility", "hidden");
        }
        else {
          $(".prev").css("visibility", "visible");
        }
      }
      
      $('.arrow').on('click', function() {
        var $this = $(this),
          width = $('.resource-slider-item').width(),
          speed = 500;
        if ($this.hasClass('prev')) {
          $('.resource-slider-frame').animate({
            scrollLeft: '-=' + width
          }, speed, function() {
            // check arrows
            checkArrows();
          });
        } else if ($this.hasClass('next')) {
          $('.resource-slider-frame').animate({
            scrollLeft: '+=' + width
          }, speed, function() {
            // check arrows
            checkArrows();
          });
        }
      }); // end on arrow click
      
      $(window).on("load resize", function() {
        checkArrows();
        $('#resource-slider .resource-slider-item').each(function(i) {
          var $this = $(this),
            left = $this.width() * i;
          $this.css({
            left: left
          })
        }); // end each
      }); // end window resize/load
      
      var resizeId;
      $(window).resize(function() {
          clearTimeout(resizeId);
          resizeId = setTimeout(doneResizing, 500);
      });
      
    })(jQuery); // end function
  });













var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  //centeredSlides: true,
 grabCursor: true, 
  scrollbar: {
    el: ".swiper-scrollbar",
  }
});





// FAQ
let summaryCollection = document.getElementsByTagName('summary');
let signsCollection = document.getElementsByClassName('faq-open-icon');

for(let i = 0; i < summaryCollection.length; i++) {
  summaryCollection[i].onclick = function() {
    if(signsCollection[i].innerHTML === '+') signsCollection[i].innerHTML = '—';
    else signsCollection[i].innerHTML = '+';
  }
}

// mmmmm
let slides = document.getElementsByClassName("tv1");
		let dots = document.getElementsByClassName("dot");
		let prev1 = document.querySelector(".prev1");
		let next1 = document.querySelector(".next1");
		
		if (!slides.length == 0) {
		  let slideIndex = 1;
		  showSlides(slideIndex);
		
		  function plusSlides(n) {
			showSlides((slideIndex += n));
		  }
		
		  let currentSlide = function (n) {
			showSlides((slideIndex = n));
		  };
		
		  function showSlides(n) {
			if (n > slides.length) {
			  slideIndex = 1;
			}
		
			if (n < 1) {
			  slideIndex = slides.length;
			}
		
			for (i = 0; i < slides.length; i++) {
			  slides[i].style.display = "none";
			}
		
			for (i = 0; i < dots.length; i++) {
			  dots[i].className = dots[i].className.replace(" active", "");
			}
		
			slides[slideIndex - 1].style.display = "block";
			dots[slideIndex - 1].className += " active";
		  }
		}
		
		prev1.addEventListener("click", () => {
		  plusSlides(-1);
		});
		
		next1.addEventListener("click", () => {
		  plusSlides(1);
		});


    //read more and read less
    function myFunction() {
      var dots = document.getElementById("dot");
      var moreText = document.getElementById("more");
      var btnText = document.getElementById("myBtn");
    
      if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
      } else {
        dots.style.display = "none";
        btnText.innerHTML = "View less"; 
        moreText.style.display = "inline";
      }
    }


    // live-tv

    

    