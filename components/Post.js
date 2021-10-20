import Link from "next/link";

export default function Post({ post }) {
  return (
    <div>
      {post.article_type === 3 ? (
        <span>外部サイト</span>
      ) : (
        <span>内部記事</span>
      )}
      {" : "}
      {post.article_type === 3 ? (
        <Link href={post.description}>
          <a target="_blank">
            <span className="cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200">
              {post.title}
            </span>
          </a>
        </Link>
      ) : (
        <Link href={`/posts/${post.slug}`}>
          <span className="cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200">
            {post.title}
          </span>
        </Link>
      )}
    </div>
  );
}
