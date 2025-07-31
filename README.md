# Link in Bio Sayfası

Modern ve mobil uyumlu bir "link in bio" sayfası. Bu proje, sosyal medya profillerinde kullanılmak üzere tasarlanmış, sade ve etkileyici bir kişisel sayfa oluşturur.

## ✨ Özellikler

- **Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm
- **Dark/Light Mode**: Kullanıcı tercihine göre tema değiştirme
- **Modern UI**: Gradient arka planlar ve smooth animasyonlar
- **Sosyal Medya Entegrasyonu**: Instagram, Twitter, GitHub, LinkedIn, YouTube ve e-posta bağlantıları
- **Etkileşimli Öğeler**: Hover efektleri, ripple animasyonları ve tıklama geri bildirimleri
- **Erişilebilirlik**: Klavye navigasyonu ve screen reader desteği
- **Performans Optimizasyonu**: Hızlı yükleme ve smooth animasyonlar

## 🚀 Kullanım

1. **Dosyaları İndirin**: Tüm dosyaları bilgisayarınıza indirin
2. **Kişiselleştirin**: `index.html` dosyasındaki bilgileri kendinize göre düzenleyin
3. **Bağlantıları Güncelleyin**: Sosyal medya bağlantılarınızı ekleyin
4. **Profil Fotoğrafını Değiştirin**: Kendi profil fotoğrafınızın URL'sini ekleyin

### Hızlı Test

```bash
# Python ile basit sunucu başlatın
python3 -m http.server 8000

# Tarayıcınızda şu adresi açın:
# http://localhost:8000
```

## 📁 Dosya Yapısı

```
link-in-bio/
├── index.html          # Ana HTML dosyası
├── style.css           # CSS stilleri ve responsive tasarım
├── script.js           # JavaScript etkileşimleri ve animasyonlar
└── README.md           # Bu dosya
```

## 🎨 Kişiselleştirme

### Profil Bilgilerini Değiştirme

`index.html` dosyasında şu bölümleri düzenleyin:

```html
<!-- Profil adı -->
<h1 class="profile-name">Sizin Adınız</h1>

<!-- Açıklama -->
<p class="profile-description">
    Sizin Mesleğiniz & Uzmanlığınız<br>
    Kısa bir açıklama yazın 🚀
</p>

<!-- Profil fotoğrafı -->
<img src="sizin-foto-url.jpg" alt="Profil Fotoğrafı" id="profileImg">
```

### Sosyal Medya Bağlantıları

Her bağlantının `href` özelliğini kendi hesaplarınızla değiştirin:

```html
<a href="https://instagram.com/sizin-kullanici-adi" target="_blank" class="social-link instagram">
    <i class="fab fa-instagram"></i>
    <span>Instagram</span>
    <i class="fas fa-external-link-alt"></i>
</a>
```

### Renk Temasını Değiştirme

`style.css` dosyasındaki CSS değişkenlerini düzenleyerek renkleri özelleştirebilirsiniz:

```css
:root {
    --bg-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --text-primary: #2d3748;
    /* Diğer renkler... */
}
```

## 🛠️ Teknik Detaylar

### Kullanılan Teknolojiler

- **HTML5**: Semantik yapı
- **CSS3**: Modern styling, Grid/Flexbox, CSS Variables
- **Vanilla JavaScript**: Etkileşimler ve animasyonlar
- **Font Awesome**: İkonlar
- **Google Fonts**: Inter font ailesi

### Tarayıcı Desteği

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performans

- Optimize edilmiş CSS ve JavaScript
- Lazy loading destekli
- Minimal external dependencies
- ~50KB toplam boyut

## 📱 Mobil Uyumluluk

Sayfa, mobil cihazlarda mükemmel çalışacak şekilde tasarlanmıştır:

- Touch-friendly buton boyutları
- Responsive typography
- Optimized spacing for mobile
- Swipe gestures support

## 🔧 Geliştirme

### Yeni Özellik Ekleme

1. **Yeni Sosyal Medya Platformu**:
   - HTML'e yeni link ekleyin
   - CSS'e platform rengini tanımlayın
   - JavaScript'te gerekli event listener'ları ekleyin

2. **Animasyon Ekleme**:
   - CSS keyframes kullanın
   - JavaScript ile trigger edin
   - Performance'ı göz önünde bulundurun

### Deployment

Bu statik dosyalar herhangi bir web hosting servisinde çalışır:

- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting
- Geleneksel web hosting

## 📄 Lisans

Bu proje açık kaynak kodludur ve kişisel kullanım için serbesttir.

## 🤝 Katkıda Bulunma

Önerileriniz ve katkılarınız için teşekkürler! Lütfen:

1. Fork yapın
2. Feature branch oluşturun
3. Değişikliklerinizi commit edin
4. Pull request gönderin

---

💡 **İpucu**: Sayfanızı sosyal medya profillerinizde paylaşmadan önce farklı cihazlarda test etmeyi unutmayın!
