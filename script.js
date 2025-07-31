
 // DOM yüklendiğinde çalışacak fonksiyonlar
 document.addEventListener('DOMContentLoaded', function() {
     initializeTheme();
     initializeAnimations();
     initializeSocialLinks();
     initializeProfileImage();
 });
 
 // Tema yönetimi
 function initializeTheme() {
     const themeToggle = document.getElementById('themeToggle');
     const currentTheme = localStorage.getItem('theme') || 'light';
     
     // Başlangıç temasını ayarla
     document.documentElement.setAttribute('data-theme', currentTheme);
     updateThemeIcon(currentTheme);
     
     // Tema değiştirme butonu
     themeToggle.addEventListener('click', function() {
         const currentTheme = document.documentElement.getAttribute('data-theme');
         const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
         
         // Geçiş animasyonu
         document.body.style.transition = 'all 0.3s ease';
         
         document.documentElement.setAttribute('data-theme', newTheme);
         localStorage.setItem('theme', newTheme);
         updateThemeIcon(newTheme);
         
         // Butona tıklama efekti
         themeToggle.style.transform = 'scale(0.9)';
         setTimeout(() => {
             themeToggle.style.transform = 'scale(1)';
         }, 150);
     });
 }
 
 function updateThemeIcon(theme) {
     const themeIcon = document.querySelector('#themeToggle i');
     if (theme === 'dark') {
         themeIcon.className = 'fas fa-sun';
     } else {
         themeIcon.className = 'fas fa-moon';
     }
 }
 
 // Sosyal medya bağlantıları için etkileşimler
 function initializeSocialLinks() {
     const socialLinks = document.querySelectorAll('.social-link');
     
     socialLinks.forEach(link => {
         // Hover efektleri
         link.addEventListener('mouseenter', function() {
             this.style.transform = 'translateY(-3px) scale(1.02)';
         });
         
         link.addEventListener('mouseleave', function() {
             this.style.transform = 'translateY(0) scale(1)';
         });
         
         // Tıklama efekti
         link.addEventListener('mousedown', function() {
             this.style.transform = 'translateY(-1px) scale(0.98)';
         });
         
         link.addEventListener('mouseup', function() {
             this.style.transform = 'translateY(-3px) scale(1.02)';
         });
         
         // Tıklama istatistikleri (konsola yazdır)
         link.addEventListener('click', function(e) {
             const platform = this.getAttribute('data-platform');
             console.log(`${platform} bağlantısına tıklandı:`, this.href);
             
             // Görsel geri bildirim
             const ripple = createRippleEffect(e, this);
             this.appendChild(ripple);
             
             // E-posta bağlantısı için özel işlem
             if (this.classList.contains('email')) {
                 e.preventDefault();
                 const email = this.href.replace('mailto:', '');
                 if (navigator.clipboard) {
                     navigator.clipboard.writeText(email).then(() => {
                         showNotification('E-posta adresi kopyalandı!');
                     });
                 } else {
                     // Fallback: E-posta istemcisini aç
                     window.location.href = this.href;
                 }
             }
         });
     });
 }
 
 // Ripple efekti oluştur
 function createRippleEffect(event, element) {
     const ripple = document.createElement('span');
     const rect = element.getBoundingClientRect();
     const size = Math.max(rect.width, rect.height);
     const x = event.clientX - rect.left - size / 2;
     const y = event.clientY - rect.top - size / 2;
     
     ripple.style.cssText = `
         position: absolute;
         width: ${size}px;
         height: ${size}px;
         left: ${x}px;
         top: ${y}px;
         background: rgba(255, 255, 255, 0.3);
         border-radius: 50%;
         transform: scale(0);
         animation: ripple 0.6s ease-out;
         pointer-events: none;
         z-index: 1;
     `;
     
     // Ripple animasyonu
     const style = document.createElement('style');
     style.textContent = `
         @keyframes ripple {
             to {
                 transform: scale(2);
                 opacity: 0;
             }
         }
     `;
     document.head.appendChild(style);
     
     // Animasyon bitince ripple'ı kaldır
     setTimeout(() => {
         if (ripple.parentNode) {
             ripple.parentNode.removeChild(ripple);
         }
     }, 600);
     
     return ripple;
 }
 
 // Bildirim göster
 function showNotification(message) {
     // Mevcut bildirimi kaldır
     const existingNotification = document.querySelector('.notification');
     if (existingNotification) {
         existingNotification.remove();
     }
     
     const notification = document.createElement('div');
     notification.className = 'notification';
     notification.textContent = message;
     notification.style.cssText = `
         position: fixed;
         top: 20px;
         right: 20px;
         background: #10b981;
         color: white;
         padding: 12px 20px;
         border-radius: 12px;
         font-weight: 500;
         box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
         z-index: 1000;
         animation: slideInNotification 0.3s ease-out;
     `;
     
     // Bildirim animasyonu
     const style = document.createElement('style');
     style.textContent = `
         @keyframes slideInNotification {
             from {
                 transform: translateX(100%);
                 opacity: 0;
             }
             to {
                 transform: translateX(0);
                 opacity: 1;
             }
         }
     `;
     document.head.appendChild(style);
     
     document.body.appendChild(notification);
     
     // 3 saniye sonra kaldır
     setTimeout(() => {
         notification.style.animation = 'slideInNotification 0.3s ease-out reverse';
         setTimeout(() => {
             if (notification.parentNode) {
                 notification.parentNode.removeChild(notification);
             }
         }, 300);
     }, 3000);
 }
 
 // Profil resmi etkileşimleri
 function initializeProfileImage() {
     const profileImage = document.querySelector('.profile-image');
     const profileImg = document.getElementById('profileImg');
     
     // Profil resmine tıklama
     profileImage.addEventListener('click', function() {
         // Döndürme animasyonu
         this.style.transform = 'scale(1.05) rotate(360deg)';
         setTimeout(() => {
             this.style.transform = 'scale(1)';
         }, 600);
         
         console.log('Profil resmine tıklandı');
     });
     
     // Resim yükleme hatası durumu
     profileImg.addEventListener('error', function() {
         this.src = 'data:image/svg xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI CjxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiBmaWxsPSIjRjNGNEY2Ii8 CjxwYXRoIGQ9Ik03NSA3MEM4Mi4xNzk3IDcwIDg4IDY0LjE3OTcgODggNTdDODggNDkuODIwMyA4Mi4xNzk3IDQ0IDc1IDQ0QzY3LjgyMDMgNDQgNjIgNDkuODIwMyA2MiA1N0M2MiA2NC4xNzk3IDY3LjgyMDMgNzAgNzUgNzBaIiBmaWxsPSIjOUIxMDFDIi8 CjxwYXRoIGQ9Ik05OCA5OEg1MkM1MiA4Ni45NTQzIDYwLjk1NDMgNzggNzIgNzhINzhDODkuMDQ1NyA3OCA5OCA4Ni45NTQzIDk4IDk4WiIgZmlsbD0iIzlCMTAxQyIvPgo8L3N2Zz4K';
         console.log('Profil resmi yüklenemedi, varsayılan resim gösteriliyor');
     });
 }
 
 // Sayfa animasyonları
 function initializeAnimations() {
     // Sayfa yüklenme animasyonu
     const container = document.querySelector('.container');
     container.style.opacity = '0';
     container.style.transform = 'translateY(30px)';
     
     setTimeout(() => {
         container.style.transition = 'all 0.8s ease';
         container.style.opacity = '1';
         container.style.transform = 'translateY(0)';
     }, 100);
     
     // Scroll animasyonları (mobil için)
     window.addEventListener('scroll', throttle(handleScroll, 100));
 }
 
 // Scroll işleyici
 function handleScroll() {
     const scrolled = window.pageYOffset;
     const container = document.querySelector('.container');
     
     // Paralaks efekti (hafif)
     container.style.transform = `translateY(${scrolled * 0.1}px)`;
 }
 
 // Throttle fonksiyonu (performans için)
 function throttle(func, limit) {
     let inThrottle;
     return function() {
         const args = arguments;
         const context = this;
         if (!inThrottle) {
             func.apply(context, args);
             inThrottle = true;
             setTimeout(() => inThrottle = false, limit);
         }
     }
 }
 
 // Klavye erişilebilirliği
 document.addEventListener('keydown', function(e) {
     // Enter veya Space tuşu ile bağlantıları etkinleştir
     if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('social-link')) {
         e.preventDefault();
         e.target.click();
     }
     
     // ESC tuşu ile bildirimi kapat
     if (e.key === 'Escape') {
         const notification = document.querySelector('.notification');
         if (notification) {
             notification.remove();
         }
     }
 });
 
 // Performans izleme (geliştirme için)
 window.addEventListener('load', function() {
     if (performance.timing) {
         const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
         console.log(`Sayfa yükleme süresi: ${loadTime}ms`);
     }
 });
 
 // PWA desteği için service worker kaydı (opsiyonel)
 if ('serviceWorker' in navigator) {
     window.addEventListener('load', function() {
         // Service worker dosyası oluşturulursa buraya eklenebilir
         console.log('Service Worker desteği mevcut');
     });
 }