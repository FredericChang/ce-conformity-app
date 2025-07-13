import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Globe, Book, Zap, Droplets, Wind } from 'lucide-react';

const MachineSafetyCourse = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [language, setLanguage] = useState('en');

  const content = {
    en: {
      title: "Machine Safety Specialist (CE)",
      subtitle: "Module 2: Electrical, hydraulic and pneumatic installation",
      tab: "TAB4: Risk reduction and standards",
      navigation: {
        prev: "Previous",
        next: "Next",
        language: "中文"
      },
      slides: [
        {
          title: "Course Overview",
          content: [
            "EN-IEC 60204-1:2018 Electrical equipment of machinery",
            "EN-ISO 4413:2010 Hydraulics - General rules and safety requirements for systems and their components",
            "EN-ISO 4414:2010 Pneumatics - General rules and safety requirements for systems and their components"
          ]
        },
        {
          title: "Electrical Equipment Standards",
          content: [
            "EN-IEC 60204-1: Electrical equipment of machinery (For machines with CE marking)",
            "NEN 1010 (Dutch regulation): Safety provisions for low-voltage installations",
            "EN 50110-1 and -2: Working safely on electrical installations",
            "NEN 3140: Low voltage ≤1000VAC / ≤ 1500VDC",
            "NEN 3840: High voltage >1000VAC / > 1500VDC",
            "EN-IEC 61439-1: Low-voltage switchgear and controlgear assemblies"
          ]
        },
        {
          title: "Main and Operating Switch Requirements",
          content: [
            "Each machine must be equipped with a possibility to separate the (main) power supply (de-energize / secure)",
            "Examples: Switch-disconnectors, Power circuit breakers, Plug/Socket combinations",
            "The main switch must be lockable in the 'off position'",
            "Control element must be located on the outside of the control cabinet",
            "Must be 'safely' accessible at height 0.6m - 1.9m above floor",
            "Additional 'work switches' may be used in the Netherlands"
          ]
        },
        {
          title: "Wiring Requirements",
          content: [
            "Connections must be protected against accidental disconnection",
            "Connection of multiple conductors to single terminal only if designed for that purpose",
            "In protection chain (earth), only one protective conductor per terminal",
            "Wiring outside enclosure must use enclosed cable ducts or hoses",
            "Terminal blocks must prevent internal/external wiring crossover",
            "Electrical cables must run terminal to terminal without welding or branches"
          ]
        },
        {
          title: "Wire Color Coding",
          content: [
            "Protective conductor: GREEN-YELLOW combination (entire length)",
            "Neutral conductor: BLUE (light blue recommended)",
            "Current conductor colors:",
            "• BLACK: Main power chains (AC and DC)",
            "• RED: Control current chains (AC)",
            "• BLUE: Control current circuits (DC)",
            "• ORANGE: Power chains not needing separation/external source"
          ]
        },
        {
          title: "Equipotential Bonding",
          content: [
            "Protective bonding: Protection against electric shock from indirect contact",
            "Functional bonding: Reduce adverse effects of:",
            "• Insulation faults on machine functioning",
            "• Electrical interference on sensitive equipment",
            "• Lightning damage to electrical equipment",
            "Parts requiring connection: Conductive surfaces >50mm×50mm, metal cable infrastructure, flammable substance piping"
          ]
        },
        {
          title: "Protection and IP Ratings",
          content: [
            "Lighting must have separate overcurrent protection from service sockets",
            "IP Rating Examples:",
            "• IP 2x: Protected against objects >12mm",
            "• IP 4x: Protected against objects >1mm",
            "• IP 5x/6x: Dust protected/dustproof",
            "• IP x4: Splash water protection",
            "• IP x5: Water jet protection",
            "• IP x7: Submersible protection (30 min, 1m deep)"
          ]
        },
        {
          title: "Control Cabinet Integration",
          content: [
            "Non-electrical parts must not be placed inside electrical switchgear casing",
            "Considerations: Maintenance access, fire hazard, component damage, leakage risks",
            "Solutions:",
            "• Compartmentalization (minimum IP 2x)",
            "• Short tie-off pipes",
            "• Electrical components near hydraulics: IP 54",
            "No CE marking under Machinery or Low Voltage Directives for control cabinets"
          ]
        },
        {
          title: "Hydraulic and Pneumatic Standards",
          content: [
            "EN-ISO 4413:2010: Hydraulics general rules and safety requirements",
            "EN-ISO 4414:2010: Pneumatics general rules and safety requirements",
            "Requirements:",
            "• Use suitable components",
            "• Prevent impermissible pressure levels",
            "• Provide securing options (lockable main valves)",
            "• Prevent unauthorized use",
            "• Proper coding to exclude incorrect assembly"
          ]
        },
        {
          title: "System-Specific Requirements",
          content: [
            "Pneumatics:",
            "• High noise exposure: use silencers",
            "• Proper valve installation",
            "• Moisture-free components (frost-free)",
            "Hydraulics:",
            "• Collection containers for flooding",
            "• Double-walled/shielded pipes near operators",
            "• Pressure limitation and temperature warnings",
            "• Proper venting and large drip trays"
          ]
        }
      ]
    },
    zh: {
      title: "機械安全專家 (CE)",
      subtitle: "模組2：電氣、液壓和氣動安裝",
      tab: "TAB4：風險降低和標準",
      navigation: {
        prev: "上一頁",
        next: "下一頁",
        language: "English"
      },
      slides: [
        {
          title: "課程概述",
          content: [
            "EN-IEC 60204-1:2018 機械電氣設備",
            "EN-ISO 4413:2010 液壓 - 系統及其組件的一般規則和安全要求",
            "EN-ISO 4414:2010 氣動 - 系統及其組件的一般規則和安全要求"
          ]
        },
        {
          title: "電氣設備標準",
          content: [
            "EN-IEC 60204-1：機械電氣設備（適用於CE標記的機械）",
            "NEN 1010（荷蘭法規）：低壓裝置安全規定",
            "EN 50110-1和-2：電氣裝置安全作業",
            "NEN 3140：低電壓 ≤1000VAC / ≤ 1500VDC",
            "NEN 3840：高電壓 >1000VAC / > 1500VDC",
            "EN-IEC 61439-1：低壓開關櫃和控制櫃組件"
          ]
        },
        {
          title: "主開關和操作開關要求",
          content: [
            "每台機械都必須配備分離（主）電源的可能性（斷電/安全）",
            "例如：開關斷路器、適合分離的電力斷路器、插頭/插座組合",
            "主開關必須可在「關閉位置」鎖定",
            "控制元件必須位於控制櫃外部",
            "必須「安全」可及，高度在地面0.6m-1.9m之間",
            "在荷蘭可能還會使用額外的「工作開關」"
          ]
        },
        {
          title: "配線要求",
          content: [
            "連接必須防止意外斷開",
            "多個導體連接到單個端子只有在為此目的設計時才允許",
            "在保護鏈（接地）中，每個端子只能連接一個保護導體",
            "機殼外的配線必須使用封閉的電纜槽或軟管",
            "端子塊必須防止內部/外部配線交叉",
            "電纜必須從一個端子到另一個端子，不得有焊接或中間分支"
          ]
        },
        {
          title: "導線顏色編碼",
          content: [
            "保護導體：綠-黃組合（全長）",
            "中性導體：藍色（建議淺藍色）",
            "電流導體顏色：",
            "• 黑色：主電源鏈（交流和直流）",
            "• 紅色：控制電流鏈（交流）",
            "• 藍色：控制電流電路（直流）",
            "• 橙色：不需要分離的電源鏈/外部電源"
          ]
        },
        {
          title: "等電位連接",
          content: [
            "保護連接：防止間接接觸造成的電擊",
            "功能連接：減少以下不良影響：",
            "• 絕緣故障對機械功能的影響",
            "• 電氣干擾對敏感設備的影響",
            "• 雷擊對電氣設備的損害",
            "需要連接的部件：導電表面>50mm×50mm、金屬電纜基礎設施、易燃物質管道"
          ]
        },
        {
          title: "保護和IP等級",
          content: [
            "照明必須與服務插座分開設置過電流保護",
            "IP等級示例：",
            "• IP 2x：防護直徑>12mm的物體",
            "• IP 4x：防護直徑>1mm的物體",
            "• IP 5x/6x：防塵/防塵密封",
            "• IP x4：防濺水",
            "• IP x5：防水射流",
            "• IP x7：防浸水（30分鐘，1米深）"
          ]
        },
        {
          title: "控制櫃整合",
          content: [
            "非電氣部件不得放置在電氣開關櫃外殼內",
            "考慮因素：維護通道、火災危險、組件損壞、洩漏風險",
            "解決方案：",
            "• 分隔化（最低IP 2x）",
            "• 短連接管",
            "• 液壓附近的電氣組件：IP 54",
            "控制櫃不需要機械指令或低電壓指令下的CE標記"
          ]
        },
        {
          title: "液壓和氣動標準",
          content: [
            "EN-ISO 4413:2010：液壓一般規則和安全要求",
            "EN-ISO 4414:2010：氣動一般規則和安全要求",
            "要求：",
            "• 使用合適的組件",
            "• 防止不允許的壓力水平",
            "• 提供保護選項（可鎖定的主閥）",
            "• 防止未經授權的使用",
            "• 適當的編碼以排除錯誤組裝"
          ]
        },
        {
          title: "系統特定要求",
          content: [
            "氣動：",
            "• 高噪音暴露：使用消音器",
            "• 正確的閥門安裝",
            "• 無濕氣組件（防凍）",
            "液壓：",
            "• 防洪收集容器",
            "• 操作員附近的雙壁/屏蔽管道",
            "• 壓力限制和溫度警告",
            "• 適當的通風和大型滴水盤"
          ]
        }
      ]
    }
  };

  const currentContent = content[language];
  const totalSlides = currentContent.slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'zh' : 'en');
  };

  const getIcon = (index) => {
    if (index <= 4) return <Zap className="w-6 h-6" />;
    if (index <= 7) return <Book className="w-6 h-6" />;
    return index <= 8 ? <Droplets className="w-6 h-6" /> : <Wind className="w-6 h-6" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b-4 border-green-500">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">{currentContent.title}</h1>
                <p className="text-lg text-gray-600">{currentContent.subtitle}</p>
                <p className="text-sm text-green-600 font-medium">{currentContent.tab}</p>
              </div>
            </div>
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>{currentContent.navigation.language}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Slide Header */}
          <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {getIcon(currentSlide)}
                <h2 className="text-2xl font-bold">{currentContent.slides[currentSlide].title}</h2>
              </div>
              <div className="text-sm opacity-90">
                {currentSlide + 1} / {totalSlides}
              </div>
            </div>
          </div>

          {/* Slide Content */}
          <div className="p-8">
            <div className="space-y-4">
              {currentContent.slides[currentSlide].content.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="border-t bg-gray-50 px-8 py-6">
            <div className="flex items-center justify-between">
              <button
                onClick={prevSlide}
                className="flex items-center space-x-2 px-6 py-3 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors disabled:opacity-50"
                disabled={currentSlide === 0}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>{currentContent.navigation.prev}</span>
              </button>

              {/* Slide Indicators */}
              <div className="flex space-x-2">
                {Array.from({ length: totalSlides }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-green-500' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="flex items-center space-x-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors disabled:opacity-50"
                disabled={currentSlide === totalSlides - 1}
              >
                <span>{currentContent.navigation.next}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-6 bg-gray-200 rounded-full h-2 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-green-500 to-blue-500 transition-all duration-300 ease-out"
            style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
          />
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Kader Academy - Machine Safety Specialist Training</p>
          <p>Tab4-2/9 20240816</p>
        </div>
      </div>
    </div>
  );
};

export default MachineSafetyCourse;