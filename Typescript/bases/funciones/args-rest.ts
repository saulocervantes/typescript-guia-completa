(()=>{


    const fullName = (firstName:string, ...restArgs:string[]):string => {
        return `${firstName} ${restArgs.join(" ")}`
    }

    const superman = fullName("Clark", "Joseph", );

    console.log({superman});
    

})()

// 31. Parametros REST