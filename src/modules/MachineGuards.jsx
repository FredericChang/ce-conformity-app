import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Globe, Shield, Lock, Eye, AlertTriangle, Settings, CheckCircle, XCircle } from 'lucide-react';

const MachineGuardsApp = () => {
  const [language, setLanguage] = useState('en');
  const [currentSection, setCurrentSection] = useState(0);

  const translations = {
    en: {
      title: "Machine Safety Specialist - Fixed and Interlocking Guards",
      subtitle: "EN-ISO 14120:2015 & EN-ISO 14119:2015",
      sections: {
        overview: "Overview",
        guardTypes: "Guard Types", 
        interlocking: "Interlocking Devices",
        installation: "Installation & Use",
        manipulation: "Preventing Manipulation",
        testing: "Testing & Maintenance"
      },
      content: {
        overview: {
          title: "Guards Overview",
          requirements: "General Requirements (Machinery Regulation, Annex III, paragraph 1.4.1)",
          points: [
            "Be firmly executed",
            "Be held securely in place", 
            "Do not pose any additional hazards",
            "Cannot be easily circumvented",
            "Are sufficiently far from the danger zone",
            "Obstruct the view of work as little as possible",
            "Access options for work, if possible without dismantling the guard"
          ]
        },
        guardTypes: {
          title: "Types of Guards",
          fixed: {
            title: "Fixed Guards",
            points: [
              "Can only be removed with tools (e.g. bolts)",
              "If possible, does not stay in place without fasteners",
              "Fasteners remain connected to the machine or guard"
            ]
          },
          movable: {
            title: "Movable Guard with Interlock",
            points: [
              "Equipped with function-blocking device",
              "Operator must not be able to come near moving parts",
              "Locking and/or blocking functionality",
              "Still connected to machine in open position"
            ]
          },
          adjustable: {
            title: "Adjustable Guard",
            points: [
              "Automatically adjustable (self-closing) or manually adjustable",
              "Tool-free adjustment (to be set by operator)"
            ]
          },
          startFunction: {
            title: "Interlocking Guard with Start Function",
            points: [
              "Closing the guard leads to start of dangerous movement",
              "Short cycle times required",
              "Unable to get trapped behind shield",
              "All other guards executed as function-blocking"
            ]
          }
        },
        interlocking: {
          title: "Interlocking Device Types",
          type1: {
            title: "Type 1 - Mechanical Uncoded",
            pros: ["Direct mechanical action", "Direct opening action", "Cannot be operated manually"],
            cons: ["Fails if mechanical connection wears", "Fails if alignment is incorrect"]
          },
          type2: {
            title: "Type 2 - Mechanical Coded", 
            pros: ["Direct mechanical action", "Easy to combine with lock"],
            cons: ["Easy to bridge with spare fork", "Sensitive to contamination"]
          },
          type3: {
            title: "Type 3 - Non-contact Uncoded",
            pros: ["Contactless", "No moving parts", "Not sensitive to dust/liquid"],
            cons: ["Uncoded", "Easy to bridge"]
          },
          type4: {
            title: "Type 4 - Non-contact Coded",
            pros: ["Compact", "Contactless", "Better coding"],
            cons: ["Potentially sensitive to EMC"]
          }
        },
        installation: {
          title: "Installation & Use Guidelines",
          switches: [
            "Reliable attachment, can only be dismantled with tools",
            "Type 1 function lock must be permanently fixed after adjustment",
            "Accessible for maintenance but considering manipulation",
            "Loosening must be prevented",
            "Manipulation must be prevented",
            "Resistant to external influences",
            "Movement must remain within manufacturer's range",
            "Not to be used as mechanical stop"
          ],
          locking: {
            title: "Locking Principles",
            preferred: "Spring applied – Power ON released",
            alternative: "Power ON applied – Power ON released (with risk assessment)",
            avoid: "Power ON applied – spring released (only with equivalent safety level)"
          }
        },
        manipulation: {
          title: "Preventing Manipulation",
          statistics: [
            "37% of protective devices are permanently or temporarily manipulated",
            "25% of workplace accidents are due to manipulation",
            "33% of companies tolerate manipulated safety devices"
          ],
          prevention: [
            "Design machine so there's no reason to manipulate",
            "Improve reliability and operability",
            "Check operator has no reason to manipulate",
            "Take away reasons for manipulation",
            "Add additional measures if needed"
          ],
          measures: [
            "Reduce accessibility (position, guarding, hiding)",
            "Make bridging technically difficult (coded switches)",
            "Prevent switches from being removed",
            "Defeat monitoring and plausibility checks"
          ]
        },
        testing: {
          title: "Testing & Maintenance",
          requirements: [
            "SIL3/HFT1 or PL e/cat3-4: Monthly manual function test",
            "SIL2/HFT1 or PL d/cat3: Yearly manual function test", 
            "Automated function test is recommended",
            "Regular inspection of mechanical connections",
            "Check for signs of manipulation or wear"
          ]
        }
      }
    },
    zh: {
      title: "機械安全專家 - 固定式和聯鎖防護裝置",
      subtitle: "EN-ISO 14120:2015 & EN-ISO 14119:2015",
      sections: {
        overview: "概述",
        guardTypes: "防護裝置類型",
        interlocking: "聯鎖裝置", 
        installation: "安裝與使用",
        manipulation: "防止操縱",
        testing: "測試與維護"
      },
      content: {
        overview: {
          title: "防護裝置概述",
          requirements: "一般要求（機械法規，附件III，第1.4.1段）",
          points: [
            "牢固執行",
            "安全固定到位",
            "不造成任何額外危險",
            "不能輕易繞過",
            "距離危險區域足夠遠",
            "盡可能少地遮擋工作視線",
            "如可能，在不拆卸防護裝置的情況下提供工作通道"
          ]
        },
        guardTypes: {
          title: "防護裝置類型",
          fixed: {
            title: "固定式防護裝置",
            points: [
              "只能用工具拆卸（如螺栓）",
              "如可能，在沒有緊固件時不能保持原位",
              "緊固件與機器或防護裝置保持連接"
            ]
          },
          movable: {
            title: "帶聯鎖的可動防護裝置",
            points: [
              "配備功能阻擋裝置",
              "操作員不得接近運動部件",
              "鎖定和/或阻擋功能",
              "在開啟位置仍與機器連接"
            ]
          },
          adjustable: {
            title: "可調節防護裝置",
            points: [
              "自動可調（自閉）或手動可調",
              "免工具調節（由操作員自行設定）"
            ]
          },
          startFunction: {
            title: "帶啟動功能的聯鎖防護裝置",
            points: [
              "關閉防護裝置導致危險運動開始",
              "需要短週期時間",
              "無法被困在防護裝置後面",
              "所有其他防護裝置執行為功能阻擋"
            ]
          }
        },
        interlocking: {
          title: "聯鎖裝置類型",
          type1: {
            title: "類型1 - 機械式非編碼",
            pros: ["直接機械動作", "直接開啟動作", "不能手動操作"],
            cons: ["機械連接磨損時失效", "對準不正確時失效"]
          },
          type2: {
            title: "類型2 - 機械式編碼",
            pros: ["直接機械動作", "易於與鎖結合"],
            cons: ["易用備用叉橋接", "對污染敏感"]
          },
          type3: {
            title: "類型3 - 非接觸式非編碼",
            pros: ["非接觸", "無運動部件", "對灰塵/液體不敏感"],
            cons: ["非編碼", "易於橋接"]
          },
          type4: {
            title: "類型4 - 非接觸式編碼",
            pros: ["緊湊", "非接觸", "更好的編碼"],
            cons: ["可能對EMC敏感"]
          }
        },
        installation: {
          title: "安裝與使用指南",
          switches: [
            "可靠連接，只能用工具拆卸",
            "類型1功能鎖在調整後必須永久固定",
            "便於維護但考慮操縱",
            "必須防止鬆動",
            "必須防止操縱",
            "抗外部影響",
            "運動必須保持在製造商範圍內",
            "不用作機械止動器"
          ],
          locking: {
            title: "鎖定原理",
            preferred: "彈簧施加 - 通電釋放",
            alternative: "通電施加 - 通電釋放（需風險評估）",
            avoid: "通電施加 - 彈簧釋放（僅在同等安全水平下）"
          }
        },
        manipulation: {
          title: "防止操縱",
          statistics: [
            "37%的防護裝置被永久或臨時操縱",
            "25%的工作場所事故由操縱引起",
            "33%的公司容忍操縱安全裝置"
          ],
          prevention: [
            "設計機器使沒有操縱理由",
            "提高可靠性和可操作性",
            "檢查操作員沒有操縱理由",
            "消除操縱理由",
            "如需要添加額外措施"
          ],
          measures: [
            "減少可達性（位置、防護、隱藏）",
            "使橋接技術上困難（編碼開關）",
            "防止開關被拆除",
            "失效監控和合理性檢查"
          ]
        },
        testing: {
          title: "測試與維護",
          requirements: [
            "SIL3/HFT1或PL e/cat3-4：每月手動功能測試",
            "SIL2/HFT1或PL d/cat3：每年手動功能測試",
            "推薦自動功能測試",
            "定期檢查機械連接",
            "檢查操縱或磨損跡象"
          ]
        }
      }
    }
  };

  const t = translations[language];
  const sections = Object.keys(t.sections);

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Shield className="mr-2 text-blue-600" />
          {t.content.overview.title}
        </h3>
        <p className="text-sm text-gray-600 mb-4">{t.content.overview.requirements}</p>
        <ul className="space-y-2">
          {t.content.overview.points.map((point, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
              <span className="text-sm">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const renderGuardTypes = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {Object.entries(t.content.guardTypes).filter(([key]) => key !== 'title').map(([key, guard]) => (
        <div key={key} className="bg-white border rounded-lg p-4 shadow-sm">
          <h4 className="font-semibold text-lg mb-3 text-blue-700">{guard.title}</h4>
          <ul className="space-y-2">
            {guard.points.map((point, index) => (
              <li key={index} className="flex items-start text-sm">
                <CheckCircle className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  const renderInterlocking = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {Object.entries(t.content.interlocking).filter(([key]) => key !== 'title').map(([key, type]) => (
        <div key={key} className="bg-white border rounded-lg p-4 shadow-sm">
          <h4 className="font-semibold text-lg mb-3 text-purple-700">{type.title}</h4>
          <div className="mb-3">
            <h5 className="font-medium text-green-600 mb-2">✓ {language === 'en' ? 'Advantages' : '優點'}</h5>
            <ul className="space-y-1">
              {type.pros.map((pro, index) => (
                <li key={index} className="text-sm flex items-start">
                  <CheckCircle className="mr-2 mt-1 h-3 w-3 text-green-500 flex-shrink-0" />
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-red-600 mb-2">✗ {language === 'en' ? 'Disadvantages' : '缺點'}</h5>
            <ul className="space-y-1">
              {type.cons.map((con, index) => (
                <li key={index} className="text-sm flex items-start">
                  <XCircle className="mr-2 mt-1 h-3 w-3 text-red-500 flex-shrink-0" />
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );

  const renderInstallation = () => (
    <div className="space-y-6">
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
        <h4 className="font-semibold text-lg mb-4 flex items-center">
          <Settings className="mr-2 text-yellow-600" />
          {language === 'en' ? 'Switch Installation Requirements' : '開關安裝要求'}
        </h4>
        <ul className="space-y-2">
          {t.content.installation.switches.map((req, index) => (
            <li key={index} className="flex items-start text-sm">
              <CheckCircle className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
              {req}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h4 className="font-semibold text-lg mb-4 flex items-center">
          <Lock className="mr-2 text-green-600" />
          {t.content.installation.locking.title}
        </h4>
        <div className="space-y-3">
          <div className="flex items-center text-sm">
            <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
            <span className="font-medium">{language === 'en' ? 'Preferred:' : '首選：'}</span>
            <span className="ml-2">{t.content.installation.locking.preferred}</span>
          </div>
          <div className="flex items-center text-sm">
            <AlertTriangle className="mr-2 h-4 w-4 text-yellow-500" />
            <span className="font-medium">{language === 'en' ? 'Alternative:' : '備選：'}</span>
            <span className="ml-2">{t.content.installation.locking.alternative}</span>
          </div>
          <div className="flex items-center text-sm">
            <XCircle className="mr-2 h-4 w-4 text-red-500" />
            <span className="font-medium">{language === 'en' ? 'Avoid:' : '避免：'}</span>
            <span className="ml-2">{t.content.installation.locking.avoid}</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderManipulation = () => (
    <div className="space-y-6">
      <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
        <h4 className="font-semibold text-lg mb-4 flex items-center">
          <AlertTriangle className="mr-2 text-red-600" />
          {language === 'en' ? 'Manipulation Statistics' : '操縱統計'}
        </h4>
        <ul className="space-y-2">
          {t.content.manipulation.statistics.map((stat, index) => (
            <li key={index} className="flex items-start text-sm">
              <AlertTriangle className="mr-2 mt-1 h-4 w-4 text-red-500 flex-shrink-0" />
              {stat}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
        <h4 className="font-semibold text-lg mb-4">{language === 'en' ? 'Prevention Strategies' : '預防策略'}</h4>
        <ul className="space-y-2">
          {t.content.manipulation.prevention.map((prev, index) => (
            <li key={index} className="flex items-start text-sm">
              <CheckCircle className="mr-2 mt-1 h-4 w-4 text-blue-500 flex-shrink-0" />
              {prev}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
        <h4 className="font-semibold text-lg mb-4">{language === 'en' ? 'Additional Measures' : '額外措施'}</h4>
        <ul className="space-y-2">
          {t.content.manipulation.measures.map((measure, index) => (
            <li key={index} className="flex items-start text-sm">
              <Settings className="mr-2 mt-1 h-4 w-4 text-purple-500 flex-shrink-0" />
              {measure}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const renderTesting = () => (
    <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
      <h4 className="font-semibold text-lg mb-4 flex items-center">
        <Eye className="mr-2 text-green-600" />
        {t.content.testing.title}
      </h4>
      <ul className="space-y-2">
        {t.content.testing.requirements.map((req, index) => (
          <li key={index} className="flex items-start text-sm">
            <CheckCircle className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
            {req}
          </li>
        ))}
      </ul>
    </div>
  );

  const renderContent = () => {
    const sectionKey = sections[currentSection];
    switch(sectionKey) {
      case 'overview': return renderOverview();
      case 'guardTypes': return renderGuardTypes();
      case 'interlocking': return renderInterlocking();
      case 'installation': return renderInstallation();
      case 'manipulation': return renderManipulation();
      case 'testing': return renderTesting();
      default: return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{t.title}</h1>
              <p className="text-sm text-gray-600 mt-1">{t.subtitle}</p>
            </div>
            <button
              onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Globe className="h-4 w-4" />
              <span>{language === 'en' ? '中文' : 'English'}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-4 sticky top-6">
              <h3 className="font-semibold text-gray-900 mb-4">{language === 'en' ? 'Contents' : '目錄'}</h3>
              <nav className="space-y-2">
                {sections.map((section, index) => (
                  <button
                    key={section}
                    onClick={() => setCurrentSection(index)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                      currentSection === index
                        ? 'bg-blue-100 text-blue-700 font-medium'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {t.sections[section]}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {t.sections[sections[currentSection]]}
                </h2>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
                    disabled={currentSection === 0}
                    className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setCurrentSection(Math.min(sections.length - 1, currentSection + 1))}
                    disabled={currentSection === sections.length - 1}
                    className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {renderContent()}

              {/* Navigation Footer */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t">
                <div className="text-sm text-gray-500">
                  {language === 'en' ? 'Section' : '章節'} {currentSection + 1} {language === 'en' ? 'of' : '/'} {sections.length}
                </div>
                <div className="flex space-x-4">
                  {currentSection > 0 && (
                    <button
                      onClick={() => setCurrentSection(currentSection - 1)}
                      className="px-4 py-2 text-blue-600 hover:text-blue-800 font-medium"
                    >
                      ← {language === 'en' ? 'Previous' : '上一頁'}
                    </button>
                  )}
                  {currentSection < sections.length - 1 && (
                    <button
                      onClick={() => setCurrentSection(currentSection + 1)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium"
                    >
                      {language === 'en' ? 'Next' : '下一頁'} →
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MachineGuardsApp; 