import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Globe } from 'lucide-react';

const MachinerySafetyDocs = () => {
  const [currentSection, setCurrentSection] = useState(2);
  const [language, setLanguage] = useState('en');

  const content = {
    en: {
      title: "Machinery Safety Specialist (CE)",
      subtitle: "Tab 2: CE-process and documentation",
      module: "Module 4: Declaration of conformity",
      sections: {
        2: {
          title: "Declarations",
          content: {
            main: "For 1 product or for a series of products",
            points: [
              "Formally signed document",
              "Multiple Directives: on one Declaration",
              "Send copy and copy in archive",
              "In the same language as the instructions",
              "Keep original for at least 10 years"
            ],
            note: "you can assign someone to assign."
          }
        },
        3: {
          title: "Declarations",
          subtitle: "According to Machinery Directive, annex II",
          content: {
            sections: [
              {
                title: "EC-declaration of conformity",
                items: [
                  "Declaration of conformity relating to machinery for machinery (also safety components, interchangeable equipment, etc; definition see tab 2)",
                  "Annex II.1.a"
                ]
              },
              {
                title: "Declaration of incorporation",
                items: [
                  "Declaration of incorporation of partly completed machinery",
                  "Annex II.1.b"
                ]
              }
            ]
          }
        },
        4: {
          title: "EC –Declaration of conformity",
          subtitle: "According to Machinery Directive, annex II.1.a",
          content: {
            requirements: [
              "Name and address of manufacturer or authorised representative",
              "Name and address of authorised representative for compiling the technical file",
              "Description and identification of the machine",
              "Declaration that the machine complies with the Machinery Directive and other directives",
              "Name, address and id-number of the inspection body",
              "Name, address and id-number of the notified body",
              "Reference to the harmonised standards used",
              "Reference to other technical standards and specifications applied",
              "Place and date of assembly",
              "Identity and signature"
            ]
          }
        }
      }
    },
    zh: {
      title: "機械安全專家 (CE)",
      subtitle: "選項卡 2：CE 流程和文件",
      module: "模組 4：符合性聲明",
      sections: {
        2: {
          title: "聲明",
          content: {
            main: "適用於單一產品或系列產品",
            points: [
              "正式簽署文件",
              "多重指令：在一份聲明中",
              "發送副本並存檔副本",
              "與說明書使用相同語言",
              "保留原件至少 10 年"
            ],
            note: "您可以指派他人進行指派。"
          }
        },
        3: {
          title: "聲明",
          subtitle: "根據機械指令，附錄 II",
          content: {
            sections: [
              {
                title: "EC 符合性聲明",
                items: [
                  "機械符合性聲明（也包括安全組件、可互換設備等；定義見選項卡 2）",
                  "附錄 II.1.a"
                ]
              },
              {
                title: "整合聲明",
                items: [
                  "部分完成機械的整合聲明",
                  "附錄 II.1.b"
                ]
              }
            ]
          }
        },
        4: {
          title: "EC 符合性聲明",
          subtitle: "根據機械指令，附錄 II.1.a",
          content: {
            requirements: [
              "製造商或授權代表的姓名和地址",
              "負責編製技術文件的授權代表的姓名和地址",
              "機器的描述和識別",
              "聲明機器符合機械指令和其他指令",
              "檢查機構的姓名、地址和識別號碼",
              "通知機構的姓名、地址和識別號碼",
              "所使用的協調標準參考",
              "所應用的其他技術標準和規格參考",
              "組裝地點和日期",
              "身份和簽名"
            ]
          }
        }
      }
    }
  };

  const currentContent = content[language];

  const nextSection = () => {
    if (currentSection < 4) {
      setCurrentSection(currentSection + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 2) {
      setCurrentSection(currentSection - 1);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  const renderSection2 = () => (
    <div className="space-y-6">
      <div className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-blue-800">
          {currentContent.sections[2].title}
        </h3>
        <p className="text-lg mb-4 text-gray-700">
          {currentContent.sections[2].content.main}
        </p>
        <ul className="space-y-2">
          {currentContent.sections[2].content.points.map((point, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              <span className={index < 2 ? "bg-yellow-200 px-1" : ""}>{point}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 p-3 bg-blue-100 rounded border-l-4 border-blue-500">
          <p className="text-blue-700 italic">{currentContent.sections[2].content.note}</p>
        </div>
      </div>
    </div>
  );

  const renderSection3 = () => (
    <div className="space-y-6">
      <div className="bg-green-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-2 text-green-800">
          {currentContent.sections[3].title}
        </h3>
        <p className="text-gray-600 mb-6">{currentContent.sections[3].subtitle}</p>
        
        <div className="space-y-4">
          {currentContent.sections[3].content.sections.map((section, index) => (
            <div key={index} className="border-l-4 border-green-500 pl-4">
              <h4 className={`font-semibold mb-2 ${index === 1 ? 'bg-yellow-200 px-2 py-1 inline-block' : 'text-green-700'}`}>
                {section.title}
              </h4>
              <ul className="space-y-1">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-700">
                    − {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSection4 = () => (
    <div className="space-y-6">
      <div className="bg-purple-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-2 text-purple-800">
          {currentContent.sections[4].title}
        </h3>
        <p className="text-gray-600 mb-6">{currentContent.sections[4].subtitle}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentContent.sections[4].content.requirements.map((req, index) => (
            <div key={index} className="flex items-start p-3 bg-white rounded border border-purple-200">
              <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                {index + 1}
              </span>
              <span className="text-gray-700">{req}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 2:
        return renderSection2();
      case 3:
        return renderSection3();
      case 4:
        return renderSection4();
      default:
        return renderSection2();
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white min-h-screen">
      {/* Header */}
      <div className="mb-8 text-center relative">
        <div className="absolute top-0 right-0">
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            <Globe size={20} />
            <span className="font-medium">{language === 'en' ? '中文' : 'English'}</span>
          </button>
        </div>
        
        <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-6 rounded-lg mb-4">
          <h1 className="text-2xl font-bold mb-2">{currentContent.title}</h1>
          <p className="text-green-100">{currentContent.subtitle}</p>
          <p className="text-green-100">{currentContent.module}</p>
        </div>
        
        <div className="text-sm text-gray-500 mb-4">
          Tab2-4/{currentSection} 20190719
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={prevSection}
          disabled={currentSection === 2}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
            currentSection === 2
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          <ChevronLeft size={20} />
          <span>{language === 'en' ? 'Previous' : '上一頁'}</span>
        </button>

        <div className="flex space-x-2">
          {[2, 3, 4].map((section) => (
            <button
              key={section}
              onClick={() => setCurrentSection(section)}
              className={`w-10 h-10 rounded-full font-bold transition-colors ${
                currentSection === section
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              {section}
            </button>
          ))}
        </div>

        <button
          onClick={nextSection}
          disabled={currentSection === 4}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
            currentSection === 4
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          <span>{language === 'en' ? 'Next' : '下一頁'}</span>
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Content */}
      <div className="mb-8">
        {renderCurrentSection()}
      </div>

      {/* Footer */}
      <div className="text-center text-gray-500 text-sm border-t pt-4">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-8 h-8 bg-green-500 rounded"></div>
          <span className="font-bold">kader</span>
          <span className="text-xs">Academy</span>
        </div>
        <p className="mt-2">Tab2-4/{currentSection}-Sh.{currentSection}</p>
      </div>
    </div>
  );
};

export default MachinerySafetyDocs;