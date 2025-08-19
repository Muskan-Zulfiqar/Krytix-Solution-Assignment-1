document.getElementById("registerForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const message = document.getElementById("message");
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if(password !== confirmPassword){
        message.textContent = "Password do not match!";
        return;
    }
    try{
        const res = await fetch("https://os-project-server.vercel.app/api/auth/newuser", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({name, email, password})
        });
        const data = await res.json();

        if(res.ok){
            message.style.color = "green";
            message.textContent = "Registration Successful! You can now Login.";
            document.getElementById("registerForm").reset();
        }
        else{
            message.style.color = "red";
            message.textContent = data.error || "Registration failed";
        }
    }catch (err) {
        message.style.color = "red";
        message.textContent = "Something went wrong. Try again.";
        console.error(err);
    }
});