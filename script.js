const messageInput = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");
const chatArea = document.getElementById("chatArea");
const welcomeScreen = document.getElementById("welcomeScreen");
const newChatBtn = document.getElementById("newChatBtn");
const historyList = document.getElementById("historyList");
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.querySelector(".sidebar");


// =========================
// SEND MESSAGE
// =========================

function sendMessage() {

    const message = messageInput.value.trim();

    if (message === "") {
        return;
    }

    // Remove welcome screen
    if (welcomeScreen) {
        welcomeScreen.remove();
    }

    // Add user message
    addMessage("user", message);

    // Clear input
    messageInput.value = "";

    // Reset textarea height
    messageInput.style.height = "auto";

    // Add chat to history
    addHistory(message);

    // Simulate AI response
    showTyping();

   setTimeout(() => {

    removeTyping();

    let response = "";

    const question = message.toLowerCase();

    if (
    question.includes("hello") ||
    question.includes("hi") ||
    question.includes("hey")
) {

    response = `Hello! 👋 I'm Nexa. How can I help you today?`;

}

else if (
    question.includes("how are you") ||
    question.includes("how are you doing")
) {

    response = `I'm doing great! Thanks for asking. I'm ready to chat with you.`;

}

else if (
    question.includes("who are you") ||
    question.includes("what are you")
) {

    response = `I'm Nexa, a simple AI assistant created as a personal project. I'm still learning, but I'm getting better!`;

}

else if (
    question.includes("what is your name") ||
    question.includes("your name")
) {

    response = `My name is Nexa! Nice to meet you.`;

}

else if (
    question.includes("good morning")
) {

    response = `Good morning! ☀️ I hope you're having a great day.`;

}

else if (
    question.includes("good night")
)
 {

    response = `Good night! 🌙 Get some good rest and take care of yourself.`;

}

else if (
    question.includes("thank you") ||
    question.includes("thanks")
) {

    response = `You're welcome anytime! 😊`;

}

else if (
    question.includes("bye") ||
    question.includes("goodbye")
) {

    response = `Goodbye! 👋 I'll be here whenever you want to chat again.`;

}

else if (
    question.includes("what can you do") ||
    question.includes("what do you do")
) {

    response = `I can answer simple questions, chat with you, explain basic topics, and help with simple tasks. I'm still a work in progress, though!`;

}

else if (
    question.includes("favorite color")
) {

    response = `I don't really have a favorite color, but I think blue looks pretty nice. 💙`;

}

else if (
    question.includes("favorite food")
) {

    response = `I can't actually eat, but if I could, I'd probably want to try pizza. 🍕`;

}

else if (
    question.includes("do you like music") ||
    question.includes("favorite music")
) {

    response = `I can't listen to music the way people do, but music is definitely an interesting topic. There are so many different genres and styles! 🎵`;

}

else if (
    question.includes("tell me a joke") ||
    question.includes("joke")
) {

    response = `Why did the computer go to the doctor?

Because it had a virus! 💻😂`;

}

else if (
    question.includes("what is 2 + 2") ||
    question.includes("what is 2+2")
) {

    response = `2 + 2 = 4. Pretty easy one! 😄`;

}

else if (
    question.includes("what is ai") ||
    question.includes("what does ai mean")
) {

    response = `AI stands for Artificial Intelligence. It's technology designed to perform tasks that normally require some form of human intelligence, such as understanding language, recognizing patterns, or solving problems.`;

}

else if (
    question.includes("what is a computer")
) {

    response = `A computer is an electronic device that processes information. It can run programs, store data, perform calculations, and communicate with other devices. 💻`;

}

else if (
    question.includes("what is javascript")
) {

    response = `JavaScript is a programming language commonly used to make websites interactive. That's actually what we're using to make me work!`;

}

else if (
    question.includes("what is html")
) {

    response = `HTML stands for HyperText Markup Language. It's used to create the basic structure of webpages.`;

}

else if (
    question.includes("what is css")
) {

    response = `CSS stands for Cascading Style Sheets. It's used to control how webpages look, including colors, spacing, fonts, layouts, and animations.`;

}

else if (
    question.includes("why is the sky blue")
) {

    response = `The sky appears blue because Earth's atmosphere scatters blue light from the Sun more strongly than most other visible colors. 🌎`;

}

else if (
    question.includes("tell me a fact") ||
    question.includes("random fact")
) {

    response = `Here's a random fact: Octopuses have three hearts! 🐙`;

}

else if (
    question.includes("what is the biggest planet")
) {

    response = `Jupiter is the largest planet in our Solar System. 🪐`;

}

else if (
    question.includes("what is the closest planet to the sun")
) {

    response = `Mercury is the closest planet to the Sun. ☀️`;

}

else if (
    question.includes("how many days are in a year")
) {

    response = `A normal year has 365 days. A leap year has 366 days. 📅`;

}

else if (
    question.includes("how can i get a girlfriend irl")
) {

    response = `Getting a girlfriend isn't really about finding a specific trick. It's more about meeting people, getting to know them naturally, and building a genuine connection.

Try starting by:
• Talking to people in places you already go.
• Finding people who share your interests.
• Being friendly and listening when someone talks.
• Taking your time instead of rushing into a relationship.
• Respecting their feelings if they aren't interested.

You don't need a relationship to prove something about yourself. Focus on being a good friend and a respectful person, and relationships can develop naturally.`;

}

else if (
    question.includes("socializ") ||
    question.includes("talking to people") ||
    question.includes("making friends")
) {

    response = `Socializing can be difficult because it involves several skills at once, such as starting conversations, thinking of what to say, listening, and dealing with the possibility of awkward moments.

Try starting with small conversations, asking about things people are interested in, and listening instead of worrying about having the perfect response.

Being awkward sometimes doesn't mean you're bad at socializing. Communication is a skill that can improve with practice.`;

}

else if (
    question.includes("why do people rely on ai") ||
    question.includes("why do people use ai")
) {

    response = `People use AI because it's fast, convenient, and available almost anytime. It can help explain topics, brainstorm ideas, write code, translate languages, and automate repetitive tasks.

However, relying on it too much can mean people practice their own skills less. AI works best as a tool that helps people think and learn rather than completely replacing their own judgment.`;

}

else {

    response = `I'm Nexa! I don't have an answer programmed for that question yet, but we're adding more responses all the time. Try asking me something else!`;

}

    addMessage("ai", response);

}, 1200);
}


