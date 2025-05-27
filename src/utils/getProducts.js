import fm from "front-matter";

// Load raw Markdown text using raw-loader
const req = require.context("!!raw-loader!../../content", true, /\.md$/);

const getProducts = () => {
  return req.keys().map((filename) => {
    const fileContent = req(filename).default;
    const { attributes } = fm(fileContent);
    const slug = filename.split("/").pop().replace(".md", "");

    return {
      ...attributes,
      slug,
      images: attributes.images || [],
    };
  });
};

export default getProducts;
