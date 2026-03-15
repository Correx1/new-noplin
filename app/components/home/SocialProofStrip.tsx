'use client';

const clients = [
  { name: 'Ford',    svg: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg' },
  { name: 'Google',  svg: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Shopify', svg: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg' },
  { name: 'Stripe',  svg: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg' },
  { name: 'Slack',   svg: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg' },
];

export default function SocialProofStrip() {
  return (
    <section className="bg-(--bg-section) border-t border-(--border-default) py-8 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-5">

        {/* Label */}
        <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-(--text-muted)">
          Brands we&#39;ve worked with
        </p>

        {/* Logo grid — static, centered, grayscale */}
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {clients.map((c) => (
            <div key={c.name} className="flex items-center justify-center w-[90px] h-[30px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.svg}
                alt={c.name}
                className="max-w-[90px] max-h-[26px] object-contain"
                style={{ filter: 'grayscale(100%)', opacity: 0.45 }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}