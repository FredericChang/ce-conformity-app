import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Globe } from 'lucide-react';

const MachineAccessSafety = () => {
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
      subtitle: "Module 6: Permanent means of access",
      standard: "EN-ISO 14122-1/4:2016",
      overview: {
        title: "Overview",
        description: "Safety of machinery - Permanent means of access to machinery",
        parts: [
          "Section 1: Choice of Fixed Means of Access and General Accessibility Requirements",
          "Part 2: Work platforms and walkways",
          "Part 3: Stairs, stepladders and handrails",
          "Part 4: Fixed ladders"
        ]
      },
      accessTypes: {
        title: "Types of Access (Part 1)",
        types: [
          { name: "Ramp", angle: "0°-10°", description: "Recommended for frequent access" },
          { name: "Stairs", angle: "20°-45°", description: "Most common access method" },
          { name: "Stepladder", angle: "45°-75°", description: "For steeper access requirements" },
          { name: "Fixed Ladder", angle: "75°-90°", description: "Vertical access, requires fall protection above 3m" }
        ]
      },
      platforms: {
        title: "Work Platforms and Walkways (Part 2)",
        requirements: [
          "Minimum clear height: 2100mm (locally 1900mm at obstacles)",
          "Width of passage: 800mm (600mm for low frequency use, 500mm for short distances)",
          "Height difference between floor elements: maximum 4mm",
          "No gaps allowing ball diameter >35mm (20mm above workplaces)",
          "Kick plate required if gap >20mm between floor and adjacent element",
          "Floor hatches must be self-closing when user passes through"
        ]
      },
      stairs: {
        title: "Stairs, Stepladders and Handrails (Part 3)",
        handrails: [
          "Required for height differences ≥500mm",
          "Kick plate height: 100mm with 12mm free space",
          "Center distance between vertical supports: 1500mm maximum",
          "Handrail opening: 120mm maximum (larger openings require self-closing gate)"
        ],
        fixedStairs: [
          "Step overlap: 10mm minimum",
          "Steps must be constant everywhere",
          "Clear height above stairs: 2300mm",
          "Intermediate platform every 4m (minimum 800mm deep)",
          "Step depth: 210-310mm"
        ],
        stepladders: [
          "Step overlap: 0mm",
          "Step depth varies with angle (see EN ISO 14122-3 Table 1)",
          "Clear height above stepladder: 2300mm",
          "Intermediate platform every 3m (minimum 800mm deep)",
          "Step depth: 80mm"
        ]
      },
      ladders: {
        title: "Fixed Ladders (Part 4)",
        requirements: [
          "Fall protection required when climbing height ≥3000mm",
          "Upper rung must be flush with tread on arrival",
          "Space between rungs: 250-300mm",
          "Cage starts between 2200-3000mm height",
          "Free space in cage: 650-800mm",
          "Cage extends to handrail at top",
          "Must pass strength, bending, and torsion tests"
        ]
      }
    },
    zh: {
      title: "機械安全專家 (CE)",
      subtitle: "模組 6：永久性通道設施",
      standard: "EN-ISO 14122-1/4:2016",
      overview: {
        title: "概述",
        description: "機械安全 - 機械永久性通道設施",
        parts: [
          "第1部分：固定通道選擇和一般可達性要求",
          "第2部分：工作平台和走道",
          "第3部分：樓梯、階梯和扶手",
          "第4部分：固定梯子"
        ]
      },
      accessTypes: {
        title: "通道類型 (第1部分)",
        types: [
          { name: "坡道", angle: "0°-10°", description: "建議用於頻繁通行" },
          { name: "樓梯", angle: "20°-45°", description: "最常見的通道方式" },
          { name: "階梯", angle: "45°-75°", description: "用於較陡的通道需求" },
          { name: "固定梯子", angle: "75°-90°", description: "垂直通道，超過3米需要防墜保護" }
        ]
      },
      platforms: {
        title: "工作平台和走道 (第2部分)",
        requirements: [
          "最小淨高：2100mm（障礙物處局部1900mm）",
          "通道寬度：800mm（低頻使用600mm，短距離500mm）",
          "地板元件間高度差：最大4mm",
          "不得有允許直徑>35mm球體通過的間隙（工作場所上方20mm）",
          "地板與相鄰元件間隙>20mm時需設置踢腳板",
          "地板艙口必須在使用者通過後自動關閉"
        ]
      },
      stairs: {
        title: "樓梯、階梯和扶手 (第3部分)",
        handrails: [
          "高度差≥500mm時必須設置",
          "踢腳板高度：100mm，自由空間12mm",
          "垂直支撐間中心距離：最大1500mm",
          "扶手開口：最大120mm（較大開口需自動關閉門）"
        ],
        fixedStairs: [
          "踏步重疊：最小10mm",
          "踏步必須處處一致",
          "樓梯上方淨高：2300mm",
          "每4m設置中間平台（最小深度800mm）",
          "踏步深度：210-310mm"
        ],
        stepladders: [
          "踏步重疊：0mm",
          "踏步深度依角度變化（見EN ISO 14122-3表1）",
          "階梯上方淨高：2300mm",
          "每3m設置中間平台（最小深度800mm）",
          "踏步深度：80mm"
        ]
      },
      ladders: {
        title: "固定梯子 (第4部分)",
        requirements: [
          "攀爬高度≥3000mm時需要防墜保護",
          "上端橫檔必須與到達踏面齊平",
          "橫檔間距：250-300mm",
          "護籠從2200-3000mm高度開始",
          "護籠內自由空間：650-800mm",
          "護籠延伸至頂部扶手",
          "必須通過強度、彎曲和扭轉測試"
        ]
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{t.title}</h1>
                <p className="text-gray-600">{t.subtitle}</p>
              </div>
            </div>
            
            <button
              onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
              className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              <Globe size={20} />
              <span>{language === 'en' ? '中文' : 'English'}</span>
            </button>
          </div>
          
          <div className="mt-4 p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-green-800 font-medium">{t.standard}</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Overview Section */}
        <div className="bg-white rounded-xl shadow-lg mb-8 overflow-hidden">
          <div 
            className="p-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white cursor-pointer"
            onClick={() => toggleSection('overview')}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">{t.overview.title}</h2>
              {expandedSections.overview ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
            </div>
          </div>
          
          {expandedSections.overview && (
            <div className="p-6">
              <p className="text-gray-700 mb-4">{t.overview.description}</p>
              <div className="grid md:grid-cols-2 gap-4">
                {t.overview.parts.map((part, index) => (
                  <div key={index} className="p-3 bg-blue-50 rounded-lg">
                    <span className="text-blue-800">{part}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Access Types Section */}
        <div className="bg-white rounded-xl shadow-lg mb-8 overflow-hidden">
          <div 
            className="p-6 bg-gradient-to-r from-green-500 to-green-600 text-white cursor-pointer"
            onClick={() => toggleSection('accessTypes')}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">{t.accessTypes.title}</h2>
              {expandedSections.accessTypes ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
            </div>
          </div>
          
          {expandedSections.accessTypes && (
            <div className="p-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {t.accessTypes.types.map((type, index) => (
                  <div key={index} className="p-4 border-2 border-green-200 rounded-lg hover:border-green-400 transition-colors">
                    <h3 className="font-bold text-green-800 mb-2">{type.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{type.angle}</p>
                    <p className="text-sm text-gray-700">{type.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Platforms Section */}
        <div className="bg-white rounded-xl shadow-lg mb-8 overflow-hidden">
          <div 
            className="p-6 bg-gradient-to-r from-purple-500 to-purple-600 text-white cursor-pointer"
            onClick={() => toggleSection('platforms')}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">{t.platforms.title}</h2>
              {expandedSections.platforms ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
            </div>
          </div>
          
          {expandedSections.platforms && (
            <div className="p-6">
              <div className="space-y-3">
                {t.platforms.requirements.map((req, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg">
                    <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{req}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Stairs Section */}
        <div className="bg-white rounded-xl shadow-lg mb-8 overflow-hidden">
          <div 
            className="p-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white cursor-pointer"
            onClick={() => toggleSection('stairs')}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">{t.stairs.title}</h2>
              {expandedSections.stairs ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
            </div>
          </div>
          
          {expandedSections.stairs && (
            <div className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-bold text-orange-800 mb-3">{language === 'en' ? 'Handrails' : '扶手'}</h3>
                  <div className="space-y-2">
                    {t.stairs.handrails.map((item, index) => (
                      <div key={index} className="p-2 bg-orange-50 rounded text-sm">{item}</div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-bold text-orange-800 mb-3">{language === 'en' ? 'Fixed Stairs' : '固定樓梯'}</h3>
                  <div className="space-y-2">
                    {t.stairs.fixedStairs.map((item, index) => (
                      <div key={index} className="p-2 bg-orange-50 rounded text-sm">{item}</div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-bold text-orange-800 mb-3">{language === 'en' ? 'Stepladders' : '階梯'}</h3>
                  <div className="space-y-2">
                    {t.stairs.stepladders.map((item, index) => (
                      <div key={index} className="p-2 bg-orange-50 rounded text-sm">{item}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Ladders Section */}
        <div className="bg-white rounded-xl shadow-lg mb-8 overflow-hidden">
          <div 
            className="p-6 bg-gradient-to-r from-red-500 to-red-600 text-white cursor-pointer"
            onClick={() => toggleSection('ladders')}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">{t.ladders.title}</h2>
              {expandedSections.ladders ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
            </div>
          </div>
          
          {expandedSections.ladders && (
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                {t.ladders.requirements.map((req, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-red-50 rounded-lg">
                    <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      ✓
                    </div>
                    <p className="text-gray-700">{req}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center py-8">
          <div className="inline-flex items-center space-x-3 px-6 py-3 bg-white rounded-full shadow-lg">
            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">K</span>
            </div>
            <span className="text-gray-700 font-medium">Kader Academy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MachineAccessSafety;