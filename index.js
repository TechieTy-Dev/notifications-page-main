const unReadMessages = document.querySelectorAll(".unread");
const unread =document.getElementById("num-notifs");
const markAllRead = document.getElementById("mark_all");
const toggleRedDot = document.querySelectorAll(".red-dot");

unread.innerText = unReadMessages.length;

unReadMessages.forEach((message) => {
    message.addEventListener("click", ()=>{
        message.classList.remove("unread");
        toggleRedDot.classList.remove("red-dot");
        const newUnreadMessages=document.querySelectorAll(".unread");
        unread.innerText=newUnreadMessages.length;
    })
})

markAllRead.addEventListener("click", () => {
    unReadMessages.forEach((message) =>{
        message.classList.remove("unread");
        toggleRedDot.classList.remove("red-dot")
    })
    const newUnreadMessages=document.querySelectorAll(".unread");
    unread.innerText=newUnreadMessages.length;
})