"use strict";
(function () {
    var fullName = function (firstName, lastName) {
        return firstName + " " + (lastName || "no lastname");
    };
    var name = fullName("Tony");
    console.log({ name: name });
})();
// 29. Parámetros opcionales de las funciones
//# sourceMappingURL=args-optional.js.map