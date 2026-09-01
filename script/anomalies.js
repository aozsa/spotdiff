export const ANOMALIES = [
  {
    id: "HERO_TITLE_TYPO",
    apply(doc) {
      const el = doc.getElementById("target-hero-title")
      el.textContent = "絶望のビッグセール開催中…"
    },
  },
  {
    id: "IMAGE_UPSIDE_DOWN",
    apply(doc) {
      const el = doc.getElementById("target-img-1")
      el.style.transform = "rotate(180deg)"
      el.style.filter = "invert(1)"
    },
  },
  {
    id: "NEGATIVE_PRICE",
    apply(doc) {
      const el = doc.getElementById("target-price-1")
      el.textContent = "¥ -99,999"
      el.style.color = "red"
    },
  },
  {
    id: "CREEPY_NOTICE",
    apply(doc) {
      const el = doc.getElementById("target-notice-text")
      el.textContent = "引き返してください。ここはあなたが居るべき場所ではありません。"
    },
  },
  {
    id: "RED_BACKGROUND",
    apply(doc) {
      const el = doc.getElementById("main-content")
      el.style.backgroundColor = "red"
    },
  },
  {
    id: "HERO_TITLE_B64",
    apply(doc) {
      const el = doc.getElementById("target-hero-title")
      el.textContent = "5aSP44Gu44OT44OD44Kw44K744O844Or6ZaL5YKs5Lit77yB"
    },
  },
  {
    id: "HERO_TITLE_Z85",
    apply(doc) {
      const el = doc.getElementById("target-hero-title")
      el.textContent = "<!N%$FV!3=LJdpF<asI}G1H5}YYjTB(6vm?F#[4yT)-]N"
    },
  },
]
