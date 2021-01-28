import axios from "axios"
import chalk from "chalk"

class Fetch {
    constructor(Pokemon, Color) {
    this.pokemon = Pokemon;
    this.color = Color;
    }

fetch() {
axios("https://pokeapi.co/api/v2/pokemon/" + this.pokemon)
.then((response) => {
    const Poke = response.data;
    console.log(chalk.hex(this.color)(Poke.name + " and the id is " + Poke.id));
})
.catch((error) => {
    console.log(chalk.red("Invalid ID " + error));
});
}
}

export default Fetch
