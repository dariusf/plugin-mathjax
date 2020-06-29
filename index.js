
function getWebsiteAssets() {
  return {
    assets: "./book",
    js: [
      'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-AMS-MML_HTMLorMML',
      'plugin.js',
    ]
  };
}

module.exports = {
  website: getWebsiteAssets,
};
