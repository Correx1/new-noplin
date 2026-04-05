/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { categoryColors } from '../../components/blog/BlogData';
import BlogCTA from '../../components/blog/BlogCTA';
import { client } from '../../../sanity/lib/client';
import { getPostBySlugQuery, getRelatedPostsQuery } from '../../../sanity/lib/queries';
import { PortableText, PortableTextComponents } from '@portabletext/react';

// Custom renderers for Portable Text blocks (handles inline images added inside the blog editor)
const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }: { value: { asset?: { url: string; dimensions?: { width: number; height: number } }; alt?: string } }) => {
      if (!value?.asset?.url) return null;
      const { url } = value.asset;
      return (
        <figure className="my-10">
          <div className="relative w-full aspect-16/12 lg:aspect-21/9 rounded-xl overflow-hidden mb-2 border border-gray-200">
            <Image
              src={url}
              alt={value.alt || ''}
              fill
              className="object-fit"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          {/* {value.alt && (
            <figcaption
              className="mt-3 text-center text-[13px] text-gray-500 italic"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {value.alt}
            </figcaption>
          )} */}
        </figure>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-outside pl-6 my-6 space-y-2 text-[#3f3f46]">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-outside pl-6 my-6 space-y-2 text-[#3f3f46]">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="text-[17px] leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>{children}</li>
    ),
    number: ({ children }) => (
      <li className="text-[17px] leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>{children}</li>
    ),
  },
  marks: {
    link: ({ value, children }: { value?: { href?: string; blank?: boolean }; children: React.ReactNode }) => {
      const href = value?.href || '#';
      const isExternal = href.startsWith('http');
      return (
        <a
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="text-blue-500 underline underline-offset-2 decoration-blue-500/40 hover:text-blue-500 hover:decoration-blue-500 transition-colors duration-200"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }) => <strong className="font-bold text-[#09090b]">{children}</strong>,
    em: ({ children }) => <em className="italic text-[#3f3f46]">{children}</em>,
  },
  block: {
    normal: ({ children }) => (
      <p className="text-[17px] leading-relaxed text-justify text-[#3f3f46] " style={{ fontFamily: 'var(--font-body)' }}>{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="text-[clamp(1.5rem,2.5vw,2rem)] font-bold text-[#09090b] mt-10 mb-4 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-[clamp(1.2rem,2vw,1.6rem)] font-bold text-[#09090b] mt-8 mb-3 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-[1.1rem] font-bold text-[#09090b] mt-6 mb-2" style={{ fontFamily: 'var(--font-display)' }}>{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-amber-500 pl-5 my-8 italic text-[#52525b] text-[17px] leading-relaxed">{children}</blockquote>
    ),
  },
};

export const revalidate = 60; // 60 seconds

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Fetch the post from Sanity
  let post;
  try {
    post = await client.fetch(getPostBySlugQuery, { slug });
  } catch (error) {
    console.error(`Failed to fetch blog post ${slug}:`, error);
    notFound();
  }

  if (!post) {
    notFound();
  }

  // Fetch related posts from Sanity based on the current post's categories
  let relatedPosts = [];
  if (post.categories?.length > 0) {
    try {
      relatedPosts = await client.fetch(getRelatedPostsQuery, { 
        currentSlug: slug, 
        categories: post.categories 
      });
    } catch (error) {
      console.error(`Failed to fetch related posts for ${slug}:`, error);
    }
  }

  return (
    <main className="bg-white min-h-screen pt-10">
      <article className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* ── LEFT COLUMN: MAIN CONTENT (8 COLS) ──────────────── */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          
          <div className="flex flex-col items-start gap-4 mb-4">
            <div className="flex flex-wrap gap-2">
              {post.categories?.map((cat: string) => (
                <span 
                  key={cat}
                  style={{ fontSize: '10px', fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: categoryColors[cat] ?? 'var(--color-gray-900)' }}
                  className="px-3 py-1 bg-gray-100 rounded-sm"
                >
                  {cat}
                </span>
              ))}
            </div>
            
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: '#09090b', lineHeight: 1.15 }} className="tracking-tight max-w-3xl">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 mt-2" style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: '#52525b' }}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full overflow-hidden relative shrink-0">
                  {post.author?.image ? (
                    <Image src={post.author.image} alt={post.author.name} fill className="object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gray-200" />
                  )}
                </div>
                <span className="font-semibold text-[#09090b]">{post.author?.name || 'Noplin Team'}</span>
              </div>
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#d4d4d8' }} />
              <time dateTime={post.date}>
                {post.date ? new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Unknown Date'}
              </time>
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#d4d4d8' }} />
              <span>{post.readTime || '5 min read'}</span>
            </div>
          </div>

          {/* 1. MAIN IMAGE: This is the primary feature image at the top of the article (from post.mainImage) */}
          {post.mainImage && (
            <div className="relative w-full aspect-16/9 lg:aspect-21/9 rounded-xl overflow-hidden mb-8 border border-gray-200">
              <Image 
                src={post.mainImage} 
                alt={post.title} 
                fill 
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* 2. BODY CONTENT (PORTABLE TEXT): 
               This is where your actual article text goes! 
               Yes, you CAN insert images directly inside this text editor in Sanity, 
               and they will render exactly where you place them between paragraphs. 
          */}
          <div className="max-w-none text-[#3f3f46]" style={{ fontFamily: 'var(--font-body)', lineHeight: 1.8 }}>
            {post.body ? (
              <PortableText value={post.body} components={portableTextComponents} />
            ) : (
              <>
                <p className="text-xl font-medium leading-relaxed text-[#09090b] mb-8">
                  {post.excerpt || 'Read this article to learn more.'}
                </p>
                <p>
                  No formatted body content found.
                </p>
              </>
            )}
          </div>
        </div>

        {/* ── RIGHT COLUMN: SIDEBAR CONTENT (4 COLS) ────────────── */}
        <div className="lg:col-span-4">
          <div className="sticky top-[100px] flex flex-col p-6 rounded-xl border border-gray-200 bg-gray-50 shadow-sm">
            <div className="border-b border-gray-200 pb-4 mb-6 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-amber-500" />
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px', color: '#09090b' }}>
                Related Articles
              </h3>
            </div>

            <div className="flex flex-col gap-6">
              {relatedPosts.map((related: any) => (
                <Link key={related.id} href={related.href} className="group flex flex-col gap-1.5 pb-5 border-b border-gray-100 last:border-0 last:pb-0">
                  <div className="flex flex-wrap gap-1 mb-1">
                    {related.categories?.slice(0, 2).map((cat: string) => (
                     <span 
                  key={cat}
                  style={{ fontSize: '10px', fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'capitalize', color: categoryColors[cat] ?? 'var(--color-gray-900)' }}
                  className="px-3 py-1 bg-gray-100 rounded-sm"
                >
                  {cat}
                </span>
                    ))}
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '15px', color: '#09090b', lineHeight: 1.4 }} className="transition-colors duration-200 group-hover:text-gray-700">
                    {related.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-1" style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: '#71717a' }}>
                    <span>
                      {related.date ? new Date(related.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Unknown Date'}
                    </span>
                    <span style={{ width: 3, height: 3, borderRadius: '50%', background: '#e4e4e7' }} />
                    <span>{related.readTime || '5 min read'}</span>
                  </div>
                </Link>
              ))}

              {relatedPosts.length === 0 && (
                <p className="text-sm text-gray-500 font-body">No related articles available.</p>
              )}
            </div>
          </div>
          
          {/* Author snippet in sidebar */}
          <div className="mt-8 p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center text-center gap-4">
            <div className="w-20 h-20 rounded-full overflow-hidden relative shrink-0 border border-gray-200">
               {post.author?.image ? (
                 <Image src={post.author.image} alt={post.author.name} fill className="object-cover" />
               ) : (
                 <div className="w-full h-full bg-gray-200" />
               )}
            </div>
            <div>
               <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.125rem', color: '#09090b' }}>{post.author?.name || 'Noplin Digital Team'}</h4>
               <span style={{ fontFamily: 'var(--font-display)', fontSize: '12px', color: '#1A56DB', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Author</span>
               {post.author?.bio && (
                 <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-amber-500)', lineHeight: 1.6 }} className="mt-3">
                   {post.author.bio}
                 </p>
               )}
            </div>
          </div>
        </div>

      </article>

      {/* ── CTA ────────────────────────────────────── */}
      <div className="mt-24 border-t border-gray-200">
        <BlogCTA />
      </div>
    </main>
  );
}
