function startChat(context) {
    const chatContainer = document.getElementById("chat-container");
    chatContainer.style.display = "block";
    chatContainer.innerHTML = `
        <div id="chat-log">
            <p class="ai"><strong>AI:</strong> Hello! How can I assist you today?</p>
        </div>
        <input type="text" id="user-input" placeholder="Type your query here">
        <button onclick="processChat('${context}')">Send</button>
    `;
}

function processChat(context) {
    const userInput = document.getElementById("user-input").value.trim();
    if (!userInput) return;

    const chatLog = document.getElementById("chat-log");
    const response = getAIResponse(context, userInput);

    chatLog.innerHTML += `
        <p class="user"><strong>You:</strong> ${userInput}</p>
        <p class="ai"><strong>AI:</strong> ${response}</p>
    `;

    document.getElementById("user-input").value = ""; // Clear input
    chatLog.scrollTop = chatLog.scrollHeight; // Auto-scroll to the bottom
}

function getAIResponse(context, input) {
    input = input.toLowerCase();

    if (context === "customer") {
        if (input.includes("refund")) {
            return "I can definitely help you with a refund! Please provide your order number, and I'll check your refund status right away.";
        } else if (input.includes("delivery")) {
            return "I can help you track your order. Please share your tracking number, and I’ll find the latest delivery updates for you.";
        } else if (input.includes("problem")) {
            return "Sorry to hear you're facing an issue! Could you please describe the problem in more detail, and I'll do my best to assist you?";
        } else {
            return "I'm here to assist you with any customer service queries. Please feel free to elaborate on your issue.";
        }
    }

    if (context === "support") {
        if (input.includes("anxiety") || input.includes("nervous")) {
            return "It's okay to feel anxious sometimes. A few deep breaths can help you relax. Would you like me to share some calming exercises?";
        } else if (input.includes("lonely")) {
            return "I'm really sorry you're feeling lonely. I'm here for you. Would you like to talk about it or hear some uplifting quotes?";
        } else if (input.includes("stress")) {
            return "Stress is tough to manage, but you're not alone in this. Would you like some stress-reducing tips or just to chat about how you're feeling?";
        } else {
            return "I'm here to listen. Let me know what's going on, and we can talk through it together.";
        }
    }

    if (context === "companion") {
        if (input.includes("joke")) {
            return "Here’s a fun one: Why don't skeletons ever fight each other? They don’t have the guts! 😄";
        } else if (input.includes("movie")) {
            return "I love talking about movies! What genre do you like? I'm happy to recommend something based on your taste!";
        } else if (input.includes("hobby")) {
            return "I think hobbies are a great way to express yourself. What do you enjoy doing in your free time? I’d love to hear about it!";
        } else {
            return "I’m your friendly AI companion, here to chat anytime! Let’s talk about whatever’s on your mind.";
        }
    }

    return "I didn’t quite understand that. Could you try asking in a different way?";
}
