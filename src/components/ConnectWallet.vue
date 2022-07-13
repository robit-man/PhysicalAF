<template>
<div class="backdrop" style="">
  
<div class="buttonmodal" style="">

<button style="display:none;background-color:unset;cursor:pointer;border:unset;height:35px;width:35px;position:absolute;right:2rem;"
              type="button"
              class="close"
              @click="$emit('close')" >
              <img src="~/@/assets/icons/modalclose.svg" alt="">
            </button>

    <div class="buttondesc" style=""><p>Connect your wallet to continue.</p></div>
    <div class="connect-wallet" style="">Connect Wallet</div>
  </div>

</div>

</template>

<script>
export default {
    name: 'modal',
   data() {
    return {
      ammount: '1',
      mint: false,
      form: {
        quantity: ''
      },
      modalLoginOpen: false,
    };
  },
  mounted() {
  },
};



</script>
<style scoped>
.connect-wallet{text-align:center;font-size:1.5rem;padding:1rem;background:white;cursor:pointer;color:#3F3C40;font-weight:600;border-radius:3px;}
.buttondesc{margin-bottom:0.5rem;}
.buttonmodal{padding:1rem;background:#3F3C40;border-radius:3px;height: max-content;
margin: auto;}
.backdrop{z-index:100;left:0px;top:0px;background-color:#0005;height:100vh;width:100vw;display:flex;flex-flow:wrap;justify-content:center;position:fixed;}

</style>