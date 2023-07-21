import { Map, Sidebar } from "components"
import styles from "./index.module.scss"

function App() {
  return (
    <main className={styles.main} style={{ display: "flex", width: "100%" }}>
      <Sidebar />
      <Map />
    </main>
  )
}

export default App
