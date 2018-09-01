function dogeMe(tings) {
    //no jquery very light much impress
    var doge = document.body;
    doge.style.fontFamily = "Comic Sans MS, cursive";
    tings = ['doge', 'shibe', 'excite', 'impress', 'skill', 'warn'].concat(tings);
    var r = function(arr) {
        if (!arr) arr = tings;
        return arr[Math.floor(Math.random() * arr.length)];
    };
    var dogefix = [
        'wow', 'such ' + r(), 'very ' + r(), 'much ' + r(),
        'wow', 'such ' + r(), 'very ' + r(), 'much ' + r(),
        'so ' + r(), 'many ' + r(), 'want ' + r(),
        'wow', 'wow'
    ];
    var suchOverlay = document.createElement('div');
    suchOverlay.className = "such overlay";
    suchOverlay.style.position = "fixed";
    suchOverlay.style.left = 0;
    suchOverlay.style.right = 0;
    suchOverlay.style.top = 0;
    suchOverlay.style.bottom = 0;
    doge.appendChild(suchOverlay);
    setInterval(function() {
        var span = document.createElement("span");
        span.style.position = "absolute";
        span.style.left = Math.random() * 100 + "%";
        span.style.top = Math.random() * 100 + "%";
        span.style.fontSize = Math.max(24, (Math.random() * 50 + 50)) + "px";
        span.style.color = 'rgb(' + Math.round(Math.random() * 255) + ', ' + Math.round(Math.random() * 255) + ', ' + Math.round(Math.random() * 255) + ')';
        span.innerText = r(dogefix);
        suchOverlay.appendChild(span);
    }, 700);
}
window.onload = function() {dogeMe(['javascript']); };
