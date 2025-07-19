import { createWriteStream } from "node:fs";
import { resolve } from "node:path";
import { SitemapStream, streamToPromise } from "sitemap";

(async () => {
	const sitemapStream = new SitemapStream({
		hostname: "https://aryanbharti.com",
	});

	sitemapStream.write({ url: "/", changefreq: "weekly", priority: 1.0 });
	sitemapStream.write({
		url: "/projects",
		changefreq: "weekly",
		priority: 0.8,
	});
	sitemapStream.write({ url: "/blogs", changefreq: "weekly", priority: 0.8 });

	sitemapStream.end();

	const sitemapPath = resolve(__dirname, "../public", "sitemap.xml");
	const writeStream = createWriteStream(sitemapPath);

	await streamToPromise(sitemapStream).then((data) => writeStream.write(data.toString()));
})();
