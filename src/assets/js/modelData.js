import { BgModelsGelora, BgModelsGloraE, BgModelsGlori, BgModelsGlory560, BgModelsSeres, BgModelsSupercab, BgServices, CardGelora, CardGlori, CardSeresE1, CardSuperCab, cardGeloraE, catGelora, catGlory560, catGloryiauto, catSeres, catSupercab, detailSeres1, detailSeres2, detailgelora1, detailgelora2, detailgelora3, detailgelora4, detailgeloraE1, detailglory5601, detailglory5602, detailgloryiauto1, detailgloryiauto2, detailsupercab1, detailsupercab2, detailsupercab3, detailsupercab4, extGelora1, extGelora2, extGelora3, extGelora4, extGelora5, extGelora6, extGeloraE1, extGeloraE2, extGeloraE3, extGeloraE4, extGeloraE5, extGeloraE6, extGlory5601, extGlory5602, extGlory5603, extGlory5604, extGlory5605, extGloryIAuto1, extGloryIAuto2, extGloryIAuto3, extGloryIAuto4, extGloryIAuto5, extSupercab1, extSupercab2, extSupercab3, extSupercab4, extsereses1, extsereses2, extsereses3, extsereses4, extsereses5, geloraColorWhite, geloraEColorWhite, gloriColorBlack, gloriColorRed, gloriColorWhite, glory560Black, glory560Red, glory560Silver, glory560White, intGelora1, intGelora2, intGelora3, intGelora4, intGeloraE1, intGeloraE2, intGeloraE3, intGeloraE4, intGeloraE5, intGlory5601, intGlory5602, intGlory5603, intGlory5604, intGloryiauto1, intGloryiauto2, intGloryiauto3, intGloryiauto4, intSuperCab1, intSuperCab2, intSuperCab3, intSuperCab4, seresColorBlue, seresColorGreen, seresColorRose, seresColorWhite, seresE1Interior1, seresE1Interior2, seresE1Interior3, seresE1Interior4, supercabColorBlack, supercabColorWhite } from "../Image/ImportImage";

export const modelData = [
    {
      id: "seres",
      label: "Seres",
      items: [
        {
          to: '/model/details/seres-e1',
          imgSrc: CardSeresE1,
          alt: "Seres E1",
          caption: "SERES E1"
        }
      ]
    },
    {
      id: "dfsk",
      label: "DFSK",
      items: [
        {
          to: '/model/details/gelora',
          imgSrc: CardGelora,
          alt: "DFSK Gelora",
          caption: "GELORA"
        },
        {
          to: '/model/details/gelora-e',
          imgSrc: cardGeloraE,
          alt: "DFSK Gelora E",
          caption: "GELORA E"
        },
        {
          to: '/model/details/glory-i-auto',
          imgSrc: CardGlori,
          alt: "DFSK Glory i Auto",
          caption: "Glory i Auto"
        },
        {
          to: '/model/details/glory-560',
          imgSrc: glory560Silver,
          alt: "DFSK Glory 560",
          caption: "Glory 560"
        },
        {
          to: '/model/details/super-cab',
          imgSrc: CardSuperCab,
          alt: "DFSK Super Cab",
          caption: "Super Cab"
        }
      ]
    }
  ];
