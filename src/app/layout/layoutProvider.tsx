import type { ReactNode } from "react"
import type { ILayoutProvider } from "./types"
import styles from "./layoutProvider.module.css"

export const LayoutProvider = ({ children }: ILayoutProvider): ReactNode => {
  return (
    <div className={styles.wrapper}>
      <header>header</header>
      <main className={styles.main}>{children}</main>
      <footer>footer</footer>
    </div>
  )
}
