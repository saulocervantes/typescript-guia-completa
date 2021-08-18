"use strict";
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
// 31. Parametros REST
//# sourceMappingURL=args-rest.js.map