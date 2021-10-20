import fetch from "node-fetch";

const apiUrl =
  "https://myapii.herokuapp.com/api/articles/P0av6apr/fetch_all_list?count=50";

export async function getAllPostsData() {
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();
  return posts;
}

export async function getAllPostSlugs() {
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();

  return posts.map((post) => {
    return {
      params: {
        slug: String(post.slug),
      },
    };
  });
}

export async function getPostData(slug) {
  const apiDetailUri = "https://myapii.com/api/articles/P0av6apr/fetch_article";
  const res = await fetch(new URL(`${apiDetailUri}?slug=${slug}`));
  const post = await res.json();
  // return {
  //   post,
  // };
  return post;
}
