export function initAccountingDashboard() {
  return {
    initCustomChart() {
      const bars = document.querySelectorAll(".animated-bar");
      setTimeout(() => {
        for (let i = 0; i < bars.length; i++) {
          const height = parseInt(bars[i].getAttribute("data-percent"));
          bars[i].style.height = height + "%";
          if (height < 50) {
            bars[i].classList.add("is-lower");
          }
        }
      }, 1200);
    },
  };
}
