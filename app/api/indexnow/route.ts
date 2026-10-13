import { INDEXNOW_KEY, SITE_URL } from "@/lib/site";

export async function POST(request: Request) {
  const secret = process.env.INDEXNOW_SUBMIT_SECRET;
  const header = request.headers.get("authorization") || "";
  if (!secret || header !== `Bearer ${secret}`) {
    return new Response("Unauthorized", { status: 401 });
  }

  let body: { urlList?: unknown };
  try {
    body = (await request.json()) as { urlList?: unknown };
  } catch {
    return new Response("Bad request", { status: 400 });
  }

  const urlList = body.urlList;
  if (!Array.isArray(urlList) || urlList.length === 0 || urlList.length > 10000) {
    return new Response("Bad request", { status: 400 });
  }

  for (const url of urlList) {
    if (typeof url !== "string" || (url !== SITE_URL && !url.startsWith(`${SITE_URL}/`))) {
      return new Response("Bad request", { status: 400 });
    }
  }

  const host = new URL(SITE_URL).host;
  const payload = {
    host,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList,
  };

  const response = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });

  return new Response(await response.text(), {
    status: response.status,
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
