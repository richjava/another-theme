import React from "react";
import styles from "./Links.module.css";
import Card from "../card/card";

export default function Links() {
  return (
    <div className={`${styles.docs} container`}>
      <Card
        label="Docs"
        description="Find in-depth information about Next.js features and&nbsp;API."
      />
      <Card
        label="Learn"
        description="Find in-depth information about Next.js features and&nbsp;API."
      />
      <Card
        label="Templates"
        description="Find in-depth information about Next.js features and&nbsp;API."
      />
      <Card
        label="Deploy"
        description="Find in-depth information about Next.js features and&nbsp;API."
      />
    </div>
  );
}
