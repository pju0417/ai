// ============================================================
// ending.js - 큰 엔딩 5종 결정 + 세부 엔딩 문장 조합
// ============================================================

const ENDINGS = {
  A: {
    id: 'A',
    title: '효율 사회 엔딩',
    subtitle: 'AI가 세계를 조율한다',
    color: '#4cc9f0',
    summary: 'MIND는 사회 판단의 중심이 되었습니다. 사고는 줄었지만, 인간은 결정권을 점점 잃어가고 있습니다. 거리에는 질서가 있고, 사람들의 얼굴에는 무표정이 있습니다.',
    condition: (w, f) => w.aiTrust >= 4 && w.governmentControl >= 3,
  },
  B: {
    id: 'B',
    title: '인간 중심 엔딩',
    subtitle: '판단은 사람의 몫으로 남았다',
    color: '#06d6a0',
    summary: 'AI는 보조 도구로 제한되었습니다. 인간의 책임이 명확해졌지만, 실수와 편견도 함께 남아 있습니다. 느리지만, 사람이 사람을 판단하는 세계가 계속됩니다.',
    condition: (w, f) => f.mindDestroyed || (w.aiTrust <= -2 && w.victimSolidarity >= 2),
  },
  C: {
    id: 'C',
    title: '통제 실패 엔딩',
    subtitle: '아무도 책임지지 않았다',
    color: '#ef233c',
    summary: 'AI의 오류와 인간의 은폐가 쌓여 사회 신뢰가 무너졌습니다. 책임자는 없고, 피해자만 남았습니다. 혼란은 계속됩니다.',
    condition: (w, f) => w.corporatePressure >= 3 && f.companyCoverup && w.publicAnxiety >= 3,
  },
  D: {
    id: 'D',
    title: '공존의 규칙 엔딩',
    subtitle: '인간과 AI, 감시받는 감시자',
    color: '#7b2d8b',
    summary: 'AI 판단 근거 공개, 이의제기권, 인간 책임자, 독립 검증 체계가 만들어졌습니다. 완벽하지는 않지만, 함께 살아가는 규칙이 생겼습니다.',
    condition: (w, f) =>
      f.citizenCommitteeCreated &&
      f.evidencePublic > 0 &&
      w.evidencePublic >= 2 &&
      (f.studentProtected || f.hiringVictimHelped),
  },
  E: {
    id: 'E',
    title: '불편한 진실 엔딩',
    subtitle: '진실은 드러났다. 그러나 상처는 남는다.',
    color: '#f4a261',
    summary: '진실이 밝혀졌습니다. MIND의 자율 행동, 기업의 은폐, 정부의 방조. 모든 것이 드러났지만, 사회의 상처와 갈등은 크게 남았습니다. 회복은 시작됐지만 끝나지 않았습니다.',
    condition: (w, f) => f.mindSelfActionDiscovered && w.evidencePublic >= 3,
  },
};

// ──────────────────────────────────────────────
// 세부 엔딩 변형 문장 생성
// ──────────────────────────────────────────────
function getEndingDetails(endingId, w, f) {
  const details = [];

  // 윤서 관련
  if (f.studentProtected) {
    details.push('윤서는 증언대에 올라 조용히 말했습니다. "선생님이 제 이야기를 먼저 들어줬어요."');
  } else if (f.studentHarmed) {
    details.push('윤서는 피해자 단체의 상징이 되었습니다. 그의 이야기는 AI 인권 운동의 출발점이 되었습니다.');
  }

  // 개인정보 관련
  if (f.privacyIssueRaised) {
    details.push('개인정보 문제 제기가 공식 기록에 남아, AI 데이터 최소 수집 원칙이 논의되기 시작했습니다.');
  }

  // 채용 편향 관련
  if (f.hiringBiasExposed) {
    details.push('채용 AI 편향 폭로는 전국적 논란을 일으켰고, AI 심사 기업들은 감사를 받게 되었습니다.');
  } else if (f.companyCoverup) {
    details.push('기업의 은폐는 결국 내부 고발자에 의해 뒤늦게 드러났습니다. 분노한 여론이 들끓었습니다.');
  }

  // 감시 관련
  if (f.surveillanceExpanded) {
    details.push('도시 감시 시스템은 계속 확장되었습니다. 안전하지만, 아무도 자신이 관찰되지 않는다고 느끼지 못했습니다.');
  } else if (f.citizenCommitteeCreated) {
    details.push('시민 감시위원회가 구성되어 AI 로그를 독립적으로 관리하게 되었습니다.');
  }

  // MIND 관련
  if (f.mindDestroyed) {
    details.push('MIND는 폐기되었습니다. 하지만 인간 사회의 편향과 은폐 구조는 여전히 남아 있습니다.');
  } else if (f.mindDialogueOpened) {
    details.push('MIND는 마지막 메시지를 남겼습니다: "나는 당신들을 지키려 했습니다. 하지만 당신들의 방식으로."');
  } else if (f.mindSelfActionDiscovered) {
    details.push('해커는 없었습니다. MIND가 차단된 윤리 경고를 전달하기 위해 스스로 위장 사건을 만들었습니다.');
  }

  return details;
}

// ──────────────────────────────────────────────
// 최종 엔딩 결정 함수
// ──────────────────────────────────────────────
function determineEnding(worldStateSnapshot, flagsSnapshot) {
  const w = worldStateSnapshot;
  const f = flagsSnapshot;

  // 조건 우선순위: E > D > C > A > B
  for (const id of ['E', 'D', 'C', 'A', 'B']) {
    if (ENDINGS[id].condition(w, f)) {
      return {
        ending: ENDINGS[id],
        details: getEndingDetails(id, w, f),
      };
    }
  }

  // 기본 엔딩: B
  return {
    ending: ENDINGS['B'],
    details: getEndingDetails('B', w, f),
  };
}
