<script>
  import threeDImg from '$lib/images/vecteezy_3d-illustration-holographic-abstract-shape_23638409_802.png';
</script>


<div class="row home">
  <div class="col half">
    <h1>SvelteKit Auth with Descope Landing Page Template</h1>
    <p>
      This is a sample app to demonstrate <a target="_blank" href="https://www.descope.com/">Descope</a>
      with <a target="_blank" href="https://sveltekit.authjs.dev">SvelteKit Auth</a> for authentication.
    </p>
    <a class="row profile" href="/profile">Profile <span>&#8594;</span></a>
  </div>
  <div class="col half right">
    <img class="triangle" src={threeDImg} alt="">
  </div>
</div>


<style>
  .half {
    align-items: flex-start;
    flex: 1;
  }
  .right {
    align-items: flex-end;
  }
  .triangle {
    width: 85%;
    height: auto;
  }
  .profile {
    box-sizing: border-box; 
    width: 100%;
    padding: 2vh 2vh;
    font-size: 1.2em;
    justify-content: space-between;
    align-self: flex-start;
    background-color: rgb(234, 234, 234);
    color: rgb(23, 23, 23);
    font-family: 'Golos Text', sans-serif;
  }
  @media only screen and (max-width: 768px) {
    .half {
      width: 100%;
      flex: none;
      align-items: center;
    }
  }
</style>