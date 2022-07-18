<template>
    <div class="fill-h-f column ">
    
        <div class="row between " style="margin-bottom:0rem;">
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
             
    
                <div class="row between">
    
                    <div class="text-section">
                 <div class="row">
                    <div class="arrows column center" style="height:200px;margin-top:auto;margin-bottom:auto;border-right:3px solid white; margin-right:2rem;padding-right:2rem;">
                            <img v-if="sectionNum == 1" src="~/@/assets/arrow-up.svg" alt="" style="opacity:0.5;">
                            <img v-if="sectionNum == 1" v-on:click="sectionNum = 2" src="~/@/assets/arrow-down.svg" alt="" style="margin-top:2rem;">
                            
                            <img v-if="sectionNum == 2" v-on:click="sectionNum = 1" src="~/@/assets/arrow-up.svg" alt="" style="">
                            <img v-if="sectionNum == 2"  src="~/@/assets/arrow-down.svg" alt="" style="margin-top:2rem;opacity:0.5;">
                    </div>
                <div class="scrollsection">

                    <div v-if="sectionNum == 1" class="section1">
                         <h2 style="margin-bottom:1rem;">How to Verify</h2>
                            <p style="margin-bottom:1rem;font-size:20px;width:800px;">Verifying your PhysicalAF card is quick and easy. <b>To prove verification, simply scan the QR code on the bottom right of your PhysicalAF card.</b> This should direct you to our mobile website where you can begin mobile verification.  </p>
                        <h2 style="margin-bottom:1rem;">Non-Mobile Verification </h2>
                            <p style="margin-bottom:1rem;font-size:20px;width:800px;">To verify your card on a computer or other non-mobile device, simply upload an image of your PhysicalAF cards QR. </p>
                        
                        
                        
    
                        <div class="action row">
    
                            <div v-if="step == 0" v-on:click="step ++" class="uploadbutton">UPLOAD QR IMAGE</div>
                            <div v-if="step == 1" v-on:click="step ++" class="uploadbutton">UPLOADING...</div>
                            <div v-if="step == 2" v-on:click="step ++" class="uploadbutton">DONE UPLOADING</div>
                            <div v-if="step == 2" class="" style="width:16px;">  </div>
                            <div v-if="step == 2" v-on:click="step = 0" class="uploadbutton" style="background-color:#EAB7B7;height:64px;width:64px;display:flex;flex-flow:row;justify-content: center;"><img src="~/@/assets/reload.svg" width="32" alt=""></div>
                        </div>
        <p v-on:click="sectionNum = 2" style="cursor:pointer;">Click here to Link a PhysicalAF Card to it’s NFT</p>

                        </div>
                        <div v-if="sectionNum == 2" class="section2">
                            <h2 style="margin-bottom:1rem;">Link your Card to its NFT</h2>

                            <p style="margin-bottom:1rem;font-size:20px;width:800px;">If you own both a PhysicalAF card and the NFT displayed on that card but you are not the original purchaser of the card. You will need to connect your card to your NFT to be able to verify them. </p>  

                               <p style="margin-bottom:1rem;font-size:20px;width:800px;"><b>Connecting a PhysicalAF card to an NFT:</b><br>1. Scan or upload the QR of your Physical Card.<br>2. Connect your wallet.<br>3. Select “link”. <br>4. If you own the NFT and PhysicalAF card this process will link them.<br>5. You can now verify your PhysicalAF card.  </p>
                         

                         
    
                        <div class="action row">
    
                            <div v-on:click="step ++" class="uploadbutton">LINK</div>
    
                        </div>
    
                         </div>
                    </div>
                </div>

    
                    </div>


    
                    <div class="image-title row center" style="margin:auto;">
                        <img src="~/@/assets/guide.png" style="height:600px;" alt="">
                      
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
    
                            <div class="uploadbutton">
                                <h3 v-on:click="imageprocessed = true, step ++" v-if="imageprocessed == false">PROCESSING</h3>
                                <h3 v-on:click="imageprocessed = false, step ++" v-if="imageprocessed == true">PROCESSED</h3>
                            </div>
    
                        </div>
                    </div>
                    <div class="processingsteps">
                        <h3 style="margin-bottom:2rem;animation:opaque 1s ease;animation-delay: 0s;">Checking Card Validity on the Blockchain...</h3>
                        <h3 style="margin-bottom:2rem;animation:opaque 1s ease;animation-delay: 1s;">Checking Owner and Connected Wallet...</h3>
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
                <Renderer id="c" ref="renderer" resize antialias alpha  :orbit-ctrl="{ autoRotate: true, enableZoom: false, enablePan: false,  enableDamping: true, dampingFactor: 0.05 }">
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
                                    <Texture antialias refraction :refraction-ratio="0.5" src="/success.png" />
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
                                                               
                            <p style="margin-bottom:1rem;">MFER#6969 is no longer in your wallet.</p>
                            <div class="uploadbutton" v-on:click="step = 0">START OVER
                            </div>
                        </div>
                    </div><div class="cardviewverify">
               <Renderer id="c" ref="renderer" resize antialias alpha  :orbit-ctrl="{ autoRotate: true, enableZoom: false, enablePan: false,  enableDamping: true, dampingFactor: 0.05 }">
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
                                    <Texture antialias refraction :refraction-ratio="0.5" src="/failed.png" />
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
            sectionNum: 1,
            step: 0,
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

<style scoped>

@keyframes opaque{
  0%{opacity:0.5;}
  50%{opacity:1;}
    100%{opacity:0.5;}


}

.processingsteps{  width: 100%;
  text-align: center;}
.cardviewverify{height:60vh;min-width:600px;margin-top:-100px;margin-right:20%;}
.uploadbutton {
    padding: 0.5rem 1rem;
    margin: 1rem 0rem;
    font-size: 1.5rem;
    font-weight: bold;
    border-radius: 3px;
    background-color: var(--vt-c-white);
    height: 64px;
    width: fit-content;
    line-height: 3rem;
    font-size: 32px;
    color: black;
    text-align: center;
    cursor: pointer;
}
.uploadbutton:hover{color:var(--vt-c-white);background-color:var(--vt-c-black-soft);}
.failedbutton {
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
.verification-status{}
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
    display: none;
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
    justify-content: center;
    width: 100%;
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