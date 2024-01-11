javascript: (function(){
  var canvas = document.createElement("canvas");
  canvas.id = "snow";
  document.body.appendChild(canvas);
  var ctx = canvas.getContext("2d");
  var flakeArray = [];
  canvas.style.pointerEvents = "none";
  canvas.style.position = "fixed";
  canvas.style.top = 0;
  canvas.style.left = 0;
  canvas.style.width = "100vw";
  canvas.style.height = "100vh";
  canvas.style.zIndex = "90001";
  function canvasResize(){
    canvas.height = canvas.offsetHeight;
    canvas.width = canvas.offsetWidth;
  }
  canvasResize();
  window.onresize = function() {
    canvasResize();
  };
  var MyMath = Math;
  setInterval(function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    var random = MyMath.random();
    var distance = .05 + .95 * random;
    flake = {};
    flake.x = 1.5 * canvas.width * MyMath.random() - .5 * canvas.width;
    flake.y = -9;
    flake.velX = 2* 2 * distance * (MyMath.random() / 2 + .5);
    flake.velY = 2* (4 + 2 * MyMath.random()) * distance;
    flake.radius = MyMath.pow(5 * random, 2) / 5;
    flake.update = function() {
      var t = this;
      t.x += t.velX;
      t.y += t.velY;
      ctx.beginPath();
      ctx.arc(t.x, t.y, t.radius, 0, 2 * MyMath.PI, !1);
      ctx.fillStyle = "#FFF%22;%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ctx.fill()%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20};%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20flakeArray.push(flake);%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20for%20(b%20=%200;%20b%20%3C%20flakeArray.length;%20b++)%20{%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20flakeArray[b].y%20%3E%20canvas.height%20?%20flakeArray.splice(b,%201)%20:%20flakeArray[b].update()%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20}%20%20%20%20%20%20%20%20%20%20%20%20},%2032);%20%20%20%20%20%20%20%20
        })();
