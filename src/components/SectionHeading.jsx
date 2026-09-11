export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
}) {
  return (
    <div
      className={`section-heading ${
        centered ? 'centered' : ''
      } ${light ? 'light' : ''}`}
    >
      {eyebrow && (
        <div className="section-eyebrow">
          <span>{eyebrow}</span>
        </div>
      )}

      <h2>{title}</h2>

      {subtitle && (
        <p>{subtitle}</p>
      )}
    </div>
  );
}