export const carsData = {
  "seres-e1": {
    srcImg: BgModelsSeres,
    titleCars: "Seres E1",
     GalleryImages: [
      intGloryiauto1,
      intGloryiauto2,
      intGloryiauto3,
      intGloryiauto4,
    ],
    catalog: catSeres,
  },
  "gelora": {
    srcImg: BgModelsGelora,
    titleCars: "Gelora",
    imgSrcInterior11: intGelora1,
    imgSrcInterior22: intGelora2,
    imgSrcInterior33: intGelora3,
    imgSrcInterior44: intGelora4,
    
   
    GalleryImages: [
      intGloryiauto1,
      intGloryiauto2,
      intGloryiauto3,
      intGloryiauto4,
    ],
    catalog: catGelora,
  },
  "gelora-e": {
    srcImg: BgModelsGloraE,
    titleCars: "Gelora E",
    imgSrcInterior11: intGeloraE1,
    imgSrcInterior22: intGeloraE2,
    imgSrcInterior33: intGeloraE3,
    imgSrcInterior44: intGeloraE4,
    
   
    GalleryImages: [
      intGeloraE1,
      intGeloraE2,
      intGeloraE3,
      intGeloraE4,
      intGeloraE5
    ],
    catalog: catGelora,
  },
  "glory-560": {
    srcImg: BgModelsGlory560,
    titleCars: "Glory-560",
    imgSrcInterior11: intGlory5601,
    imgSrcInterior22: intGlory5602,
    imgSrcInterior33: intGlory5603,
    imgSrcInterior44: intGlory5604,
    
   
    GalleryImages: [
      intGloryiauto1,
      intGloryiauto2,
      intGloryiauto3,
      intGloryiauto4,
    ],
    catalog: catGlory560,
  },
  "super-cab": {
    srcImg: BgModelsSupercab,
    titleCars: "Super Cab",
    imgSrcInterior11: intSuperCab1,
    imgSrcInterior22: intSuperCab2,
    imgSrcInterior33: intSuperCab3,
    imgSrcInterior44: intSuperCab4,
    
   
    GalleryImages: [
      intGloryiauto1,
      intGloryiauto2,
      intGloryiauto3,
      intGloryiauto4,
    ],
    catalog: catSupercab,
  },
  "glory-i-auto": {
    srcImg: BgModelsGlori,
    titleCars: "Glory I-Auto",
    imgSrcInterior11: intGloryiauto1,
    imgSrcInterior22: intGloryiauto2,
    imgSrcInterior33: intGloryiauto3,
    imgSrcInterior44: intGloryiauto4,
    
   
    GalleryImages: [
      intGloryiauto1,
      intGloryiauto2,
      intGloryiauto3,
      intGloryiauto4,
    ],
    catalog: catGloryiauto,
  }



};
export const infoDealer = {
    pondokIndah: {
      namaDelaer:"Pondok Indah",
      addressDealer: "JL. SULTAN ISKANDAR MUDA NO.81, KEL. KEBAYORAN LAMA UTARA, KEC. KEBAYORAN LAMA, JAKARTA SELATAN, 12240 NO TLP : 021-29721532",
      whatsappLink:"https://wa.me/+628989637625",
      DetailDealer2:"Sales, Service, Sparepart",
      mapsLink:"https://maps.app.goo.gl/Ss9nEmTGbNFmpWiQ8",
      infoService:"Sales, Servis, Sparepart",
    },
    pluit:{
      namaDelaer:"Pluit",
      addressDealer: "JL. PLUIT PERMAI NO. 18, RT.001/RW.004, KEL. PLUIT, KEC. PENJARINGAN, JAKARTA UTARA, 14450 NO TLP : 021-22672220",
      whatsappLink:"https://wa.me/+628989637625",
      DetailDealer2:"Sales, Service, Sparepart",
      mapsLink:"https://maps.app.goo.gl/Ss9nEmTGbNFmpWiQ8",
      infoService:"Sales"
    },
    sidoarjo:{
      namaDelaer:"Sidoarjo",
      addressDealer: "JL. GELORA NO. 1, RT.001/RW.001, KEL. PUCANG, (DEPAN STADION JENGGOLO), SIDOARJO, JAWA TIMUR, 61219 NO TLP : 031-99713558",
      whatsappLink:"https://wa.me/+628989637625",
      DetailDealer2:"Sales, Service, Sparepart",
      mapsLink:"https://maps.app.goo.gl/Ss9nEmTGbNFmpWiQ8",
      infoService:"Sales, Servis, Sparepart"
    },
    kupang:{
      namaDelaer:"Kupang",
      addressDealer: "JL. AHMAD YANI NO. 45 RT. 011 RW. 003 OEBA KEC. KOTA LAMA 85226 KOTA KUPANG NO TLP : 0380-8443212",
      whatsappLink:"https://wa.me/+628989637625",
      DetailDealer2:"Sales, Service, Sparepart",
      mapsLink:"https://maps.app.goo.gl/Ss9nEmTGbNFmpWiQ8",
      infoService:"Sales, Servis, Sparepart"
    },
    makassar:{
      namaDelaer:"Makassar",
      addressDealer: "JL. I GUSTI NGURAH RAI NO. 89, KEL PALUPI, KEC. TATANGA, PALU, SULAWESI TENGAH NO TLP : 0451-8204056",
      whatsappLink:"https://wa.me/+628989637625",
      DetailDealer2:"Sales, Service, Sparepart",
      mapsLink:"https://maps.app.goo.gl/Ss9nEmTGbNFmpWiQ8",
      infoService:"Sales, Servis, Sparepart"
    },
    palu:{
      namaDelaer:"Palu",
      addressDealer: "JL. I GUSTI NGURAH RAI NO. 89, KEL PALUPI, KEC. TATANGA, PALU, SULAWESI TENGAH NO TLP : 0451-8204056",
      whatsappLink:"https://wa.me/+628989637625",
      DetailDealer2:"Sales, Service, Sparepart",
      mapsLink:"https://maps.app.goo.gl/Ss9nEmTGbNFmpWiQ8",
      infoService:"Sales, Servis, Sparepart"
    },
    poso:{
      namaDelaer:"Poso",
      addressDealer: "JL. PULAU SUMATERA NO. 2, GERBANG REJO, POSO KOTA, POSO, SULAWESI TENGAH, 94619",
      whatsappLink:"https://wa.me/+628989637625",
      DetailDealer2:"Sales, Service, Sparepart",
      mapsLink:"https://maps.app.goo.gl/Ss9nEmTGbNFmpWiQ8",
      infoService:"Sales, Servis, Sparepart"
    },
    luwuk:{
      namaDelaer:"Luwuk",
      addressDealer: "JL. URIP SUMOHARJO NO.5, KARATON, LUWUK, BANGGAI, SULAWESI TENGAH, 94715",
      whatsappLink:"https://wa.me/+628989637625",
      DetailDealer2:"Sales, Service, Sparepart",
      mapsLink:"https://maps.app.goo.gl/Ss9nEmTGbNFmpWiQ8",
      infoService:"Sales, Servis, Sparepart"
    },
    parigi:{
      namaDelaer:"Parigi",
      addressDealer: "JL. TRANS SULAWESI, DESA PURWOSARI, KEC. TORUE, KAB. PARIGI MOUTONG, SULAWESI TENGAH, 94473",
      whatsappLink:"https://wa.me/+628989637625",
      DetailDealer2:"Sales, Service, Sparepart",
      mapsLink:"https://maps.app.goo.gl/Ss9nEmTGbNFmpWiQ8",
      infoService:"Sales, Servis, Sparepart"
    },
    bungku:{
      namaDelaer:"Bungku",
      addressDealer: "JL. TRANS SULAWESI, DESA IPI, KEC. BUNGKU TENGAH, KAB. MOROWALI, SULAWESI TENGAH, 94973",
      whatsappLink:"https://wa.me/+628989637625",
      DetailDealer2:"Sales, Service, Sparepart",
      mapsLink:"https://maps.app.goo.gl/Ss9nEmTGbNFmpWiQ8",
      infoService:"Sales, Servis, Sparepart"
    },
    kendari:{
      namaDelaer:"Kendari",
      addressDealer: "JL. Y. WAYONG BAYPASS, KEL. LEPO-LEPO, KEC. BARUGA, KENDARI, SULAWESI TENGGARA NO TLP : 0401-3092450",
      whatsappLink:"https://wa.me/+628989637625",
      DetailDealer2:"Sales, Service, Sparepart",
      mapsLink:"https://maps.app.goo.gl/Ss9nEmTGbNFmpWiQ8",
      infoService:"Sales, Servis, Sparepart"
    },
    manado:{
      namaDelaer:"Manado",
      addressDealer: "JL. YOS SUDARSO RUKO ORCHARD SQUARE B,C,D (SAMPING J&T, DEPAN CARWASH IN OUT PAAL II) KEL. PAAL II, KEC. TIKALA, MANADO, SULAWESI UTARA NO TLP : 0431-7194530",
      whatsappLink:"https://wa.me/+628989637625",
      DetailDealer2:"Sales, Service, Sparepart",
      mapsLink:"https://maps.app.goo.gl/Ss9nEmTGbNFmpWiQ8",
      infoService:"Sales, Servis, Sparepart"
    },
    gorontalo:{
      namaDelaer:"Gorontalo",
      addressDealer: "JL. PROF DR HB JASSIN 163 KEL. LIMBA U 2 KOTA GORONTALO NO TLP : 0435-8529277",
      whatsappLink:"https://wa.me/+628989637625",
      DetailDealer2:"Sales, Service, Sparepart",
      mapsLink:"https://maps.app.goo.gl/Ss9nEmTGbNFmpWiQ8",
      infoService:"Sales, Servis, Sparepart"
    }
};

