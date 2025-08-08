const token = localStorage.getItem("authToken");
if(!token){
    window.location.href = "index.html";
}

const userData = jwt_decode(token);
document.getElementById("userName").innerText = userData.name || "User";
document.getElementById("userEmail").innerText = userData.email || "";


document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("authToken");
    window.location.href = "index.html";
});