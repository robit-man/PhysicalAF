<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header>
        <RouterLink to="/"><img alt="Vue logo" class="logo" src="@/assets/logo.png" height="32" /></RouterLink>
    
        <div class="wrapper">
    
            <nav>
                <RouterLink to="/">
                    <div class="menubutton">Home</div>
                </RouterLink>
                <RouterLink to="/about">
                    <div class="menubutton">About</div>
                </RouterLink>
                <RouterLink to="/mint">
                    <div class="menubutton">AFers</div>
                </RouterLink>
                <div class=" more">More
    
                    <RouterLink to="/gallery">
                        <div class="">Gallery</div>
                    </RouterLink>
                    <RouterLink to="/Verify">
                        <div class="">Verify</div>
                    </RouterLink>
                    <RouterLink to="/partner">
                        <div class="">Partner</div>
                    </RouterLink>
    
                </div>
                <div class="menubutton"><img src="@/assets/icons/twitter.svg" alt=""></div>
                <div class="menubutton"><img src="@/assets/icons/discord.svg" alt=""></div>
                <div class="menubutton"><img src="@/assets/icons/opensea.svg" alt=""></div>
    
                <RouterLink to="/profile">
                    <div class="profilebutton"><img src="@/assets/icons/profile.svg" alt=""></div>
                </RouterLink>
                <div class="walletbutton"><b style="margin:auto;font-weight:bold;margin-right:0.5rem;font-size:1.5rem;line-height:1rem;">Connect</b><img src="@/assets/icons/wallet.svg" alt=""></div>
    
            </nav>
        </div>
    </header>
    
    <RouterView />
</template>

<style>
@import '@/assets/base.css';
.profilebutton {
    height: 48px;
    width: 48px;
    display: flex;
    padding: 0.5rem;
    background: var(--vt-c-white);
    border-radius: 0.25rem;
    margin: auto 0.5rem;
    cursor: pointer;
}

.walletbutton {
    padding: 0.5rem;
    height: 48px;
    width: auto;
    display: flex;
    padding: 0.5rem 1rem;
    color: var(--vt-c-black-mute);
    background: var(--vt-c-white);
    margin: auto 0.5rem;
    font-weight: bold;
    border-radius: 0.25rem;
    margin-right: 0rem;
    cursor: pointer;
}

.walletbutton:hover {
    opacity: 0.5;
}

.profilebutton:hover {
    opacity: 0.5;
}

header {
    height: 100%;
    z-index: 100;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    line-height: 1.5;
    max-height: 6rem;
    width: 100%;
}

.menubutton {
    line-height: 1.5;
    height: 30px;
    padding: 0rem 1rem;
    margin: auto 0.5rem;
    display: flex;
    flex-flow: wrap;
    position: relative;
    text-align: center;
    justify-content: center;
    border-radius: 0.25rem;
    background-color: #3F3C40;
    border: 1px solid;
    color: white;
    cursor: pointer;
    border-color: #3F3C40;
    box-shadow: 0px 2px 5px #0005;
}

.menubutton:hover {
    border-color: white;
    background-color: transparent;
}

.more {
    line-height: 1.5;
    text-align: center;
    height: 30px;
    padding: 0rem 1rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    display: flex;
    overflow: hidden;
    flex-flow: column;
    justify-content: flex-start;
    border-radius: 0.25rem;
    background-color: #3F3C40;
    border: 1px solid;
    color: white;
    cursor: pointer;
    border-color: #3F3C40;
    box-shadow: 0px 2px 5px #0005;
}

.more:hover {
    margin-top: 0.5rem;
    margin-bottom: -90rem;
    height: 100px;
    border-color: white;
}

nav {
    display: flex;
    flex-flow: row;
    width: auto;
    font-size: 12px;
    text-align: center;
    margin: auto;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

a {
    text-decoration: none;
    color: var(--vt-c-white);
    transition: 0.4s;
}

@media (hover: hover) {
    a:hover {}
}

nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
}

nav a.router-link-exact-active {
    color: var(--vt-c-green);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: flex;
}

nav a:first-of-type {
    border: 0;
}

@media (min-width: 1024px) {
    body {
        display: flex;
        place-items: center;
    }
    #app {
        padding: 0 4rem;
    }
    header {
        display: flex;
        place-items: center;
    }
    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }
    .logo {
        margin: 0 2rem 0 0;
    }
    nav {
        text-align: left;
        font-size: 1rem;
        padding: 1rem 0;
    }
}

@media (max-width: 1024px) {
    #app{overflow-x:hidden;}
    nav{display: none;}
}
</style>
