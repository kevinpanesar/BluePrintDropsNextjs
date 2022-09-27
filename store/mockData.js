import { months } from "./releaseInfo";

const mockData = [
  {
    images: [
      'https://images.stockx.com/images/adidas-Superturf-Adventure-Sean-Wotherspoon-Jiminy-Cricket.jpg?fit=fill&bg=FFFFFF&w=480&h=320&auto=compress&q=90&dpr=2&trim=color&updated_at=1626336909&pad=0&fm=webp',
      'https://s3.amazonaws.com/solelinks/storage/releaseImages/6100/zz-GY8341-standard-side_lateral_center_view.jpeg',
      'https://s3.amazonaws.com/solelinks/storage/releaseImages/6100/zz-GY8341-standard-front_lateral_top_view.jpeg',
      'https://s3.amazonaws.com/solelinks/storage/releaseImages/6100/zz-GY8341-standard-top_portrait_view.jpeg'
    ],
    _id: '614e7b62c894cd0016c42b98',
    tags: [],
    title: 'Sean Wotherspoon Adventure Jiminy Cricket',
    colorway: 'Mesa / Halo Amber / Glory Purple',
    releaseDate: '25',
    fullReleaseDate: '2021, 09, 25',
    cities: {
      Vancouver: [
        {
          location: 'Granville Champs Sports',
          type: 'First Come First Serve',
          img: 'https://play-lh.googleusercontent.com/u7KXVRTdhHblVNzXtvMslFejGTsTV2mEk52K1d-m1HCDCg1cbB9IxaeVQ6ox691tr_hu',
          Description: 'Lineup in front of store, come early because there will be a line!'
        },
        {
          location: 'Livestock',
          type: 'Online Raffle',
          img: 'https://cdn.shopify.com/s/files/1/0616/3517/files/ls-share.jpg?v=1628710749',
          Description: 'Online Raffle on Instagram.'
        }
      ],
      Burnaby: [
        {
          location: 'Granville Champs Sports',
          type: 'First Come First Serve',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj-J7gpGQkjHYDgOQU9zUjpN8dxDWU2_lWBTM866dQZH-JAlf6qKQh8zlVRnikbfXuXYM&usqp=CAU',
          Description: 'Lineup in front of store, come early because there will be a line!'
        },
        {
          location: 'Livestock',
          type: 'Online Raffle',
          img: 'https://cdn.shopify.com/s/files/1/0616/3517/files/ls-share.jpg?v=1628710749',
          Description: 'Online Raffle on Instagram.'
        }
      ]
    },
    date: '2021, 09, 25',
    mensFlag: true,
    womensFlag: true,
    kidsFlag: false,
    __v: 0,
    clothing: false,
    shoe: true
  },
  {
    images: [
      'https://images.stockx.com/images/Air-Jordan-1-Retro-AJKO-Billie-Eilish-Ghost-Green-W.jpg?fit=fill&bg=FFFFFF&w=480&h=320&auto=compress&q=90&dpr=1&trim=color&updated_at=1631795174&pad=0&fm=webp',
      'https://sneakernews.com/wp-content/uploads/2021/09/billie-eilish-air-jordan-1-ko-DN2857-330-release-date-6.jpg?w=1140',
      'https://sneakernews.com/wp-content/uploads/2021/09/billie-eilish-air-jordan-1-ko-DN2857-330-release-date-10.jpg?w=1140',
      'https://sneakernews.com/wp-content/uploads/2021/09/billie-eilish-air-jordan-1-ko-DN2857-330-release-date-1.jpg?w=1140'
    ],
    _id: '615371ac2fbc200016539c24',
    tags: [],
    title: 'Jordan1 Billie Elish',
    colorway: 'Neon Green',
    releaseDate: '5',
    fullReleaseDate: '2021, 10, 05',
    cities: {
      Vancouver: [
        {
          location: 'Park Royal Nike',
          type: 'Raffle',
          img: 'https://c.static-nike.com/a/images/w_1920,c_limit/mdbgldn6yg1gg88jomci/image.jpg',
          Description: '9am-5pm, 1st floor of Park Royal Mall'
        },
        {
          location: 'Granville Champs Sports',
          type: 'First Come First Serve',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj-J7gpGQkjHYDgOQU9zUjpN8dxDWU2_lWBTM866dQZH-JAlf6qKQh8zlVRnikbfXuXYM&usqp=CAU',
          Description: 'Lineup in front of store, come early because there will be a line!'
        },
        {
          location: 'Livestock',
          type: 'Online Raffle',
          img: 'https://cdn.shopify.com/s/files/1/0616/3517/files/ls-share.jpg?v=1628710749',
          Description: 'Online Raffle on Instagram.'
        }
      ]
    },
    date: '2021, 10, 05',
    mensFlag: false,
    womensFlag: true,
    kidsFlag: true,
    __v: 0,
    shoe: true
  },
  {
    images: [
      'https://images.stockx.com/images/Air-Jordan-4-Retro-Red-Thunder.jpg?fit=fill&bg=FFFFFF&w=480&h=320&auto=compress&q=90&dpr=1&trim=color&updated_at=1629234876&pad=0&fm=webp',
      'https://sneakernews.com/wp-content/uploads/2021/07/jordan-4-red-thunder-CT8527-016-photos-3-1.jpg?w=1140',
      'https://sneakernews.com/wp-content/uploads/2021/07/jordan-4-red-thunder-CT8527-016-photos-2-1.jpg?w=1140',
      'https://sneakernews.com/wp-content/uploads/2021/07/jordan-4-red-thunder-ct8527-016-photos-2.jpg?w=1140'
    ],
    _id: '615372d62fbc200016539c33',
    tags: [],
    title: 'Jordan 4 Retro',
    colorway: 'Red Thunder',
    releaseDate: '6',
    fullReleaseDate: '2021, 10, 06',
    cities: {
      Vancouver: [
        {
          location: 'Park Royal Nike',
          type: 'Raffle',
          img: 'https://c.static-nike.com/a/images/w_1920,c_limit/mdbgldn6yg1gg88jomci/image.jpg',
          Description: '9am-5pm, 1st floor of Park Royal Mall'
        },
        {
          location: 'Granville Champs Sports',
          type: 'First Come First Serve',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj-J7gpGQkjHYDgOQU9zUjpN8dxDWU2_lWBTM866dQZH-JAlf6qKQh8zlVRnikbfXuXYM&usqp=CAU',
          Description: 'Lineup in front of store, come early because there will be a line!'
        },
        {
          location: 'Livestock',
          type: 'Online Raffle',
          img: 'https://cdn.shopify.com/s/files/1/0616/3517/files/ls-share.jpg?v=1628710749',
          Description: 'Online Raffle on Instagram.'
        }
      ],
      Richmond: [
        {
          location: 'Park Royal Nike',
          type: 'Raffle',
          img: 'https://c.static-nike.com/a/images/w_1920,c_limit/mdbgldn6yg1gg88jomci/image.jpg',
          Description: '9am-5pm, 1st floor of Park Royal Mall'
        },
        {
          location: 'Granville Champs Sports',
          type: 'First Come First Serve',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj-J7gpGQkjHYDgOQU9zUjpN8dxDWU2_lWBTM866dQZH-JAlf6qKQh8zlVRnikbfXuXYM&usqp=CAU',
          Description: 'Lineup in front of store, come early because there will be a line!'
        },
        {
          location: 'Livestock',
          type: 'Online Raffle',
          img: 'https://cdn.shopify.com/s/files/1/0616/3517/files/ls-share.jpg?v=1628710749',
          Description: 'Online Raffle on Instagram.'
        }
      ]
    },
    date: '2021, 10, 06',
    mensFlag: false,
    womensFlag: false,
    kidsFlag: false,
    __v: 0,
    shoe: true
  },
  {
    images: [
      'https://images.stockx.com/images/Air-Jordan-1-Mid-Dark-Teal.jpg?fit=fill&bg=FFFFFF&w=480&h=320&auto=compress&q=90&dpr=2&trim=color&updated_at=1626914381&pad=0&fm=webp',
      'https://s3.amazonaws.com/solelinks/storage/releaseImages/6110/554724_411_C_PREM.jfif',
      'https://s3.amazonaws.com/solelinks/storage/releaseImages/6110/554724_411_D_PREM.jfif',
      'https://s3.amazonaws.com/solelinks/storage/releaseImages/6110/554724_411_E_PREM.jfif',
      'https://s3.amazonaws.com/solelinks/storage/releaseImages/6110/554724_411_F_PREM.jfif',
      'https://s3.amazonaws.com/solelinks/storage/releaseImages/6110/554724_411_H_PREM.jfif',
      'https://s3.amazonaws.com/solelinks/storage/releaseImages/6110/554724_411_K_PREM.jfif',
      'https://s3.amazonaws.com/solelinks/storage/releaseImages/6110/554724_411_B_PREM.jfif'
    ],
    _id: '615e1f84ea6c3c0016c7e348',
    title: 'Ai mmlr Jordan 1 Mid \'Dark Teal\'',
    cities: {
      Vancouver: [
        {
          location: 'Park Royal Nike',
          type: 'Raffle',
          img: 'https://c.static-nike.com/a/images/w_1920,c_limit/mdbgldn6yg1gg88jomci/image.jpg',
          Description: '9am-5pm, 1st floor of Park Royal Mall'
        },
        {
          location: 'Granville Champs Sports',
          type: 'First Come First Serve',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj-J7gpGQkjHYDgOQU9zUjpN8dxDWU2_lWBTM866dQZH-JAlf6qKQh8zlVRnikbfXuXYM&usqp=CAU',
          Description: 'Lineup in front of store, come early because there will be a line!'
        },
        {
          location: 'Livestock',
          type: 'Online Raffle',
          img: 'https://cdn.shopify.com/s/files/1/0616/3517/files/ls-share.jpg?v=1628710749',
          Description: 'Online Raffle on Instagram.'
        }
      ],
      Burnaby: [
        {
          location: 'Metrotown Footlocker',
          type: 'Raffle',
          img: 'https://images.squarespace-cdn.com/content/v1/597d0802cf81e04abc442f01/1503920801851-QC7NHSCZQJBYWBIF8QL2/footlocker-logo.jpg?format=500w',
          Description: '9am-5pm, 1st floor of metrotrown'
        },
        {
          location: 'Brentwood Champs Sports',
          type: 'First Come First Serve',
          img: 'https://respect-mag.com/wp-content/uploads/2020/07/gotube.jpg',
          Description: 'Lineup in front of store, come early because there will be a line!'
        }
      ],
      Surrey: [
        {
          location: 'Guildford Footlocker',
          type: 'Raffle',
          img: 'https://images.squarespace-cdn.com/content/v1/597d0802cf81e04abc442f01/1503920801851-QC7NHSCZQJBYWBIF8QL2/footlocker-logo.jpg?format=500w',
          Description: '9am-5pm, 1st floor of Guildford'
        },
        {
          location: 'Guildford Nike',
          type: 'First Come First Serve',
          img: 'https://c.static-nike.com/a/images/w_1920,c_limit/mdbgldn6yg1gg88jomci/image.jpg',
          Description: 'Lineup in front of store, come early because there will be a line!',
          Address: 'Guildford Town Centre 10355 152 St, Surrey, BC V3R 7C1'
        }
      ]
    },
    date: '2021, 10, 27',
    colorway: 'White / Dark Teal / Black',
    styleCode: '554724-411',
    mensFlag: true,
    womensFlag: false,
    kidsFlag: false,
    clothing: false,
    shoe: true,
    OnlineLinks: {
      CanadianLinks: [
        {
          title: 'FootPatrol',
          type: 'Online Raffle',
          img: 'https://c.static-nike.com/a/images/w_1920,c_limit/mdbgldn6yg1gg88jomci/image.jpg',
          link: 'https://www.footpatrol.com/page/launch-page/?awc=5824_1633452687_26a64927fd895ceb63b52eb751b7c2e9&utm_source=affiliate224747&utm_medium=Shopping%20Directory&utm_campaign=http%3A%2F%2Fwww.solelinks.com'
        },
        {
          title: 'FootPatrol',
          type: 'Online Raffle',
          img: 'https://c.static-nike.com/a/images/w_1920,c_limit/mdbgldn6yg1gg88jomci/image.jpg',
          link: 'https://www.footpatrol.com/page/launch-page/?awc=5824_1633452687_26a64927fd895ceb63b52eb751b7c2e9&utm_source=affiliate224747&utm_medium=Shopping%20Directory&utm_campaign=http%3A%2F%2Fwww.solelinks.com'
        }
      ],
      USALinks: [
        {
          title: 'USA FootPatrol',
          type: 'Online Raffle',
          img: 'https://c.static-nike.com/a/images/w_1920,c_limit/mdbgldn6yg1gg88jomci/image.jpg',
          link: 'https://www.footpatrol.com/page/launch-page/?awc=5824_1633452687_26a64927fd895ceb63b52eb751b7c2e9&utm_source=affiliate224747&utm_medium=Shopping%20Directory&utm_campaign=http%3A%2F%2Fwww.solelinks.com'
        },
        {
          title: 'USA FootPatrol',
          type: 'Online Raffle',
          img: 'https://c.static-nike.com/a/images/w_1920,c_limit/mdbgldn6yg1gg88jomci/image.jpg',
          link: 'https://www.footpatrol.com/page/launch-page/?awc=5824_1633452687_26a64927fd895ceb63b52eb751b7c2e9&utm_source=affiliate224747&utm_medium=Shopping%20Directory&utm_campaign=http%3A%2F%2Fwww.solelinks.com'
        }
      ],
      InternationalLinks: [
        {
          title: 'UK FootPatrol',
          type: 'Online Raffle',
          img: 'https://c.static-nike.com/a/images/w_1920,c_limit/mdbgldn6yg1gg88jomci/image.jpg',
          link: 'https://www.footpatrol.com/page/launch-page/?awc=5824_1633452687_26a64927fd895ceb63b52eb751b7c2e9&utm_source=affiliate224747&utm_medium=Shopping%20Directory&utm_campaign=http%3A%2F%2Fwww.solelinks.com'
        },
        {
          title: 'UK FootPatrol',
          type: 'Online Raffle',
          img: 'https://c.static-nike.com/a/images/w_1920,c_limit/mdbgldn6yg1gg88jomci/image.jpg',
          link: 'https://www.footpatrol.com/page/launch-page/?awc=5824_1633452687_26a64927fd895ceb63b52eb751b7c2e9&utm_source=affiliate224747&utm_medium=Shopping%20Directory&utm_campaign=http%3A%2F%2Fwww.solelinks.com'
        }
      ]
    },
    __v: 0
  },
  {
    images: [
      'https://images.stockx.com/images/adidas-Superturf-Adventure-Sean-Wotherspoon-Jiminy-Cricket.jpg?fit=fill&bg=FFFFFF&w=480&h=320&auto=compress&q=90&dpr=2&trim=color&updated_at=1626336909&pad=0&fm=webp',
      'https://s3.amazonaws.com/solelinks/storage/releaseImages/6100/zz-GY8341-standard-side_lateral_center_view.jpeg',
      'https://s3.amazonaws.com/solelinks/storage/releaseImages/6100/zz-GY8341-standard-front_lateral_top_view.jpeg',
      'https://s3.amazonaws.com/solelinks/storage/releaseImages/6100/zz-GY8341-standard-top_portrait_view.jpeg'
    ],
    _id: '631c4baf4bfea21df027a270',
    tags: [],
    title: 'Sean Wotherspoon Adventure Jiminy Cricket',
    colorway: 'Mesa / Halo Amber / Glory Purple',
    releaseDate: '25',
    fullReleaseDate: '2021, 09, 25',
    cities: {
      Vancouver: [
        {
          location: 'Granville Champs Sports',
          type: 'First Come First Serve',
          img: 'https://play-lh.googleusercontent.com/u7KXVRTdhHblVNzXtvMslFejGTsTV2mEk52K1d-m1HCDCg1cbB9IxaeVQ6ox691tr_hu',
          Description: 'Lineup in front of store, come early because there will be a line!'
        },
        {
          location: 'Livestock',
          type: 'Online Raffle',
          img: 'https://cdn.shopify.com/s/files/1/0616/3517/files/ls-share.jpg?v=1628710749',
          Description: 'Online Raffle on Instagram.'
        }
      ],
      Burnaby: [
        {
          location: 'Granville Champs Sports',
          type: 'First Come First Serve',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj-J7gpGQkjHYDgOQU9zUjpN8dxDWU2_lWBTM866dQZH-JAlf6qKQh8zlVRnikbfXuXYM&usqp=CAU',
          Description: 'Lineup in front of store, come early because there will be a line!'
        },
        {
          location: 'Livestock',
          type: 'Online Raffle',
          img: 'https://cdn.shopify.com/s/files/1/0616/3517/files/ls-share.jpg?v=1628710749',
          Description: 'Online Raffle on Instagram.'
        }
      ]
    },
    date: '2021, 09, 25',
    mensFlag: true,
    womensFlag: true,
    kidsFlag: false,
    __v: 0,
    clothing: false,
    shoe: true
  },
  {
    images: [
      'https://images.stockx.com/images/adidas-Superturf-Adventure-Sean-Wotherspoon-Jiminy-Cricket.jpg?fit=fill&bg=FFFFFF&w=480&h=320&auto=compress&q=90&dpr=2&trim=color&updated_at=1626336909&pad=0&fm=webp',
      'https://s3.amazonaws.com/solelinks/storage/releaseImages/6100/zz-GY8341-standard-side_lateral_center_view.jpeg',
      'https://s3.amazonaws.com/solelinks/storage/releaseImages/6100/zz-GY8341-standard-front_lateral_top_view.jpeg',
      'https://s3.amazonaws.com/solelinks/storage/releaseImages/6100/zz-GY8341-standard-top_portrait_view.jpeg'
    ],
    _id: '631c4bb64bfea21df027a271',
    tags: [],
    title: 'Sean Wotherspoon Adventure Jiminy Cricket',
    colorway: 'Mesa / Halo Amber / Glory Purple',
    releaseDate: '25',
    fullReleaseDate: '2021, 09, 25',
    cities: {
      Vancouver: [
        {
          location: 'Granville Champs Sports',
          type: 'First Come First Serve',
          img: 'https://play-lh.googleusercontent.com/u7KXVRTdhHblVNzXtvMslFejGTsTV2mEk52K1d-m1HCDCg1cbB9IxaeVQ6ox691tr_hu',
          Description: 'Lineup in front of store, come early because there will be a line!'
        },
        {
          location: 'Livestock',
          type: 'Online Raffle',
          img: 'https://cdn.shopify.com/s/files/1/0616/3517/files/ls-share.jpg?v=1628710749',
          Description: 'Online Raffle on Instagram.'
        }
      ],
      Burnaby: [
        {
          location: 'Granville Champs Sports',
          type: 'First Come First Serve',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj-J7gpGQkjHYDgOQU9zUjpN8dxDWU2_lWBTM866dQZH-JAlf6qKQh8zlVRnikbfXuXYM&usqp=CAU',
          Description: 'Lineup in front of store, come early because there will be a line!'
        },
        {
          location: 'Livestock',
          type: 'Online Raffle',
          img: 'https://cdn.shopify.com/s/files/1/0616/3517/files/ls-share.jpg?v=1628710749',
          Description: 'Online Raffle on Instagram.'
        }
      ]
    },
    date: '2021, 09, 25',
    mensFlag: true,
    womensFlag: true,
    kidsFlag: false,
    __v: 0,
    clothing: false,
    shoe: true
  },
  {
    images: [
      'https://images.stockx.com/images/adidas-Superturf-Adventure-Sean-Wotherspoon-Jiminy-Cricket.jpg?fit=fill&bg=FFFFFF&w=480&h=320&auto=compress&q=90&dpr=2&trim=color&updated_at=1626336909&pad=0&fm=webp',
      'https://s3.amazonaws.com/solelinks/storage/releaseImages/6100/zz-GY8341-standard-side_lateral_center_view.jpeg',
      'https://s3.amazonaws.com/solelinks/storage/releaseImages/6100/zz-GY8341-standard-front_lateral_top_view.jpeg',
      'https://s3.amazonaws.com/solelinks/storage/releaseImages/6100/zz-GY8341-standard-top_portrait_view.jpeg'
    ],
    _id: '631c4bb94bfea21df027a272',
    tags: [],
    title: 'Sean Wotherspoon Adventure Jiminy Cricket',
    colorway: 'Mesa / Halo Amber / Glory Purple',
    releaseDate: '25',
    fullReleaseDate: '2021, 09, 25',
    cities: {
      Vancouver: [
        {
          location: 'Granville Champs Sports',
          type: 'First Come First Serve',
          img: 'https://play-lh.googleusercontent.com/u7KXVRTdhHblVNzXtvMslFejGTsTV2mEk52K1d-m1HCDCg1cbB9IxaeVQ6ox691tr_hu',
          Description: 'Lineup in front of store, come early because there will be a line!'
        },
        {
          location: 'Livestock',
          type: 'Online Raffle',
          img: 'https://cdn.shopify.com/s/files/1/0616/3517/files/ls-share.jpg?v=1628710749',
          Description: 'Online Raffle on Instagram.'
        }
      ],
      Burnaby: [
        {
          location: 'Granville Champs Sports',
          type: 'First Come First Serve',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj-J7gpGQkjHYDgOQU9zUjpN8dxDWU2_lWBTM866dQZH-JAlf6qKQh8zlVRnikbfXuXYM&usqp=CAU',
          Description: 'Lineup in front of store, come early because there will be a line!'
        },
        {
          location: 'Livestock',
          type: 'Online Raffle',
          img: 'https://cdn.shopify.com/s/files/1/0616/3517/files/ls-share.jpg?v=1628710749',
          Description: 'Online Raffle on Instagram.'
        }
      ]
    },
    date: '2021, 09, 25',
    mensFlag: true,
    womensFlag: true,
    kidsFlag: false,
    __v: 0,
    clothing: false,
    shoe: true
  }
];

