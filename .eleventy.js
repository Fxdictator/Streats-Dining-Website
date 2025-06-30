module.exports = function(eleventyConfig) {

  // Watch for changes in CSS and JS files
  eleventyConfig.addWatchTarget("./src/assets/");

  // Passthrough copy for assets folder
  eleventyConfig.addPassthroughCopy("./src/assets/");

  return {
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["html", "md", "njk"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};