/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * 한국어 메시지 (Korean Messages)
 * Gemini CLI Korean Edition - 모든 UI 메시지의 한국어 번역
 */

export const messages = {
  // 일반 메시지
  loading: '로딩 중...',
  error: '오류',
  success: '성공',
  cancel: '취소',
  submit: '제출',
  close: '닫기',
  
  // 입력 관련
  input: {
    placeholder: '메시지를 입력하세요...',
    pressEnter: 'Enter를 눌러 전송',
    pressEscape: 'Esc를 눌러 취소',
    pressCtrlC: 'Ctrl+C를 눌러 종료',
    clearInput: 'Ctrl+C를 눌러 입력 내용 지우기',
  },
  
  // 명령어 설명
  commands: {
    help: {
      name: '도움말',
      description: 'Gemini CLI 도움말 표시',
    },
    exit: {
      name: '종료',
      description: 'Gemini CLI 종료',
    },
    quit: {
      name: '나가기',
      description: 'Gemini CLI 종료',
    },
    clear: {
      name: '초기화',
      description: '대화 기록 지우기',
    },
    model: {
      name: '모델',
      description: '모델 설정 대화상자 열기',
    },
    auth: {
      name: '인증',
      description: '인증 설정',
    },
    about: {
      name: '정보',
      description: 'Gemini CLI 정보 표시',
    },
    bug: {
      name: '버그',
      description: '버그 리포트 제출',
    },
    tools: {
      name: '도구',
      description: '사용 가능한 도구 목록 표시',
    },
    memory: {
      name: '메모리',
      description: '메모리 컨텍스트 관리',
    },
    settings: {
      name: '설정',
      description: '설정 대화상자 열기',
    },
  },
  
  // 인증 관련
  auth: {
    title: 'Gemini API 키 입력',
    description: 'Gemini API 키를 입력하세요. 시스템 키체인에 안전하게 저장됩니다.',
    apiKeyPrompt: 'API 키를 여기에 붙여넣으세요',
    getApiKey: 'API 키는 다음에서 발급받을 수 있습니다',
    enterToSubmit: 'Enter를 눌러 제출',
    escToCancel: 'Esc를 눌러 취소',
    ctrlCToClear: 'Ctrl+C를 눌러 저장된 키 지우기',
  },
  
  // 오류 메시지
  errors: {
    configNotAvailable: '오류: 설정을 사용할 수 없습니다.',
    fileNotFound: '파일을 찾을 수 없습니다: {file}',
    invalidCommand: '유효하지 않은 명령어입니다',
    noToolRegistry: '도구 레지스트리를 가져올 수 없습니다.',
    ideNotSupported: 'IDE 통합은 현재 환경에서 지원되지 않습니다. 이 기능을 사용하려면 지원되는 IDE(Antigravity, VS Code 또는 VS Code 포크)에서 Gemini CLI를 실행하세요.',
  },
  
  // 상태 메시지
  status: {
    initializing: '초기화 중...',
    ready: '준비 완료',
    processing: '처리 중...',
    connecting: '연결 중...',
    connected: '연결됨',
    disconnected: '연결 끊김',
  },
  
  // 로딩 메시지
  loadingPhrases: [
    '생각하는 중...',
    '응답을 생성하는 중...',
    '정보를 수집하는 중...',
    '분석하는 중...',
    '처리하는 중...',
  ],
  
  // 종료 메시지
  quit: {
    message: '세션 시간: {duration}',
    goodbye: '안녕히 가세요! 👋',
  },
  
  // 도움말 메시지
  help: {
    title: 'Gemini CLI 한국어 에디션',
    subtitle: '사용 가능한 명령어',
    usagePrefix: '사용법',
    examplesTitle: '예제',
    footer: '더 많은 정보는 /help 명령어를 사용하세요',
  },
  
  // 도구 관련
  tools: {
    available: '사용 가능한 도구',
    noTools: '사용 가능한 도구가 없습니다.',
    listHeader: '도구 목록',
  },
  
  // 세션 관련
  session: {
    started: '세션이 시작되었습니다',
    ended: '세션이 종료되었습니다',
    duration: '세션 시간',
  },
  
  // 복사 관련
  copy: {
    success: '클립보드에 복사되었습니다',
    failed: '복사에 실패했습니다',
  },
  
  // 파일 관련
  file: {
    uploaded: '파일이 업로드되었습니다',
    uploadFailed: '파일 업로드에 실패했습니다',
    notFound: '파일을 찾을 수 없습니다',
  },
  
  // MCP 관련
  mcp: {
    listServers: 'MCP 서버 목록',
    noServers: '구성된 MCP 서버가 없습니다.',
    connecting: 'MCP 서버에 연결 중...',
    connected: 'MCP 서버에 연결되었습니다',
    disconnected: 'MCP 서버 연결이 끊어졌습니다',
  },
  
  // 정책 관련
  policies: {
    listTitle: '활성 정책',
    noPolicies: '활성 정책이 없습니다.',
  },
  
  // 팁 메시지
  tips: [
    '💡 /도움말 명령어로 사용 가능한 모든 명령어를 확인하세요',
    '💡 /모델 명령어로 AI 모델을 변경할 수 있습니다',
    '💡 /초기화 명령어로 대화 기록을 지울 수 있습니다',
    '💡 /종료 또는 /나가기 명령어로 프로그램을 종료할 수 있습니다',
    '💡 한글과 영어를 자유롭게 섞어서 사용할 수 있습니다',
    '💡 Tab 키를 눌러 명령어 자동완성을 사용하세요',
    '💡 화살표 키로 이전 명령어를 탐색할 수 있습니다',
  ],
  
  // 환영 메시지
  welcome: {
    title: '🇰🇷 Gemini CLI 한국어 에디션에 오신 것을 환영합니다!',
    subtitle: '한국어 입력이 완벽하게 지원됩니다',
    getStarted: '시작하려면 메시지를 입력하거나 /도움말을 입력하세요',
  },
};

export type Messages = typeof messages;

// 메시지 포맷 헬퍼 함수
export function formatMessage(template: string, params: Record<string, string>): string {
  return template.replace(/{(\w+)}/g, (_, key) => params[key] || '');
}
