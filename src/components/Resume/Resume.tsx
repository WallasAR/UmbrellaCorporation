import React from "react"
import { Container, SelectedItems, Items, Line, ContainerTotal, Total } from "./styles"; 

const Resume: React.FC = () =>{
    return(
        <Container>
            <SelectedItems>
                <Items>(0) Itens{"\n"}selecionados</Items>
            </SelectedItems>

            <Line/>

            <ContainerTotal>
                <Total>Total: R$0</Total>
            </ContainerTotal>
        </Container>
    );
}

export { Resume };