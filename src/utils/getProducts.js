import fm from "front-matter";

// Load raw Markdown text using raw-loader
const req = require.context("!!raw-loader!../../content", true, /\.md$/);

const getProducts = () => {
  return req.keys().map((filename) => {
    const fileContent = req(filename).default;
    const { attributes } = fm(fileContent);
    const slug = filename.split("/").pop().replace(".md", "");

    // Add id from frontmatter
    const id = attributes.id || slug; // fallback to slug if no id

    return {
      ...attributes,
      id,
      slug,
      images: attributes.images || [],
    };
  });
};

export default getProducts;