export const colorData = {
  'seres-e1': {
    initialImage: seresColorWhite,
    backgroundColor: 'rgba(245, 245, 244, 0.96)',
    colors: [
      { image: seresColorWhite, background: 'rgba(245, 245, 244, 1)',descColor:'Elegant White' },
      { image: seresColorBlue, background: 'rgba(166, 195, 209, 1)',descColor:'Oxygen Blue' },
      { image: seresColorGreen, background: 'rgba(147, 185, 176, 1)',descColor:'Fairy Green' },
      { image: seresColorRose, background: 'rgba(212, 168, 174, 1)' ,descColor:'Mist Rose'}
    ]
  },
  'gelora': {
    initialImage: geloraColorWhite,
    backgroundColor: 'rgb(245, 245, 244)',
    colors: [
      { image: geloraColorWhite, background: 'rgb(245, 245, 244)',descColor:'White' }
    ]
  },
  'gelora-e': {
    initialImage: geloraEColorWhite,
    backgroundColor: 'rgb(245, 245, 244)',
    colors: [
      { image: geloraEColorWhite, background: 'rgb(245, 245, 244)',descColor:'White' }
    ]
  },
  'glory-i-auto': {
    initialImage: gloriColorWhite,
    backgroundColor: 'rgb(245, 245, 244)',
    colors: [
      { image: gloriColorWhite, background: 'rgb(245, 245, 244)',descColor:'Elegan White' },
      { image: gloriColorBlack, background: 'RGB(0, 0, 0)',descColor:'Black' },
      { image: gloriColorRed, background: 'RGB(217, 0, 0)',descColor:'Red' }
    ]
  },
  'glory-560': {
    initialImage: glory560White,
    backgroundColor: 'rgb(245, 245, 244)',
    colors: [
      { image: glory560White, background: 'rgb(245, 245, 244)',descColor:'Elegan White' },
      { image: glory560Black, background: 'RGB(0, 0, 0)',descColor:'Phantom Black' },
      { image: glory560Red, background: 'RGB(217, 0, 0)',descColor:'Metalic Red' },
      { image: glory560Silver, background: 'RGB(113, 113, 113)',descColor:'Campagne Silver' }
    ]
  },
  'super-cab': {
    initialImage: supercabColorWhite,
    backgroundColor: 'rgb(245, 245, 244)',
    colors: [
      { image: supercabColorWhite, background: 'rgb(245, 245, 244)',descColor:'red' },
      { image: supercabColorBlack, background: 'rgb(0, 0, 0)',descColor:'red' }
    ]
  }
};
export const imgTabColors = {
  'seres-e1': {
   img:[
    detailSeres1,
    detailSeres2,
   ]
  },
  'gelora': {
    img:[
      detailgelora1,
      detailgelora2,
      detailgelora3,
      detailgelora4,
     ]
  },
  'gelora-e': {
    img:[
      detailgeloraE1
     ]
  },
  'glory-i-auto': {
    img:[
      detailgloryiauto1,
      detailgloryiauto2
     ]
  },
  'glory-560': {
    img:[
      detailglory5601,
      detailglory5602,
     ]
  },
  'super-cab': {
    img:[
     detailsupercab1,
     detailsupercab2,
     detailsupercab3,
     detailsupercab4,
     ]
  }
};

