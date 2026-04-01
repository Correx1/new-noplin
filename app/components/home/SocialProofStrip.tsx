'use client';

const clients = [
   { name: 'Veekay',    svg: '/logos/veekay.png' },
  { name: 'Luxury lighting',  svg: '/logos/luxury-lighting.png' },
  { name: 'africa-smes', svg: '/logos/africa-smes.png' },
  { name: 'divinecrown', svg: '/logos/divinecrown.png' },
  { name: 'Bluvon',  svg: '/logos/Bluvon.png' },
  { name: 'Happylife',   svg: '/logos/Happylife.png' },
  { name: 'Health-emergency',   svg: '/logos/Health-emergency.png' },
  { name: 'Purim',   svg: '/logos/Purim.png' },
  { name: 'schoolpilot',   svg: '/logos/schoolpilot.png' },
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
                className="max-w-[100px] max-h-[32px] object-contain"
                style={{ filter:'grayscale(90%)', opacity: 0.47 }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}