import { Navbar } from '../components/Navbar/Navbar'
import styles from './Pages.module.css'

export const Page3 = () => {
  return (
    <>
      <Navbar/>
      <div className={styles.container}>
        <h1>PAGE 3</h1>
        <h2>Bienvenido a Nuestro Rincón de Serenidad</h2>
        <p><strong>Descubre la belleza en cada detalle.</strong></p>
        <p>
          La vida está hecha de pequeños momentos que pasan desapercibidos, pero aquí, queremos capturarlos todos. Desde el aroma de una taza de café recién hecho hasta el susurro del viento entre los árboles, nuestro espacio está dedicado a quienes buscan un respiro en medio del caos.
        </p>
        <p><strong>Explora, disfruta y déjate llevar.</strong></p>
      </div>
    </>
  )
}

