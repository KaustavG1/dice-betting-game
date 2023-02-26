import './Header.css'
import content from '../../constants/locale'

export default function Header() {
  return (
    <>
      <div className="header">
        {content.header}
      </div>
    </>
  )
}
