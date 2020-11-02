import React from "react"
import styles from "./style.module.css"
import ImageParagraph from "../../components/ImageParagraph"
import First from "../../components/Images/First"
import Second from "../../components/Images/Second"

const firstText = `
  Villa Oliva Verde is positioned in Vinkuran, isolated from the tourist
  crowd for a pleasant and peaceful vacation. 
  It is ideal for nature lovers who enjoy peace and relaxation. 
  Villa has four bedrooms called Olive, Lavanda, 
  Sea and Antique room. Each bedroom has its own bathroom, TV and air conditioning. 
  Also, there are two more sofa beds and the living room with 
  a pull-out sofa bed so ....
`

const secondText = `
  solated from the tourist crowds, yet just a few kilometers 
  from the tourist centers, lies the fishing village Vinkuran. 
  The private apartments above Vinkuran Bay and Soline Cove guarantee 
  a pleasant and peaceful vacation. Vinkuran has a sheltered beach along pine trees.
  ....`

const PageContent = () => (
  <section className={styles.pageContent}>
    <ImageParagraph image={<First />} title="About us" text={firstText} />
    <ImageParagraph
      image={<Second />}
      title="Vinkuran"
      text={secondText}
      reversed
    />
  </section>
)
export default PageContent
