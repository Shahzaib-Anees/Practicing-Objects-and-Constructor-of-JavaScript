function randomValueGenerator() {
    let randomDiceValue = Math.floor(Math.random() * 6);
    let diceSide = randomDiceValue + 1;
    document.write(`<div class="card">
    <h4>Printing Dice Value</h4>
    <span> Random Dice Value : ${diceSide} </span>
    </div>`);
}

randomValueGenerator();
randomValueGenerator();
randomValueGenerator();
randomValueGenerator();
