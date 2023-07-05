<script>
    import Card from './Card.svelte'
    export let cardNumber = 8;
    let rowLength = Math.ceil(Math.sqrt( cardNumber*2));
    let numbers = []
    for(let i=1;i<=cardNumber;i++){
        numbers.push(i);
        numbers.push(i);
    }
    let matrix = [];
    let matrixShow = [];
    let matrixShowCorrect = [];
    for(let i=0;i<rowLength;i++){
        let matrixRow = [];
        let matrixShowRow = []
        let matrixShowRowCorrect = []
        for(let j=0;j<rowLength;j++){
            if(numbers.length !=0){
            let x = Math.floor(Math.random() * numbers.length);
                matrixRow.push(numbers[x]);
                numbers.splice(x,1);
                matrixShowRow.push(false)
                matrixShowRowCorrect.push(true)
            }
        }
        if(matrixRow.toString() !== [].toString()){
            matrix.push(matrixRow);
            matrixShow.push(matrixShowRow);
            matrixShowCorrect.push(matrixShowRowCorrect);
        }
    }
    // const matrix = [
    //   [1,2,6,3],[4, 6,8,1],[3,5,2,8],[5,7,4,7]
    // ]
    // let matrixShow = [];
    // let matrixShowCorrect = [];
    // for(let i=0;i<matrix.length;i++){
    //     let matrixShowRow = []
    //     let matrixShowRowCorrect = []
    //     console.log(matrix[i]);
    //     for(let j=0;j<matrix[i].length;i++){
    //         matrixShowRow.push(false)
    //         matrixShowRowCorrect.push(true)
    //     }
    //     matrixShow.push(matrixShowRow);
    //     matrixShowCorrect.push(matrixShowRowCorrect);
    // }
    // const matrixShow = [
    //   [false,false,false,false],[false,false,false,false],[false,false,false,false],[false,false,false,false]
    // ]
    // const matrixShowCorrect = [
    //   [true,true,true,true],[true,true,true,true],[true,true,true,true],[true,true,true,true]
    // ]
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
           
            <!-- <Card {value}/> -->
      {/each}
    </div>
    {/each}
  </main>
  
  <style>
    .row {
      display: flex;
    }
  </style>
  