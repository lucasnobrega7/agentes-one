import logo from '@/assets/images/flowise_white.svg' // Renamed to agentes_de_conversao_white.svg
import logoDark from '@/assets/images/flowise_dark.svg' // Renamed to agentes_de_conversao_dark.svg

import { useSelector } from 'react-redux'

// ==============================|| LOGO ||============================== //

const Logo = () => {
    const customization = useSelector((state) => state.customization)

    return (
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'row', marginLeft: '10px' }}>
            <img
                style={{ objectFit: 'contain', height: 'auto', width: 150 }}
                src={customization.isDarkMode ? logoDark : logo}
                alt='Agentes de Conversão'
            />
        </div>
    )
}

export default Logo
