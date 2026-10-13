type Props = { size?: number; title?: string };

export function Mark({ size = 32, title = "RobotMowGuide" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <rect width="32" height="32" fill="#123a63" />
      <path
        d="M8 8 H24 V16 H8 V24 H22"
        fill="none"
        stroke="#ffffff"
        strokeWidth="3"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <rect x="22" y="22" width="4" height="4" fill="#e2186f" />
    </svg>
  );
}
