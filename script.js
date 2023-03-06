const buttons = document.querySelectorAll(".buttons .btn");
const notifications = document.querySelector(".notifications");

const toastDetails = {
  timer: 5000,
  success: {
    icon: "fa fa-check-circle",
    text: "Success : This is success toast.",
  },
  error: {
    icon: "fa fa-xmark-circle",
    text: "Error: This is error toast.",
  },
  warning: {
    icon: "fa fa-triangle-exclamation",
    text: "Warning : This is warning toast.",
  },
  info: {
    icon: "fa fa-circle-info",
    text: "Info : This is info toast.",
  },
};
const removeToast = (toast) => {
  toast.classList.add("hide");
  if (toast.timeoutId) clearTimeout(toast.timeoutId);
  setTimeout(() => toast.remove(), 500);
};
const createToast = (id) => {
  const { icon, text } = toastDetails[id];

  const toast = document.createElement("li");
  toast.className = `toast ${id}`;

  toast.innerHTML = `<div class="column">
                                    <i class="${icon}"></i>
                                    <span>${text}</span>
                                    </div>
                                    <i class="fa fa-xmark" onclick="removeToast(this.parentElement)"></i>`;
  notifications.appendChild(toast);
  toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
};

buttons.forEach((btn) => {
  btn.addEventListener("click", () => createToast(btn.id));
});
