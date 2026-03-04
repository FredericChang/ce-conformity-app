# 中英雙語重構說明（每個模組都有 zh/en）

## 已完成的基礎建設

- **單一語系來源**：`react-i18next` + `i18n`，語系檔位於 `src/locales/zh.json`、`src/locales/en.json`。
- **App 主畫面**：總覽、預先研究、迭代流程、文件資料、標準範例、側欄、語言切換已全部改為使用 `t()`，切換語言會同步更新。
- **子模組語系**：仍透過 `currentLanguage={i18n.language}` 傳入（與 App 一致），之後可改為在模組內使用 `useTranslation()`。

## 如何讓「每個模組」都有中英版本

### 方式一：在模組內使用 useTranslation（建議）

1. 在該模組的語系檔中新增對應 key（見下方「各模組 key 建議」）。
2. 在模組內：
   ```js
   import { useTranslation } from 'react-i18next';
   // 在組件內：
   const { t, i18n } = useTranslation();
   const lang = i18n.language || 'zh';
   ```
3. 將所有 `currentLanguage === 'zh' ? '...' : '...'` 或本地的 `translations[lang].xxx` 改為 `t('模組命名空間.xxx')` 或 `t('common.xxx')`。
4. 在 `zh.json` / `en.json` 的同一結構下補齊該模組的所有文案。

### 方式二：沿用 currentLanguage prop

- App 已傳入 `currentLanguage={i18n.language}` 的模組：RiskAssessment、TechnicalFile、Inspection。
- 這些模組可維持使用 `currentLanguage`，但請確保**所有**顯示文字都有對應的 zh/en 來源（例如本地的 `translations` 物件或從 locale 載入），不要留下僅中文或僅英文的字串。

## 各模組檢查清單（確保每個模組都有 zh/en）

| 模組 / 檔案 | 目前狀態 | 建議作法 |
|------------|----------|----------|
| App.js | ✅ 已改用 t() | - |
| 1-1.js (MachineSafetyTraining) | 多為中文 | 在 locales 新增 `machineSafetyTraining.*`，改用 t() |
| 1-2.js (MachineryModificationGuide) | 混合 | 統一用 t() 或 translations[currentLanguage] |
| 2-2.js (MachinerySafetyManual) | 自有 language state | 移除本地語言 state，改用 useTranslation() |
| 2-3.js, 2-4.jsx, 2-5.jsx | 混合 | 補齊 zh/en key，改用 t() |
| 3-1.jsx (RiskAssessmentProcess) | 混合 | 同上 |
| 3-2.jsx | 自有 language + translations | 改為 useTranslation()，key 遷到 zh/en.json |
| 4-2.jsx, 4-3.jsx, 4-4.jsx, 4-6.jsx, 4-7.jsx | 部分有 translations | 全部改為 t()，文案集中到 locales |
| RiskAssessment.js, TechnicalFile.js, Inspection.js | 已接 currentLanguage | 可改 useTranslation()，或確保所有字串都有 zh/en |
| MachineGuards.jsx, FunctionalSafety.jsx, MachinerySafetyInfo.jsx, RiskReductionPrinciples.jsx, WorkEquipmentDirective.jsx 等 | 混合 / 僅中文 | 逐一加入 zh/en key，改用 t() |

## 語系檔 key 命名建議

- **App 共用**：已使用 `title`, `sections.*`, `overview.*`, `research.*`, `iterative.*`, `documentation.*`, `standards.*`, `annexIV`。
- **各模組**：可依模組名設命名空間，例如：
  - `riskAssessment.*`
  - `technicalFile.*`
  - `inspection.*`
  - `machineSafetyTraining.*`
  - 其餘類推。

## 驗證「每個模組都有中英」

1. 切換語言為 EN，依序進入每個側欄區段，確認無遺漏中文或未翻譯字串。
2. 切回中文，確認無遺漏英文。
3. 搜尋程式碼：`currentLanguage === 'zh'`、`language === 'en'`、`translations[`，逐處改為使用 `t()` 並在 zh.json / en.json 補齊對應 key。

完成後，全站會以 `src/locales/zh.json` 與 `en.json` 為唯一來源，每個模組都可具備完整中英版本。
