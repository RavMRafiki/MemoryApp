<script>
  import { fade } from "svelte/transition";
  import Game from "./lib/Game.svelte";
  let cardNumber = 8;
  let isGameChoosen = false;
</script>

<svelte:head>
  <title>{!isGameChoosen && "Memory App"}</title>
</svelte:head>
{#if isGameChoosen}
  <Game
    {cardNumber}
    on:returnToMenu={() => {
      isGameChoosen = false;
    }}
  />
{:else}
  <h1 in:fade={{ delay: 400 }}>MeMoRy</h1>
  <form
    in:fade={{ delay: 400 }}
    on:submit|preventDefault={() => {
      isGameChoosen = true;
    }}
  >
    <label for="cardNumber">Choose the number of cards:</label>
    <input id="cardNumber" type="number" bind:value={cardNumber} />
    <button type="submit">Play</button>
  </form>
{/if}

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  input {
    background-color: #2c2b2b;
    text-align: center;
    outline: none;
    box-shadow: none;
    border: none;
    border-radius: 0.25rem;
    padding: 0.5rem;
  }
</style>
