import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Globe, FileText, Shield, CheckCircle } from 'lucide-react';
import './2-3.css';

const TechnicalFileGuide = () => {
  const [language, setLanguage] = useState('en');
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const content = {
    en: {
      title: "Technical File Guide",
      subtitle: "Machinery Safety Specialist (CE)",
      moduleInfo: "Tab 2: CE-process and documentation - Module 3: Technical file",
      
      purpose: {
        title: "Purpose of the Technical File (TF)",
        items: [
          "To record how the machine has been designed",
          "To record how the machine has been made safe",
          "Legal function"
        ]
      },
      
      requirements: {
        title: "Requirements According to Machinery Directive (2006/42/EC)",
        items: [
          "Collection of documents on design and safety",
          "May lay elsewhere (supplier)",
          "Can be retrieved within a few working days",
          "In one or more of the official Community languages",
          "Retrievable only by government (Labour Authority)",
          "Retain for 10 years",
          "Burden of proof in liability disputes"
        ]
      },
      
      contents: {
        title: "Technical File Contents",
        items: [
          {
            id: 1,
            title: "General description of the machinery",
            details: ["Intended and unintended use", "Operation of the machine"]
          },
          {
            id: 2,
            title: "Overview plan, control circuit drawings, description",
            details: ["Overview drawings of the machinery", "Drawings of the control circuits", "Descriptions and explanations to understand the operation"]
          },
          {
            id: 3,
            title: "Detailed drawings, calculations, test results, diagrams",
            details: ["Detailed and complete drawings", "Electrical diagrams", "Operating patterns", "Supplemented by: Calculations, Test results, Declarations"]
          },
          {
            id: 4,
            title: "Documentation risk assessment",
            details: [
              "A list of the essential health and safety requirements which apply to the machinery concerned",
              "The risk assessment carried out",
              "The risk assessment methodology used",
              "Description of preventive measures",
              "Description of safeguards applied",
              "Describe any warnings attached to the machine",
              "Describe other safety measures"
            ]
          },
          {
            id: 5,
            title: "Applied standards",
            details: ["Applied standards and normative documents", "Other technical specifications applied"]
          },
          {
            id: 6,
            title: "Reports or certificates of inspection bodies",
            details: [
              "Technical reports of inspections, tests, etc. from the manufacturer, an inspection body or an authorized laboratory",
              "Certificates from the manufacturer, an inspection body or an authorized laboratory"
            ]
          },
          {
            id: 7,
            title: "Copy of operating instructions",
            details: ["A copy of the instructions for the machine", "Any commercial documentation"]
          },
          {
            id: 8,
            title: "Information and suppliers' declarations",
            details: [
              "Operating manuals",
              "EC declarations of conformity (MD, EMC, LD, ATEX, PED)",
              "Other documents",
              "Assembly instructions (partly completed machinery)",
              "Declaration of incorporation (partly completed machinery)"
            ]
          },
          {
            id: 9,
            title: "EC Declaration of Conformity",
            details: ["EC declaration of conformity of the assembled machinery"]
          }
        ]
      },
      
      partlyCompleted: {
        title: "Partly Completed Machinery",
        subtitle: "Technical Documents (TD) Requirements",
        notMandatory: {
          title: "Not Mandatory",
          items: [
            "Description of the machinery (intended use, operation, explanation)",
            "Declaration of Conformity",
            "Information and declarations by suppliers"
          ]
        },
        mandatory: {
          title: "Mandatory",
          items: ["Copy of the assembly manual"]
        }
      }
    },
    
    zh: {
      title: "技術檔案指南",
      subtitle: "機械安全專員 (CE)",
      moduleInfo: "標籤2：CE流程和文件 - 模組3：技術檔案",
      
      purpose: {
        title: "技術檔案 (TF) 的目的",
        items: [
          "記錄機械的設計方式",
          "記錄機械如何確保安全",
          "法律功能"
        ]
      },
      
      requirements: {
        title: "根據機械指令 (2006/42/EC) 的要求",
        items: [
          "設計和安全相關文件的集合",
          "可能存放在其他地方（供應商）",
          "可在幾個工作日內檢索",
          "以一種或多種官方歐盟語言編寫",
          "僅可由政府（勞動當局）檢索",
          "保留10年",
          "責任爭議中的舉證責任"
        ]
      },
      
      contents: {
        title: "技術檔案內容",
        items: [
          {
            id: 1,
            title: "機械的一般描述",
            details: ["預期和非預期用途", "機械的操作"]
          },
          {
            id: 2,
            title: "總覽圖、控制電路圖、描述",
            details: ["機械的總覽圖", "控制電路圖", "理解操作的描述和解釋"]
          },
          {
            id: 3,
            title: "詳細圖紙、計算、測試結果、圖表",
            details: ["詳細完整的圖紙", "電氣圖", "操作模式", "補充內容：計算、測試結果、聲明"]
          },
          {
            id: 4,
            title: "風險評估文件",
            details: [
              "適用於相關機械的基本健康和安全要求清單",
              "已進行的風險評估",
              "使用的風險評估方法",
              "預防措施描述",
              "應用的安全防護描述",
              "描述機械上的任何警告",
              "描述其他安全措施"
            ]
          },
          {
            id: 5,
            title: "應用標準",
            details: ["應用的標準和規範性文件", "其他應用的技術規範"]
          },
          {
            id: 6,
            title: "檢驗機構的報告或證書",
            details: [
              "來自製造商、檢驗機構或授權實驗室的檢驗、測試等技術報告",
              "來自製造商、檢驗機構或授權實驗室的證書"
            ]
          },
          {
            id: 7,
            title: "操作說明副本",
            details: ["機械說明書副本", "任何商業文件"]
          },
          {
            id: 8,
            title: "信息和供應商聲明",
            details: [
              "操作手冊",
              "EC符合性聲明 (MD, EMC, LD, ATEX, PED)",
              "其他文件",
              "裝配說明（部分完成的機械）",
              "合併聲明（部分完成的機械）"
            ]
          },
          {
            id: 9,
            title: "EC符合性聲明",
            details: ["組裝機械的EC符合性聲明"]
          }
        ]
      },
      
      partlyCompleted: {
        title: "部分完成的機械",
        subtitle: "技術文件 (TD) 要求",
        notMandatory: {
          title: "非強制性",
          items: [
            "機械描述（預期用途、操作、解釋）",
            "符合性聲明",
            "供應商的信息和聲明"
          ]
        },
        mandatory: {
          title: "強制性",
          items: ["裝配手冊副本"]
        }
      }
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">{currentContent.title}</h1>
                <p className="text-sm text-gray-600">{currentContent.subtitle}</p>
              </div>
            </div>
            
            <button
              onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
              className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              <Globe size={18} />
              <span>{language === 'en' ? '中文' : 'English'}</span>
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-2">{currentContent.moduleInfo}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Purpose Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center space-x-3 mb-4">
            <FileText className="text-green-500" size={24} />
            <h2 className="text-xl font-bold text-gray-800">{currentContent.purpose.title}</h2>
          </div>
          <ul className="space-y-2">
            {currentContent.purpose.items.map((item, index) => (
              <li key={index} className="flex items-start space-x-2">
                <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Requirements Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="text-blue-500" size={24} />
            <h2 className="text-xl font-bold text-gray-800">{currentContent.requirements.title}</h2>
          </div>
          <ul className="space-y-2">
            {currentContent.requirements.items.map((item, index) => (
              <li key={index} className="flex items-start space-x-2">
                <CheckCircle className="text-blue-500 mt-0.5 flex-shrink-0" size={16} />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contents Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">{currentContent.contents.title}</h2>
          <div className="space-y-3">
            {currentContent.contents.items.map((item) => (
              <div key={item.id} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleSection(`content-${item.id}`)}
                  className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      {item.id}
                    </span>
                    <span className="font-medium text-gray-800 text-left">{item.title}</span>
                  </div>
                  {expandedSections[`content-${item.id}`] ? 
                    <ChevronDown className="text-gray-400" size={20} /> : 
                    <ChevronRight className="text-gray-400" size={20} />
                  }
                </button>
                
                {expandedSections[`content-${item.id}`] && (
                  <div className="px-4 pb-4">
                    <ul className="space-y-2 ml-9">
                      {item.details.map((detail, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Partly Completed Machinery Section */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2">{currentContent.partlyCompleted.title}</h2>
          <p className="text-gray-600 mb-6">{currentContent.partlyCompleted.subtitle}</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 rounded-lg p-4">
              <h3 className="font-bold text-red-700 mb-3">{currentContent.partlyCompleted.notMandatory.title}</h3>
              <ul className="space-y-2">
                {currentContent.partlyCompleted.notMandatory.items.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-red-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-bold text-green-700 mb-3">{currentContent.partlyCompleted.mandatory.title}</h3>
              <ul className="space-y-2">
                {currentContent.partlyCompleted.mandatory.items.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-green-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <div className="flex items-center justify-center space-x-2 text-gray-500">
            <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">K</span>
            </div>
            <span className="text-sm">Kader Academy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalFileGuide;