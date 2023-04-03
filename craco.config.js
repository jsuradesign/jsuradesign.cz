const path = require("path");
module.exports = {
    webpack: {
        alias: {
            "@root": path.resolve(__dirname, "src/"),
            "@component": path.resolve(__dirname, "src/components/"),
            "@logic": path.resolve(__dirname, "src/logic/"),
            "@model": path.resolve(__dirname, "src/models/"),
            "@page": path.resolve(__dirname, "src/pages/"),
            "@util": path.resolve(__dirname, "src/utils/"),
        },
    },
};
