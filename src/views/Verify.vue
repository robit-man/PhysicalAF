<template>
    <div class="fill-h-f column ">
    
        <div class="row between ">
            <h1>Verification </h1>
          <div style="display:flex;flex-flow:row;margin-bottom:2rem;">
            <h3 style="height: 3rem; cursor:pointer;margin:auto;margin-left:1rem;padding:1rem;background:#3F3C40;border-radius:0.25rem;line-height:1rem;border:1px solid #505050;" v-if="step < 6" v-on:click="step ++">{{step}}</h3>
            <h3 style="height: 3rem; cursor:pointer;margin:auto;margin-left:1rem;padding:1rem;background:#B7EAC2;border-radius:0.25rem;line-height:1rem;border:1px solid gray;" v-if="step > 4" v-on:click="vstat = true">V</h3>
            <h3 style="height: 3rem; cursor:pointer;margin:auto;margin-left:1rem;padding:1rem;background:#EAB7B7;border-radius:0.25rem;line-height:1rem;border:1px solid gray;" v-if="step > 4" v-on:click="vstat = false">X</h3>
            <h3 style="height: 3rem; cursor:pointer;margin:auto;margin-left:1rem;padding:1rem;background:#3F3C40;border-radius:0.25rem;line-height:1rem;border:1px solid gray;" v-if="step > 4" v-on:click="step = 0">!</h3>
           </div>
           
           <div class="verify-row">
    
    
                <div class="verification-status">
    
                    <div class="row center">
                        <div class="circle-1">
                            <h3 class="circ-h3">SCAN</h3>
                            <div class="stat-1" v-if="step == 1"><img src="~/@/assets/spinner.svg" width="36" height="36" class="spin" alt=""></div>
                            <div class="stat-1" style="background:#B7EAC2;" v-if="step >= 2"><img src="~/@/assets/check.png" width="60" height="60" alt=""></div>
                        </div>
                        <hr class="statushr">
                        <div class="circle-2">
                            <h3 class="circ-h3">PROCESS</h3>
                            <div class="stat-1" v-if="step == 3"><img src="~/@/assets/spinner.svg" width="36" height="36" class="spin" alt=""></div>
                            <div class="stat-1" style="background:#B7EAC2;" v-if="step >= 4"><img src="~/@/assets/check.png" width="60" height="60" alt=""></div>
                        </div>
                        <hr class="statushr">
    
                        <div class="circle-3">
                            <h3 class="circ-h3">STATUS</h3>
                            <div class="stat-1" style="background:#3F3C40;" v-if="step >= 5 && vstat == true"><img src="~/@/assets/check2.png" width="60" height="60" alt=""></div>
                            <div class="stat-1" style="background:#3F3C40;" v-if="step >= 5 && vstat == false"><img src="~/@/assets/x.png" width="60" height="60" alt=""></div>
                        </div>
    
                    </div>
                </div>
    
            </div>
    
    
    
        </div>
    
        <div class="verify-sections">
    
            <div class="upload section" v-if="step <= 2">
                <div class="section-title">
                    <h2>Upload</h2>
                </div>
    
                <div class="row between">
    
                    <div class="text-section">
    
                        <div class="instruction" style="margin:2rem 0rem;max-width:500px;">
                            <h3>Scan the QR on your PhysicalAF card to verify!</h3>
                        </div>
    
                        <div class="action row">
    
                            <div v-if="step == 0" v-on:click="step ++" class="uploadbutton">UPLOAD IMAGE</div>
                            <div v-if="step == 1" v-on:click="step ++" class="uploadbutton">UPLOADING...</div>
                            <div v-if="step == 2" v-on:click="step ++" class="uploadbutton">DONE UPLOADING</div>
                            <p style="line-height:1;padding-left:1rem;font-size:1rem;line-height:2;font-weight:bold;">Or Visit On Mobile <br> Metamask Browser</p>
    
                        </div>
    
    
                        <div class="action " style="margin-top:4rem;">
                            <h3>Dont Have A PhysicalAF Card?</h3>
                            <div class="orderbutton2">ORDER NOW</div>
                            <p style="line-height:1;font-size:1rem;line-height:2;font-weight:bold;">And mint a #AFer entirely free!</p>
    
                        </div>
    
                    </div>
    
                    <div class="image-title row">
                        <img src="~/@/assets/aboutcard.png" style="height:500px;" alt="">
                        <div class="arrow" style="margin-top:auto;">
                            <h1>🡄 QR</h1>
                        </div>
                    </div>
    
                </div>
    
            </div>
    
    
    
    
            <div class="processing section" v-if="step >= 3 && step <= 4">
                <div class="section-title">
                    <h2>Processing</h2>
                </div>
    
                <div class="row between">
    
                    <div class="text-section">
    
                        <div class="instruction" style="margin:2rem 0rem;max-width:500px;">
                            <p>PhysicalAF uses live onchain data to determine if the owner of the PhysicalAF card still holds the NFT in their wallet. </p>
                        </div>
    
                        <div class="action row">
    
                            <div class="uploadbutton">IMAGE
                                <h3 v-on:click="imageprocessed = true, step ++" v-if="imageprocessed == false">PROCESSING</h3>
                                <h3 v-on:click="imageprocessed = false, step ++" v-if="imageprocessed == true">PROCESSED</h3>
                            </div>
    
                        </div>
                    </div>
                    <div class="processingsteps">
                        <h3 style="animation:opaque 1s ease;animation-delay: 0s;">Checking Card Validity on the Blockchain...</h3>
                        <h3 style="animation:opaque 1s ease;animation-delay: 1s;">Checking Owner and Connected Wallet...</h3>
                        <h3 style="animation:opaque 1s ease;animation-delay: 2s;">Generating Status Report...</h3>
                    </div>
                </div>
            </div>
    
    
    
            <div class="verified section" v-if="vstat == true && step >= 5">
                <div class="section-title">
                    <h2 style="color:#B7EAC2">SUCCESS</h2>
                    <h3 style="color:#B7EAC2">Card Validated</h3>

                </div>


                <div class="row between">
    
                    <div class="text-section">
    
                        <div class="instruction" style="margin:2rem 0rem;max-width:500px;">
                            <h3>The Verification of your Physical NFT was a Success! </h3>
                            <p></p>
                        </div>

                        <div class="action ">
                                                               
                            <p>Traits of the NFT scraped from Opensea</p>
                            <div class="uploadbutton">OPENSEA
                            </div>
                        </div>
                    </div><div class="cardviewverify">
                <Renderer id="c" ref="renderer" resize antialias :orbit-ctrl="{ autoRotate: true, enableDamping: true, dampingFactor: 0.05 }">
                    <Camera :position="{ x: 0, y: 0, z: 7}" />
                    <Scene background="#333333">
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
            <div class="failed section" v-if="vstat == false && step >= 5">
                <div style="color:#EAB7B7" class="section-title">
                    <h2 style="color:#EAB7B7">FAILED</h2>
                    <h3 style="color:#EAB7B7">Not Today Buddy...</h3>
                </div>

                <div class="row between">
    
                    <div class="text-section">
    
                        <div class="instruction" style="margin:2rem 0rem;max-width:500px;">
                            <h3>The Verification of your Physical NFT failed. </h3>
                            <p></p>
                        </div>

                        <div class="action ">
                                                               
                            <p>MFER#6969 is no longer in your wallet.</p>
                            <div class="failedbutton" v-on:click="step = 0">START OVER
                            </div>
                        </div>
                    </div><div class="cardviewverify">
                <Renderer id="c" ref="renderer" resize antialias :orbit-ctrl="{ autoRotate: true, enableDamping: true, dampingFactor: 0.05 }">
                    <Camera :position="{ x: 0, y: 0, z: 7}" />
                    <Scene background="#333333">
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
                <div class="orderbutton2" v-if="!modalLoginOpen" v-on:click="wallet = !wallet">Order</div>
                <RouterLink v-else class="orderbutton2" style="animation:flash 1s linear infinite;" to="/mint">ORDER</RouterLink>
              </div>
        
          </div>
        
        </footer>
        -->
    
    </div>
