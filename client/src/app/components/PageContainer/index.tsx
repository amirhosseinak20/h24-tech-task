import React, { PropsWithChildren } from "react";

import styles from "./PageContainer.module.scss";

type PropTypes = PropsWithChildren<{}>;
export function PageContainer({ children }: PropTypes) {
  return (
    <div className={styles.PageContainer}>
      <div className={styles.PageContainer__Header}>
        <strong>home24</strong>
        <input placeholder="Search" />
      </div>
      {children}
      <footer className={styles.PageContainer__Footer}>
        Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und
        Versandkosten.
      </footer>
    </div>
  );
}
