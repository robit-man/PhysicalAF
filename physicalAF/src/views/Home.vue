<template>

<div class="fill-h-f column center">
  <div class="row center auto">

<div class="hero-text">

<h2 style="font-size:2.5rem;transform-origin:0% 50%;transform:rotate(-15deg);">Verifiable</h2>
<h1 class="homeheader" style="transform-origin:0% 50%;transform:rotate(-10deg);">Physical As F<b class="s1">*</b><b class="s2">U</b>CK</h1>
<h3 style="margin-bottom:1rem;transform-origin: 0% 50%;transform:rotate(-5deg);">1 of 1 Physical NFT cards.</h3>
<p>Your NFT on the blockchain is just one side of the equation. <br> Using onchain data PhysicalAF enables you to prove in the <br>real world that you are the owner of the digital asset. </p>
<a href=""><div style="padding:0.5rem 1rem;margin:1rem 0rem;background-color:#3F3C40;border-radius:0.25rem;width:max-content;font-size:1.5rem;font-weight:bold;" class="cta-button">Learn More</div></a>

</div>

      <div class="cardview">
        <Renderer ref="renderer" resize antialias :orbit-ctrl="{ autoRotate: true, enableDamping: true, dampingFactor: 0.05 }">
          <Camera :position="{ x: 0, y: 0, z: 10 }" />
          <Scene background="#030306">
 
      <AmbientLight :intensity="0.5" />
      <PointLight :position="{ y: 50, z: 0 }" />
      <PointLight color="#ffffff" :intensity="0.75" :position="{ y: -50, z: 0 }" />

            <Box ref="mesh"  :width="3" :height="4" :depth="0.01" :width-segments="200" :height-segments="200" >
                                  <MatcapMaterial name="392307_B3AE7D_6D5618_847C42" />

                    <StandardMaterial :props="{ displacementScale: 0.2 }">
                      <Texture src="/src/assets/card.png" />
                      <Texture src="/assets/textures/Wood_Tiles_002_height.png" name="displacementMap" />
                      <Texture src="/assets/textures/Wood_Tiles_002_normal.jpg" name="normalMap" />
                      <Texture src="/assets/textures/Wood_Tiles_002_roughness.jpg" name="roughnessMap" />
                      <Texture name="aoMap" />
                    </StandardMaterial>
                  </Box>

          </Scene>   

          <EffectComposer>
              <RenderPass />
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
        <div class="orderbutton" >Order</div>
      </div>

  </div>

</footer>

</div>


</template>

<script>

import { Box, Camera, StandardMaterial, BasicMaterial,SubSurfaceMaterial, RenderPass, PhongMaterial, HalftonePass, EffectComposer,  UnrealBloomPass, CubeTexture, MatcapMaterial, Texture, Renderer, Scene } from 'troisjs';
export default {
  
  mounted() {


    
  },



  components: { Box, Camera, StandardMaterial, BasicMaterial,SubSurfaceMaterial, HalftonePass, PhongMaterial, EffectComposer,  UnrealBloomPass, RenderPass, MatcapMaterial, CubeTexture, Texture, Renderer, Scene },
};



</script>

<style>
.orderbutton{cursor:pointer;line-height:1.8;height:60px;background-color:white;color:#3F3C40;border-radius:0.25rem;padding:0.5rem 2rem;display:flex;font-size:1.5rem;font-weight:bold;}
.orderbutton:hover{opacity:0.5;}
.homeheader{font-size:3rem;font-weight:bold;color:var(--vt-c-green);
}
.homeheader> .s1{display:inline-block;}
.homeheader> .s2{display:none;}
.homeheader > b{font-weight:bold;}
.homeheader:hover > .s1{display:none;}
.homeheader:hover > .s2{display:inline-block;}
    .cardview{width:40vw;height:calc(100vh - 200px);}
.hero-text{margin:auto 0rem;}
</style>