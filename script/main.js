import { ANOMALIES } from "./anomalies.js"

const CONFIG = { MAX_STAGE: 8 }
let initHTML = ""
const gameState = { currentStage: 0, currentAnomaly: null }

function resetDOM() {
  // 変更されたDOM要素を正常状態にリセットする処理
  document.getElementById("game-root").innerHTML = initHTML
}

function updateUI() {
  resetDOM()
  document.getElementById("stage-number").textContent = gameState.currentStage + 1
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
  console.log("%cダメ～～～!", "font-size: 64px; color: red;")
  console.log("%cなんでココにいるの! エッチ! 変態!", "font-size: 24px")
  console.log("%cえ? すごかったから仕組みが知りたくて…?", "font-size: 20px")
  console.log("%cふ、ふ～ん… それなら… しょうがないから…", "font-size: 20px")
  console.log("%cみ、みてもいいよ…", "font-size: 14px")
  console.log("%c…", "font-size: 14px")
  console.log("%cあ! でも変なことしたら許さないからね!", "font-size: 24px")

  initHTML = document.getElementById("game-root").innerHTML

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
