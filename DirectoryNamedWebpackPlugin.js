var path = require("path");
var forEachBail = require("enhanced-resolve/lib/forEachBail");
var createInnerCallback = require("enhanced-resolve/lib/createInnerCallback");
var basename = require("enhanced-resolve/lib/getPaths").basename;

var assign = require("object-assign");

module.exports = DirectoryNamedWebpackPlugin;

function DirectoryNamedWebpackPlugin() {
}

DirectoryNamedWebpackPlugin.prototype.apply = function (resolver) {
  resolver.plugin("directory", function(request, callback) {
    var fs = resolver.fileSystem;
    var topLevelCallback = callback;
    var filename = basename(request.path);

    var filePath = resolver.join(request.path, filename + ".jsx");

    var obj = assign({}, request, {
      path: filePath,
      relativePath: request.relativePath && resolver.join(request.relativePath, filename)
    });
    resolver.doResolve("file", obj, "using path: " + filePath, callback);
  });
};
