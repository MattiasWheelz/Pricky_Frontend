const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

export async function sendReport(data) {
    try {
        const res = await fetch(`${API_BASE_URL}/send-feedback`, {
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