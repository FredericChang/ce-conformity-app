import React from 'react';
import { AlertTriangle, CheckCircle, Info, FileText } from 'lucide-react';

const RiskAssessment = ({ currentLanguage }) => {
  const translations = {
    zh: {
      title: '風險評估模組',
      subtitle: '機械安全風險評估完整指南',
      sections: {
        identification: '風險識別',
        analysis: '風險分析',
        evaluation: '風險評估',
        reduction: '風險降低'
      },
      content: {
        identification: {
          title: '1. 風險識別',
          description: '識別機器生命週期各階段的危險源',
          items: [
            '設計階段危險源識別',
            '製造階段危險源識別',
            '使用階段危險源識別',
            '維護階段危險源識別',
            '報廢階段危險源識別'
          ]
        },
        analysis: {
          title: '2. 風險分析',
          description: '分析每個危險源可能造成的傷害嚴重程度和發生概率',
          items: [
            '傷害嚴重程度評估 (S1-S4)',
            '傷害發生概率評估 (P1-P5)',
            '暴露於危險的頻率評估 (F1-F5)',
            '避免或限制傷害的可能性評估 (A1-A5)'
          ]
        },
        evaluation: {
          title: '3. 風險評估',
          description: '根據風險分析結果評估風險等級',
          items: [
            '風險等級計算: R = S × P × F × A',
            '風險等級分類: 低、中、高、極高',
            '風險可接受性判斷',
            '是否需要進一步風險降低措施'
          ]
        },
        reduction: {
          title: '4. 風險降低',
          description: '實施風險降低措施並驗證效果',
          items: [
            '本質安全設計措施',
            '安全防護措施',
            '使用信息措施',
            '風險降低措施驗證'
          ]
        }
      }
    },
    en: {
      title: 'Risk Assessment Module',
      subtitle: 'Complete Guide for Machine Safety Risk Assessment',
      sections: {
        identification: 'Risk Identification',
        analysis: 'Risk Analysis',
        evaluation: 'Risk Evaluation',
        reduction: 'Risk Reduction'
      },
      content: {
        identification: {
          title: '1. Risk Identification',
          description: 'Identify hazards in all phases of machine lifecycle',
          items: [
            'Design phase hazard identification',
            'Manufacturing phase hazard identification',
            'Use phase hazard identification',
            'Maintenance phase hazard identification',
            'Disposal phase hazard identification'
          ]
        },
        analysis: {
          title: '2. Risk Analysis',
          description: 'Analyze severity and probability of harm for each hazard',
          items: [
            'Severity of harm assessment (S1-S4)',
            'Probability of occurrence assessment (P1-P5)',
            'Frequency of exposure assessment (F1-F5)',
            'Possibility of avoiding harm assessment (A1-A5)'
          ]
        },
        evaluation: {
          title: '3. Risk Evaluation',
          description: 'Evaluate risk level based on risk analysis results',
          items: [
            'Risk level calculation: R = S × P × F × A',
            'Risk level classification: Low, Medium, High, Very High',
            'Risk acceptability judgment',
            'Need for further risk reduction measures'
          ]
        },
        reduction: {
          title: '4. Risk Reduction',
          description: 'Implement risk reduction measures and verify effectiveness',
          items: [
            'Inherently safe design measures',
            'Safeguarding measures',
            'Information for use measures',
            'Verification of risk reduction measures'
          ]
        }
      }
    }
  };

  const t = translations[currentLanguage];

  const InfoBox = ({ type, title, children, icon: Icon }) => {
    const typeStyles = {
      warning: 'bg-gradient-to-r from-red-400 to-red-500',
      info: 'bg-gradient-to-r from-blue-400 to-blue-500',
      success: 'bg-gradient-to-r from-green-400 to-green-500'
    };

    return (
      <div className={`${typeStyles[type]} text-white p-6 rounded-2xl my-6 shadow-lg`}>
        <div className="flex items-center mb-4">
          {Icon && <Icon className="w-6 h-6 mr-3" />}
          <h4 className="font-bold text-lg">{title}</h4>
        </div>
        <div className="space-y-3">{children}</div>
      </div>
    );
  };

  const ProcessCard = ({ title, description, items }) => (
    <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">{t.title}</h1>
        <p className="text-xl text-gray-600">{t.subtitle}</p>
      </div>

      <InfoBox type="info" title="📋 風險評估流程概述" icon={Info}>
        <p className="text-lg">
          {currentLanguage === 'zh' 
            ? '風險評估是機械安全的核心過程，必須按照EN ISO 12100標準進行。'
            : 'Risk assessment is the core process of machine safety and must be conducted according to EN ISO 12100 standard.'
          }
        </p>
      </InfoBox>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ProcessCard 
          title={t.content.identification.title}
          description={t.content.identification.description}
          items={t.content.identification.items}
        />
        <ProcessCard 
          title={t.content.analysis.title}
          description={t.content.analysis.description}
          items={t.content.analysis.items}
        />
        <ProcessCard 
          title={t.content.evaluation.title}
          description={t.content.evaluation.description}
          items={t.content.evaluation.items}
        />
        <ProcessCard 
          title={t.content.reduction.title}
          description={t.content.reduction.description}
          items={t.content.reduction.items}
        />
      </div>

      <InfoBox type="warning" title="⚠️ 重要提醒" icon={AlertTriangle}>
        <div className="space-y-3">
          <p><strong>{currentLanguage === 'zh' ? '風險評估必須：' : 'Risk assessment must:'}</strong></p>
          <ul className="space-y-2">
            <li>• {currentLanguage === 'zh' ? '由合格的專業人員進行' : 'Be conducted by qualified professionals'}</li>
            <li>• {currentLanguage === 'zh' ? '考慮機器的完整生命週期' : 'Consider the complete machine lifecycle'}</li>
            <li>• {currentLanguage === 'zh' ? '記錄所有評估過程和結果' : 'Document all assessment processes and results'}</li>
            <li>• {currentLanguage === 'zh' ? '定期更新和審查' : 'Be regularly updated and reviewed'}</li>
          </ul>
        </div>
      </InfoBox>
    </div>
  );
};

export default RiskAssessment; 