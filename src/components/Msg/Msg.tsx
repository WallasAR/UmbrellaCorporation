import React from "react";
import { useTheme } from "styled-components"
import { BlurView } from "@react-native-community/blur";

import { Input } from "../Input/Input";
import { Button } from "../../components/Buttons/Button";

import { Container, AlertContent, ModalContainer, Header, Description, ViewButton, HeaderContent, styles } from "./styles";

interface MsgProps {
  header: string;
  isActive: boolean;
  showPass?: boolean;
  buttonLeft?: string;
  description: string;
  buttonRight?: string;
  toggleModal: () => void;
  showMoreButtons?: boolean;
  onPressLeft?: () => void;
  onPressRight?: () => void;
};

const Msg: React.FC<MsgProps> = ({isActive, toggleModal, header, description, buttonLeft, buttonRight, showPass, showMoreButtons, onPressLeft, onPressRight }) => {
  const { COLORS } = useTheme();

  return (
    
      <ModalContainer
        transparent
        visible={isActive}
        animationType="fade"
        statusBarTranslucent
        onRequestClose={toggleModal}
      >
        <BlurView
          blurAmount={10}
          style={styles.blur}
        />
        <Container>
          <AlertContent>
            <HeaderContent>
              <Header>{header}</Header>
            </HeaderContent>
            <Description>{description}</Description>

            {showPass && (
              <Input
                leftIcon 
                rightIcon
                iconSize={32}
                secureTextEntry
                autoCorrect={false}
                placeholder="Senha"          
                autoCapitalize="none"
                keyboardType="default"
                iconName="key-outline"
                iconColor={COLORS.GRAY4}   
              />
            )}
            <ViewButton>
              {showMoreButtons ? (
                <>
                  <Button
                      title={buttonLeft}
                      variant="transparent"
                      onPress={onPressLeft || (() => {})}
                  />
                  <Button
                    title={buttonRight}
                    variant="transparent"
                    onPress={onPressRight || (() => {})}
                  />
                </>
              ) : (
                <Button
                title="Ok"
                variant="transparent"
                onPress={toggleModal || (() => {})}
              />
              )}
            </ViewButton>
          </AlertContent>
        </Container>
      </ModalContainer>
  )
};

export { Msg };