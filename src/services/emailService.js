export async function sendReport(data) {
    try {
        const res = await fetch("http://localhost:8000/send-feedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        });

        if (!res.ok) throw new Error("Failed to send");

        return true;
    } catch (err) {
        console.error("Email error:", err);
        return false;
    }
}
