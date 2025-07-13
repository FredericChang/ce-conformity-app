import React, { useState } from 'react';
import { Calculator, Settings, Shield, Hand, Ruler, AlertTriangle } from 'lucide-react';

const SafetyDistanceCalculator = () => {
  const [language, setLanguage] = useState('zh');
  const [activeTab, setActiveTab] = useState('crushing');

  const translations = {
    zh: {
      title: '機械安全距離計算機',
      subtitle: '依照 EN-ISO 13854, 13855, 13857 標準',
      tabs: {
        crushing: '防擠壓距離',
        protective: '防護結構距離',
        devices: '防護裝置距離',
        twohand: '雙手控制'
      },
      crushing: {
        title: 'EN-ISO 13854: 防止人體部位擠壓的最小間隙',
        bodyPart: '身體部位',
        minGap: '最小間隙 (mm)',
        parts: {
          body: '身體',
          head: '頭部 (最佳位置)',
          leg: '腿部',
          foot: '腳部',
          toes: '腳趾',
          arm: '手臂',
          hand: '手部/手腕/拳頭',
          finger: '手指'
        },
        calculate: '計算'
      },
      protective: {
        title: 'EN-ISO 13857: 防護結構安全距離',
        dangerHeight: '危險區域高度 (mm)',
        guardHeight: '防護結構高度 (mm)',
        calculate: '計算距離',
        result: '安全距離',
        overhead: '頭頂伸手',
        overGuard: '越過防護罩',
        through: '穿越防護罩',
        openingSize: '開口尺寸 (mm)'
      },
      devices: {
        title: 'EN-ISO 13855: 防護裝置定位',
        stopTime: '停止時間 T (秒)',
        approachSpeed: '接近速度 K (mm/s)',
        intrusion: '入侵距離 C (mm)',
        height: '光幕高度 H (mm)',
        resolution: '解析度 d (mm)',
        calculate: '計算安全距離',
        formulas: {
          standard: '標準公式: S = K × T + C',
          heightBased: '基於高度: S = K × T + (1200 - 0.4 × H)',
          wholeBody: '全身防護: S = K × T + 850',
          throughDetection: '穿越檢測: S = K × T + 8 × (d - 14)'
        }
      },
      twohand: {
        title: 'EN-ISO 13851: 雙手控制',
        formula: '公式: S = 1600 × T + 250',
        stopTime: '停止時間 T (秒)',
        calculate: '計算最小距離',
        requirements: '要求',
        reqList: [
          '操作範圍內運動部件不運作',
          '運動部件不可接觸',
          '控制器間距離 > 260 mm',
          '同時操作',
          '放開時停止',
          '僅在新起始位置後重新啟動',
          '故障 = 停機',
          '冗餘和循環控制'
        ]
      },
      common: {
        result: '計算結果',
        safetyDistance: '安全距離',
        mm: 'mm',
        seconds: '秒',
        clear: '清除',
        standard: '標準值',
        customValue: '自定義值'
      }
    },
    en: {
      title: 'Machine Safety Distance Calculator',
      subtitle: 'According to EN-ISO 13854, 13855, 13857 Standards',
      tabs: {
        crushing: 'Crushing Prevention',
        protective: 'Protective Structures',
        devices: 'Protective Devices',
        twohand: 'Two-Hand Control'
      },
      crushing: {
        title: 'EN-ISO 13854: Minimum gaps to avoid crushing of human body parts',
        bodyPart: 'Body Part',
        minGap: 'Minimum Gap (mm)',
        parts: {
          body: 'Body',
          head: 'Head (least favourable position)',
          leg: 'Leg',
          foot: 'Foot',
          toes: 'Toes',
          arm: 'Arm',
          hand: 'Hand/Wrist/Fist',
          finger: 'Finger'
        },
        calculate: 'Calculate'
      },
      protective: {
        title: 'EN-ISO 13857: Safety distances for protective structures',
        dangerHeight: 'Danger Zone Height (mm)',
        guardHeight: 'Guard Height (mm)',
        calculate: 'Calculate Distance',
        result: 'Safety Distance',
        overhead: 'Reaching Overhead',
        overGuard: 'Reaching Over Guard',
        through: 'Reaching Through',
        openingSize: 'Opening Size (mm)'
      },
      devices: {
        title: 'EN-ISO 13855: Positioning of protective devices',
        stopTime: 'Stop Time T (seconds)',
        approachSpeed: 'Approach Speed K (mm/s)',
        intrusion: 'Intrusion Distance C (mm)',
        height: 'Light Curtain Height H (mm)',
        resolution: 'Resolution d (mm)',
        calculate: 'Calculate Safety Distance',
        formulas: {
          standard: 'Standard Formula: S = K × T + C',
          heightBased: 'Height Based: S = K × T + (1200 - 0.4 × H)',
          wholeBody: 'Whole Body Access: S = K × T + 850',
          throughDetection: 'Through Detection: S = K × T + 8 × (d - 14)'
        }
      },
      twohand: {
        title: 'EN-ISO 13851: Two-Hand Control',
        formula: 'Formula: S = 1600 × T + 250',
        stopTime: 'Stop Time T (seconds)',
        calculate: 'Calculate Minimum Distance',
        requirements: 'Requirements',
        reqList: [
          'Moving parts not in operation within range',
          'Moving parts cannot be reached',
          'Distance between controls > 260 mm',
          'Simultaneous operation',
          'Stopping when letting go',
          'New start only after new starting position',
          'Defect = downtime',
          'Redundant and cyclically controlled'
        ]
      },
      common: {
        result: 'Calculation Result',
        safetyDistance: 'Safety Distance',
        mm: 'mm',
        seconds: 'seconds',
        clear: 'Clear',
        standard: 'Standard Value',
        customValue: 'Custom Value'
      }
    }
  };

  const t = translations[language];

  const crushingData = {
    body: 500,
    head: 300,
    leg: 180,
    foot: 120,
    toes: 50,
    arm: 120,
    hand: 100,
    finger: 25
  };

  const calculateProtectiveDistance = (dangerHeight, guardHeight, openingSize = null) => {
    if (openingSize) {
      const safetyDistances = {
        4: 25, 6: 25, 8: 35, 10: 80, 12: 100, 20: 120, 30: 200, 40: 200, 50: 850
      };
      return safetyDistances[openingSize] || 850;
    }
    
    const heightDiff = dangerHeight - guardHeight;
    if (heightDiff <= 0) return 0;
    if (heightDiff <= 400) return 100;
    if (heightDiff <= 600) return 300;
    if (heightDiff <= 800) return 500;
    if (heightDiff <= 1000) return 700;
    return 850;
  };

  const calculateDeviceDistance = (K, T, C, H = null, d = null, formula = 'standard') => {
    switch (formula) {
      case 'heightBased':
        return K * T + (1200 - 0.4 * H);
      case 'wholeBody':
        return K * T + 850;
      case 'throughDetection':
        return K * T + 8 * (d - 14);
      default:
        return K * T + C;
    }
  };

  const calculateTwoHandDistance = (T) => {
    return 1600 * T + 250;
  };

  const CrushingTab = () => (
    <div className="space-y-6">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-800 mb-4">{t.crushing.title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(crushingData).map(([part, value]) => (
            <div key={part} className="bg-white p-3 rounded border">
              <div className="flex justify-between items-center">
                <span className="font-medium">{t.crushing.parts[part]}</span>
                <span className="text-xl font-bold text-green-600">{value} {t.common.mm}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ProtectiveTab = () => {
    const [dangerHeight, setDangerHeight] = useState('');
    const [guardHeight, setGuardHeight] = useState('');
    const [openingSize, setOpeningSize] = useState('');
    const [protectiveResult, setProtectiveResult] = useState(null);

    const calculateProtective = () => {
      const result = calculateProtectiveDistance(
        parseFloat(dangerHeight), 
        parseFloat(guardHeight), 
        openingSize ? parseFloat(openingSize) : null
      );
      setProtectiveResult(result);
    };

    return (
      <div className="space-y-6">
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-green-800 mb-4">{t.protective.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">{t.protective.dangerHeight}</label>
              <input
                type="number"
                value={dangerHeight}
                onChange={(e) => setDangerHeight(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="1000"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">{t.protective.guardHeight}</label>
              <input
                type="number"
                value={guardHeight}
                onChange={(e) => setGuardHeight(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="800"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">{t.protective.openingSize}</label>
              <select
                value={openingSize}
                onChange={(e) => setOpeningSize(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="">{t.protective.overGuard}</option>
                <option value="4">4mm - {t.protective.through}</option>
                <option value="6">6mm - {t.protective.through}</option>
                <option value="8">8mm - {t.protective.through}</option>
                <option value="10">10mm - {t.protective.through}</option>
                <option value="12">12mm - {t.protective.through}</option>
                <option value="20">20mm - {t.protective.through}</option>
                <option value="30">30mm - {t.protective.through}</option>
                <option value="40">40mm - {t.protective.through}</option>
                <option value="50">50mm - {t.protective.through}</option>
              </select>
            </div>
          </div>
          <button
            onClick={calculateProtective}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 flex items-center gap-2"
          >
            <Calculator className="w-4 h-4" />
            {t.protective.calculate}
          </button>
          {protectiveResult !== null && (
            <div className="mt-4 p-4 bg-white rounded border">
              <div className="text-lg font-semibold text-green-700">
                {t.protective.result}: {protectiveResult} {t.common.mm}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const DevicesTab = () => {
    const [K, setK] = useState('1600');
    const [T, setT] = useState('');
    const [C, setC] = useState('');
    const [H, setH] = useState('');
    const [d, setD] = useState('14');
    const [formula, setFormula] = useState('standard');
    const [deviceResult, setDeviceResult] = useState(null);

    const calculateDevice = () => {
      const result = calculateDeviceDistance(
        parseFloat(K), 
        parseFloat(T), 
        parseFloat(C || 0), 
        parseFloat(H || 0), 
        parseFloat(d || 14), 
        formula
      );
      setDeviceResult(result);
    };

    return (
      <div className="space-y-6">
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-purple-800 mb-4">{t.devices.title}</h3>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">公式選擇 / Formula Selection</label>
            <select
              value={formula}
              onChange={(e) => setFormula(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="standard">{t.devices.formulas.standard}</option>
              <option value="heightBased">{t.devices.formulas.heightBased}</option>
              <option value="wholeBody">{t.devices.formulas.wholeBody}</option>
              <option value="throughDetection">{t.devices.formulas.throughDetection}</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">{t.devices.approachSpeed}</label>
              <select
                value={K}
                onChange={(e) => setK(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="1600">1600 mm/s ({t.common.standard})</option>
                <option value="2000">2000 mm/s (≤500mm 距離)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">{t.devices.stopTime}</label>
              <input
                type="number"
                step="0.1"
                value={T}
                onChange={(e) => setT(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="0.5"
              />
            </div>
            
            {formula === 'standard' && (
              <div>
                <label className="block text-sm font-medium mb-2">{t.devices.intrusion}</label>
                <input
                  type="number"
                  value={C}
                  onChange={(e) => setC(e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="850"
                />
              </div>
            )}
            
            {formula === 'heightBased' && (
              <div>
                <label className="block text-sm font-medium mb-2">{t.devices.height}</label>
                <input
                  type="number"
                  value={H}
                  onChange={(e) => setH(e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="1000"
                />
              </div>
            )}
            
            {formula === 'throughDetection' && (
              <div>
                <label className="block text-sm font-medium mb-2">{t.devices.resolution}</label>
                <input
                  type="number"
                  value={d}
                  onChange={(e) => setD(e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="14"
                />
              </div>
            )}
          </div>
          
          <button
            onClick={calculateDevice}
            className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 flex items-center gap-2"
          >
            <Calculator className="w-4 h-4" />
            {t.devices.calculate}
          </button>
          
          {deviceResult !== null && (
            <div className="mt-4 p-4 bg-white rounded border">
              <div className="text-lg font-semibold text-purple-700">
                {t.common.safetyDistance}: {Math.round(deviceResult)} {t.common.mm}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const TwoHandTab = () => {
    const [T, setT] = useState('');
    const [twoHandResult, setTwoHandResult] = useState(null);

    const calculateTwoHand = () => {
      const result = calculateTwoHandDistance(parseFloat(T));
      setTwoHandResult(result);
    };

    return (
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-orange-800 mb-4">{t.twohand.title}</h3>
          <div className="mb-4 p-3 bg-orange-100 rounded">
            <div className="font-mono text-lg">{t.twohand.formula}</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">{t.twohand.stopTime}</label>
              <input
                type="number"
                step="0.1"
                value={T}
                onChange={(e) => setT(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="0.3"
              />
            </div>
          </div>
          
          <button
            onClick={calculateTwoHand}
            className="mt-4 bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 flex items-center gap-2"
          >
            <Hand className="w-4 h-4" />
            {t.twohand.calculate}
          </button>
          
          {twoHandResult !== null && (
            <div className="mt-4 p-4 bg-white rounded border">
              <div className="text-lg font-semibold text-orange-700">
                {t.common.safetyDistance}: {Math.round(twoHandResult)} {t.common.mm}
              </div>
            </div>
          )}
          
          <div className="mt-6">
            <h4 className="font-semibold mb-3">{t.twohand.requirements}:</h4>
            <ul className="space-y-2 text-sm">
              {t.twohand.reqList.map((req, index) => (
                <li key={index} className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                  {req}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'crushing':
        return <CrushingTab />;
      case 'protective':
        return <ProtectiveTab />;
      case 'devices':
        return <DevicesTab />;
      case 'twohand':
        return <TwoHandTab />;
      default:
        return <CrushingTab />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
              <Shield className="w-8 h-8 text-blue-600" />
              {t.title}
            </h1>
            <p className="text-gray-600 mt-2">{t.subtitle}</p>
          </div>
          <button
            onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center gap-2"
          >
            <Settings className="w-4 h-4" />
            {language === 'zh' ? 'English' : '中文'}
          </button>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
          {Object.entries(t.tabs).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === key
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        {renderTabContent()}
      </div>

      {/* Footer */}
      <div className="mt-6 text-center text-gray-500 text-sm">
        <p>依據標準: EN-ISO 13854:2019, EN-ISO 13855:2010, EN-ISO 13857:2008, EN-ISO 13851</p>
        <p>Based on standards: EN-ISO 13854:2019, EN-ISO 13855:2010, EN-ISO 13857:2008, EN-ISO 13851</p>
      </div>
    </div>
  );
};

export default SafetyDistanceCalculator;