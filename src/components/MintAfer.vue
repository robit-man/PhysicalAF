<template>
<div class="backdrop" style="">
  
<div class="mintmodal" style="">
          <button style="background-color:unset;cursor:pointer;border:unset;height:35px;width:35px;position:absolute;right:2rem;"
              type="button"
              class="close"
              @click="$emit('close')" >
              <img src="~/@/assets/icons/modalclose.svg" alt="">
            </button>
  <div class="column" style="margin:auto;width: max-content;">
            <div class="image-title" style="margin:auto;">
                <p ><b style="font-size:1.5rem;font-weight:bold;text-align:center!important;width:max-content;margin:1rem;">AFer #4342</b></p>
                <div class="image-stack" style="width:300px;height:300px;position:relative;display:flex;overflow:hidden;margin:1rem;">
                   <img src="~/@/assets/7af.png" style="position:absolute;height:300px;top:0px;filter:blur(10px);" alt="">
                  <img src="~/@/assets/question.svg" style="position:absolute;width:150px;top:50px;left:70px;" alt="">
                </div>
              </div>


              <div class="mint-button" style="display:flex;flex-flow:column;justify-content:center;">
              <p class="red" style="font-weight:bold;text-align:center;">Are you sure?</p>
              <p style="text-align:center;">AFers are free if you order a PhysicalAF card</p>
              <RouterLink to="/yournfts"><div class="cardbutton" 
              @click="$emit('close')">Order a Card</div></RouterLink>


              </div>

</div>
<div class="ammount" style="display:flex;flex-flow:row;justify-content:center;margin:;"><p style="font-size:1rem;margin:1rem;">{{ammount}} x AFers NFT {{ammount * 0.04}} ETH</p>
<div class="adjust" style="margin:auto 0rem;width:64px;display:flex;height:28px;flex-flow:row;justify-content:space-between;" ><img v-on:click="ammount ++" src="~/@/assets/icons/plus.svg" alt=""><img v-if="ammount > 0" v-on:click="ammount --" src="~/@/assets/icons/minus.svg" alt=""></div>
</div>
    <div class="confirm-button" style="">Confirm</div>
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
.cardbutton{cursor:pointer;margin:auto;width:max-content;margin-top:0.5rem;padding:0.5rem 2rem;border:1px solid white;border-radius:0.25rem;}
.confirm-button{margin-top:1rem;background:#B7EAC2;text-align:center;font-size:1.5rem;padding:0.5rem 2rem;cursor:pointer;color:#3F3C40;font-weight:600;border-radius:0.25rem;width:max-content;margin:auto;}
.buttondesc{margin-bottom:0.5rem;}
.mintmodal{width:100%;max-width:720px;padding:2rem;background:#1F1E1E;border-radius:0.25rem;height: max-content;
margin: auto;}
.backdrop{z-index:100;left:0px;top:0px;background-color:#0005;height:100vh;width:100vw;display:flex;flex-flow:wrap;justify-content:center;position:fixed;}

</style>