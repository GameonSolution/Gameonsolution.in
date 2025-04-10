import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import blogData from "./blogData";
import { Footer } from "./footer";
import WhatsAppButton from "./WhatsappButton";

const calculateReadTime = (html: string) => {
  const text = html.replace(/<[^>]*>/g, ""); // Strip HTML
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / 200); // avg 200 wpm
};

const BlogDetailPage = () => {
  const { slug } = useParams();
  const blog = blogData.find((b) => b.slug === slug);
  const otherBlogs = blogData.filter((b) => b.slug !== slug).slice(0, 3);

  if (!blog) return <p className="text-white p-10">Blog not found.</p>;

  const readTime = calculateReadTime(blog.content);

  return (
    <div className="min-h-screen bg-primary text-white pt-32 pb-20 px-6 md:px-10 lg:px-20">
      <Helmet>
        <title>
          {blog.title} | GameOn Solution - South India’s Best Sports
          Infrastructure
        </title>
        <meta name="description" content={blog.excerpt} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.excerpt} />
        <meta property="og:image" content={blog.image} />
        <meta
          property="og:url"
          content={`https://gameonsolution.in/blog/${slug}`}
        />
      </Helmet>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Main Blog Content */}
        <div className="lg:col-span-2">
          {/* <a
            href="/blog"
            className="text-sm mb-4 inline-block text-secondary hover:underline"
          >
            ← Back to Blogs
          </a> */}

          <div className="flex flex-col gap-3 text-center items-center mb-10">
            <p className="text-xs uppercase tracking-wide text-gray-300">
              Blog Insight • {readTime} min read
            </p>
            <h1 className="text-3xl md:text-5xl font-primary text-secondary uppercase leading-tight text-center">
              {blog.title}
            </h1>
            <p className="text-lg md:text-2xl font-secondary text-white text-center">
              {blog.excerpt}
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {blog.tags?.map((tag) => (
                <span
                  key={tag}
                  className="bg-secondary text-black text-xs px-3 py-1 rounded-full uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <img
            src={blog.image}
            alt={blog.title}
            className="w-full max-h-[400px] object-cover rounded-xl shadow-lg mb-10"
          />

          <div className="prose prose-invert max-w-none prose-li:marker:text-secondary prose-ul:pl-5 prose-h2:text-secondary prose-h2:mb-3 prose-h3:text-white prose-a:text-secondary">
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          </div>

          {/* More Blogs */}
          <div className="mt-20">
            <h3 className="text-xl font-semibold border-b border-gray-700 pb-2 mb-6">
              More Blog Posts
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherBlogs.map((other) => (
                <a
                  key={other.slug}
                  href={`/blog/${other.slug}`}
                  className="block bg-[#1b1c21] hover:bg-[#292a2e] transition-all rounded-lg p-4 shadow-md"
                >
                  <img
                    src={other.image}
                    alt={other.title}
                    className="w-full h-40 object-cover rounded-md mb-3"
                  />
                  <h4 className="text-lg font-semibold text-white">
                    {other.title}
                  </h4>
                  <p className="text-sm text-gray-400">{other.excerpt}</p>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar - Related Blogs (Optional here since we're showing more blogs below) */}
        <aside className="hidden lg:block space-y-6">
          <h3 className="text-xl font-semibold border-b border-gray-700 pb-2 mb-4">
            Trending Blogs
          </h3>
          {otherBlogs.map((other) => (
            <a
              key={other.slug}
              href={`/blog/${other.slug}`}
              className="block bg-[#1b1c21] hover:bg-[#292a2e] transition-all rounded-lg p-4 shadow-md"
            >
              <h4 className="text-base font-semibold text-white mb-1">
                {other.title}
              </h4>
              <p className="text-sm text-gray-400">{other.excerpt}</p>
            </a>
          ))}
        </aside>
      </div>
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default BlogDetailPage;