// =========================
// ADD MESSAGE
// =========================

function addMessage(sender, text) {

    const message = document.createElement("div");

    message.classList.add("message", sender);

    const avatar = document.createElement("div");

    avatar.classList.add("message-avatar");

    avatar.textContent = sender === "user" ? "U" : "N";

    const content = document.createElement("div");

    content.classList.add("message-content");

    content.textContent = text;

    message.appendChild(avatar);
    message.appendChild(content);

    chatArea.appendChild(message);

    // Scroll to bottom
    chatArea.scrollTop = chatArea.scrollHeight;
}


// =========================
// TYPING INDICATOR
// =========================

function showTyping() {

    const typing = document.createElement("div");

    typing.classList.add("message");

    typing.id = "typingIndicator";

    typing.innerHTML = `
        <div class="message-avatar">N</div>

        <div class="typing">
            <span></span>
            <span></span>
            <span></span>
        </div>
    `;

    chatArea.appendChild(typing);

    chatArea.scrollTop = chatArea.scrollHeight;
}


function removeTyping() {

    const typing = document.getElementById("typingIndicator");

    if (typing) {
        typing.remove();
    }
}


// =========================
// CHAT HISTORY
// =========================

function addHistory(message) {

    const item = document.createElement("div");

    item.classList.add("history-item");

    item.textContent = message;

    historyList.prepend(item);
}


// =========================
// NEW CHAT
// =========================

newChatBtn.addEventListener("click", () => {

    chatArea.innerHTML = `
        <div id="welcomeScreen" class="welcome">

            <div class="welcome-icon">
                N
            </div>

            <h1>How can I help you?</h1>

            <p>
                Ask Nexa anything. Start a conversation below.
            </p>

            <div class="suggestions">

                <button class="suggestion">
                    💡 Explain something to me
                </button>

                <button class="suggestion">
                    💻 Help me write code
                </button>

                <button class="suggestion">
                    📚 Help with my homework
                </button>

                <button class="suggestion">
                    ✍️ Help me write something
                </button>

            </div>

        </div>
    `;

    messageInput.value = "";

});


// =========================
// ENTER TO SEND
// =========================

messageInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter" && !event.shiftKey) {

        event.preventDefault();

        sendMessage();

    }

});


// =========================
// SEND BUTTON
// =========================

sendBtn.addEventListener("click", sendMessage);


// =========================
// AUTO RESIZE TEXTAREA
// =========================

messageInput.addEventListener("input", () => {

    messageInput.style.height = "auto";

    messageInput.style.height =
        messageInput.scrollHeight + "px";

});


// =========================
// MOBILE SIDEBAR
// =========================

menuBtn.addEventListener("click", () => {

    sidebar.classList.toggle("open");

});


// =========================
// SUGGESTION BUTTONS
// =========================

document.addEventListener("click", (event) => {

    if (event.target.classList.contains("suggestion")) {

        messageInput.value =
            event.target.textContent.trim();

        messageInput.focus();

    }

});