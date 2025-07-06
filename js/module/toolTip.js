export default function initTolTip() {
  const toolTips = document.querySelectorAll("[data-tooltip]");

  toolTips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });

  function onMouseOver(e) {
    const toolTipBox = criarToolTipBox(this);

    onMouseMove.toolTipBox = toolTipBox;
    onMouseLeave.tooltipBox = toolTipBox;
    onMouseLeave.element = this;
    this.addEventListener("mouseleave", onMouseLeave);
    this.addEventListener("mousemove", onMouseMove);
  }

  const onMouseMove = {
    handleEvent(e) {
      this.toolTipBox.style.top = e.pageY + 20 + "px";
      this.toolTipBox.style.left = e.pageX + 20 + "px";
    },
  };

  const onMouseLeave = {
    tooltipBox: "",
    element: "",
    handleEvent() {
      this.tooltipBox.remove();
    },
  };

  function criarToolTipBox(e) {
    const tooltipBox = document.createElement("div");
    const text = e.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }
}
