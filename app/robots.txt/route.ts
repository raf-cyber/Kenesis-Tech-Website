export async function GET() {
  return new Response(
    `User-agent: *
Allow: /

Disallow: /api/
Disallow: /admin/
Disallow: /private/

Sitemap: https://kenesisntech.com/sitemap.xml
`,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
}
