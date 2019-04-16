import * as maptalks from 'maptalks';

const fans_info = [
  {
    name: 'Liquid',
    sex: '男',
    birthday: '11-05',
    area: '深圳',
    hobby: '跑步',
    style_lab: 'hello ycy',
    location: [-74.00833043131627, 40.71075554599386],
    img_url: require('../assets/images/boy-box.png'),
  },
  {
    name: 'RachelXu',
    sex: '女',
    birthday: '10-11',
    area: '深圳',
    hobby: '画画，唱歌',
    style_lab: '为偶像加油',
    location: [114.36522552962903, 30.536785877395143],
    img_url: require('../assets/images/girl-box.png'),
  },
  {
    name: 'sakitam-fdd',
    sex: '男',
    birthday: '10-11',
    area: '深圳',
    hobby: 'coding',
    style_lab: '为偶像加油',
    location: [114.36150529481513, 30.540019837004557],
    img_url: require('../assets/images/boy-box.png'),
  },
  {
    name: 'RedemptioM',
    sex: '男',
    birthday: '10-11',
    area: '深圳',
    hobby: '唱歌',
    style_lab: '为偶像加油',
    location: [114.36916143022925, 30.54064173984419],
    img_url: require('../assets/images/boy-box.png'),
  },
  {
    name: 'CB',
    sex: '男',
    birthday: '10-11',
    area: '深圳',
    hobby: '舞蹈',
    style_lab: '为偶像加油',
    location: [114.36226012506721, 30.533847233241946],
    img_url: require('../assets/images/boy-box.png'),
  },
  {
    name: 'ikeepers',
    sex: '男',
    birthday: '10-11',
    area: '深圳',
    hobby: '舞蹈',
    style_lab: '为偶像加油',
    location: [114.36488405880071, 30.531017342891374],
    img_url: require('../assets/images/boy-box.png'),
  },
  {
    name: 'suyi',
    sex: '男',
    birthday: '10-11',
    area: '深圳',
    hobby: '舞蹈',
    style_lab: '为偶像加油',
    location: [114.361649072006, 30.52926028116091],
    img_url: require('../assets/images/boy-box.png'),
  },
  {
    name: '鸡腿堡',
    sex: '女',
    birthday: '10-11',
    area: '深圳',
    hobby: '舞蹈',
    style_lab: '为偶像加油',
    location: [114.3706531185846, 30.528560557376515],
    img_url: require('../assets/images/girl-box.png'),
  },
  {
    name: 'milk',
    sex: '女',
    birthday: '10-11',
    area: '深圳',
    hobby: '舞蹈',
    style_lab: '为偶像加油',
    location: [114.3741576876122, 30.53795198113927],
    img_url: require('../assets/images/girl-box.png'),
  },
  {
    name: '雷嘎',
    sex: '男',
    birthday: '10-11',
    area: '深圳',
    hobby: '舞蹈',
    style_lab: '为偶像加油',
    location: [114.36567483335052, 30.53392497630715],
    img_url: require('../assets/images/boy-box.png'),
  },
  {
    name: '小鹏',
    sex: '男',
    birthday: '10-11',
    area: '深圳',
    hobby: '舞蹈',
    style_lab: '为偶像加油',
    location: [114.36567483335052, 30.53392497630715],
    img_url: require('../assets/images/boy-box.png'),
  },
  {
    name: 'YoSun',
    sex: '男',
    birthday: '10-11',
    area: '深圳',
    hobby: '舞蹈',
    style_lab: '为偶像加油',
    location: [114.36567483335052, 30.53392497630715],
    img_url: require('../assets/images/boy-box.png'),
  },
  {
    name: 'cenergy',
    sex: '男',
    birthday: '10-11',
    area: '深圳',
    hobby: '舞蹈',
    style_lab: '为偶像加油',
    location: [114.36567483335052, 30.53392497630715],
    img_url: require('../assets/images/boy-box.png'),
  },
  {
    name: 'OuYangResume',
    sex: '男',
    birthday: '10-11',
    area: '深圳',
    hobby: '舞蹈',
    style_lab: '为偶像加油',
    location: [114.36567483335052, 30.53392497630715],
    img_url: require('../assets/images/boy-box.png'),
  },
  {
    name: '醋溜茶叶蛋',
    sex: '男',
    birthday: '10-11',
    area: '深圳',
    hobby: '舞蹈',
    style_lab: '为偶像加油',
    location: [114.36567483335052, 30.53392497630715],
    img_url: require('../assets/images/boy-box.png'),
  },
];

