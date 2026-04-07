import Image from "next/image";
import ContainerWrapper from "../common/Container/ContainerWrapper";
import H2HeadingWrapper from "../common/Container/H2HeadingWrapper";
import PaddingWrapper2 from "../common/Container/PaddingWrapper2";

const BLOGS = [
  {
    title: "How Search Visibility Builds Trust Before the First Click",
    excerpt: "The brands people remember are the ones that show up clearly, consistently, and with answers that feel useful.",
    category: "Search",
    readTime: "5 min read",
    image: "/Home/blog1.webp",
    featured: true,
  },
  {
    title: "Turning Campaign Data Into Better Growth Decisions",
    excerpt: "Clean reporting helps your team see what is working, what needs attention, and where to move next.",
    category: "Analytics",
    readTime: "4 min read",
    image: "/Home/blog2.webp",
  },
  {
    title: "Why Digital PR Still Matters for Modern Brands",
    excerpt: "Credible mentions, useful stories, and the right placements can make discovery feel more human.",
    category: "Digital PR",
    readTime: "3 min read",
    image: "/Home/blog3.webp",
  },
];

function BlogCard({ blog, compact = false }) {
  return (
    <article
      className={`group overflow-hidden border border-primary/15 bg-white shadow-[0_18px_45px_rgba(72,23,156,0.12)] transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-[0_24px_56px_rgba(72,23,156,0.22)] ${
        compact ? "grid gap-0 sm:grid-cols-[160px_minmax(0,1fr)]" : ""
      }`}
      style={{ borderRadius: 18 }}
    >
      <div className={`relative overflow-hidden ${compact ? "min-h-[180px] sm:min-h-full" : "h-[260px]"}`}>
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          sizes={compact ? "(min-width: 768px) 180px, 92vw" : "(min-width: 1024px) 50vw, 92vw"}
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-primary/35" />
      </div>

      <div className={compact ? "p-5" : "p-6 md:p-7"}>
        <div className="p-small mb-4 flex flex-wrap items-center gap-3 font-bold uppercase tracking-[0.12em]">
          <span className="rounded-full bg-primary px-3 py-1.5 text-white">{blog.category}</span>
          <span className="text-primary/70">{blog.readTime}</span>
        </div>
        <h3 className={`${compact ? "text-h6" : "text-h4"} font-bold text-primary`}>
          {blog.title}
        </h3>
        <p className="p-small mt-4 font-medium text-[#1c1c1c]">{blog.excerpt}</p>
        <a
          href="#"
          className="p-small mt-5 inline-flex items-center gap-2 font-bold uppercase tracking-[0.08em] text-secondary transition-colors duration-300 hover:text-primary"
        >
          Read More
          <span aria-hidden="true">-&gt;</span>
        </a>
      </div>
    </article>
  );
}

function BlogSection() {
  const featuredBlog = BLOGS.find((blog) => blog.featured);
  const smallBlogs = BLOGS.filter((blog) => !blog.featured);

  return (
    <ContainerWrapper>
      <PaddingWrapper2 padding="pb-10 px-8.75 md:pb-14 md:px-12.5 xl:pb-18 xl:px-20">
        <section className="relative overflow-hidden bg-[#f5f6ff] px-4 py-8 md:px-8 md:py-10" style={{ borderRadius: 18 }}>
          <div className="relative">
            <H2HeadingWrapper
              headdingBlack="Ideas That Help"
              headingBlue="Your Brand Grow"
              subHeading="Simple, useful reads on search, content, analytics, and digital growth."
            />

            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(360px,0.8fr)]">
              {featuredBlog && <BlogCard blog={featuredBlog} />}
              <div className="grid gap-6">
                {smallBlogs.map((blog) => (
                  <BlogCard key={blog.title} blog={blog} compact />
                ))}
              </div>
            </div>
          </div>
        </section>
      </PaddingWrapper2>
    </ContainerWrapper>
  );
}

export default BlogSection;
