function light () {
    document.body.style.backgroundColor = "	#A9A9A9";
    var all = document.getElementsByTagName("*");

    for (var i = 0, max = all.length; i < max; i++) {
        all[i].style.color = "#2c2c2c";
    }
}

function dark () {
    document.body.style.backgroundColor = "#2c2c2c";
    var all = document.getElementsByTagName("*");

    for (var i = 0, max = all.length; i < max; i++) {
        all[i].style.color = "#c6cdcc";
    }
};


