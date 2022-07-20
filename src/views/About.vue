<template>
    <div class="fill-h-f column between">
        <div class="row center auto">
    
            <div class="hero-text column between">
    <div>
                <h1 >Learn More</h1>
                <h1 class="header green" style="">PhysicalAF</h1>
</div>
                <div class="column " style="padding:2rem 0rem;">
                <div class="row">
                    <div class="arrows column center" style="height:200px;margin-top:auto;margin-bottom:auto;border-right:3px solid white; margin-right:2rem;padding-right:2rem;">
                              <img class="uparrow" v-if="sectionNum == 1" src="~/@/assets/arrow-up.svg" alt="" style="opacity:0.5;">
                                <img class="downarrow" v-if="sectionNum == 1" v-on:click="sectionNum = 2" src="~/@/assets/arrow-down.svg" alt="" style="">
    
                                <img class="uparrow" v-if="sectionNum == 2" v-on:click="sectionNum = 1" src="~/@/assets/arrow-up.svg" alt="" style="">
                                <img class="downarrow" v-if="sectionNum == 2" src="~/@/assets/arrow-down.svg" alt="" style="opacity:0.5;">
                           
                    </div>
                <div class="scrollsection">

                    <div v-if="sectionNum == 1" class="section1">
                         <h2 style="margin-bottom:1rem;">What is a PhysicalAF card? </h2>
                            <p style="margin-bottom:1rem;font-size:20px;width:800px;">The PhysicalAF card is a <b>proof of NFT ownership (PoN)</b>, granting the ability to verify you own the NFT without having to connect your wallet. </p>
                            <p style="margin-bottom:1rem;font-size:20px;width:800px;">Verifying your own PhysicalAF card is quick and easy. To <b>prove verification</b>, simply <b>scan the QR code
                                on the PhysicalAF card</b>.</p>

                            <p style="margin-bottom:1rem;font-size:20px;width:800px;">PhysicalAF cards give you a unique way to <b>prove ownership of your digital assets in the real world.</b> </p>
                        </div>
                        <div v-if="sectionNum == 2" class="section2">
                            <h2 style="margin-bottom:1rem;">How is it done? </h2>
                            <p style="margin-bottom:1rem;font-size:20px;width:800px;">Our verification technology uses <b>live onchain data to validate</b> if the Ethereum address which purchased the PhysicalAF card still holds the NFT in their wallet. <b>If the wallet that purchased the card still owns the NFT</b> your verification will
                                be successful. </p>   <p style="margin-bottom:1rem;font-size:20px;width:800px;"> However, a <b>transfer of the NFT to another wallet will deem the PhysicalAF card unverifiable</b> and the verification will fail. This process ensures authenticity and validity of the digital goods.
                            </p>

                               <p style="margin-bottom:1rem;font-size:20px;width:800px;">You can order as many copies of the same NFT as you like, but be aware that <b>if your NFT doesnt remain in the wallet used to order, all your cards will become unverifiable</b>. </p>
                         </div>
                    </div>
                </div>
            </div>

<div class="socials column">
    <div class="row">
        <a href=""><img width="60px" height="60px" src="~/@/assets/Twitter.svg" alt=""></a>`
        <a href=""><img width="60px" height="60px" src="~/@/assets/Discord.svg" alt=""></a>`
        <a href=""><img width="60px" height="60px" src="~/@/assets/Instagram.svg" alt=""></a>`
        <a href=""><img width="60px" height="60px" src="~/@/assets/Opensea.svg" alt=""></a>`
    </div>
    <p>You can reach the team on Discord</p>
</div>

    
            </div>
    
            <div class="mintbox" style="display:flex;flex-flow:column;margin:auto;margin-top:5rem;">
    
               
            <div class="aboutcard">
                <Renderer id="c" ref="renderer" resize antialias alpha  :orbit-ctrl="{ autoRotate: false, enableZoom: false, enablePan: false,  enableDamping: true, dampingFactor: 0.05 }">
                    <Camera :position="{ x: 0, y: 0, z: 6 }" />
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
                                    <Texture antialias refraction :refraction-ratio="0.5" src="/guide.png" />
                                </StandardMaterial>
                            </Box>
    
                            <Box ref="mesh" :width="3" :height="4" :depth="0" :position="{x: 0, y:  0, z: -0.0253}" :depthSegments="20" :width-segments="200" :height-segments="200">
                                <BasicMaterial :props="{ displacementScale: 1 }">
                                    <Texture  refraction :refraction-ratio="0.2" src="/card-back.png" />
                                </BasicMaterial>
                            </Box>
                        </Group>
    
                    </Scene>
    
                    <EffectComposer>
                        <RenderPass />
                    </EffectComposer>
    
                </Renderer>
            </div>
            
            </div>
    
    
        </div>
    
    </div>
</template>

<script>
import MintAfer from '@/components/MintAfer.vue';
import ConnectWallet from '@/components/ConnectWallet.vue';

import { Box, Camera, StandardMaterial, BasicMaterial, SubSurfaceMaterial, RenderPass, PhongMaterial, FilmPass, EffectComposer, UnrealBloomPass, CubeTexture, MatcapMaterial, Texture, Renderer, Scene } from 'troisjs';
export default {
    data() {
        return {
            sectionNum: 1,
            wallet: false,
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
.scrollsection{transition:all 0.2s ease;height:auto;}

.uparrow{margin-bottom:1rem;}
.downarrow{margin-top:1rem;}
    .arrows{height: 200px; margin-top: auto; margin-bottom: auto; border-right: 3px solid white; margin-right: 2rem; padding-right: 2rem;}

.socials{margin-left:5rem;}
.orderbutton {
    cursor: pointer;
    line-height: 1;
    height: 100%;
    background-color: #3F3C40;
    color: white;
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
}.aboutcard{height:calc(100vh - 200px - 10rem);width:600px;margin-right:auto;margin-left:-5rem;}
.mintbutton {
    height: 2.5rem;
    width: auto;
    display: flex;
    flex-flow: column;
    justify-content: center;
    cursor: pointer;
    padding: 0.5rem 1rem;
    color: #3F3C40;
    background-color: white;
    border-radius: 0.25rem;
    margin: auto 0;
    font-size: 1.5rem;
    font-weight: bold;
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
@media (max-width: 1024px) {

.uparrow{margin:1rem;height:32px;}
.downarrow{margin:1rem;height:32px;}
    .arrows{height: auto; width:100%;display:flex;flex-flow:row;justify-content:flex-start; margin-top: auto; margin-bottom: auto; border-right: 0px solid white; margin-right: 2rem; padding-right: 2rem;}
  }
</style>