import { ANOMALIES } from "./anomalies.js"

const CONFIG = { MAX_STAGE: 8 }
let initHTML = ""
const gameState = { currentStage: 0, currentAnomaly: null }

let isTransitioning = false

function resetDOM() {
  // 変更されたDOM要素を正常状態にリセットする処理
  document.getElementById("game-root").innerHTML = initHTML
}

function updateUI() {
  resetDOM()
  const gameRoot = document.getElementById("game-root")
  if (gameRoot) {
    gameRoot.scrollTop = 0
  }
  document.getElementById("stage-number").textContent = gameState.currentStage + 1
  if (gameState.currentAnomaly) {
    gameState.currentAnomaly.apply(document)
  }
}

function nextTurn() {
  // 初回（ステージ0）は異変を発生させない
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

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

async function handleChoice(playerThinksHasAnomaly) {
  if (isTransitioning) return
  isTransitioning = true

  const actualHasAnomaly = gameState.currentAnomaly !== null
  const isCorrect = playerThinksHasAnomaly === actualHasAnomaly

  // メッセージの決定
  let message = ""
  if (isCorrect) {
    message = playerThinksHasAnomaly ? "異変に気づいた。戻る" : "異変は無かった。次のページへ"
    gameState.currentStage += 1
  } else {
    message = playerThinksHasAnomaly ? "異変は無かった… ページ1に戻されます" : "異変を見落とした… ページ1に戻されます"
    gameState.currentStage = 0 // 失敗で最初に戻る
  }

  // 暗転演出の実行
  const overlay = document.getElementById("transition-overlay")
  const messageEl = document.getElementById("transition-message")

  overlay.className = `transition-overlay active ${isCorrect ? "correct" : "incorrect"}`
  messageEl.className = `transition-message ${isCorrect ? "correct-text" : "incorrect-text"}`
  messageEl.textContent = message

  // 1. フェードアウト（暗転完了まで待つ）
  await sleep(400)

  // 2. 完全に暗転した状態で画面を更新
  if (gameState.currentStage >= CONFIG.MAX_STAGE) {
    overlay.className = "transition-overlay"
    document.getElementById("clear-modal").showModal()
    isTransitioning = false
    return
  }

  nextTurn()

  // 3. 暗転状態を少し維持（状況把握・緊張感の演出）
  await sleep(450)

  // 4. フェードイン（画面が明るくなる）
  overlay.className = "transition-overlay"
  await sleep(350)

  isTransitioning = false
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("%cダメ～～～!", "font-size: 64px; color: red;")
  console.log("%cなんでココにいるの! エッチ! 変態!", "font-size: 24px")
  console.log("%cえ? すごかったから仕組みが知りたくて…?", "font-size: 20px")
  console.log("%cふ、ふ～ん… それなら… しょうがないから…", "font-size: 20px")
  console.log("%cみ、みてもいいよ…", "font-size: 14px")
  console.log("%c…", "font-size: 14px")
  console.log("%cあ! でも変なことしたら許さないからね!", "font-size: 24px")

  initHTML = document.getElementById("game-root").innerHTML

  const startModal = document.getElementById("start-modal")
  const btnStart = document.getElementById("btn-start")
  const btnShowRule = document.getElementById("btn-show-rule")

  // スタートモーダル・ルール確認の制御
  if (startModal) {
    startModal.showModal()
  }

  if (btnStart) {
    btnStart.addEventListener("click", () => {
      startModal.close()
    })
  }

  if (btnShowRule) {
    btnShowRule.addEventListener("click", () => {
      startModal.showModal()
    })
  }

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
