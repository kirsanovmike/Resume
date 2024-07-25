import {onBeforeMount, watch} from 'vue'

const colorPicker = (themeCounter) => {
  const colors = ["#2C2735", "#FFFFFF", "#FFBA48", "#FF6138"];
  function next() {
    return colors[(themeCounter + 1) % colors.length]
  }
  function current() {
    return colors[themeCounter % colors.length]
  }
  return {
    next: next,
    current: current
  }
};

const calcPageFillRadius = (x, y, cH, cW) => {
  const l = Math.max(x - 0, cW - x);
  const h = Math.max(y - 0, cH - y);
  return Math.sqrt(Math.pow(l, 2) + Math.pow(h, 2));
}

const extend = (a, b) => {
  for(var key in b) {
    if(b.hasOwnProperty(key)) {
      a[key] = b[key];
    }
  }
  return a;
}


const Circle = function(opts) {
  extend(this, opts);
}



export function useAnimationExplosion(themeCounter) {

  const animation = document.getElementById('animation');
  const ctx = animation.getContext("2d");
  let cH;
  let cW;
  let bgColor = "#FFFFFF"
  const animations = [];
  const circles = [];

  onBeforeMount(async () => {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    document.addEventListener("touchstart", handleEvent);
    document.addEventListener("mousedown", handleEvent);
    if (!!window.location.pathname.match(/fullcpgrid/)) {
      startFauxClicking();
    }
  })

  watch(themeCounter, () => {
    // handleInactiveUser()
  })


  function removeAnimation(animation) {
    const index = animations.indexOf(animation);
    if (index > -1) animations.splice(index, 1);
  }

  function handleEvent(e) {
      if (e.touches) { 
        e.preventDefault();
        e = e.touches[0];
      }
      const isSwitchTheme = e.target.closest("#switch-theme") || e.target.id === "switch-theme"
      const changeTheme = e.target.closest("#switch-theme") || e.target.id === "switch-theme"
      var currentColor = colorPicker(themeCounter.value).current();
      var nextColor = colorPicker(themeCounter.value).next();
      var targetR = calcPageFillRadius(e.pageX, e.pageX, cH, cW);
      var rippleSize = Math.min(200, (cW * .4));
      var minCoverDuration = 750;
      
      var pageFill = new Circle({
        x: e.pageX,
        y: e.clientY,
        r: 0,
        fill: isSwitchTheme ? nextColor : currentColor
      });
      var fillAnimation = anime({
        targets: pageFill,
        r: targetR,
        duration: 1500,
        easing: "easeOutQuart",
        complete: function(){
          bgColor = pageFill.fill;
          removeAnimation(fillAnimation);
        }
      });
      
      var ripple = new Circle({
        x: e.pageX,
        y: e.clientY,
        r: 0,
        fill: !isSwitchTheme ? nextColor : currentColor,
        stroke: {
          width: 3,
          color: nextColor
        },
        opacity: 1
      });
      var rippleAnimation = anime({
        targets: ripple,
        r: rippleSize,
        opacity: 0,
        easing: "easeOutExpo",
        duration: 900,
        complete: removeAnimation
      });
      
      var particles = [];
      for (var i=0; i<32; i++) {
        var particle = new Circle({
          x: e.pageX,
          y: e.clientY,
          fill: !isSwitchTheme ? nextColor : currentColor,
          r: anime.random(24, 48)
        })
        particles.push(particle);
      }
      var particlesAnimation = anime({
        targets: particles,
        x: function(particle){
          return particle.x + anime.random(rippleSize, -rippleSize);
        },
        y: function(particle){
          return particle.y + anime.random(rippleSize * 1.15, -rippleSize * 1.15);
        },
        r: 0,
        easing: "easeOutExpo",
        duration: anime.random(1000,1300),
        complete: removeAnimation
      });

      if (isSwitchTheme) {
        animations.push(fillAnimation);
      }
      animations.push(rippleAnimation, particlesAnimation);
  }
  

  Circle.prototype.draw = function() {
    ctx.globalAlpha = this.opacity || 1;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    if (this.stroke) {
      ctx.strokeStyle = this.stroke.color;
      ctx.lineWidth = this.stroke.width;
      ctx.stroke();
    }
    if (this.fill) {
      ctx.fillStyle = this.fill;
      ctx.fill();
    }
    ctx.closePath();
    ctx.globalAlpha = 1;
  }

  const animate = anime({
    duration: Infinity,
    update: function() {
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, cW, cH);
      animations.forEach(function(anim) {
        anim.animatables.forEach(function(animatable) {
          animatable.target.draw();
        });
      });
    }
  });

  const resizeCanvas = function() {
    cW = window.innerWidth;
    cH = window.innerHeight;
    animation.width = cW * devicePixelRatio;
    animation.height = cH * devicePixelRatio;
    ctx.scale(devicePixelRatio, devicePixelRatio);
  };

  function handleInactiveUser() {
    var inactive = setTimeout(function(){
      fauxClick(cW/2, cH/2);
    }, 0);
    
    function clearInactiveTimeout() {
      clearTimeout(inactive);
      document.removeEventListener("mousedown", clearInactiveTimeout);
      document.removeEventListener("touchstart", clearInactiveTimeout);
    }
    
    document.addEventListener("mousedown", clearInactiveTimeout);
    document.addEventListener("touchstart", clearInactiveTimeout);
  }
  
  function startFauxClicking() {
    setTimeout(function(){
      fauxClick(anime.random( cW * .2, cW * .8), anime.random(cH * .2, cH * .8));
      startFauxClicking();
    }, anime.random(200, 900));
  }
  
  function fauxClick(x, y) {
    var fauxClick = new Event("mousedown");
    fauxClick.pageX = x;
    fauxClick.clientY = y;
    document.dispatchEvent(fauxClick);
  }
}