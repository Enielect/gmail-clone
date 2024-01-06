let more = document.querySelector(".more");
let remaining = document.querySelector(".remaining");

more.addEventListener("click", () => {
  remaining.classList.toggle("hide");
});

const mails = [
  {
    address: "google@google.com",
    messageHeader: "New login to Twitter from ChromeMobileAndroid on Android ",
    messageBody:
      "- Are you a roboy",
    date: "Jun 22",
  },
  {
    address: "verify@x.com",
    messageHeader: "New login to Twitter from ChromeMobileAndroid on Android ",
    messageBody:
      "- We noticed a login",
    date: "Feb 04",
  },
  {
    address: "facebook@gmail.com",
    messageHeader: "New login to Twitter from ChromeMobileAndroid on Android ",
    messageBody:
      "- We noticed an activity on  account",
    date: "Nov 16",
  },
  {
    address: "verify@x.com",
    messageHeader: "New login to Twitter from ChromeMobileAndroid on Android ",
    messageBody:
      "- We noticed a login",
    date: "Aug 10",
  },
  {
    address: "linked@gmail.com",
    messageHeader: "New login to Twitter from ChromeMobileAndroid on Android ",
    messageBody:
      "- Merry Christ,as",
    date: "Aug 28",
  },
  {
    address: "verify@x.com",
    messageHeader: "New login to Twitter from ChromeMobileAndroid on Android ",
    messageBody:
      "- We noticed a login",
    date: "Aug 28",
  },
  {
    address: "verify@x.com",
    messageHeader: "New login to Twitter from ChromeMobileAndroid on Android ",
    messageBody:
      "- We noticed a login",
    date: "Aug 28",
  },
  {
    address: "verify@x.com",
    messageHeader: "New login to Twitter from ChromeMobileAndroid on Android ",
    messageBody:
      "- We noticed a login",
    date: "Aug 28",
  },
  {
    address: "verify@x.com",
    messageHeader: "New login to Twitter from ChromeMobileAndroid on Android ",
    messageBody:
      "- We noticed a login",
    date: "Aug 28",
  },
  {
    address: "verify@x.com",
    messageHeader: "New login to Twitter from ChromeMobileAndroid on Android ",
    messageBody:
      "- We noticed a login",
    date: "Aug 28",
  },
  {
    address: "verify@x.com",
    messageHeader: "New login to Twitter from ChromeMobileAndroid on Android ",
    messageBody:
      "- We noticed a login",
    date: "Aug 28",
  },
  {
    address: "verify@x.com",
    messageHeader: "New login to Twitter from ChromeMobileAndroid on Android ",
    messageBody:
      "- We noticed a login",
    date: "Aug 28",
  },
  {
    address: "verify@x.com",
    messageHeader: "New login to Twitter from ChromeMobileAndroid on Android ",
    messageBody:
      "- We noticed a login",
    date: "Aug 28",
  },
  {
    address: "verify@x.com",
    messageHeader: "New login to Twitter from ChromeMobileAndroid on Android ",
    messageBody:
      "- We noticed a login",
    date: "Aug 28",
  },
  {
    address: "verify@x.com",
    messageHeader: "New login to Twitter from ChromeMobileAndroid on Android ",
    messageBody:
      "- We noticed a login",
    date: "Aug 28",
  },
  {
    address: "verify@x.com",
    messageHeader: "New login to Twitter from ChromeMobileAndroid on Android ",
    messageBody:
      "- We noticed a login",
    date: "Aug 28",
  },
  {
    address: "verify@x.com",
    messageHeader: "New login to Twitter from ChromeMobileAndroid on Android ",
    messageBody:
      "- We noticed a login",
    date: "Aug 28",
  },
  {
    address: "verify@x.com",
    messageHeader: "New login to Twitter from ChromeMobileAndroid on Android ",
    messageBody:
      "- We noticed a login",
    date: "Aug 28",
  },
  {
    address: "verify@x.com",
    messageHeader: "New login to Twitter from ChromeMobileAndroid on Android ",
    messageBody:
      "- We noticed a login",
    date: "Aug 28",
  },
];

let inbox = document.querySelector(".complete-inbox");

for (let ele in mails) {
  let paragraph = document.createElement("p");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "info-checkbox";

  let icon = document.createElement("ion-icon");
  icon.setAttribute("name", "star-outline");
  icon.className = "star-icon";

  paragraph.appendChild(checkbox);
  paragraph.appendChild(icon);

  let keys = Object.keys(mails[ele]);

  for (let i = 0; i < 4; i++) {
    let span = document.createElement("span");
    span.className = "info-arrange";
    if (ele % 2 == 0) paragraph.classList.add("background-alt");
    span.appendChild(document.createTextNode(`${mails[ele][keys[i]]}`));
    paragraph.appendChild(span);
  }

  inbox.appendChild(paragraph);
}
