import { useNavigate } from 'react-router-dom'
import style from './Navbar.module.css'

export const Navbar = () => {

  const navigate = useNavigate()

  const navigation = ( page: number ) => {
    switch (page) {
      case 1:
        navigate('/')   
        break;
      case 2:
        navigate('/p2')   
        break;
      case 3:
        navigate('/p3')   
        break;

      default:
        break;
    }
  }

  return (
    <div className={style.container}>
      <label onClick={() => navigation(1)}>Page 1</label>
      <label onClick={() => navigation(2)}>Page 2</label>
      <label onClick={() => navigation(3)}>Page 3</label>
    </div>
  )
}

