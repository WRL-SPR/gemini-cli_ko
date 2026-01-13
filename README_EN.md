# Gemini CLI - Korean Edition (Korean Input Support) 🇰🇷

> **🌐 Language / 언어 선택**
> - 🇬🇧 **English** (Current document)
> - 🇰🇷 **한국어** → [README.md](./README.md)

[![Korean Edition](https://img.shields.io/badge/Korean-Edition-blue.svg)](https://github.com/WRL-SPR/gemini-cli_ko)
[![Version](https://img.shields.io/npm/v/@wrl-spr/gemini-cli-ko)](https://www.npmjs.com/package/@wrl-spr/gemini-cli-ko)
[![License](https://img.shields.io/github/license/WRL-SPR/gemini-cli_ko)](https://github.com/WRL-SPR/gemini-cli_ko/blob/main/LICENSE)
[![Based on](https://img.shields.io/badge/based%20on-google--gemini%2Fgemini--cli-green)](https://github.com/google-gemini/gemini-cli)

> **🎯 A community fork that perfectly resolves Korean input issues!**
>
> This fork fixes the Korean character decomposition and IME input errors from the original Gemini CLI.

![Gemini CLI Screenshot](./docs/assets/gemini-screenshot.png)

## 🇰🇷 Korean Edition Features

### ✅ Resolved Issues
- **Fixed Character Decomposition**: Korean text no longer breaks into individual jamo (ㄱ,ㅏ,ㄴ)
- **IME Input Support**: Windows Korean IME now works perfectly
- **Complete Korean Input**: Natural Korean typing experience

### 🔧 Technical Improvements
- Unified input handling in KeypressContext
- Disabled Ink's useInput to prevent conflicts
- Full support for IME composition state
- Complete CJK language support (Korean, Japanese, Chinese)

**📖 Details**: [RELEASE_NOTES_KO.md](./RELEASE_NOTES_KO.md)

---

## 🚀 Key Features

- **🎯 Free Tier**: 60 requests/minute, 1,000 requests/day with personal Google account
- **🧠 Powerful Gemini 2.5 Pro**: 1M token context window support
- **🔧 Built-in Tools**: Google Search, file operations, shell commands, web fetching
- **🔌 Extensible**: Custom integration support via MCP (Model Context Protocol)
- **💻 Terminal First**: Designed for command-line loving developers
- **🛡️ Open Source**: Apache 2.0 License
- **🇰🇷 Perfect Korean Support**: Korean input specialized (Korean Edition only)

---

## 📦 Installation

### Prerequisites
- **Node.js 20.0.0 or higher**
- macOS, Linux, or Windows

### Method 1: Install via npm (Recommended) ✨

```bash
# Global installation
npm install -g @wrl-spr/gemini-cli-ko

# Run
gemini
```

### Method 2: Install from Source

```bash
# Clone repository
git clone https://github.com/WRL-SPR/gemini-cli_ko.git
cd gemini-cli_ko

# Install dependencies
npm install

# Build
npm run build

# Global link (optional)
npm link
```

### ⚠️ Important: npm Package Name

This fork uses a different package name to avoid conflicts with the original:

- ❌ **DO NOT install**: npm install -g @google/gemini-cli (original, has Korean input issues)
- ✅ **INSTALL this**: npm install -g @wrl-spr/gemini-cli-ko (Korean Edition, issues resolved)

---

## 🔐 Authentication Options

### Option 1: Google Login (OAuth) - Recommended

**✨ Best for**: Individual developers and Gemini Code Assist license holders

**Benefits**:
- Free tier: 60 requests/minute, 1,000 requests/day
- **Gemini 2.5 Pro** (1M token context)
- No API key management needed

```bash
gemini
# Select "Login with Google" and authenticate in browser
```

### Option 2: Gemini API Key

```bash
# Get key from https://aistudio.google.com/apikey
export GEMINI_API_KEY="YOUR_API_KEY"
gemini
```

### Option 3: Vertex AI

```bash
export GOOGLE_API_KEY="YOUR_API_KEY"
export GOOGLE_GENAI_USE_VERTEXAI=true
gemini
```

---

## 🚀 Getting Started

### Basic Usage

```bash
# Start in current directory
gemini

# Include multiple directories
gemini --include-directories ../lib,../docs

# Use specific model
gemini -m gemini-2.5-flash
```

### Korean Input Test 🇰🇷

```bash
gemini
> Hello! Korean input works perfectly! 🎉
> Character decomposition issue is resolved.
> Feel free to chat in Korean!
```

---

## 📚 Documentation

All documentation from the original Gemini CLI applies to this Korean Edition:

- [Quick Start Guide](./docs/get-started/index.md)
- [Authentication Setup](./docs/get-started/authentication.md)
- [Command Reference](./docs/cli/commands.md)
- [MCP Server Integration](./docs/tools/mcp-server.md)

---

## 🤝 Contributing

This is a community fork. Contributions are welcome!

### Reporting Issues
- **Korean Input Issues**: Create an issue in this repository
- **General Gemini CLI Issues**: Report to [original repository](https://github.com/google-gemini/gemini-cli/issues)

---

## 🔗 Links

- **Original Repository**: https://github.com/google-gemini/gemini-cli
- **This Fork**: https://github.com/WRL-SPR/gemini-cli_ko
- **Release Notes**: [RELEASE_NOTES_KO.md](./RELEASE_NOTES_KO.md)
- **NPM Package**: https://www.npmjs.com/package/@wrl-spr/gemini-cli-ko

---

## 📄 Legal Notice

- **License**: [Apache License 2.0](LICENSE)
- **Terms of Service**: [Terms & Privacy](./docs/tos-privacy.md)

---

## 🙏 Acknowledgments

- **Google Gemini Team** - Original Gemini CLI development
- **Korean Developer Community** - CJK input issue reporting

---

<p align="center">
  <strong>Original built with ❤️ by Google and the open source community</strong><br>
  <strong>Korean Edition maintained with 🇰🇷 by <a href="https://github.com/WRL-SPR">WRL-SPR</a></strong>
</p>
