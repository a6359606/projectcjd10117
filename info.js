
// 導覽切換卡片顯示（簡易版本）
const navItems = document.querySelectorAll('.country-nav li');
const cardGroups = document.querySelectorAll('.card-group');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    const country = item.dataset.country;

    navItems.forEach(nav => nav.classList.remove('active'));
    item.classList.add('active');

    cardGroups.forEach(group => {
      if (group.dataset.country === country) {
        group.style.display = 'flex';
      } else {
        group.style.display = 'none';
      }
    });
  });
});
