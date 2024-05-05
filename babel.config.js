module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    "react-native-reanimated/plugin",
    ["module-resolver", {
      "root": ["./src"],
      extentions: [".js", ".jsx", ".ts", ".tsx"],
      "alias": {
        "@assets": "./src/assets",
        "@components": "./src/components",
        "@config": "./src/config",
        "@hooks": "./src/hooks",
        "@routes": "./src/routes",
        "@screens": "./src/screens",
        "@services": "./src/services",
        "@styles": "./src/styles",
        "@utils": "./src/utils",
      }
    }]
  ]
};