export const initialSneakerState = {
  allSneakerInfo: [],
  futureMonths: months,
  pastMonths: months,
  currentSneakerFeedUpcoming: true,
  futureSneakerInfo: [],
  pastSneakerInfo: [],
  pastSneakerInfoAgeOrGender: months,
  futureSneakerInfoAgeOrGender: months,
  status: null,
  searchTerm: "",
  mensWomensKidsFilterValue: "reset",
  upcomingSelected: true,
  pastSelected: false,
};

export const initialClothingState = {
  allClothingInfo: [],
  filteredResults: [],
  cart: [],
  status: null,
  searchTerm: "",
  mensWomensKidsFilterValue: "reset",
};

export const filteredMonthsMockDataPast = {
  January: [],
  Febuary: [],
  March: [],
  April: [],
  May: [],
  June: [],
  July: [],
  August: [],
  September: [
    {
      images: [
        "https://images.stockx.com/images/adidas-Superturf-Adventure-Sean-Wotherspoon-Jiminy-Cricket.jpg?fit=fill&bg=FFFFFF&w=480&h=320&auto=compress&q=90&dpr=2&trim=color&updated_at=1626336909&pad=0&fm=webp",
        "https://s3.amazonaws.com/solelinks/storage/releaseImages/6100/zz-GY8341-standard-side_lateral_center_view.jpeg",
        "https://s3.amazonaws.com/solelinks/storage/releaseImages/6100/zz-GY8341-standard-front_lateral_top_view.jpeg",
        "https://s3.amazonaws.com/solelinks/storage/releaseImages/6100/zz-GY8341-standard-top_portrait_view.jpeg",
      ],
      _id: "614e7b62c894cd0016c42b98",
      tags: [],
      title: "Sean Wotherspoon Adventure Jiminy Cricket",
      colorway: "Mesa / Halo Amber / Glory Purple",
      releaseDate: "25",
      fullReleaseDate: "2021, 09, 25",
      cities: {
        Vancouver: [
          {
            location: "Granville Champs Sports",
            type: "First Come First Serve",
            img: "https://play-lh.googleusercontent.com/u7KXVRTdhHblVNzXtvMslFejGTsTV2mEk52K1d-m1HCDCg1cbB9IxaeVQ6ox691tr_hu",
            Description:
              "Lineup in front of store, come early because there will be a line!",
          },
          {
            location: "Livestock",
            type: "Online Raffle",
            img: "https://cdn.shopify.com/s/files/1/0616/3517/files/ls-share.jpg?v=1628710749",
            Description: "Online Raffle on Instagram.",
          },
        ],
        Burnaby: [
          {
            location: "Granville Champs Sports",
            type: "First Come First Serve",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj-J7gpGQkjHYDgOQU9zUjpN8dxDWU2_lWBTM866dQZH-JAlf6qKQh8zlVRnikbfXuXYM&usqp=CAU",
            Description:
              "Lineup in front of store, come early because there will be a line!",
          },
          {
            location: "Livestock",
            type: "Online Raffle",
            img: "https://cdn.shopify.com/s/files/1/0616/3517/files/ls-share.jpg?v=1628710749",
            Description: "Online Raffle on Instagram.",
          },
        ],
      },
      date: "2021, 09, 25",
      mensFlag: true,
      womensFlag: true,
      kidsFlag: false,
      __v: 0,
      clothing: false,
      shoe: true,
    },
    {
      images: [
        "https://images.stockx.com/images/adidas-Superturf-Adventure-Sean-Wotherspoon-Jiminy-Cricket.jpg?fit=fill&bg=FFFFFF&w=480&h=320&auto=compress&q=90&dpr=2&trim=color&updated_at=1626336909&pad=0&fm=webp",
        "https://s3.amazonaws.com/solelinks/storage/releaseImages/6100/zz-GY8341-standard-side_lateral_center_view.jpeg",
        "https://s3.amazonaws.com/solelinks/storage/releaseImages/6100/zz-GY8341-standard-front_lateral_top_view.jpeg",
        "https://s3.amazonaws.com/solelinks/storage/releaseImages/6100/zz-GY8341-standard-top_portrait_view.jpeg",
      ],
      _id: "631c4baf4bfea21df027a270",
      tags: [],
      title: "Sean Wotherspoon Adventure Jiminy Cricket",
      colorway: "Mesa / Halo Amber / Glory Purple",
      releaseDate: "25",
      fullReleaseDate: "2021, 09, 25",
      cities: {
        Vancouver: [
          {
            location: "Granville Champs Sports",
            type: "First Come First Serve",
            img: "https://play-lh.googleusercontent.com/u7KXVRTdhHblVNzXtvMslFejGTsTV2mEk52K1d-m1HCDCg1cbB9IxaeVQ6ox691tr_hu",
            Description:
              "Lineup in front of store, come early because there will be a line!",
          },
          {
            location: "Livestock",
            type: "Online Raffle",
            img: "https://cdn.shopify.com/s/files/1/0616/3517/files/ls-share.jpg?v=1628710749",
            Description: "Online Raffle on Instagram.",
          },
        ],
        Burnaby: [
          {
            location: "Granville Champs Sports",
            type: "First Come First Serve",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj-J7gpGQkjHYDgOQU9zUjpN8dxDWU2_lWBTM866dQZH-JAlf6qKQh8zlVRnikbfXuXYM&usqp=CAU",
            Description:
              "Lineup in front of store, come early because there will be a line!",
          },
          {
            location: "Livestock",
            type: "Online Raffle",
            img: "https://cdn.shopify.com/s/files/1/0616/3517/files/ls-share.jpg?v=1628710749",
            Description: "Online Raffle on Instagram.",
          },
        ],
      },
      date: "2021, 09, 25",
      mensFlag: true,
      womensFlag: true,
      kidsFlag: false,
      __v: 0,
      clothing: false,
      shoe: true,
    },
    {
      images: [
        "https://images.stockx.com/images/adidas-Superturf-Adventure-Sean-Wotherspoon-Jiminy-Cricket.jpg?fit=fill&bg=FFFFFF&w=480&h=320&auto=compress&q=90&dpr=2&trim=color&updated_at=1626336909&pad=0&fm=webp",
        "https://s3.amazonaws.com/solelinks/storage/releaseImages/6100/zz-GY8341-standard-side_lateral_center_view.jpeg",
        "https://s3.amazonaws.com/solelinks/storage/releaseImages/6100/zz-GY8341-standard-front_lateral_top_view.jpeg",
        "https://s3.amazonaws.com/solelinks/storage/releaseImages/6100/zz-GY8341-standard-top_portrait_view.jpeg",
      ],
      _id: "631c4bb64bfea21df027a271",
      tags: [],
      title: "Sean Wotherspoon Adventure Jiminy Cricket",
      colorway: "Mesa / Halo Amber / Glory Purple",
      releaseDate: "25",
      fullReleaseDate: "2021, 09, 25",
      cities: {
        Vancouver: [
          {
            location: "Granville Champs Sports",
            type: "First Come First Serve",
            img: "https://play-lh.googleusercontent.com/u7KXVRTdhHblVNzXtvMslFejGTsTV2mEk52K1d-m1HCDCg1cbB9IxaeVQ6ox691tr_hu",
            Description:
              "Lineup in front of store, come early because there will be a line!",
          },
          {
            location: "Livestock",
            type: "Online Raffle",
            img: "https://cdn.shopify.com/s/files/1/0616/3517/files/ls-share.jpg?v=1628710749",
            Description: "Online Raffle on Instagram.",
          },
        ],
        Burnaby: [
          {
            location: "Granville Champs Sports",
            type: "First Come First Serve",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj-J7gpGQkjHYDgOQU9zUjpN8dxDWU2_lWBTM866dQZH-JAlf6qKQh8zlVRnikbfXuXYM&usqp=CAU",
            Description:
              "Lineup in front of store, come early because there will be a line!",
          },
          {
            location: "Livestock",
            type: "Online Raffle",
            img: "https://cdn.shopify.com/s/files/1/0616/3517/files/ls-share.jpg?v=1628710749",
            Description: "Online Raffle on Instagram.",
          },
        ],
      },
      date: "2021, 09, 25",
      mensFlag: true,
      womensFlag: true,
      kidsFlag: false,
      __v: 0,
      clothing: false,
      shoe: true,
    },
    {
      images: [
        "https://images.stockx.com/images/adidas-Superturf-Adventure-Sean-Wotherspoon-Jiminy-Cricket.jpg?fit=fill&bg=FFFFFF&w=480&h=320&auto=compress&q=90&dpr=2&trim=color&updated_at=1626336909&pad=0&fm=webp",
        "https://s3.amazonaws.com/solelinks/storage/releaseImages/6100/zz-GY8341-standard-side_lateral_center_view.jpeg",
        "https://s3.amazonaws.com/solelinks/storage/releaseImages/6100/zz-GY8341-standard-front_lateral_top_view.jpeg",
        "https://s3.amazonaws.com/solelinks/storage/releaseImages/6100/zz-GY8341-standard-top_portrait_view.jpeg",
      ],
      _id: "631c4bb94bfea21df027a272",
      tags: [],
      title: "Sean Wotherspoon Adventure Jiminy Cricket",
      colorway: "Mesa / Halo Amber / Glory Purple",
      releaseDate: "25",
      fullReleaseDate: "2021, 09, 25",
      cities: {
        Vancouver: [
          {
            location: "Granville Champs Sports",
            type: "First Come First Serve",
            img: "https://play-lh.googleusercontent.com/u7KXVRTdhHblVNzXtvMslFejGTsTV2mEk52K1d-m1HCDCg1cbB9IxaeVQ6ox691tr_hu",
            Description:
              "Lineup in front of store, come early because there will be a line!",
          },
          {
            location: "Livestock",
            type: "Online Raffle",
            img: "https://cdn.shopify.com/s/files/1/0616/3517/files/ls-share.jpg?v=1628710749",
            Description: "Online Raffle on Instagram.",
          },
        ],
        Burnaby: [
          {
            location: "Granville Champs Sports",
            type: "First Come First Serve",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj-J7gpGQkjHYDgOQU9zUjpN8dxDWU2_lWBTM866dQZH-JAlf6qKQh8zlVRnikbfXuXYM&usqp=CAU",
            Description:
              "Lineup in front of store, come early because there will be a line!",
          },
          {
            location: "Livestock",
            type: "Online Raffle",
            img: "https://cdn.shopify.com/s/files/1/0616/3517/files/ls-share.jpg?v=1628710749",
            Description: "Online Raffle on Instagram.",
          },
        ],
      },
      date: "2021, 09, 25",
      mensFlag: true,
      womensFlag: true,
      kidsFlag: false,
      __v: 0,
      clothing: false,
      shoe: true,
    },
  ],
  October: [
    {
      images: [
        "https://images.stockx.com/images/Air-Jordan-1-Retro-AJKO-Billie-Eilish-Ghost-Green-W.jpg?fit=fill&bg=FFFFFF&w=480&h=320&auto=compress&q=90&dpr=1&trim=color&updated_at=1631795174&pad=0&fm=webp",
        "https://sneakernews.com/wp-content/uploads/2021/09/billie-eilish-air-jordan-1-ko-DN2857-330-release-date-6.jpg?w=1140",
        "https://sneakernews.com/wp-content/uploads/2021/09/billie-eilish-air-jordan-1-ko-DN2857-330-release-date-10.jpg?w=1140",
        "https://sneakernews.com/wp-content/uploads/2021/09/billie-eilish-air-jordan-1-ko-DN2857-330-release-date-1.jpg?w=1140",
      ],
      _id: "615371ac2fbc200016539c24",
      tags: [],
      title: "Jordan1 Billie Elish",
      colorway: "Neon Green",
      releaseDate: "5",
      fullReleaseDate: "2021, 10, 05",
      cities: {
        Vancouver: [
          {
            location: "Park Royal Nike",
            type: "Raffle",
            img: "https://c.static-nike.com/a/images/w_1920,c_limit/mdbgldn6yg1gg88jomci/image.jpg",
            Description: "9am-5pm, 1st floor of Park Royal Mall",
          },
          {
            location: "Granville Champs Sports",
            type: "First Come First Serve",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj-J7gpGQkjHYDgOQU9zUjpN8dxDWU2_lWBTM866dQZH-JAlf6qKQh8zlVRnikbfXuXYM&usqp=CAU",
            Description:
              "Lineup in front of store, come early because there will be a line!",
          },
          {
            location: "Livestock",
            type: "Online Raffle",
            img: "https://cdn.shopify.com/s/files/1/0616/3517/files/ls-share.jpg?v=1628710749",
            Description: "Online Raffle on Instagram.",
          },
        ],
      },
      date: "2021, 10, 05",
      mensFlag: false,
      womensFlag: true,
      kidsFlag: true,
      __v: 0,
      shoe: true,
    },
    {
      images: [
        "https://images.stockx.com/images/Air-Jordan-4-Retro-Red-Thunder.jpg?fit=fill&bg=FFFFFF&w=480&h=320&auto=compress&q=90&dpr=1&trim=color&updated_at=1629234876&pad=0&fm=webp",
        "https://sneakernews.com/wp-content/uploads/2021/07/jordan-4-red-thunder-CT8527-016-photos-3-1.jpg?w=1140",
        "https://sneakernews.com/wp-content/uploads/2021/07/jordan-4-red-thunder-CT8527-016-photos-2-1.jpg?w=1140",
        "https://sneakernews.com/wp-content/uploads/2021/07/jordan-4-red-thunder-ct8527-016-photos-2.jpg?w=1140",
      ],
      _id: "615372d62fbc200016539c33",
      tags: [],
      title: "Jordan 4 Retro",
      colorway: "Red Thunder",
      releaseDate: "6",
      fullReleaseDate: "2021, 10, 06",
      cities: {
        Vancouver: [
          {
            location: "Park Royal Nike",
            type: "Raffle",
            img: "https://c.static-nike.com/a/images/w_1920,c_limit/mdbgldn6yg1gg88jomci/image.jpg",
            Description: "9am-5pm, 1st floor of Park Royal Mall",
          },
          {
            location: "Granville Champs Sports",
            type: "First Come First Serve",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj-J7gpGQkjHYDgOQU9zUjpN8dxDWU2_lWBTM866dQZH-JAlf6qKQh8zlVRnikbfXuXYM&usqp=CAU",
            Description:
              "Lineup in front of store, come early because there will be a line!",
          },
          {
            location: "Livestock",
            type: "Online Raffle",
            img: "https://cdn.shopify.com/s/files/1/0616/3517/files/ls-share.jpg?v=1628710749",
            Description: "Online Raffle on Instagram.",
          },
        ],
        Richmond: [
          {
            location: "Park Royal Nike",
            type: "Raffle",
            img: "https://c.static-nike.com/a/images/w_1920,c_limit/mdbgldn6yg1gg88jomci/image.jpg",
            Description: "9am-5pm, 1st floor of Park Royal Mall",
          },
          {
            location: "Granville Champs Sports",
            type: "First Come First Serve",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj-J7gpGQkjHYDgOQU9zUjpN8dxDWU2_lWBTM866dQZH-JAlf6qKQh8zlVRnikbfXuXYM&usqp=CAU",
            Description:
              "Lineup in front of store, come early because there will be a line!",
          },
          {
            location: "Livestock",
            type: "Online Raffle",
            img: "https://cdn.shopify.com/s/files/1/0616/3517/files/ls-share.jpg?v=1628710749",
            Description: "Online Raffle on Instagram.",
          },
        ],
      },
      date: "2021, 10, 06",
      mensFlag: false,
      womensFlag: false,
      kidsFlag: false,
      __v: 0,
      shoe: true,
    },
    {
      images: [
        "https://images.stockx.com/images/Air-Jordan-1-Mid-Dark-Teal.jpg?fit=fill&bg=FFFFFF&w=480&h=320&auto=compress&q=90&dpr=2&trim=color&updated_at=1626914381&pad=0&fm=webp",
        "https://s3.amazonaws.com/solelinks/storage/releaseImages/6110/554724_411_C_PREM.jfif",
        "https://s3.amazonaws.com/solelinks/storage/releaseImages/6110/554724_411_D_PREM.jfif",
        "https://s3.amazonaws.com/solelinks/storage/releaseImages/6110/554724_411_E_PREM.jfif",
        "https://s3.amazonaws.com/solelinks/storage/releaseImages/6110/554724_411_F_PREM.jfif",
        "https://s3.amazonaws.com/solelinks/storage/releaseImages/6110/554724_411_H_PREM.jfif",
        "https://s3.amazonaws.com/solelinks/storage/releaseImages/6110/554724_411_K_PREM.jfif",
        "https://s3.amazonaws.com/solelinks/storage/releaseImages/6110/554724_411_B_PREM.jfif",
      ],
      _id: "615e1f84ea6c3c0016c7e348",
      title: "Ai mmlr Jordan 1 Mid 'Dark Teal'",
      cities: {
        Vancouver: [
          {
            location: "Park Royal Nike",
            type: "Raffle",
            img: "https://c.static-nike.com/a/images/w_1920,c_limit/mdbgldn6yg1gg88jomci/image.jpg",
            Description: "9am-5pm, 1st floor of Park Royal Mall",
          },
          {
            location: "Granville Champs Sports",
            type: "First Come First Serve",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj-J7gpGQkjHYDgOQU9zUjpN8dxDWU2_lWBTM866dQZH-JAlf6qKQh8zlVRnikbfXuXYM&usqp=CAU",
            Description:
              "Lineup in front of store, come early because there will be a line!",
          },
          {
            location: "Livestock",
            type: "Online Raffle",
            img: "https://cdn.shopify.com/s/files/1/0616/3517/files/ls-share.jpg?v=1628710749",
            Description: "Online Raffle on Instagram.",
          },
        ],
        Burnaby: [
          {
            location: "Metrotown Footlocker",
            type: "Raffle",
            img: "https://images.squarespace-cdn.com/content/v1/597d0802cf81e04abc442f01/1503920801851-QC7NHSCZQJBYWBIF8QL2/footlocker-logo.jpg?format=500w",
            Description: "9am-5pm, 1st floor of metrotrown",
          },
          {
            location: "Brentwood Champs Sports",
            type: "First Come First Serve",
            img: "https://respect-mag.com/wp-content/uploads/2020/07/gotube.jpg",
            Description:
              "Lineup in front of store, come early because there will be a line!",
          },
        ],
        Surrey: [
          {
            location: "Guildford Footlocker",
            type: "Raffle",
            img: "https://images.squarespace-cdn.com/content/v1/597d0802cf81e04abc442f01/1503920801851-QC7NHSCZQJBYWBIF8QL2/footlocker-logo.jpg?format=500w",
            Description: "9am-5pm, 1st floor of Guildford",
          },
          {
            location: "Guildford Nike",
            type: "First Come First Serve",
            img: "https://c.static-nike.com/a/images/w_1920,c_limit/mdbgldn6yg1gg88jomci/image.jpg",
            Description:
              "Lineup in front of store, come early because there will be a line!",
            Address: "Guildford Town Centre 10355 152 St, Surrey, BC V3R 7C1",
          },
        ],
      },
      date: "2021, 10, 27",
      colorway: "White / Dark Teal / Black",
      styleCode: "554724-411",
      mensFlag: true,
      womensFlag: false,
      kidsFlag: false,
      clothing: false,
      shoe: true,
      OnlineLinks: {
        CanadianLinks: [
          {
            title: "FootPatrol",
            type: "Online Raffle",
            img: "https://c.static-nike.com/a/images/w_1920,c_limit/mdbgldn6yg1gg88jomci/image.jpg",
            link: "https://www.footpatrol.com/page/launch-page/?awc=5824_1633452687_26a64927fd895ceb63b52eb751b7c2e9&utm_source=affiliate224747&utm_medium=Shopping%20Directory&utm_campaign=http%3A%2F%2Fwww.solelinks.com",
          },
          {
            title: "FootPatrol",
            type: "Online Raffle",
            img: "https://c.static-nike.com/a/images/w_1920,c_limit/mdbgldn6yg1gg88jomci/image.jpg",
            link: "https://www.footpatrol.com/page/launch-page/?awc=5824_1633452687_26a64927fd895ceb63b52eb751b7c2e9&utm_source=affiliate224747&utm_medium=Shopping%20Directory&utm_campaign=http%3A%2F%2Fwww.solelinks.com",
          },
        ],
        USALinks: [
          {
            title: "USA FootPatrol",
            type: "Online Raffle",
            img: "https://c.static-nike.com/a/images/w_1920,c_limit/mdbgldn6yg1gg88jomci/image.jpg",
            link: "https://www.footpatrol.com/page/launch-page/?awc=5824_1633452687_26a64927fd895ceb63b52eb751b7c2e9&utm_source=affiliate224747&utm_medium=Shopping%20Directory&utm_campaign=http%3A%2F%2Fwww.solelinks.com",
          },
          {
            title: "USA FootPatrol",
            type: "Online Raffle",
            img: "https://c.static-nike.com/a/images/w_1920,c_limit/mdbgldn6yg1gg88jomci/image.jpg",
            link: "https://www.footpatrol.com/page/launch-page/?awc=5824_1633452687_26a64927fd895ceb63b52eb751b7c2e9&utm_source=affiliate224747&utm_medium=Shopping%20Directory&utm_campaign=http%3A%2F%2Fwww.solelinks.com",
          },
        ],
        InternationalLinks: [
          {
            title: "UK FootPatrol",
            type: "Online Raffle",
            img: "https://c.static-nike.com/a/images/w_1920,c_limit/mdbgldn6yg1gg88jomci/image.jpg",
            link: "https://www.footpatrol.com/page/launch-page/?awc=5824_1633452687_26a64927fd895ceb63b52eb751b7c2e9&utm_source=affiliate224747&utm_medium=Shopping%20Directory&utm_campaign=http%3A%2F%2Fwww.solelinks.com",
          },
          {
            title: "UK FootPatrol",
            type: "Online Raffle",
            img: "https://c.static-nike.com/a/images/w_1920,c_limit/mdbgldn6yg1gg88jomci/image.jpg",
            link: "https://www.footpatrol.com/page/launch-page/?awc=5824_1633452687_26a64927fd895ceb63b52eb751b7c2e9&utm_source=affiliate224747&utm_medium=Shopping%20Directory&utm_campaign=http%3A%2F%2Fwww.solelinks.com",
          },
        ],
      },
      __v: 0,
    },
  ],
  November: [],
  December: [],
};

export default mockData;
