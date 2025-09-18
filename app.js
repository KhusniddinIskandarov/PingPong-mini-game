const playerCounterOne = document.querySelector("#player1"),
  playerCounterTwo = document.querySelector("#player2"),
  scoreSetter = document.querySelector("#gameLevel"),
  btnOne = document.querySelector("#btnPlayer1"),
  btnTwo = document.querySelector("#btnPlayer2"),
  reset = document.querySelector("#reset")


  const btnOneFunc = () => {
    if(
      playerCounterOne.innerHTML < +scoreSetter.value &&
      playerCounterTwo.innerHTML <  +scoreSetter.value
    ) {
      playerCounterOne.innerHTML++
      console.log("hello")
    } 
    if(
      playerCounterOne.innerHTML == +scoreSetter.value &&
        playerCounterTwo.innerHTML < +scoreSetter.value) {
        playerCounterOne.style.color = 'green'  
        playerCounterTwo.style.color = 'red'    
    }

  }
  const btnTwoFunc = () => {
    if(
      playerCounterTwo.innerHTML < +scoreSetter.value &&
      playerCounterOne.innerHTML < +scoreSetter.value
    ) {
        playerCounterTwo.innerHTML++
        console.log("hello")
    }
    if(playerCounterTwo.innerHTML == +scoreSetter.value &&
        playerCounterOne.innerHTML < +scoreSetter.value){
        playerCounterTwo.style.color = 'green'
        playerCounterOne.style.color = 'red'
    }  

  }

  const resetFunc = () => {
    playerCounterOne.innerHTML = 0
    playerCounterOne.style.color =  'black'
    playerCounterTwo.innerHTML = 0
    playerCounterTwo.style.color = 'black'

  }

  scoreSetter.addEventListener('click', () => {
    resetFunc()
  })

  btnOne.addEventListener('click', ()=> {
    btnOneFunc()
  })

  btnTwo.addEventListener('click', ()=> {
    btnTwoFunc()
  })

  reset.addEventListener('click', () => {
    resetFunc()
  })