import { useNavigate } from 'react-router-dom';
import { goHome, goInventory } from '../routes/coordinator'
import { Title, TitleBox, ButtonBox, Button } from '../styled/homeStyled'


export function Header() {
    const navigate = useNavigate()

    return (
        <div>
            <TitleBox><Title>kLab - eCommerce</Title> </TitleBox>
            <ButtonBox>
                <Button onClick={() => goHome(navigate)}>Produtos</Button>
                <Button onClick={() => goInventory(navigate)}>Estoque</Button>
            </ButtonBox>
        </div>
    )
}