(()=>{


    let flash: {name:string, age?:number, powers:string[], getName?:()=>string} = {
        name: "Barry Allen",
        age: 24,
        powers: ["Súper velocidad", "Viajar en el tiempo"]
    }
    

    flash = {
        name: "Clark Kent",
        // age: 60,
        powers:["Súper fuerza"],
        // getName(){
        //     return this.name;
        // }
    }

    console.log(flash.getName?flash.getName():"No se ingreso la función getName");
    
})()

// 37. Métodos dentro de los objetos