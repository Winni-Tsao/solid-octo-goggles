 

        var radNumer = [];//亂數產生身分證
        var UradNumer = [];//真正判斷
        var Gender = ""; //性別
        var city = "";//城市
        var idarray = new Array(); //要放輸入者的資料
        var idno = ''; //取出螢幕資料
        var firstNO = 0; //放第一個值
        var SecNO = 0;  //放第二個值
        var cheakarray = [8, 7, 6, 5, 4, 3, 2, 1];//要乘統一編號的2~9碼
        var num = new Array();//乘過的集合
        var num1 = new Array();//乘過後分解
        var total = 0;//計算乘過第一次的尾數總和
        var Copyinput;

        //亂數產生第3-9
        function rad() {

            for (let i = 0; i < 7; i++) {
                radNumer.push(Math.floor(Math.random() * 9));
            }
            for (const item of radNumer) {
                idno += item;
            }

        }

        function Rad_IDNO() {
            rad();
            IDNO();
            var ans1 = 10 - (Number(total % 10));
            var ans1a = paddingLeft1(String(ans1), 2);
            idno += ans1a;
            // alert(idno); 測試
            return idno;

        }
        function Cheak_IDNO() {
            IDNO();
            var ans1 = 10 - (Number(total % 10));
            var ans2 = idno.substr(9, 1);
            if (ans1 == 10) {
                ans1 = 0;
            }
            if (ans1 != ans2) {
                alert("有問題")

            }
            else
             {
               // alert("沒問題");
                return true;
             }
            
        }

        function start() //清空
        {

            radNumer = [];//亂數產生身分證
            UradNumer = [];//真正判斷
            Gender = ""; //性別
            city = "";//城市
            idarray = new Array(); //要放輸入者的資料
            idno = ''; //取出螢幕資料
            firstNO = 0; //放第一個值
            SecNO = 0;  //放第二個值
            num = new Array();//乘過的集合
            num1 = new Array();//乘過後分解
            total = 0;
        }


        //模組
        function IDNO() {
            for (var i = 0; i < 9; i++)//先讀出資料再做乘法
            {
                idarray[i] = idno.substr(i, 1);
                if (idarray[i] == idarray[0]) {
                    switch (idarray[0]) //確認第一個英文字的對應號碼
                    {
                        case "A": firstNO = 10; break; case "B": firstNO = 11; break;
                        case "C": firstNO = 12; break; case "D": firstNO = 13; break;
                        case "E": firstNO = 14; break; case "F": firstNO = 15; break;
                        case "G": firstNO = 16; break; case "H": firstNO = 17; break;
                        case "J": firstNO = 18; break; case "K": firstNO = 19; break;
                        case "L": firstNO = 20; break; case "M": firstNO = 21; break;
                        case "N": firstNO = 22; break; case "P": firstNO = 23; break;
                        case "Q": firstNO = 24; break; case "R": firstNO = 25; break;
                        case "S": firstNO = 26; break; case "T": firstNO = 27; break;
                        case "U": firstNO = 28; break; case "V": firstNO = 29; break;
                        case "X": firstNO = 30; break; case "Y": firstNO = 31; break;
                        case "W": firstNO = 32; break; case "Z": firstNO = 33; break;
                        case "I": firstNO = 34; break; case "O": firstNO = 35; break;
                    }
                    num.push(Number(String(firstNO).substr(0, 1)) * 1);//第一位號碼乘1
                    num.push(Number(String(firstNO).substr(1, 1)) * 9);//第二位號碼乘9
                }
                else//不是第一個英文字以外的2-9碼的乘法
                {
                    var number = Number(idarray[i]);
                    for (var j = i - 1; j < i; j++) {
                        var CheakNumbr = cheakarray[j];
                        num.push(number * CheakNumbr);//放乘過的集合
                    }
                }
            }
            for (var i = 0; i < num.length; i++) {

                var single = paddingLeft(String(num[i]), 2);
                var one = (Number(String(single).substr(0, 1)));
                var two = (Number(String(single).substr(1, 1)));
                total += two;

            }
        }

        //左邊分離
        function paddingLeft(str, lenght) {
            if (str.length >= lenght)
                return str;
            else
                return paddingLeft("0" + str, lenght);
        }

        function paddingLeft1(str, lenght) {
            if (str.length >= lenght)
                return 0;
            else
                return str;
        }
        //複製
        function copyText(node) {
            if (document.body.createTextRange) {
                var range = document.body.createTextRange();
                range.moveToElementText(node);
                range.select();
                document.execCommand("copy");
                alert("驗證及複製成功!");
            } else if (window.getSelection) {
                var selection = window.getSelection();
                var range = document.createRange();
                range.selectNodeContents(node);
                selection.removeAllRanges();
                selection.addRange(range);
                document.execCommand("copy");
                alert("驗證及複製成功!");
            } else {
                alert('驗證成功，但無法複製內容、瀏覽器不支援');       
            }
        }

        

       

        
   