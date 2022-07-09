<template>
    <div class="fill-h-f column between">
        <div class="row center auto">
    
            <div class="hero-text">
    
                <h2 style="font-size:3rem;">Learn More!</h2>
                <h1 class="header green" style="">PhysicalAF</h1>
                <p style="margin-bottom:1rem;font-size:20px;width:800px;font-weight:bold;">What is a PhysicalAF card? </p>
                <p style="margin-bottom:1rem;font-size:20px;width:800px;">The PhysicalAF card is a proof of NFT ownership (PoN), granting the ability to verify you own the NFT without having to connect your wallet. Verifying your own PhysicalAF card is quick and easy. To prove verification, simply scan the QR code
                    on the PhysicalAF card.</p>
                <p style="margin-bottom:1rem;font-size:20px;width:800px;">PhysicalAF cards give you a unique way to prove ownership of your digital assets in the real world. </p>
                <p style="margin-bottom:1rem;font-size:20px;width:800px;font-weight:bold;">How is it done? </p>
                <p style="margin-bottom:1rem;font-size:20px;width:800px;">Our verification technology uses live onchain data to validate if the Ethereum address which purchased the PhysicalAF card still holds the NFT in their wallet. If the wallet that purchased the card still owns the NFT your verification will
                    be successful. However, a transfer of the NFT to another wallet will deem the PhysicalAF card unverifiable and the verification will fail. This process ensures authenticity and validity of the digital goods.</p>
                <p style="margin-bottom:1rem;font-size:20px;width:800px;">You can order as many copies of the same NFT as you like, but be aware that if your NFT doesnt remain in the wallet used to order, all your cards will become unverifiable. </p>
    
    
            </div>
    
            <div class="mintbox" style="display:flex;flex-flow:column;margin:auto;margin-top:5rem;">
    
                <div class="image-title">
                    <p style="font-size:2.5rem;text-align:center;font-weight:bold;margin:auto;">Hover</p>
                    <img src="~/@/assets/aboutcard.png" style="height:500px;" alt="">
                </div>
    
                <div class="desc" style="display:flex;flex-flow:row;justify-content:space-between;">
                    <p>Description</p>
                    <p>QR Code</p>
                </div>
                <div class="desc" style="display:flex;flex-flow:row;position:absolute;width:400px;top:100px;right:-420px;transform-origin:0% 100%;transform:rotate(90deg);justify-content:space-between;">
                    <p>NFT</p>
                    <p>Date Of Purchase</p>
                </div>
            </div>
    
    
        </div>
    
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
    border-radius: .5rem;
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

.hero-text {
    margin: auto 0rem;
}
</style>