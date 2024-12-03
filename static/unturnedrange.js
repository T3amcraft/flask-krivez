{
    document.body.onload = function() {

        document.addEventListener("mousedown", function(e) {

            var x = e.clientX + $(this).scrollLeft();
            var y = e.clientY + $(this).scrollTop();

            document.getElementById("circle").style.top = y + "px";
            document.getElementById("circle").style.left = x + "px";

            document.onmousemove = function(e) {
                var x = e.clientX;
                var y = e.clientY;

                document.getElementById("circle").style.top = y + "px";
                document.getElementById("circle").style.left = x + "px";
            }
        })
        document.addEventListener("mouseup", function(e) {
            document.onmousemove = null;
        })

    }
}