let more = document.querySelector(".more");
let remaining = document.querySelector(".remaining");


more.addEventListener("click", () => {
  remaining.classList.toggle("hide");
});

const mails = [
  {
    address: "verify@x.com",
    messageHeader: "New login to Twitter from ChromeMobileAndroid on Android ",
    messageBody:
      "- We noticed a login to your account @enielect from a new device. Was t...",
    date: "Aug 28",
  },
  {
    address: "verify@x.com",
    messageHeader: "New login to Twitter from ChromeMobileAndroid on Android ",
    messageBody:
      "- We noticed a login to your account @enielect from a new device. Was t...",
    date: "Aug 28",
  },
  {
    address: "verify@x.com",
    messageHeader: "New login to Twitter from ChromeMobileAndroid on Android ",
    messageBody:
      "- We noticed a login to your account @enielect from a new device. Was t...",
    date: "Aug 28",
  },
  {
    address: "verify@x.com",
    messageHeader: "New login to Twitter from ChromeMobileAndroid on Android ",
    messageBody:
      "- We noticed a login to your account @enielect from a new device. Was t...",
    date: "Aug 28",
  },
  {
    address: "verify@x.com",
    messageHeader: "New login to Twitter from ChromeMobileAndroid on Android ",
    messageBody:
      "- We noticed a login to your account @enielect from a new device. Was t...",
    date: "Aug 28",
  },
  {
    address: "verify@x.com",
    messageHeader: "New login to Twitter from ChromeMobileAndroid on Android ",
    messageBody:
      "- We noticed a login to your account @enielect from a new device. Was t...",
    date: "Aug 28",
  },
  {
    address: "verify@x.com",
    messageHeader: "New login to Twitter from ChromeMobileAndroid on Android ",
    messageBody:
      "- We noticed a login to your account @enielect from a new device. Was t...",
    date: "Aug 28",
  },
  {
    address: "verify@x.com",
    messageHeader: "New login to Twitter from ChromeMobileAndroid on Android ",
    messageBody:
      "- We noticed a login to your account @enielect from a new device. Was t...",
    date: "Aug 28",
  },
  {
    address: "verify@x.com",
    messageHeader: "New login to Twitter from ChromeMobileAndroid on Android ",
    messageBody:
      "- We noticed a login to your account @enielect from a new device. Was t...",
    date: "Aug 28",
  },
  {
    address: "verify@x.com",
    messageHeader: "New login to Twitter from ChromeMobileAndroid on Android ",
    messageBody:
      "- We noticed a login to your account @enielect from a new device. Was t...",
    date: "Aug 28",
  },
  {
    address: "verify@x.com",
    messageHeader: "New login to Twitter from ChromeMobileAndroid on Android ",
    messageBody:
      "- We noticed a login to your account @enielect from a new device. Was t...",
    date: "Aug 28",
  },
  {
    address: "verify@x.com",
    messageHeader: "New login to Twitter from ChromeMobileAndroid on Android ",
    messageBody:
      "- We noticed a login to your account @enielect from a new device. Was t...",
    date: "Aug 28",
  },
  {
    address: "verify@x.com",
    messageHeader: "New login to Twitter from ChromeMobileAndroid on Android ",
    messageBody:
      "- We noticed a login to your account @enielect from a new device. Was t...",
    date: "Aug 28",
  },
  {
    address: "verify@x.com",
    messageHeader: "New login to Twitter from ChromeMobileAndroid on Android ",
    messageBody:
      "- We noticed a login to your account @enielect from a new device. Was t...",
    date: "Aug 28",
  },
  {
    address: "verify@x.com",
    messageHeader: "New login to Twitter from ChromeMobileAndroid on Android ",
    messageBody:
      "- We noticed a login to your account @enielect from a new device. Was t...",
    date: "Aug 28",
  },
  {
    address: "verify@x.com",
    messageHeader: "New login to Twitter from ChromeMobileAndroid on Android ",
    messageBody:
      "- We noticed a login to your account @enielect from a new device. Was t...",
    date: "Aug 28",
  },
  {
    address: "verify@x.com",
    messageHeader: "New login to Twitter from ChromeMobileAndroid on Android ",
    messageBody:
      "- We noticed a login to your account @enielect from a new device. Was t...",
    date: "Aug 28",
  },
  {
    address: "verify@x.com",
    messageHeader: "New login to Twitter from ChromeMobileAndroid on Android ",
    messageBody:
      "- We noticed a login to your account @enielect from a new device. Was t...",
    date: "Aug 28",
  },
  {
    address: "verify@x.com",
    messageHeader: "New login to Twitter from ChromeMobileAndroid on Android ",
    messageBody:
      "- We noticed a login to your account @enielect from a new device. Was t...",
    date: "Aug 28",
  }
];

let inbox = document.querySelector('.complete-inbox');

for (let ele of mails) {
  let paragraph = document.createElement("p");
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = 'info-checkbox'
  let icon = document.createElement("ion-icon");
  icon.setAttribute('name', 'star-outline');
  icon.className = 'star-icon';
  paragraph.appendChild(checkbox);
  paragraph.appendChild(icon);
  let keys = Object.keys(ele);
  for (let i = 0; i < 4; i++) {
    let span = document.createElement("span");
    span.className = "info-arrange";
    span.appendChild(document.createTextNode(`${ele[keys[i]]}`));
    paragraph.appendChild(span);
  }
  inbox.appendChild(paragraph)
}
