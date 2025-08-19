document.getElementById("resetForm").addEventListener("submit" , async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const otp = document.getElementById("otp").value;
    const newPassword = document.getElementById("newPassword").value;
    const messageEl = document.getElementById("message");

    try{
        const res = await fetch("https://os-project-server.vercel.app/auth/reset-password", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({email, otp, newPassword})
        });
        const data = await res.json();
        if(res.ok){
            messageEl.style.color = "green";
            messageEl.textContent = "Password reset successfully";
            setTimeout(() => {
                window.location.href = "index.html";
            }, 2000);
        }
        else{
            messageEl.style.color = "red";
            messageEl.textContent = data.message || "Failed to reset password";
        }
    }
    catch (err) {
        messageEl.style.color = "red";
        messageEl.textContent = "Error:" + err.message;
    }
});