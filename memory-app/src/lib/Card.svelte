<script>
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";

  export let open = true;
  export let value = 0;
  export let highlited = false;
  const dispatch = createEventDispatcher();
  function sendClick() {
    dispatch("cardclick");
  }
</script>

<div class="button">
  {#key open}
    <button
      on:click={sendClick}
      class="card"
      class:highlited
      in:fade={{ delay: 400 }}
      out:fade
    >
      {#if open}
        {value}
      {:else}
        {"X"}
      {/if}
    </button>
  {/key}
</div>

<style>
  .highlited {
    border: 2px white solid;
  }
  .button {
    display: flex;
    min-width: 5rem;
    min-height: 6rem;
  }
  button {
    position: absolute;
    display: block;
  }
</style>
