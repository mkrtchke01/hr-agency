import { site } from "@/lib/site";

/**
 * Schema.org разметка (ProfessionalService) для расширенных сниппетов в поиске.
 * Рендерится как обычный <script type="application/ld+json">.
 */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    url: site.url,
    email: site.contacts.email,
    telephone: site.contacts.phone,
    areaServed: site.contacts.areaServed,
    sameAs: [site.contacts.telegram],
    serviceType: "Подбор персонала для e-commerce и маркетплейсов",
    knowsAbout: [
      "E-commerce",
      "Маркетплейсы",
      "Performance-маркетинг",
      "Подбор персонала",
      "Рекрутинг",
    ],
  };

  return (
    <script
      type="application/ld+json"
      // Контент контролируем мы, XSS-риска нет.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
