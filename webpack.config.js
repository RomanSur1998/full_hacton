module.exports = {
  // ...
  module: {
    rules: [
      // ...
      {
        test: /\.(woff|woff2|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
          },
        },
      },
    ],
  },
};
