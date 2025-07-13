import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Globe, Shield, AlertTriangle, Settings, CheckCircle, XCircle } from 'lucide-react';

const FunctionalSafetyPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [language, setLanguage] = useState('zh');

  const content = {
    zh: {
      title: "机械安全专家 (CE) - 模块5: 功能安全 SIL/PL",
      subtitle: "TAB4: 风险降低和标准",
      slides: [
        {
          title: "功能安全标准概述",
          content: [
            "• EN-ISO 13849-1: 机械安全 - 控制系统的安全相关部件 - 第1部分: 设计的一般原则",
            "• EN-IEC 62061: 机械安全 - 具有安全功能的控制系统的功能安全"
          ],
          note: "这两个标准是机械功能安全的核心标准"
        },
        {
          title: "机械法规基本要求",
          content: [
            "控制系统必须按以下方式设计和构建:",
            "a) 考虑到环境和风险，能够承受预期的操作负载和外部影响，包括合理可预见的恶意攻击",
            "b) 硬件或控制逻辑故障不会导致危险情况",
            "c) 控制逻辑错误不会导致危险情况"
          ],
          note: "网络安全要求是法规中的新内容"
        },
        {
          title: "功能安全流程",
          content: [
            "1. 风险评估过程 (符合 EN ISO 12100)",
            "2. 确定安全功能",
            "3. 性能等级 (PL) 或安全完整性等级 (SIL) 确定",
            "4. 安全功能设计和验证"
          ],
          note: "系统性的方法确保安全要求得到满足"
        },
        {
          title: "性能等级 (PLr) 确定",
          content: [
            "S: 伤害严重程度 (S1-S2)",
            "• S1 = 轻伤",
            "• S2 = 重伤或死亡",
            "",
            "F: 危险暴露频率 (F1-F2)",
            "• F1 = 很少",
            "• F2 = 经常"
          ],
          note: "使用风险图确定所需的性能等级"
        },
        {
          title: "PLr 确定 - 避免可能性",
          content: [
            "P: 避免危险的可能性 (P1-P2)",
            "• P1 = 在特定条件下可能避免危险",
            "• P2 = 几乎不可能避免危险",
            "",
            "示例: PLr = f(S, F, P)"
          ],
          note: "考虑人员能否及时发现并避免危险"
        },
        {
          title: "SIL 等级确定",
          content: [
            "Se: 严重程度 (1-4)",
            "Fr: 频率和暴露时间 (1-5)",
            "Pr: 发生概率 (1-5)",
            "Av: 避免或限制伤害的概率 (1, 3, 5)",
            "",
            "Cl = Fr + Pr + Av"
          ],
          note: "SIL 等级通过数值计算确定"
        },
        {
          title: "安全功能定义",
          content: [
            "实践建议:",
            "• 定义覆盖单一危险的安全功能",
            "• 如果多个执行器造成同一危险，应包含在同一安全功能中",
            "",
            "示例:",
            "- 6轴机器人的运动部件在一个安全功能中",
            "- 两个相邻机器人在不同的安全功能中"
          ],
          note: "清晰的安全功能定义是设计的基础"
        },
        {
          title: "实际示例 - 压力机",
          content: [
            "场景: 压力机连续操作，操作员手动放入/取出产品",
            "危险: 手指被夹断的风险",
            "特点: 压力机移动缓慢且可预测",
            "",
            "安全功能: '当光幕被遮断时，压力机停止'",
            "",
            "评估: S2 + F2 + P1 = PLr d (所需故障率: 1.0E-7/小时)"
          ],
          note: "实际应用中的PL/SIL确定过程"
        },
        {
          title: "安全功能组成",
          content: [
            "安全功能包括的所有组件:",
            "• 传感器 (如光幕)",
            "• 安全控制器",
            "• 安全继电器",
            "• 执行器 (需要停止的驱动)",
            "",
            "设计要求:",
            "• 低故障率 (统计学)",
            "• 高质量设计 (结构化)"
          ],
          note: "整个安全链的可靠性决定安全功能的完整性"
        }
      ]
    },
    en: {
      title: "Machine Safety Specialist (CE) - Module 5: Functional Safety SIL/PL",
      subtitle: "TAB4: Risk Reduction and Standards",
      slides: [
        {
          title: "Functional Safety Standards Overview",
          content: [
            "• EN-ISO 13849-1: Safety of machinery - Safety-related parts of control systems - Part 1: General principles for design",
            "• EN-IEC 62061: Safety of machinery - Functional safety of safety-related control systems"
          ],
          note: "These two standards are the core standards for machinery functional safety"
        },
        {
          title: "Essential Requirements for Control Systems",
          content: [
            "Control systems must be designed and built so that:",
            "a) They can withstand the anticipated operational loads and external influences, including reasonably foreseeable malicious attacks",
            "b) A fault in hardware or control logic does not lead to a hazardous situation",
            "c) Errors in control logic do not lead to a hazardous situation"
          ],
          note: "Cybersecurity requirements are new in the regulation"
        },
        {
          title: "Functional Safety Process",
          content: [
            "1. Risk assessment process (according to EN ISO 12100)",
            "2. Define safety functions",
            "3. Performance Level (PL) or Safety Integrity Level (SIL) determination",
            "4. Safety function design and validation"
          ],
          note: "Systematic approach ensures safety requirements are met"
        },
        {
          title: "Required Performance Level (PLr) Determination",
          content: [
            "S: Severity of injury (S1-S2)",
            "• S1 = slight injury",
            "• S2 = serious injury or death",
            "",
            "F: Frequency of exposure to hazard (F1-F2)",
            "• F1 = seldom",
            "• F2 = frequent"
          ],
          note: "Use risk graph to determine required performance level"
        },
        {
          title: "PLr Determination - Avoidance Possibility",
          content: [
            "P: Possibility of avoiding hazard (P1-P2)",
            "• P1 = possible to avoid hazard under certain conditions",
            "• P2 = scarcely possible to avoid hazard",
            "",
            "Example: PLr = f(S, F, P)"
          ],
          note: "Consider whether personnel can detect and avoid hazard in time"
        },
        {
          title: "SIL Level Determination",
          content: [
            "Se: Severity (1-4)",
            "Fr: Frequency and duration of exposure (1-5)",
            "Pr: Probability of occurrence (1-5)",
            "Av: Probability of avoiding or limiting harm (1, 3, 5)",
            "",
            "Cl = Fr + Pr + Av"
          ],
          note: "SIL level is determined through numerical calculation"
        },
        {
          title: "Safety Function Definition",
          content: [
            "Practical recommendations:",
            "• Define safety functions that cover a single hazard",
            "• If multiple actuators contribute to the same hazard, include them in the same safety function",
            "",
            "Examples:",
            "- Moving parts of a 6-axis robot in one safety function",
            "- Two adjacent robots in different safety functions"
          ],
          note: "Clear safety function definition is the foundation of design"
        },
        {
          title: "Practical Example - Press Machine",
          content: [
            "Scenario: Press for continuous operation, operator manually loads/unloads products",
            "Hazard: Risk of finger amputation",
            "Characteristics: Press movement is slow and predictable",
            "",
            "Safety function: 'When light curtain is interrupted, press stops'",
            "",
            "Assessment: S2 + F2 + P1 = PLr d (Required failure rate: 1.0E-7/hour)"
          ],
          note: "PL/SIL determination process in practical application"
        },
        {
          title: "Safety Function Components",
          content: [
            "All components included in safety function:",
            "• Sensors (e.g., light curtain)",
            "• Safety controller",
            "• Safety relays",
            "• Actuators (drives that need to be stopped)",
            "",
            "Design requirements:",
            "• Low failure rate (statistical)",
            "• High quality design (structural)"
          ],
          note: "The reliability of the entire safety chain determines the integrity of the safety function"
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
    setLanguage(prev => prev === 'zh' ? 'en' : 'zh');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg mb-6 p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-green-600" />
              <h1 className="text-2xl font-bold text-gray-800">
                {currentContent.title}
              </h1>
            </div>
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'zh' ? 'EN' : '中文'}</span>
            </button>
          </div>
          <p className="text-gray-600">{currentContent.subtitle}</p>
          
          {/* Progress bar */}
          <div className="mt-4">
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>Slide {currentSlide + 1} of {totalSlides}</span>
              <span>{Math.round(((currentSlide + 1) / totalSlides) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-green-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="bg-white rounded-lg shadow-lg p-8 min-h-96">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-800 flex items-center">
              <Settings className="w-8 h-8 text-blue-600 mr-3" />
              {currentContent.slides[currentSlide].title}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Content */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {currentContent.slides[currentSlide].content.map((item, index) => (
                  <div key={index} className="flex items-start">
                    {item.startsWith('•') ? (
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    ) : item.trim() === '' ? null : (
                      <div className="w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                    )}
                    <p className="text-lg leading-relaxed text-gray-700">
                      {item.replace('• ', '')}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Note panel */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-l-4 border-orange-400 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <AlertTriangle className="w-5 h-5 text-orange-500 mr-2" />
                  <h3 className="font-semibold text-orange-800">
                    {language === 'zh' ? '重要提示' : 'Important Note'}
                  </h3>
                </div>
                <p className="text-orange-700 text-sm leading-relaxed">
                  {currentContent.slides[currentSlide].note}
                </p>
              </div>

              {/* Quick navigation */}
              <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-700 mb-3">
                  {language === 'zh' ? '快速导航' : 'Quick Navigation'}
                </h4>
                <div className="grid grid-cols-3 gap-2">
                  {currentContent.slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`p-2 text-xs rounded transition-colors ${
                        index === currentSlide
                          ? 'bg-green-600 text-white'
                          : 'bg-white text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center space-x-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>{language === 'zh' ? '上一页' : 'Previous'}</span>
          </button>
          
          <div className="flex space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-green-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className="flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            <span>{language === 'zh' ? '下一页' : 'Next'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Summary footer */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg p-6">
          <div className="flex items-center justify-center space-x-4">
            <Shield className="w-6 h-6" />
            <p className="text-center font-medium">
              {language === 'zh' 
                ? '功能安全确保机械系统在故障条件下的安全运行'
                : 'Functional Safety ensures safe operation of machinery systems under fault conditions'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunctionalSafetyPresentation; 