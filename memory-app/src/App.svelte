<script>
  import { fade } from "svelte/transition";
  import Game from "./lib/Game.svelte";
  let cardAmount = 8;
  let isGameChoosen = false;
  let gameType = "number";
</script>

<svelte:head>
  <title>{!isGameChoosen && "Memory App"}</title>
</svelte:head>
{#if isGameChoosen}
  <Game
    cardNumber={cardAmount}
    on:returnToMenu={() => {
      isGameChoosen = false;
    }}
    type={gameType}
  />
{:else}
  <div class="">
    <h1 in:fade={{ delay: 400 }}>MeMoRy</h1>
    <form
      in:fade={{ delay: 400 }}
      on:submit|preventDefault={() => {
        isGameChoosen = true;
      }}
    >
      <label for="card-amount">Choose the number of cards:</label>
      <input id="card-amount" type="number" bind:value={cardAmount} />
      <span>Choose type of cards:</span>
      <div class="type-options">
        <label for="number" class:highlighted={gameType === "number"}>
          Number
        </label>
        <input
          bind:group={gameType}
          type="radio"
          name="type"
          id="number"
          value="number"
          class="type-selector"
        />
        <label for="letter" class:highlighted={gameType === "letter"}>
          Letter
        </label>
        <input
          bind:group={gameType}
          type="radio"
          name="type"
          id="letter"
          value="letter"
          class="type-selector"
        />
        <label
          for="korean-letter"
          class:highlighted={gameType === "korean-letter"}
        >
          Korean Letter
        </label>
        <input
          bind:group={gameType}
          type="radio"
          name="type"
          id="korean-letter"
          value="korean-letter"
          class="type-selector"
        />
        <label for="cat" class:highlighted={gameType === "cat"}>
          Cat
        </label>
        <input
          bind:group={gameType}
          type="radio"
          name="type"
          id="cat"
          value="cat"
          class="type-selector"
        />
      </div>
      <button type="submit">Play</button>
    </form>
  </div>
{/if}

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  #card-amount {
    background-color: #2c2b2b;
    text-align: center;
    outline: none;
    box-shadow: none;
    border: none;
    border-radius: 0.25rem;
    padding: 0.5rem;
  }
  .type-selector {
    display: none;
  }
  .highlighted {
    border: 1px white solid !important;
  }
  .type-options label {
    background-color: #2c2b2b;
    padding: 0.5rem;
    border-radius: 0.25rem;
  }
  .type-options label:hover {
    border: 1px #646cff solid;
  }
  .type-options {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
</style>
