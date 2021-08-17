(()=>{


    const fullName = (firstName:string, lastName?:string):string => {
        return `${firstName} ${lastName || "no lastname"}`;
    }

    const name = fullName("Tony");

    console.log({name});

})()

// 29. Parámetros opcionales de las funciones