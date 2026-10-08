const chatContainer = document.getElementById("chat-container");

const chatToggle = document.getElementById("chat-toggle");

const closeChat = document.getElementById("close-chat");


/* Open / Close chatbot */

chatToggle.addEventListener("click", function () {

    chatContainer.style.display = "flex";

    chatToggle.style.display = "none";

});


closeChat.addEventListener("click", function () {

    chatContainer.style.display = "none";

    chatToggle.style.display = "block";

});
