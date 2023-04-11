function back_to_top() {
  const scrollToTopBtn = document.createElement("button");
  scrollToTopBtn.textContent = "返回顶部";
  scrollToTopBtn.classList.add("scroll-to-top");

  // 添加点击事件监听器
  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // 将按钮添加到页面中的 body 元素中
  document.body.appendChild(scrollToTopBtn);

  // 添加样式以将按钮放在右下角
  scrollToTopBtn.style.position = "fixed";
  scrollToTopBtn.style.bottom = "20px";
  scrollToTopBtn.style.right = "20px";

  // 监听窗口的滚动事件
  window.addEventListener("scroll", function () {
    // 如果滚动位置小于 200 像素，则隐藏回到顶部按钮，否则显示它
    if (window.scrollY < 200) {
      scrollToTopBtn.style.display = "none";
    } else {
      scrollToTopBtn.style.display = "block";
    }
  });
}
