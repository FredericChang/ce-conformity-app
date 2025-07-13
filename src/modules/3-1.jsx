import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Globe, AlertTriangle, Users, Eye, Clock, Zap, Shield, BookOpen } from 'lucide-react';

const RiskAssessmentProcess = () => {
  const [language, setLanguage] = useState('en');
  const [expandedSections, setExpandedSections] = useState({});

  const content = {
    en: {
      title: "Risk Assessment Process - EN ISO 12100",
      subtitle: "Risk Estimation - Possibility of avoiding or limiting harm",
      mainFactors: "Factors to be taken into account when estimating the possibility of avoiding or limiting harm:",
      factors: [
        {
          id: 'education',
          icon: <BookOpen className="w-5 h-5" />,
          title: "Education of persons",
          description: "Education level of persons who can be exposed to the hazard(s)",
          details: [
            "Training provided to operators",
            "Safety awareness programs",
            "Competency assessments",
            "Ongoing education requirements"
          ]
        },
        {
          id: 'speed',
          icon: <Zap className="w-5 h-5" />,
          title: "Speed of hazardous situation",
          description: "How quickly the hazardous situation could lead to harm",
          details: [
            "Immediate vs. gradual harm development",
            "Warning time available",
            "Rate of hazard manifestation",
            "Time to implement protective measures"
          ]
        },
        {
          id: 'awareness',
          icon: <Eye className="w-5 h-5" />,
          title: "Risk awareness",
          description: "Any awareness of risk (information for use, direct observation, warning signs and indicating devices)",
          details: [
            "Warning systems and alarms",
            "Visual indicators and signs",
            "Information for use documentation",
            "Direct observation capabilities",
            "Feedback mechanisms"
          ]
        },
        {
          id: 'ability',
          icon: <Users className="w-5 h-5" />,
          title: "Human ability to avoid harm",
          description: "The human ability to avoid or limit harm (reflexes, agility)",
          details: [
            "Physical capabilities and limitations",
            "Reaction time and reflexes",
            "Agility and mobility",
            "Cognitive processing speed",
            "Age and health considerations"
          ]
        },
        {
          id: 'experience',
          icon: <Clock className="w-5 h-5" />,
          title: "Practical experience",
          description: "Practical experience and knowledge (of (similar) machinery)",
          details: [
            "Previous experience with similar equipment",
            "Understanding of machinery behavior",
            "Knowledge of potential hazards",
            "Familiarity with safety procedures",
            "Industry-specific expertise"
          ]
        }
      ],
      toggleExpand: "Click to expand/collapse details",
      riskEstimation: "Risk Estimation Components",
      processSteps: "Risk Assessment Process Steps"
    },
    zh: {
      title: "風險評估流程 - EN ISO 12100",
      subtitle: "風險估計 - 避免或限制傷害的可能性",
      mainFactors: "評估避免或限制傷害可能性時需考慮的因素：",
      factors: [
        {
          id: 'education',
          icon: <BookOpen className="w-5 h-5" />,
          title: "人員教育",
          description: "可能暴露於危險中的人員的教育水平",
          details: [
            "操作人員培訓",
            "安全意識計劃",
            "能力評估",
            "持續教育要求"
          ]
        },
        {
          id: 'speed',
          icon: <Zap className="w-5 h-5" />,
          title: "危險情況速度",
          description: "危險情況導致傷害的速度",
          details: [
            "即時與漸進傷害發展",
            "可用警告時間",
            "危險顯現速率",
            "實施保護措施的時間"
          ]
        },
        {
          id: 'awareness',
          icon: <Eye className="w-5 h-5" />,
          title: "風險意識",
          description: "對風險的任何認識（使用信息、直接觀察、警告標誌和指示裝置）",
          details: [
            "警告系統和警報",
            "視覺指示器和標誌",
            "使用信息文檔",
            "直接觀察能力",
            "反饋機制"
          ]
        },
        {
          id: 'ability',
          icon: <Users className="w-5 h-5" />,
          title: "人類避免傷害的能力",
          description: "人類避免或限制傷害的能力（反射、敏捷性）",
          details: [
            "身體能力和局限性",
            "反應時間和反射",
            "敏捷性和機動性",
            "認知處理速度",
            "年齡和健康考慮"
          ]
        },
        {
          id: 'experience',
          icon: <Clock className="w-5 h-5" />,
          title: "實踐經驗",
          description: "實踐經驗和知識（對（類似）機械的）",
          details: [
            "使用類似設備的經驗",
            "對機械行為的理解",
            "對潛在危險的認識",
            "對安全程序的熟悉",
            "行業特定專業知識"
          ]
        }
      ],
      toggleExpand: "點擊展開/收起詳細信息",
      riskEstimation: "風險估計組成部分",
      processSteps: "風險評估流程步驟"
    }
  };

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const currentContent = content[language];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-green-50 min-h-screen">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {currentContent.title}
            </h1>
            <div className="flex items-center text-sm text-gray-600">
              <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
              <span className="mr-4">Kader Academy</span>
              <span>Tab3-1/2-Sh.31</span>
            </div>
          </div>
          <button
            onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Globe className="w-4 h-4" />
            {language === 'en' ? '中文' : 'English'}
          </button>
        </div>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
          <h2 className="text-lg font-semibold text-blue-800 mb-2">
            {currentContent.subtitle}
          </h2>
          <p className="text-blue-700">
            {currentContent.mainFactors}
          </p>
        </div>
      </div>

      {/* Risk Factors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {currentContent.factors.map((factor, index) => (
          <div key={factor.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 rounded-lg mr-3">
                  {factor.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {factor.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-4 text-sm">
                {factor.description}
              </p>
              
              <button
                onClick={() => toggleSection(factor.id)}
                className="flex items-center justify-between w-full p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                title={currentContent.toggleExpand}
              >
                <span className="text-sm font-medium text-gray-700">
                  {language === 'en' ? 'Details' : '詳細信息'}
                </span>
                {expandedSections[factor.id] ? 
                  <ChevronDown className="w-4 h-4" /> : 
                  <ChevronRight className="w-4 h-4" />
                }
              </button>
              
              {expandedSections[factor.id] && (
                <div className="mt-4 space-y-2">
                  {factor.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Process Flow Diagram */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <AlertTriangle className="w-6 h-6 mr-2 text-orange-500" />
          {currentContent.processSteps}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { 
              step: "1", 
              title: language === 'en' ? "Determine Limits" : "確定限制",
              desc: language === 'en' ? "of the machinery" : "機械的限制"
            },
            { 
              step: "2", 
              title: language === 'en' ? "Identify Hazards" : "識別危險",
              desc: language === 'en' ? "potential sources of harm" : "潛在傷害源"
            },
            { 
              step: "3", 
              title: language === 'en' ? "Estimate Risk" : "估計風險",
              desc: language === 'en' ? "probability × severity" : "概率 × 嚴重性"
            },
            { 
              step: "4", 
              title: language === 'en' ? "Evaluate Risk" : "評估風險",
              desc: language === 'en' ? "acceptable level?" : "可接受水平？"
            }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
              {index < 3 && (
                <div className="hidden lg:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                  <ChevronRight className="w-6 h-6 text-gray-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-sm text-gray-500">
        <p>EN ISO 12100 - Safety of machinery - General principles for design - Risk assessment and risk reduction</p>
      </div>
    </div>
  );
};

export default RiskAssessmentProcess;