export const slideDataCarsDFSK = [
  {
    typeCar:"Gelora",
    image:geloraColorWhite,
    otrPrice:"201.900.000",
    otr:"Jakarta",
    itemSpec:["Rear-wheel drive", "Dual Circuit Hydraulic Braking System", "DK15-06VVT Engine"],
    promo:[""],
    link:"/model/details/gelora"
  },
  {
    typeCar:"Gelora E",
    image:geloraEColorWhite,
    otrPrice:"350.000.000",
    otr:"Jakarta",
    itemSpec:["Quick Charging Port", "Range 300 KM","2-type Driving Sequence"],
    promo:[""],
    link:"/model/details/gelora-e"
  },
  {
    typeCar:"Supercab",
    image:supercabColorWhite,
    otrPrice:"153.500.000",
    otr:"Jakarta",
    itemSpec:["Digital MP3/FM Control Board", "Super Cooling A/C"],
    promo:[""],
    link:"/model/details/super-cab"
  },
  {
    typeCar:"Glory I Auto",
    image:gloriColorRed,
    otrPrice:"365.200.000",
    otr:"Jakarta",
    itemSpec:["Voice Navigation","Car Control","Electric Tailgate"],
    promo:[""],
    link:"model/details/glory-i-auto"
  },
  {
    typeCar:"Glory 560",
    image:glory560Black,
    otrPrice:"275.900.000",
    otr:"Jakarta",
    itemSpec:["Electronic Stability Program","Led Daytime Running Light","GPS Navigation"],
    promo:[""],
    link:"/model/details/glory-560"
  },
  

]
export const slideDataCarsSeres = [
  {
    typeCar:"Seres E1",
    image:seresColorGreen,
    otrPrice:"189.000.000",
    otr:"Jakarta",
    itemSpec:["Battery Capacity 16.8 KWH","Range 220 KM","Charging time 4h"],
    promo:["Free Wall Charging", "8 Years Warranty Battery"],
    link:"/model/details/seres-e1"
  },
  {
    typeCar:"Seres E1",
    image:seresColorBlue,
    otrPrice:"189.000.000",
    otr:"Jakarta",
    itemSpec:["Battery Capacity 16.8 KWH","Range 220 KM","Charging time 4h"],
    promo:["Free Wall Charging", "8 Years Warranty Battery"],
    link:"/model/details/seres-e1"
  },
  {
    typeCar:"Seres E1",
    image:seresColorRose,
    otrPrice:"189.000.000",
    otr:"Jakarta",
    itemSpec:["Battery Capacity 16.8 KWH","Range 220 KM","Charging time 4h"],
    promo:["Free Wall Charging", "8 Years Warranty Battery"],
    link:"/model/details/seres-e1"
  },
  {
    typeCar:"Seres E1",
    image:seresColorWhite,
    otrPrice:"189.000.000",
    otr:"Jakarta",
    itemSpec:["Battery Capacity 16.8 KWH","Range 220 KM","Charging time 4h"],
    promo:["Free Wall Charging", "8 Years Warranty Battery"],
    link:"/model/details/seres-e1"
  },
  

]

