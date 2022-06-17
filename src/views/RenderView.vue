<template>
<div class="cardview">
  <Renderer ref="renderer" resize antialias :orbit-ctrl="{ autoRotate: true, enableDamping: true, dampingFactor: 0.05 }">
    <Camera :position="{ x: 0, y: 0, z: 10 }" />
    <Scene background="#030306">
      <Box ref="mesh" :width="3" :height="3" :depth="1" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
        <MatcapMaterial name="2E763A_78A0B7_B3D1CF_14F209" />
      </Box>
      <ShaderMaterial :props="{ fragmentShader: '...' }">
        <Texture src="/my/texture/src.png" uniform="myCustomTexture"/>
    </ShaderMaterial>

    </Scene>
  </Renderer>
  </div>
</template>

<script>
import { Box, Camera, MatcapMaterial, Renderer, Scene } from 'troisjs';
export default {
  components: { Box, Camera, MatcapMaterial, Renderer, Scene },
};
</script>

<style>
    .cardview{width:512px;height:512px;}

</style>