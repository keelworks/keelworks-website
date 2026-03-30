import { useEffect } from "react";

export default function NewsletterTemplate({ title, html, bg = "bg-white" }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className={`pt-24 sm:pt-20 ${bg}`}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
