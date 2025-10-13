export function StructuredData({ locale }: { locale: string }) {
  const ORG_NAME = "Indevix";
  const ORG_URL = "https://indevix.com";
  const LOGO_URL = "https://indevix.com/logo.png";

  const desc: Record<typeof locale, string> = {
    en: "We build custom web and AI solutions for businesses: websites, automation, CRM and software. We turn complex processes into efficient systems.",
    ru: "Создаём индивидуальные веб- и AI-решения для бизнеса: сайты, автоматизация, CRM и ПО. Превращаем сложные процессы в эффективные системы.",
    ky: "Бизнес үчүн веб жана AI чечимдери: сайттар, автоматташтыруу, CRM жана программалык камсыздоо. Татаал процесстерди натыйжалуу системаларга айлантабыз.",
    tr: "İşletmeler için web ve yapay zeka çözümleri: web siteleri, otomasyon, CRM ve yazılım. Karmaşık süreçleri verimli sistemlere dönüştürüyoruz.",
  };

  type L = typeof locale;

  const base = [
    {
      id: 1,
      slug: "website-development",
      priceUSD: 1000,
      tags: ["Website", "Online presence", "Clients", "Sales", "Brand"],
    },
    {
      id: 2,
      slug: "business-process-automation",
      priceUSD: 2500,
      tags: ["Automation", "Processes", "Efficiency", "Savings", "CRM"],
    },
    {
      id: 3,
      slug: "custom-software-development",
      priceUSD: 10000,
      tags: ["Development", "Integration", "Scaling", "Turnkey", "API"],
    },
    {
      id: 4,
      slug: "it-support-and-maintenance",
      priceUSD: 500,
      tags: ["Support", "Maintenance", "Reliability", "24/7", "Security"],
    },
    {
      id: 5,
      slug: "data-analytics",
      priceUSD: 1500,
      tags: ["Analytics", "Data", "Reports", "Insights", "Strategy"],
    },
    {
      id: 6,
      slug: "interface-design",
      priceUSD: 800,
      tags: ["Design", "Interfaces", "UX", "UI", "Usability"],
    },
  ] as const;

  const i18n: Record<
    L,
    Record<number, { name: string; description: string }>
  > = {
    en: {
      1: {
        name: "Website development",
        description:
          "We build modern websites that attract clients, strengthen your brand, and drive sales.",
      },
      2: {
        name: "Business process automation",
        description:
          "We implement digital solutions that remove routine, increase efficiency, and cut costs.",
      },
      3: {
        name: "Custom software development",
        description:
          "Tailored software that reflects your workflows, scales with you, and creates an edge.",
      },
      4: {
        name: "IT support and maintenance",
        description:
          "Reliable operations and rapid incident resolution. 24/7 support to minimize downtime.",
      },
      5: {
        name: "Data analytics",
        description:
          "We turn data into clear insights for informed decisions and new growth opportunities.",
      },
      6: {
        name: "Interface design",
        description:
          "Usable, elegant interfaces for web and apps that improve experience and trust.",
      },
    },
    ru: {
      1: {
        name: "Разработка веб-сайтов",
        description:
          "Создаём современные сайты, которые привлекают клиентов, усиливают бренд и увеличивают продажи.",
      },
      2: {
        name: "Автоматизация бизнес-процессов",
        description:
          "Внедряем цифровые решения, снимающие рутину, повышающие эффективность и снижающие издержки.",
      },
      3: {
        name: "Индивидуальная разработка ПО",
        description:
          "ПО под ваши процессы: масштабируется вместе с бизнесом и даёт конкурентное преимущество.",
      },
      4: {
        name: "IT-поддержка и обслуживание",
        description:
          "Надёжная работа систем и быстрое решение инцидентов. Поддержка 24/7 для минимизации простоев.",
      },
      5: {
        name: "Аналитика данных",
        description:
          "Преобразуем данные в понятные инсайты для решений и поиска новых точек роста.",
      },
      6: {
        name: "Дизайн интерфейсов",
        description:
          "Удобные и выразительные интерфейсы для веба и приложений, повышающие доверие и UX.",
      },
    },
    ky: {
      1: {
        name: "Веб-сайттарды иштеп чыгуу",
        description:
          "Заманбап сайттар: кардарларды тартуу, брендди бекемдөө жана сатууну өсүрүү.",
      },
      2: {
        name: "Бизнес процесстерин автоматташтыруу",
        description:
          "Рутинаны азайтып, натыйжалуулукту жогорулатып, чыгымдарды кыскарткан санариптик чечимдер.",
      },
      3: {
        name: "Жекелештирилген программалык камсыздоо",
        description:
          "Иш агымдарыңызга ылайыкташкан, масштабдалуучу жана атаандаштык артыкчылык берген ПО.",
      },
      4: {
        name: "IT-колдоо жана тейлөө",
        description:
          "Системалардын ишенимдүү иштеши жана окуяларды тез чечүү. 24/7 колдоо — токтоп калуулар аз.",
      },
      5: {
        name: "Маалымат аналитикасы",
        description:
          "Маалыматты түшүнүктүү инсайттарга айлантып, туура чечимдерди жана өсүү мүмкүнчүлүктөрүн ачабыз.",
      },
      6: {
        name: "Интерфейс дизайны",
        description:
          "Колдонуучуга ыңгайлуу, жагымдуу интерфейстер — веб жана колдонмолор үчүн.",
      },
    },
    tr: {
      1: {
        name: "Web sitesi geliştirme",
        description:
          "Müşteri çeken, markanızı güçlendiren ve satışları artıran modern web siteleri geliştiriyoruz.",
      },
      2: {
        name: "İş süreçleri otomasyonu",
        description:
          "Rutini ortadan kaldıran, verimliliği artıran ve maliyetleri düşüren dijital çözümler kuruyoruz.",
      },
      3: {
        name: "Özel yazılım geliştirme",
        description:
          "İş akışlarınıza uygun, ölçeklenebilir ve rekabet avantajı sağlayan yazılım.",
      },
      4: {
        name: "IT destek ve bakım",
        description:
          "Güvenilir sistem çalışması ve hızlı müdahale. Kesintileri en aza indirmek için 7/24 destek.",
      },
      5: {
        name: "Veri analitiği",
        description:
          "Verileri net içgörülere dönüştürerek kararları güçlendirir ve büyüme alanlarını ortaya çıkarırız.",
      },
      6: {
        name: "Arayüz tasarımı",
        description:
          "Web ve uygulamalar için kullanışlı ve estetik arayüzler — daha iyi deneyim ve güven.",
      },
    },
  };

  const areaServed = [
    { "@type": "Country", name: "Kyrgyzstan" },
    { "@type": "Place", name: "Global / Remote" },
  ];

  const services = base.map((s) => {
    const t = i18n[locale][s.id];
    return {
      "@type": "Offer",
      url: `${ORG_URL}/services/${s.slug}`,
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        priceCurrency: "USD",
        price: s.priceUSD,
      },
      itemOffered: {
        "@type": "Service",
        name: t.name,
        description: t.description,
        areaServed,
        serviceType: t.name,
        keywords: s.tags.join(", "),
        provider: {
          "@type": "Organization",
          name: ORG_NAME,
          url: ORG_URL,
        },
      },
    };
  });

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: ORG_NAME,
    url: ORG_URL,
    logo: LOGO_URL,
    description: desc[locale],
    address: { "@type": "PostalAddress", addressCountry: "KG" },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+996-508-992-993",
      contactType: "customer service",
      availableLanguage: ["en", "ru", "ky", "tr"],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name:
        locale === "ru"
          ? "Услуги"
          : locale === "ky"
            ? "Кызматтар"
            : locale === "tr"
              ? "Hizmetler"
              : "Services",
      itemListElement: services,
    },

    knowsAbout: [
      "web development",
      "custom software",
      "business automation",
      "CRM",
      "data analytics",
      "UI/UX design",
      "IT support",
      "AI solutions",
    ],
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  );
}
