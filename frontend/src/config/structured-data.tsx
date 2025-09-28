export function StructuredData({ locale }: { locale: string }) {
  const getLocalizedText = (key: string) => {
    const texts: Record<string, Record<string, string>> = {
      description: {
        en: "IT services company providing web development, automation, and custom software solutions",
        ru: "IT-компания, предоставляющая услуги веб-разработки, автоматизации и создания ПО",
        ky: "Веб-иштеп чыгуу, автоматташтыруу жана программалык камсыздоо чечимдерин берген IT кызматтар компаниясы",
        tr: "Web geliştirme, otomasyon ve özel yazılım çözümleri sağlayan IT hizmetleri şirketi",
      },
      webDevelopment: {
        en: "Web Development",
        ru: "Веб-разработка",
        ky: "Веб-иштеп чыгуу",
        tr: "Web Geliştirme",
      },
      webDevelopmentDesc: {
        en: "Custom websites, landing pages, and web applications",
        ru: "Индивидуальные сайты, лендинги и веб-приложения",
        ky: "Жеке сайттар, лендинг барактар жана веб-колдонмолор",
        tr: "Özel web siteleri, açılış sayfaları ve web uygulamaları",
      },
      businessAutomation: {
        en: "Business Automation",
        ru: "Автоматизация бизнеса",
        ky: "Бизнести автоматташтыруу",
        tr: "İş Otomasyonu",
      },
      businessAutomationDesc: {
        en: "CRM systems, process automation, and digital transformation",
        ru: "CRM-системы, автоматизация процессов и цифровая трансформация",
        ky: "CRM системалары, процесстерди автоматташтыруу жана санариптик өзгөртүү",
        tr: "CRM sistemleri, süreç otomasyonu ve dijital dönüşüm",
      },
    };

    return texts[key]?.[locale] || texts[key]?.en || "";
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Indevix",
    url: "https://indevix.com",
    logo: "https://indevix.com/logo.png",
    description: getLocalizedText("description"),
    address: {
      "@type": "PostalAddress",
      addressCountry: "KG",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+996-508-992-993",
      contactType: "customer service",
    },
    sameAs: [],
    service: [
      {
        "@type": "Service",
        name: getLocalizedText("webDevelopment"),
        description: getLocalizedText("webDevelopmentDesc"),
      },
      {
        "@type": "Service",
        name: getLocalizedText("businessAutomation"),
        description: getLocalizedText("businessAutomationDesc"),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationSchema, null, 0),
      }}
      suppressHydrationWarning
    />
  );
}
