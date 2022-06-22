<template>
<div class="backdrop" style="">
  
<div class="mintmodal" style="">
           <button style="z-index:100;background-color:unset;cursor:pointer;border:unset;height:35px;width:35px;position:absolute;right:2rem;"
              type="button"
              class="close"
              @click="$emit('close')" >
              <img src="~/@/assets/icons/modalclose.svg" alt="">
            </button>

  <div class="column" style="margin:auto;width: max-content;">


            <div class="image-title" style="">


                <h4 style="font-size:2rem;font-weight:bold;text-align:center!important;width:max-content;margin:auto;">Preview</h4>
                
                <div class="data" >

                  <div class="row between" style="margin-bottom:1rem;">
                    <h4>Referral Code Save 5%</h4> <div class="input"><input type="text"><button>Verify</button></div>
                  </div>


                  <div class="row between">
                    <h4>1x Physical NFT card</h4>
                    <h4>0.027 ETH</h4>
                  </div>
                  <div class="row between">
                    <h4>1x AFers NFT</h4>
                    <h4>0.027 ETH</h4>
                  </div>
                  <div class="row between">
                    <h4>Referral Discount</h4>
                    <h4>0.0005 ETH</h4>
                  </div>
                  
                  <div class="row between">
                    <h4 style="font-weight:bold;">1x Physical NFT card</h4>
                    <h4 style="font-weight:bold;">0.037 ETH</h4>
                  </div>

                </div>
                
                
                <div class="nftpreview" style="display:flex;flex-flow:row;">
                   <img src="~/@/assets/mfer119.png" style="width:300px;margin:1rem;" alt="">
                   <img src="~/@/assets/mfer119.png" style="width:300px;margin:1rem;" alt="">
                </div>
              </div>



</div>
    <div class="confirm-button" style="">Checkout</div>
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
      preview: false,
    };
  },
  mounted() {
  },
};



</script>


<style scoped>
.data{margin:1rem;}
.cardbutton{cursor:pointer;margin:auto;width:max-content;margin-top:0.5rem;padding:0.5rem 2rem;border:1px solid white;border-radius:0.25rem;}
.confirm-button{margin-top:1rem;background:#B7EAC2;text-align:center;font-size:1.5rem;padding:0.5rem 2rem;cursor:pointer;color:#3F3C40;font-weight:600;border-radius:0.25rem;width:max-content;margin:auto;}
.buttondesc{margin-bottom:0.5rem;}
.mintmodal{width:100%;max-width:720px;padding:2rem;background:#1F1E1E;border-radius:0.25rem;height: max-content;
margin: auto;}
.backdrop{z-index:100;left:0px;top:0px;background-color:#0005;height:100vh;width:100vw;display:flex;flex-flow:wrap;justify-content:center;position:fixed;}

</style>