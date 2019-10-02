function switchbtn(btn, toggle) { btn.setAttribute("src", btn.getAttribute("src").replace(/_\d/, (toggle ? "_1" : "_0"))); };

function mercybtn(btn) {
    var sound = new Audio("img/.other/enemydust.wav");
    var play = function() { sound.play(); };
    sound.onloadeddata = play;
    
    // shameless copy-paste from pages.js
    var currentPage = document.querySelector(".page.active");
    if (currentPage != null) {
        currentPage.className = currentPage.className.replace(" active", "");
        
        // if the page we just came from is the search page, reset it
        if (currentPage.id == "search" && newPage != "search") {
            while (currentPage.hasChildNodes()) {
                currentPage.removeChild(currentPage.childNodes[0]);
            };
        };
        
        // scroll to the top
        window.scrollTo(0, 0);
    }
    
    document.querySelector(".page[id='mercy']").className += " active";
    
    window.onscroll = null;
    document.getElementById("main").removeChild(document.getElementById("sidebar"));
    document.getElementById("main").style = "margin-top: 30%; width: auto; max-width: 1500px;";
    document.getElementById("buttonContainer").style = "width: auto; max-width: 1500px;";
    document.body.style = "background-color: black;";
    
    var style = document.createElement("link");
    style.setAttribute("rel", "stylesheet");
    style.setAttribute("href", "img/.other/cloud.css");
    document.body.appendChild(style);
    
    // create particles
    for (var i = 0; i < 5; i++) {
        var cloud = document.createElement("img");
        cloud.setAttribute("src", "img/.other/spr_dustcloud_1.png");
        
        cloud.style = "position: absolute; display: flex; left: 50%; top: 15%; animation: cloud" + i + " 0.5s ease-out forwards;";
        
        document.body.appendChild(cloud);
    };
    
    btn.style = "";
    btn.onclick = null;
};
