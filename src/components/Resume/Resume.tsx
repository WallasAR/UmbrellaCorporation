import React from "react"
import { Text, View } from "react-native"
import { ResumeContainer, ContainerItens, SelectItens, Line, ContainerTotal, Total } from "./styles"; 

const Resume: React.FC = () =>{
    return(
        <ResumeContainer>
            <ContainerItens>
                <SelectItens>(0) Itens Selecionados</SelectItens>
            </ContainerItens>
            <Line />
            <ContainerTotal>
                <Total>Total: R$0</Total>
            </ContainerTotal>
        </ResumeContainer>
    );
}

export { Resume };