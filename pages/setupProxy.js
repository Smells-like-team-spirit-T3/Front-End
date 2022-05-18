const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        proxy("/api/trips", {
            target: "https://tripcalendarapi.azurewebsites.net",
            changeOrigin: true,
            secure: false
        })
    )
}