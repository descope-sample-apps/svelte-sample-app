<script lang="ts">
  	import '../styles.css';
    import { page } from "$app/stores"
</script>
  

<div class="col home profile-page">
  {#if $page.data.session}
    <h1>Welcome {$page.data.session?.user.email}</h1>
    <p>Session expiry: {$page.data.session?.expires}</p>
    {:else}
      <h1>Access Denied</h1>
      <a href="/auth/signin">
        You must be signed in to view this page
      </a>
  {/if}
</div>


<style>
  .profile-page {
    text-align: center;
  }
  h1 {
    font-size: 2em;
  }
</style>