window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
          if (document.documentElement.scrollTop > 20) {
            document.getElementById("gotop").style.display = "block";
          } else {
            document.getElementById("gotop").style.display = "none";
          }
        }
        function topFunction() {document.documentElement.scrollTop = 0;}
