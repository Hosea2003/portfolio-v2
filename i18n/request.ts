import { getRequestConfig } from "next-intl/server";
import { headers, cookies } from "next/headers";

export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async () => {
  // Check cookie first, then headers, default to 'en'
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get("NEXT_LOCALE")?.value;

  let locale: Locale = "en";

  if (cookieLocale && locales.includes(cookieLocale as Locale)) {
    locale = cookieLocale as Locale;
  } else {
    const headersList = await headers();
    const acceptLanguage = headersList.get("accept-language");

    if (acceptLanguage) {
      // Parse the accept-language header to find preferred locale
      const preferred = acceptLanguage.split(",")[0].split("-")[0];
      if (locales.includes(preferred as Locale)) {
        locale = preferred as Locale;
      }
    }
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
