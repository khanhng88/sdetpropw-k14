const Animal = require("./Animal")
const Dog = require("./Dog")
const Horse = require("./Horse")
const Tiger = require("./Tiger")

class RaceController {

    static findWinner(animalList) {
        for (const animal of animalList) {
            console.log(`${animal.constructor.name} and its speed: ${animal.speed}`);
        }
        if(animalList.length <=0) {
            throw new Error('list animal cannot be empty.')
        }
        let winner = animalList[0]

        for (const animal of animalList) {
            if(animal.speed >= winner.speed) {
                winner = animal
            }
        }
        return winner
    
    }
}
module.exports = RaceController