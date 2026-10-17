export function ServiceCardVisual({ index }: { index: number }) {
  const common = {
    className: "service-card__visual",
    viewBox: "0 0 240 180",
    fill: "none",
    "aria-hidden": true,
  } as const;

  switch (index) {
    case 0:
      return (
        <svg {...common}>
          <circle cx="160" cy="88" r="58" fill="#8edee7" />
          <circle cx="160" cy="88" r="42" stroke="#1765f3" strokeWidth="8" />
          <path d="M61 139 103 102l31 17 55-66" stroke="#7057d8" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" />
          <path d="m174 54 18-4-2 19" stroke="#7057d8" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="61" cy="139" r="13" fill="#1765f3" /><circle cx="103" cy="102" r="13" fill="#f4ad55" /><circle cx="134" cy="119" r="13" fill="#17aebd" />
        </svg>
      );
    case 1:
      return (
        <svg {...common}>
          <rect x="71" y="18" width="113" height="151" rx="23" fill="#b9ccff" stroke="#1765f3" strokeWidth="8" />
          <rect x="87" y="47" width="81" height="58" rx="12" fill="#fff" />
          <circle cx="105" cy="66" r="9" fill="#f4ad55" /><path d="M120 61h33M120 73h25" stroke="#7057d8" strokeWidth="7" strokeLinecap="round" />
          <rect x="91" y="116" width="39" height="16" rx="8" fill="#1765f3" /><path d="M141 124h21M94 146h65" stroke="#17aebd" strokeWidth="7" strokeLinecap="round" />
          <path d="M51 65c-17 8-23 25-16 41 8 17 24 25 40 19" stroke="#7057d8" strokeWidth="9" strokeLinecap="round" />
          <path d="m45 55 13 10-17 5" fill="#7057d8" />
        </svg>
      );
    case 2:
      return (
        <svg {...common}>
          <path d="M33 49c41 0 45 58 84 58h28c28 0 33 32 60 32" stroke="#8edee7" strokeWidth="17" strokeLinecap="round" />
          <path d="M33 49c41 0 45 58 84 58h28c28 0 33 32 60 32" stroke="#1765f3" strokeWidth="7" strokeLinecap="round" strokeDasharray="2 16" />
          <circle cx="34" cy="49" r="19" fill="#f4ad55" /><circle cx="117" cy="107" r="19" fill="#7057d8" />
          <circle cx="204" cy="139" r="27" fill="#d8f4f5" stroke="#17aebd" strokeWidth="8" /><circle cx="204" cy="132" r="8" fill="#1765f3" /><path d="M188 153c4-11 28-11 32 0" stroke="#1765f3" strokeWidth="7" strokeLinecap="round" />
          <path d="m183 41 13 13 24-27" stroke="#17aebd" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 3:
      return (
        <svg {...common}>
          <rect x="36" y="42" width="119" height="100" rx="17" fill="#c8d7ff" transform="rotate(-8 36 42)" />
          <rect x="76" y="31" width="126" height="105" rx="17" fill="#fff" stroke="#7057d8" strokeWidth="8" />
          <rect x="94" y="50" width="44" height="11" rx="5.5" fill="#f4ad55" /><path d="M94 78h84M94 97h66M94 116h75" stroke="#1765f3" strokeWidth="8" strokeLinecap="round" />
          <path d="m48 29 5 13 14 5-14 5-5 14-5-14-14-5 14-5 5-13Z" fill="#17aebd" />
          <circle cx="197" cy="145" r="20" fill="#8edee7" /><path d="m187 145 7 7 14-17" stroke="#0a6071" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 4:
      return (
        <svg {...common}>
          <rect x="26" y="31" width="190" height="124" rx="18" fill="#d6e2ff" stroke="#1765f3" strokeWidth="8" />
          <path d="M26 59h190" stroke="#1765f3" strokeWidth="8" /><circle cx="46" cy="45" r="5" fill="#f4ad55" /><circle cx="62" cy="45" r="5" fill="#17aebd" /><circle cx="78" cy="45" r="5" fill="#7057d8" />
          <rect x="46" y="78" width="67" height="55" rx="10" fill="#fff" /><rect x="126" y="78" width="70" height="17" rx="8.5" fill="#7057d8" /><path d="M126 108h60M126 127h45" stroke="#17aebd" strokeWidth="8" strokeLinecap="round" />
          <circle cx="80" cy="105" r="15" fill="#8edee7" /><path d="m73 105 6 6 11-14" stroke="#1765f3" strokeWidth="6" strokeLinecap="round" />
        </svg>
      );
    case 5:
      return (
        <svg {...common}>
          <path d="M49 60h111l33 34-73 68H49c-12 0-22-10-22-22V82c0-12 10-22 22-22Z" fill="#cbd9ff" stroke="#7057d8" strokeWidth="8" />
          <circle cx="155" cy="95" r="14" fill="#fff" stroke="#1765f3" strokeWidth="7" />
          <path d="M54 88h63M54 109h76M54 130h50" stroke="#1765f3" strokeWidth="8" strokeLinecap="round" />
          <path d="m187 35 7 17 17 7-17 7-7 18-7-18-18-7 18-7 7-17Z" fill="#f4ad55" />
          <circle cx="203" cy="129" r="21" fill="#8edee7" /><path d="M194 129h18M203 120v18" stroke="#0a6071" strokeWidth="6" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M39 46h54v37h54v42h54" stroke="#8edee7" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M39 46h54v37h54v42h54" stroke="#1765f3" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="39" cy="46" r="18" fill="#f4ad55" /><circle cx="93" cy="83" r="18" fill="#7057d8" /><circle cx="147" cy="125" r="18" fill="#17aebd" />
          <circle cx="201" cy="125" r="26" fill="#d8f4f5" stroke="#1765f3" strokeWidth="8" /><path d="m190 125 8 8 15-19" stroke="#1765f3" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M57 147c31 18 65 20 93 6" stroke="#7057d8" strokeWidth="7" strokeLinecap="round" strokeDasharray="3 14" />
        </svg>
      );
  }
}
