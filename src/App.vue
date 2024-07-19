<template>
  <v-app>
    <!-- Системный навбар -->
    <v-container id="top" class="pt-2 pb-2" fluid>
      <v-row>
        <v-spacer/>
        <v-col class="d-flex justify-end align-center" cols="10">
          <!-- Скачать резюме -->
          <div class="d-flex align-center ml-8">
            <font-awesome-icon :icon="['fas', 'chevron-down']" class="text-info"/>
            <span class="font--callout-2 ml-1 text-info">Download CV</span>
          </div>
          <!-- Смена языка -->
          <change-language
            v-model="selectedLanguage"
            :languages="indexStore.getLanguages"
          />
          <!-- Смена темы -->
          <font-awesome-icon
            :icon="['fas', 'circle-half-stroke']"
            class="ml-8 text-info"
            @click="switchTheme"
          />
        </v-col>
        <v-spacer/>
      </v-row>
    </v-container>
    <!-- Системный навбар -->
    <v-app-bar
      class="background"
      elevation="0"
    >
      <v-container fluid>
        <v-row>
          <v-spacer/>
          <v-col cols="10">
            <nav-list :items="indexStore.getMenu" :selected-id="selectedId" @selectMenuOption="goToElem($event)"/>
            <!-- <nav-list :items="links" /> -->
          </v-col>
          <v-spacer/>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-main>
      <RouterView/>
      <v-btn
        v-scroll="onScroll"
        v-show="fab"
        color="info"
        icon
        style="position: fixed; bottom: 32px; right: 32px; z-index: 1"
        @click="toTop"
      >
        <font-awesome-icon
          style="max-width: 32px; max-height: 32px;"
          icon="chevron-up"
          color="info--text"
        />
      </v-btn>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import {computed, type ComputedRef, onBeforeMount, ref, shallowRef, watch, onMounted} from 'vue'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {useUserStore} from "@/stores/user";
import {useIndexStore} from "@/stores/index";
import {getUserId} from "@/api/user";
import {useGoTo, useTheme} from "vuetify";
import ChangeLanguage from "@/components/ChangeLanguage.vue";
import NavList from "@/components/common/NavList.vue";
import router from "@/router";

const theme = useTheme();
const userStore = useUserStore();
const indexStore = useIndexStore();
const {initDB, loadMenu, loadlanguages, setSelectedLanguage,
  loadAbout, loadSkills, loadWorkExperience} = indexStore;

const {fetchData} = userStore;
const statusUserId = computed(() =>
  userStore?.stateInfo?.userId?.responseStatus
)

const selectedLanguage = computed({
  get() {
    return indexStore.getSelectedLanguage
  },
  set(newValue) {
    setSelectedLanguage(newValue)
  }
})

onBeforeMount(async () => {
  initDB()
  fetchData({
    method: getUserId,
    model: "userId",
    payload: "sss"
  }, userStore)
  loadMenu()
  loadlanguages()
  loadAbout()
  loadSkills()
  loadWorkExperience()
})

let themeCounter = ref(0);
const themeNames = ["dark", "light", "yellow", "orange"];

const systemTheme = computed(() =>
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
)

watch(systemTheme, (systemTheme) => {
  if (systemTheme) {
    theme.global.name.value = themeNames[0];
    themeCounter.value = 0;
  } else {
    theme.global.name.value = themeNames[1];
    themeCounter.value = 1;
  }
}, {
  immediate: true
})

const switchTheme = () => {
  theme.global.name.value = themeNames[(themeCounter.value + 1) % themeNames.length];
  themeCounter.value++;
  handleInactiveUser()
};

const defId: ComputedRef<string> = computed(() => indexStore?.getMenu?.[0]?.id)

let selectedId = ref<string>("");
watch(defId, (newValue) => {
    if (newValue != null) {
      selectedId.value = newValue;
    }
  },
  {immediate: true}
)


const goToElem = (itemId: string) => {
  router.push({query: {block: itemId}})
  selectedId.value = itemId;
}
let fab = ref(false);
const onScroll = (e: any) => {
  if (typeof window === 'undefined') return
  const top = window.scrollY || e.target.scrollTop || 0
  fab.value = top > 20
}
const goTo = useGoTo()
const responsive = ref()
const toTop = () => {
  document.getElementById("top")?.scrollIntoView({
    behavior: 'smooth'
  });
}

const animation = document.getElementById('animation');

var ctx = animation.getContext("2d");
var cH;
var cW;
var bgColor = "#FFFFFF"
var animations = [];
var circles = [];

var colorPicker = (function() {
  var colors = ["#2C2735", "#FFFFFF", "#FFBA48", "#FF6138"];
  function next() {
    return colors[(themeCounter.value + 1) % colors.length]

  }
  function current() {
    return colors[themeCounter.value % colors.length]
  }
  return {
    next: next,
    current: current
  }
})();

function removeAnimation(animation) {
  var index = animations.indexOf(animation);
  if (index > -1) animations.splice(index, 1);
}

function calcPageFillRadius(x, y) {
  var l = Math.max(x - 0, cW - x);
  var h = Math.max(y - 0, cH - y);
  return Math.sqrt(Math.pow(l, 2) + Math.pow(h, 2));
}

function addClickListeners() {
  document.addEventListener("touchstart", handleEvent);
  document.addEventListener("mousedown", handleEvent);
};

function handleEvent(e) {
    if (e.touches) { 
      e.preventDefault();
      e = e.touches[0];
    }
    var currentColor = colorPicker.current();
    var nextColor = colorPicker.next();
    var targetR = calcPageFillRadius(e.pageX, e.pageX);
    var rippleSize = Math.min(200, (cW * .4));
    var minCoverDuration = 750;
    
    var pageFill = new Circle({
      x: e.pageX,
      y: e.clientY,
      r: 0,
      fill: currentColor
    });
    var fillAnimation = anime({
      targets: pageFill,
      r: targetR,
      duration:  0,
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
      fill: nextColor,
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
        fill: nextColor,
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

    animations.push(rippleAnimation, particlesAnimation);
}

function extend(a, b){
  for(var key in b) {
    if(b.hasOwnProperty(key)) {
      a[key] = b[key];
    }
  }
  return a;
}

var Circle = function(opts) {
  extend(this, opts);
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

var animate = anime({
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

var resizeCanvas = function() {
  cW = window.innerWidth;
  cH = window.innerHeight;
  animation.width = cW * devicePixelRatio;
  animation.height = cH * devicePixelRatio;
  ctx.scale(devicePixelRatio, devicePixelRatio);
};

(function init() {
  resizeCanvas();
  if (window.CP) {
    // CodePen's loop detection was causin' problems
    // and I have no idea why, so...
    window.CP.PenTimer.MAX_TIME_IN_LOOP_WO_EXIT = 6000; 
  }
  window.addEventListener("resize", resizeCanvas);
  addClickListeners();
  if (!!window.location.pathname.match(/fullcpgrid/)) {
    startFauxClicking();
  }
  // handleInactiveUser();
})();

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

</script>

<style lang="scss">
.v-app-bar.v-toolbar {
  position: sticky !important;
  top: 0;
}
#animation {
  position: fixed;
  top: 0;
  display: block;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}

.v-application {
  background-color: transparent;
}
</style>
