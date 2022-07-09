<template>
    <div class="fill-h-f column between">
        <div class="row center auto">
    
            <div class="hero-text">
    
                <h2 style="font-size:3rem;">Partnership</h2>
                <h1 class="header green" style="">Partner With PhysicalAF</h1>
                <p style="margin-bottom:1rem;font-size:20px;width:800px;font-weight:bold;">What is a PhysicalAF card? </p>
                <p style="margin-bottom:1rem;font-size:20px;width:800px;">The PhysicalAF card is a proof of NFT ownership (PoN), granting the ability to verify you own the NFT without having to connect your wallet. Verifying your own PhysicalAF card is quick and easy. To prove verification, simply scan the QR code
                    on the PhysicalAF card.</p>
      
    
            </div>
       <div class="mintbox" style="display:flex;flex-flow:column;margin:auto;min-width:50%;">
                        <img src="~/@/assets/wall.jpeg" style="mix-blend-mode:lighten;position:fixed;top:0px;max-height:100vh;right:0vw;width:auto;z-index:-1;" alt="">
                   
    
    
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