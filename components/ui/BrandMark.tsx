type BrandMarkProps = {
  size?: number;
  className?: string;
};

/**
 * VervAI brand mark — dark rounded tile with geometric "V" monogram and
 * emerald roundel. Canonical identity (from the original Logo): #09090B tile,
 * #FAFAFA V (stroke 3, vertices 12/28), #10B981 roundel. Renders at any size
 * from the 40-unit viewBox; self-contained (tile baked in).
 */
export default function BrandMark({ size = 40, className }: BrandMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={className}
    >
      <rect width="40" height="40" rx="10" fill="#09090B" />
      <path
        d="M12 12L20 28L28 12"
        stroke="#FAFAFA"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="20" r="2.5" fill="#10B981" />
    </svg>
  );
}