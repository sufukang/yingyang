// 页面锚点跳转
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    // 切换active类
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
    // 锚点跳转
    const targetId = this.getAttribute('data-target');
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 40, // 可根据实际导航高度调整
        behavior: 'smooth'
      });
    }
  });
});

// 简单中英文切换（示例，实际可扩展为多语言配置）
const langSwitch = document.getElementById('lang-switch');
let isEn = false;
langSwitch.addEventListener('click', function() {
  isEn = !isEn;
  if (isEn) {
    switchToEn();
    langSwitch.textContent = 'Switch Language';
  } else {
    switchToZh();
    langSwitch.textContent = '切换语言';
  }
});

function switchToEn() {
  document.querySelector('.text_3').textContent = 'Why Choose InYoung';
  document.querySelector('.text_4').textContent = 'Our Team';
  document.querySelector('.text_5').textContent = 'Financing Progress';
  document.querySelector('.text_6').textContent = 'News';
  document.querySelector('.text_7').textContent = 'Contact Us';
  document.querySelector('.text_1').textContent = 'InYoung Tech';
  document.querySelector('.text_2').textContent = 'Know Nutrition, Balance Body & Mind';
  document.querySelector('.text_9').textContent = 'Beijing InYoung Tech';
  document.querySelector('.text_10').textContent = 'AIPrecisionNutritionBioelectricalMonitoring';
  document.querySelector('.text_18').textContent = 'Frontier Research';
  document.querySelector('.text_108').textContent = 'Our Team';
  document.querySelector('.text_130').textContent = 'Financing Progress';
  document.querySelector('.text_134').textContent = 'News';
  document.querySelector('.text_135').textContent = 'InYoung Tech Development History';
  document.querySelector('.text_159').textContent = 'E-MAIL';
  document.querySelector('.text_161').textContent = 'Phone';
  document.querySelector('.text_163').textContent = 'Address';
  document.querySelector('.text_165').textContent = 'Follow Us';
  document.querySelector('.text_160').textContent = 'Email: info@inyoung.online';
  document.querySelector('.text_162').textContent = 'Contact: 400-088-3376';
  document.querySelector('.text_164').textContent = 'Address: Shilong Economic Development Zone, Beijing';
}

function switchToZh() {
  document.querySelector('.text_3').textContent = '为什么选择盈养';
  document.querySelector('.text_4').textContent = '团队介绍';
  document.querySelector('.text_5').textContent = '融资进度';
  document.querySelector('.text_6').textContent = '动态信息';
  document.querySelector('.text_7').textContent = '联系我们';
  document.querySelector('.text_1').textContent = '盈养科技';
  document.querySelector('.text_2').textContent = '知盈养亏 身心守衡';
  document.querySelector('.text_9').textContent = '北京盈养科技';
  document.querySelector('.text_10').textContent = 'AI精准营养生物电监测';
  document.querySelector('.text_18').textContent = '前沿研究';
  document.querySelector('.text_108').textContent = '我们的团队';
  document.querySelector('.text_130').textContent = '融资进度';
  document.querySelector('.text_134').textContent = '动态信息';
  document.querySelector('.text_135').textContent = '盈养科技的发展历程';
  document.querySelector('.text_159').textContent = 'E-MAIL';
  document.querySelector('.text_161').textContent = '电话';
  document.querySelector('.text_163').textContent = '地址';
  document.querySelector('.text_165').textContent = '关注我们';
  document.querySelector('.text_160').textContent = '电子邮箱：info@inyoung.online';
  document.querySelector('.text_162').textContent = '联系方式：400-088-3376';
  document.querySelector('.text_164').textContent = '地址：北京市石龙经济开发区产业孵化中心';
} 