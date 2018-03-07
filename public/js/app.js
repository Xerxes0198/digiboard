(
    function()
    {
        var drawing = false;
        var socket = io();
        console.log("fsdgs");

        var canvas = document.getElementById('whiteboard');
        var context = canvas.getContext('2d');

        canvas.addEventListener('mousedown', onMouseDown, false);
        canvas.addEventListener('mousemove', onMouseMove, false);
        canvas.addEventListener('mouseup', onMouseUp, false);


        function onMouseDown(e)
        {
            drawing = true;
        }

        function onMouseMove(e)
        {
            if(drawing)
            {
                console.log(e.clientX + " : " + e.clientY);
            }

        }

        function onMouseUp(e)
        {
            drawing = false;
        }

    }
)();