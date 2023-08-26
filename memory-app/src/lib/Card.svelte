<script>
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";

  export let open = true;
  /**
   * @type {(string | number)}
   */
  export let value = 0;
  export let highlited = false;
  const dispatch = createEventDispatcher();
  function sendClick() {
    dispatch("cardclick");
  }
  let src = '<img src="./cats/cat (1).jpg"';
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
      {#if value[0] !== "."}
        {#if open}
          {value}
        {:else}
          {"X"}
        {/if}
      {:else if open}
        <img src={`${value}`} alt={"" + value} />
      {:else}
        <span> {"X"}</span>{/if}
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
  .button:has(img),
  .button:has(span) {
    display: flex;
    width: 10rem;
    height: 11rem;
  }
  button:has(img),
  button:has(span) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    width: 9rem;
    height: 10rem;
  }
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 8px;
  }
</style>
