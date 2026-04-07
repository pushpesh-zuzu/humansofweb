import Image from 'next/image'

const INSIGHTS = [
  {
    title: 'How Humans of Web Makes Search Work for Your Brand',
    description:
      'We build search strategies that help ambitious companies appear in the right moments—on Google, AI platforms, and industry-specific discovery channels—so your story converts consistently.',
    category: 'SEO',
    image: '/Home/insight1.webp',
  },
  {
    title: 'Be Discoverable in AI-Powered Search Experiences',
    description:
      'From ChatGPT answers to vector-enabled discovery, we design your content to perform where buyers are searching next: conversational AI, recommendation engines, and modern search tools.',
    category: 'AI Search',
    image: '/Home/insight2.webp',
  },
  {
    title: 'Build Authority with Digital PR and Brand Story',
    description:
      'We help your business earn trusted visibility through media narratives, high-value backlinks and credibility signals that turn attention into leads and long-term growth.',
    category: 'PR',
    image: '/Home/insight3.webp',
  },
]

const borderGradient = (reverse) => `linear-gradient(
    to ${reverse ? "top" : "bottom"},
    #48179C 0%,
    #48179C 50%,
    #6f3dcc 60%,
    #9b7ee0 70%,
    #c8b6ef 80%,
    #eee8fb 90%,
    transparent 100%
)`

const ExportInsight = () => {
  return (
    <section className="grid gap-6 lg:grid-cols-3">
      {INSIGHTS.map((insight, index) => (
        <article
          key={insight.title}
          className="group overflow-hidden p-0.5 transition-transform duration-300 hover:-translate-y-1.5"
          style={{
            borderRadius: 28,
            background: borderGradient(index % 2 !== 0),
          }}
        >
          <div className="flex flex-col overflow-hidden rounded-[26px] bg-white shadow-[0_18px_45px_rgba(72,23,156,0.12)] transition-all duration-300 group-hover:shadow-[0_28px_56px_rgba(72,23,156,0.18)]">
            <div className="relative h-55 w-full overflow-hidden">
              <Image
                src={insight.image}
                alt={insight.title}
                fill
                sizes="(min-width: 1024px) 33vw, 92vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="space-y-5 p-6 md:p-7">
              <span className="inline-flex rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-secondary">
                {insight.category}
              </span>

              <h3 className="text-[22px] font-black uppercase leading-[1.05] text-primary">
                {insight.title}
              </h3>

              <p className="text-sm leading-7 text-[#4b4b4b]">{insight.description}</p>

              <a
                href="#"
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-secondary text-sm font-bold uppercase tracking-widest text-white transition-colors duration-200 hover:bg-primary"
              >
                Read More
              </a>
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}

export default ExportInsight