//interior
export const interiorImg = {
  'seres-e1': {
   img:[
    seresE1Interior1,
    seresE1Interior2,
    seresE1Interior3,
    seresE1Interior4,
   ]
  },
  'gelora': {
    img:[
      intGelora1,
      intGelora2,
      intGelora3,
      intGelora4,
     ]
  },
  'gelora-e': {
    img:[
      intGeloraE1,
      intGeloraE2,
      intGeloraE3,
      intGeloraE4,
      intGeloraE5,
     ]
  },
  'glory-i-auto': {
    img:[
      intGloryiauto1,
      intGloryiauto2,
      intGloryiauto3,
      intGloryiauto4,
     ]
  },
  'glory-560': {
    img:[
      intGlory5601,
      intGlory5602,
      intGlory5603,
      intGlory5604,
     ]
  },
  'super-cab': {
    img:[
    intSuperCab1,
    intSuperCab2,
    intSuperCab3,
    intSuperCab4,
     ]
  }
};
export const exteriorImg = {
  'seres-e1': {
    images: [
      {
        imgSrc: extsereses1,
        title: '',
        text: '',
      },
      {
        imgSrc: extsereses2,
        title: '',
        text: '',
      },
      {
        imgSrc: extsereses3,
        title: '',
        text: '',
      },
      {
        imgSrc: extsereses4,
        title: '',
        text: '',
      },
      {
        imgSrc: extsereses5,
        title: '',
        text: '',
      },
    ],
  },
  'gelora-e': {
    images: [
      {
        imgSrc: extGeloraE1,
        title: '',
        text: '',
      },
      {
        imgSrc: extGeloraE2,
        title: '',
        text: '',
      },
      {
        imgSrc: extGeloraE3,
        title: '',
        text: '',
      },
      {
        imgSrc: extGeloraE4,
        title: '',
        text: '',
      },
      {
        imgSrc: extGeloraE5,
        title: '',
        text: '',
      },
      {
        imgSrc: extGeloraE6,
        title: '',
        text: '',
      },
    ],
  },
  'gelora': {
    images: [
      {
        imgSrc: extGelora1,
        title: '',
        text: '',
      },
      {
        imgSrc: extGelora2,
        title: '',
        text: '',
      },
      {
        imgSrc: extGelora3,
        title: '',
        text: '',
      },
      {
        imgSrc: extGelora4,
        title: '',
        text: '',
      },
      {
        imgSrc: extGelora5,
        title: '',
        text: '',
      },
      {
        imgSrc: extGelora6,
        title: '',
        text: '',
      },
    ],
  },
  'glory-560': {
    images: [
      {
        imgSrc: extGlory5601,
        title: '',
        text: '',
      },
      {
        imgSrc: extGlory5602,
        title: '',
        text: '',
      },
      {
        imgSrc: extGlory5603,
        title: '',
        text: '',
      },
      {
        imgSrc: extGlory5604,
        title: '',
        text: '',
      },
      {
        imgSrc: extGlory5605,
        title: '',
        text: '',
      },
    ],
  },
  'glory-i-auto': {
    images: [
      {
        imgSrc: extGloryIAuto1,
        title: '',
        text: '',
      },
      {
        imgSrc: extGloryIAuto2,
        title: '',
        text: '',
      },
      {
        imgSrc: extGloryIAuto3,
        title: '',
        text: '',
      },
      {
        imgSrc: extGloryIAuto4,
        title: '',
        text: '',
      },
      {
        imgSrc: extGloryIAuto5,
        title: '',
        text: '',
      },
    ],
  },
  'super-cab': {
    images: [
      {
        imgSrc: extSupercab1,
        title: '',
        text: '',
      },
      {
        imgSrc: extSupercab2,
        title: '',
        text: '',
      },
      {
        imgSrc: extSupercab3,
        title: '',
        text: '',
      },
      {
        imgSrc: extSupercab4,
        title: '',
        text: '',
      },
    ],
  },
};


