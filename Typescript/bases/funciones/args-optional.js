"use strict";
(function () {
    var fullName = function (firstName, lastName) {
        return firstName + " " + (lastName || "no lastname");
    };
    var name = fullName("Tony");
    console.log({ name: name });
})();
//# sourceMappingURL=args-optional.js.map