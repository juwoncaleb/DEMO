import React from "react";
import Head from "next/head";

interface DefaultHeadSEOProps {
  title: string;
  description: string;
  icon: string;
  keywords: string[];
  themeColor: string;
}

const DEFAULT_SEO_CONFIG: Readonly<DefaultHeadSEOProps> = {
  title: "NextMove agency",
  description: "NextMove agency",
  icon: "/favicon.svg",
  keywords: ["Real estate"] as string[],
  themeColor: "#FFFFFF",
} as const;

export default function DefaultHeadSEO(props: Partial<DefaultHeadSEOProps>) {
  const prop = { ...DEFAULT_SEO_CONFIG, ...props };

  return (
    <Head>
      <title>{prop.title}</title>
      <meta name="title" content={prop.title} />
      <meta name="description" content={prop.description} />
      <meta name="keywords" content={prop.keywords.join(",")} />
      <meta name="theme-color" content={props.themeColor} />
      <link rel="icon" href={prop.icon} />
    </Head>
  );
}
