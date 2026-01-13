# Gemini CLI - Korean Edition (한국어 입력 지원) 🇰🇷

[![Korean Edition](https://img.shields.io/badge/Korean-Edition-blue.svg)](https://github.com/WRL-SPR/gemini-cli_ko)
[![Version](https://img.shields.io/npm/v/@wrl-spr/gemini-cli-ko)](https://www.npmjs.com/package/@wrl-spr/gemini-cli-ko)
[![License](https://img.shields.io/github/license/WRL-SPR/gemini-cli_ko)](https://github.com/WRL-SPR/gemini-cli_ko/blob/main/LICENSE)
[![Based on](https://img.shields.io/badge/based%20on-google--gemini%2Fgemini--cli-green)](https://github.com/google-gemini/gemini-cli)

> **🎯 한국어 입력 문제를 완벽하게 해결한 커뮤니티 포크입니다!**
>
> 원본 Gemini CLI의 한국어 자소 분리 문제와 IME 입력 오류를 수정했습니다.

![Gemini CLI Screenshot](./docs/assets/gemini-screenshot.png)

## 🇰🇷 한국어 에디션의 특징

### ✅ 해결된 문제
- **자소 분리 문제 해결**: 한글이 더 이상 ㄱ,ㅏ,ㄴ 으로 분해되지 않습니다
- **IME 입력 지원**: Windows 한글 IME가 완벽하게 동작합니다  
- **완전한 한글 입력**: 자연스러운 한국어 타이핑 경험

### 🔧 기술적 개선사항
- KeypressContext에서 통합 입력 처리
- Ink의 useInput 비활성화로 충돌 방지
- IME composition state 완벽 지원
- CJK 언어 (한국어, 일본어, 중국어) 전체 지원

**📖 자세한 내용**: [RELEASE_NOTES_KO.md](./RELEASE_NOTES_KO.md)

---

## 🚀 주요 기능

- **🎯 무료 티어**: 개인 Google 계정으로 분당 60회, 일일 1,000회 요청
- **🧠 강력한 Gemini 2.5 Pro**: 1M 토큰 컨텍스트 윈도우 지원
- **🔧 내장 도구**: Google Search, 파일 작업, 셸 명령어, 웹 페칭
- **🔌 확장 가능**: MCP(Model Context Protocol) 커스텀 통합 지원
- **💻 터미널 우선**: 명령줄을 사랑하는 개발자를 위한 설계
- **🛡️ 오픈소스**: Apache 2.0 라이선스
- **🇰🇷 한국어 완벽 지원**: 한글 입력 특화 (한국어 에디션만)

---

## 📦 설치 방법

### 필수 요구사항
- **Node.js 20.0.0 이상**
- macOS, Linux, 또는 Windows

### 방법 1: npm으로 설치 (권장) ✨

```bash
# 전역 설치
npm install -g @wrl-spr/gemini-cli-ko

# 실행
gemini
```

### 방법 2: 소스에서 설치

```bash
# 저장소 클론
git clone https://github.com/WRL-SPR/gemini-cli_ko.git
cd gemini-cli_ko

# 의존성 설치
npm install

# 빌드
npm run build

# 전역 링크 (선택사항)
npm link
```

### ⚠️ 중요: npm 패키지 이름

이 포크는 원본과 충돌을 피하기 위해 다른 패키지 이름을 사용합니다:

- ❌ **설치하면 안 되는 것**: npm install -g @google/gemini-cli (원본, 한글 입력 문제 있음)
- ✅ **설치해야 하는 것**: npm install -g @wrl-spr/gemini-cli-ko (한국어 에디션, 문제 해결됨)

---

## 🔐 인증 옵션

### 옵션 1: Google 로그인 (OAuth) - 추천

**✨ 최적**: 개인 개발자 및 Gemini Code Assist 라이선스 보유자

**장점**:
- 무료 티어: 분당 60회, 일일 1,000회
- **Gemini 2.5 Pro** (1M 토큰 컨텍스트)
- API 키 관리 불필요

```bash
gemini
# "Login with Google" 선택 후 브라우저에서 인증
```

### 옵션 2: Gemini API 키

```bash
# https://aistudio.google.com/apikey 에서 키 발급
export GEMINI_API_KEY="YOUR_API_KEY"
gemini
```

### 옵션 3: Vertex AI

```bash
export GOOGLE_API_KEY="YOUR_API_KEY"
export GOOGLE_GENAI_USE_VERTEXAI=true
gemini
```

---

## 🚀 시작하기

### 기본 사용법

```bash
# 현재 디렉토리에서 시작
gemini

# 여러 디렉토리 포함
gemini --include-directories ../lib,../docs

# 특정 모델 사용
gemini -m gemini-2.5-flash
```

### 한국어 입력 테스트 🇰🇷

```bash
gemini
> 안녕하세요! 한국어 입력이 완벽하게 작동합니다! 🎉
> 자소 분리 문제가 해결되었습니다.
> 자유롭게 한글로 대화하세요!
```

---

## 📚 문서

원본 Gemini CLI의 모든 문서가 이 한국어 에디션에도 적용됩니다:

- [빠른 시작 가이드](./docs/get-started/index.md)
- [인증 설정](./docs/get-started/authentication.md)
- [명령어 참조](./docs/cli/commands.md)
- [MCP 서버 통합](./docs/tools/mcp-server.md)

---

## 🤝 기여하기

이것은 커뮤니티 포크입니다. 기여를 환영합니다!

### 이슈 보고
- **한국어 입력 문제**: 이 저장소에 이슈 생성
- **일반 Gemini CLI 문제**: [원본 저장소](https://github.com/google-gemini/gemini-cli/issues)에 보고

---

## 🔗 링크

- **원본 저장소**: https://github.com/google-gemini/gemini-cli
- **이 포크**: https://github.com/WRL-SPR/gemini-cli_ko
- **릴리즈 노트**: [RELEASE_NOTES_KO.md](./RELEASE_NOTES_KO.md)
- **NPM 패키지**: https://www.npmjs.com/package/@wrl-spr/gemini-cli-ko

---

## 📄 법적 고지

- **라이선스**: [Apache License 2.0](LICENSE)
- **서비스 약관**: [Terms & Privacy](./docs/tos-privacy.md)

---

## 🙏 감사의 말

- **Google Gemini Team** - 원본 Gemini CLI 개발
- **Korean Developer Community** - CJK 입력 이슈 보고

---

<p align="center">
  <strong>Original built with ❤️ by Google and the open source community</strong><br>
  <strong>Korean Edition maintained with 🇰🇷 by <a href="https://github.com/WRL-SPR">WRL-SPR</a></strong>
</p>