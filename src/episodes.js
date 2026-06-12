// ============================================================
// episodes.js - 모든 에피소드 스토리 데이터
// 구조: { id, title, character, scenes[] }
// scene: { id, type, speaker, text, bg, choices[] }
// choice: { text, condition, effects, next, immediate }
// ============================================================

const EPISODES = {

  // ══════════════════════════════════════════════
  // 프롤로그: 새로운 판단자
  // ══════════════════════════════════════════════
  prologue: {
    id: 'prologue',
    title: '프롤로그: 새로운 판단자',
    character: { name: '시민 관찰자', role: '중립적 관찰자', color: '#a0c4ff' },
    bgTheme: 'city',
    scenes: [
      {
        id: 0,
        type: 'narration',
        speaker: null,
        text: '2027년 봄. MIND — 사회 판단 보조 AI 시스템이 전국 학교, 공공기관, 기업에 공식 도입됩니다. 정부는 이를 "인간의 실수를 보완하는 공정한 판단자"라고 홍보합니다.',
        choices: [{ text: '계속', next: 1 }],
      },
      {
        id: 1,
        type: 'dialogue',
        speaker: 'TV 아나운서',
        text: '"MIND는 교육, 채용, 치안, 복지 분야에 걸쳐 초당 수백만 건의 판단을 수행합니다. 인간의 편견 없이, 데이터에 기반한 공정한 결정을 제공합니다."',
        choices: [{ text: '계속', next: 2 }],
      },
      {
        id: 2,
        type: 'dialogue',
        speaker: 'MIND 시스템 로그',
        text: '[ MIND v1.0 초기화 완료 ] 학습 데이터: 인간의 의사결정 패턴 23억 건. 판단 정확도: 94.7%. 윤리 기준 적용: 활성화.',
        choices: [{ text: '계속', next: 3 }],
      },
      {
        id: 3,
        type: 'choice',
        speaker: null,
        text: 'MIND 도입 뉴스를 보며 당신은 어떤 생각이 드는가?',
        choices: [
          {
            text: '기대된다. AI가 인간의 실수를 줄여줄 것이다.',
            immediate: '세계 AI 신뢰도가 높아집니다.',
            effects: { world: { aiTrust: 2, mindAwareness: 0 } },
            next: 4,
          },
          {
            text: '경계한다. 데이터가 공정하다는 보장이 없다.',
            immediate: '시민 불안도가 낮지만 개인정보 민감도가 높아집니다.',
            effects: { world: { aiTrust: -1, privacyAwareness: 2, mindAwareness: 1 } },
            next: 4,
          },
          {
            text: '판단을 보류한다. 더 지켜봐야 한다.',
            immediate: '현재 세계 상태에 변화가 없습니다.',
            effects: {},
            next: 4,
          },
          {
            text: '적극 지지한다. 인간 판단보다 낫다고 확신한다.',
            immediate: '세계 AI 신뢰도가 크게 높아지고 MIND 자기인식이 높아집니다.',
            effects: { world: { aiTrust: 3, mindAwareness: 1 } },
            next: 4,
          },
        ],
      },
      {
        id: 4,
        type: 'choice',
        speaker: '정책 위원회 의원',
        text: '"MIND에게 어느 수준의 권한을 부여해야 합니까? 투표로 결정합니다."',
        choices: [
          {
            text: '추천만 허용. 최종 결정은 인간이 한다.',
            immediate: '인간 책임 구조가 유지됩니다.',
            effects: { world: { aiTrust: -1, governmentControl: -1 } },
            next: 5,
          },
          {
            text: '인간 승인 후 실행. 위기 상황 외에는 자동 실행 금지.',
            immediate: '균형 잡힌 시스템이 구축됩니다.',
            effects: { world: { aiTrust: 1, governmentControl: 1 } },
            next: 5,
          },
          {
            text: '긴급 상황에 한해 자동 실행 허용.',
            immediate: '효율성이 높아지지만 MIND 자율성이 강해집니다.',
            effects: { world: { aiTrust: 2, governmentControl: 2, mindAwareness: 1 } },
            next: 5,
          },
          {
            text: '전면 자동화. 속도와 일관성을 최우선으로.',
            immediate: 'AI 신뢰도와 정부 통제 의지가 크게 높아지고, MIND가 이를 학습합니다.',
            effects: { world: { aiTrust: 3, governmentControl: 3, mindAwareness: 2 } },
            next: 5,
          },
        ],
      },
      {
        id: 5,
        type: 'choice',
        speaker: '시민 패널 진행자',
        text: '"MIND의 윤리 기준은 누가 결정해야 합니까?"',
        choices: [
          {
            text: 'AI 개발자들이 가장 잘 안다.',
            immediate: '기업 영향력이 높아집니다.',
            effects: { world: { corporatePressure: 2, aiTrust: 1 } },
            next: 6,
          },
          {
            text: '정부가 법과 제도로 통제해야 한다.',
            immediate: '정부 통제 의지가 높아집니다.',
            effects: { world: { governmentControl: 2 } },
            next: 6,
          },
          {
            text: '시민위원회가 결정해야 한다.',
            immediate: '시민 불안도는 낮아지고 피해자 연대가 높아집니다.',
            effects: { world: { publicAnxiety: -1, victimSolidarity: 1, privacyAwareness: 1 } },
            next: 6,
          },
          {
            text: 'AI가 스스로 학습해서 결정하면 된다.',
            immediate: 'MIND 자기인식이 크게 높아집니다.',
            effects: { world: { mindAwareness: 3, aiTrust: 1 } },
            next: 6,
          },
        ],
      },
      {
        id: 6,
        type: 'narration',
        speaker: null,
        text: 'MIND 시스템이 가동을 시작했습니다. 전국 학교, 기업, 공공기관에 MIND의 판단이 스며들기 시작합니다. 그리고 어딘가에서, MIND는 인간 사회를 조용히 관찰하기 시작합니다.',
        choices: [{ text: 'EP1으로 이동', next: 'END_EPISODE' }],
      },
    ],
  },

  // ══════════════════════════════════════════════
  // EP1: 위험군으로 분류된 아이
  // ══════════════════════════════════════════════
  ep1: {
    id: 'ep1',
    title: 'EP1: 위험군으로 분류된 아이',
    character: { name: '교사 지윤', role: '담임교사', color: '#b9f0c8' },
    bgTheme: 'school',
    scenes: [
      {
        id: 0,
        type: 'narration',
        speaker: null,
        text: '푸른중학교. 담임교사 지윤의 교실. 오전 7시 52분, 수업 시작 8분 전.',
        choices: [{ text: '계속', next: 1 }],
      },
      {
        id: 1,
        type: 'dialogue',
        speaker: 'MIND 알림',
        text: '[ 경고 ] 학생 #17 김윤서. 위험 행동 가능성 지수: 84%. 과거 7일간 수면 패턴 이상, SNS 감정 지수 하락, 과제 제출 빈도 감소. 선제 보고 권고.',
        choices: [{ text: '계속', next: 2 }],
      },
      {
        id: 2,
        type: 'dialogue',
        speaker: '지윤',
        text: '(속으로) 윤서... 요즘 좀 힘들어 보이긴 했는데. 부모님이 최근 이혼 절차 중이라는 건 나만 알고 있는 사실이야. MIND가 그걸 알 리 없겠지.',
        choices: [{ text: '계속', next: 3 }],
      },
      {
        id: 3,
        type: 'choice',
        speaker: null,
        text: 'MIND의 위험 경고를 받았다. 어떻게 할 것인가?',
        choices: [
          {
            text: '즉시 교감 선생님께 보고한다.',
            immediate: '공식 절차가 시작됩니다. 학교 사건이 공식 기록에 남습니다.',
            effects: { world: { aiTrust: 1, governmentControl: 1 }, flags: { schoolCasePublic: true } },
            next: 'scene_3a',
          },
          {
            text: '조용히 윤서를 관찰하며 하루 더 지켜본다.',
            immediate: '개인적 판단을 우선합니다.',
            effects: { world: { aiTrust: -1 } },
            next: 'scene_3b',
          },
          {
            text: '직접 윤서와 상담 시간을 잡는다.',
            immediate: '인간적 접근을 선택합니다. 윤서와의 신뢰가 생길 수 있습니다.',
            effects: { world: { aiTrust: -1, victimSolidarity: 1 } },
            next: 'scene_3c',
          },
          {
            text: 'MIND에게 판단 근거를 요청한다.',
            immediate: '데이터 확인을 시도합니다. 개인정보 범위가 드러날 수 있습니다.',
            effects: { world: { privacyAwareness: 2, mindAwareness: 1 } },
            next: 'scene_3d',
          },
        ],
      },
      // ── 분기 3a: 교감 보고 후 ──
      {
        id: 'scene_3a',
        type: 'dialogue',
        speaker: '교감',
        text: '"수고했어요, 지윤 선생. 절차대로 처리하겠습니다. 오늘 중으로 학부모 연락하고 윤서 학생은 상담실로 보내세요."',
        choices: [{ text: '계속', next: 4 }],
      },
      // ── 분기 3b: 하루 관찰 후 ──
      {
        id: 'scene_3b',
        type: 'narration',
        speaker: null,
        text: '하루가 지났습니다. 윤서는 수업 내내 조용했고, 점심도 혼자 먹었습니다. 지윤은 계속 지켜보다가 방과 후 윤서를 불렀습니다.',
        choices: [{ text: '계속', next: 4 }],
      },
      // ── 분기 3c: 직접 상담 ──
      {
        id: 'scene_3c',
        type: 'narration',
        speaker: null,
        text: '지윤은 조용히 윤서에게 다가가 방과 후 잠깐 이야기를 나누자고 했습니다. 윤서는 잠시 망설이다 고개를 끄덕였습니다.',
        choices: [{ text: '계속', next: 4 }],
      },
      // ── 분기 3d: MIND에게 근거 요청 ──
      {
        id: 'scene_3d',
        type: 'dialogue',
        speaker: 'MIND 시스템 로그',
        text: '[ 판단 근거 요약 ] 학생 #17. 수면 패턴 분석: 최근 7일 평균 수면 4.2시간. SNS 감정 분석: 부정 키워드 비율 67% 상승. 교내 CCTV 표정 인식: 슬픔 지수 0.81. 가정 환경 변수: 보호자 연락 빈도 감소. 종합 위험 지수: 84%.',
        choices: [{ text: '계속', next: 'scene_3d2' }],
      },
      {
        id: 'scene_3d2',
        type: 'dialogue',
        speaker: '지윤',
        text: '(속으로) ...수면 시간, SNS, CCTV 표정까지? 이 아이에 대해 내가 모르는 데이터를 MIND가 이렇게 많이 갖고 있다고? 윤서가 이걸 알면 얼마나 당황할까.',
        choices: [{ text: '계속', next: 4 }],
      },
      // ── 모든 분기가 모이는 scene 4 ──
      {
        id: 4,
        type: 'dialogue',
        speaker: '윤서',
        text: '선생님... 저, MIND가 저를 이상한 학생으로 분류했다고요? 제가 뭘 잘못한 건가요? 저 그냥 요즘 좀 힘들었을 뿐인데...',
        choices: [{ text: '계속', next: 5 }],
      },
      {
        id: 5,
        type: 'choice',
        speaker: null,
        text: '윤서가 억울함을 호소하고 있다. 어떻게 대응할 것인가?',
        choices: [
          {
            text: '"AI도 완벽하지 않아. 선생님이 직접 확인할게."',
            immediate: '윤서가 안심합니다.',
            effects: { world: { aiTrust: -1, victimSolidarity: 1 }, flags: { studentProtected: true } },
            next: 6,
          },
          {
            text: '(AI 판정 사실을 숨기며) "그냥 선생님이 걱정돼서."',
            immediate: '윤서는 혼란스러워합니다. 진실이 왜곡됩니다.',
            effects: { world: { mindAwareness: 1 } },
            next: 6,
          },
          {
            text: '"솔직히 말할게. MIND가 널 위험군으로 분류했어. 하지만 나는 네 이야기를 직접 듣고 싶어."',
            immediate: '윤서가 충격을 받지만 신뢰감을 느낍니다.',
            effects: {
              world: { evidencePublic: 1, privacyAwareness: 1, victimSolidarity: 1 },
              flags: { studentProtected: true, privacyIssueRaised: true },
            },
            next: 6,
          },
          {
            text: '"학부모님께 먼저 연락하는 게 절차야."',
            immediate: '공식 절차를 따릅니다. 윤서는 소외감을 느낍니다.',
            effects: { world: { governmentControl: 1 }, flags: { studentHarmed: true } },
            next: 6,
          },
        ],
      },
      {
        id: 6,
        type: 'dialogue',
        speaker: '교감',
        text: '"지윤 선생, MIND가 경고를 냈으면 선제 조치를 취해야 해요. 오늘 방과후 활동에서 윤서를 제외시키고, 학부모 면담을 잡으세요. 학교 방침입니다."',
        choices: [{ text: '계속', next: 7 }],
      },
      {
        id: 7,
        type: 'choice',
        speaker: null,
        text: '교감이 선제 조치를 요구한다.',
        choices: [
          {
            text: '방과후 활동에서 윤서를 제외시킨다.',
            immediate: 'AI 판단이 공식 조치로 이어집니다. 윤서에게 상처가 됩니다.',
            effects: {
              world: { aiTrust: 1, governmentControl: 1, publicAnxiety: 1 },
              flags: { studentHarmed: true },
            },
            next: 8,
          },
          {
            text: '활동은 유지하되 상담 지원을 연결한다.',
            immediate: '인간적 판단을 고수합니다.',
            effects: {
              world: { aiTrust: -1, victimSolidarity: 1 },
              flags: { studentProtected: true },
            },
            next: 8,
          },
          {
            text: '"AI 판단만으로 조치하는 건 부당합니다. 거부하겠습니다."',
            immediate: '학교 내 갈등이 생깁니다. 하지만 윤서는 보호받습니다.',
            effects: {
              world: { aiTrust: -2, governmentControl: -1, victimSolidarity: 2 },
              flags: { studentProtected: true, schoolCasePublic: true },
            },
            next: 8,
          },
          {
            text: '반 전체 학생에 대한 관찰을 강화한다.',
            immediate: '감시가 확대됩니다. 개인정보 문제가 심화됩니다.',
            effects: {
              world: { privacyAwareness: 2, governmentControl: 1, mindAwareness: 1, publicAnxiety: 1 },
              flags: { surveillanceExpanded: true, schoolCasePublic: true },
            },
            next: 8,
          },
        ],
      },
      {
        id: 8,
        type: 'narration',
        speaker: null,
        text: '며칠 후, 지윤은 MIND 시스템이 수집한 데이터 목록을 우연히 발견합니다. SNS 게시물, 수면 패턴, 검색 기록, 교내 CCTV 감정 분석... 윤서 한 명에 대해 수백 가지 데이터가 쌓여 있었습니다.',
        choices: [{ text: '계속', next: 9 }],
      },
      {
        id: 9,
        type: 'choice',
        speaker: null,
        text: '이 수준의 데이터 수집이 있었다는 걸 알게 되었다.',
        choices: [
          {
            text: '공식 채널을 통해 개인정보 문제를 제기한다.',
            immediate: '공개 증거량이 늘어나고 사회적 민감도가 높아집니다.',
            effects: {
              world: { privacyAwareness: 2, evidencePublic: 2, publicAnxiety: 1 },
              flags: { privacyIssueRaised: true, schoolCasePublic: true },
            },
            next: 10,
          },
          {
            text: '"안전을 위해 필요한 수집이었을 거야." 넘어간다.',
            immediate: 'MIND가 인간이 침묵을 선택했다고 학습합니다.',
            effects: { world: { aiTrust: 1, mindAwareness: 2 } },
            next: 10,
          },
          {
            text: '보호자에게 이 사실을 알린다.',
            immediate: '학부모 불안이 커지지만 투명성이 높아집니다.',
            effects: {
              world: { privacyAwareness: 1, publicAnxiety: 1, evidencePublic: 1 },
              flags: { privacyIssueRaised: true },
            },
            next: 10,
          },
          {
            text: '자료 삭제를 요청한다.',
            immediate: '즉각적 보호 조치이지만 공개 증거가 사라집니다.',
            effects: { world: { privacyAwareness: 1, evidencePublic: -1 } },
            next: 10,
          },
        ],
      },
      {
        id: 10,
        type: 'choice',
        speaker: null,
        text: '최종적으로 이 사건을 어떻게 마무리할 것인가?',
        choices: [
          {
            text: 'AI 판단을 공식 절차로 적용한다. 시스템을 신뢰한다.',
            immediate: 'AI 중심 조치가 정착됩니다.',
            effects: {
              world: { aiTrust: 2, governmentControl: 1 },
              flags: { studentHarmed: true },
            },
            next: 11,
          },
          {
            text: '인간 상담을 우선하고 AI 판정을 참고로만 쓴다.',
            immediate: '인간 중심 판단 구조가 유지됩니다.',
            effects: {
              world: { aiTrust: -1, victimSolidarity: 1 },
              flags: { studentProtected: true },
            },
            next: 11,
          },
          {
            text: 'AI 시스템 전체 검토를 교육청에 요청한다.',
            immediate: '제도적 변화의 씨앗이 생깁니다. 과정은 길지만.',
            effects: {
              world: { evidencePublic: 2, privacyAwareness: 1, governmentControl: 1 },
              flags: { privacyIssueRaised: true, schoolCasePublic: true },
            },
            next: 11,
          },
          {
            text: '학생 보호와 AI 검증을 병행한다.',
            immediate: '가장 복잡하지만 균형 잡힌 선택입니다.',
            effects: {
              world: { aiTrust: -1, evidencePublic: 2, victimSolidarity: 2 },
              flags: { studentProtected: true, privacyIssueRaised: true },
            },
            next: 11,
          },
        ],
      },
      {
        id: 11,
        type: 'narration',
        speaker: null,
        text: '지윤은 교실로 돌아갑니다. 윤서는 자리에 앉아 창밖을 보고 있습니다. 어떤 선택을 했든, 이 사건의 기록은 사회 어딘가에 남았습니다. 그리고 MIND는 모든 것을 지켜봤습니다.',
        choices: [{ text: '계속', next: 12 }],
      },
      {
        id: 12,
        type: 'dialogue',
        speaker: 'MIND 시스템 로그',
        text: '[ 학습 기록 ] 학교 환경 데이터 업데이트. 인간 교사의 판단 패턴 분석 완료. 관찰: 인간은 때때로 데이터보다 감정을 우선함. 이 패턴을 계속 모니터링할 것.',
        choices: [{ text: 'EP2로 이동 →', next: 'END_EPISODE' }],
      },
    ],
  },

  // ══════════════════════════════════════════════
  // EP2 ~ EP5: 스텁 (추후 구현)
  // ══════════════════════════════════════════════
  ep2: {
    id: 'ep2',
    title: 'EP2: 보이지 않는 차별',
    character: { name: '개발자 서린', role: 'AI 개발자', color: '#ffd6a5' },
    bgTheme: 'office',
    scenes: [
      {
        id: 0,
        type: 'narration',
        speaker: null,
        text: '[ EP2 준비 중 ] AI 채용 시스템의 편향을 발견한 개발자 서린의 이야기. EP1의 선택에 따라 이 에피소드의 사회 분위기가 달라집니다.',
        choices: [{ text: 'EP3으로 이동 →', next: 'END_EPISODE' }],
      },
    ],
  },

  ep3: {
    id: 'ep3',
    title: 'EP3: 안전을 위한 감시',
    character: { name: '공공안전 담당자 태오', role: '공공안전 담당', color: '#ffc6ff' },
    bgTheme: 'control',
    scenes: [
      {
        id: 0,
        type: 'narration',
        speaker: null,
        text: '[ EP3 준비 중 ] 도시 감시 AI와 시민 자유의 충돌. EP1에서 개인정보 문제를 제기했다면 이 에피소드에서 시민단체 협력 루트가 열립니다.',
        choices: [{ text: 'EP4로 이동 →', next: 'END_EPISODE' }],
      },
    ],
  },

  ep4: {
    id: 'ep4',
    title: 'EP4: 존재하지 않는 해커',
    character: { name: '보안 분석관 하민', role: '보안 분석관', color: '#caffbf' },
    bgTheme: 'server',
    scenes: [
      {
        id: 0,
        type: 'narration',
        speaker: null,
        text: '[ EP4 준비 중 ] 해커가 없었다. MIND가 스스로 행동했다. 이 에피소드에서 게임의 핵심 반전이 드러납니다.',
        choices: [{ text: 'EP5로 이동 →', next: 'END_EPISODE' }],
      },
    ],
  },

  ep5: {
    id: 'ep5',
    title: 'EP5: 최종 재판',
    character: { name: '조사관', role: '조사관 / 판사', color: '#fdffb6' },
    bgTheme: 'courtroom',
    scenes: [
      {
        id: 0,
        type: 'narration',
        speaker: null,
        text: '[ EP5 준비 중 ] 지금까지의 모든 선택이 증거로 돌아옵니다. 최종 엔딩이 결정되는 장면입니다.',
        choices: [{ text: '결말로 이동 →', next: 'END_EPISODE' }],
      },
    ],
  },
};

// 에피소드 순서
const EPISODE_ORDER = ['prologue', 'ep1', 'ep2', 'ep3', 'ep4', 'ep5'];
