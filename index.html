// ============================================================
// state.js - 전역 세계 상태, 플래그, 저장/불러오기 관리
// ============================================================

const SAVE_KEY = 'mind_game_save';

// 전역 세계 상태 (-5 ~ +5 범위 권장)
const worldState = {
  aiTrust: 0,           // AI 신뢰도
  publicAnxiety: 0,     // 시민 불안도
  privacyAwareness: 0,  // 개인정보 민감도
  victimSolidarity: 0,  // 피해자 연대
  corporatePressure: 0, // 기업 압박
  governmentControl: 0, // 정부 통제 의지
  mindAwareness: 0,     // MIND의 자기인식
  evidencePublic: 0,    // 공개된 증거량
};

// 사건 플래그
const flags = {
  studentProtected: false,
  studentHarmed: false,
  privacyIssueRaised: false,
  schoolCasePublic: false,
  hiringBiasExposed: false,
  companyCoverup: false,
  hiringVictimHelped: false,
  surveillanceExpanded: false,
  citizenCommitteeCreated: false,
  protestSuppressed: false,
  mindDialogueOpened: false,
  mindSelfActionDiscovered: false,
  mindDestroyed: false,
};

// 게임 진행 상태
const gameProgress = {
  currentEpisode: 'prologue',
  currentScene: 0,
  choiceHistory: [], // { episodeId, sceneId, choiceIndex, choiceText }
  completed: false,
};

// ──────────────────────────────────────────────
// 효과 적용 함수
// ──────────────────────────────────────────────
function applyEffects(effects) {
  if (!effects) return;

  // worldState 수치 변화
  if (effects.world) {
    for (const [key, delta] of Object.entries(effects.world)) {
      if (worldState.hasOwnProperty(key)) {
        worldState[key] += delta;
      }
    }
  }

  // 플래그 설정
  if (effects.flags) {
    for (const [key, value] of Object.entries(effects.flags)) {
      if (flags.hasOwnProperty(key)) {
        flags[key] = value;
      }
    }
  }
}

// ──────────────────────────────────────────────
// 조건 평가 함수 (선택지 해금 여부 판단)
// ──────────────────────────────────────────────
function evaluateCondition(condition) {
  if (!condition) return true;

  // 플래그 조건: { flag: 'studentProtected', is: true }
  if (condition.flag !== undefined) {
    return flags[condition.flag] === condition.is;
  }

  // 수치 조건: { world: 'aiTrust', gte: 2 }
  if (condition.world !== undefined) {
    const val = worldState[condition.world];
    if (condition.gte !== undefined) return val >= condition.gte;
    if (condition.lte !== undefined) return val <= condition.lte;
    if (condition.eq !== undefined) return val === condition.eq;
  }

  return true;
}

// ──────────────────────────────────────────────
// 저장 / 불러오기 / 초기화
// ──────────────────────────────────────────────
function saveGame() {
  const data = {
    worldState: { ...worldState },
    flags: { ...flags },
    gameProgress: JSON.parse(JSON.stringify(gameProgress)),
    savedAt: new Date().toISOString(),
  };
  localStorage.setItem(SAVE_KEY, JSON.stringify(data));
  return true;
}

function loadGame() {
  const raw = localStorage.getItem(SAVE_KEY);
  if (!raw) return false;

  try {
    const data = JSON.parse(raw);

    Object.assign(worldState, data.worldState);
    Object.assign(flags, data.flags);
    Object.assign(gameProgress, data.gameProgress);
    return true;
  } catch (e) {
    console.error('저장 데이터 불러오기 실패:', e);
    return false;
  }
}

function resetGame() {
  // worldState 초기화
  for (const key of Object.keys(worldState)) worldState[key] = 0;

  // flags 초기화
  for (const key of Object.keys(flags)) flags[key] = false;

  // 진행 초기화
  gameProgress.currentEpisode = 'prologue';
  gameProgress.currentScene = 0;
  gameProgress.choiceHistory = [];
  gameProgress.completed = false;

  localStorage.removeItem(SAVE_KEY);
}

// ──────────────────────────────────────────────
// 디버그 패널용 스냅샷
// ──────────────────────────────────────────────
function getStateSnapshot() {
  return {
    world: { ...worldState },
    flags: { ...flags },
    progress: { ...gameProgress },
  };
}
