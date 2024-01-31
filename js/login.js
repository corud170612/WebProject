var urlParams = location.search.split(/[?&]/).slice(1).map(function(paramPair) {
    
    return paramPair.split(/=(.+)?/).slice(0, 2);

}).reduce(function(obj, pairArray) {

    obj[pairArray[0]] = pairArray[1];

    return obj;

}, {});

var usrId=urlParams.joinId;
var usrPw=urlParams.joinPw;
var usrPwch=urlParams.joinPwCheck;

function login(){
    var id=document.getElementById("loginId").value;
    var pw=document.getElementById("loginPw").value;

    if(id==usrId&&pw==usrPw){
        alert(id+"님 환영합니다")
    location.href="/Web_Proj/html/store.html"
    }
    else{
        alert("로그인 실패!아이디 또는 비밀번호가 틀렸습니다")
    }
}
