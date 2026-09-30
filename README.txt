# GAMB CLUB — Premium Affiliate Homepage

Static responsive homepage based on the supplied GambClub wireframe.

Files:
- index.html
- style.css
- script.js

Implemented:
- GAMB CLUB premium dark branding
- Responsive hero/header/footer
- Comparison table
- Rating/payout/crypto filters
- Search
- Promo code copy-to-clipboard
- Promo cards
- Guides
- Forum Phase 2 preview
- Responsible gambling/disclosure footer

Important:
The casino/bonus/rating rows are intentionally placeholders. Replace them with verified operator information, current terms, licensing information, and approved affiliate links before publishing.

VISITOR ADMIN SETUP
1. In Supabase SQL Editor, run gambclub_visitor_logs.sql.
2. Open visitor-config.js and replace YOUR_SUPABASE_PROJECT_URL and YOUR_SUPABASE_ANON_KEY.
3. Change CHANGE_THIS_ADMIN_PASSWORD to your own admin password.
4. Upload all files to the same site root.
5. Open /admin.html for the visitor dashboard.
6. The homepage logs one visitor per browser session, not every page refresh.
7. The dashboard shows total visitors, human/bot type, city/country, time, referrer and user agent, and includes Refresh, Reset Records and Logout.

IMPORTANT
- Use only a Supabase anon/public key in visitor-config.js. Never put a service-role key in frontend files.
- The included city/country lookup uses ipapi.co. If you do not want third-party IP geolocation, remove that lookup from visitor-tracker.js.

SEO SETUP
- Added unique SEO landing pages for the requested search topics:
  /online-casino/
  /betting-websites/
  /las-vegas-casinos/
  /best-casinos/
  /top-live-casino/
  /top-live-casino-websites/
- Added unique titles, meta descriptions, canonical URLs, Open Graph metadata and internal links.
- Added robots.txt and sitemap.xml.
- Submit https://gambclub.com/sitemap.xml in Google Search Console after deployment.
- Google decides which queries/pages rank; no HTML change can guarantee a first-page or every-keyword appearance.
- Keep each guide genuinely useful and update factual/operator information. Do not add hidden keyword blocks or duplicate doorway pages.


SEO KEYWORD PAGES V2
Added seven additional focused guides:
- /top-gambling-websites/
- /best-gambling-websites/
- /best-casinos-las-vegas/
- /best-casinos-brazil/
- /best-casinos-america/
- /best-live-casinos/
- /best-live-gambling-websites/

These pages use unique content and are included in sitemap.xml and the homepage internal-link hub. Google rankings are not guaranteed; keep factual/operator information current and verify jurisdiction-specific rules.
