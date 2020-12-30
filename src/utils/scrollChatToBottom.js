export default function scrollChatToBottom() {
  let chat = document.getElementById("chat");
  chat.scrollTop = chat.scrollHeight;
}
