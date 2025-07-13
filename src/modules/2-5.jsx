import React, { useState } from 'react';
import { ChevronRight, AlertTriangle, Info, Shield, Globe } from 'lucide-react';

const MachinerySafetyInfo = () => {
  const [language, setLanguage] = useState('en');
  const [currentSlide, setCurrentSlide] = useState(0);

  const content = {
    en: {
      title: "Machinery Safety Specialist (CE)",
      subtitle: "Tab 2: CE-process and documentation",
      moduleTitle: "Module 5: Information for use",
      slides: [
        {
          title: "Information on the machinery",
          content: [
            "Safety information (residual risks)",
            "Type plate according to Machine Directive chapter 1.7.3",
            "Information required due to other applicable Directives and/or standards"
          ],
          requirements: ["Visible", "Legible", "Indelible"]
        },
        {
          title: "Question 2",
          question: "How do I determine whether information should be placed on the machinery and what information should that be?",
          content: []
        },
        {
          title: "Information on the machinery",
          subtitle: "Machinery Directive annex I, chapter 1.7.3",
          sectionTitle: "Type plate",
          content: [
            "Business name and full address of the manufacturer or representative",
            "Designation of the machinery",
            "CE-marking",
            "Designation of series or type",
            "Serial number if any",
            "Year of construction"
          ],
          requirements: ["Visible", "Legible", "Indelible"],
          typeplate: {
            manufacturer: "Manufacturer: (Name and address)",
            type: "Type:",
            serialNumber: "Serial number:",
            yearOfConstruction: "Year of construction:",
            capacity: "Capacity:",
            powerSupply: "Power supply:",
            mass: "Mass:"
          }
        },
        {
          title: "Information on the machinery",
          subtitle: "Requirements CE-marking",
          content: [
            'Letters "CE" in graphic form',
            "Letters same height (minimum 5 mm)",
            "Height/width ratio",
            "To be affixed in the immediate vicinity of the name of the manufacturer or his authorized representative"
          ]
        },
        {
          title: "Question 3",
          question: "Where should the type plate be placed on the machine?",
          content: []
        }
      ],
      nav: {
        prev: "Previous",
        next: "Next",
        requirements: "Requirements",
        typeplate: "Type Plate Information"
      }
    },
    zh: {
      title: "機械安全專家 (CE)",
      subtitle: "標籤 2: CE 流程和文件",
      moduleTitle: "模組 5: 使用資訊",
      slides: [
        {
          title: "機械資訊",
          content: [
            "安全資訊（殘餘風險）",
            "根據機械指令第 1.7.3 章的型式標牌",
            "其他適用指令和/或標準所需的資訊"
          ],
          requirements: ["可見的", "清晰可讀的", "不可磨滅的"]
        },
        {
          title: "問題 2",
          question: "我如何確定是否應在機械上放置資訊以及應該是什麼資訊？",
          content: []
        },
        {
          title: "機械資訊",
          subtitle: "機械指令附件 I，第 1.7.3 章",
          sectionTitle: "型式標牌",
          content: [
            "製造商或代表的企業名稱和完整地址",
            "機械的名稱",
            "CE 標記",
            "系列或型號的名稱",
            "序列號（如有）",
            "製造年份"
          ],
          requirements: ["可見的", "清晰可讀的", "不可磨滅的"],
          typeplate: {
            manufacturer: "製造商：（名稱和地址）",
            type: "型號：",
            serialNumber: "序列號：",
            yearOfConstruction: "製造年份：",
            capacity: "容量：",
            powerSupply: "電源：",
            mass: "質量："
          }
        },
        {
          title: "機械資訊",
          subtitle: "CE 標記要求",
          content: [
            '"CE" 字母圖形形式',
            "字母相同高度（最小 5 毫米）",
            "高度/寬度比例",
            "應貼在製造商或其授權代表名稱的附近"
          ]
        },
        {
          title: "問題 3",
          question: "型式標牌應該放在機械的什麼位置？",
          content: []
        }
      ],
      nav: {
        prev: "上一頁",
        next: "下一頁",
        requirements: "要求",
        typeplate: "型式標牌資訊"
      }
    }
  };

  const currentContent = content[language];
  const slide = currentContent.slides[currentSlide];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % currentContent.slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + currentContent.slides.length) % currentContent.slides.length);
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'zh' : 'en');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800">{currentContent.title}</h1>
                <p className="text-sm text-slate-600">{currentContent.subtitle}</p>
                <p className="text-sm text-green-600 font-medium">{currentContent.moduleTitle}</p>
              </div>
            </div>
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'en' ? '中文' : 'English'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Slide Navigation */}
          <div className="bg-green-500 text-white p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">
                {slide.title}
                {slide.subtitle && <span className="block text-sm font-normal opacity-90">{slide.subtitle}</span>}
              </h2>
              <div className="flex items-center space-x-2">
                <span className="text-sm opacity-75">
                  {currentSlide + 1} / {currentContent.slides.length}
                </span>
              </div>
            </div>
          </div>

          {/* Slide Content */}
          <div className="p-8">
            {slide.question ? (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <div className="flex items-start space-x-3">
                  <Info className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-medium text-blue-900 mb-2">{slide.title}</h3>
                    <p className="text-slate-700">{slide.question}</p>
                  </div>
                </div>
              </div>
            ) : (
              <>
                {slide.sectionTitle && (
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">{slide.sectionTitle}</h3>
                )}
                
                {slide.content.length > 0 && (
                  <div className="mb-6">
                    <ul className="space-y-3">
                      {slide.content.map((item, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <ChevronRight className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {slide.requirements && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-600" />
                      <h4 className="font-medium text-yellow-800">{currentContent.nav.requirements}</h4>
                    </div>
                    <ul className="space-y-2">
                      {slide.requirements.map((req, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <span className="text-yellow-800">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {slide.typeplate && (
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                    <h4 className="font-medium text-slate-800 mb-4 flex items-center">
                      <Info className="w-5 h-5 text-slate-600 mr-2" />
                      {currentContent.nav.typeplate}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        {Object.entries(slide.typeplate).map(([key, value]) => (
                          <div key={key} className="flex items-center space-x-2">
                            <span className="text-slate-600 font-medium min-w-0 flex-1">{value}</span>
                            <div className="w-24 h-6 bg-white border border-slate-300 rounded"></div>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="text-8xl font-bold text-slate-800 border-4 border-slate-800 px-4 py-2 rounded-lg">
                          CE
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Navigation */}
          <div className="bg-slate-50 px-8 py-4 flex justify-between items-center">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="flex items-center space-x-2 px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-4 h-4 rotate-180" />
              <span>{currentContent.nav.prev}</span>
            </button>

            <div className="flex space-x-2">
              {currentContent.slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-green-500' : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentSlide === currentContent.slides.length - 1}
              className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <span>{currentContent.nav.next}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MachinerySafetyInfo;