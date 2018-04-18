
function tdisoper(f0, f1, f2, f3) {
  this[0] = f0;
  this[1] = f1;
  this[2] = f2;
  this[3] = f3;
}

var disoper = new tdisoper("-", "+", "/", "*");

function oper(f, m, n) {
  if (f == 3) return (m * n);
  if (f == 2) return (m / n);
  if (f == 1) return (parseFloat(m) + parseFloat(n));
  if (f == 0) return (m - n);
}

function tb(i1, i2, i4, i8) {
  this[1] = i1;
  this[2] = i2;
  this[4] = i4;
  this[8] = i8;
}

function get24(num1, num2, num3, num4) {
  var n = 1;//最多答案行数
  var b = new tb(num1, num2, num3, num4);
  var k = 0;
  var result = "";
  for (var i1 = 1; i1 <= 8; i1 *= 2)
    for (var i2 = 1; i2 <= 8; i2 *= 2)
      for (var i3 = 1; i3 <= 8; i3 *= 2)
        for (var i4 = 1; i4 <= 8; i4 *= 2) {
          if ((i1 | i2 | i3 | i4) != 0xf) continue;
          for (var f1 = 0; f1 <= 3; f1++)
            for (var f2 = 0; f2 <= 3; f2++)
              for (var f3 = 0; f3 <= 3; f3++) {
                var m = oper(f3, oper(f2, oper(f1, b[i1], b[i2]), b[i3]), b[i4]);
                if (Math.abs(m - 24) < 1e-5) {
                  result = result + "((" + b[i1] + disoper[f1] + b[i2] + ")" + disoper[f2] + b[i3] + ")" + disoper[f3] + b[i4] + "\n";
                  if ((n != 0) && (++k >= n)) return result;
                }
                m = oper(f1, b[i1], oper(f3, oper(f2, b[i2], b[i3]), b[i4]));
                if (Math.abs(m - 24) < 1e-5) {
                  result = result + b[i1] + disoper[f1] + "((" + b[i2] + disoper[f2] + b[i3] + ")" + disoper[f3] + b[i4] + ")\n";
                  if ((n != 0) && (++k >= n)) return result;
                }
                m = oper(f3, oper(f1, b[i1], oper(f2, b[i2], b[i3])), b[i4]);
                if (Math.abs(m - 24) < 1e-5) {
                  result = result + "(" + b[i1] + disoper[f1] + "(" + b[i2] + disoper[f2] + b[i3] + "))" + disoper[f3] + b[i4] + "\n";
                  if ((n != 0) && (++k >= n)) return result;
                }
                m = oper(f1, b[i1], oper(f2, b[i2], oper(f3, b[i3], b[i4])));
                if (Math.abs(m - 24) < 1e-5) {
                  result = result + b[i1] + disoper[f1] + "(" + b[i2] + disoper[f2] + "(" + b[i3] + disoper[f3] + b[i4] + "))\n";
                  if ((n != 0) && (++k >= n)) return result;
                }
                m = oper(f2, oper(f1, b[i1], b[i2]), oper(f3, b[i3], b[i4]));
                if (Math.abs(m - 24) < 1e-5) {
                  result = result + "(" + b[i1] + disoper[f1] + b[i2] + ")" + disoper[f2] + "(" + b[i3] + disoper[f3] + b[i4] + ")\n";
                  if ((n != 0) && (++k >= n)) return result;
                }

              }
        }
  //result = result + "----找全了!----\n"
  return result;
}

function RandomNumBoth(Min, Max) {
  var Range = Max - Min;
  var Rand = Math.random();
  var num = Min + Math.round(Rand * Range); //四舍五入
  return num;
}

module.exports = {
  get24: get24,
  RandomNumBoth: RandomNumBoth
}