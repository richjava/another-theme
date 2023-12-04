import { DataView } from "@/components/shared/data-view/data-view";
import Links from "@/components/shared/links/links";
import styles from "./Footer1.module.css";

export default function Footer1({ content }: any) {
  if (!content) return <></>;
  return (
    <section id="footer1" className="container template">
      <DataView sectionName="Footer1" content={content} />
      <Links />
      <div className={styles.attribution}>
        Built by <a href="https://builtjs.com">Built.js</a>
      </div>
    </section>
  );
}
