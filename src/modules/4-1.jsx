import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Globe, Shield, AlertTriangle, Info, Book } from 'lucide-react';

const RiskReductionPrinciples = () => {
  const [language, setLanguage] = useState('en');
  const [expandedSections, setExpandedSections] = useState({
    step1: false,
    step2: false,
    step3: false,
    standards: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const content = {
    en: {
      title: "Risk Reduction Principles",
      subtitle: "Machinery Safety Specialist (CE) - Tab 4: Risk reduction and standards",
      threeStepMethod: "Three-Step Method",
      threeStepDesc: "Machinery Directive, Annex I, chapter 1.1.2.b - Protective measures shall be applied in the following sequence:",
      step1: {
        title: "Step 1: Inherently Safe Machinery Design and Construction",
        description: "Eliminate hazards at the source through design",
        examples: [
          "Change design to eliminate hazards",
          "Reduce exposure to hazardous elements",
          "Avoid sharp edges and corners",
          "Maximize visibility of working areas",
          "Decrease force, velocity, mass, electric power",
          "Limit emissions (noise, vibration, hazardous substances)",
          "Proper material selection (corrosion resistance, hardness)"
        ],
        example: "Example: Moving a drive motor from height (+/- 2m) to floor level to completely eliminate the risk of falling during maintenance work."
      },
      step2: {
        title: "Step 2: Safeguarding and/or Complementary Protective Measures",
        description: "When hazards cannot be eliminated, protect against them",
        categories: [
          {
            name: "Guards (EN-ISO 14120)",
            items: ["Fixed guards", "Interlocking movable guards", "Adjustable guards"]
          },
          {
            name: "Protective Devices",
            items: ["Non-contact electrical protective devices", "Pressure-sensitive protective devices", "Two-hand control devices"]
          },
          {
            name: "Safety Systems",
            items: ["Emergency stop devices (EN ISO 13850)", "Safety distances", "Motion limitation", "Environmental protections"]
          }
        ],
        example: "Example: If moving the drive to floor level is not feasible, provide a landing with fixed staircase and proper fencing to reach maintenance positions safely."
      },
      step3: {
        title: "Step 3: Information for Use",
        description: "Inform users about remaining risks and safe operation",
        items: [
          "Markings, signs and pictograms",
          "Function indication",
          "Instruction handbook",
          "Training and instruction"
        ],
        example: "Example: When hot parts cannot be eliminated or guarded, provide warning pictograms and include safety instructions in the user manual."
      },
      standards: {
        title: "Standards Classification",
        typeA: {
          title: "Type A Standards",
          desc: "Fundamental safety principles",
          example: "EN-ISO 12100 (risk assessment and risk reduction)"
        },
        typeB: {
          title: "Type B Standards", 
          desc: "Technical safety aspects and features",
          example: "EN-IEC 60204-1 (electrical equipment of machines)"
        },
        typeC: {
          title: "Type C Standards",
          desc: "Specific groups of machines",
          example: "EN 619 (general cargo conveyors)"
        }
      },
      question: "Which step does the emergency stop device belong to?",
      answer: "Step 2: Safeguarding and/or complementary protective measures"
    },
    zh: {
      title: "風險降低原則",
      subtitle: "機械安全專家 (CE) - 第4節：風險降低和標準",
      threeStepMethod: "三步法",
      threeStepDesc: "機械指令，附件I，第1.1.2.b章 - 防護措施應按以下順序應用：",
      step1: {
        title: "第1步：本質安全的機械設計和構造",
        description: "通過設計從源頭消除危險",
        examples: [
          "改變設計以消除危險",
          "減少對危險元素的暴露",
          "避免尖銳邊緣和角落",
          "最大化工作區域的可見性",
          "降低力、速度、質量、電功率",
          "限制排放（噪音、振動、有害物質）",
          "正確的材料選擇（耐腐蝕性、硬度）"
        ],
        example: "示例：將驅動電機從高處（+/- 2米）移至地面，完全消除維護工作時的墜落風險。"
      },
      step2: {
        title: "第2步：防護和/或補充防護措施",
        description: "當無法消除危險時，對其進行防護",
        categories: [
          {
            name: "防護裝置 (EN-ISO 14120)",
            items: ["固定防護裝置", "聯鎖可移動防護裝置", "可調節防護裝置"]
          },
          {
            name: "保護設備",
            items: ["非接觸式電氣保護設備", "壓敏保護設備", "雙手控制設備"]
          },
          {
            name: "安全系統",
            items: ["緊急停止裝置 (EN ISO 13850)", "安全距離", "運動限制", "環境保護"]
          }
        ],
        example: "示例：如果無法將驅動裝置移至地面，則提供帶固定樓梯和適當圍欄的平台，以安全到達維護位置。"
      },
      step3: {
        title: "第3步：使用信息",
        description: "告知用戶剩餘風險和安全操作",
        items: [
          "標記、標誌和圖標",
          "功能指示",
          "使用手冊",
          "培訓和指導"
        ],
        example: "示例：當無法消除或防護熱部件時，提供警告圖標並在用戶手冊中包含安全說明。"
      },
      standards: {
        title: "標準分類",
        typeA: {
          title: "A類標準",
          desc: "基本安全原則",
          example: "EN-ISO 12100（風險評估和風險降低）"
        },
        typeB: {
          title: "B類標準",
          desc: "技術安全方面和特徵",
          example: "EN-IEC 60204-1（機械電氣設備）"
        },
        typeC: {
          title: "C類標準",
          desc: "特定機械組",
          example: "EN 619（通用貨物輸送機）"
        }
      },
      question: "緊急停止裝置屬於哪一步？",
      answer: "第2步：防護和/或補充防護措施"
    }
  };

  const currentContent = content[language];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-green-50 min-h-screen">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            <Shield className="text-blue-600" size={32} />
            <div>
              <h1 className="text-3xl font-bold text-gray-800">{currentContent.title}</h1>
              <p className="text-gray-600">{currentContent.subtitle}</p>
            </div>
          </div>
          <button
            onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Globe size={20} />
            {language === 'en' ? '中文' : 'English'}
          </button>
        </div>
      </div>

      {/* Three-Step Method Overview */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center gap-2">
          <AlertTriangle className="text-orange-500" />
          {currentContent.threeStepMethod}
        </h2>
        <p className="text-gray-700 mb-4">{currentContent.threeStepDesc}</p>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-green-100 p-4 rounded-lg border-l-4 border-green-500">
            <h3 className="font-bold text-green-800">1. {language === 'en' ? 'Inherently Safe Design' : '本質安全設計'}</h3>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-500">
            <h3 className="font-bold text-yellow-800">2. {language === 'en' ? 'Safeguarding Measures' : '防護措施'}</h3>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-bold text-blue-800">3. {language === 'en' ? 'Information for Use' : '使用信息'}</h3>
          </div>
        </div>
      </div>

      {/* Step 1 */}
      <div className="bg-white rounded-lg shadow-lg mb-6">
        <button
          onClick={() => toggleSection('step1')}
          className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <h2 className="text-xl font-bold text-green-800 flex items-center gap-2">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
            {currentContent.step1.title}
          </h2>
          {expandedSections.step1 ? <ChevronDown /> : <ChevronRight />}
        </button>
        
        {expandedSections.step1 && (
          <div className="px-6 pb-6">
            <p className="text-gray-700 mb-4">{currentContent.step1.description}</p>
            <div className="bg-green-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">{language === 'en' ? 'Examples:' : '示例：'}</h4>
              <ul className="space-y-1">
                {currentContent.step1.examples.map((example, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span className="text-sm">{example}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-sm italic">{currentContent.step1.example}</p>
            </div>
          </div>
        )}
      </div>

      {/* Step 2 */}
      <div className="bg-white rounded-lg shadow-lg mb-6">
        <button
          onClick={() => toggleSection('step2')}
          className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <h2 className="text-xl font-bold text-yellow-800 flex items-center gap-2">
            <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
            {currentContent.step2.title}
          </h2>
          {expandedSections.step2 ? <ChevronDown /> : <ChevronRight />}
        </button>
        
        {expandedSections.step2 && (
          <div className="px-6 pb-6">
            <p className="text-gray-700 mb-4">{currentContent.step2.description}</p>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              {currentContent.step2.categories.map((category, index) => (
                <div key={index} className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">{category.name}</h4>
                  <ul className="space-y-1">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm flex items-start gap-2">
                        <span className="text-yellow-600 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-sm italic">{currentContent.step2.example}</p>
            </div>
          </div>
        )}
      </div>

      {/* Step 3 */}
      <div className="bg-white rounded-lg shadow-lg mb-6">
        <button
          onClick={() => toggleSection('step3')}
          className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <h2 className="text-xl font-bold text-blue-800 flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
            {currentContent.step3.title}
          </h2>
          {expandedSections.step3 ? <ChevronDown /> : <ChevronRight />}
        </button>
        
        {expandedSections.step3 && (
          <div className="px-6 pb-6">
            <p className="text-gray-700 mb-4">{currentContent.step3.description}</p>
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">{language === 'en' ? 'Includes:' : '包括：'}</h4>
              <ul className="grid md:grid-cols-2 gap-2">
                {currentContent.step3.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-sm italic">{currentContent.step3.example}</p>
            </div>
          </div>
        )}
      </div>

      {/* Standards Classification */}
      <div className="bg-white rounded-lg shadow-lg mb-6">
        <button
          onClick={() => toggleSection('standards')}
          className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <h2 className="text-xl font-bold text-purple-800 flex items-center gap-2">
            <Book className="text-purple-600" />
            {currentContent.standards.title}
          </h2>
          {expandedSections.standards ? <ChevronDown /> : <ChevronRight />}
        </button>
        
        {expandedSections.standards && (
          <div className="px-6 pb-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h3 className="font-bold text-purple-800 mb-2">{currentContent.standards.typeA.title}</h3>
                <p className="text-sm text-gray-700 mb-2">{currentContent.standards.typeA.desc}</p>
                <p className="text-xs italic">{currentContent.standards.typeA.example}</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <h3 className="font-bold text-indigo-800 mb-2">{currentContent.standards.typeB.title}</h3>
                <p className="text-sm text-gray-700 mb-2">{currentContent.standards.typeB.desc}</p>
                <p className="text-xs italic">{currentContent.standards.typeB.example}</p>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
                <h3 className="font-bold text-teal-800 mb-2">{currentContent.standards.typeC.title}</h3>
                <p className="text-sm text-gray-700 mb-2">{currentContent.standards.typeC.desc}</p>
                <p className="text-xs italic">{currentContent.standards.typeC.example}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quiz Section */}
      <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <Info className="text-orange-600" />
          <h2 className="text-xl font-bold text-orange-800">{language === 'en' ? 'Quiz Question' : '問答題'}</h2>
        </div>
        <div className="bg-white p-4 rounded-lg mb-4">
          <p className="font-semibold mb-2">{currentContent.question}</p>
          <div className="bg-green-100 p-3 rounded border-l-4 border-green-500">
            <p className="text-green-800 font-medium">{language === 'en' ? 'Answer:' : '答案：'} {currentContent.answer}</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-8 text-gray-600">
        <p className="text-sm">
          {language === 'en' 
            ? 'Based on Machinery Directive and EN-ISO 12100 standards' 
            : '基於機械指令和EN-ISO 12100標準'
          }
        </p>
      </div>
    </div>
  );
};

export default RiskReductionPrinciples;