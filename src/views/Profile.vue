<template>

<div class="hero-text" style="margin:auto;padding-left:2rem;">

<h2 style="font-size:3rem;transform-origin:10% 150%;transform:rotate(-14deg);">Your Profile</h2>
</div>

<div class="row centered" style="margin:auto;margin-top:10rem;">
    <div class="referral" v-if="referral">
      <div class="profilebox">
        <h1>Referral Link</h1>
        <p>Earn 5% from each card bought with your link</p>
        <p>Users who buy with a link also get 5% off</p>


        <div class="referral-form">
          
          <div class="referral-row">
            <p>Referral Code</p>
            <div class="inputbutton">
              <input type="text">
              <button>Copy</button>
            </div>
          </div>
          <div class="referral-row">
            <p>Referral Earnings</p>
            <div class="inputbutton">
              <input type="text">
              <button>Claim</button>
            </div>
          </div>

          <div class="referral-row">
            <p>Last Collected</p>
            <p>05/06/2022</p>
                      
          </div>

          <div class="referral-row">
            <p>Total Earnings</p>
            <p>05/06/2022</p>
                      
          </div>

        </div>



      </div>
  </div>

    <div class="basic">
      <div class="profilebox">
        <h1>Order History</h1>

        <!--REPLACE WITH FOR EACH-->

        <div class="orders">

          <div class="order row">
            <div class="quantitycard">10x</div>
            <div class="card">Physical Card</div>
            <div class="quantityaf">10x</div>
            <div class="af">AFer</div>
            <div class="price">0.4ETH</div>
            <div class="date">08/06/2022</div>
            <div class="viewbutton">View</div>
          </div>
          <div class="order row">
            <div class="quantitycard">10x</div>
            <div class="card">Physical Card</div>
            <div class="quantityaf">10x</div>
            <div class="af">AFer</div>
            <div class="price">0.4ETH</div>
            <div class="date">08/06/2022</div>
            <div class="viewbutton">View</div>
          </div>
          <div class="order row">
            <div class="quantitycard">10x</div>
            <div class="card">Physical Card</div>
            <div class="quantityaf">10x</div>
            <div class="af">AFer</div>
            <div class="price">0.4ETH</div>
            <div class="date">08/06/2022</div>
            <div class="viewbutton">View</div>
          </div>
          <div class="order row">
            <div class="quantitycard">10x</div>
            <div class="card">Physical Card</div>
            <div class="quantityaf">10x</div>
            <div class="af">AFer</div>
            <div class="price">0.4ETH</div>
            <div class="date">08/06/2022</div>
            <div class="viewbutton">View</div>
          </div>
          <div class="order row">
            <div class="quantitycard">10x</div>
            <div class="card">Physical Card</div>
            <div class="quantityaf">10x</div>
            <div class="af">AFer</div>
            <div class="price">0.4ETH</div>
            <div class="date">08/06/2022</div>
            <div class="viewbutton">View</div>
          </div>


        </div>


      </div>
    
  </div>

</div>

<div class="profileswap" v-on:click="referral = !referral" style="cursor:pointer;margin:auto;width:200px;margin-top:2rem;border:1px solid white;border-radius:0.25rem;display:flex;flex-flow:column;text-align:center;padding:0.5rem 1rem;">Toggle Referral</div>

</template>

<script>

export default {
   data() {
    return {
      wallet: false,
      referral: false,
      form: {
        quantity: ''
      },
      modalLoginOpen: false,
    };
  },
  mounted() {
  },
  components: {},
};



</script>
<style>
.centered{justify-content:center;}
.referral-row{display:flex;flex-flow:row;justify-content:space-between;margin:0.5rem auto;}
.referral-form{margin-top:1rem;}
.inputbutton > input{background:transparent;border:1px solid white;max-width:100px;}
.inputbutton > button{border:1px solid white;min-width:50px;border-top-right-radius:0.25rem;border-bottom-right-radius:0.25rem;}
.viewbutton{border:1px solid white;background:white;color:black;cursor:pointer;min-width:50px;border-radius:0.25rem;}
.viewbutton:hover{opacity:0.8;}
.profileswap:hover{background:white;color:black;}
.order{display:flex;flex-flow:space-between;margin:0.5rem auto;}
.order > div{margin-left:1rem;}
.order > div:nth-child(1){margin-left:0rem;}
.orders{max-height:300px;overflow-y:auto;}
.profilebox{text-align:center;padding:2rem;border:1px solid #fffa;min-width:200px;min-height:200px;}
.profilebox > h1{margin-bottom:1rem;}
.basic{max-height:500px;
  display:flex;flex-flow:row;margin:1rem 2rem;
}.referral{max-height:500px;
  display:flex;flex-flow:row;margin:1rem 2rem ;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