//dealer
export const dealerData = {
  'Jakarta':{

    pondokindah:
    [{
    title:"Pondok Indah",
    address: "JL. SULTAN ISKANDAR MUDA NO.81, KEL. KEBAYORAN LAMA UTARA, KEC. KEBAYORAN LAMA, JAKARTA SELATAN, 12240 NO TLP : 021-29721532",
    whatsApp:"+81290008267",
    instagram:"https://www.instagram.com/dfsk.seres_aiu/",
    maps:"https://maps.app.goo.gl/yyPJURZjHo7suRnn7",
    imgSrc:BgServices
  }],
    pluit:
    [{
    title:"Pluit",
    address: "JL. PLUIT PERMAI NO. 18, RT.001/RW.004, KEL. PLUIT, KEC. PENJARINGAN, JAKARTA UTARA, 14450 NO TLP : 021-22672220",
    whatsApp:"+81290008267",
    instagram:"",
    maps:"https://maps.app.goo.gl/qC7RNuhakAJK88aH6",
    imgSrc:BgServices
  }],
  },
  'jawa-timur':{
    sidoarjo:
    [
      {
    title:"Sidoarjo",
    address: "JL. GELORA NO. 1, RT.001/RW.001, KEL. PUCANG, (DEPAN STADION JENGGOLO), SIDOARJO, JAWA TIMUR, 61219 NO TLP : 031-99713558",
    whatsApp:"+6281290008267",
    instagram:"",
    maps:"https://maps.app.goo.gl/ZMMzg4gQz7Ptg5e99",
    imgSrc:BgServices
  }
  ],
    
  },
  'ntt':{
    kupang:[
      {
        title:"Kupang",
        address: "JL. AHMAD YANI NO. 45 RT. 011 RW. 003 OEBA KEC. KOTA LAMA 85226 KOTA KUPANG NO TLP : 0380-8443212",
        whatsApp:"+6281290008267",
        instagram:"",
        maps:"https://maps.app.goo.gl/NawExHypT1G25pf86",
        imgSrc:BgServices
      }
    ]
  },
  'sulawesi':{
    makassar:[
      {
        title:"Makassar",
        address: "JL URIP SUMOHARJO KM 7 TELLO BARU PANAKKUKANG MAKASSAR 90223 NO TLP : 0411-426266",
        whatsApp:"+6281290008267",
        instagram:"",
        maps:"https://maps.app.goo.gl/T2u1jqjpoT7B8rPV8",
        imgSrc:BgServices
      }
    ],
    palu:[
      {
        title:"Palu",
        address: "JL. I GUSTI NGURAH RAI NO. 89, KEL PALUPI, KEC. TATANGA, PALU, SULAWESI TENGAH NO TLP : 0451-8204056",
        whatsApp:"+6281290008267",
        instagram:"",
        maps:"https://maps.app.goo.gl/pbm4CxXRyRhpk2z96",
        imgSrc:BgServices
      }
    ],
    poso:[
      {
        title:"Poso",
        address: "JL. PULAU SUMATERA NO. 2, GERBANG REJO, POSO KOTA, POSO, SULAWESI TENGAH, 94619",
        whatsApp:"+6281290008267",
        instagram:"",
        maps:"https://maps.app.goo.gl/4WjUTYBza3MKYCbz5",
        imgSrc:BgServices
      }
    ],
    luwuk:[
      {
        title:"Luwuk",
        address: "JL. URIP SUMOHARJO NO.5, KARATON, LUWUK, BANGGAI, SULAWESI TENGAH, 94715",
        whatsApp:"+6281290008267",
        instagram:"",
        maps:"https://maps.app.goo.gl/LrJnkihMLnpHxZx19",
        imgSrc:BgServices
      }
    ],
    parigi:[
      {
        title:"Parigi",
        address: "JL. TRANS SULAWESI, DESA PURWOSARI, KEC. TORUE, KAB. PARIGI MOUTONG, SULAWESI TENGAH, 94473",
        whatsApp:"+6281290008267",
        instagram:"",
        maps:"https://maps.app.goo.gl/WwgN23rUtKNTDfLy8",
        imgSrc:BgServices
      }
    ],
    bungku:[
      {
        title:"Bungku",
        address: "JL. TRANS SULAWESI, DESA IPI, KEC. BUNGKU TENGAH, KAB. MOROWALI, SULAWESI TENGAH, 94973",
        whatsApp:"+6281290008267",
        instagram:"",
        maps:"",
        imgSrc:BgServices
      }
    ],
    kendari:[
      {
        title:"Kendari",
        address: "JL. Y. WAYONG BAYPASS, KEL. LEPO-LEPO, KEC. BARUGA, KENDARI, SULAWESI TENGGARA NO TLP : 0401-3092450",
        whatsApp:"+6281290008267",
        instagram:"",
        maps:"https://maps.app.goo.gl/LtpJYCGK8BW2eZoS6",
        imgSrc:BgServices
      }
    ],
    manado:[
      {
        title:"Manado",
        address: "JL. YOS SUDARSO RUKO ORCHARD SQUARE B,C,D (SAMPING J&T, DEPAN CARWASH IN OUT PAAL II) KEL. PAAL II, KEC. TIKALA, MANADO, SULAWESI UTARA NO TLP : 0431-7194530",
        whatsApp:"+6281290008267",
        instagram:"",
        maps:"https://maps.app.goo.gl/k6MgHnPP6NuQ2s2Z9",
        imgSrc:BgServices
      }
    ],
  
  },
  'gorontalo':{
    gorontalo:[
      {
        title:"Gorontalo",
        address: "JL. PROF DR HB JASSIN 163 KEL. LIMBA U 2 KOTA GORONTALO NO TLP : 0435-8529277",
        whatsApp:"+6281290008267",
        instagram:"",
        maps:"https://maps.app.goo.gl/kg4eQJkvZvJjwMBN9",
        imgSrc:BgServices
      }
    ]
  }
}