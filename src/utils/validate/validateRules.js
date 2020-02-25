const validotor = {
  rules: {
    // 昵称
    username: {
      required: true,
      checkName: true
    },
    // 联系方式（手机号码）
    telephone: {
      required: true,
      checkNumber: true,
      minlength: 11
    },
    // 手机验证码（6位）
    codes: {
      required: true,
      minlength: 6
    },
    // 地址（省、市、区）
    postions: {
      required: true
    },
    // 详细地址
    address: {
      required: true
    },
    // 身份证号码
    IDcard: {
      required: true,
      rangelength: [15, 18]
    },
    // 身份证正面照片
    idCardPhoto: {
      required: true
    },
    // 身份证手持照片
    handHeldIdCardPhoto: {
      required: true
    },
    // 公司抬头
    lookUp: {
      required: true,
      minlength: 6
    },
    // 税号
    tax: {
      required: true,
      minlength: 10
    },
    // 单位注册地址
    registerPlace: {
      required: true,
      minlength: 10
    },
    // 单位固定电话
    registeTel: {
      required: true,
      checkNumber: true,
      minlength: 6
    },
    // 开户银行
    bank: {
      required: true,
      minlength: 8
    },
    // 银行账户
    account: {
      required: true,
      checkNumber: true,
      minlength: 10
    },
    //  编辑地址（收货人）
    contact: {
      required: true,
      minlength: 1
    },
    // 编辑地址（省市区）
    signProvince: {
      required: true
    },
    // 编辑地址（联系方式）
    signPhone: {
      required: true,
      checkNumber: true,
      minlength: 6
    },
    // 编辑地址（详细地址）
    signAddress: {
      required: true,
      minlength: 10
    }
  },
  messages: {
    // 昵称
    username: {
      required: "请输入称呼",
      checkName: "请输入正确的称呼"
    },
    // 联系方式（手机号码）
    telephone: {
      required: "请输入手机号",
      checkNumber: "请输入正确的手机号",
      minlength: "手机号格式不正确"
    },
    // 手机验证码（6位）
    codes: {
      required: "请输入验证码",
      minlength: "请输入6位有效验证码"
    },
    // 地址（省、市、区）
    postions: {
      required: "请选择地址"
    },
    // 详细地址
    address: {
      required: "请输入详细地址"
    },
    // 身份证号码
    IDcard: {
      required: "请输入身份证号码",
      rangelength: "请输入正确的身份证号码"
    },
    // 身份证正面照片
    idCardPhoto: {
      required: "请上传正面身份证照片"
    },
    // 身份证手持照片
    handHeldIdCardPhoto: {
      required: "请上传手持身份证照片"
    },
    // 公司抬头
    lookUp: {
      required: "请输入公司抬头",
      minlength: "请至少输入6位公司抬头"
    },
    // 税号
    tax: {
      required: "请输入税号",
      minlength: "请至少输入10位税号"
    },
    // 单位注册地址
    registerPlace: {
      required: "请输入单位地址",
      minlength: "请至少输入10位单位地址"
    },
    // 单位固定电话
    registeTel: {
      required: "请输入电话号码",
      checkNumber: "请输入正确的电话号码",
      minlength: "请至少输入6位号码"
    },

    // 开户银行
    bank: {
      required: "请输入开户银行",
      minlength: "请至少输入8位开户银行"
    },
    // 开户账号
    account: {
      required: "请输入银行账户",
      checkNumber: "请输入正确的银行账户",
      minlength: "请至少输入10位银行账户"
    },
    // 编辑地址（收货人）
    contact: {
      required: "请填写收货人",
      minlength: "请至少填写1位收货人名称"
    },
    //  编辑地址0（省市区）
    signProvince: {
      required: "请选择省市区"
    },
    // 编辑地址（联系方式）
    signPhone: {
      required: "请填写联系方式",
      checkNumber: "请输入正确的联系方式",
      minlength: "请至少填写6位联系方式"
    },
    // 编辑地址（详细地址）
    signAddress: {
      required: "请填写收货地址",
      minlength: "请至少填写10位收货地址"
    }
  }
};

module.exports = validotor;
