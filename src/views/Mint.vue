<template>
    <div class="fill-h-f column ">
        <div class="row center auto">
    
            <div class="hero-text">
    
                <h1 class="header" style="">Alliance Of F<b class="s1">***</b><b class="s2">RANK</b>S</h1>
                <p style="max-width:740px;">
                    These dudes may not be the most sane, but they know how to be themselves. They are one-of-a-kind and live by a set of rules that only make sense to them.
                    <br>
                    <br> Franks are a collection of 10,000 unique NFTs, that can be minted for “0.05 ETH” or claimed for free with any purchase of a PhysicalAF NFT card.
    <br><br>Your Frank will grant you early access to future editions.</p>
    
                <div class="buttons column ">
                    <div class="mintAf" v-on:click="showModal()">
                        <div class="smallaf" ><img src="~/@/assets/afsmall.png" alt=""></div>

                        <div class="label">Mint A Frank</div>
                        <div class="data2">
                            <b>Remaining:</b> <b>{{remaining}}</b>
                        </div>
                    </div>
                    <div class="" style="width:48px;"> </div>
    
    
                    <RouterLink to="/yournfts">
                        <div class="orderAf" v-on:click="showModal()">Order A NFT Card</div>
                    </RouterLink>
    
    
                </div>
            </div>
    
            <div class="mintbox" style="display:flex;flex-flow:column;margin:auto;min-width:50%;">
                <img src="~/@/assets/af-transparent/wall3.png" class="wall" alt="">
                <img src="~/@/assets/standing-left.png" class="standing" alt="">
                <!-- <img src="~/@/assets/af-transparent/holding.png" class="holding" alt="">
        
                    <div class="mintcardview">
                        <Renderer id="c" style="margin-left:-10vw;position:fixed;right:0px;top:2px;" ref="renderer" resize antialias alpha :orbit-ctrl="{ autoRotate: true, enablePan: false, enableDamping: true, dampingFactor: 0.05 }">
                            <Camera :position="{ x: 0, y: 0, z: 6 }" />
                            <Scene>
                                <AmbientLight :intensity="0.75" />
                                <PointLight color="#55ffff" :intensity="0.25" :position="{x: 100, y: -150, z: 120 }" />
                                <PointLight color="#ffff55" :intensity="0.25" :position="{x: -100, y: 150, z: 150 }" />
                                <PointLight color="#ff55ff" :intensity="0.25" :position="{x: 100, y: -100, z: -100 }" />
                                <PointLight color="#55ffff" :intensity="0.25" :position="{x: -100, y: 150, z: -120 }" />
                                <PointLight color="#ffff55" :intensity="0.25" :position="{x: 100, y: -150, z: -150 }" />
                                <PointLight color="#ff55ff" :intensity="0.25" :position="{x: -100, y: 100, z: 100 }" />
                                <Group>
                                    <Box cast-shadow ref="mesh" :width="3" :height="4" :depth="0.05" :position="{x: 0, y:  0, z: 0}" :depthSegments="20" :width-segments="200" :height-segments="200">
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
                    </div>-->
    
            </div>
    
    
        </div>
    
    
        <MintAfer v-show="isModalVisible" @close="closeModal">
        </MintAfer>
    
        <ConnectWallet v-if="wallet" v-on:click="wallet = !wallet, modalLoginOpen = !modalLoginOpen">
        </ConnectWallet>
    
    </div>
</template>

<script>
import MintAfer from '@/components/MintAfer.vue';
import ConnectWallet from '@/components/ConnectWallet.vue';

import { Box, Camera, StandardMaterial, BasicMaterial, SubSurfaceMaterial, RenderPass, PhongMaterial, FilmPass, EffectComposer, UnrealBloomPass, CubeTexture, MatcapMaterial, Texture, Renderer, Scene } from 'troisjs';
export default {
    data() {
        return {
            wallet: false,
            remaining: 1245,
            mint: false,
            isModalVisible: false,
            form: {
                quantity: ''
            },
            modalLoginOpen: false,
        };
    },
    methods: {
        showModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        }
    },
    mounted() {},
    components: { MintAfer, Box, Camera, ConnectWallet, StandardMaterial, BasicMaterial, SubSurfaceMaterial, FilmPass, PhongMaterial, EffectComposer, UnrealBloomPass, RenderPass, MatcapMaterial, CubeTexture, Texture, Renderer, Scene },
};
</script>

