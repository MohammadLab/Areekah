import matter from "gray-matter";

// Webpack magic to get all Markdown files
const req = require.context("../../content", true, /\.md$/);

const getProducts = () => {
  return req.keys().map((filename) => {
    const file = req(filename);
    const slug = filename.split("/").pop().replace(".md", "");

    const { data } = matter(file.default);
    return {
      ...data,
      slug,
      images: data.images || [],
    };
  });
};

export default getProducts;
