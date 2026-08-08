import { ANOMALIES } from "./anomalies.js"

const CONFIG = { MAX_STAGE: 8 }
const gameState = { currentStage: 0, currentAnomaly: null }

function resetDOM() {
  // 変更されたDOM要素を正常状態にリセットする処理
  const heroTitle = document.getElementById("target-hero-title")
  if (heroTitle) heroTitle.textContent = "夏のビッグセール開催中！"

  const img1 = document.getElementById("target-img-1")
  if (img1) img1.classList.remove("anomaly-upside-down")

  const price1 = document.getElementById("target-price-1")
  if (price1) {
    price1.textContent = "¥450"
    price1.classList.remove("anomaly-red-text")
  }

  const noticeText = document.getElementById("target-notice-text")
  if (noticeText)
    noticeText.textContent =
      "当店をご利用いただき誠にありがとうございます。安心・安全なショッピングをお楽しみいただけます。"
}

function updateUI() {
  resetDOM()
  document.getElementById("stage-number").textContent = gameState.currentStage
  if (gameState.currentAnomaly) {
    gameState.currentAnomaly.apply(document)
  }
}

function nextTurn() {
  // 初回は異変を発生させない
  // 50%の確率で異変発生
  const hasAnomaly = Math.random() < 0.5
  if (gameState.currentStage > 0 && hasAnomaly) {
    const i = Math.floor(Math.random() * ANOMALIES.length)
    gameState.currentAnomaly = ANOMALIES[i]
  } else {
    gameState.currentAnomaly = null
  }
  updateUI()
}

function handleChoice(playerThinksHasAnomaly) {
  const actualHasAnomaly = gameState.currentAnomaly !== null

  if (playerThinksHasAnomaly === actualHasAnomaly) {
    gameState.currentStage += 1
  } else {
    gameState.currentStage = 0 // 失敗でリセット
  }

  if (gameState.currentStage >= CONFIG.MAX_STAGE) {
    document.getElementById("clear-modal").showModal()
    return
  }

  nextTurn()
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn-normal").addEventListener("click", () => handleChoice(false))
  document.getElementById("btn-anomaly").addEventListener("click", () => handleChoice(true))

  document.getElementById("btn-restart").addEventListener("click", () => {
    gameState.currentStage = 0
    gameState.currentAnomaly = null
    document.getElementById("clear-modal").close()
    nextTurn()
  })

  nextTurn()
})
