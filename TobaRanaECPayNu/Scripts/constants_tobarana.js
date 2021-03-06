const EXCHANGE_RATE = 15
 const PRICE_CONFIGS = [
  { 
    price: 10000,
    colors: {
      contentBg: 'rgba(22,60,40,1)',
      headerBg: 'rgba(10,45,35,1)',
      header: 'rgba(255,200,70,1)',
      authorName: 'rgba(255,250,220,0.7)',
      time: 'rgba(255,255,255,0.501961)',
      content: 'rgba(255,244,150,1)',
      iconImg: 'https://cdn.discordapp.com/attachments/886767234381389854/994235591837364224/money.gif'
    },
    pinTime: 65
  },
  { 
    price: 200* EXCHANGE_RATE,
    colors: {
      contentBg: 'rgba(255,23,70,1)',
      headerBg: 'rgba(208,0,0,1)',
      header: 'rgba(255,255,255,1)',
      authorName: 'rgba(255,255,255,0.701961)',
      time: 'rgba(255,255,255,0.501961)',
      content: 'rgba(255,255,255,1)',
      iconImg: 'https://i.imgur.com/gpR0gyt.gif'
    },
    pinTime: 60
  },
  { 
    price: 100 * EXCHANGE_RATE,
    colors: {
      contentBg: 'rgba(230,33,23,1)',
      headerBg: 'rgba(208,0,0,1)',
      header: 'rgba(255,255,255,1)',
      authorName: 'rgba(255,255,255,0.701961)',
      time: 'rgba(255,255,255,0.501961)',
      content: 'rgba(255,255,255,1)',
      iconImg: 'https://cdn.discordapp.com/attachments/886767234381389854/994249675718787142/ezgif.com-gif-maker_3.gif'
    },
    pinTime: 60
  },
  { 
    price: 50 * EXCHANGE_RATE,
    colors: {
      contentBg: 'rgba(233,30,99,1)',
      headerBg: 'rgba(194,24,91,1)',
      header: 'rgba(255,255,255,1)',
      authorName: 'rgba(255,255,255,0.701961)',
      time: 'rgba(255,255,255,0.501961)',
      content: 'rgba(255,255,255,1)',
      iconImg: 'https://cdn.discordapp.com/attachments/886767234381389854/994255892373585930/750.gif'
    },
    pinTime: 30
  },
  { 
    price: 521,
    colors: {
      contentBg: 'rgba(245,124,0,1)',
      headerBg: 'rgba(230,81,0,1)',
      header: 'rgba(255,255,255,0.87451)',
      authorName: 'rgba(255,255,255,0.701961)',
      time: 'rgba(255,255,255,0.501961)',
      content: 'rgba(255,255,255,0.87451)',
      iconImg: 'https://i.imgur.com/6UvwPrA.gif'
    },
    pinTime: 12
  },
  { 
    price: 520,
    colors: {
      contentBg: 'rgba(249,208,222,1)',
      headerBg: 'rgba(228,114,116,1)',
      header: 'rgba(0,0,0,0.87451)',
      authorName: 'rgba(0,0,0,0.701961)',
      time: 'rgba(255,255,255,0.501961)',
      content: 'rgba(0,0,0.1)',
      iconImg: 'https://cdn.discordapp.com/attachments/941484136638607390/994252072214085804/ezgif.com-gif-maker_4.gif'
    },
    pinTime: 11
  },
  { 
    price: 20 * EXCHANGE_RATE,
    colors: {
      contentBg: 'rgba(245,124,0,1)',
      headerBg: 'rgba(230,81,0,1)',
      header: 'rgba(255,255,255,0.87451)',
      authorName: 'rgba(255,255,255,0.701961)',
      time: 'rgba(255,255,255,0.501961)',
      content: 'rgba(255,255,255,0.87451)',
      iconImg: 'https://cdn.discordapp.com/attachments/886767234381389854/994254301784449074/owly-fast.gif'
    },
    pinTime: 10
  },
  { 
    price: 10 * EXCHANGE_RATE,
    colors: {
      contentBg: 'rgba(255,202,40,1)',
      headerBg: 'rgba(255,179,0,1)',
      header: 'rgba(0,0,0,0.87451)',
      authorName: 'rgba(0,0,0,0.541176)',
      time: 'rgba(0,0,0,0.501961)',
      content: 'rgba(0,0,0,0.87451)',
      iconImg: 'https://cdn.discordapp.com/attachments/886767234381389854/994254418935558144/FULAD1.jpg'
    },
    pinTime: 5
  },
  { 
    price: 5 * EXCHANGE_RATE,
    colors: {
      contentBg: 'rgba(29,233,182,1)',
      headerBg: 'rgba(0,191,165,1)',
      header: 'rgba(0,0,0,1)',
      authorName: 'rgba(0,0,0,0.541176)',
      time: 'rgba(0,0,0,0.501961)',
      content: 'rgba(0,0,0,1)',
      iconImg: 'https://cdn.discordapp.com/attachments/886767234381389854/994259056657174538/owlpple.png'
    },
    pinTime: 2
  },
  { 
    price: 2 * EXCHANGE_RATE,
    colors: {
      contentBg: 'rgba(0,229,255,1)',
      headerBg: 'rgba(0,184,212,1)',
      header: 'rgba(0,0,0,1)',
      authorName: 'rgba(0,0,0,0.701961)',
      time: 'rgba(0,0,0,0.501961)',
      content: 'rgba(0,0,0,1)',
      iconImg: 'https://cdn.discordapp.com/attachments/886767234381389854/994253105065627658/ainomori-heart-150px--.png'
    },
    pinTime: 0
  },
  { 
    price: 1 * EXCHANGE_RATE,
    colors: {
      contentBg: 'rgba(30,136,229,1)',
      headerBg: 'rgba(21,101,192,1)',
      header: 'rgba(255,255,255,1)',
      authorName: 'rgba(255,255,255,0.701961)',
      time: 'rgba(255,255,255,0.501961)',
      content: 'rgba(255,255,255,1)',
      iconImg: 'https://i.imgur.com/HzZ1v64.png'
    },
    pinTime: 0
  }
]

 function getPriceConfig (price) {
  for (const config of PRICE_CONFIGS) {
    if (price >= config.price) {
      return config
    }
  }
  return PRICE_CONFIGS[PRICE_CONFIGS.length - 1]
}

