<template>
    <div class="fill-h-f column ">
    
        <div class="row between " style="margin-bottom:0rem;">
            <h1 style="max-width:400px;width:100%;">Verification </h1>
            <div style="display:flex;flex-flow:row;margin-bottom:2rem;">
                <h3 style="height: 3rem; cursor:pointer;margin:auto;margin-left:1rem;padding:1rem;background:#3F3C40;border-radius:0.25rem;line-height:1rem;border:1px solid #505050;" v-if="step < 6" v-on:click="step ++">{{step}}</h3>
                <h3 style="height: 3rem; cursor:pointer;margin:auto;margin-left:1rem;padding:1rem;background:#B7EAC2;border-radius:0.25rem;line-height:1rem;border:1px solid gray;" v-if="step > 4" v-on:click="vstat = true">V</h3>
                <h3 style="height: 3rem; cursor:pointer;margin:auto;margin-left:1rem;padding:1rem;background:#FF6565;border-radius:0.25rem;line-height:1rem;border:1px solid gray;" v-if="step > 4" v-on:click="vstat = false">X</h3>
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
                            <div class="stat-1" style="background:#3F3C40;" v-if="step >= 5 && vstat == false"><img src="~/@/assets/x.svg" width="60" height="60" alt=""></div>
                        </div>
    
                    </div>
                </div>
    
            </div>
    
    
    
        </div>
    
        <div class="verify-sections">
    
            <div class="upload section" v-if="step <= 2">
    
    
                <div class="wrap between">
    
                    <div class="text-section">
                        <div class="section-title Desktop">
                            <h2>Upload QR</h2>
                        </div>
                        <div class="section-title Mobile">
                            <h2>Scan QR</h2>
                        </div>
                        <div class="row">
                            <div class="arrows column center" style="">
                                <img class="uparrow" v-if="sectionNum == 1" src="~/@/assets/arrow-up.svg" alt="" style="opacity:0.5;">
                                <img class="downarrow" v-if="sectionNum == 1" v-on:click="sectionNum = 2" src="~/@/assets/arrow-down.svg" alt="" style="">
    
                                <img class="uparrow" v-if="sectionNum == 2" v-on:click="sectionNum = 1" src="~/@/assets/arrow-up.svg" alt="" style="">
                                <img class="downarrow" v-if="sectionNum == 2" src="~/@/assets/arrow-down.svg" alt="" style="opacity:0.5;">
                            </div>
                            <div class="scrollsection">
    
                                <div v-if="sectionNum == 1" class="section1">
                                    <h2 style="margin-bottom:1rem;margin-top:1rem;">How to Verify</h2>
                                    <p style="margin-bottom:1rem;font-size:20px;width:800px;">Verifying your PhysicalAF card is quick and easy. <b>To prove verification, simply scan the QR code on the bottom right of your PhysicalAF card.</b> This should direct you to our mobile website where you can begin mobile
                                        verification. </p>
                                    <h2 style="margin-bottom:1rem;">Non-Mobile Verification </h2>
                                    <p style="margin-bottom:1rem;font-size:20px;width:800px;">To verify your card on a computer or other non-mobile device, simply upload an image of your PhysicalAF cards QR. </p>
    
    
    
    
    
                                </div>
                                <div v-if="sectionNum == 2" class="section2">
                                    <h2 style="margin-bottom:1rem;">Link your Card to its NFT</h2>
    
                                    <p style="margin-bottom:1rem;font-size:20px;width:800px;">If you own both a PhysicalAF card and the NFT displayed on that card but you are not the original purchaser of the card. You will need to connect your card to your NFT to be able to verify them. </p>
    
                                    <p style="margin-bottom:1rem;font-size:20px;width:800px;"><b>Connecting a PhysicalAF card to an NFT:</b><br>1. Scan or upload the QR of your Physical Card.<br>2. Connect your wallet.<br>3. Select “link”. <br>4. If you own the NFT and PhysicalAF card this process will link them.<br>5.
                                        You can now verify your PhysicalAF card. </p>
    
    
    
    
    
                                </div>
                            </div>
    
                        </div>
    
    
                        <div v-if="sectionNum == 1" class="action row" style="margin-left:5rem;margin-top:1rem;">
    
                            <div v-if="step == 0" v-on:click="step ++" class="uploadbutton">UPLOAD QR IMAGE</div>
                            <div v-if="step == 1" v-on:click="step ++" class="uploadbutton">UPLOADING...</div>
                            <div v-if="step == 2" v-on:click="step ++" class="uploadbutton">DONE UPLOADING</div>
                            <div v-if="step == 2" class="" style="width:16px;"> </div>
                            <div v-if="step == 2" v-on:click="step = 0" class="uploadbutton" style="background-color:#FF6565;height:64px;width:64px;display:flex;flex-flow:row;justify-content: center;"><img src="~/@/assets/reload.svg" width="32" alt=""></div>
    
    
                        </div>
                        <p v-if="sectionNum == 1" v-on:click="sectionNum = 2" style="cursor:pointer;margin-left:5rem;text-decoration:underline;">Click here to Link a PhysicalAF Card to it’s NFT</p>
                        <div v-if="sectionNum == 2" class="action row" style="margin-left:5rem;margin-top:1rem;">
    
                            <div v-on:click="step ++" class="uploadbutton">LINK</div>
    
                        </div>
                    </div>
    
    
    
                    <div class="image-title row center" style="margin:auto;">
                        <img src="~/@/assets/card-front.png" style="max-width:400px;margin-top:2rem;" alt="">
                        <img src="~/@/assets/play.svg" class="qr" alt="">
    
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
                                <div v-on:click="processCard(), imageprocessed = true, step ++" v-if="imageprocessed == false">PROCESSING</div>
                                <div v-on:click="imageprocessed = false, step ++" v-if="imageprocessed == true">PROCESSED</div>
                            </div>
    
                        </div>
                    </div>
                    <div id="processsteps" class="processingsteps">
                        <h3 class="processingstep" style="margin-bottom:4rem;margin-left:2rem;">Checking Card Validity on the Blockchain...</h3>
                        <h3 class="processingstep" style="margin-bottom:4rem;margin-left:2rem;">Checking Owner and Connected Wallet...</h3>
                        <h3 class="processingstep" style="margin-left:2rem;">Generating Status Report...</h3>
                    </div>
                </div>
    
    
            </div>
    
    
    
            <div class="verified section" v-if="vstat == true && step >= 5">
                <div class="section-title">
                    <h2 style="color:#B7EAC2">SUCCESS</h2>
    
                </div>
    
    
                <div class="row between">
    
                    <div class="text-section">
    
                        <div class="instruction" style="margin:2rem 0rem;">
                            <h3>The Verification of your Physical NFT was a Success! </h3>
                            <p></p>
                        </div>
                        <div class="row start">
                            <div class="column">
                                <h3 style="height:64px;line-height:64px;"><b>{{nftName}}</b></h3>
                                <img src="~/@/assets/imagetest.png" alt="">
                                <div class="image-desc" style="margin:1rem 0rem;">
                                    <p>Description</p>
                                    <hr>
                                    <p>By PhysicalAF</p>
                                </div>
                                <a href="">
                                    <p><b>Verified Collection</b> <img src="~/@/assets/checkmark.svg" alt=""></p>
                                </a>
    
                            </div>
                            <div class="column" style="margin-top:64px;margin-left:2rem;max-width:500px;">
                                <div class="text-desc">
                                    <p><b>About Frank</b></p>
                                    <hr style="width:30%;min-width:200px;">
                                    <p>Frank may not be the most sane, but he sure knows how to be a Frank. Franks are a one-of-a-kind and live by a set of rules that only make sense to them.</p>
                                </div>
                                <div class="row icons between" style="margin:1rem 0rem;max-width:256px;">
                                    <a href=""><img src="~/@/assets/icons/world.svg" alt=""></a>
                                    <a href=""><img src="~/@/assets/icons/twitter.svg" alt=""></a>
                                    <a href=""><img src="~/@/assets/icons/discord.svg" alt=""></a>
                                    <a href=""><img src="~/@/assets/icons/opensea.svg" alt=""></a>
                                    <a href=""><img src="~/@/assets/icons/eth.svg" alt=""></a>
                                </div>
                                <div class="row between filters">
                                    <div class="column">
    
                                        <select name="Details" id="details">
                                                    <option value="volvo">Details</option>
                                                    <option value="saab">Detail</option>
                                                    <option value="opel">Detail</option>
                                                    <option value="audi">Detail</option>
                                                </select>
                                    </div>
                                    <div class="column">
    
                                        <select name="Properties" id="properties">
                                                    <option value="volvo">Properties</option>
                                                    <option value="saab">Property</option>
                                                    <option value="opel">Property</option>
                                                    <option value="audi">Property</option>
                                                </select>
                                    </div>
                                </div>
                            </div>
    
    
                        </div>
                    </div>
    
                    <div class="column between">
                        <div class="cardviewverify">
                            <Renderer id="c" ref="renderer" resize antialias alpha :orbit-ctrl="{ autoRotate: false, enableZoom: false, enablePan: false,  enableDamping: true, dampingFactor: 0.05 }">
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
                                                <Texture antialias refraction :refraction-ratio="0.5" src="/card-front.png" />
                                            </StandardMaterial>
                                        </Box>
    
                                        <Box ref="mesh" :width="3" :height="4" :depth="0" :position="{x: 0, y:  0, z: -0.0253}" :depthSegments="20" :width-segments="200" :height-segments="200">
                                            <BasicMaterial :props="{ displacementScale: 1 }">
                                                <Texture refraction :refraction-ratio="0.2" src="/card-back.png" />
                                            </BasicMaterial>
                                        </Box>
                                    </Group>
    
                                </Scene>
    
                                <EffectComposer>
                                    <RenderPass />
                                </EffectComposer>
    
                            </Renderer>
                        </div>
    
                        <a href="">
                            <div class="viewbutton row between">
                                View on Opensea <img style="background:white;margin:0.5rem 0rem;padding:0.25rem;margin-right:-0.5rem;border-radius:2px;" src="~/@/assets/Openseagray.svg" alt="">
                            </div>
                        </a>
    
    
                    </div>
                </div>
    
    
            </div>
            <div class="failed section" v-if="vstat == false && step >= 5">
                <div style="color:#FF6565;display:flex;flex-flow:row;" class="section-title">
                    <h2 style="color:#FF6565">FAILED</h2>
                    <h3 style="color:#FF6565;margin-left:1rem;line-height: 4rem;">Not Today Buddy...</h3>
                </div>
    
                <div class="row between">
    
                    <div class="text-section between">
    
                        <div class="instruction" style="margin-top:4rem;">
                            <h3 style="margin-bottom:2rem;">The Verification of your Physical NFT failed. </h3>
                            <h3 style="font-weight:lighter;"><b>{{nftName}}</b> is no longer in your wallet.</h3>
                            <p></p>
                        </div>
    
                        <div class="action ">
    
                            <p v-on:click="sectionNum = 2, step = 2" style="cursor:pointer;text-decoration:underline;"><b>Click here</b> to Link a PhysicalAF Card to it’s NFT</p>
    
                            <div class="uploadbutton" v-on:click="step = 0">START OVER
                            </div>
                        </div>
                    </div>
    
                    <div class="column between">
                        <div class="cardviewverify">
                            <h1 style="color:black;font-size:128px;position:absolute;top:calc(50% - 64px);left:64px;text-align:center;transform:rotate(45deg);z-index:2;">FAILED</h1>
                            <h1 style="color:#FF6565;font-size:128px;position:absolute;top:calc(50% - 72px);left:64px;text-align:center;transform:rotate(45deg);z-index:3;">FAILED</h1>
                            <Renderer id="c" ref="renderer" resize antialias alpha :orbit-ctrl="{ autoRotate: false, enableZoom: false, enablePan: false,  enableDamping: true, dampingFactor: 0.05 }">
                                <Camera :position="{ x: 0, y: 0, z: 6 }" />
                                <Scene>
                                    <AmbientLight :intensity="0.25" />
                                    <PointLight color="#ff1111" :intensity="0.25" :position="{x: 100, y: -150, z: 120 }" />
                                    <PointLight color="#ff1212" :intensity="0.25" :position="{x: -100, y: 150, z: 150 }" />
                                    <PointLight color="#ff2727" :intensity="0.25" :position="{x: 100, y: -100, z: -100 }" />
                                    <PointLight color="#ff2929" :intensity="0.25" :position="{x: -100, y: 150, z: -120 }" />
                                    <PointLight color="#fff303" :intensity="0.25" :position="{x: 100, y: -150, z: -150 }" />
                                    <PointLight color="#fff239" :intensity="0.25" :position="{x: -100, y: 100, z: 100 }" />
                                    <Group>
                                        <Box cast-shadow ref="mesh" :width="3" :height="4" :depth="0.05" :position="{x: 0, y:  0, z: 0}" :depthSegments="20" :width-segments="200" :height-segments="200">
                                            <MatcapMaterial name="3B3C3F_DAD9D5_929290_ABACA8" />
                                        </Box>
    
                                        <Box ref="mesh" :width="3" :height="4" :depth="0" :position="{x: 0, y:  0, z: 0.0253}" :depthSegments="20" :width-segments="200" :height-segments="200">
                                            <StandardMaterial :props="{ displacementScale: 1 }">
                                                <Texture antialias refraction :refraction-ratio="0.5" src="/card-front.png" />
                                            </StandardMaterial>
                                        </Box>
    
                                        <Box ref="mesh" :width="3" :height="4" :depth="0" :position="{x: 0, y:  0, z: -0.0253}" :depthSegments="20" :width-segments="200" :height-segments="200">
                                            <BasicMaterial :props="{ displacementScale: 1 }">
                                                <Texture refraction :refraction-ratio="0.2" src="/card-back.png" />
                                            </BasicMaterial>
                                        </Box>
                                    </Group>
    
                                </Scene>
    
                                <EffectComposer>
                                    <RenderPass />
                                </EffectComposer>
    
                            </Renderer>
    
                        </div>
                        <a href="">
                            <div class="viewbutton row between">
                                View on Opensea <img style="background:white;margin:0.5rem 0rem;padding:0.25rem;margin-right:-0.5rem;border-radius:2px;" src="~/@/assets/Openseagray.svg" alt="">
                            </div>
                        </a>
    
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
            nftName: 'Frank#000',
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
        processCard() {
            var m = document.getElementById('processsteps');
            // Get all <li> children of #menu
            var lis = m.getElementsByTagName('h3');

        },


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
@keyframes opaque {
    0% {
        opacity: 0.5;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0.5;
    }
}

