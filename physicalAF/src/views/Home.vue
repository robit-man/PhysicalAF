<template>

<div class="fill-h column center">
  <div class="row center auto">

<div class="hero-text">

<h2>Verifiable</h2>
<h1 class="homeheader">Physical As F<b class="s1">*</b><b class="s2">U</b>CK</h1>
<h3>1 of 1 Physical NFT cards.</h3>
<p>Your NFT on the blockchain is just one side of the equation. <br> Using onchain data PhysicalAF enables you to prove in the <br>real world that you are the owner of the digital asset. </p>
<a href=""><div class="cta-button">Learn More</div></a>

</div>

      <div class="cardview">
        <Renderer ref="renderer" resize antialias :orbit-ctrl="{ autoRotate: true, enableDamping: true, dampingFactor: 0.05 }">
          <Camera :position="{ x: 0, y: 0, z: 10 }" />
          <Scene background="#030306">
            <Box ref="mesh" :width="3" :height="5" :depth="0.1" :rotation="{ y: Math.PI / 2, z: Math.PI / 1 }">
              <MatcapMaterial name="444444_444444_444444_444444" />
            </Box>
          </Scene>
        </Renderer>
      </div>


  </div>

<footer style="height:100px;">


<div class="row">

<div class="copyright"></div>
<div class="order-box"></div>

</div>

</footer>

</div>


</template>

<script>
import { Box, Camera, MatcapMaterial, Renderer, Scene } from 'troisjs';
export default {
  components: { Box, Camera, MatcapMaterial, Renderer, Scene },
};
</script>

<style>
.homeheader{font-size:3rem;font-weight:bold;color:var(--vt-c-green);
}
.homeheader> .s1{display:inline-block;}
.homeheader> .s2{display:none;}
.homeheader > b{font-weight:bold;}
.homeheader:hover > .s1{display:none;}
.homeheader:hover > .s2{display:inline-block;}
    .cardview{width:512px;height:512px;}
.hero-text{margin:auto 0rem;}
</style>