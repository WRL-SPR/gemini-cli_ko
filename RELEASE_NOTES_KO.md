# Gemini CLI Korean Edition - Release Notes

## 🇰🇷 Korean Input Fix Release

### Version: v1.0.0-ko
**Release Date:** 2026-01-13

---

## 🎯 Overview

This is a community fork of the official Gemini CLI that resolves critical Korean (CJK) input issues on Windows systems. The original Gemini CLI had problems with character decomposition (자소 분리) and IME composition, making it nearly unusable for Korean users.

## ✨ Key Changes

### 🔧 Fixed: Korean Input Issues (#3143)

**Problem:**
- Korean characters were being decomposed into individual jamo (자모) components
- IME (Input Method Editor) composition was broken on Windows
- Users couldn't type Korean text properly in the CLI

**Solution:**
- Unified all input handling in `KeypressContext`
- Disabled Ink's `useInput` for text entry to prevent conflicts
- Integrated comprehensive input handling to properly support IME composition

**Commit:** `63fd65c6dc2b4fa407f664573eda521aa996273c`

```
fix: unify input handling in KeypressContext to resolve CJK input issues
- Disables Ink's useInput for text entry
- Integrates all input handling into KeypressContext to fix character 
  decomposition (자소 분리) and IME composition issues on Windows (#3143)
```

## 🚀 Features

All features from the upstream Gemini CLI are included:
- ✅ Full Korean language support in terminal
- ✅ IME composition support
- ✅ Proper handling of multi-byte characters
- ✅ Google Search grounding
- ✅ File operations
- ✅ Shell commands
- ✅ MCP (Model Context Protocol) support
- ✅ VS Code integration

## 📦 Installation

### Using npm

```bash
# Clone this repository
git clone https://github.com/WRL-SPR/gemini-cli_ko.git
cd gemini-cli_ko

# Install dependencies
npm install

# Build
npm run build

# Install globally
npm link
```

### Quick Start

```bash
gemini
```

## 🔍 Technical Details

### Input Handling Architecture

The fix modifies the input handling layer to:
1. Capture raw keypress events at the lowest level
2. Handle IME composition states properly
3. Prevent premature character emission during composition
4. Support all CJK languages (Korean, Japanese, Chinese)

### Affected Components

- `KeypressContext`: Unified input handling
- `InputPrompt`: Improved Korean input and IME support
- Terminal input layer: Raw mode handling for IME

## 🌏 Language Support

This fork specifically improves support for:
- 🇰🇷 **Korean (한국어)**: Full Hangul input with proper jamo composition
- 🇯🇵 **Japanese (日本語)**: Hiragana, Katakana, and Kanji input
- 🇨🇳 **Chinese (中文)**: Simplified and Traditional Chinese input

## 📝 Known Issues

- None currently reported for Korean input
- If you encounter issues, please report them at: https://github.com/WRL-SPR/gemini-cli_ko/issues

## 🤝 Contributing

This is a community-maintained fork. Contributions are welcome!

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 🔗 Links

- **Original Repository:** https://github.com/google-gemini/gemini-cli
- **This Fork:** https://github.com/WRL-SPR/gemini-cli_ko
- **Issue Tracker:** https://github.com/WRL-SPR/gemini-cli_ko/issues

## 📄 License

Apache License 2.0 (same as upstream)

## 🙏 Acknowledgments

- Google Gemini team for the original Gemini CLI
- Community members who reported Korean input issues
- All contributors to this fork

---

## Previous Changes from Upstream

This fork is based on the latest upstream changes including:
- Keybindings migration
- UI feedback improvements
- Hardware telemetry collection
- Built-in skills support
- Tab focus switching between shell and input

For the complete upstream changelog, see: [docs/changelogs/index.md](docs/changelogs/index.md)

---

**Made with ❤️ for the Korean developer community**