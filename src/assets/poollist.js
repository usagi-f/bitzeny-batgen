const poollist = [
  {
    label: 'LA POOL',
    options: [{
      value: 'stratum+tcp://jp.lapool.me:3014',
      label: 'LA POOL 低難易度(低性能CPU)'
    }, {
      value: 'stratum+tcp://jp.lapool.me:3114',
      label: 'LA POOL 高難易度(高性能CPU)'
    }]
  }, {
    label: 'MD POOL',
    options: [{
      value: 'stratum+tcp://mining-zeny.mdpool.info:6969',
      label: 'MD POOL 低難易度(低性能CPU)'
    }, {
      value: 'stratum+tcp://mining-zeny.mdpool.info:6960',
      label: 'MD POOL 中難易度(中性能CPU)'
    }, {
      value: 'stratum+tcp://mining-zeny.mdpool.info:6961',
      label: 'MD POOL 高難易度(高性能CPU)'
    }, {
      value: 'stratum+tcp://mining-zeny.mdpool.info:6962',
      label: 'MD POOL 超高難易度(超高性能CPU)'
    }]
  }, {
    label: 'うさぎコイン発掘所',
    options: [{
      value: 'stratum+tcp://bunnymining.work:19332',
      label: 'うさぎコイン発掘所 低難易度(低性能CPU)'
    }, {
      value: 'stratum+tcp://bunnymining.work:19333',
      label: 'うさぎコイン発掘所 中難易度(中性能CPU)'
    }, {
      value: 'stratum+tcp://bunnymining.work:19334',
      label: 'うさぎコイン発掘所 高難易度(高性能CPU)'
    }]
  }, {
    label: 'みそスープール',
    options: [{
      value: 'stratum+tcp://stratum.misosi.ru:16002',
      label: 'みそスープール 低難易度(低性能CPU)'
    }, {
      value: 'stratum+tcp://stratum.misosi.ru:16001',
      label: 'みそスープール 高難易度(高性能CPU)'
    }]
  }, {
    label: 'その他',
    options: [{
      value: 'extra',
      label: 'その他のプール'
    }]
  }
]

export default poollist
