import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  ogImage?: string;
  url?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Gustavo Francelino - Portfolio",
  description = "Dynamic and multilingual Software Engineer with over 7 years of experience in software development, project leadership, and AI integrations. Holds an Honours Bachelor's Degree in Telecommunications Engineering and a Software Development MicroMasters from UBCx.",
  ogImage = "/portfolio-preview.png",
  url = "https://gchahm.github.io"
}) => {
  const fullTitle = title === "Gustavo Francelino - Portfolio" ? title : `${title} - Gustavo Francelino`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="Gustavo Francelino, Software Engineer, Full Stack Developer, AI, Machine Learning, React, Next.js, TypeScript, Node.js, Python, Portfolio" />
      <meta name="author" content="Gustavo Francelino" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      
      {/* Open Graph Meta Tags for Social Media */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url}${ogImage}`} />
      <meta property="og:image:alt" content="Gustavo Francelino - Senior Software Engineer Portfolio" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Gustavo Francelino - Portfolio" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${url}${ogImage}`} />
      <meta name="twitter:image:alt" content="Gustavo Francelino - Senior Software Engineer Portfolio" />
      <meta name="twitter:creator" content="@gchahm" />
      <meta name="twitter:site" content="@gchahm" />
      
      {/* LinkedIn specific */}
      <meta property="article:author" content="Gustavo Francelino" />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="EN" />
      <meta name="revisit-after" content="30 days" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Favicon Links */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
      <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512x512.png" />
      
      {/* Web App Manifest */}
      <link rel="manifest" href="/manifest.json" />
      
      {/* Theme Colors */}
      <meta name="theme-color" content="#1f2937" />
      <meta name="msapplication-TileColor" content="#1f2937" />
      <meta name="msapplication-navbutton-color" content="#1f2937" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Gustavo Francelino",
            "jobTitle": "Senior Software Engineer",
            "description": description,
            "url": url,
            "image": `${url}${ogImage}`,
            "sameAs": [
              "https://github.com/Gchahm",
              "https://linkedin.com/in/gustavo-francelino"
            ],
            "knowsAbout": [
              "Software Development",
              "Full Stack Development",
              "Artificial Intelligence",
              "Machine Learning",
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "Python"
            ]
          })
        }}
      />
    </Head>
  );
};

export default SEOHead;