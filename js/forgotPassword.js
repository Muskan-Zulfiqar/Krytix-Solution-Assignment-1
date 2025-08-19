document.getElementById("forgotForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const messageEl = document.getElementById("message");

    try{
        const res = await fetch("https://os-project-server.vercel.app/auth/send-otp", {

            method: "POSt",
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify({email})
        });
        const data = await res.json();
        if(res.ok){
            messageEl.style.color = "green";
            messageEl.textContent = "OTP sent to your email";
            setTimeout(() =>{
                window.location.href = "resetPassword.html";
            }, 2000
            );
        
        }
        else {
            messageEl.style.color = "red";
            messageEl.textContent = data.message || "Failed to send reset email";
        }
    }
    catch(err){
        messageEl.style.color = "red";
        messageEl.textContent = "Error:" + err.message;
    }
});