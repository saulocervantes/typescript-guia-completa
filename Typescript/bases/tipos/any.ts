(() => {
    let avenger:any = 123;
    let exist;
    let power;

    avenger = "Dr. Strange";
    // console.log(avenger.charAt(0));
    console.log((avenger as String).charAt(0));
    
    avenger = 150.23256415;
    console.log((<number>avenger).toFixed(2));

    console.log(exist);
    console.log(power);
    
    
})()

// 17. Tipo Any