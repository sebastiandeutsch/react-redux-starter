# Install

This project shows a classic react redux starter template.

```
npm install
npm start # point a browser to localhost:8000
```

# Webpack 2.0

Webpack 2.0 has an updated enhanced resolving mechanism:

```
resolve: {
  extensions: ['', '.js', '.jsx'],
  modules: ['src', 'node_modules'],
  plugins: [new DirectoryNamedWebpackPlugin()]
  ...
},
```

This is a complete list of all possible fields within `resolve`:

| Field                    | Default                     | Description                                                                        |
| ------------------------ | --------------------------- | ---------------------------------------------------------------------------------- |
| modules                  | ["node_modules"]            | A list of directories to resolve modules from, can be absolute path or folder name |
| descriptionFiles         | ["package.json"]            | A list of description files to read from |
| plugins                  | []                          | A list of additional resolve plugins which should be applied |
| mainFields               | ["main"]                    | A list of main fields in description files |
| aliasFields              | []                          | A list of alias fields in description files |
| mainFiles                | ["index"]                   | A list of main files in directories |
| extensions               | [".js", ".json", ".node"]   | A list of extensions which should be tried for files |
| enforceExtension         | false                       | Enforce that a extension from extensions must be used |
| moduleExtensions         | []                          | A list of module extsions which should be tried for modules |
| enforceModuleExtension   | false                       | Enforce that a extension from moduleExtensions must be used |
| alias                    | []                          | A list of module alias configurations or an object which maps key to value |
| resolveToContext         | false                       | Resolve to a context instead of a file |
| unsafeCache              | false                       | Use this cache object to unsafely cache the successful requests |
| cachePredicate           | function() { return true }; | A function which decides wheter a request should be cached or not. An object is passed to the function with `path` and `request` properties. |
| fileSystem               |                             | The file system which should be used |
| resolver                 | undefined                   | A prepared Resolver to which the plugins are attached |

## Upgrade from Webpack 1.x to Webpack 2.x

- `resolve.root` has been removed if you need it add the directory to the modules array.
- Instead of adding a resolver to `plugins` of your webpack config use the new `resolve.plugin` field
