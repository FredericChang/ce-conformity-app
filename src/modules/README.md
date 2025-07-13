# 模組開發指南

## 概述

這個目錄包含了CE符合性應用的各種功能模組。每個模組都是獨立的React組件，可以通過主導覽進行訪問。

## 現有模組

### 1. 風險評估模組 (`RiskAssessment.js`)
- **功能**: 機械安全風險評估完整指南
- **內容**: 風險識別、分析、評估、降低
- **導覽路徑**: `riskAssessment`

### 2. 技術檔案模組 (`TechnicalFile.js`)
- **功能**: CE符合性技術檔案完整指南
- **內容**: 檔案要求、結構、維護、保存期限
- **導覽路徑**: `technicalFileModule`

### 3. 檢查模組 (`Inspection.js`)
- **功能**: 機械安全檢查和驗證指南
- **內容**: 檢查前準備、檢查過程、文件、後續行動
- **導覽路徑**: `inspection`

### 4. 風險評估流程模組 (`3-1.jsx`)
- **功能**: EN ISO 12100 風險評估流程完整指南
- **內容**: 風險估計因素、避免或限制傷害的可能性、流程步驟
- **導覽路徑**: `riskAssessmentProcess`

## 如何添加新模組

### 步驟 1: 創建模組組件

創建新的模組文件，例如 `NewModule.js`:

```javascript
import React from 'react';
import { AlertTriangle, CheckCircle, Info } from 'lucide-react';

const NewModule = ({ currentLanguage }) => {
  const translations = {
    zh: {
      title: '新模組標題',
      subtitle: '新模組副標題',
      // ... 其他翻譯
    },
    en: {
      title: 'New Module Title',
      subtitle: 'New Module Subtitle',
      // ... 其他翻譯
    }
  };

  const t = translations[currentLanguage];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">{t.title}</h1>
        <p className="text-xl text-gray-600">{t.subtitle}</p>
      </div>
      
      {/* 模組內容 */}
    </div>
  );
};

export default NewModule;
```

### 步驟 2: 更新模組索引

在 `src/modules/index.js` 中添加新模組:

```javascript
// 導出新模組
export { default as NewModule } from './NewModule';

// 添加模組配置
export const moduleConfig = {
  // ... 現有模組
  newModule: {
    id: 'newModule',
    path: '/new-module',
    icon: 'IconName',
    zh: {
      title: '新模組',
      description: '新模組描述',
      shortTitle: '新模組'
    },
    en: {
      title: 'New Module',
      description: 'New module description',
      shortTitle: 'New Module'
    }
  }
};
```

### 步驟 3: 更新主應用

在 `src/App.js` 中:

1. **導入新模組**:
```javascript
import { NewModule } from './modules';
```

2. **添加翻譯**:
```javascript
sections: {
  // ... 現有區段
  newModule: '新模組'
}
```

3. **添加渲染邏輯**:
```javascript
case 'newModule':
  return <NewModule currentLanguage={currentLanguage} />;
```

## 模組開發最佳實踐

### 1. 雙語支持
- 所有模組必須支持中文和英文
- 使用 `currentLanguage` prop 來切換語言
- 將所有文本放在 `translations` 對象中

### 2. 組件結構
- 使用一致的組件結構
- 包含標題、副標題和主要內容區域
- 使用 Tailwind CSS 進行樣式設計

### 3. 可重用組件
- 創建可重用的UI組件（如 InfoBox、Card 等）
- 保持組件的一致性和可維護性

### 4. 圖標使用
- 使用 Lucide React 圖標
- 選擇合適的圖標來表示模組功能

### 5. 響應式設計
- 確保模組在各種屏幕尺寸下都能正常顯示
- 使用 Tailwind 的響應式類

## 模組配置說明

每個模組在 `moduleConfig` 中都有以下屬性:

- `id`: 模組唯一標識符
- `path`: 模組路徑（用於未來路由）
- `icon`: 模組圖標名稱
- `zh`: 中文配置
- `en`: 英文配置

## 示例模組模板

```javascript
import React from 'react';
import { AlertTriangle, CheckCircle, Info } from 'lucide-react';

const ModuleTemplate = ({ currentLanguage }) => {
  const translations = {
    zh: {
      title: '模組標題',
      subtitle: '模組副標題',
      content: {
        section1: {
          title: '第一部分',
          description: '描述',
          items: ['項目1', '項目2', '項目3']
        }
      }
    },
    en: {
      title: 'Module Title',
      subtitle: 'Module Subtitle',
      content: {
        section1: {
          title: 'Section 1',
          description: 'Description',
          items: ['Item 1', 'Item 2', 'Item 3']
        }
      }
    }
  };

  const t = translations[currentLanguage];

  const InfoBox = ({ type, title, children, icon: Icon }) => {
    const typeStyles = {
      warning: 'bg-gradient-to-r from-red-400 to-red-500',
      info: 'bg-gradient-to-r from-blue-400 to-blue-500',
      success: 'bg-gradient-to-r from-green-400 to-green-500'
    };

    return (
      <div className={`${typeStyles[type]} text-white p-6 rounded-2xl my-6 shadow-lg`}>
        <div className="flex items-center mb-4">
          {Icon && <Icon className="w-6 h-6 mr-3" />}
          <h4 className="font-bold text-lg">{title}</h4>
        </div>
        <div className="space-y-3">{children}</div>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">{t.title}</h1>
        <p className="text-xl text-gray-600">{t.subtitle}</p>
      </div>

      <InfoBox type="info" title="信息" icon={Info}>
        <p>模組內容</p>
      </InfoBox>

      {/* 添加更多內容 */}
    </div>
  );
};

export default ModuleTemplate;
```

## 注意事項

1. **命名規範**: 使用 PascalCase 命名組件文件
2. **文件組織**: 將相關的模組文件放在同一目錄下
3. **測試**: 為新模組添加適當的測試
4. **文檔**: 更新相關文檔以反映新模組的功能
5. **性能**: 確保模組不會影響應用的整體性能 