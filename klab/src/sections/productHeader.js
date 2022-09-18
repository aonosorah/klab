import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../global/globalContext';
import { goInventory, goBack } from '../routes/coordinator'
import { TitleBox, ButtonBox } from '../styled/homeStyled'
import { TitleIn, InputIn, Select } from '../styled/invStyled'
import { ButtonProd } from '../styled/prodStyled'



export function HeaderHome({selects, setSelects}) {
    const navigate = useNavigate()
    const { search, setSearch} = useContext(GlobalContext)


    const onChangeInput = (e) => { setSearch(e.target.value) }
    const onChangeSelect = (e) => { setSelects(e.target.value)}
    return (
        <div>
            <TitleBox><TitleIn>kLab - eCommerce</TitleIn></TitleBox>
            <ButtonBox>
                <ButtonProd onClick={() => goBack(navigate)}>Voltar</ButtonProd>
                <InputIn placeholder='busca por nome' value={search} onChange={onChangeInput} />
                <Select value={selects} onChange={onChangeSelect}>
                    <option value={0}>Produtos Disponíveis</option>
                    <option value={1}>Produtos COM Defeito</option>
                    <option value={2}>Produtos SEM Defeito</option>
                </Select>
                <ButtonProd onClick={() => goInventory(navigate)}>Estoque</ButtonProd>
            </ButtonBox>
        </div>
    )
};


