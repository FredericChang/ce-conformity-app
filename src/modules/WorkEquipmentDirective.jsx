import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Globe, BookOpen, Shield, AlertTriangle, CheckCircle, Users, Wrench } from 'lucide-react';

const WorkEquipmentDirective = () => {
  const [language, setLanguage] = useState('en');
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const content = {
    en: {
      title: "Work Equipment Directive",
      subtitle: "Module 1: Principles of the Work Equipment Directive",
      langButton: "中文",
      sections: {
        overview: {
          title: "Overview",
          content: [
            "The Work Equipment Directive (2009/104/EG) is included in the Working Conditions legislation in the Netherlands.",
            "Previously: 2001/45/EG (19-07-2004), 95/63/EG (5-12-2002), 89/655/EEG, mandatory by 1-1-1997",
            "Included in the Working Conditions Act (Working Conditions Decree Chapter 7)"
          ]
        },
        definition: {
          title: "Definition of Work Equipment",
          content: [
            "Article 2: All machinery, equipment, tools and installations used at the workplace",
            "Examples include: hand tools, production machinery, forklifts, and industrial installations"
          ]
        },
        basicIdea: {
          title: "Basic Principle",
          content: [
            "The safety level of work equipment must be guaranteed during all phases of its lifespan:",
            "• Transport",
            "• Installation and adjustment", 
            "• Use, Setup",
            "• Operation, cleaning",
            "• Programming, maintenance",
            "• Decommissioning, demolition and disposal"
          ]
        },
        structure: {
          title: "Structure of the Directive",
          content: [
            "• Considerations",
            "• Articles", 
            "• Attachments:",
            "  - 1. Minimum requirements",
            "  - 2. Additional requirements"
          ]
        },
        stepByStep: {
          title: "Step-by-Step Implementation Plan",
          content: [
            "Risk inventory and evaluation:",
            "1. Inventory of work equipment",
            "2. Assessment of minimum requirements", 
            "3. Risk assessment (Dangers, Risk analysis, Risk assessment)",
            "4. Risk reduction (testing against standards)",
            "5. Drawing up and implementing an action plan",
            "",
            "Periodical activities:",
            "6. Inspections and tests",
            "7. Drawing up a maintenance plan",
            "8. Organizational obligations (Procedures, instructions, Information, training, Supervision)"
          ]
        },
        minimumRequirements: {
          title: "General Minimum Requirements (Attachment 1)",
          content: [
            "• Service",
            "• Start/stop",
            "• Strength/stability", 
            "• Moving parts",
            "• Lighting",
            "• Temperature",
            "• Alarm",
            "• Maintenance, installation, (dis)assembly",
            "• Warnings",
            "• Fire/explosion",
            "• Electricity"
          ]
        },
        additionalRequirements: {
          title: "Additional Requirements",
          content: [
            "Mobile Work Equipment:",
            "• Ride along, Energy transmission, Stability, Collision, Running, Braking/stopping, Sight, Lighting, Education, People on foot in work zone, Combustion engine",
            "",
            "Lifting and Hoisting Equipment:",
            "• Strength and stability, Nominal load indication, Hoisting and lifting accessories, Falling/colliding loads, Hoisting/lifting persons, Communication, Evacuation, Operation and supervision, Performing work, Coordination/procedures, Power supply failure, Weather",
            "",
            "Temporary Work at Height:",
            "• Suitable resources, (Separate) ladder can be used to a limited extent, Positioning ladder, Fall protection devices, Weather, Scaffolding, Working line/safety line (independent)"
          ]
        },
        framework: {
          title: "Framework Directive (89/391/EEG)",
          content: [
            "Purpose: To improve the safety and health of workers. The employer is obliged to ensure the safety and health of the employees.",
            "The employer is always responsible, even if third parties are called upon.",
            "Included in the Working Conditions Act, various decrees"
          ]
        },
        employerObligations: {
          title: "Employer's Obligations",
          content: [
            "• Performing a risk inventory and evaluation",
            "• Drawing up an action plan", 
            "• Adaptation of work (ergonomics)",
            "• Taking into account technical developments",
            "• Replacement of hazardous situations with less dangerous situations",
            "• Planning of prevention measures",
            "• Organization, policy, consultation structure, procedures, instructions",
            "• Company emergency plan, emergency response",
            "• Appointing a prevention officer",
            "• Information and training",
            "• Participation",
            "• Monitoring risks in the workplace",
            "• Opportunity for regular medical examinations"
          ]
        },
        employeeObligations: {
          title: "Employee's Obligations",
          content: [
            "• Use work equipment and hazardous substances correctly",
            "• Use the personal protective equipment made available correctly",
            "• Not modify or remove safety devices installed on work equipment",
            "• Cooperate in the instruction organized for them",
            "• Report safety or health hazards noticed to the employer or manager",
            "• Assist the employer and other employees in the performance of their obligations"
          ]
        },
        riskReduction: {
          title: "Risk Reduction Strategy (Occupational Hygiene Strategy)",
          content: [
            "1. Source measures: Remove the cause of the problem (e.g., replacing harmful substances)",
            "2. Collective (technical) measures: Install shielding or extraction systems", 
            "3. Individual (organizational) measures: Task rotation, reduce exposure time",
            "4. Personal protective equipment: Hearing protection, safety shoes (free of charge)"
          ]
        },
        dutchLegislation: {
          title: "Dutch Working Conditions Legislation",
          content: [
            "• Working Conditions Act (part of the Civil Code)",
            "• Working Conditions Decree",
            "• Working Conditions Regulations", 
            "• Health and Safety Catalogue",
            "• Arbo Information sheets",
            "• European standards"
          ]
        }
      }
    },
    zh: {
      title: "工作設備指令",
      subtitle: "模組1：工作設備指令原則",
      langButton: "English",
      sections: {
        overview: {
          title: "概述",
          content: [
            "工作設備指令 (2009/104/EG) 被納入荷蘭的工作條件立法中。",
            "先前版本：2001/45/EG (19-07-2004)、95/63/EG (5-12-2002)、89/655/EEG，自1997年1月1日起強制執行",
            "納入工作條件法（工作條件法令第7章）"
          ]
        },
        definition: {
          title: "工作設備定義",
          content: [
            "第2條：在工作場所使用的所有機械、設備、工具和裝置",
            "例如：手工具、生產機械、堆高機和工業裝置"
          ]
        },
        basicIdea: {
          title: "基本原則",
          content: [
            "工作設備的安全水準必須在其生命週期的所有階段得到保證：",
            "• 運輸",
            "• 安裝和調整",
            "• 使用、設置",
            "• 操作、清潔",
            "• 程式設計、維護",
            "• 除役、拆除和處置"
          ]
        },
        structure: {
          title: "指令結構",
          content: [
            "• 考量事項",
            "• 條文",
            "• 附件：",
            "  - 1. 最低要求",
            "  - 2. 額外要求"
          ]
        },
        stepByStep: {
          title: "逐步實施計劃",
          content: [
            "風險清查和評估：",
            "1. 工作設備清查",
            "2. 最低要求評估",
            "3. 風險評估（危險、風險分析、風險評估）",
            "4. 風險降低（對照標準測試）",
            "5. 制定和實施行動計劃",
            "",
            "定期活動：",
            "6. 檢查和測試",
            "7. 制定維護計劃",
            "8. 組織義務（程序、指示、資訊、培訓、監督）"
          ]
        },
        minimumRequirements: {
          title: "一般最低要求（附件1）",
          content: [
            "• 服務",
            "• 啟動/停止",
            "• 強度/穩定性",
            "• 移動部件",
            "• 照明",
            "• 溫度",
            "• 警報",
            "• 維護、安裝、（拆）組裝",
            "• 警告",
            "• 火災/爆炸",
            "• 電氣"
          ]
        },
        additionalRequirements: {
          title: "額外要求",
          content: [
            "移動式工作設備：",
            "• 乘坐、能量傳輸、穩定性、碰撞、運行、制動/停止、視線、照明、教育、工作區域內行人、內燃機",
            "",
            "起重和吊裝設備：",
            "• 強度和穩定性、額定負載指示、起重和吊裝配件、墜落/碰撞負載、起重/吊裝人員、通訊、疏散、操作和監督、執行工作、協調/程序、電源故障、天氣",
            "",
            "高處臨時作業：",
            "• 合適資源、（獨立）梯子可有限使用、梯子定位、墜落保護裝置、天氣、腳手架、工作繩/安全繩（獨立）"
          ]
        },
        framework: {
          title: "框架指令 (89/391/EEG)",
          content: [
            "目的：改善工人的安全和健康。雇主有義務確保員工的安全和健康。",
            "雇主始終負責，即使委託第三方也是如此。",
            "納入工作條件法，各種法令"
          ]
        },
        employerObligations: {
          title: "雇主義務",
          content: [
            "• 執行風險清查和評估",
            "• 制定行動計劃",
            "• 工作適應（人體工學）",
            "• 考慮技術發展",
            "• 用較少危險的情況替換危險情況",
            "• 預防措施規劃",
            "• 組織、政策、諮詢結構、程序、指示",
            "• 公司緊急計劃、緊急應變",
            "• 指派預防官員",
            "• 資訊和培訓",
            "• 參與",
            "• 監控工作場所風險",
            "• 定期健康檢查機會"
          ]
        },
        employeeObligations: {
          title: "員工義務",
          content: [
            "• 正確使用工作設備和危險物質",
            "• 正確使用提供的個人防護設備",
            "• 不得修改或移除工作設備上安裝的安全裝置",
            "• 配合為其組織的指導",
            "• 向雇主或管理者報告注意到的安全或健康危險",
            "• 協助雇主和其他員工履行其義務"
          ]
        },
        riskReduction: {
          title: "風險降低策略（職業衛生策略）",
          content: [
            "1. 源頭措施：消除問題根源（例如：更換有害物質）",
            "2. 集體（技術）措施：安裝屏蔽或抽取系統",
            "3. 個人（組織）措施：任務輪換，減少暴露時間",
            "4. 個人防護設備：聽力保護、安全鞋（免費提供）"
          ]
        },
        dutchLegislation: {
          title: "荷蘭工作條件立法",
          content: [
            "• 工作條件法（民法的一部分）",
            "• 工作條件法令",
            "• 工作條件規定",
            "• 健康與安全目錄",
            "• 勞動資訊表",
            "• 歐洲標準"
          ]
        }
      }
    }
  };

  const currentContent = content[language];

  const getSectionIcon = (sectionKey) => {
    const icons = {
      overview: BookOpen,
      definition: AlertTriangle,
      basicIdea: Shield,
      structure: ChevronRight,
      stepByStep: CheckCircle,
      minimumRequirements: Shield,
      additionalRequirements: Shield,
      framework: BookOpen,
      employerObligations: Users,
      employeeObligations: Users,
      riskReduction: AlertTriangle,
      dutchLegislation: BookOpen
    };
    return icons[sectionKey] || BookOpen;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">{currentContent.title}</h1>
                <p className="text-gray-600">{currentContent.subtitle}</p>
              </div>
            </div>
            <button
              onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg hover:from-green-500 hover:to-blue-600 transition-all duration-200 shadow-md"
            >
              <Globe className="w-4 h-4" />
              <span>{currentContent.langButton}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid gap-6">
          {Object.entries(currentContent.sections).map(([sectionKey, section]) => {
            const IconComponent = getSectionIcon(sectionKey);
            const isExpanded = expandedSections[sectionKey];
            
            return (
              <div key={sectionKey} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <button
                  onClick={() => toggleSection(sectionKey)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800 text-left">{section.title}</h2>
                  </div>
                  <div className="transform transition-transform duration-200">
                    {isExpanded ? (
                      <ChevronDown className="w-5 h-5 text-gray-600" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                </button>
                
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-gray-100 bg-gray-50">
                    <div className="prose max-w-none">
                      {section.content.map((item, index) => (
                        <div key={index} className="mb-2">
                          {item === "" ? (
                            <div className="h-2"></div>
                          ) : item.startsWith('•') ? (
                            <div className="flex items-start space-x-2 ml-4">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-gray-700 leading-relaxed">{item.substring(2)}</p>
                            </div>
                          ) : item.match(/^\d+\./) ? (
                            <p className="text-gray-800 font-medium leading-relaxed">{item}</p>
                          ) : item.endsWith(':') ? (
                            <p className="text-gray-800 font-semibold leading-relaxed mt-3 mb-1">{item}</p>
                          ) : (
                            <p className="text-gray-700 leading-relaxed">{item}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-600">
          <p className="text-sm">
            {language === 'en' 
              ? "Based on the Work Equipment Directive 2009/104/EG and Dutch Working Conditions legislation"
              : "基於工作設備指令 2009/104/EG 和荷蘭工作條件立法"
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkEquipmentDirective; 