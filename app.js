var bs = require("browser-sync").create();

bs.watch(['sizes/*.*', 'sizes/css/*.*', 'sizes/scss/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  proxy: "adaptivloft/sizes"
});