import Landing from "@/components/landing";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nocturne Systems",
    url: "https://nocturnesystems.dev",
    description:
      "Luxury web development studio specializing in performance-first digital systems, refined UI engineering, and scalable architectures."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Landing />
    </>
  );
}
