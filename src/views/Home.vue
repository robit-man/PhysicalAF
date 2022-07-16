<template>
    <div class="dust" style="">
    </div>
    <div class="fill-h-f column center">
        <div class="row reverse center auto">
    
            <div class="hero-text">
    
                <h1 style="">Verifiable</h1>
                <h1 class="homeheader">Physical As F<b class="s1">*</b><b class="s2">U</b>CK</h1>
                <h2>1 of 1 Physical NFT cards.</h2>
    
                <p style="margin-top:2rem;"><b>Your NFT on the blockchain is just one side of the equation.</b> Using onchain data PhysicalAF enables you to prove, in the real world that you own the digital asset attached to the card without having to connect your wallet. </p>
    
                <div class="row between" style="max-width:500px;margin:1rem 0rem;">
    
                    <div class="cta-button-or" v-if="!modalLoginOpen" v-on:click="wallet = !wallet">Order Now</div>
                    <RouterLink v-else class="cta-button-or" style="animation:flash 1s linear infinite;" to="/mint">Order Now</RouterLink>
                    <RouterLink to="/about">
                        <div style="" class="cta-button-lm">Learn More</div>
                    </RouterLink>
    
                </div>
    
                <h3 style="font-size:30px!important;">Pre-Order a Physical NFT </h3>
                <p style="font-size:20px!important;">And mint a #AFer entirely free!</p>
    
            </div>
    
            <div class="cardview">
                <Renderer id="c" ref="renderer" resize antialias alpha  :orbit-ctrl="{ autoRotate: true, enableZoom: false, enablePan: false,  enableDamping: true, dampingFactor: 0.05 }">
                    <Camera :position="{ x: 0, y: 0, z: 7 }" />
                    <Scene>
                        <AmbientLight :intensity="0.65" />
                        <PointLight color="#55ffff" :intensity="0.25" :position="{x: 100, y: -150, z: 120 }" />
                        <PointLight color="#ffff55" :intensity="0.25" :position="{x: -100, y: 150, z: 150 }" />
                        <PointLight color="#ff55ff" :intensity="0.25" :position="{x: 100, y: -100, z: -100 }" />
                        <PointLight color="#55ffff" :intensity="0.25" :position="{x: -100, y: 150, z: -120 }" />
                        <PointLight color="#ffff55" :intensity="0.25" :position="{x: 100, y: -150, z: -150 }" />
                        <PointLight color="#ff55ff" :intensity="0.25" :position="{x: -100, y: 100, z: 100 }" />
                        <Group>
                            <Box cast-shadow ref="mesh" :width="3" :height="4" :depth="0.05" :position="{x: 0, y:  0, z: 0}" :depthSegments="20" :width-segments="200" :height-segments="200">
                                                         <MatcapMaterial name="3B3C3F_DAD9D5_929290_ABACA8" />

                           </Box>
    
                            <Box ref="mesh" :width="3" :height="4" :depth="0" :position="{x: 0, y:  0, z: 0.0253}" :depthSegments="20" :width-segments="200" :height-segments="200">
                                <StandardMaterial :props="{ displacementScale: 1 }">
                                    <Texture refraction :refraction-ratio="0.5" src="/card-front.png" />
                                </StandardMaterial>
                            </Box>
    
                            <Box ref="mesh" :width="3" :height="4" :depth="0" :position="{x: 0, y:  0, z: -0.0253}" :depthSegments="20" :width-segments="200" :height-segments="200">
                                <BasicMaterial :props="{ displacementScale: 1 }">
                                    <Texture refraction :refraction-ratio="0.5" src="/card-back.png" />
                                </BasicMaterial>
                            </Box>
                        </Group>
    
                    </Scene>
    
                    <EffectComposer>
                        <RenderPass />
                    </EffectComposer>
    
                </Renderer>
            </div>
            <div class="focusbox">
                <img class="focus wall" src="~/@/assets/af-transparent/wall2.png" style="" alt="">
                <img class="focus2 lay" src="~/@/assets/af-transparent/laying.png" style="" alt="">
                <img class="focus2 smonk" src="~/@/assets/smoke.gif" style="" alt="">
    
            </div>
    
        </div>
    
        <footer style="height:100px;display:flex;flex-flow:column;justify-content: center;width:100%;">
    
    
            <div class="row" style="margin:auto;flex-flow:row;width:100%;justify-content: space-between;">
    
                <div class="copyright" style="font-size:1rem;margin-top:auto;font-weight:100;color:white;">© PhysicalAF, Inc. 2022. </div>
    
    
            </div>
    
        </footer>
    
        <ConnectWallet v-if="wallet" v-on:click="wallet = !wallet, modalLoginOpen = !modalLoginOpen">
    
        </ConnectWallet>
        <div style="z-index:100;font-weight:bold;cursor:pointer;padding:0.5rem;position:fixed;top:1rem;right:1rem;background:white;color:black;border-radius:0.25rem;" v-if="wallet" v-on:click="wallet = !wallet">CLOSE</div>
    
    </div>
</template>

<script>
import ConnectWallet from '@/components/ConnectWallet.vue'

