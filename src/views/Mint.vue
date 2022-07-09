<template>
    <div class="fill-h-f column ">
        <div class="row center auto">
    
            <div class="hero-text">
    
                <h1 class="header red" style="">Alliance Of F<b class="s1">***</b><b class="s2">RANK</b>S</h1>
                <p style="max-width:800px;">
                These dudes may not be the most sane, but they know how to be themselves. They are one-of-a-kind and live by a set of rules that only make sense to them.
                <br>
                <br>
                Franks are a collection of 10,000 unique NFTs, that can be minted for “0.05 ETH” or claimed for free with any purchase of a PhysicalAF NFT card.</p>
    

    <div class="buttons row between">
                    <div class="mintAf" v-on:click="showModal()">
                    
                    <div class="label">Mint AFer</div>
                    <div class="data2">
                      <b>Remaining:</b>  <b>{{remaining}}</b>
                    </div>
                    </div>

                                 <RouterLink to="/yournfts"> <div class="orderAf" v-on:click="showModal()">Order an NFT Card</div></RouterLink>


    </div>
            </div>
    
            <div class="mintbox" style="display:flex;flex-flow:column;margin:auto;min-width:50%;">
                        <img src="~/@/assets/wall.jpeg" style="mix-blend-mode:lighten;position:fixed;top:0px;max-height:100vh;right:0vw;width:auto;z-index:-1;" alt="">
                    <img src="~/@/assets/laying.jpeg" style="mix-blend-mode:lighten;position:fixed;bottom:-35vh;max-height:120vh;right:20vw;width:auto;z-index:-1;" alt="">
                    <img src="~/@/assets/holding.jpeg" style="mix-blend-mode:lighten;position:fixed;top:0vh;max-height:80vh;right:25vw;width:auto;z-index:-2;" alt="">
 
 <div class="mintcardview">
 <Renderer id="c" style="margin-left:-10vw;position:fixed;right:0px;top:2px;" ref="renderer" resize antialias :orbit-ctrl="{ autoRotate: true, enableDamping: true, dampingFactor: 0.05 }">
                    <Camera :position="{ x: 0, y: 0, z: 10 }" />
                    <Scene background="black">
                        <AmbientLight :intensity="0.25" />
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
                        <UnrealBloomPass :strength="0.45" />
                    </EffectComposer>
    
                </Renderer>
</div>

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
    data2() {
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

<style>
.mintcardview{    mix-blend-mode: lighten;
position:fixed;top:20vh;right:25vw;}
.mintAf {
    height: auto;
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    cursor: pointer;
    color: #030306;
    border-radius: .5rem;
    overflow:hidden;
    margin: auto 0;   max-width:300px;

    font-size: 2rem;
    font-weight: bold;

}
 .label{    
   display: flex;

    flex-flow: row;
    justify-content: center;
    padding: 0.5rem 1rem;    background-color: var(--vt-c-white);

    font-size: 2rem;    
    font-weight: bold;}
 .data2{
    padding: 0.5rem 1rem;
    border:2px solid #ffffff;
   display: flex;
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;

    flex-flow: row;
    justify-content:space-between;
   color:#ffffff;
    font-size: 2rem;
    font-weight: bold;}
.orderAf {
  margin-bottom:auto;
  margin-top:unset;
    height: auto;
    width: max-content;
    display: flex;
    flex-flow: row;
    justify-content: center;
    cursor: pointer;
    padding: 0.5rem 1rem;
    color: #030306;
    background-color: #ffffff;
    border-radius: .5rem;
    font-size: 2rem;
    font-weight: bold;

}

.label:hover {
background-color: #B7EAC2;}
.orderAf:hover {
background-color: #B7EAC2;}
.buttons{margin-top:2rem;max-width:700px;}

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

.orderbutton:hover {
    opacity: 0.5;
}

.header {
    font-weight: bold;
    margin-bottom:2rem;
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

.cardview {
    width: 40vw;
    min-width: 500px;
    height: calc(100vh - 200px);
}

.hero-text {
    margin: auto 0rem;
}
</style>