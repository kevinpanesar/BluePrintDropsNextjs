export const initialClothingState = {
    allClothingInfo: [],
    filteredResults: [],
    cart: [],
    status: null,
    searchTerm: "",
    mensWomensKidsFilterValue: "reset",
  }

export const clothingMockData = [
    {
      images: [
        'https://images.stockx.com/images/Air-Jordan-13-Retro-University-Blue.jpg?fit=fill&bg=FFFFFF&w=480&h=320&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1661882252&q=75&fm=webp',
        'https://images.stockx.com/images/Yeezy-x-GAP-Hoodie-Black.jpg?fit=fill&bg=FFFFFF&w=480&h=320&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1626336909&pad=0&fm=webp'
      ],
      _id: '630eb8b4feab41001660b94f',
      title: 'Yeezy Gap Hoodie',
      colorway: 'Black',
      mensFlag: false,
      womensFlag: true,
      kidsFlag: true,
      clothing: true,
      shoe: false,
      price: 127.34,
      qty: -19,
      availableSizeQty: {
        '1.0': 0,
        '2.0': 0,
        '3.0': 0
      },
      __v: 0,
      skuNumber: 'test1234'
    },
    {
      images: [
        'https://images.stockx.com/360/Nike-Air-Fear-Of-God-Raid-Light-Bone/Images/Nike-Air-Fear-Of-God-Raid-Light-Bone/Lv2/img01.jpg?fm=avif&auto=compress&w=480&dpr=2&updated_at=1635270975&h=320&q=75&fm=webp',
        'https://images.stockx.com/360/Nike-Air-Fear-Of-God-Raid-Light-Bone/Images/Nike-Air-Fear-Of-God-Raid-Light-Bone/Lv2/img06.jpg?fm=avif&auto=compress&w=480&dpr=2&updated_at=1635270975&h=320&q=75&fm=webp',
        'https://images.stockx.com/360/Nike-Air-Fear-Of-God-Raid-Light-Bone/Images/Nike-Air-Fear-Of-God-Raid-Light-Bone/Lv2/img11.jpg?fm=avif&auto=compress&w=480&dpr=2&updated_at=1635270975&h=320&q=75&fm=webp',
        'https://images.stockx.com/360/Nike-Air-Fear-Of-God-Raid-Light-Bone/Images/Nike-Air-Fear-Of-God-Raid-Light-Bone/Lv2/img15.jpg?fm=avif&auto=compress&w=480&dpr=2&updated_at=1635270975&h=320&q=75&fm=webp',
        'https://images.stockx.com/360/Nike-Air-Fear-Of-God-Raid-Light-Bone/Images/Nike-Air-Fear-Of-God-Raid-Light-Bone/Lv2/img23.jpg?fm=avif&auto=compress&w=480&dpr=2&updated_at=1635270975&h=320&q=75&fm=webp'
      ],
      _id: '6318d4edb60151c1cf4bb7f5',
      title: 'Nike Air Fear of God Raid',
      colorway: 'Light Bone',
      mensFlag: false,
      womensFlag: true,
      kidsFlag: true,
      clothing: false,
      shoe: true,
      price: 463,
      qty: 8,
      availableSizeQty: {
        '8.5': 0,
        '9.0': 2,
        '9.5': 2,
        '10.0': 0,
        '10.5': 0,
        '11.0': 1,
        '11.5': 0
      },
      __v: 0,
      skuNumber: 'bpd1'
    },
    {
      images: [
        'https://images.stockx.com/360/adidas-Yeezy-Boost-350-Low-V2-Beluga/Images/adidas-Yeezy-Boost-350-Low-V2-Beluga/Lv2/img01.jpg?fm=avif&auto=compress&w=480&dpr=2&updated_at=1635280707&h=320&q=75&fm=webp',
        'https://images.stockx.com/images/Yeezy-x-GAP-Hoodie-Black.jpg?fit=fill&bg=FFFFFF&w=480&h=320&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1632921114&q=80&fm=webp'
      ],
      _id: '6319874d82b75beca3c41ddd',
      title: 'Yeezy Gap Hoodie',
      colorway: 'Black',
      mensFlag: false,
      womensFlag: true,
      kidsFlag: true,
      clothing: true,
      shoe: false,
      price: 127.34,
      qty: -11,
      availableSizeQty: {
        '1.0': 10,
        '2.0': 2,
        '3.0': null
      },
      __v: 0,
      skuNumber: 'test1234t'
    },
    {
      images: [
        'https://images.stockx.com/images/Yeezy-x-GAP-Hoodie-Black.jpg?fit=fill&bg=FFFFFF&w=480&h=320&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1632921114&q=80https://images.stockx.com/images/Air-Jordan-13-Retro-University-Blue.jpg?fit=fill&bg=FFFFFF&w=480&h=320&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1661882252&q=75&fm=webp',
        'https://images.stockx.com/images/Yeezy-x-GAP-Hoodie-Black.jpg?fit=fill&bg=FFFFFF&w=480&h=320&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1632921114&q=80https://images.stockx.com/images/Air-Jordan-13-Retro-University-Blue.jpg?fit=fill&bg=FFFFFF&w=480&h=320&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1661882252&q=75&fm=webp'
      ],
      _id: '6319875982b75beca3c41ddf',
      title: 'Yeezy Gap Hoodie',
      colorway: 'Black',
      mensFlag: false,
      womensFlag: true,
      kidsFlag: true,
      clothing: true,
      shoe: false,
      price: 127.34,
      qty: -19,
      availableSizeQty: {
        '1.0': 0,
        '2.0': 0,
        '3.0': 0
      },
      __v: 0,
      skuNumber: 'teffffst1234'
    },
    {
      images: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/299b8737-eb8e-42c2-a20a-a1388cea0d39/waffle-one-shoes-nBBzCQ.png',
        'https://images.stockx.com/images/Yeezy-x-GAP-Hoodie-Black.jpg?fit=fill&bg=FFFFFF&w=480&h=320&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1632921114&q=80'
      ],
      _id: '6319876382b75beca3c41de1',
      title: 'Yeezy Gap Hoodie',
      colorway: 'Black',
      mensFlag: false,
      womensFlag: true,
      kidsFlag: true,
      clothing: true,
      shoe: false,
      price: 127.34,
      qty: -19,
      availableSizeQty: {
        '1.0': 0,
        '2.0': 0,
        '3.0': 0
      },
      __v: 0,
      skuNumber: 'test12fgdfgdgdgfd34'
    }
  ]