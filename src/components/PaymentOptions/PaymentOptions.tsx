import React from "react";
import { useTheme } from "styled-components";

import { Button } from "../Buttons/Button";
import { TouchableOpacity } from "react-native";

import { Container, OptionsContainer, ConfigName, Icon, ViewRight, Info, RatioContent, RatioIcon, AddressContent, Address, Description, ViewRightDelivery, ViewLeft, Identifier, AddressInfoContent } from "./styles.ts";

interface Props {
  name: string;
  icon?: string;
  info?: string;
  onPress: () => void;
  isDelivery?: boolean;
  options?: string | any;
  onChange?: string | any;
  checkedValue?: string | any;
}

const PaymentOptions: React.FC<Props> = ({ icon, name, info, onPress, options, onChange, checkedValue, isDelivery }) => {
  const { COLORS } = useTheme();

  return (
    <Container>
      {options.map((option: any) => {
        let active = checkedValue == option.value;
        return (
          <RatioContent
            onPress={() => {
              onChange(option.value);
            }}
            key={option.value}
            activeOpacity={1}
          >
            <OptionsContainer>
              <Icon name={icon} />

              <ViewRight>
                <ConfigName>{name}</ConfigName>
                <Info>{info}</Info>

                <RatioIcon
                  name={active ? "checkmark-circle-outline" : "ellipse-outline"}
                  color={active ? COLORS.GREEN : COLORS.GRAY4}
                />
              </ViewRight>
            </OptionsContainer>

            {active && isDelivery && (
              <AddressInfoContent>
                <Description>Endereços cadastrados</Description>
                <Description>Selecione ou adicione um novo endereço: </Description>
                  {/* Quebra-galho para fluxo do app, provavelmente será uma flatList que recebe os endereços do db! */}
                  <TouchableOpacity onPress={() => {}} activeOpacity={0.8}>
                  <AddressContent>
                    <ViewLeft style={{ backgroundColor: active ? COLORS.GREEN2 : COLORS.WHITE }}>
                      <Icon name="home" style={{ color: active ? COLORS.WHITE : COLORS.BLACK }}/>
                      <Identifier style={{ color: active ? COLORS.WHITE : COLORS.BLACK }}>House</Identifier>
                    </ViewLeft>
                  <ViewRightDelivery>
                    <Address>Rua: ABC</Address>
                    <Address>Bairro: Terranova</Address>
                    <Address>CEP: 64004-560{"\t\t\t\t\t"}Nº: 420</Address>
                  </ViewRightDelivery>
                </AddressContent>
                </TouchableOpacity>
                <Button
                  title="Adicionar outro endereço"
                  variant="transparent"
                  onPress={() => {}}
                  style={{ width: "100%" }}
                />
              </AddressInfoContent>  
            )}
          </RatioContent>
        );
      })}
    </Container>
  );
};

export { PaymentOptions };
