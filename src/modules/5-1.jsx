import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronRight, ChevronDown, Globe, BookOpen, Shield, AlertTriangle, CheckCircle, Users, Wrench } from 'lucide-react';

const WorkEquipmentDirective = () => {
  const { i18n } = useTranslation();
  const language = i18n.language && i18n.language.startsWith('zh') ? 'zh' : 'en';
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
        question51: {
          title: "Question 5-1: Annex I subjects – differences and similarities",
          content: [
            "What are the differences and similarities with the subjects on which the Machinery Directive sets requirements in Annex I?",
            "",
            "Subjects (Annex I / general minimum requirements):",
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
            "• Electricity",
            "",
            "Answer – Similarities:",
            "• All are part of Annex I “essential health and safety requirements”; the manufacturer must satisfy them in design and construction.",
            "• All are risk-based: risk assessment (e.g. EN ISO 12100) drives the choice of measures.",
            "• All must be documented in the technical file and in the conformity assessment.",
            "• Most combine “design + information for use” (instructions, warnings, maintenance).",
            "",
            "Answer – Differences:",
            "• Start/stop: Has its own Annex I subsections (e.g. 1.2.2 start, 1.2.3 stop) with explicit requirements for normal/abnormal stop and emergency stop.",
            "• Moving parts: Tightly linked to guards (fixed, adjustable, interlocked) and often to safety distances (e.g. EN ISO 13857).",
            "• Electricity: Often overlaps with the Low Voltage Directive; electrical safety has its own sub-requirements.",
            "• Fire/explosion: In explosive atmospheres, ATEX etc. apply; otherwise general fire and overheating protection.",
            "• Strength/stability: More “structural/geometric” (stability, mechanical strength); less about controls or interfaces.",
            "• Lighting / Temperature: More about working environment and ergonomics (operator position, visibility, comfort).",
            "• Alarm / Warnings: Part of “information and signals”; alarms are audible/visible safety-related signals; warnings are in the manual and labels.",
            "• Maintenance, installation, (dis)assembly: Annex I requires that these can be done safely; often linked to access, lockout, and instructions.",
            "• Service: Broad (operation, setup, maintenance, troubleshooting); in Annex I it is spread across “operation”, “maintenance”, “information for use”."
          ]
        },
        exercise52: {
          title: "Exercise 5-2",
          content: [
            "Test the following situation against the literal Minimum Requirements text. Does the work equipment comply with:",
            "",
            "Work Equipment Directive, par. 2.8 (Working Conditions Decree 7.7):",
            "\"Where moving parts of work equipment are liable to come into contact with mechanical accidents, they must be fitted with screens or devices designed to prevent access to danger zones or to stop the movement of dangerous parts before they reach them.\"",
            "",
            "Scenario:",
            "• The area around the discharge belts may be disregarded.",
            "• Both conveyor belts are accessible.",
            "",
            "Answer:",
            "No. Various dangerous movements (crushing by chain/sprocket and belt/roller) are accessible and not equipped with screens or protective devices."
          ]
        },
        exercise53: {
          title: "Exercise 5-3",
          content: [
            "Test the following situation against the literal Minimum Requirements text.",
            "Does the work equipment comply with:",
            "",
            "Work Equipment Directive, par. 2.4 (Working Conditions Decree 7.16):",
            "\"If this is necessary in view of the hazards of the work equipment and the normal switch-off time, work equipment must be equipped with an emergency stop device.\"",
            "",
            "Scenario:",
            "• The green button on the control panel of the press brake works according to the control requirements of an emergency stop device.",
            "",
            "Answer:",
            "Yes. The work equipment is equipped with an emergency stop device.",
            "",
            "PS. Work Equipment Directive, section 2.1 is not complied with."
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
        },
        exercise54: {
          title: "Exercise 5-4",
          content: [
            "Answer the questions below:",
            "",
            "1. What is meant by work equipment?",
            "Answer: Work equipment means any machinery, equipment, tool or installation used at the workplace (Work Equipment Directive 2009/104/EC, Art. 2). Examples: hand tools, production machinery, forklifts, industrial installations.",
            "",
            "2. Name a number of topics (regulations) that are covered in the Work Equipment Directive.",
            "Answer: Topics covered include: service; start/stop; strength/stability; moving parts; lighting; temperature; alarm; maintenance, installation, (dis)assembly; warnings; fire/explosion; electricity (Attachment 1 – minimum requirements). Plus additional requirements for mobile work equipment, lifting/hoisting equipment, and temporary work at height.",
            "",
            "3. Where in Dutch law can the Work Equipment Directive be found?",
            "Answer: The Work Equipment Directive (2009/104/EC) is transposed into Dutch law in the Working Conditions Act (Arbowet) and the Working Conditions Decree (Arbobesluit), in particular Chapter 7 on work equipment.",
            "",
            "4. The Work Equipment Directive is a specific directive for work equipment. What is the overarching Directive?",
            "Answer: The overarching directive is the Framework Directive 89/391/EEC on the introduction of measures to encourage improvements in the safety and health of workers at work. The employer is responsible for ensuring workers’ safety and health; the Work Equipment Directive is one of the individual directives under this framework."
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
        question51: {
          title: "題目 5-1：附錄 I 主題的異同",
          content: [
            "機械指令在附錄 I 中對下列主題設定了要求，這些主題之間有何異同？",
            "",
            "主題（附錄 I／一般最低要求）：",
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
            "• 電氣",
            "",
            "答案 — 相同點：",
            "• 皆屬附錄 I「基本健康與安全要求」的一環，製造商須在設計與製造時一併滿足。",
            "• 皆以風險為本：依風險評估（如 EN ISO 12100）決定採取的措施。",
            "• 皆須在技術檔案與符合性評估中說明。",
            "• 多數結合「設計＋使用資訊」（說明書、警告、維護）。",
            "",
            "答案 — 相異點：",
            "• 啟動/停止：附錄 I 有專門小節（如 1.2.2 啟動、1.2.3 停止），對正常/異常停止與緊急停止有明確要求。",
            "• 移動部件：與防護（固定/可調/聯鎖）緊密連結，常涉及安全距離（如 EN ISO 13857）。",
            "• 電氣：常與低電壓指令重疊，電氣安全有獨立子項要求。",
            "• 火災/爆炸：潛在爆炸環境須符合 ATEX 等；一般為防火與過熱防護。",
            "• 強度/穩定性：偏結構與幾何（穩定性、機械強度），較少涉及控制或介面。",
            "• 照明／溫度：偏工作環境與人因（操作員位置、視野、舒適性）。",
            "• 警報／警告：屬「使用資訊與信號」；警報為可聽/可視的安全相關信號，警告見於說明書與標示。",
            "• 維護、安裝、（拆）組裝：附錄 I 要求能安全執行，常與通道、上鎖/掛牌、說明書並列。",
            "• 服務：廣義含操作、設定、維護、故障排除；在附錄 I 中分散於「操作」「維護」「使用資訊」。"
          ]
        },
        exercise52: {
          title: "練習 5-2",
          content: [
            "請依最低要求條文檢視下列情境，工作設備是否符合規定：",
            "",
            "工作設備指令第 2.8 條（工作條件法令 7.7）：",
            "「若工作設備的運動部件可能導致機械傷害，必須裝設護屏或裝置，以阻止進入危險區域，或在危險部件到達前停止其運動。」",
            "",
            "情境：",
            "• 出料輸送帶週邊可不予考慮。",
            "• 兩條輸送帶皆可觸及。",
            "",
            "答案：",
            "不符合。多處危險運動（鏈條/鏈輪與皮帶/滾筒之擠壓）可觸及，且未裝設護屏或防護裝置。"
          ]
        },
        exercise53: {
          title: "練習 5-3",
          content: [
            "請依最低要求條文檢視下列情境。",
            "工作設備是否符合規定：",
            "",
            "工作設備指令第 2.4 條（工作條件法令 7.16）：",
            "「若依工作設備之危害與正常關閉時間有此必要，工作設備必須裝設緊急停止裝置。」",
            "",
            "情境：",
            "• 折彎機控制盤上的綠色按鈕符合緊急停止裝置之控制要求。",
            "",
            "答案：",
            "符合。該工作設備已裝設緊急停止裝置。",
            "",
            "附註：工作設備指令第 2.1 節未獲遵守。"
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
        },
        exercise54: {
          title: "練習 5-4",
          content: [
            "請回答下列問題：",
            "",
            "1. 何謂工作設備？",
            "答案：工作設備指在工作場所使用的任何機械、設備、工具或裝置（工作設備指令 2009/104/EC 第2條）。例如：手工具、生產機械、堆高機、工業裝置。",
            "",
            "2. 請列舉工作設備指令所涵蓋的若干主題（規定）。",
            "答案：涵蓋主題包括：服務；啟動/停止；強度/穩定性；移動部件；照明；溫度；警報；維護、安裝、（拆）組裝；警告；火災/爆炸；電氣（附件1－最低要求）。此外還有移動式工作設備、起重與吊裝設備、高處臨時作業的額外要求。",
            "",
            "3. 工作設備指令在荷蘭法律中哪裡可以找到？",
            "答案：工作設備指令 (2009/104/EC) 已轉化進荷蘭的工作條件法（Arbowet）與工作條件法令（Arbobesluit），尤其是有關工作設備的第7章。",
            "",
            "4. 工作設備指令是針對工作設備的個別指令。其上位指令為何？",
            "答案：上位指令為關於實施改善工人工作安全與健康措施的框架指令 89/391/EEC。雇主負有確保勞工安全與健康的責任；工作設備指令是該框架下的個別指令之一。"
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
      question51: AlertTriangle,
      exercise52: CheckCircle,
      exercise53: CheckCircle,
      additionalRequirements: Shield,
      framework: BookOpen,
      employerObligations: Users,
      employeeObligations: Users,
      riskReduction: AlertTriangle,
      dutchLegislation: BookOpen,
      exercise54: CheckCircle
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
              onClick={() => i18n.changeLanguage(language === 'en' ? 'zh' : 'en')}
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