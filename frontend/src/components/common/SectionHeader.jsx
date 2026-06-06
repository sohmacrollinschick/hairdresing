export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mb-10 max-w-3xl">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 font-display text-3xl font-bold text-salonDark md:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-salonText">{description}</p>}
    </div>
  );
}
