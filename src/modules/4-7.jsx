import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Globe, Power, Square, RotateCcw, AlertTriangle, Shield, Settings } from 'lucide-react';

const MachineSafetyModule = () => {
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
      title: "Machine Safety Specialist (CE)",
      subtitle: "Module 7: Start, stop and reset",
      tabInfo: "TAB4: Risk reduction and standards",
      standards: "Standards covered:",
      standard1: "EN-IEC 60204-1:2018 Electrical equipment of machinery",
      standard2: "EN-ISO 13850: 2016 Emergency stop devices",
      
      sections: {
        start: {
          title: "Start Function",
          content: [
            "The operator presses the start button to start the machine (an intentional operation with a control designed for this purpose)",
            "By default, this also applies to restart or after setup. A machine should not start automatically when it is turned on.",
            "This must be done in a safe way. Is it manageable? (risk assessment, reset procedure, start warning, all security means 'OK', etc.)",
            "Automatic machines may start or restart themselves, but only if this does not cause dangerous situations (risk assessment).",
            "If there are several start buttons and operators may endanger each other, additional provisions must be in place to eliminate this risk.",
            "Tip: if available, check the C standard"
          ]
        },
        
        stop: {
          title: "Stop Function",
          content: [
            "The operator presses the stop button to stop the machine (a control device, which must be present at which operating station, with which the machine can be stopped completely in a safe manner).",
            "The stop command takes precedence over the start command",
            "If the machine has come to a standstill, there are 2 options:",
            "• Normal shutdown: the power supply to the drives is interrupted",
            "• Operational shutdown: the shutdown state is monitored and maintained"
          ],
          categories: [
            {
              name: "Category 0",
              description: "A non-controlled stop, simple switching off the power supply (energy) to the drive. (Safe Torque Off function of a frequency converter is also included in this)"
            },
            {
              name: "Category 1", 
              description: "A controlled stop, drive provides fast (or appropriate) deceleration, After that, the power supply (energy) is switched off."
            },
            {
              name: "Category 2",
              description: "An operational stop, where the energy remains on the drive when the machine is stationary."
            }
          ],
          note: "Emergency stop is only allowed with a cat. 0 or cat. 1!"
        },

        safetyFunctions: {
          title: "Safety Functions for Frequency Drives",
          subtitle: "IEC 61800-5-2",
          functions: [
            {
              name: "STO - Safe Torque Off",
              description: "No more power to the engine, holding brake required with stored energy."
            },
            {
              name: "SS1 - Safe Stop 1", 
              description: "Drive brakes to a standstill, then STO, required at high mass inertia."
            },
            {
              name: "SS2 - Safe Stop 2",
              description: "Drive brakes to a stop, then SOS. No brake required, no wear, machine can continue immediately after the stop."
            },
            {
              name: "SOS - Safe Operating Stop",
              description: "Motor is not switched off, is stationary but can still have torque, stays (regularly) in position, speed (0) is monitored. Reference between multiple coupled axes remains."
            },
            {
              name: "SLS - Safely Limited Speed",
              description: "Monitors exceeding one or more speed limits."
            },
            {
              name: "SSM - Safe Speed Monitor",
              description: "Output signal that is high when the speed is lower than the set limit."
            },
            {
              name: "SDI - Safe Direction",
              description: "Monitors the direction of movement, activates a stop in the event of an error."
            },
            {
              name: "SLP - Safely Limited Position",
              description: "Ensures that the position of an axle remains within specified limits, activates a stop in case of error."
            },
            {
              name: "SBC - Safe Brake Control",
              description: "Operates an external (holding) brake, always in combination with STO."
            },
            {
              name: "SBT - Safe Brake Test",
              description: "Automatic test (control drive with dropped brake and monitor standstill) to test braking performance and wear."
            }
          ]
        },

        emergencyStop: {
          title: "Emergency Stop Function",
          requirements: [
            "Machinery must be equipped with emergency stop devices to prevent real or imminent dangerous situations.",
            "With the exception of portable machinery held by hand and machinery where the risk would not be reduced by an emergency stop device (risk assessment)",
            "Emergency stop devices are intended to support, not replace, other safety measures.",
            "The emergency stop function must be available and operational at all times, regardless of the operating mode."
          ],
          characteristics: [
            "Must avert or reduce hazards to persons, damage to machinery or damage to workpieces",
            "Triggered by a personal action (press button or pull emergency stop pull cord)",
            "Is dominant in all possible operating modes",
            "Must not interfere with other safety functions"
          ],
          design: [
            "Design the emergency stop function in such a way that the operator does not have to consider the consequences of any emergency stop when deciding whether to use the emergency stop device.",
            "Choose an optimal deceleration time (braking time)",
            "Apply the correct stop category (category 0 or category 1, EN IEC 60204-1)",
            "If necessary, apply a predetermined shutdown sequence."
          ]
        },

        emergencyStopDevices: {
          title: "Emergency Stop Devices",
          specifications: [
            "Red with a yellow background",
            "Locks itself, unlock on the spot",
            "Equipped with forced switching NC contacts",
            "Easy to reach / operate",
            "Hand-operated devices at heights between 0.6 and 1.7 meters"
          ],
          guidelines: [
            "Do not use text or characters on an emergency stop button (should)",
            "If it is necessary to indicate the release direction, this must be in (approximately) the same color as the actuator to avoid confusion with the operating direction"
          ],
          locations: [
            "At any operating position, except if the risk assessment indicates that this is not necessary",
            "In other locations, if the risk assessment shows that this makes sense as:",
            "• Inputs and outputs",
            "• Positions where intervention takes place (with hold to run control)",
            "• Positions where human-machine interaction is to be expected such as loading/unloading"
          ]
        },

        spanOfControl: {
          title: "Span of Control",
          principle: "Choose 'single span of control' so that each emergency stop device stops the entire machine. (shall)",
          exceptions: "In exceptional cases, multiple spans of control are used, for example in the event of unnecessary disruption to production or additional hazards.",
          options: [
            "Section",
            "Machine", 
            "Group of machines (line)"
          ],
          multipleSpanRequirements: [
            "Clearly defined and recognizable",
            "Clear link between a hazard and the emergency stop pusher",
            "The span of control is clearly recognizable in the emergency braking device",
            "Pressing an emergency stop does not create additional hazards in a different span of control",
            "Pressing an emergency stop does not prevent the operation of an emergency stop in another span of control",
            "Include instructions in the instructions for use"
          ]
        },

        reset: {
          title: "Reset Function",
          definition: "A reset is the manual function that resets all safety functions (e.g. emergency stop button, function lock on entrance doors, light curtains, etc.) before a restart is possible.",
          requirements: [
            "Is set in motion by (deliberately) pressing a separate manual button",
            "Is only implemented when all protections are operational",
            "Does not cause dangerous situations (nothing will move)",
            "Prepares the control for a start signal",
            "Is only carried out by 'monitored signal change'",
            "Has a SIL or PL level that may be different from the safety functions of the light curtain or the function-blocking shield"
          ],
          positioning: [
            "Is placed on the safe side of a light curtain or shield",
            "Provides a good view of the danger zone. If this is not possible, a special reset procedure is required (such as reset in the danger zone with button 1 and then reset outside the zone with button 2 within a certain time)"
          ]
        },

        maintenance: {
          title: "Maintenance",
          requirements: [
            "The adjustment and maintenance points must be located outside the danger zones",
            "It must be possible to adjust, maintain, repair and clean when the machine has come to a standstill",
            "If one or more of the above conditions cannot be met for technical reasons, measures must be taken to ensure that these operations can be carried out safely (see section 1.2.5 of the Machinery Directive)"
          ],
          workingSafely: [
            "In order to work on a machine, it must be switched off",
            "A device must be fitted to prevent unexpected start-up when switching on the machine or part thereof may cause a hazard (e.g. during maintenance)",
            "These devices must be suitable for their intended use, must be clearly and accessible and clearly identifiable in view of their function and purpose"
          ]
        }
      }
    },
    
    zh: {
      title: "機械安全專家 (CE)",
      subtitle: "模組7：啟動、停止和復位",
      tabInfo: "TAB4：風險降低和標準",
      standards: "涵蓋標準：",
      standard1: "EN-IEC 60204-1:2018 機械電氣設備",
      standard2: "EN-ISO 13850: 2016 緊急停止裝置",
      
      sections: {
        start: {
          title: "啟動功能",
          content: [
            "操作員按下啟動按鈕來啟動機器（一個為此目的而設計的控制裝置的有意操作）",
            "默認情況下，這也適用於重新啟動或設置後。機器在開機時不應自動啟動。",
            "這必須以安全的方式進行。是否可管理？（風險評估、復位程序、啟動警告、所有安全措施'OK'等）",
            "自動機器可能會自行啟動或重新啟動，但只有在這不會造成危險情況的情況下（風險評估）。",
            "如果有多個啟動按鈕且操作員可能相互危及，必須採取額外措施來消除這種風險。",
            "提示：如果可用，請檢查C標準"
          ]
        },
        
        stop: {
          title: "停止功能",
          content: [
            "操作員按下停止按鈕來停止機器（一個控制裝置，必須存在於哪個操作站，可以安全完全停止機器）。",
            "停止命令優先於啟動命令",
            "如果機器已停止，有2個選項：",
            "• 正常關機：中斷對驅動器的電源供應",
            "• 操作關機：監控並維持關機狀態"
          ],
          categories: [
            {
              name: "類別0",
              description: "非受控停止，簡單地切斷驅動器的電源供應（能量）。（變頻器的安全轉矩關斷功能也包括在內）"
            },
            {
              name: "類別1", 
              description: "受控停止，驅動器提供快速（或適當的）減速，之後切斷電源供應（能量）。"
            },
            {
              name: "類別2",
              description: "操作停止，當機器靜止時驅動器上仍有能量。"
            }
          ],
          note: "緊急停止只允許使用類別0或類別1！"
        },

        safetyFunctions: {
          title: "變頻器安全功能",
          subtitle: "IEC 61800-5-2",
          functions: [
            {
              name: "STO - 安全轉矩關斷",
              description: "不再向電機供電，需要使用儲能的保持制動器。"
            },
            {
              name: "SS1 - 安全停止1", 
              description: "驅動器制動至停止，然後STO，在高質量慣性時需要。"
            },
            {
              name: "SS2 - 安全停止2",
              description: "驅動器制動至停止，然後SOS。不需要制動器，無磨損，機器停止後可立即繼續。"
            },
            {
              name: "SOS - 安全操作停止",
              description: "電機未關閉，靜止但仍可能有轉矩，保持（定期）在位置，監控速度（0）。多個耦合軸之間的參考保持。"
            },
            {
              name: "SLS - 安全限速",
              description: "監控超過一個或多個速度限制。"
            },
            {
              name: "SSM - 安全速度監控",
              description: "當速度低於設定限制時為高電平的輸出信號。"
            },
            {
              name: "SDI - 安全方向",
              description: "監控運動方向，在錯誤時激活停止。"
            },
            {
              name: "SLP - 安全限位",
              description: "確保軸的位置保持在指定限制內，在錯誤情況下激活停止。"
            },
            {
              name: "SBC - 安全制動控制",
              description: "操作外部（保持）制動器，始終與STO結合使用。"
            },
            {
              name: "SBT - 安全制動測試",
              description: "自動測試（用落下的制動器控制驅動器並監控停止）以測試制動性能和磨損。"
            }
          ]
        },

        emergencyStop: {
          title: "緊急停止功能",
          requirements: [
            "機械必須配備緊急停止裝置以防止真實或即將發生的危險情況。",
            "除了手持便攜式機械和風險不會因緊急停止裝置而降低的機械（風險評估）",
            "緊急停止裝置旨在支持而非取代其他安全措施。",
            "緊急停止功能必須在所有時間都可用和運行，無論操作模式如何。"
          ],
          characteristics: [
            "必須避免或減少對人員的危害、對機械的損害或對工件的損害",
            "由個人動作觸發（按下按鈕或拉緊急停止拉繩）",
            "在所有可能的操作模式中都是主導的",
            "不得干擾其他安全功能"
          ],
          design: [
            "設計緊急停止功能時，操作員在決定是否使用緊急停止裝置時不必考慮任何緊急停止的後果。",
            "選擇最佳減速時間（制動時間）",
            "應用正確的停止類別（類別0或類別1，EN IEC 60204-1）",
            "如有必要，應用預定的關機順序。"
          ]
        },

        emergencyStopDevices: {
          title: "緊急停止裝置",
          specifications: [
            "紅色帶黃色背景",
            "自鎖，就地解鎖",
            "配備強制開關常閉觸點",
            "易於到達/操作",
            "手動操作裝置高度在0.6至1.7米之間"
          ],
          guidelines: [
            "不要在緊急停止按鈕上使用文字或字符（應該）",
            "如果需要指示釋放方向，這必須與執行器顏色（大約）相同，以避免與操作方向混淆"
          ],
          locations: [
            "在任何操作位置，除非風險評估表明這不必要",
            "在其他位置，如果風險評估顯示這有意義，如：",
            "• 輸入和輸出",
            "• 需要干預的位置（使用保持運行控制）",
            "• 預期人機交互的位置，如裝載/卸載"
          ]
        },

        spanOfControl: {
          title: "控制範圍",
          principle: "選擇'單一控制範圍'，使每個緊急停止裝置停止整個機器。（應該）",
          exceptions: "在特殊情況下，使用多個控制範圍，例如在不必要干擾生產或額外危險的情況下。",
          options: [
            "區段",
            "機器", 
            "機器組（生產線）"
          ],
          multipleSpanRequirements: [
            "明確定義和可識別",
            "危險與緊急停止按鈕之間的明確鏈接",
            "控制範圍在緊急制動裝置中清楚可識別",
            "按下緊急停止不會在不同控制範圍內產生額外危險",
            "按下緊急停止不會阻止另一個控制範圍內緊急停止的操作",
            "在使用說明中包含說明"
          ]
        },

        reset: {
          title: "復位功能",
          definition: "復位是手動功能，在重新啟動可能之前復位所有安全功能（例如緊急停止按鈕、入口門功能鎖、光幕等）。",
          requirements: [
            "通過（故意）按下單獨的手動按鈕來啟動",
            "僅在所有保護都運行時實施",
            "不會造成危險情況（沒有東西會移動）",
            "為控制準備啟動信號",
            "僅通過'監控信號變化'執行",
            "具有可能不同於光幕或功能阻擋屏蔽安全功能的SIL或PL級別"
          ],
          positioning: [
            "放置在光幕或屏蔽的安全側",
            "提供危險區域的良好視野。如果這不可能，需要特殊的復位程序（如在危險區域用按鈕1復位，然後在一定時間內在區域外用按鈕2復位）"
          ]
        },

        maintenance: {
          title: "維護",
          requirements: [
            "調整和維護點必須位於危險區域之外",
            "必須能夠在機器停止時進行調整、維護、修理和清潔",
            "如果由於技術原因無法滿足上述一個或多個條件，必須採取措施確保這些操作可以安全進行（見機械指令第1.2.5節）"
          ],
          workingSafely: [
            "為了在機器上工作，必須將其關閉",
            "必須安裝裝置以防止在開啟機器或其部分可能造成危險時意外啟動（例如維護期間）",
            "這些裝置必須適合其預期用途，必須清楚可達並就其功能和目的而言清楚可識別"
          ]
        }
      }
    }
  };

  const currentContent = content[language];
  
  const SectionHeader = ({ icon: Icon, title, section }) => (
    <div 
      className="flex items-center justify-between p-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg cursor-pointer hover:from-green-600 hover:to-green-700 transition-all duration-200"
      onClick={() => toggleSection(section)}
    >
      <div className="flex items-center space-x-3">
        <Icon className="w-6 h-6" />
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      {expandedSections[section] ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{currentContent.title}</h1>
            <h2 className="text-xl text-green-600 mb-2">{currentContent.subtitle}</h2>
            <p className="text-gray-600">{currentContent.tabInfo}</p>
          </div>
          <button
            onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
            className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            <Globe className="w-4 h-4" />
            <span>{language === 'en' ? '中文' : 'English'}</span>
          </button>
        </div>
        
        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
          <h3 className="font-semibold text-green-800 mb-2">{currentContent.standards}</h3>
          <ul className="space-y-1 text-green-700">
            <li>• {currentContent.standard1}</li>
            <li>• {currentContent.standard2}</li>
          </ul>
        </div>
      </div>

      {/* Start Function */}
      <div className="mb-6">
        <SectionHeader icon={Power} title={currentContent.sections.start.title} section="start" />
        {expandedSections.start && (
          <div className="bg-white rounded-b-lg shadow-lg p-6">
            <ul className="space-y-3">
              {currentContent.sections.start.content.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Stop Function */}
      <div className="mb-6">
        <SectionHeader icon={Square} title={currentContent.sections.stop.title} section="stop" />
        {expandedSections.stop && (
          <div className="bg-white rounded-b-lg shadow-lg p-6">
            <div className="space-y-4">
              {currentContent.sections.stop.content.map((item, index) => (
                <p key={index} className="text-gray-700">{item}</p>
              ))}
              
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                {currentContent.sections.stop.categories.map((category, index) => (
                  <div key={index} className="bg-gray-50 border rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">{category.name}</h4>
                    <p className="text-sm text-gray-600">{category.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
                <p className="text-red-800 font-medium">{currentContent.sections.stop.note}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Safety Functions */}
      <div className="mb-6">
        <SectionHeader icon={Shield} title={currentContent.sections.safetyFunctions.title} section="safetyFunctions" />
        {expandedSections.safetyFunctions && (
          <div className="bg-white rounded-b-lg shadow-lg p-6">
            <p className="text-sm text-gray-600 mb-4">{currentContent.sections.safetyFunctions.subtitle}</p>
            <div className="grid md:grid-cols-2 gap-4">
              {currentContent.sections.safetyFunctions.functions.map((func, index) => (
                <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">{func.name}</h4>
                  <p className="text-sm text-blue-700">{func.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Emergency Stop */}
      <div className="mb-6">
        <SectionHeader icon={AlertTriangle} title={currentContent.sections.emergencyStop.title} section="emergencyStop" />
        {expandedSections.emergencyStop && (
          <div className="bg-white rounded-b-lg shadow-lg p-6">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">{language === 'en' ? 'Requirements:' : '要求：'}</h4>
                <ul className="space-y-2">
                  {currentContent.sections.emergencyStop.requirements.map((req, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">{language === 'en' ? 'Characteristics:' : '特性：'}</h4>
                <ul className="space-y-2">
                  {currentContent.sections.emergencyStop.characteristics.map((char, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{char}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">{language === 'en' ? 'Design Principles:' : '設計原則：'}</h4>
                <ul className="space-y-2">
                  {currentContent.sections.emergencyStop.design.map((design, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{design}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Emergency Stop Devices */}
      <div className="mb-6">
        <SectionHeader icon={AlertTriangle} title={currentContent.sections.emergencyStopDevices.title} section="emergencyStopDevices" />
        {expandedSections.emergencyStopDevices && (
          <div className="bg-white rounded-b-lg shadow-lg p-6">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">{language === 'en' ? 'Specifications:' : '規格：'}</h4>
                <ul className="space-y-2">
                  {currentContent.sections.emergencyStopDevices.specifications.map((spec, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">{language === 'en' ? 'Guidelines:' : '指導原則：'}</h4>
                <ul className="space-y-2">
                  {currentContent.sections.emergencyStopDevices.guidelines.map((guide, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{guide}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">{language === 'en' ? 'Locations:' : '位置：'}</h4>
                <ul className="space-y-2">
                  {currentContent.sections.emergencyStopDevices.locations.map((location, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{location}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Span of Control */}
      <div className="mb-6">
        <SectionHeader icon={Settings} title={currentContent.sections.spanOfControl.title} section="spanOfControl" />
        {expandedSections.spanOfControl && (
          <div className="bg-white rounded-b-lg shadow-lg p-6">
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">{language === 'en' ? 'Main Principle:' : '主要原則：'}</h4>
                <p className="text-green-700">{currentContent.sections.spanOfControl.principle}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">{language === 'en' ? 'Exceptions:' : '例外情況：'}</h4>
                <p className="text-gray-700 mb-4">{currentContent.sections.spanOfControl.exceptions}</p>
                
                <h5 className="font-medium text-gray-800 mb-2">{language === 'en' ? 'Span of control options:' : '控制範圍選項：'}</h5>
                <div className="grid md:grid-cols-3 gap-3">
                  {currentContent.sections.spanOfControl.options.map((option, index) => (
                    <div key={index} className="bg-gray-100 rounded-lg p-3 text-center">
                      <span className="font-medium text-gray-800">{option}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">{language === 'en' ? 'Multiple Span Requirements:' : '多重範圍要求：'}</h4>
                <ul className="space-y-2">
                  {currentContent.sections.spanOfControl.multipleSpanRequirements.map((req, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Reset Function */}
      <div className="mb-6">
        <SectionHeader icon={RotateCcw} title={currentContent.sections.reset.title} section="reset" />
        {expandedSections.reset && (
          <div className="bg-white rounded-b-lg shadow-lg p-6">
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">{language === 'en' ? 'Definition:' : '定義：'}</h4>
                <p className="text-blue-700">{currentContent.sections.reset.definition}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">{language === 'en' ? 'Requirements:' : '要求：'}</h4>
                <ul className="space-y-2">
                  {currentContent.sections.reset.requirements.map((req, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">{language === 'en' ? 'Button Positioning:' : '按鈕定位：'}</h4>
                <ul className="space-y-2">
                  {currentContent.sections.reset.positioning.map((pos, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{pos}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Maintenance */}
      <div className="mb-6">
        <SectionHeader icon={Settings} title={currentContent.sections.maintenance.title} section="maintenance" />
        {expandedSections.maintenance && (
          <div className="bg-white rounded-b-lg shadow-lg p-6">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">{language === 'en' ? 'General Requirements:' : '一般要求：'}</h4>
                <ul className="space-y-2">
                  {currentContent.sections.maintenance.requirements.map((req, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">{language === 'en' ? 'Working Safely on Machines:' : '在機器上安全工作：'}</h4>
                <ul className="space-y-2">
                  {currentContent.sections.maintenance.workingSafely.map((safe, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{safe}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h5 className="font-semibold text-yellow-800 mb-2">{language === 'en' ? 'Key Standards Reference:' : '關鍵標準參考：'}</h5>
                <p className="text-yellow-700">EN IEC 60204-1 §5.4 - {language === 'en' ? 'Device to prevent unexpected switch-on' : '防止意外開啟的裝置'}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Additional Information Box */}
      <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg p-6 mt-8">
        <h3 className="text-xl font-bold mb-4">
          {language === 'en' ? 'Key Safety Reminders' : '關鍵安全提醒'}
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <h4 className="font-semibold mb-2">
              {language === 'en' ? 'Emergency Stop' : '緊急停止'}
            </h4>
            <p className="text-sm">
              {language === 'en' 
                ? 'Must be implemented at least PLc or SIL1 according to EN ISO 13850'
                : '根據EN ISO 13850必須至少實施PLc或SIL1'}
            </p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <h4 className="font-semibold mb-2">
              {language === 'en' ? 'Reset Function' : '復位功能'}
            </h4>
            <p className="text-sm">
              {language === 'en' 
                ? 'Manual action required, monitored signal change only'
                : '需要手動操作，僅監控信號變化'}
            </p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <h4 className="font-semibold mb-2">
              {language === 'en' ? 'Stop Categories' : '停止類別'}
            </h4>
            <p className="text-sm">
              {language === 'en' 
                ? 'Emergency stop only with Category 0 or 1'
                : '緊急停止僅使用類別0或1'}
            </p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <h4 className="font-semibold mb-2">
              {language === 'en' ? 'Device Height' : '裝置高度'}
            </h4>
            <p className="text-sm">
              {language === 'en' 
                ? 'Hand-operated devices: 0.6 - 1.7 meters'
                : '手動操作裝置：0.6 - 1.7米'}
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-8 p-4 bg-white rounded-lg shadow">
        <p className="text-gray-600 text-sm">
          {language === 'en' 
            ? 'Machine Safety Module 7: Start, Stop and Reset - Based on EN-IEC 60204-1:2018 and EN-ISO 13850:2016'
            : '機械安全模組7：啟動、停止和復位 - 基於EN-IEC 60204-1:2018和EN-ISO 13850:2016'}
        </p>
      </div>
    </div>
  );
};

export default MachineSafetyModule;