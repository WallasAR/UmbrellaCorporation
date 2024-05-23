export interface productData {
  id: number,
  title: string,
  imageSource: string,
  price: number,
  starRating: string,
  amountRating: string,
  stockAmount: number
};

async function getProductFromDB(): Promise<productData[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title:"Dipirona monoidratada 500Mg/mL",
          imageSource:"https://www.farmace.com.br/images/2019/05/18/dip-monoid-500mg,mL.png",
          price:15.30,
          starRating:"4.6",
          amountRating:"600",
          stockAmount: 56
          },
          {
          id: 2,
          title:"Cloridrato de ambroxol 100mL",
          imageSource:"https://www.farmace.com.br/images/2019/05/18/clorid-ambroxol-3mg,mL.png",
          price:10.14,
          starRating:"4.6",
          amountRating:"121",
          stockAmount: 78
          },
          {
          id: 3,
          title:"Dexametasona elixir 120mL",
          imageSource:"https://www.farmace.com.br/images/2023/05/08/dexam-elixir-01mgml.png",
          price:8.50,
          starRating:"4.6",
          amountRating:"819",
          stockAmount: 159
          },
          {id: 4,
          title:"Paracetamol 15mL",
          imageSource:"https://www.farmace.com.br/images/2019/05/18/paracetamol-200mg,mL.png",
          price:5.23,
          starRating:"4.1",
          amountRating:"32",
          stockAmount: 238
          },
          {
          id: 5,
          title:"Maleato de dexclorfeniramina 100mL",
          imageSource:"https://www.farmace.com.br/images/2019/05/18/maleato-dexclor-0,4mg,mL.png",
          price:30.75,
          starRating:"3.9",
          amountRating:"77",
          stockAmount: 682
          }
      ])
    }, 3000)
  })
};

export interface ratingData {
  id: number, 
  url: string, 
  username: string, 
  description: string, 
  starAmount: number 
}

async function getRatingFromDB(): Promise<ratingData[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { 
          id: 1, 
          url: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png", 
          username: "Wallas Aguiar", 
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aspernatur.", 
          starAmount: 3 
        },
      
        { 
          id: 2, 
          url: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png", 
          username: "Adalberto Silva", 
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aspernatur.", 
          starAmount: 5 
        },
      
        { 
          id: 3, 
          url: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png", 
          username: "Igor Barradas", 
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aspernatur.", 
          starAmount: 2
        },
      
        {
          id: 4, 
          url: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png", 
          username: "Luis Felipe", 
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aspernatur.", 
          starAmount: 4 
        },
      
        {
          id: 5, 
          url: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png", 
          username: "Antônio", 
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aspernatur.", 
          starAmount: 3 
        }
      ])
    }, 3000)
  })
};

export const getProduct = { getProductFromDB };
export const getInfoRating = { getRatingFromDB };