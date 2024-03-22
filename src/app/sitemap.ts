export default function sitemap() {
  const base = "https://www.smartvolunteersgroup.com";
  return [
    {
      url: base,
      lastModified: new Date(),
    },
    {
      url: `${base}/activities`,
      lastModified: new Date(),
    },
  ];
}
