type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  copy?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? (
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent/90">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{title}</h2>
      {copy ? <p className="mt-4 text-base leading-7 text-inkMuted sm:text-lg">{copy}</p> : null}
    </div>
  );
}
