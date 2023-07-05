<script>
  import Game from "./lib/Game.svelte";
  let cardNumber = 8;
  let isGameChoosen = false;
</script>
{#if isGameChoosen}
<Game {cardNumber}/>
{:else}
<h1>MeMoRy</h1>
  <form on:submit|preventDefault={()=>{isGameChoosen=true}}>
    <label for="cardNumber">Choose the number of cards:</label>
    <input id="cardNumber" type="number" bind:value={cardNumber}>
    <button type="submit">Play</button>
  </form>
{/if}

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>