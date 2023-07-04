<script>
  import { createEventDispatcher } from "svelte";

    export let open = false;
    export let value = 0;
    const dispatch = createEventDispatcher();
    function sendClick(){
        dispatch("cardclick");
    }
</script>

<button on:click={sendClick} class="card">
    {#if open}
         {value}
    {:else}
         {"X"}
    {/if}
</button>