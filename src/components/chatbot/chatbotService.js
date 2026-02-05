const API_KEY = "AIzaSyAGMMIafjtQTawT75lJmn2MS8PgMBCsMkU"; // Replace with your actual API key

export async function sendToGemini(prompt) {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`, // Ensure the URL is correct
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();
    console.log("Gemini raw response:", JSON.stringify(data, null, 2)); 

    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    return reply || "⚠️ Gemini didn't return a proper response."; 
  } catch (error) {
    console.error("Gemini API error:", error);
    return "❌ There was a problem talking to Gemini.";
  }
}
