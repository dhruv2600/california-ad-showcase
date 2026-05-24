const StructuredData = () => {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "name": "CA Narender Sharma",
    "description": "Expert Chartered Accountants specializing in RSU taxation, foreign investments, and IT notice resolution",
    "url": "https://california-ad-showcase.vercel.app",
    "telephone": "+91-8310946034",
    "email": "canarenders@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "The Arcade, Whitefield",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "12.9698",
      "longitude": "77.7500"
    },
    "openingHours": "Mo-Sa 09:00-19:00",
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "bestRating": "5",
      "ratingCount": "10"
    },
    "serviceArea": {
      "@type": "Place",
      "name": "Bangalore and Remote Consultations Worldwide"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Tax Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "RSU & Stock Options Taxation",
            "description": "Expert handling of Restricted Stock Units and employee stock option taxation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Foreign Investment Tax Compliance",
            "description": "Complete tax compliance for foreign stock investments and FBAR filing"
          }
        }
      ]
    }
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much can I save on RSU taxation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "RSU tax savings depend on your total income and timing of vesting. We typically help clients save 15-30% through strategic planning, optimal tax regime selection, and proper timing of stock sales."
        }
      },
      {
        "@type": "Question",
        "name": "Do you handle foreign investment tax compliance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in foreign investment taxation including US stocks, European investments, FBAR filing, and claiming foreign tax credits. We ensure full compliance while maximizing tax efficiency and avoiding double taxation."
        }
      },
      {
        "@type": "Question",
        "name": "Can you resolve IT notices and assessments?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We have extensive experience handling IT notices, assessments, and appeals. Our success rate is over 90% in resolving notices favorably."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide services to NRIs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we serve NRIs worldwide with expertise in NRI taxation, TDS issues, property transactions, and repatriation of funds. We handle complex scenarios involving multiple countries and tax treaties."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can you file my ITR?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Regular ITR filing: 3-5 business days. Complex cases with foreign income: 7-10 days. Emergency/last-minute filing: Same day service available."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
    </>
  );
};

export default StructuredData;
