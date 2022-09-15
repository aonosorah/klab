import { useNavigate } from 'react-router-dom';
import { goHome, goInventory, goBack } from '../routes/coordinator'
import { Title, TitleBox, ButtonBox, Button } from '../styled/homeStyled'
import { TitleIn, ButtonIn, InputIn } from '../styled/invStyled'
import { ButtonProd } from '../styled/prodStyled'

export function HeaderHome() {
    const navigate = useNavigate()

    return (
        <div>
            <TitleBox><TitleIn>kLab - eCommerce</TitleIn></TitleBox>
            <ButtonBox>
                <ButtonProd onClick={() => goBack(navigate)}>Voltar</ButtonProd>
                <InputIn placeholder='search'/>
                <ButtonProd onClick={() => goInventory(navigate)}>Estoque</ButtonProd>
            </ButtonBox>
        </div>
    )
};
export function HeaderInventory() {
    const navigate = useNavigate()

    return (
        <div>
            <TitleBox><TitleIn>kLab - eCommerce</TitleIn></TitleBox>
            <ButtonBox>
            <ButtonIn onClick={() => goBack(navigate)}>Voltar</ButtonIn>
            <InputIn placeholder='search'/>
            <ButtonIn onClick={() => goHome(navigate)}>Produtos</ButtonIn>
            </ButtonBox>
        </div>
    )
}
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

