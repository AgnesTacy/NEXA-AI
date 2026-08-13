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

    if (question.includes("how can i get a girlfriend irl")) {

        response = `Getting a girlfriend isn't really about finding a specific trick or method. It's more about meeting people, getting to know them naturally, and building a genuine connection.

Try starting by:
• Talking to people in places you already go, such as school or clubs.
• Finding people who share your interests.
• Being friendly and actually listening when someone talks.
• Taking your time instead of immediately trying to turn a friendship into a relationship.
• Respecting their feelings if they aren't interested.

Most importantly, don't feel like you need a girlfriend to prove something about yourself. Focus on becoming someone who is comfortable talking to and respecting other people. Relationships tend to develop more naturally that way.`;

    }

    else if (question.includes("why is it hard socializing")) {

        response = `Socializing can be difficult for a lot of people because it requires several skills at once: starting conversations, thinking of what to say, reading reactions, and dealing with the possibility of being judged or misunderstood.

Some things that can make it easier are:
• Start with small conversations instead of trying to become close immediately.
• Ask questions about things the other person is interested in.
• Listen instead of worrying about what you're going to say next.
• Don't worry about making every conversation perfect.
• Practice talking to different people regularly.

Being awkward sometimes doesn't mean you're bad at socializing. Communication is a skill, and it can improve with practice.`;

    }

    else if (question.includes("why do people rely on ai nowadays")) {

        response = `People rely on AI nowadays because it is fast, convenient, and available almost anytime. AI can help people find information, explain difficult topics, brainstorm ideas, translate languages, write code, and automate repetitive tasks.

However, relying on AI too much can have disadvantages. People may stop practicing skills themselves or accept an answer without checking whether it is correct.

The best approach is to use AI as a tool rather than a replacement for your own thinking. You can use it to learn, explore ideas, and get assistance while still making your own decisions and checking important information.`;

    }

    else {

        response = `I'm Nexa, your AI assistant! I don't have a specific answer programmed for that question yet, but we're going to keep expanding my knowledge as we build the project.`;

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