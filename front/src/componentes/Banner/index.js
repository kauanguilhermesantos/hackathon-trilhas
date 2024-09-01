import './banner.css'
import imagemBanner from '../../assets/bannerimagem.png'

const Banner = () => {
    return (
            <header className="cabecalho">
                <img src={imagemBanner} alt={'Logo do Organo'}/>
            </header>)
}

export default Banner