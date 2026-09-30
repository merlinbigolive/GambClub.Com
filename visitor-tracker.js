(() => {
  const cfg = window.GAMB_VISITOR_CONFIG || {};
  if (!cfg.supabaseUrl || cfg.supabaseUrl.startsWith("YOUR_") || !cfg.supabaseAnonKey || cfg.supabaseAnonKey.startsWith("YOUR_")) return;
  if (sessionStorage.getItem("gambclub_visitor_logged") === "1") return;

  const load = document.createElement("script");
  load.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";
  load.onload = async () => {
    try {
      const { createClient } = window.supabase;
      const client = createClient(cfg.supabaseUrl, cfg.supabaseAnonKey);

      let city = "", country = "", country_code = "";
      try {
        const r = await fetch("https://ipapi.co/json/", { cache: "no-store" });
        if (r.ok) {
          const d = await r.json();
          city = d.city || "";
          country = d.country_name || "";
          country_code = d.country_code || "";
        }
      } catch (_) {}

      const ua = navigator.userAgent || "";
      const bot = /bot|crawler|spider|slurp|bingpreview|headless|lighthouse/i.test(ua);

      await client.from("gambclub_visitor_logs").insert({
        site: cfg.site,
        visitor_type: bot ? "bot" : "human",
        city, country, country_code,
        user_agent: ua,
        referrer: document.referrer || ""
      });

      sessionStorage.setItem("gambclub_visitor_logged", "1");
    } catch (_) {}
  };
  document.head.appendChild(load);
})();
