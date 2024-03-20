import { ItemlistContainer } from "../components/ItemListContainer/ItemlistContainer";



export function Home() {
  return (
    <section>
      <ItemlistContainer limit={50} />
    </section>
  )
}
