<template>
    <div class="fill-h-f column ">
    
        <div class="row between ">
            <h1>Verification </h1>
            <h3 style="height: 3rem; cursor:pointer;margin:auto;margin-left:1rem;padding:1rem;background:#3F3C40;border-radius:0.5rem;line-height:1rem;border:1px solid #505050;" v-if="step < 7" v-on:click="step ++">{{step}}</h3>
            <h3 style="height: 3rem; cursor:pointer;margin:auto;margin-left:1rem;padding:1rem;background:#B7EAC2;border-radius:0.5rem;line-height:1rem;border:1px solid gray;" v-if="step > 6" v-on:click="vstat = true">V</h3>
            <h3 style="height: 3rem; cursor:pointer;margin:auto;margin-left:1rem;padding:1rem;background:#EAB7B7;border-radius:0.5rem;line-height:1rem;border:1px solid gray;" v-if="step > 6" v-on:click="vstat = false">X</h3>
            <h3 style="height: 3rem; cursor:pointer;margin:auto;margin-left:1rem;padding:1rem;background:#3F3C40;border-radius:0.5rem;line-height:1rem;border:1px solid gray;" v-if="step > 6" v-on:click="step = 0">!</h3>
            <div class="verify-row">
    
    
                <div class="verification-status">
    
                    <div class="row">
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
    
            <div class="upload section" v-if="step <= 2">">
                <div class="section-title">
                    <h2>Upload</h2>
                </div>
    
                <div class="row between">
    
                    <div class="text-section">
    
                        <div class="instruction" style="margin:2rem 0rem;max-width:500px;">
                            <h3>Scan the QR on your PhysicalAF card to verify!</h3>
                        </div>
    
                        <div class="action row">
    
                            <div class="uploadbutton">UPLOAD IMAGE</div>
                            <p style="line-height:1;padding-left:1rem;font-size:1rem;line-height:2;font-weight:bold;">Or Visit On Mobile <br> Metamask Browser</p>
    
                        </div>
    
    
                        <div class="action " style="margin-top:4rem;">
                            <h3>Dont Have A PhysicalAF Card?</h3>
                            <div class="orderbutton">ORDER NOW</div>
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
                                <h3 v-if="imageprocessed == false">PROCESSING</h3>
                                <h3 v-if="imageprocessed == true">PROCESSED</h3>
                            </div>
    
                        </div>
                    </div>
                    <div class="processingsteps">
                        <h3>Checking Card Validity on the Blockchain...</h3>
                        <h3>Checking Owner and Connected Wallet...</h3>
                        <h3>Generating Status Report...</h3>
                    </div>
                </div>
            </div>
    
    
    
            <div class="verified section" v-if="vstat == true && step >= 5">
                <div class="section-title">
                    <h2>Success</h2>
                </div>
    
    
            </div>
            <div class="failed section" v-if="vstat == false && step >= 5">
                <div class="section-title">
                    <h2>Failed</h2>
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
                <div class="orderbutton" v-if="!modalLoginOpen" v-on:click="wallet = !wallet">Order</div>
                <RouterLink v-else class="orderbutton" style="animation:flash 1s linear infinite;" to="/mint">ORDER</RouterLink>
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
}

.orderbutton {
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
    background: url(https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F33.media.tumblr.com%2F3061908a43fc1f72642c202c1080c964%2Ftumblr_nb0ticjU2A1scfauvo1_400.gif&f=1&nofb=1);
    background-size: auto;
    background-clip: border-box;
    background-size: auto;
    background-clip: border-box;
    background-size: cover;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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

.orderbutton:hover {
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
</style>