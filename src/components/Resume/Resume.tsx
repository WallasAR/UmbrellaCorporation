import React from "react"
import { Container, SelectedItems, Items, Line, ContainerTotal, Total } from "./styles"; 

interface ResumeProps {
    items: number;
    total: string;
};

const Resume: React.FC<ResumeProps> = ({ items, total }) =>{
    return(
        <Container>
            <SelectedItems>
                <Items>({items}) Itens{"\n"}selecionados</Items>
            </SelectedItems>

            <Line/>

            <ContainerTotal>
                <Total>Total: R${total}</Total>
            </ContainerTotal>
        </Container>
    );
}

export { Resume };