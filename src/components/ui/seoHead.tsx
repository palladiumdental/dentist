import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

type SEOHeadProps = {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  language?: string;
};

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Palladium Dent | Professzionális Fogászati Ellátás",
  description = "A Palladium Dent professzionális fogászati szolgáltatásokat kínál, beleértve az általános fogászatot, kozmetikai beavatkozásokat és sürgősségi ellátást.",
  keywords = "fogászati klinika, fogorvos, fogászati szolgáltatások, fogfehérítés",
  canonicalUrl = window.location.href,
  ogImage = "../../assets/favicon-3.png",
  language = "hu",
}) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <html lang={language} />
      </Helmet>
    </HelmetProvider>
  );
};

export default SEOHead;
