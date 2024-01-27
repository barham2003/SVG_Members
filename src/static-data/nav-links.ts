interface NavItem {
  item: string;
  href: string;
}

function getNavLinks(lang: string): NavItem[] {
  if (lang === "kurdish")
    return [
      { item: "سەرەکی", href: "/" },
      { item: "پرۆفایڵ", href: "/profile" },
      { item: "پۆستەکان", href: "/posts" },
    ];

  return [
    { item: "Home", href: "/" },
    { item: "Profile", href: "/profile" },
    { item: "Posts", href: "/posts" },
  ];
}
