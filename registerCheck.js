function showDesc(obj) {
  var id = obj.name;
  document.getElementById(id).style.display = "inline";
}

//输入框失去焦点时检验输入内容是否有效
function checkText(obj) {
  //获取输入框的id值
  var id = obj.name;
  var text = document.getElementById(id.toString().toUpperCase()).value;
  //判断是否为空
  if (text.replace(/\s/g, "") == "" && id != 'IDNumber') {
    document.getElementById(id).innerHTML = "输入不能为空";
  } else {
    //取首字母转换为大写,其余不变,凑成方法
    var firstChar = id.charAt(0).toString().toUpperCase();
    var strsub = id.substring(1, id.length);
    var strMethod = "check" + firstChar + strsub + "()";
    var isTrue = eval(strMethod);
    if (isTrue) {
      document.getElementById(id).innerHTML = "输入有效";
    }
  }
}

//判断用户名的长度
function checkUsername() {
  var id = document.getElementById("USERNAME");
  var username = id.value;
  if (username.length > 6) {
    document.getElementById(id.name).innerHTML = "输入的用户名过长";
    return false;
  } else
    return true;
}

function checkPhoneNumber() {
  // 利用正则表达式对输入数据匹配
  var id = document.getElementById("PHONENUMBER");
  var phone = id.value;
  if (phone.length != 11) {
    document.getElementById(id.name).innerHTML = "手机号码长度非法";
    return false;
  }
  //匹配到一个非数字字符，则返回false
  var expr = /\D/i;
  if (expr.test(phone)) {
    document.getElementById(id.name).innerHTML = "不能输入非数字字符";
    return false;
  }
  return true;
}

function checkEmail() {
  // 利用正则表达式对输入数据匹配
  var id = document.getElementById("EMAIL")
  var email = id.value;
  //以字母或数字开头，跟上@,字母数字以.com结尾
  var expr = /^([0-9]|[a-z])+@([0-9]|[a-z])+(\.[c][o][m])$/i;
  if (!expr.test(email)) {
    document.getElementById(id.name).innerHTML = "输入的邮箱格式有误";
    return false;
  }
  return true;
}

function checkIDNumber() {
  var id = document.getElementById("IDNUMBER");
  var IDNumber = id.value;
  var year = IDNumber.substring(0, 4);
  if (IDNumber.length == 0) {
    document.getElementById(id.name).innerHTML = "非山大同学无需输入";
    return false;
  }
  if (year > 2014 || year < 2006 || IDNumber.length != 12) {
    document.getElementById(id.name).innerHTML = "学号格式有误";
    return false;
  }
  return true;
}
