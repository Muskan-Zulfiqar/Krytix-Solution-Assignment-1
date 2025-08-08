document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const res = await fetch("https://os-project-server.vercel.app/auth/login",
        {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({email, password})
        }
    );


const data = await res.json();

if(data.token){
    localStorage.setItem("authToken", data.token);
    window.location.href = "dashboard.html";

}else{
    alert(data.message || "Login Failed");
}
});