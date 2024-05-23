import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, ToastAndroid, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Resume} from '../../../components/Resume/Resume';
import {Button} from '../../../components/Buttons/Button';
import {ShopCard} from '../../../components/Card/Shop/ShopCard';

import {productData, getProduct} from '../../../services/ProductService';

import {
  Container,
  Header,
  Title,
  Main,
  Footer,
  PurchaseResume,
  Description,
  DescriptionContent,
} from './styles';
const Cart: React.FC = () => {
  const navigation = useNavigation();

  const [count, setCount] = useState<number>(0);
  const [product, setProduct] = useState<productData[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  // get data from load DB by id
  async function getDataFromDB() {
    let items: any = await AsyncStorage.getItem("cartData");
    items = JSON.parse(items);

    let productData: productData[] = [];

    let products = await getProduct.getProductFromDB();

    if (items) {
      products.forEach(data => {
        if (items.includes(data.id)) {
          productData.push(data);
          return;
        }
      });

      setProduct(productData);
      getTotal(productData);
      setCount(productData.length);
    } else {
      setProduct([]);
      getTotal([]);
      setCount(0);
    }
  }

  const getTotal = (productData: productData[]) => {
    let total = 0;

    for (let index = 0; index < productData.length; index++) {
      let productPrice = productData[index].price;
      total += productPrice;
    }
    setTotal(total);
  };

  // Remove selected item from cart
  async function removeItemFromCart(id: number) {
    let itemArray: any = await AsyncStorage.getItem("cartData");
    itemArray = JSON.parse(itemArray);

    if (itemArray){
      let array = itemArray;
      let totalCount = count;
      for (let index = 0; index < array.length; index++){
        if (array[index] === id){
          array.splice(index, 1); 
        };

        await AsyncStorage.setItem("cartData", JSON.stringify(array));
        getDataFromDB();
      }
    }
  };

  const handleToPayment = () => {
    navigation.navigate('PaymentMethod');
  };

  return (
    <SafeAreaView>
      <Container>
        <ScrollView>
          <Header>
            <Title>Carrinho</Title>
          </Header>

          <Main>
            {product.length > 0 ? (
              product.map((item, key) => {
                return (
                  <ShopCard
                  key={key}
                  title={item.title}
                  imageSource={item.imageSource}
                  price={item.price.toFixed(2).replace('.', ',')}
                  onPressItemRemove={() => removeItemFromCart(item.id)}
                  onPress={() => navigation.navigate("ProductDetail", {productID: item.id})}
                  />
                );
              })
            ) : (
              <DescriptionContent>
                <Description>Carrinho vazio</Description>
              </DescriptionContent>
            )}
          </Main>
        </ScrollView>
        <Footer>
          <PurchaseResume>
            <Resume total={total.toFixed(2).replace('.', ',')} items={count} />
            {product.length === 0 ? (
              <Button
                disabled
                title="Comprar"
                variant="purchase"
                onPress={() =>
                  ToastAndroid.show('Carrinho vazio', ToastAndroid.SHORT)
                }
              />
            ) : (
              <Button
                title="Comprar"
                variant="purchase"
                onPress={handleToPayment}
              />
            )}
          </PurchaseResume>
        </Footer>
      </Container>
    </SafeAreaView>
  );
};

export {Cart};
