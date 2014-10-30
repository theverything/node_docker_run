// Usage: docker run [OPTIONS] IMAGE [COMMAND] [ARG...]
var path = require('path');
var fs = require('fs');
var paramCase = require('param-case');
var exec = require('child_process').exec;

function configParse(obj){
  var keys = Object.keys(obj);
  var config = [];
  var type = {
    string: [
      "cidfile",
      "cpuset",
      "entrypoint",
      "hostname",
      "memory",
      "name",
      "net",
      "restart",
      "user",
      "workdir"
    ],
    array: [
      "attach",
      "addHost",
      "capAdd",
      "capDrop",
      "device",
      "dns",
      "dnsSearch",
      "env",
      "envFile",
      "expose",
      "link",
      "lxcConf",
      "publish",
      "volume",
      "volumesFrom"
    ],
    bool: [
      "detach",
      "interactive",
      "publishAll",
      "privileged",
      "rm",
      "sigProxy",
      "tty"
    ],
    int: [
      "cpuShares"
    ]
  };

  keys.forEach(function (key) {
    if (type.string.indexOf(key) > -1 || type.int.indexOf(key) > -1) {
      if (obj[key] >= 0) {
        config.push(paramCase(key) + " " + obj[key]);
      }
    } else if (type.array.indexOf(key) > -1) {
      if (obj[key]) {
        config.push(paramCase(key) + " " + obj[key].join(" "));
      }
    } else if (type.bool.indexOf(key) > -1) {
      if (obj[key] === true || obj[key] === false) {
        config.push(paramCase(key) + " " + !!obj[key]);
      }
    }
  });

  return config;
}

module.exports = function (p, callback) {
  var basePath = path.dirname(module.parent.filename);
  var filePath = path.resolve(basePath, p);
  var baseCMD  = "docker run"

  function parseJSON(err, file) {
    if (err) { throw err };
    var config = configParse(JSON.parse(file))
    callback(null, config);
  }

  fs.readFile(filePath, {encoding: 'utf8'}, parseJSON);
};
