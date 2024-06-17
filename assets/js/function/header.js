/** header 部分 js */

// header 显示/隐藏
(() => {
  // 滚动标准
  const scrollStandard = 20;
  // 是否首次加载 !0 == true
  let isFirstLoad = !0;
  // 最后一次位置
  let lastScrollTop = 0;
  window.addEventListener("scroll", () => {
    // 第一次不处理
    if (isFirstLoad) {
      isFirstLoad = false;
      return;
    }

    // 当前位置
    const scrollTop = document.documentElement.scrollTop;
    // 滚动距离不达标不处理
    if (Math.abs(scrollTop - lastScrollTop) < scrollStandard) return;
    // 是否向下滚动
    const isScrollDown = scrollTop > lastScrollTop;

    // 向下滚动时隐藏
    if (isScrollDown) El_Header.classList.add("hide");
    else El_Header.classList.remove("hide");

    // 重置滚动位置
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
})();

// 记录/加载菜单滚动位置(考虑直接写到html中，避免屏闪)
(() => {
  const menu = document.getElementById("menu");
  if (menu) {
    menu.scrollLeft = localStorage.getItem("menuScrollPosition");
    menu.addEventListener("scroll", () => localStorage.setItem("menuScrollPosition", menu.scrollLeft));
  }
})();

// 主题管理
(() => {
  // 主题切换按钮
  const themeToggle = document.getElementById("themeToggle");
  // 长按定时器
  let pressTimer;
  // 长按标记
  let isLongPress = false;
  // 开始计时
  function startTimer(e) {
    pressTimer = setTimeout(() => {
      isLongPress = true;
      El_Root.className = ThemeColor.Auto;
      localStorage.removeItem(ThemeColorKey);
    }, 1000);
  }
  // 清除计时
  function cancelTimer(e) {
    clearTimeout(pressTimer);
  }
  if (themeToggle) {
    // 切换
    themeToggle.addEventListener("click", (e) => {
      // 如果时长按
      if (isLongPress) {
        isLongPress = false;
        e.stopPropagation();
        return;
      }
      // 计算切换后的主题颜色
      let themeColor = ThemeColor.Light;
      if (El_Root.classList.contains(ThemeColor.Auto)) themeColor = MediaColor_Light.matches ? ThemeColor.Dark : ThemeColor.Light;
      else if (El_Root.classList.contains(ThemeColor.Light)) themeColor = ThemeColor.Dark;
      // 设置主题颜色
      El_Root.className = themeColor;
      // 持久化
      localStorage.setItem(ThemeColorKey, themeColor);
    });

    // 长按一秒切换成自动（跟随主题）
    // 按下
    themeToggle.addEventListener("mousedown", startTimer);
    themeToggle.addEventListener("touchstart", startTimer);
    // 松开
    themeToggle.addEventListener("mouseup", cancelTimer);
    themeToggle.addEventListener("mouseleave", cancelTimer);
    themeToggle.addEventListener("touchend", cancelTimer);
    themeToggle.addEventListener("touchcancel", cancelTimer);
  }
})();
