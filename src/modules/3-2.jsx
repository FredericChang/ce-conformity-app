import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Globe, Calculator, Grid, BarChart3, Layers } from 'lucide-react';

const RiskEstimationApp = () => {
  const [language, setLanguage] = useState('en');
  const [currentMethod, setCurrentMethod] = useState('overview');

  const translations = {
    en: {
      title: "Machinery Safety Specialist (CE)",
      subtitle: "Tab 3: Risk assessment - Module 2: Risk estimation (methods)",
      overview: "Overview",
      riskGraph: "Risk Graph",
      kinneyWiruth: "Kinney & Wiruth",
      riskMatrix: "Risk Matrix",
      numericalScoring: "Numerical Scoring",
      hybridMethod: "Hybrid Method",
      overviewTitle: "Step 3: Estimating risks (EN-ISO 12100)",
      overviewContent: [
        "You can decide for yourself which risk assessment methodology is appropriate for the application.",
        "In this module we cover:",
        "• Risk graph (various variants), origin prEN1050",
        "• Kinney & Wiruth (sometimes called Fine & Kinney)",
        "• Risk matrix",
        "• Numerical scoring",
        "• Hybrid tool"
      ],
      usage: "Usage Guidelines",
      usageContent: [
        "For risk assessment based on the Machinery Directive, a risk graph methodology is often used.",
        "Kinney & Wiruth is often used for risk assessment based on RI&E (e.g., risk assessment based on the Work Equipment Directive)"
      ],
      severity: "Severity",
      probability: "Probability",
      frequency: "Frequency",
      avoidance: "Avoidance",
      riskLevel: "Risk Level",
      calculate: "Calculate Risk"
    },
    zh: {
      title: "機械安全專家 (CE)",
      subtitle: "標籤3：風險評估 - 模組2：風險估算（方法）",
      overview: "概述",
      riskGraph: "風險圖表",
      kinneyWiruth: "Kinney & Wiruth方法",
      riskMatrix: "風險矩陣",
      numericalScoring: "數值評分",
      hybridMethod: "混合方法",
      overviewTitle: "步驟3：風險估算 (EN-ISO 12100)",
      overviewContent: [
        "您可以自行決定哪種風險評估方法適合該應用。",
        "在本模組中我們涵蓋：",
        "• 風險圖表（各種變體），源自prEN1050",
        "• Kinney & Wiruth（有時稱為Fine & Kinney）",
        "• 風險矩陣",
        "• 數值評分",
        "• 混合工具"
      ],
      usage: "使用指導",
      usageContent: [
        "對於基於機械指令的風險評估，通常使用風險圖表方法。",
        "Kinney & Wiruth通常用於基於RI&E的風險評估（例如，基於工作設備指令的風險評估）"
      ],
      severity: "嚴重程度",
      probability: "概率",
      frequency: "頻率",
      avoidance: "避免性",
      riskLevel: "風險等級",
      calculate: "計算風險"
    }
  };

  const t = translations[language];

  const riskGraphData = {
    en: {
      title: "Risk Graph (14-point)",
      severity: {
        S1: "Minor injuries (recoverable)",
        S2: "Major injuries (irreparable)",
        S3: "One or more deaths"
      },
      probability: {
        P1: "Low",
        P2: "Average", 
        P3: "High"
      },
      frequency: {
        F1: "Seldom to regularly (2x/8 hours) and/or short exposure (15 min./8 hours)",
        F2: "Often to continuous (>2x/8 hours) and/or longer exposure (>15 min./8 hours)"
      },
      avoidance: {
        A1: "Possible under certain circumstances",
        A2: "Hardly possible"
      },
      riskClasses: {
        "1-4": "Low risk",
        "5-7": "Possible risk", 
        "8-10": "High risk",
        "11-14": "Very high risk"
      }
    },
    zh: {
      title: "風險圖表 (14點)",
      severity: {
        S1: "輕微傷害（可恢復）",
        S2: "重大傷害（不可逆轉）",
        S3: "一人或多人死亡"
      },
      probability: {
        P1: "低",
        P2: "中等",
        P3: "高"
      },
      frequency: {
        F1: "很少到定期（2次/8小時）和/或短暴露（15分鐘/8小時）",
        F2: "經常到持續（>2次/8小時）和/或長暴露（>15分鐘/8小時）"
      },
      avoidance: {
        A1: "在某些情況下可能",
        A2: "幾乎不可能"
      },
      riskClasses: {
        "1-4": "低風險",
        "5-7": "可能風險",
        "8-10": "高風險", 
        "11-14": "非常高風險"
      }
    }
  };

  const kinneyData = {
    en: {
      title: "Kinney and Wiruth (Linear method)",
      severity: [
        { value: 1, desc: "Minor (no absenteeism)" },
        { value: 3, desc: "Considerable (with absenteeism)" },
        { value: 7, desc: "Severe" },
        { value: 15, desc: "Deadly (one death)" },
        { value: 40, desc: "Disaster (several deaths)" },
        { value: 100, desc: "Catastrophe (more deaths)" }
      ],
      frequency: [
        { value: 0.5, desc: "Very rare (yearly)" },
        { value: 1, desc: "Rare (few times a year)" },
        { value: 2, desc: "Monthly" },
        { value: 3, desc: "Weekly" },
        { value: 6, desc: "Daily" },
        { value: 10, desc: "Continuously" }
      ],
      probability: [
        { value: 0.1, desc: "Almost unimaginable" },
        { value: 0.2, desc: "Almost impossible" },
        { value: 0.5, desc: "Very unlikely" },
        { value: 1, desc: "Borderline between unlikely and possible" },
        { value: 3, desc: "Quite possible" },
        { value: 10, desc: "To be expected" }
      ],
      riskCategories: {
        "<20": "Low risk",
        "20-69": "Possible risk",
        "70-199": "Considerable risk",
        "200-399": "High risk",
        ">400": "Very high risk"
      }
    },
    zh: {
      title: "Kinney和Wiruth方法（線性方法）",
      severity: [
        { value: 1, desc: "輕微（無缺勤）" },
        { value: 3, desc: "相當嚴重（有缺勤）" },
        { value: 7, desc: "嚴重" },
        { value: 15, desc: "致命（一人死亡）" },
        { value: 40, desc: "災難（數人死亡）" },
        { value: 100, desc: "大災難（更多死亡）" }
      ],
      frequency: [
        { value: 0.5, desc: "非常罕見（每年）" },
        { value: 1, desc: "罕見（每年幾次）" },
        { value: 2, desc: "每月" },
        { value: 3, desc: "每週" },
        { value: 6, desc: "每天" },
        { value: 10, desc: "持續" }
      ],
      probability: [
        { value: 0.1, desc: "幾乎無法想像" },
        { value: 0.2, desc: "幾乎不可能" },
        { value: 0.5, desc: "非常不可能" },
        { value: 1, desc: "不可能和可能之間的邊界" },
        { value: 3, desc: "很可能" },
        { value: 10, desc: "預期發生" }
      ],
      riskCategories: {
        "<20": "低風險",
        "20-69": "可能風險",
        "70-199": "相當風險",
        "200-399": "高風險",
        ">400": "非常高風險"
      }
    }
  };

  const RiskGraphCalculator = () => {
    const [severity, setSeverity] = useState('S1');
    const [probability, setProbability] = useState('P1');
    const [frequency, setFrequency] = useState('F1');
    const [avoidance, setAvoidance] = useState('A1');
    
    const calculateRisk = () => {
      // Simplified risk calculation based on the 14-point risk graph
      const riskMatrix = {
        'S1-P1-F1-A1': 1, 'S1-P1-F1-A2': 2, 'S1-P1-F2-A1': 3, 'S1-P1-F2-A2': 4,
        'S1-P2-F1-A1': 3, 'S1-P2-F1-A2': 4, 'S1-P2-F2-A1': 5, 'S1-P2-F2-A2': 6,
        'S1-P3-F1-A1': 5, 'S1-P3-F1-A2': 6, 'S1-P3-F2-A1': 7, 'S1-P3-F2-A2': 8,
        'S2-P1-F1-A1': 7, 'S2-P1-F1-A2': 8, 'S2-P1-F2-A1': 9, 'S2-P1-F2-A2': 10,
        'S2-P2-F1-A1': 9, 'S2-P2-F1-A2': 10, 'S2-P2-F2-A1': 11, 'S2-P2-F2-A2': 12,
        'S2-P3-F1-A1': 11, 'S2-P3-F1-A2': 12, 'S2-P3-F2-A1': 13, 'S2-P3-F2-A2': 14,
        'S3-P1-F1-A1': 11, 'S3-P1-F1-A2': 12, 'S3-P1-F2-A1': 13, 'S3-P1-F2-A2': 14,
        'S3-P2-F1-A1': 13, 'S3-P2-F1-A2': 14, 'S3-P2-F2-A1': 14, 'S3-P2-F2-A2': 14,
        'S3-P3-F1-A1': 14, 'S3-P3-F1-A2': 14, 'S3-P3-F2-A1': 14, 'S3-P3-F2-A2': 14
      };
      
      const key = `${severity}-${probability}-${frequency}-${avoidance}`;
      const risk = riskMatrix[key] || 1;
      
      if (risk <= 4) return { level: riskGraphData[language].riskClasses["1-4"], color: "bg-green-500", value: risk };
      if (risk <= 7) return { level: riskGraphData[language].riskClasses["5-7"], color: "bg-yellow-500", value: risk };
      if (risk <= 10) return { level: riskGraphData[language].riskClasses["8-10"], color: "bg-orange-500", value: risk };
      return { level: riskGraphData[language].riskClasses["11-14"], color: "bg-red-500", value: risk };
    };

    const risk = calculateRisk();

    return (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-green-800">{riskGraphData[language].title}</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t.severity}</label>
              <select 
                value={severity} 
                onChange={(e) => setSeverity(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="S1">S1 - {riskGraphData[language].severity.S1}</option>
                <option value="S2">S2 - {riskGraphData[language].severity.S2}</option>
                <option value="S3">S3 - {riskGraphData[language].severity.S3}</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t.probability}</label>
              <select 
                value={probability} 
                onChange={(e) => setProbability(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="P1">P1 - {riskGraphData[language].probability.P1}</option>
                <option value="P2">P2 - {riskGraphData[language].probability.P2}</option>
                <option value="P3">P3 - {riskGraphData[language].probability.P3}</option>
              </select>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t.frequency}</label>
              <select 
                value={frequency} 
                onChange={(e) => setFrequency(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="F1">F1 - {riskGraphData[language].frequency.F1}</option>
                <option value="F2">F2 - {riskGraphData[language].frequency.F2}</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t.avoidance}</label>
              <select 
                value={avoidance} 
                onChange={(e) => setAvoidance(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="A1">A1 - {riskGraphData[language].avoidance.A1}</option>
                <option value="A2">A2 - {riskGraphData[language].avoidance.A2}</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className={`p-4 rounded-lg ${risk.color} text-white`}>
          <h4 className="font-bold">{t.riskLevel}: {risk.value}/14</h4>
          <p>{risk.level}</p>
        </div>
      </div>
    );
  };

  const KinneyCalculator = () => {
    const [severity, setSeverity] = useState(1);
    const [frequency, setFrequency] = useState(0.5);
    const [probability, setProbability] = useState(0.1);
    
    const calculateRisk = () => {
      const risk = severity * frequency * probability;
      const categories = kinneyData[language].riskCategories;
      
      if (risk < 20) return { level: categories["<20"], color: "bg-green-500", value: risk };
      if (risk < 70) return { level: categories["20-69"], color: "bg-yellow-500", value: risk };
      if (risk < 200) return { level: categories["70-199"], color: "bg-orange-500", value: risk };
      if (risk < 400) return { level: categories["200-399"], color: "bg-red-500", value: risk };
      return { level: categories[">400"], color: "bg-red-800", value: risk };
    };

    const risk = calculateRisk();

    return (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-green-800">{kinneyData[language].title}</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t.severity}</label>
            <select 
              value={severity} 
              onChange={(e) => setSeverity(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              {kinneyData[language].severity.map(item => (
                <option key={item.value} value={item.value}>
                  {item.value} - {item.desc}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t.frequency}</label>
            <select 
              value={frequency} 
              onChange={(e) => setFrequency(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              {kinneyData[language].frequency.map(item => (
                <option key={item.value} value={item.value}>
                  {item.value} - {item.desc}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t.probability}</label>
            <select 
              value={probability} 
              onChange={(e) => setProbability(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              {kinneyData[language].probability.map(item => (
                <option key={item.value} value={item.value}>
                  {item.value} - {item.desc}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-lg font-medium text-gray-700 mb-2">
            {t.calculate}: {severity} × {frequency} × {probability} = {risk.value.toFixed(1)}
          </div>
        </div>
        
        <div className={`p-4 rounded-lg ${risk.color} text-white`}>
          <h4 className="font-bold">{t.riskLevel}: {risk.value.toFixed(1)}</h4>
          <p>{risk.level}</p>
        </div>
      </div>
    );
  };

  const RiskMatrixView = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-green-800">
        {language === 'en' ? 'Risk Matrix (NPR-ISO/TR 14121-2)' : '風險矩陣 (NPR-ISO/TR 14121-2)'}
      </h3>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2 bg-gray-100">
                {language === 'en' ? 'Probability of occurrence' : '發生概率'}
              </th>
              <th className="border border-gray-300 p-2 bg-gray-100">
                {language === 'en' ? 'Catastrophic' : '災難性'}
              </th>
              <th className="border border-gray-300 p-2 bg-gray-100">
                {language === 'en' ? 'Serious' : '嚴重'}
              </th>
              <th className="border border-gray-300 p-2 bg-gray-100">
                {language === 'en' ? 'Moderate' : '中等'}
              </th>
              <th className="border border-gray-300 p-2 bg-gray-100">
                {language === 'en' ? 'Minor' : '輕微'}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2 font-medium">
                {language === 'en' ? 'Very likely' : '非常可能'}
              </td>
              <td className="border border-gray-300 p-2 bg-red-500 text-white text-center">
                {language === 'en' ? 'High' : '高'}
              </td>
              <td className="border border-gray-300 p-2 bg-red-500 text-white text-center">
                {language === 'en' ? 'High' : '高'}
              </td>
              <td className="border border-gray-300 p-2 bg-red-500 text-white text-center">
                {language === 'en' ? 'High' : '高'}
              </td>
              <td className="border border-gray-300 p-2 bg-orange-500 text-white text-center">
                {language === 'en' ? 'Medium' : '中等'}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 font-medium">
                {language === 'en' ? 'Likely' : '可能'}
              </td>
              <td className="border border-gray-300 p-2 bg-red-500 text-white text-center">
                {language === 'en' ? 'High' : '高'}
              </td>
              <td className="border border-gray-300 p-2 bg-red-500 text-white text-center">
                {language === 'en' ? 'High' : '高'}
              </td>
              <td className="border border-gray-300 p-2 bg-orange-500 text-white text-center">
                {language === 'en' ? 'Medium' : '中等'}
              </td>
              <td className="border border-gray-300 p-2 bg-green-500 text-white text-center">
                {language === 'en' ? 'Low' : '低'}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 font-medium">
                {language === 'en' ? 'Unlikely' : '不太可能'}
              </td>
              <td className="border border-gray-300 p-2 bg-orange-500 text-white text-center">
                {language === 'en' ? 'Medium' : '中等'}
              </td>
              <td className="border border-gray-300 p-2 bg-orange-500 text-white text-center">
                {language === 'en' ? 'Medium' : '中等'}
              </td>
              <td className="border border-gray-300 p-2 bg-green-500 text-white text-center">
                {language === 'en' ? 'Low' : '低'}
              </td>
              <td className="border border-gray-300 p-2 bg-gray-300 text-center">
                {language === 'en' ? 'Negligible' : '可忽略'}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 font-medium">
                {language === 'en' ? 'Remote' : '極少'}
              </td>
              <td className="border border-gray-300 p-2 bg-green-500 text-white text-center">
                {language === 'en' ? 'Low' : '低'}
              </td>
              <td className="border border-gray-300 p-2 bg-green-500 text-white text-center">
                {language === 'en' ? 'Low' : '低'}
              </td>
              <td className="border border-gray-300 p-2 bg-gray-300 text-center">
                {language === 'en' ? 'Negligible' : '可忽略'}
              </td>
              <td className="border border-gray-300 p-2 bg-gray-300 text-center">
                {language === 'en' ? 'Negligible' : '可忽略'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  const NumericalScoringView = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-green-800">
        {language === 'en' ? 'Numerical Scoring (NPR-ISO/TR 14121-2)' : '數值評分 (NPR-ISO/TR 14121-2)'}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-3">
            {language === 'en' ? 'Severity Score (SS)' : '嚴重程度評分 (SS)'}
          </h4>
          <ul className="space-y-2 text-sm">
            <li>• {language === 'en' ? 'Catastrophic: SS = 100' : '災難性：SS = 100'}</li>
            <li>• {language === 'en' ? 'Serious: 99 ≥ SS ≥ 90' : '嚴重：99 ≥ SS ≥ 90'}</li>
            <li>• {language === 'en' ? 'Moderate: 89 ≥ SS ≥ 30' : '中等：89 ≥ SS ≥ 30'}</li>
            <li>• {language === 'en' ? 'Minor: 29 ≥ SS ≥ 0' : '輕微：29 ≥ SS ≥ 0'}</li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-3">
            {language === 'en' ? 'Probability Score (PS)' : '概率評分 (PS)'}
          </h4>
          <ul className="space-y-2 text-sm">
            <li>• {language === 'en' ? 'Very likely: PS = 100' : '非常可能：PS = 100'}</li>
            <li>• {language === 'en' ? 'Likely: 99 ≥ PS ≥ 70' : '可能：99 ≥ PS ≥ 70'}</li>
            <li>• {language === 'en' ? 'Unlikely: 69 ≥ PS ≥ 30' : '不太可能：69 ≥ PS ≥ 30'}</li>
            <li>• {language === 'en' ? 'Remote: 29 ≥ PS ≥ 0' : '極少：29 ≥ PS ≥ 0'}</li>
          </ul>
        </div>
      </div>
      
      <div>
        <h4 className="text-lg font-semibold text-gray-800 mb-3">
          {language === 'en' ? 'Risk Score Categories' : '風險評分類別'}
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2 bg-gray-100">
                  {language === 'en' ? 'Risk Score (RS = SS + PS)' : '風險評分 (RS = SS + PS)'}
                </th>
                <th className="border border-gray-300 p-2 bg-gray-100">
                  {language === 'en' ? 'Risk Level' : '風險等級'}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">≥ 160</td>
                <td className="border border-gray-300 p-2 bg-red-500 text-white text-center">
                  {language === 'en' ? 'High' : '高'}
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">159 ≥ RS ≥ 120</td>
                <td className="border border-gray-300 p-2 bg-orange-500 text-white text-center">
                  {language === 'en' ? 'Medium' : '中等'}
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">119 ≥ RS ≥ 90</td>
                <td className="border border-gray-300 p-2 bg-green-500 text-white text-center">
                  {language === 'en' ? 'Low' : '低'}
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">89 ≥ RS ≥ 0</td>
                <td className="border border-gray-300 p-2 bg-gray-300 text-center">
                  {language === 'en' ? 'Negligible' : '可忽略'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const HybridMethodView = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-green-800">
        {language === 'en' ? 'Hybrid Method (NPR-ISO/TR 14121-2)' : '混合方法 (NPR-ISO/TR 14121-2)'}
      </h3>
      
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <p className="text-sm text-yellow-800">
          {language === 'en' 
            ? 'The hybrid method is a combination of the previously discussed methods. The example is very similar to the estimation method for the purpose of estimating the target SIL, however, it is not completely identical.'
            : '混合方法是前面討論的方法的組合。該示例與用於估算目標SIL的估算方法非常相似，但並非完全相同。'
          }
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-3">
            {language === 'en' ? 'Frequency (Fr)' : '頻率 (Fr)'}
          </h4>
          <ul className="space-y-2 text-sm">
            <li>• 5: {language === 'en' ? 'Very high' : '非常高'}</li>
            <li>• 4: {language === 'en' ? 'High' : '高'}</li>
            <li>• 3: {language === 'en' ? 'Average' : '中等'}</li>
            <li>• 2: {language === 'en' ? 'Low' : '低'}</li>
            <li>• 1: {language === 'en' ? 'Very low' : '非常低'}</li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-3">
            {language === 'en' ? 'Probability (Pr)' : '概率 (Pr)'}
          </h4>
          <ul className="space-y-2 text-sm">
            <li>• 5: {language === 'en' ? 'Very high' : '非常高'}</li>
            <li>• 4: {language === 'en' ? 'Likely' : '可能'}</li>
            <li>• 3: {language === 'en' ? 'Possible' : '有可能'}</li>
            <li>• 2: {language === 'en' ? 'Rarely' : '很少'}</li>
            <li>• 1: {language === 'en' ? 'Negligible' : '可忽略'}</li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-3">
            {language === 'en' ? 'Avoidance (Av)' : '避免性 (Av)'}
          </h4>
          <ul className="space-y-2 text-sm">
            <li>• 5: {language === 'en' ? 'Impossible' : '不可能'}</li>
            <li>• 3: {language === 'en' ? 'Possible' : '有可能'}</li>
            <li>• 1: {language === 'en' ? 'Likely' : '很可能'}</li>
          </ul>
        </div>
      </div>
      
      <div>
        <h4 className="text-lg font-semibold text-gray-800 mb-3">
          {language === 'en' ? 'Severity (Se)' : '嚴重程度 (Se)'}
        </h4>
        <ul className="space-y-2 text-sm">
          <li>• 4: {language === 'en' ? 'Death, losing an eye or arm' : '死亡，失去眼睛或手臂'}</li>
          <li>• 3: {language === 'en' ? 'Permanent, lasting fingers' : '永久性，持續手指傷害'}</li>
          <li>• 2: {language === 'en' ? 'Reversible, medical attention' : '可逆轉，需要醫療關注'}</li>
          <li>• 1: {language === 'en' ? 'Reversible, first aid' : '可逆轉，急救'}</li>
        </ul>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="text-lg font-semibold text-gray-800 mb-3">
          {language === 'en' ? 'Risk Calculation' : '風險計算'}
        </h4>
        <p className="text-sm">
          {language === 'en' 
            ? 'Class (Cl) = Fr + Pr + Av'
            : '類別 (Cl) = Fr + Pr + Av'
          }
        </p>
        <p className="text-sm mt-2">
          {language === 'en' 
            ? 'Risk is determined by the intersection of Severity (Se) and Class (Cl) in the risk matrix.'
            : '風險由嚴重程度 (Se) 和類別 (Cl) 在風險矩陣中的交集確定。'
          }
        </p>
      </div>
    </div>
  );

  const OverviewView = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-green-800">{t.overviewTitle}</h3>
      
      <div className="space-y-4">
        {t.overviewContent.map((content, index) => (
          <p key={index} className="text-gray-700">{content}</p>
        ))}
      </div>
      
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
        <h4 className="font-semibold text-blue-800 mb-2">{t.usage}</h4>
        {t.usageContent.map((content, index) => (
          <p key={index} className="text-blue-700 text-sm">{content}</p>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {[
          { id: 'riskGraph', icon: Grid, title: t.riskGraph },
          { id: 'kinneyWiruth', icon: Calculator, title: t.kinneyWiruth },
          { id: 'riskMatrix', icon: BarChart3, title: t.riskMatrix },
          { id: 'numericalScoring', icon: BarChart3, title: t.numericalScoring },
          { id: 'hybridMethod', icon: Layers, title: t.hybridMethod }
        ].map(method => (
          <div 
            key={method.id}
            onClick={() => setCurrentMethod(method.id)}
            className="p-4 border border-gray-200 rounded-lg hover:bg-green-50 cursor-pointer transition-colors"
          >
            <method.icon className="w-8 h-8 text-green-600 mb-2" />
            <h4 className="font-medium text-gray-800">{method.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (currentMethod) {
      case 'riskGraph':
        return <RiskGraphCalculator />;
      case 'kinneyWiruth':
        return <KinneyCalculator />;
      case 'riskMatrix':
        return <RiskMatrixView />;
      case 'numericalScoring':
        return <NumericalScoringView />;
      case 'hybridMethod':
        return <HybridMethodView />;
      default:
        return <OverviewView />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">{t.title}</h1>
              <p className="text-green-100 mt-1">{t.subtitle}</p>
            </div>
            
            <button
              onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
              className="flex items-center gap-2 bg-green-500 hover:bg-green-400 px-4 py-2 rounded-lg transition-colors"
            >
              <Globe className="w-4 h-4" />
              {language === 'en' ? '中文' : 'English'}
            </button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto">
            {[
              { id: 'overview', title: t.overview },
              { id: 'riskGraph', title: t.riskGraph },
              { id: 'kinneyWiruth', title: t.kinneyWiruth },
              { id: 'riskMatrix', title: t.riskMatrix },
              { id: 'numericalScoring', title: t.numericalScoring },
              { id: 'hybridMethod', title: t.hybridMethod }
            ].map(method => (
              <button
                key={method.id}
                onClick={() => setCurrentMethod(method.id)}
                className={`py-4 px-2 border-b-2 text-sm font-medium whitespace-nowrap transition-colors ${
                  currentMethod === method.id
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {method.title}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          {renderContent()}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-300">
            {language === 'en' 
              ? 'Machinery Safety Risk Assessment Tool - Based on EN-ISO 12100 and NPR-ISO/TR 14121-2'
              : '機械安全風險評估工具 - 基於 EN-ISO 12100 和 NPR-ISO/TR 14121-2'
            }
          </p>
        </div>
      </footer>
    </div>
  );
};

export default RiskEstimationApp;