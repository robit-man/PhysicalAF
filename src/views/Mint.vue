<template>

<div class="fill-h-f column center">
  <div class="row center auto">

<div class="hero-text" >

<h2 style="font-size:3rem;">AFers!</h2>
<h1 class="header red" style="">AS F<b class="s1">***</b><b class="s2">UNK</b>ERS</h1>
<p style="max-width:500px;">These dudes may not be the most sane, but they know how to be themselves. They are one-of-a-kind and live by a set of rules that only make sense to them. </p>

<p style="padding-top:1rem; "><b style="font-size:1.5rem;font-weight:bold;">Free Mint! </b>(with purchase of physical NFT)</p>
<p ><b style="font-size:1.5rem;font-weight:bold;">Edition of 10,000</b></p>



    <div class="afmintprev" style="margin-top:2rem;display:flex;flex-flow:wrap;width:600px; height:400;justify-content: space-between;">
      <img src="~/@/assets/1af.png" style="height:172px;" alt="">
      <img src="~/@/assets/2af.png" style="height:172px;" alt="">
      <img src="~/@/assets/3af.png" style="height:172px;" alt="">

    </div>
    <div class="afmintprev" style="display:flex;flex-flow:wrap;width:600px; height:auto;margin-top:2rem;justify-content: space-between;">

      <img src="~/@/assets/4af.png" style="height:172px;" alt="">      
      <img src="~/@/assets/5af.png" style="height:172px;" alt="">
      <img src="~/@/assets/6af.png" style="height:172px;" alt="">

    </div>
</div>

      <div class="mintbox" style="display:flex;flex-flow:column;margin:auto;">
             
             <div class="image-title">
                <p ><b style="font-size:1.5rem;font-weight:bold;">AFer #4342</b></p>
                <img src="~/@/assets/7af.png" style="width:100%; margin:1rem 0rem;" alt="">
              </div>


              <div class="mint-button" style="display:flex;flex-flow:row;justify-content:space-between;">
                <div class="price"><p style="font-size:1.5rem;line-height:1;">0.045 ETH <img src="~/@/assets/icons/ethereum.svg" style="height:1.2rem;filter:invert(1);" alt=""> </p></div>
                <div class="mintbutton" v-on:click="showModal()">MINT</div>
              </div>

              <div class="mintdesc" style="margin-top:1rem; border-left:1px solid white; padding-left:1rem;line-height:1;">
                <p>Free with purchase of physical NFT</p><br>
                <h3>343 Remaining</h3>
              </div>
      </div>


  </div>


    <MintAfer      
    v-show="isModalVisible"
          @close="closeModal">
    </MintAfer>

<ConnectWallet v-if="wallet" v-on:click="wallet = !wallet, modalLoginOpen = !modalLoginOpen">
</ConnectWallet>

</div>


</template>

<script>
import MintAfer from '@/components/MintAfer.vue';
import ConnectWallet from '@/components/ConnectWallet.vue';

import { Box, Camera, StandardMaterial, BasicMaterial,SubSurfaceMaterial, RenderPass, PhongMaterial, FilmPass    , EffectComposer,  UnrealBloomPass, CubeTexture, MatcapMaterial, Texture, Renderer, Scene } from 'troisjs';
export default {
   data() {
    return {
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
.mintbutton:hover{background-color:var(--vt-c-green);}
@keyframes flash{
  0%{background-color:white;}
  30%{background-color:white;}
  50%{background-color:#B7EAC2;}
  70%{background-color:white;}
  100%{background-color:white;}
}
.orderbutton:hover{opacity:0.5;}
.header{font-size:3rem;font-weight:bold;}
.header> .s1{display:inline-block;}
.header> .s2{display:none;}
.header > b{font-weight:bold;}
.header:hover > .s1{display:none;}
.header:hover > .s2{display:inline-block;}
    .cardview{width:40vw;min-width:500px;height:calc(100vh - 200px);}
.hero-text{margin:auto 0rem;}
</style>