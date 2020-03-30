const openBtn = document.querySelector('.openbtn');
openBtn.addEventListener('click', function() {
    document.getElementById("myNav").style.height = "100%";
    });


const closeBtn = document.querySelector('.closebtn');
closeBtn.addEventListener('click', function() {
    document.getElementById("myNav").style.height = "0%";
    });
