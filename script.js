const body = document.querySelector('body')
const main = document.querySelector('main')
const allFlips = document.createElement('p')
const flipTails = document.createElement('p')
const flipHeads = document.createElement('p')

const coin = {
    state: 0,
  
    flip: function () {
        this.state =  Math.round(Math.random() * (1 - 0));
        return this.state
    },
  
    toString: function () {
        if (this.state === 0){
            return "Heads"
        }
        return "Tails"
    },
  
    toHTML: function () {
        const image = document.createElement("img");
        image.classList.add('coin')
        if (this.state ===0){
        image.src= './images/cara.jpeg'
        image.alt="Heads"
        }
        else{
        image.src= './images/coroa.jpg'
        image.alt="Tails"
        }
        main.appendChild(image)
      return image;
    },
};

function display20Flips() {
    const results = [];
    for (let i = 0; i<20 ;i++){
        coin.flip()
        results.push(coin.toString())
    }
    flipHeads.innerText = 'Heads = ' + results.filter((element)=>element === 'Heads').length
    flipTails.innerText = 'Tails = ' + results.filter((element)=>element === 'Tails').length
    allFlips.innerText = results
    body.append(flipHeads)
    body.append(flipTails)
    body.append(allFlips)
    console.log(results)
    return results
}

function display20Images() {
    const results = [];
    for (let i = 0; i<20 ;i++){
        coin.flip()        
        results.push(coin.toHTML())
    }
    return results
}
display20Images()
display20Flips()
