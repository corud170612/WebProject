function login(){
    let id=document.getElementById("loginId").value;
    let pw=document.getElementById("loginPw").value;

    if(id=='corud'&&pw==1234){
            alert(id+"님 환영합니다")
        location.href="/Web_Proj/html/store.html"
    }
    else{
            alert("로그인 실패!아이디 또는 비밀번호가 틀렸습니다")
        
    }
}