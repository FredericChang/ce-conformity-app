import React, { useState } from 'react';
import { ChevronRight, FileText, CheckCircle, AlertTriangle, Info, Globe, Menu, X, Shield, GraduationCap, Wrench, Zap, Calculator } from 'lucide-react';
import { RiskAssessment, TechnicalFile, Inspection, MachineSafetyTraining, MachineryModificationGuide, MachinerySafetyManual, TechnicalFileGuide, MachinerySafetyDocs, MachinerySafetyInfo, RiskAssessmentProcess, RiskReductionPrinciples, MachineSafetyCourse, SafetyDistanceCalculator, MachineGuards, FunctionalSafety, MachineAccessSafety, MachineSafetyModule, getModulesByLanguage } from './modules';

const CEConformityApp = () => {
  const [currentLanguage, setCurrentLanguage] = useState('zh');
  const [activeSection, setActiveSection] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const translations = {
    zh: {
      title: 'CE符合性流程',
      subtitle: '機械安全專家完整指南',
      description: '基於機械指令 2006/42/EC | 整合到專案方法中',
      navigation: '導航選單',
              sections: {
          overview: '總覽',
          machineSafetyTraining: '機械安全專家培訓',
          machineryModification: '現有機械改造指南',
          machinerySafetyManual: '機械安全使用說明書',
          technicalFileGuide: '技術檔案指南',
          machinerySafetyDocs: '符合性聲明',
          machinerySafetyInfo: '使用資訊',
          research: 'A: 預先研究',
          iterative: 'B: 迭代流程',
          documentation: 'C: 文件資料',
          technicalFile: 'D: 技術檔案',
          inspection: '檢驗模組',
          practical: '實務指南',
          standards: '標準範例',
          riskAssessment: '風險評估模組',
          riskAssessmentProcess: '風險評估流程',
          riskReductionPrinciples: '風險降低原則',
          machineSafetyCourse: '機械安全課程',
          safetyDistanceCalculator: '安全距離計算機',
          machineGuards: '機器防護裝置',
          functionalSafety: '功能安全 SIL/PL',
          machineAccessSafety: '永久性通道設施',
          machineSafetyModule: '啟動、停止和復位',
          technicalFileModule: '技術檔案模組',
          inspection: '檢查模組'
        }
    },
    en: {
      title: 'CE Conformity Process',
      subtitle: 'Complete Guide for Machine Safety Specialists',
      description: 'Based on Machine Directive 2006/42/EC | Integrate into Project Approach',
      navigation: 'Navigation',
              sections: {
          overview: 'Overview',
          machineSafetyTraining: 'Machine Safety Specialist Training',
          machineryModification: 'Existing Machinery Modification Guide',
          machinerySafetyManual: 'Machinery Safety Manual',
          technicalFileGuide: 'Technical File Guide',
          machinerySafetyDocs: 'Declaration of Conformity',
          machinerySafetyInfo: 'Information for Use',
          research: 'A: Research Phase',
          iterative: 'B: Iterative Processes',
          documentation: 'C: Documentation',
          technicalFile: 'D: Technical File',
          inspection: 'Inspection Modules',
          practical: 'Practical Guide',
          standards: 'Standards Examples',
          riskAssessment: 'Risk Assessment Module',
          riskAssessmentProcess: 'Risk Assessment Process',
          riskReductionPrinciples: 'Risk Reduction Principles',
          machineSafetyCourse: 'Machine Safety Course',
          safetyDistanceCalculator: 'Safety Distance Calculator',
          machineGuards: 'Machine Guards',
          functionalSafety: 'Functional Safety SIL/PL',
          machineAccessSafety: 'Permanent Means of Access',
          machineSafetyModule: 'Start, Stop and Reset',
          technicalFileModule: 'Technical File Module',
          inspection: 'Inspection Module'
        }
    }
  };

  const annexIVMachines = {
    zh: [
      { category: "木工機械", items: ["手提式木工鏈鋸", "木工機械"] },
      { category: "成型機械", items: ["衝程 > 6 mm 且速度 > 30 mm/s 的壓力機", "注射或壓縮塑料成型機械"] },
      { category: "地下作業", items: ["地下作業機械"] },
      { category: "安全裝置", items: ["設計用於檢測人員存在的保護裝置", "安全功能邏輯單元"] },
      { category: "保護結構", items: ["翻車保護結構 (ROPS)", "落物保護結構 (FOPS)"] }
    ],
    en: [
      { category: "Woodworking", items: ["Portable chainsaws for woodworking", "Woodworking machines"] },
      { category: "Forming Machinery", items: ["Presses with stroke > 6 mm and speed > 30 mm/s", "Injection or compression plastics-moulding machinery"] },
      { category: "Underground Work", items: ["Machinery for underground working"] },
      { category: "Safety Devices", items: ["Protective devices designed to detect presence of persons", "Logic units for safety functions"] },
      { category: "Protective Structures", items: ["Roll-over protective structures (ROPS)", "Falling-object protective structures (FOPS)"] }
    ]
  };

  const standardsClassification = {
    zh: {
      typeA: {
        title: "A類標準（基本安全標準）",
        description: "涵蓋所有機械的基本概念、設計原則和一般方面",
        examples: [
          "EN ISO 12100 - 機械安全 - 設計的一般原則",
          "EN ISO 14121-1 - 機械安全 - 風險評估"
        ]
      },
      typeB: {
        title: "B類標準（群組安全標準）",
        description: "處理一個安全方面或一種相關安全措施，可應用於廣泛的機械",
        examples: [
          "EN ISO 13857 - 安全距離",
          "EN ISO 14120 - 防護裝置",
          "EN IEC 60204-1 - 機械電氣設備"
        ]
      },
      typeC: {
        title: "C類標準（機器安全標準）",
        description: "為特定機器或機器群組提供詳細的安全要求",
        importance: "對於附件IV機器，應用C類標準可以避免需要認證機構(NoBo)",
        examples: [
          "EN 619 - 連續搬運設備",
          "EN ISO 10218-2 - 工業機器人安全要求",
          "EN 692 - 機械壓力機安全"
        ]
      }
    },
    en: {
      typeA: {
        title: "Type A Standards (Basic Safety Standards)",
        description: "Cover basic concepts, design principles and general aspects applicable to all machinery",
        examples: [
          "EN ISO 12100 - Safety of machinery - General principles for design",
          "EN ISO 14121-1 - Safety of machinery - Risk assessment"
        ]
      },
      typeB: {
        title: "Type B Standards (Group Safety Standards)",
        description: "Deal with one safety aspect or one type of safeguard applicable to a wide range of machinery",
        examples: [
          "EN ISO 13857 - Safety distances",
          "EN ISO 14120 - Guards",
          "EN IEC 60204-1 - Electrical equipment of machines"
        ]
      },
      typeC: {
        title: "Type C Standards (Machine Safety Standards)",
        description: "Provide detailed safety requirements for a specific machine or group of machines",
        importance: "For Annex IV machines, applying Type C standards can avoid the need for Notified Body (NoBo)",
        examples: [
          "EN 619 - Continuous handling equipment",
          "EN ISO 10218-2 - Safety requirements for industrial robot systems",
          "EN 692 - Machine tools - Mechanical presses - Safety"
        ]
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

  const ProcessStep = ({ title, description }) => (
    <div className="bg-gradient-to-br from-cyan-50 to-pink-50 p-6 rounded-2xl text-center shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300">
      <h4 className="text-gray-800 font-bold text-lg mb-4">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );

  const renderOverviewContent = () => {
    if (currentLanguage === 'zh') {
      return (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-blue-500 pb-4">
            總覽：將CE流程整合到專案方法中
          </h2>
          
          <InfoBox type="warning" title="❌ 常見錯誤 - 應避免的做法" icon={AlertTriangle}>
            <ul className="space-y-3">
              <li>
                <strong>分離路線方法：</strong> "機器準備好了，讓CE員工進行MD檢查"
                <ul className="ml-6 mt-2 space-y-1">
                  <li>• CE員工遇到不可接受的風險 → 現在怎麼辦？</li>
                  <li>• 本質安全措施不再被考慮</li>
                </ul>
              </li>
              <li>
                <strong>複製貼上風險評估：</strong> "我們有舊版本的類似機器"
                <ul className="ml-6 mt-2 space-y-1">
                  <li>• 技術現狀如何？</li>
                  <li>• 現行標準是否有更嚴格要求？</li>
                </ul>
              </li>
            </ul>
          </InfoBox>

          <InfoBox type="success" title="✅ 最佳實務方法" icon={CheckCircle}>
            <p className="text-lg font-semibold">將CE流程整合到「正常」設計流程中！</p>
            <p>在機器設計和實現流程的所有步驟中，必須整合相關的「CE步驟」。</p>
          </InfoBox>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
            <ProcessStep 
              title="A: 預先研究" 
              description="機器描述、適用標準、產品指令、附件IV評估" 
            />
            <ProcessStep 
              title="B: 迭代流程" 
              description="風險評估與降低、基本健康與安全要求、協調標準" 
            />
            <ProcessStep 
              title="C: 文件資料" 
              description="使用說明書、EC符合性聲明、CE標記" 
            />
            <ProcessStep 
              title="D: 技術檔案" 
              description="完整文件包（保存10年）" 
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-blue-500 pb-4">
            Overview: Integrate CE Process into Project Approach
          </h2>
          
          <InfoBox type="warning" title="❌ Common Mistakes - What NOT to Do" icon={AlertTriangle}>
            <ul className="space-y-3">
              <li>
                <strong>Separate Route Approach:</strong> "Machine is ready, let the CE-employee do his MD round"
                <ul className="ml-6 mt-2 space-y-1">
                  <li>• CE employee encounters unacceptable risks → What now?</li>
                  <li>• Inherent measures not considered anymore</li>
                </ul>
              </li>
              <li>
                <strong>Copy-Paste Risk Assessments:</strong> "We have an older version, make it specific"
                <ul className="ml-6 mt-2 space-y-1">
                  <li>• What about "state of the art"?</li>
                  <li>• Do current standards impose stricter requirements?</li>
                </ul>
              </li>
            </ul>
          </InfoBox>

          <InfoBox type="success" title="✅ Best Practice Approach" icon={CheckCircle}>
            <p className="text-lg font-semibold">Integrate the CE-process into the "normal" design process!</p>
            <p>In all steps in the design and realization process of a machine, the relevant "CE-steps" must be integrated.</p>
          </InfoBox>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
            <ProcessStep 
              title="A: Research in Advance" 
              description="Machine description, applicable standards, product directives, Annex IV assessment" 
            />
            <ProcessStep 
              title="B: Iterative Processes" 
              description="Risk assessment & reduction, essential health & safety requirements, harmonized standards" 
            />
            <ProcessStep 
              title="C: Documentation" 
              description="Instructions manual, EC declaration of conformity, CE marking" 
            />
            <ProcessStep 
              title="D: Technical File" 
              description="Complete documentation package (keep 10 years)" 
            />
          </div>
        </div>
      );
    }
  };

  const renderResearchContent = () => {
    if (currentLanguage === 'zh') {
      return (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-blue-500 pb-4">
            A: 預先研究
          </h2>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-700">A.4: 附件IV評估</h3>
            
            <InfoBox type="info" title="💡 重要澄清：安全組件 vs 機器" icon={Info}>
              <div className="space-y-3">
                <p><strong>常見問題：PILZ安全繼電器等安全組件是否在附件IV中？</strong></p>
                <div className="bg-white/20 p-4 rounded-lg">
                  <p className="font-semibold text-blue-100">答案：是的，但分類不同！</p>
                  <ul className="mt-2 space-y-1 text-blue-100">
                    <li>• <strong>安全繼電器、安全PLC、光幕等</strong> = 安全組件</li>
                    <li>• 這些組件本身在附件IV中列為 <strong>"安全功能邏輯單元"</strong></li>
                    <li>• 但當整合到完整機器中時，需要評估整台機器是否在附件IV中</li>
                  </ul>
                </div>
              </div>
            </InfoBox>

            <InfoBox type="warning" title="⚠️ 機械指令附件IV - 需要特別注意的機器類別" icon={AlertTriangle}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {annexIVMachines.zh.map((category, index) => (
                  <div key={index} className="bg-white/20 p-4 rounded-lg">
                    <h5 className="font-bold text-lg mb-3 text-white">{category.category}</h5>
                    <ul className="space-y-1">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-white/90">• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </InfoBox>
          </div>
        </div>
      );
    } else {
      return (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-blue-500 pb-4">
            A: Research in Advance
          </h2>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-700">A.4: Annex IV Assessment</h3>
            
            <InfoBox type="info" title="💡 Important Clarification: Safety Components vs Machines" icon={Info}>
              <div className="space-y-3">
                <p><strong>Common Question: Are PILZ safety relays and similar safety components in Annex IV?</strong></p>
                <div className="bg-white/20 p-4 rounded-lg">
                  <p className="font-semibold text-blue-100">Answer: Yes, but classification differs!</p>
                  <ul className="mt-2 space-y-1 text-blue-100">
                    <li>• <strong>Safety relays, safety PLCs, light curtains etc.</strong> = Safety components</li>
                    <li>• These components are listed in Annex IV as <strong>"Logic units for safety functions"</strong></li>
                    <li>• But when integrated into complete machine, need to assess if entire machine is in Annex IV</li>
                  </ul>
                </div>
              </div>
            </InfoBox>

            <InfoBox type="warning" title="⚠️ Machine Directive Annex IV - Machines Requiring Special Attention" icon={AlertTriangle}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {annexIVMachines.en.map((category, index) => (
                  <div key={index} className="bg-white/20 p-4 rounded-lg">
                    <h5 className="font-bold text-lg mb-3 text-white">{category.category}</h5>
                    <ul className="space-y-1">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-white/90">• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </InfoBox>
          </div>
        </div>
      );
    }
  };

  const renderStandardsContent = () => {
    const standards = standardsClassification[currentLanguage];
    
    return (
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-blue-500 pb-4">
          {currentLanguage === 'zh' ? '標準分類與應用' : 'Standards Classification and Application'}
        </h2>

        <div className="space-y-6">
          <InfoBox type="info" title={currentLanguage === 'zh' ? '📊 歐洲標準三級分類系統' : '📊 European Three-Tier Standards Classification System'} icon={Info}>
            <p>{currentLanguage === 'zh' ? '歐洲機械安全標準分為三個層級，形成完整的安全框架：' : 'European machinery safety standards are organized into three tiers, forming a complete safety framework:'}</p>
          </InfoBox>

          {/* Type A Standards */}
          <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-2xl border-l-4 border-green-500">
            <h3 className="text-xl font-bold text-green-800 mb-3">{standards.typeA.title}</h3>
            <p className="text-green-700 mb-4">{standards.typeA.description}</p>
            <div className="space-y-2">
              <h4 className="font-semibold text-green-800">{currentLanguage === 'zh' ? '範例：' : 'Examples:'}</h4>
              <ul className="space-y-1">
                {standards.typeA.examples.map((example, index) => (
                  <li key={index} className="text-green-700">• {example}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Type B Standards */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-2xl border-l-4 border-blue-500">
            <h3 className="text-xl font-bold text-blue-800 mb-3">{standards.typeB.title}</h3>
            <p className="text-blue-700 mb-4">{standards.typeB.description}</p>

            <div className="space-y-2 mt-4">
              <h4 className="font-semibold text-blue-800">{currentLanguage === 'zh' ? '範例：' : 'Examples:'}</h4>
              <ul className="space-y-1">
                {standards.typeB.examples.map((example, index) => (
                  <li key={index} className="text-blue-700">• {example}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Type C Standards - Most Important */}
          <div className="bg-gradient-to-r from-red-50 to-orange-100 p-6 rounded-2xl border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-800 mb-3">{standards.typeC.title}</h3>
            <p className="text-red-700 mb-4">{standards.typeC.description}</p>
            
            <div className="bg-yellow-100 border border-yellow-300 p-4 rounded-lg mb-4">
              <p className="text-yellow-800 font-semibold">⚠️ {currentLanguage === 'zh' ? '關鍵重要性' : 'Critical Importance'}</p>
              <p className="text-yellow-700 mt-2">{standards.typeC.importance}</p>
            </div>

            <div className="space-y-2 mt-4">
              <h4 className="font-semibold text-red-800">{currentLanguage === 'zh' ? '範例：' : 'Examples:'}</h4>
              <ul className="space-y-1">
                {standards.typeC.examples.map((example, index) => (
                  <li key={index} className="text-red-700">• {example}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Standards Hierarchy */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              {currentLanguage === 'zh' ? '🏗️ 標準階層原則' : '🏗️ Standards Hierarchy Principle'}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-red-500 rounded"></div>
                <span className="font-semibold">{currentLanguage === 'zh' ? 'C類標準優先' : 'Type C Standards Take Precedence'}</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-blue-500 rounded"></div>
                <span>{currentLanguage === 'zh' ? '如果沒有C類標準，則應用相關的B類標準' : 'If no Type C standard exists, apply relevant Type B standards'}</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <span>{currentLanguage === 'zh' ? 'A類標準為所有機械提供基礎原則' : 'Type A standards provide basic principles for all machinery'}</span>
              </div>
            </div>
          </div>

          {/* Practical Application */}
          <InfoBox type="success" title={currentLanguage === 'zh' ? '✅ 實際應用指導' : '✅ Practical Application Guidance'} icon={CheckCircle}>
            <div className="space-y-3">
              <p><strong>{currentLanguage === 'zh' ? '1. 首先檢查：' : '1. First Check:'}</strong> {currentLanguage === 'zh' ? '是否存在適用於您機器的C類標準？' : 'Does a Type C standard exist for your machine?'}</p>
              <p><strong>{currentLanguage === 'zh' ? '2. 如果有C類標準：' : '2. If Type C standard exists:'}</strong> {currentLanguage === 'zh' ? '應用該標準可獲得符合性推定' : 'Applying it provides presumption of conformity'}</p>
              <p><strong>{currentLanguage === 'zh' ? '3. 如果沒有C類標準：' : '3. If no Type C standard:'}</strong> {currentLanguage === 'zh' ? '組合使用相關的A類和B類標準' : 'Combine relevant Type A and Type B standards'}</p>
              <p><strong>{currentLanguage === 'zh' ? '4. 附件IV機器：' : '4. For Annex IV machines:'}</strong> {currentLanguage === 'zh' ? '應用適當的C類標準可避免NoBo參與' : 'Applying appropriate Type C standard can avoid NoBo involvement'}</p>
            </div>
          </InfoBox>

          {/* Robot Cell Standards Example */}
          <div className="bg-gray-50 p-6 rounded-2xl border">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              {currentLanguage === 'zh' ? '📋 機器人工作站適用標準範例' : '📋 Robot Cell Applicable Standards Example'}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <thead className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">{currentLanguage === 'zh' ? '標準' : 'Standard'}</th>
                    <th className="px-4 py-3 text-left">{currentLanguage === 'zh' ? '標題' : 'Title'}</th>
                    <th className="px-4 py-3 text-left">{currentLanguage === 'zh' ? '類型' : 'Type'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-mono text-sm">EN 619</td>
                    <td className="px-4 py-3">{currentLanguage === 'zh' ? '單位負荷機械處理設備' : 'Equipment for mechanical handling of unit loads'}</td>
                    <td className="px-4 py-3"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-semibold">C類</span></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-mono text-sm">EN ISO 10218-2</td>
                    <td className="px-4 py-3">{currentLanguage === 'zh' ? '工業機器人安全要求 - 機器人系統' : 'Industrial robots - Robot systems and integration'}</td>
                    <td className="px-4 py-3"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-semibold">C類</span></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-mono text-sm">EN ISO 14120</td>
                    <td className="px-4 py-3">{currentLanguage === 'zh' ? '防護裝置 - 一般要求' : 'Guards - General requirements'}</td>
                    <td className="px-4 py-3"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">B類</span></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-mono text-sm">EN ISO 13857</td>
                    <td className="px-4 py-3">{currentLanguage === 'zh' ? '安全距離' : 'Safety distances'}</td>
                    <td className="px-4 py-3"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">B類</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return renderOverviewContent();
      case 'machineSafetyTraining':
        return <MachineSafetyTraining />;
      case 'machineryModification':
        return <MachineryModificationGuide />;
      case 'machinerySafetyManual':
        return <MachinerySafetyManual />;
      case 'technicalFileGuide':
        return <TechnicalFileGuide />;
      case 'machinerySafetyDocs':
        return <MachinerySafetyDocs />;
      case 'machinerySafetyInfo':
        return <MachinerySafetyInfo />;
      case 'research':
        return renderResearchContent();
      case 'iterative':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-blue-500 pb-4">
              {currentLanguage === 'zh' ? 'B: 迭代流程' : 'B: Iterative Processes'}
            </h2>
            <InfoBox type="warning" title={currentLanguage === 'zh' ? '⚠️ 強制性三步驟順序' : '⚠️ Mandatory Three-Step Sequence'} icon={AlertTriangle}>
              <ol className="space-y-2 list-decimal list-inside">
                <li><span className="bg-orange-500 text-white px-2 py-1 rounded font-bold">
                  {currentLanguage === 'zh' ? '本質安全措施' : 'Inherent Measures'}
                </span></li>
                <li><span className="bg-orange-500 text-white px-2 py-1 rounded font-bold">
                  {currentLanguage === 'zh' ? '防護/屏蔽' : 'Protection/Shielding'}
                </span></li>
                <li><span className="bg-orange-500 text-white px-2 py-1 rounded font-bold">
                  {currentLanguage === 'zh' ? '使用者資訊' : 'Information to User'}
                </span></li>
              </ol>
            </InfoBox>
          </div>
        );
      case 'documentation':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-blue-500 pb-4">
              {currentLanguage === 'zh' ? 'C: 隨機器提供的文件' : 'C: Documentation Supplied with Machine'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
                <FileText className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="font-bold text-lg mb-2">
                  {currentLanguage === 'zh' ? 'C.1: 使用說明書' : 'C.1: Instruction Manual'}
                </h3>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
                <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="font-bold text-lg mb-2">
                  {currentLanguage === 'zh' ? 'C.2: EC符合性聲明' : 'C.2: EC Declaration of Conformity'}
                </h3>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
                <Globe className="w-8 h-8 text-purple-500 mb-4" />
                <h3 className="font-bold text-lg mb-2">
                  {currentLanguage === 'zh' ? 'C.3: CE標記' : 'C.3: CE Marking'}
                </h3>
              </div>
            </div>
          </div>
        );
      case 'standards':
        return renderStandardsContent();
      case 'riskAssessment':
        return <RiskAssessment currentLanguage={currentLanguage} />;
      case 'riskAssessmentProcess':
        return <RiskAssessmentProcess />;
      case 'riskReductionPrinciples':
        return <RiskReductionPrinciples />;
      case 'machineSafetyCourse':
        return <MachineSafetyCourse />;
      case 'safetyDistanceCalculator':
        return <SafetyDistanceCalculator />;
      case 'machineGuards':
        return <MachineGuards />;
      case 'functionalSafety':
        return <FunctionalSafety />;
      case 'machineAccessSafety':
        return <MachineAccessSafety />;
      case 'machineSafetyModule':
        return <MachineSafetyModule />;
      case 'technicalFileModule':
        return <TechnicalFile currentLanguage={currentLanguage} />;
      case 'inspection':
        return <Inspection currentLanguage={currentLanguage} />;
      default:
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {currentLanguage === 'zh' ? '選擇一個區段來查看內容' : 'Select a section to view content'}
            </h2>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="bg-white p-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Language switcher */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setCurrentLanguage(currentLanguage === 'zh' ? 'en' : 'zh')}
          className="bg-white px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex items-center space-x-2"
        >
          <Globe className="w-5 h-5" />
          <span className="font-semibold">{currentLanguage === 'zh' ? 'EN' : '中文'}</span>
        </button>
      </div>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 lg:flex-shrink-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-xl font-bold text-gray-800">{t.title}</h1>
            <p className="text-sm text-gray-600 mt-1">{t.subtitle}</p>
            <p className="text-xs text-gray-500 mt-1">{t.description}</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
              {t.navigation}
            </h3>
            {Object.entries(t.sections).map(([key, label]) => (
              <button
                key={key}
                onClick={() => {
                  setActiveSection(key);
                  setSidebarOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 flex items-center justify-between ${
                  activeSection === key
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="font-medium">{label}</span>
                <ChevronRight className={`w-4 h-4 transition-transform ${activeSection === key ? 'rotate-90' : ''}`} />
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 lg:ml-0 min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100">
        <div className="p-6 lg:p-8">
          {renderContent()}
        </div>
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default CEConformityApp;
