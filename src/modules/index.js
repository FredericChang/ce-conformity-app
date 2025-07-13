// 模組索引文件 - 統一導出所有模組組件
export { default as RiskAssessment } from './RiskAssessment';
export { default as TechnicalFile } from './TechnicalFile';
export { default as Inspection } from './Inspection';
export { default as MachineSafetyTraining } from './1-1';
export { default as MachineryModificationGuide } from './1-2';
export { default as MachinerySafetyManual } from './2-2';
export { default as TechnicalFileGuide } from './2-3';
export { default as MachinerySafetyDocs } from './2-4';
export { default as MachinerySafetyInfo } from './MachinerySafetyInfo';
export { default as RiskAssessmentProcess } from './3-1';
export { default as RiskReductionPrinciples } from './RiskReductionPrinciples';
export { default as MachineSafetyCourse } from './4-2';
export { default as SafetyDistanceCalculator } from './4-3';
export { default as MachineGuards } from './MachineGuards';
export { default as FunctionalSafety } from './FunctionalSafety';
export { default as MachineAccessSafety } from './4-6';
export { default as MachineSafetyModule } from './4-7';

// 模組配置 - 定義模組的元數據
export const moduleConfig = {
  machineSafetyTraining: {
    id: 'machineSafetyTraining',
    path: '/machine-safety-training',
    icon: 'GraduationCap',
    zh: {
      title: '機械安全專家培訓',
      description: 'CE標記立法與符合性評估完整指南',
      shortTitle: '安全培訓'
    },
    en: {
      title: 'Machine Safety Specialist Training',
      description: 'Complete Guide for CE Marking Legislation and Conformity Assessment',
      shortTitle: 'Safety Training'
    }
  },
  machineryModification: {
    id: 'machineryModification',
    path: '/machinery-modification',
    icon: 'Wrench',
    zh: {
      title: '現有機械改造指南',
      description: '重大修改判斷與合規要求完整指南',
      shortTitle: '機械改造'
    },
    en: {
      title: 'Existing Machinery Modification Guide',
      description: 'Complete Guide for Substantial Modification Assessment and Compliance Requirements',
      shortTitle: 'Modification'
    }
  },
  riskAssessment: {
    id: 'riskAssessment',
    path: '/risk-assessment',
    icon: 'Shield',
    zh: {
      title: '風險評估',
      description: '機械安全風險評估完整指南',
      shortTitle: '風險評估'
    },
    en: {
      title: 'Risk Assessment',
      description: 'Complete Guide for Machine Safety Risk Assessment',
      shortTitle: 'Risk Assessment'
    }
  },
  technicalFile: {
    id: 'technicalFile',
    path: '/technical-file',
    icon: 'FileText',
    zh: {
      title: '技術檔案',
      description: 'CE符合性技術檔案完整指南',
      shortTitle: '技術檔案'
    },
    en: {
      title: 'Technical File',
      description: 'Complete Guide for CE Conformity Technical File',
      shortTitle: 'Technical File'
    }
  },
  inspection: {
    id: 'inspection',
    path: '/inspection',
    icon: 'Search',
    zh: {
      title: '檢查模組',
      description: '機械安全檢查和驗證指南',
      shortTitle: '檢查'
    },
    en: {
      title: 'Inspection Module',
      description: 'Machine Safety Inspection and Verification Guide',
      shortTitle: 'Inspection'
    }
  },
  machinerySafetyManual: {
    id: 'machinerySafetyManual',
    path: '/machinery-safety-manual',
    icon: 'FileText',
    zh: {
      title: '機械安全使用說明書',
      description: '使用說明書編制完整指南',
      shortTitle: '使用說明書'
    },
    en: {
      title: 'Machinery Safety Manual',
      description: 'Complete Guide for Instruction Manual Preparation',
      shortTitle: 'Safety Manual'
    }
  },
  technicalFileGuide: {
    id: 'technicalFileGuide',
    path: '/technical-file-guide',
    icon: 'FileText',
    zh: {
      title: '技術檔案指南',
      description: 'CE流程和文件 - 模組3：技術檔案完整指南',
      shortTitle: '技術檔案指南'
    },
    en: {
      title: 'Technical File Guide',
      description: 'CE Process and Documentation - Module 3: Complete Technical File Guide',
      shortTitle: 'Technical File Guide'
    }
  },
  machinerySafetyDocs: {
    id: 'machinerySafetyDocs',
    path: '/machinery-safety-docs',
    icon: 'FileText',
    zh: {
      title: '符合性聲明',
      description: 'CE流程和文件 - 模組4：符合性聲明完整指南',
      shortTitle: '符合性聲明'
    },
    en: {
      title: 'Declaration of Conformity',
      description: 'CE Process and Documentation - Module 4: Complete Declaration of Conformity Guide',
      shortTitle: 'Declaration'
    }
  },
  machinerySafetyInfo: {
    id: 'machinerySafetyInfo',
    path: '/machinery-safety-info',
    icon: 'Info',
    zh: {
      title: '使用資訊',
      description: 'CE流程和文件 - 模組5：機械使用資訊完整指南',
      shortTitle: '使用資訊'
    },
    en: {
      title: 'Information for Use',
      description: 'CE Process and Documentation - Module 5: Complete Information for Use Guide',
      shortTitle: 'Information'
    }
  },
  riskAssessmentProcess: {
    id: 'riskAssessmentProcess',
    path: '/risk-assessment-process',
    icon: 'Shield',
    zh: {
      title: '風險評估流程',
      description: 'EN ISO 12100 風險評估流程完整指南',
      shortTitle: '風險流程'
    },
    en: {
      title: 'Risk Assessment Process',
      description: 'Complete Guide for EN ISO 12100 Risk Assessment Process',
      shortTitle: 'Risk Process'
    }
  },
  riskReductionPrinciples: {
    id: 'riskReductionPrinciples',
    path: '/risk-reduction-principles',
    icon: 'Shield',
    zh: {
      title: '風險降低原則',
      description: '機械指令三步法風險降低原則和標準分類完整指南',
      shortTitle: '風險降低'
    },
    en: {
      title: 'Risk Reduction Principles',
      description: 'Complete Guide for Machinery Directive Three-Step Method and Standards Classification',
      shortTitle: 'Risk Reduction'
    }
  },
  machineSafetyCourse: {
    id: 'machineSafetyCourse',
    path: '/machine-safety-course',
    icon: 'Zap',
    zh: {
      title: '機械安全課程',
      description: '模組2：電氣、液壓和氣動安裝 - 風險降低和標準',
      shortTitle: '安全課程'
    },
    en: {
      title: 'Machine Safety Course',
      description: 'Module 2: Electrical, hydraulic and pneumatic installation - Risk reduction and standards',
      shortTitle: 'Safety Course'
    }
  },
  safetyDistanceCalculator: {
    id: 'safetyDistanceCalculator',
    path: '/safety-distance-calculator',
    icon: 'Calculator',
    zh: {
      title: '安全距離計算機',
      description: 'EN-ISO 13854, 13855, 13857 標準安全距離計算工具',
      shortTitle: '距離計算'
    },
    en: {
      title: 'Safety Distance Calculator',
      description: 'EN-ISO 13854, 13855, 13857 Standards Safety Distance Calculation Tool',
      shortTitle: 'Distance Calc'
    }
  },
  machineGuards: {
    id: 'machineGuards',
    path: '/machine-guards',
    icon: 'Shield',
    zh: {
      title: '機器防護裝置',
      description: '固定式和聯鎖防護裝置 - EN-ISO 14120:2015 & EN-ISO 14119:2015',
      shortTitle: '防護裝置'
    },
    en: {
      title: 'Machine Guards',
      description: 'Fixed and Interlocking Guards - EN-ISO 14120:2015 & EN-ISO 14119:2015',
      shortTitle: 'Guards'
    }
  },
  functionalSafety: {
    id: 'functionalSafety',
    path: '/functional-safety',
    icon: 'Zap',
    zh: {
      title: '功能安全 SIL/PL',
      description: '功能安全标准 EN-ISO 13849-1 和 EN-IEC 62061 完整指南',
      shortTitle: '功能安全'
    },
    en: {
      title: 'Functional Safety SIL/PL',
      description: 'Complete Guide for Functional Safety Standards EN-ISO 13849-1 and EN-IEC 62061',
      shortTitle: 'Functional Safety'
    }
  },
  machineAccessSafety: {
    id: 'machineAccessSafety',
    path: '/machine-access-safety',
    icon: 'Shield',
    zh: {
      title: '永久性通道設施',
      description: 'EN-ISO 14122 永久性通道設施安全要求完整指南',
      shortTitle: '通道設施'
    },
    en: {
      title: 'Permanent Means of Access',
      description: 'Complete Guide for EN-ISO 14122 Permanent Means of Access Safety Requirements',
      shortTitle: 'Access Safety'
    }
  },
  machineSafetyModule: {
    id: 'machineSafetyModule',
    path: '/machine-safety-module',
    icon: 'Power',
    zh: {
      title: '啟動、停止和復位',
      description: '模組7：啟動、停止和復位 - 基於EN-IEC 60204-1:2018和EN-ISO 13850:2016',
      shortTitle: '啟動停止'
    },
    en: {
      title: 'Start, Stop and Reset',
      description: 'Module 7: Start, stop and reset - Based on EN-IEC 60204-1:2018 and EN-ISO 13850:2016',
      shortTitle: 'Start/Stop'
    }
  }
};

// 獲取所有模組配置
export const getAllModules = () => Object.values(moduleConfig);

// 根據語言獲取模組列表
export const getModulesByLanguage = (language) => {
  return getAllModules().map(module => ({
    ...module,
    title: module[language].title,
    description: module[language].description,
    shortTitle: module[language].shortTitle
  }));
}; 