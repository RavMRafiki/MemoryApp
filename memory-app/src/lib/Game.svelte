<script>
  import { createEventDispatcher } from "svelte";
  import Card from "./Card.svelte";
  import { fade } from "svelte/transition";
  import MatrixGenerator from "./MatrixGenerator";

  const dispatch = createEventDispatcher();
  function returnToMenu() {
    dispatch("returnToMenu");
  }
  export let cardNumber = 8;
  let isGameWon = false;
  let rowLength = Math.ceil(Math.sqrt(cardNumber * 2));
  export let type = "number";
  let numbers = MatrixGenerator.generateCards(type, cardNumber);
  /**
   * @type {(string | number)[][]}
   */
  let matrix = [];
  /**
   * @type {(boolean)[][]}
   */
  let matrixShow = [];
  /**
   * @type {(boolean)[][]}
   */
  let matrixShowCorrect = [];
  for (let i = 0; i < rowLength; i++) {
    let matrixRow = [];
    let matrixShowRow = [];
    let matrixShowRowCorrect = [];
    for (let j = 0; j < rowLength; j++) {
      if (numbers.length != 0) {
        let x = Math.floor(Math.random() * numbers.length);
        matrixRow.push(numbers[x]);
        numbers.splice(x, 1);
        matrixShowRow.push(false);
        matrixShowRowCorrect.push(true);
      }
    }
    if (matrixRow.toString() !== [].toString()) {
      matrix.push(matrixRow);
      matrixShow.push(matrixShowRow);
      matrixShowCorrect.push(matrixShowRowCorrect);
    }
  }
  let isCardOpen = false;
  let openedCard = [-1, -1];
  function cardClick(i, j) {
    if (matrixShow[i][j]) {
      return;
    }
    if (!isCardOpen) {
      isCardOpen = true;
      openedCard = [i, j];
      matrixShow[i][j] = true;
    }
    if (matrixShow[i][j]) {
      return;
    }
    if (matrix[openedCard[0]][openedCard[1]] === matrix[i][j]) {
      matrixShow[i][j] = true;
      isCardOpen = false;
      openedCard = [-1, -1];
      return;
    }
    matrixShow[i][j] = true;
    moves++;
    const cardToClose = openedCard;
    openedCard = [-1, -1];
    isCardOpen = false;
    setTimeout(() => {
      matrixShow[i][j] = false;
      matrixShow[cardToClose[0]][cardToClose[1]] = false;
    }, 1000);
  }
  $: {
    if (matrixShow.toString() === matrixShowCorrect.toString()) {
      setTimeout(() => {
        isGameWon = true;
      }, 5);
    }
  }
  let moves = 0;
</script>

<svelte:head>
  <title>Memory {cardNumber}x{cardNumber}</title>
</svelte:head>
{#if isGameWon}
  <h2 transition:fade>You Won in {moves + cardNumber} moves</h2>
{/if}
<main transition:fade>
  {#each matrix as row, i (i)}
    <div class="row">
      {#each row as value, j (j)}
        <Card
          {value}
          open={matrixShow[i][j]}
          on:cardclick={(e) => {
            cardClick(i, j);
          }}
          highlited={i === openedCard[0] && j === openedCard[1]}
        />
      {/each}
    </div>
  {/each}
</main>
{#if isGameWon}
  <button
    transition:fade
    class="return-to-menu"
    on:click={() => {
      returnToMenu();
    }}>RETURN TO MENU</button
  >
{/if}

<style>
  .row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
  }
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
  }
  .return-to-menu {
    margin: 1rem;
  }
</style>
