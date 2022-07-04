<template>

<div class="fill-h-f column between">
  <div class="row center auto">
<h2 style="font-size:3rem;" v-on:click="step ++" >Verification {{step}}</h2>

<div class="verify-row" >


<div class="verification-status" v-on:click="step = 1">

  <div class="row">
    <div class="circle-1">
      <h3 class="circ-h3">SCAN</h3>
      <div class="stat-1" v-if="step == 1"><img src="~/@/assets/spinner.svg" width="36" class="spin" alt=""></div>      
      <div class="stat-1" style="background:#B7EAC2;" v-if="step >= 2"><img src="~/@/assets/check.png" width="60" height="60" alt=""></div>
    </div>
    <hr class="statushr">
    <div class="circle-2">
      <h3 class="circ-h3">PROCESS</h3>
      <div class="stat-1" v-if="step == 3"><img src="~/@/assets/spinner.svg" width="36" class="spin" alt=""></div>      
      <div class="stat-1" style="background:#B7EAC2;" v-if="step >= 4"><img src="~/@/assets/check.png" width="60" height="60" alt=""></div>
    </div>
    <hr class="statushr">

    <div class="circle-3">
      <h3 class="circ-h3">STATUS</h3>
      <div class="stat-1" v-if="step == 5"><img src="~/@/assets/spinner.svg" width="36" class="spin" alt=""></div>      
      <div class="stat-1" style="background:#B7EAC2;" v-if="step >= 6"><img src="~/@/assets/check.png" width="60" height="60" alt=""></div>
    </div>

  </div>
</div>

</div>

      <div class="mintbox" style="display:flex;flex-flow:column;margin:auto;margin-top:5rem;">
             
      </div>


  </div>

<!--
<footer style="padding-bottom:2rem;height:100px;display:flex;flex-flow:column;justify-content: center;width:100%;">


  <div class="row" style="margin:auto;flex-flow:row;width:100%;justify-content: space-between;">

    <div class="copyright" style="margin-top:auto;font-weight:100;font-size:1rem;">© PhysicalAF, Inc. 2022. </div>
      <div class="order-box" style="background-color:#3F3C40; width:auto;padding:0.5rem;border-radius:0.25rem;height:auto;display:flex;flex-flow:row;justify-content:space-between;">
        <div class="text" style="padding:0rem 2rem;display: flex;flex-flow: column;justify-content: center;">
          <h3 style="font-size:30px!important;">Pre-Order a Physical NFT </h3>
          <p style="font-size:20px!important;">And mint a #AFer entirely free!</p>
        </div>
        <div class="orderbutton" v-if="!modalLoginOpen" v-on:click="wallet = !wallet">Order</div>
        <RouterLink v-else class="orderbutton" style="animation:flash 1s linear infinite;" to="/mint">ORDER</RouterLink>
      </div>

  </div>

</footer>
-->

</div>


</template>

<script>
import MintAfer from '@/components/MintAfer.vue';
import ConnectWallet from '@/components/ConnectWallet.vue';

import { Box, Camera, StandardMaterial, BasicMaterial,SubSurfaceMaterial, RenderPass, PhongMaterial, FilmPass    , EffectComposer,  UnrealBloomPass, CubeTexture, MatcapMaterial, Texture, Renderer, Scene } from 'troisjs';
export default {
   data() {
    return {
      step: 1,
      wallet: false,
      mint: false,
      isModalVisible: false,
      form: {
        quantity: ''
      },
      modalLoginOpen: false,
    };
  },
  methods:{
    showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
  },
  mounted() {
  },
  components: { MintAfer, Box, Camera, ConnectWallet,  StandardMaterial, BasicMaterial, SubSurfaceMaterial, FilmPass, PhongMaterial, EffectComposer,  UnrealBloomPass, RenderPass, MatcapMaterial, CubeTexture, Texture, Renderer, Scene },
};



</script>

<style>
.mintbutton{height:2.5rem;width:auto;display:flex;flex-flow:column;justify-content:center;cursor:pointer;padding:0.5rem 1rem;color:#3F3C40;background-color:white; border-radius:0.25rem;margin:auto 0;font-size:1.5rem;font-weight:bold;}

@keyframes flash{
  0%{background-color:white;}
  30%{background-color:white;}
  50%{background-color:#B7EAC2;}
  70%{background-color:white;}
  100%{background-color:white;}
}
@keyframes spinload{
  0%{transform:rotate(0deg);}
  100%{transform:rotate(360deg);}
}
canvas{mix-blend-mode:lighten;}
.spin{animation:spinload 2s linear infinite;}
.circ-h3{
  transform:translateY(-2rem);
  font-size:1rem!important;
  position:absolute;
  transform-origin: center;text-align: center;
}
.circle-1, .circle-2, .circle-3{
  display:flex;flex-flow:wrap;justify-content: center;
  width:64px;height:64px;margin-top:auto;margin-bottom:auto;border-radius:5rem;border:2px solid white;
}
.stat-1, .stat-2, .stat-3{border-radius:4rem;width:60px;height:60px;
  display:flex;flex-flow:wrap;justify-content: center;}
.statushr{background-color:white;opacity:1;height:2px;margin-top:auto;margin-bottom:auto;width:200px;border:unset;}
.orderbutton:hover{opacity:0.5;}
.header{font-size:3rem;font-weight:bold;}
.header> .s1{display:inline-block;}
.header> .s2{display:none;}
.header > b{font-weight:bold;}
.header:hover > .s1{display:none;}
.header:hover > .s2{display:inline-block;}
    .cardview{width:40vw;min-width:500px;height:calc(100vh - 200px);}
.verify-row{transition:all 0.2s ease;margin:auto 0rem; margin-left:calc(50vw - 592px);display:flex;flex-flow:row;width:100%;justify-content: space-between;}
</style>