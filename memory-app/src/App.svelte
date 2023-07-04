<script>
  import Card from './lib/Card.svelte'
  const matrix = [
    [1,2,6,3],[4, 6,8,1],[3,5,2,8],[5,7,4,7]
  ]
  const matrixShow = [
    [false,false,false,false],[false,false,false,false],[false,false,false,false],[false,false,false,false]
  ]
  const matrixShowCorrect = [
    [true,true,true,true],[true,true,true,true],[true,true,true,true],[true,true,true,true]
  ]
  let isCardOpen = false;
  let openedCard = [-1,-1]
  function cardClick(i,j){
    if(!isCardOpen){
      isCardOpen = true;
      openedCard = [i,j];
      matrixShow[i][j] = true;
    }
    if(matrixShow[i][j]){
      return
    }
    if(matrix[openedCard[0]][openedCard[1]] === matrix[i][j]){
      matrixShow[i][j] = true;
      isCardOpen = false;
      openedCard = [-1,-1];
      return
    }
    matrixShow[i][j] = true;
    setTimeout(()=>{
      matrixShow[i][j] = false;
      matrixShow[openedCard[0]][openedCard[1]] = false;
      isCardOpen = false;
      openedCard = [-1,-1];
    }
      ,1000
    )
  }
  $: {if(matrixShow.toString() === matrixShowCorrect.toString()){
    setTimeout(()=>{
      alert("You Won"); 
    },5)
    
  }}
</script>

<main>
  {#each matrix as row,i}
  <div class="row">
    {#each row as value,j}
    <Card value={value} open={matrixShow[i][j]} on:cardclick={()=>cardClick(i,j)}/>
    {/each}
  </div>
  {/each}
</main>

<style>
  .row {
    display: flex;
  }
</style>
