export const ANOMALIES = [
  // 1. タイトル・ヘッダー系
  {
    id: "HERO_TITLE_TYPO",
    apply(doc) {
      const el = doc.getElementById("target-hero-title")
      if (el) el.textContent = "絶望のビッグセール開催中…"
    },
  },
  {
    id: "HERO_SUB_CREEPY",
    apply(doc) {
      const el = doc.getElementById("target-hero-sub")
      if (el) el.textContent = "全品 貴方の命と引き換えに！今すぐチェック"
    },
  },
  {
    id: "LOGO_ICON_SKULL",
    apply(doc) {
      const el = doc.getElementById("target-logo-icon")
      if (el) el.textContent = "💀"
    },
  },
  {
    id: "LOGO_TEXT_CHANGE",
    apply(doc) {
      const el = doc.getElementById("target-logo-text")
      if (el) el.textContent = "TRAPPING MART"
    },
  },
  {
    id: "HERO_TITLE_B64",
    apply(doc) {
      const el = doc.getElementById("target-hero-title")
      if (el) el.textContent = "5aSP44Gu44OT44OD44Kw44K744O844Or6ZaL5YKs5Lit77yB"
    },
  },
  {
    id: "HERO_TITLE_Z85",
    apply(doc) {
      const el = doc.getElementById("target-hero-title")
      if (el) el.textContent = "<!N%$FV!3=LJdpF<asI}G1H5}YYjTB(6vm?F#[4yT)-]N"
    },
  },

  // 2. お知らせ・セクション見出し系
  {
    id: "CREEPY_NOTICE",
    apply(doc) {
      const el = doc.getElementById("target-notice-text")
      if (el) el.textContent = "引き返してください。ここはあなたが居るべき場所ではありません。"
    },
  },
  {
    id: "NOTICE_TITLE_WARNING",
    apply(doc) {
      const el = doc.getElementById("target-notice-title")
      if (el) {
        el.textContent = "⚠️ 緊急警報"
        el.style.color = "red"
      }
    },
  },
  {
    id: "SECTION_TITLE_WATCHING",
    apply(doc) {
      const el = doc.getElementById("target-section-title")
      if (el) el.textContent = "あなたを見つめる本日のおすすめ商品"
    },
  },

  // 3. 商品カード系（画像・名前・価格）
  {
    id: "IMAGE_UPSIDE_DOWN",
    apply(doc) {
      const el = doc.getElementById("target-img-1")
      if (el) {
        el.style.transform = "rotate(180deg)"
        el.style.filter = "invert(1)"
      }
    },
  },
  {
    id: "COFFEE_BECOMES_POISON",
    apply(doc) {
      const el = doc.getElementById("target-img-1")
      const name = doc.getElementById("target-name-1")
      if (el) el.textContent = "☠️"
      if (name) name.textContent = "毒薬ブレンドコーヒー"
    },
  },
  {
    id: "NEGATIVE_PRICE",
    apply(doc) {
      const el = doc.getElementById("target-price-1")
      if (el) {
        el.textContent = "¥ -99,999"
        el.style.color = "red"
      }
    },
  },
  {
    id: "COFFEE_CATEGORY_SACRIFICE",
    apply(doc) {
      const card = doc.getElementById("card-prod-1")
      const cat = card ? card.querySelector(".product-category") : null
      if (cat) {
        cat.textContent = "生贄用"
        cat.style.backgroundColor = "#ffcdd2"
        cat.style.color = "#b71c1c"
      }
    },
  },
  {
    id: "RUNNING_SHOES_NAME",
    apply(doc) {
      const el = doc.getElementById("target-name-2")
      if (el) el.textContent = "絶対に止まらない呪いのシューズ"
    },
  },
  {
    id: "REVIEWS_666",
    apply(doc) {
      const card = doc.getElementById("card-prod-2")
      if (card) {
        const rating = card.querySelector(".product-rating")
        if (rating) rating.innerHTML = "☆☆☆☆☆ <span class='review-count' style='color:red; font-weight:bold;'>(666)</span>"
      }
    },
  },
  {
    id: "HEADPHONE_BECOMES_RADIO",
    apply(doc) {
      const el = doc.getElementById("target-img-3")
      const name = doc.getElementById("target-name-3")
      if (el) el.textContent = "📻"
      if (name) name.textContent = "異界の電波を受信するラジオ"
    },
  },
  {
    id: "COLA_PRICE_ASTRONOMICAL",
    apply(doc) {
      const el = doc.getElementById("target-price-4")
      if (el) el.textContent = "¥ 9,999,990"
    },
  },
  {
    id: "BACKPACK_SHAKING",
    apply(doc) {
      const el = doc.getElementById("target-img-5")
      if (el) el.classList.add("anomaly-shaking")
    },
  },
  {
    id: "WATCH_TIME_ERROR",
    apply(doc) {
      const el = doc.getElementById("target-price-6")
      if (el) {
        el.textContent = "残り 00:00:00"
        el.style.color = "#c0392b"
        el.classList.add("anomaly-pulsing")
      }
    },
  },
  {
    id: "KEYBOARD_COFFIN",
    apply(doc) {
      const el = doc.getElementById("target-img-7")
      const name = doc.getElementById("target-name-7")
      if (el) el.textContent = "⚰️"
      if (name) name.textContent = "静音メカニカル棺桶"
    },
  },
  {
    id: "PLANT_BECOMES_WOOD",
    apply(doc) {
      const el = doc.getElementById("target-img-8")
      const name = doc.getElementById("target-name-8")
      if (el) el.textContent = "🪵"
      if (name) name.textContent = "完全に枯れたパキラ"
    },
  },

  // 4. 全体ビジュアル・演出系
  {
    id: "RED_BACKGROUND",
    apply(doc) {
      const el = doc.getElementById("main-content")
      if (el) el.style.backgroundColor = "#ffebee"
      const hero = doc.getElementById("target-hero-banner")
      if (hero) hero.style.background = "linear-gradient(135deg, #b71c1c, #4a148c)"
    },
  },
  {
    id: "DARK_MATRIX_MODE",
    apply(doc) {
      const el = doc.getElementById("main-content")
      if (el) {
        el.style.backgroundColor = "#0d1117"
        el.style.color = "#39d353"
      }
      doc.querySelectorAll(".product-card").forEach((card) => {
        card.style.backgroundColor = "#161b22"
        card.style.borderColor = "#30363d"
      })
      doc.querySelectorAll(".product-name").forEach((name) => {
        name.style.color = "#58a6ff"
      })
    },
  },
  {
    id: "ROTATED_PAGE",
    apply(doc) {
      const el = doc.getElementById("main-content")
      if (el) el.style.transform = "rotate(1.5deg)"
    },
  },
  {
    id: "FOOTER_CREEPY",
    apply(doc) {
      const el = doc.getElementById("target-footer-text")
      if (el) el.textContent = "☠️ 永遠に Shopping Mart. 逃げ場はありません。"
    },
  },
]

