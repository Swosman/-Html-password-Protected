
  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'></script><script  src="./script.js"></script>
  <script>
  //$(".ip-pass").focus();
$(".ip-btn").on("click", function() {
     //$(".fake-pass .dot").addClass("dot-anim");
     var _dotString = "",
       _delay = 0,
       _totalDuration = 0;
     var _passLength = $(".ip-pass").val().length;
     _passLength = (_passLength > 10) ? 10 : _passLength;
     for (var i = 0; i < _passLength; i++) {
       _dotString += "<span class='dot'></span>";
     }
     setTimeout(function() {
       $(".fake-pass").html(_dotString).show();
       $(".ip-pass").val("");
       $(".ip-pass-icon").addClass("ip-pass-icon-anim");
       $(".fake-pass .dot").each(function(i) {
         _totalDuration += (i * 30) + 300;
         if (i != 0) {
           _delay = (i * 0.03) + 0.3 + "s";
           $(this).css("animation-delay", _delay);
         }
       }).addClass("dot-anim");

     }, 700);
     setTimeout(function(){
            $("div.fake-pass").addClass("show");
            $(".fake-pass").html("");
            $(".fake-pass .dot").removeClass("dot-anim");
            setTimeout(function(){
              $("div.fake-pass").fadeOut("slow",function(){
                $(this).removeClass("show");
                $(".ip-pass-icon").removeClass("ip-pass-icon-anim");
                $(".ip-pass").focus();
              });
            },800)
          }, 1700);
   });
  </script>