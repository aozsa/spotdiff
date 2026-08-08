export const ANOMALIES = [
  {
    id: "HERO_TITLE_TYPO",
    apply: (doc) => {
      const el = doc.getElementById("target-hero-title")
      if (el) el.textContent = "絶望のビッグセール開催中…"
    },
  },
  {
    id: "IMAGE_UPSIDE_DOWN",
    apply: (doc) => {
      const el = doc.getElementById("target-img-1")
      if (el) el.classList.add("anomaly-upside-down")
    },
  },
  {
    id: "NEGATIVE_PRICE",
    apply: (doc) => {
      const el = doc.getElementById("target-price-1")
      if (el) {
        el.textContent = "¥ -99,999"
        el.classList.add("anomaly-red-text")
      }
    },
  },
  {
    id: "CREEPY_NOTICE",
    apply: (doc) => {
      const el = doc.getElementById("target-notice-text")
      if (el) el.textContent = "引き返してください。ここはあなたが居るべき場所ではありません。"
    },
  },
]