import { Box, Camera, StandardMaterial, BasicMaterial, SubSurfaceMaterial, RenderPass, PhongMaterial, FilmPass, EffectComposer, UnrealBloomPass, CubeTexture, MatcapMaterial, Texture, Renderer, Scene } from 'troisjs';
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
    mounted() {},
    components: { Box, Camera, ConnectWallet, StandardMaterial, BasicMaterial, SubSurfaceMaterial, FilmPass, PhongMaterial, EffectComposer, UnrealBloomPass, RenderPass, MatcapMaterial, CubeTexture, Texture, Renderer, Scene },
};
</script>

<style scoped>
#c {}

.dust {
    opacity: 0.7;
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: 0px;
    top: 0px;
    z-index: -1;
    background-image: url('/src/assets/Dust 5.png');
    background-size: cover;
    animation: dustfall 10s linear infinite;
}

@keyframes dustfall {
    0% {
        background-position-y: 0vh;
    }
    100% {
        background-position-y: 100vh;
    }
}

.focusbox {
    width: 50vw;
    right: 0px;
}

.focusbox>.focus {
    filter: brightness(0.5);
}

.focusbox>.focus2 {
    filter: brightness(1);
}

.focusbox:hover>.focus2 {
    filter: brightness(0.5);
}

.focusbox:hover>.focus {
    filter: brightness(1);
}

.wall {
    pointer-events: none;
    z-index: -1;
    position: fixed;
    top: 0px;
    max-height: 100vh;
    right: 0vw;
    width: auto;
}

.lay {
    pointer-events: none;
    z-index: 3;
    position: fixed;
    bottom: -35vh;
    ;
    max-height: 120vh;
    right: 5vw;
    width: auto;
}

.smonk {
    mix-blend-mode: lighten;
    pointer-events: none;
    position: fixed;
    bottom: 32vh;
    max-height: 10vh;
    right: 18.5vw;
    width: auto;
    z-index: 5;
}

.cta-button-or {
    padding: 0.5rem 1rem;
    margin: 1rem 0rem;
    font-size: 1.5rem;
    font-weight: bold;
    border-radius: 3px;
    background-color: var(--vt-c-green);
    height: 54px;
    width: 226px;
    line-height: 36px;
    font-size: 32px;
    color: black;
    text-align: center;
    cursor: pointer;
}

.cta-button-or:hover {
    color: #3F3C40;
    background-color: white;
}

.cta-button-lm {
    cursor: pointer;
    padding: 0.5rem 1rem;
    margin: 1rem 0rem;
    font-size: 1.5rem;
    font-weight: bold;
    border-radius: 3px;
    background-color: var(--vt-c-white);
    height: 54px;
    width: 226px;
    line-height: 36px;
    font-size: 32px;
    color: black;
    text-align: center;
}

.cta-button-lm:hover {
    color: white;
    background-color: #3F3C40;
}

.price {
    position: absolute;
    right: 0px;
    top: 50%;
    z-index: 10;
    font-weight: 100;
    font-size: 3rem;
    color: white;
}

@keyframes flash {
    0% {
        background-color: white;
    }
    30% {
        background-color: white;
    }
    50% {
        background-color: #B7EAC2;
    }
    70% {
        background-color: white;
    }
    100% {
        background-color: white;
    }
}

canvas {}

.orderbutton {
    cursor: pointer;
    line-height: 1;
    height: 100%;
    background-color: white;
    color: #3F3C40;
    border-radius: 0.25rem;
    padding: 0.5rem 2rem;
    display: flex;
    font-size: 2rem;
    text-align: center;
    display: flex;
    flex-flow: column;
    justify-content: center;
    font-weight: bold;
}

.orderbutton:hover {
    opacity: 0.5;
}

.homeheader {
    font-weight: bold;
    color: var(--vt-c-green);
}

.homeheader>.s1 {
    display: inline-block;
}

.homeheader>.s2 {
    display: none;
}

.homeheader>b {
    font-weight: bold;
}

.homeheader:hover>.s1 {
    display: none;
}

.homeheader:hover>.s2 {
    display: inline-block;
}

.cardview {
    width: 650px;
    margin-right: auto;
    margin-left: 0rem;
    margin-top: -100px;
    height: 700px;
}

.hero-text {
    max-width: 600px;
}

@media (max-width: 1024px) {
    .reverse{flex-flow:column-reverse}
    .cardview {
        width: 100vw;
        margin-right: auto;
        margin-left: auto;
        margin-top: -5vh;
        height: 40vh;
    }
.wall {
    pointer-events: none;
    z-index: -1;
    position: fixed;
    top: 0px;
    max-height: 100vh;
    right: -70vw;
    width: auto;
    filter:blur(0px)brightness(0.5)!important;
}

.lay {
    pointer-events: none;
    z-index: 3;
    position: absolute;
    bottom: 0vh;
    max-height: 100vw;
    right: 0vw;
    width: 100vw;
}

.smonk {display:none;
    mix-blend-mode: lighten;
    pointer-events: none;
    position: fixed;
    bottom: 32vh;
    max-height: 10vh;
    right: 18.5vw;
    width: auto;
    z-index: 5;
}
}
</style>