.processingsteps {
    width: 100%;
    text-align: left;
}

.cardviewverify {
    min-height: 60vh;
    min-width: 600px;
}

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

.uploadbutton>div {
    font-weight: bold;
}

.uploadbutton:hover {
    color: var(--vt-c-white);
    background-color: var(--vt-c-black-soft);
}

.failedbutton {
    height: auto;
    width: max-content;
    display: flex;
    flex-flow: row;
    justify-content: center;
    cursor: pointer;
    padding: 0.5rem 1rem;
    color: #030306;
    background-color: #FF6565;
    border-radius: 0.25rem;
    margin: auto 0;
    font-size: 1.5rem;
    font-weight: bold;
}

.icons>a {
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    background: #3F3C40;
    border-radius: 0.25rem;
    width: 42px;
}

.icons>a:hover {
    transform: scale(1.1);
}

.viewbutton {
    height: 64px;
    background: #3F3C40;
    color: white;
    line-height: 64px;
    padding: 0rem 1rem;
    font-weight: bold;
    font-size: 1.5rem;
    border-radius: 0.25rem;
    width: 350px;
    margin: auto;
    margin-top: -4rem;
}

.verification-status {}

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
    color: black;
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

.text-section {
    display: flex;
    flex-flow: column;
}

#details {
    border: 1px solid white;
    background: transparent;
    color: white;
    font-size: 1rem;
    width: 200px;
    padding: 0.25rem;
    border-radius: 0.25rem;
}

