interface NavItem {
  item: string;
  href: string;
}

export function getNavLinks(lang: "kur" | "eng"): NavItem[] {
  if (lang === "kur")
    return [
      { item: "سەرەکی", href: `/${lang}/` },
      { item: "پرۆفایڵ", href: `/${lang}/profile` },
      { item: "پۆستەکان", href: `/${lang}/posts` },
    ];

  return [
    { item: "Home", href: `/${lang}/` },
    { item: "Profile", href: `/${lang}/profile` },
    { item: "Posts", href: `/${lang}/posts` },
  ];
}
