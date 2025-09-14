const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "name": "CA Narender S & Co.",
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;
