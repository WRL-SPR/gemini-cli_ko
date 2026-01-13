# Gemini CLI - Korean Edition (한국어 입력 지원)

[![Korean Edition](https://img.shields.io/badge/Korean-Edition-blue.svg)](https://github.com/WRL-SPR/gemini-cli_ko)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)](https://nodejs.org/)

> **한국어 입력 문제 해결!** 이 포크는 원본 gemini-cli의 한국어 입력 버그를 수정했습니다.
> 
> **Korean Input Fixed!** This fork fixes the Korean input handling issues in the original gemini-cli.

## 🎯 주요 개선사항 (Key Improvements)

- ✅ **한국어 입력 완벽 지원** - 조합 중인 한글이 제대로 입력됩니다
- ✅ **Korean Input Support** - Properly handles Korean character composition (Hangul Jamo)
- ✅ **버그 수정** - 원본의 한국어 입력 시 발생하던 문제 해결
- ✅ **Bug Fixes** - Resolved issues with Korean input in the original version

---

## 📖 소개 (Introduction)

Google Gemini AI와 대화할 수 있는 강력한 명령줄 인터페이스입니다. 이제 한국어 입력을 완벽하게 지원합니다!

A powerful command-line interface for interacting with Google's Gemini AI, now with full Korean language input support!

## ✨ 기능 (Features)

- 💬 **대화형 채팅** - Gemini AI와 자연스러운 대화
- 🌍 **다국어 지원** - 한국어를 포함한 모든 언어 완벽 지원
- 📁 **파일 업로드** - 이미지 및 문서 분석
- 🎨 **구문 강조** - 코드 블록의 아름다운 표시
- 📝 **마크다운 렌더링** - 응답을 포맷팅된 마크다운으로 표시
- 💾 **대화 기록** - 대화 저장 및 불러오기
- ⚙️ **설정 가능** - 모델, 온도, 최대 토큰 수 등 조정 가능
- 🔒 **안전한 API 키 관리** - 환경 변수를 통한 보안

## 📋 요구사항 (Requirements)

- Node.js 18.0.0 이상
- Google Gemini API 키 ([여기서 발급](https://makersuite.google.com/app/apikey))

## 🚀 설치 방법 (Installation)

### Git Clone으로 설치 (Installation via Git Clone)

```bash
# 저장소 클론
git clone https://github.com/WRL-SPR/gemini-cli_ko.git

# 디렉토리 이동
cd gemini-cli_ko

# 의존성 설치
npm install

# 전역 설치 (선택사항)
npm link
```

### 설정 (Configuration)

API 키를 환경 변수로 설정하세요:

```bash
# Linux/Mac
export GEMINI_API_KEY='your-api-key-here'

# Windows (PowerShell)
$env:GEMINI_API_KEY='your-api-key-here'

# Windows (CMD)
set GEMINI_API_KEY=your-api-key-here
```

또는 `.env` 파일을 프로젝트 루트에 생성:

```
GEMINI_API_KEY=your-api-key-here
```

## 💡 사용법 (Usage)

### 기본 사용 (Basic Usage)

```bash
# 대화형 모드 시작
gemini-cli

# 또는 로컬 설치 시
node src/index.js
```

### 한국어 입력 테스트 (Korean Input Test)

```bash
# 한국어로 질문하기
gemini-cli

> 안녕하세요! 한국어로 대화할 수 있나요?
> 서울의 날씨에 대해 알려주세요.
> 프로그래밍에서 변수란 무엇인가요?
```

### 파일과 함께 사용 (With Files)

```bash
# 이미지 분석
gemini-cli --file ./image.jpg

# 여러 파일 업로드
gemini-cli --file ./doc1.pdf --file ./image.png
```

### 명령 옵션 (Command Options)

```bash
# 특정 모델 사용
gemini-cli --model gemini-1.5-pro

# 온도 설정 (창의성 조절)
gemini-cli --temperature 0.8

# 최대 토큰 수 설정
gemini-cli --max-tokens 2048

# 시스템 프롬프트 설정
gemini-cli --system "You are a helpful coding assistant"

# 대화 저장
gemini-cli --save conversation.json

# 대화 불러오기
gemini-cli --load conversation.json
```

## 🎮 인터랙티브 명령어 (Interactive Commands)

대화형 모드에서 사용 가능한 명령어:

- `/help` - 도움말 표시
- `/clear` - 대화 기록 지우기
- `/save [filename]` - 대화 저장
- `/load [filename]` - 대화 불러오기
- `/model [name]` - 모델 변경
- `/temperature [value]` - 온도 설정
- `/file [path]` - 파일 업로드
- `/exit` - 종료

## 🔧 고급 설정 (Advanced Configuration)

설정 파일을 생성하여 기본값을 변경할 수 있습니다 (`~/.gemini-cli-config.json`):

```json
{
  "model": "gemini-1.5-pro",
  "temperature": 0.7,
  "maxTokens": 4096,
  "systemPrompt": "You are a helpful assistant that responds in Korean when appropriate."
}
```

## 🐛 문제 해결 (Troubleshooting)

### 한국어 입력이 안 되는 경우

이 Korean Edition을 사용하고 있는지 확인하세요:

```bash
git remote -v
# origin이 https://github.com/WRL-SPR/gemini-cli_ko.git 인지 확인
```

### API 키 오류

```bash
# API 키가 올바르게 설정되었는지 확인
echo $GEMINI_API_KEY  # Linux/Mac
echo %GEMINI_API_KEY%  # Windows
```

### 의존성 오류

```bash
# node_modules 삭제 후 재설치
rm -rf node_modules package-lock.json
npm install
```

## 📚 지원되는 모델 (Supported Models)

- `gemini-1.5-pro` (기본값 / Default)
- `gemini-1.5-flash`
- `gemini-1.0-pro`
- 기타 Gemini API가 지원하는 모든 모델

## 🤝 기여하기 (Contributing)

이슈나 풀 리퀘스트는 언제나 환영합니다!

Contributions are always welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 라이선스 (License)

MIT License - 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 🙏 감사의 말 (Acknowledgments)

- 원본 프로젝트에 감사드립니다
- Google Gemini API 팀에 감사드립니다
- 한국어 입력 버그를 발견하고 보고해주신 모든 분들께 감사드립니다

## 🔗 링크 (Links)

- [GitHub Repository](https://github.com/WRL-SPR/gemini-cli_ko)
- [Issue Tracker](https://github.com/WRL-SPR/gemini-cli_ko/issues)
- [Google Gemini API Documentation](https://ai.google.dev/docs)

## 📞 연락처 (Contact)

문제가 있거나 제안사항이 있으시면 [이슈를 생성](https://github.com/WRL-SPR/gemini-cli_ko/issues)해주세요.

---

**Made with ❤️ for the Korean Developer Community**

**한국 개발자 커뮤니티를 위해 ❤️로 만들었습니다**