</template>

<script>
import MintAfer from '@/components/MintAfer.vue';
import ConnectWallet from '@/components/ConnectWallet.vue';
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader';
import { Box, Camera, StandardMaterial, BasicMaterial, SubSurfaceMaterial, RenderPass, PhongMaterial, FilmPass, EffectComposer, UnrealBloomPass, CubeTexture, MatcapMaterial, Texture, Renderer, Scene } from 'troisjs';
export default {
    data() {
        return {
            step: 1,
            vstat: false,
            imageprocessed: false,
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
    components: { QrcodeStream, QrcodeDropZone, QrcodeCapture, MintAfer, Box, Camera, ConnectWallet, StandardMaterial, BasicMaterial, SubSurfaceMaterial, FilmPass, PhongMaterial, EffectComposer, UnrealBloomPass, RenderPass, MatcapMaterial, CubeTexture, Texture, Renderer, Scene },
};
</script>

<style>

@keyframes opaque{
  0%{opacity:0.5;}
  50%{opacity:1;}
    100%{opacity:0.5;}


}
.cardviewverify{height:60vh;min-width:600px;margin-top:-100px;margin-right:20%;}
.uploadbutton {
    height: auto;
    width: max-content;
    display: flex;
    flex-flow: row;
    justify-content: center;
    cursor: pointer;
    padding: 0.5rem 1rem;
    color: #030306;
    background-color: #B7EAC2;
    border-radius: 0.25rem;
    margin: auto 0;
    font-size: 1.5rem;
    font-weight: bold;
}.failedbutton {
    height: auto;
    width: max-content;
    display: flex;
    flex-flow: row;
    justify-content: center;
    cursor: pointer;
    padding: 0.5rem 1rem;
    color: #030306;
    background-color: #EAB7B7;
    border-radius: 0.25rem;
    margin: auto 0;
    font-size: 1.5rem;
    font-weight: bold;
}
.verification-status{ margin-top:2rem;}
.orderbutton2 {
    height: auto;
    width: max-content;
    display: flex;
    flex-flow: column;
    justify-content: center;
    cursor: pointer;
    padding: 0.5rem 1rem;
    color: #030306;
    background-color: #ffffff;
    border-radius: 0.25rem;
    margin: 1rem 0;
    font-size: 1.5rem;
    font-weight: bold;
}

.uploadbutton>h3 {
    font-weight: bold;
    font-size: 1.5rem;
    margin-left: 1rem;
    color:black;
    background-size: auto;
    background-clip: border-box;
    background-size: auto;
    background-clip: border-box;
    background-size: cover;
    -webkit-background-clip: text;
}

.section-title {
    margin-top: 1rem;
    margin-bottom: 1rem;
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

@keyframes spinload {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.spin {
    animation: spinload 2s linear infinite;
    margin: auto;
}

.circ-h3 {
    transform: translateY(-2rem);
    font-size: 1rem !important;
    position: absolute;
    transform-origin: center;
    text-align: center;
}

.section {
    display: flex;
    flex-flow: column;
}

.circle-1,
.circle-2,
.circle-3 {
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    width: 64px;
    height: 64px;
    margin-top: auto;
    margin-bottom: auto;
    border-radius: 5rem;
    border: 2px solid white;
}

.stat-1 {
    border-radius: 4rem;
    width: 60px;
    height: 60px;
    display: flex;
    flex-flow: column;
    justify-content: center;
}

.stat-2 img {
    margin: auto;
}

.statushr {
    background-color: white;
    opacity: 1;
    height: 2px;
    margin-top: auto;
    margin-bottom: auto;
    width: 200px;
    border: unset;
}

.orderbutton2:hover {
    opacity: 0.5;
}

.header {
    font-size: 3rem;
    font-weight: bold;
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

.verify-row {
    transition: all 0.2s ease;
    margin: auto 0rem;
    display: flex;
    flex-flow: row;
    width: 100%;
    justify-content: flex-end;
}
.processingsteps > h3{opacity:0.5;}

@media (max-width: 1024px) {
.statushr {
    background-color: white;
    opacity: 1;
    height: 2px;
    margin-top: auto;
    margin-bottom: auto;
    width: 20%;
    border: unset;
}.cardviewverify{height:60vh;min-width:600px;margin-top:0px;margin-right:auto;}

.processingsteps > h3{font-size:1rem; text-align:center;margin-right:auto;}

.verify-row {
    flex-flow: column;
}

}
</style>