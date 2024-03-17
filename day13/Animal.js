class Animal {
    constructor(maxSpeed) {
        this.speed= Math.floor(Math.random() * maxSpeed) + 1
    
    }

    getSpeed() {
        return this.speed
    }


    showMsg() {
        console.log(`====> The winner is ${this.constructor.name} with speed ${this.getSpeed()}`);
    }

  
}

module.exports = Animal