<style scoped>
@keyframes float {
    0% {
        transform: translatey(0px);
    }
    50% {
        transform: translatey(20px);
    }
    100% {
        transform: translatey(0px);
    }
}

.wall {
    pointer-events: none;
    position: fixed;
    bottom: 0px;
    max-height: 120vh;
    right: 0vw;
    width: auto;
    z-index: -2;
}

.standing {
    pointer-events: none;
    position: fixed;
    bottom: -20vh;
    max-height: 100vh;
    right: 35vw;
    width: auto;
    z-index: -1;
}

.smonk {
    mix-blend-mode: lighten;
    pointer-events: none;
    position: fixed;
    bottom: 32vh;
    max-height: 10vh;
    right: 33.5vw;
    width: auto;
    z-index: -1;
}

.holding {
    pointer-events: none;
    position: fixed;
    top: -5vh;
    max-height: 100vh;
    right: 30vw;
    width: auto;
    z-index: -3;
}

.mintcardview {
    z-index: 3;
    animation: float 5s ease infinite;
    position: fixed;
    top: 25vh;
    right: 38vw;
    width: 120px;
    height: 120px;
}

.mintAf {
    height: auto;
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    cursor: pointer;
    color: #030306;
    border-radius: 0.25rem;
    overflow: hidden;
    margin: auto 0;
    max-width: 350px;
    font-size: 2rem;
    font-weight: bold;
}

.smallaf{cursor:pointer;}
.smallaf>img {
    margin-bottom: -2rem;
    z-index: 10;
}

.mintAf:hover>.data2 {
    color: #B7EAC2;
    border-color: #B7EAC2;
}
.mintAf:hover>.label {
    background-color: #B7EAC2;
    border-color: #B7EAC2;
}

.header>.s1 {
    display: inline-block;
}

.header>.s2 {
    display: none;
}

.header>b {
    font-weight: bold;
}

.header:hover>.s1 {
    display: none;
}

.header:hover>.s2 {
    display: inline-block;
}

.label {
    display: flex;
    height: 64px;
    line-height: 64px;
    flex-flow: row;
    justify-content: center;
    background-color: var(--vt-c-white);
    font-size: 2rem;
    font-weight: bold;
    border-top-right-radius: 0.25rem;
    border-top-left-radius: 0.25rem;
}

.data2 {
    padding: 0.5rem;
    border: 2px solid #ffffff;
    display: flex;
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    flex-flow: row;
    justify-content: space-between;
    color: #ffffff;
    font-size: 1.8rem;
    font-weight: bold;
}

.data2>b {
    font-size: 1.5rem;
}

.orderAf {
    padding: 0.5rem 1rem;
    margin: 1rem 0rem;
    font-size: 1.5rem;
    font-weight: bold;
    border-radius: 3px;
    background-color: white;
    height: 64px;
    width: 100%;
    max-width: 350px;
    margin-bottom: auto;
    margin-top: 2rem;
    line-height: 1.5;
    font-size: 32px;
    color: black;
    text-align: center;
    cursor: pointer;
}

.orderAf:hover {
    color: black;
    background-color: var(--vt-c-green);
}

.label:hover {
    background-color: #B7EAC2;
}

.buttons {
    margin-top: 2rem;
    max-width: 680px;
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

.header {
    font-weight: bold;
    margin-bottom: 2rem;
}



@media (max-width: 1024px) {
    
.wall {
    pointer-events: none;
    position: fixed;
    bottom: 0px;
    max-height: 100vh;
    right: -50vw;
    width: auto;
    z-index: -2;
    filter:brightness(0.5);
}

.standing {
    pointer-events: none;
    position: fixed;
    bottom: -20vh;
    max-height: 80vh;
    right: 35vw;
    width: auto;display:none;
    z-index: -1;
    filter:brightness(0.5);
}
}
</style>