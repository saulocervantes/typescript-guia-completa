"use strict";
(function () {
    var batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4
    };
    var bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar: function () {
            console.log("Disparando");
        }
    };
    var villanos = [{
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false
        }, {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true
        }, {
            nombre: "James Logan",
            edad: undefined,
            mutante: true
        }];
    var charles = {
        poder: "psiquico",
        estatura: 1.78
    };
    console.log("paso por aquí");
    console.log("paso por acá");
    var apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
    };
    console.log(apocalipsis);
    var mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
(function () {
    var fullName = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        if (upper) {
            return (firstName + " " + (lastName || "----")).toUpperCase();
        }
        else {
            return firstName + " " + (lastName || "----");
        }
    };
    var name = fullName("Tony", "Stark", true);
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName, lastName) {
        return firstName + " " + (lastName || "no lastname");
    };
    var name = fullName("Tony");
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName, lastName) {
        return firstName + " " + lastName;
    };
    var name = fullName("Tony", "Stark");
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName) {
        var restArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArgs[_i - 1] = arguments[_i];
        }
        return firstName + " " + restArgs.join(" ");
    };
    var superman = fullName("Clark", "Joseph");
    console.log({ superman: superman });
})();
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola " + name; };
    var saveTheWorld = function () { return "El mundo est\u00E1 salvado!"; };
    var myFunction;
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
(function () {
    var hero = "Flash";
    function returnName() {
        return hero;
    }
    var activateBatisignal = function () {
        return "Batiseñal activada!";
    };
    console.log(typeof activateBatisignal);
    var heroName = returnName();
})();
(function () {
    var flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Súper velocidad", "Viajar en el tiempo"]
    };
    var superman = {
        name: "Clark Kent",
        age: 60,
        powers: ["Súper velocidad"]
    };
    console.log(flash);
})();
(function () {
    var flash = {
        name: "Barry Allen",
        age: 24,
        powers: [1, 2]
    };
    var superman = {
        name: "Clark Kent",
        age: 60,
        powers: [1],
        getName: function () {
            return this.name;
        }
    };
})();
(function () {
    var myCustomVariable = "Fernando";
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: "Bruce",
        age: 43,
        powers: [1],
    };
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
})();
(function () {
    var avenger = 123;
    var exist;
    var power;
    avenger = "Dr. Strange";
    console.log(avenger.charAt(0));
    avenger = 150.23256415;
    console.log(avenger.toFixed(2));
    console.log(exist);
    console.log(power);
})();
(function () {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var villians = ["Omega Rojo", "Dormammu", "Duende Verde"];
    villians.forEach(function (v) { return console.log(v.toLocaleUpperCase()); });
    numbers.forEach(function (v) { return console.log(v); });
})();
(function () {
    var isSuperman = true;
    var isBatman = false;
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman: isSuperman });
})();
(function () {
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    var currentAudio = AudioLevel.max;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(function () {
    var error = function (message) {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error("Auxilio!");
    console.log('Hola Mundo');
})();
(function () {
    var isActive = undefined;
    console.log(isActive);
})();
(function () {
    var avengers = 10;
    console.log(avengers);
    var villians = 20;
    if (avengers < villians) {
        console.log("Estamos en problemas");
    }
    else {
        console.log("Nos salvamos");
    }
    avengers = Number("55A");
    console.log({ avengers: avengers });
})();
(function () {
    var _a;
    var Batman = 'Batman';
    var LinternaVerde = "Linterna Verde";
    var VolcanNegro = "H\u00E9roe: Volc\u00E1n Negro";
    console.log("I'm " + Batman);
    console.log(Batman.toLocaleUpperCase());
    console.log(((_a = Batman[10]) === null || _a === void 0 ? void 0 : _a.toLocaleUpperCase()) || "No está presente");
})();
(function () {
    var hero = ["Dr. Strange", 100, true];
    hero[0] = "Ironman";
    hero[1] = 50;
    hero[2] = false;
    console.log(hero);
})();
(function () {
    function callBatman() {
        return;
    }
    var callSuperman = function () {
        return;
    };
    var a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map