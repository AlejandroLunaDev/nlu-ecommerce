import { ItemlistContainer } from "../components/ItemListContainer/ItemlistContainer";




export function Home() {
  return (
    <section className=" px-8">
      <ItemlistContainer limit={50} />
    </section>
  )
}
