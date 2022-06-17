<template>

<div class="fill-h-f column center">
  <div class="row center auto">

<div class="hero-text">

<h2 style="font-size:2.5rem;transform-origin:10% 150%;transform:rotate(-14deg);">Verifiable</h2>
<h1 class="homeheader" style="transform-origin:0% 150%;transform:rotate(-8deg);">Physical As F<b class="s1">*</b><b class="s2">U</b>CK</h1>
<h3 style="margin-bottom:1rem;transform-origin: 10% -50%;transform:rotate(-3deg);">1 of 1 Physical NFT cards.</h3>
<p>Your NFT on the blockchain is just one side of the equation. <br> Using onchain data PhysicalAF enables you to prove in the <br>real world that you are the owner of the digital asset. </p>
<a href=""><div style="padding:0.5rem 1rem;margin:1rem 0rem;background-color:#3F3C40;border-radius:0.25rem;width:max-content;font-size:1.5rem;font-weight:bold;" class="cta-button">Learn More</div></a>

</div>

      <div class="cardview">
        <div class="price" style="position:absolute;right:0px;top:50%;z-index:10;font-weight:100;font-size:3rem;">0.045  <img src="~/@/assets/icons/ethereum.svg" style="height:2.5rem;" alt=""></div>
        <Renderer ref="renderer" resize antialias :orbit-ctrl="{ autoRotate: true, enableDamping: true, dampingFactor: 0.05 }">
          <Camera :position="{ x: 0, y: 0, z: 10 }" />
          <Scene background="#000000">
 
      <AmbientLight :intensity="0.9" />
      <PointLight color="#55ffff" :intensity="0.25" :position="{x: 100, y: -150, z: 120 }"  />
      <PointLight color="#ffff55" :intensity="0.25" :position="{x: -100, y: 150, z: 150 }"  />
      <PointLight color="#ff55ff" :intensity="0.25" :position="{x: 100, y: -100, z: -100 }" />
      <PointLight color="#55ffff" :intensity="0.25" :position="{x: -100, y: 150, z: -120 }"  />
      <PointLight color="#ffff55" :intensity="0.25" :position="{x: 100, y: -150, z: -150 }"  />
      <PointLight color="#ff55ff" :intensity="0.25" :position="{x: -100, y: 100, z: 100 }" />
        <Group>
                    <Box  cast-shadow ref="mesh"  :width="3" :height="4" :depth="0.1" :position="{x: 0, y:  0, z: 0}" :depthSegments="20" :width-segments="200" :height-segments="200" >
                            <MatcapMaterial name="070B0C_B2C7CE_728FA3_5B748B" />
                          </Box>

                    <Box ref="mesh"  :width="3" :height="4"  :depth="0" :position="{x: 0, y:  0, z: 0.051}" :depthSegments="20" :width-segments="200" :height-segments="200" >
                            <StandardMaterial :props="{ displacementScale: 1 }">
                              <Texture refraction :refraction-ratio="0.5" src="/card.png" />
                            </StandardMaterial>
                          </Box> 
                          
                          <Box ref="mesh"  :width="1" :height="1"  :depth="0" :position="{x: 0, y:  0, z: -0.051}" :depthSegments="20" :width-segments="200" :height-segments="200" >
                            <BasicMaterial :props="{ displacementScale: 1 }">
                              <Texture refraction :refraction-ratio="0.5" src="/back.png" />
                            </BasicMaterial>
                          </Box>
        </Group>

          </Scene>   

    <EffectComposer>
      <RenderPass />
      <FilmPass   />
      <UnrealBloomPass :strength="0.35" />
    </EffectComposer>

        </Renderer>
      </div>


  </div>

<footer style="height:100px;display:flex;flex-flow:column;justify-content: center;width:100%;">


  <div class="row" style="margin:auto;flex-flow:row;width:100%;justify-content: space-between;">

    <div class="copyright" style="margin-top:auto;font-weight:100;">© PhysicalAF, Inc. 2022. </div>
      <div class="order-box" style="background-color:#3F3C40; width:auto;padding:0.5rem;border-radius:0.25rem;height:auto;display:flex;flex-flow:row;justify-content:space-between;">
        <div class="text" style="padding:0rem 2rem;display: flex;flex-flow: column;justify-content: center;">
          <h3>Pre-Order a Physical NFT </h3>
          <p>And mint a #AFer entirely free!</p>
        </div>
        <div class="orderbutton" v-if="!modalLoginOpen" v-on:click="wallet = !wallet">Order</div>
        <div class="orderbutton" style="animation:flash 1s linear infinite;" v-else >Order</div>
      </div>

  </div>

</footer>

<ConnectWallet v-if="wallet" v-on:click="wallet = !wallet, modalLoginOpen = !modalLoginOpen">

</ConnectWallet>

</div>


</template>

<script>
import ConnectWallet from '@/components/ConnectWallet.vue'

import { Box, Camera, StandardMaterial, BasicMaterial,SubSurfaceMaterial, RenderPass, PhongMaterial, FilmPass    , EffectComposer,  UnrealBloomPass, CubeTexture, MatcapMaterial, Texture, Renderer, Scene } from 'troisjs';
export default {
   data() {
    return {
      wallet: false,
      form: {
        quantity: ''
      },
      modalLoginOpen: false,
    };
  },
  mounted() {
  },
  components: { Box, Camera, ConnectWallet,  StandardMaterial, BasicMaterial, SubSurfaceMaterial, FilmPass, PhongMaterial, EffectComposer,  UnrealBloomPass, RenderPass, MatcapMaterial, CubeTexture, Texture, Renderer, Scene },
};



</script>

<style>
@keyframes flash{
  0%{background-color:white;}
  30%{background-color:white;}
  50%{background-color:#B7EAC2;}
  70%{background-color:white;}
  100%{background-color:white;}
}
canvas{mix-blend-mode:lighten;}
.orderbutton{cursor:pointer;line-height:1.8;height:60px;background-color:white;color:#3F3C40;border-radius:0.25rem;padding:0.5rem 2rem;display:flex;font-size:1.5rem;font-weight:bold;}
.orderbutton:hover{opacity:0.5;}
.homeheader{font-size:3rem;font-weight:bold;color:var(--vt-c-green);
}
.homeheader> .s1{display:inline-block;}
.homeheader> .s2{display:none;}
.homeheader > b{font-weight:bold;}
.homeheader:hover > .s1{display:none;}
.homeheader:hover > .s2{display:inline-block;}
    .cardview{width:40vw;min-width:500px;height:calc(100vh - 200px);}
.hero-text{margin:auto 0rem;}
</style>