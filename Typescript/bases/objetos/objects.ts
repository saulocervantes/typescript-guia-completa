(()=>{


    let flash: {name:string, age?:number, powers:string[]} = {
        name: "Barry Allen",
        age: 24,
        powers: ["Súper velocidad", "Viajar en el tiempo"]
    }
    

    flash = {
        name: "Clark Kent",
        // age: 60,
        powers:["Súper fuerza"],
        // getNombre(){
        //     return this.name;
        // }
    }

    console.log({flash});
    
})()

// 36. ¿Cómo crear objetos con tipos específicos?