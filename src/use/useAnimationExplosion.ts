import {onBeforeMount, watch} from 'vue'

/* Определение цвета */
type ColorPickerFunctions = {
  next: () => string;
  current: () => string;
};
const colorPicker = (themeCounter: number): ColorPickerFunctions => {
  const colors = ["#2C2735", "#FFFFFF", "#FFBA48", "#FF6138"];
  const next = (): string => {
    return colors[(themeCounter + 1) % colors.length];
  };
  const current = (): string => {
    return colors[themeCounter % colors.length];
  };
  return {
    next,
    current
  };
};

/* Определение радиуса для заливки */
const calcPageFillRadius = (x: number, y: number, cH: number, cW: number): number => {
  const l = Math.max(x - 0, cW - x);
  const h = Math.max(y - 0, cH - y);
  return Math.sqrt(Math.pow(l, 2) + Math.pow(h, 2));
};

/* Наследование */
const extend = (a, b) => {
  for(const key in b) {
    if(b.hasOwnProperty(key)) {
      a[key] = b[key];
    }
  }
  return a;
}

/* Круг */
const Circle = function(opts: object) {
  extend(this, opts);
}



export function useAnimationExplosion(themeCounter: object) {

  const animation: HTMLElement = document.getElementById('animation');
  const ctx = animation.getContext("2d");
  let cH: number;
  let cW: number;
  let bgColor: string = "#FFFFFF"
  const animations: Array<object> = [];

  onBeforeMount(async () => {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    document.addEventListener("touchstart", handleEvent);
    document.addEventListener("mousedown", handleEvent);
  })


  function removeAnimation(animation: HTMLElement) {
    const index = animations.indexOf(animation);
    if (index > -1) animations.splice(index, 1);
  }

  function handleEvent(e) {
  if (e.touches) { 
    e.preventDefault();
    e = e.touches[0];
  }
  const isSwitchTheme: boolean = e.target.closest("#switch-theme") || e.target.id === "switch-theme"
  const currentColor: string = colorPicker(themeCounter.value).current();
  const nextColor: string = colorPicker(themeCounter.value).next();
  const targetR: number = calcPageFillRadius(e.pageX, e.pageX, cH, cW);
  const rippleSize: number = Math.min(200, (cW * .4));
  
  const pageFill = new Circle({
    x: e.pageX,
    y: e.clientY,
    r: 0,
    fill: isSwitchTheme ? nextColor : currentColor
  });
  const fillAnimation = anime({
    targets: pageFill,
    r: targetR,
    duration: 1500,
    easing: "easeOutQuart",
    complete: function(){
      bgColor = pageFill.fill;
      removeAnimation(fillAnimation);
    }
  });
  
  const ripple = new Circle({
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
  const rippleAnimation = anime({
    targets: ripple,
    r: rippleSize,
    opacity: 0,
    easing: "easeOutExpo",
    duration: 900,
    complete: removeAnimation
  });
  
  const particles = [];
  for (let i=0; i<32; i++) {
    const particle = new Circle({
      x: e.pageX,
      y: e.clientY,
      fill: !isSwitchTheme ? nextColor : currentColor,
      r: anime.random(24, 48)
    })
    particles.push(particle);
  }
  const particlesAnimation = anime({
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
}