#properties {
    border: 1px solid white;
    background: transparent;
    color: white;
    font-size: 1rem;
    width: 200px;
    padding: 0.25rem;
    border-radius: 0.25rem;
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

.uparrow {
    margin-bottom: 1rem;
}

.downarrow {
    margin-top: 1rem;
}

.arrows {
    height: 200px;
    margin-top: auto;
    margin-bottom: auto;
    border-right: 3px solid white;
    margin-right: 2rem;
    padding-right: 2rem;
}

option {
    background: black;
    border: unset;
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

.qr {
    width: 64px;
    margin-top: auto;
    margin-bottom: 2rem;
    margin-left: 1rem;
    animation:float 2s ease infinite;
}
@keyframes float{

    0%{    transform: rotate(180deg)translatex(0rem);
}
    50%{    transform: rotate(180deg)translatex(1rem);
}
    100%{    transform: rotate(180deg)translatex(0rem);
}
}
.verify-row {
    padding-right: 400px;
    transition: all 0.2s ease;
    margin: auto 0rem;
    display: flex;
    flex-flow: row;
    justify-content: center;
    width: 100%;
}

.processingsteps>h3 {
    opacity: 0.5;
}

.Mobile {
    display: none;
}

.Desktop {
    display: block;
}

@media (max-width: 1024px) {
    .Desktop {
        display: none;
    }
    .Mobile {
        display: block;
    }
    .statushr {
        background-color: white;
        opacity: 1;
        height: 2px;
        margin-top: auto;
        margin-bottom: auto;
        width: 20%;
        border: unset;
    }
    .cardviewverify {
        height: 60vh;
        min-width: 600px;
        margin-top: 0px;
        margin-right: auto;
    }
    .processingsteps>h3 {
        font-size: 1rem;
        text-align: center;
        margin-right: auto;
    }
    .uparrow {
        margin: 1rem;
        height: 32px;
    }
    .downarrow {
        margin: 1rem;
        height: 32px;
    }
    .arrows {
        height: auto;
        width: 100%;
        display: flex;
        flex-flow: row;
        justify-content: flex-start;
        margin-top: auto;
        margin-bottom: auto;
        border-right: 0px solid white;
        margin-right: 2rem;
        padding-right: 2rem;
    }
    .verify-row {
        flex-flow: column;
        padding-right: unset;
    }
    p {
        max-width: calc(100vw - 2rem) !important;
    }
}
</style>