function animateInfo(map, autoCenter, params) {
  const random_num = Math.floor(Math.random() * 15);
  const current = params || fans_info[random_num];
  let html = `${'<div class="content" style= "width:346px;height:313px;">'
    + '<img src="'}${current.img_url}";stlye="position: absolute;left: 0px;bottom: 0px;">`
    + '<div style=\'width:60%;height:200px;box-sizing:border-box;text-align;left;position:absolute;top:72px;left:100px;\'>'
    + '<div style=\'font-size:16px;color:#7ad5f8;display:flex;justify-content:space-between;margin-top:10px\'>'
    + `<div>姓名</div><div style="color:#fff;text-align:left;width:50%">${current.name}</div></div>`
    + '<div style=\'font-size:16px;color:#7ad5f8;display:flex;justify-content:space-between;margin-top:10px\'>'
    + `<div>性别</div><div style="color:#fff;text-align:left;width:50%">${current.sex}</div></div>`
    + '<div style=\'font-size:16px;color:#7ad5f8;display:flex;justify-content:space-between;margin-top:10px\'>'
    + `<div>生日</div><div style="color:#fff;text-align:left;width:50%">${current.birthday}</div></div>`
    + '<div style=\'font-size:16px;color:#7ad5f8;display:flex;justify-content:space-between;margin-top:10px\'>'
    + `<div>区域</div><div style="color:#fff;text-align:left;width:50%">${current.area}</div></div>`
    + '<div style=\'font-size:16px;color:#7ad5f8;display:flex;justify-content:space-between;margin-top:10px\'>'
    + `<div>爱好</div><div style="color:#fff;text-align:left;width:50%">${current.hobby}</div></div>`
    + '<div style=\'font-size:16px;color:#7ad5f8;display:flex;justify-content:space-between;margin-top:10px\'>'
    + `<div>个性签名</div><div style="color:#fff;text-align:left;width:50%">${current.style_lab}</div></div>`
    + '</div>'
    + '</div>';
  if (current.sex === '女') {
    html = `${'<div class="content" style= "width:346px;height:313px;">'
      + '<img src="'}${current.img_url}";stlye="position: absolute;left: 0px;bottom: 0px;">`
      + '<div style=\'width:60%;height:200px;box-sizing:border-box;text-align;left;position:absolute;top:72px;left:100px;\'>'
      + '<div style=\'font-size:16px;color:#e068ff;display:flex;justify-content:space-between;margin-top:10px\'>'
      + `<div>姓名</div><div style="color:#fff;text-align:left;width:50%">${current.name}</div></div>`
      + '<div style=\'font-size:16px;color:#e068ff;display:flex;justify-content:space-between;margin-top:10px\'>'
      + `<div>性别</div><div style="color:#fff;text-align:left;width:50%">${current.sex}</div></div>`
      + '<div style=\'font-size:16px;color:#e068ff;display:flex;justify-content:space-between;margin-top:10px\'>'
      + `<div>生日</div><div style="color:#fff;text-align:left;width:50%">${current.birthday}</div></div>`
      + '<div style=\'font-size:16px;color:#e068ff;display:flex;justify-content:space-between;margin-top:10px\'>'
      + `<div>区域</div><div style="color:#fff;text-align:left;width:50%">${current.area}</div></div>`
      + '<div style=\'font-size:16px;color:#e068ff;display:flex;justify-content:space-between;margin-top:10px\'>'
      + `<div>爱好</div><div style="color:#fff;text-align:left;width:50%">${current.hobby}</div></div>`
      + '<div style=\'font-size:16px;color:#e068ff;display:flex;justify-content:space-between;margin-top:10px\'>'
      + `<div>个性签名</div><div style="color:#fff;text-align:left;width:50%">${current.style_lab}</div></div>`
      + '</div>'
      + '</div>';
  }
  const options = {
    single: false,
    width: 346,
    height: 280,
    custom: true,
    autoOpenOn: null,
    content: html,
  };
  const popover = new maptalks.ui.InfoWindow(options);
  const coordinates = current.location;
  const coord = new maptalks.Point(coordinates);
  popover.addTo(map).show(coord);
  if (autoCenter) {
    map.panTo(coord);
  }
  return popover;
}

export {
  animateInfo,
};