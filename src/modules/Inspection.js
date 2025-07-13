import React from 'react';
import { Search, CheckCircle, AlertTriangle, Info, Clock, FileText } from 'lucide-react';

const Inspection = ({ currentLanguage }) => {
  const translations = {
    zh: {
      title: '檢查模組',
      subtitle: '機械安全檢查和驗證指南',
      sections: {
        preInspection: '檢查前準備',
        inspectionProcess: '檢查過程',
        documentation: '檢查文件',
        followUp: '後續行動'
      },
      content: {
        preInspection: {
          title: '檢查前準備',
          description: '進行機械安全檢查前的準備工作',
          items: [
            '收集相關技術文件和標準',
            '準備檢查清單和工具',
            '確認檢查範圍和目標',
            '安排檢查時間和人員',
            '通知相關部門和人員'
          ]
        },
        inspectionProcess: {
          title: '檢查過程',
          description: '系統性的機械安全檢查流程',
          items: [
            '目視檢查機械外觀和結構',
            '檢查安全防護裝置功能',
            '驗證安全控制系統',
            '測試緊急停止功能',
            '檢查警告標誌和標籤',
            '評估操作員工作環境'
          ]
        },
        documentation: {
          title: '檢查文件',
          description: '檢查過程中需要記錄的文件',
          items: [
            '檢查報告和記錄',
            '發現的問題和缺陷清單',
            '符合性評估結果',
            '建議的改進措施',
            '檢查人員簽名和日期',
            '相關照片和視頻記錄'
          ]
        },
        followUp: {
          title: '後續行動',
          description: '檢查完成後的跟進工作',
          items: [
            '問題整改和驗證',
            '更新技術檔案',
            '培訓操作人員',
            '定期複查計劃',
            '持續改進措施',
            '合規性監控'
          ]
        }
      }
    },
    en: {
      title: 'Inspection Module',
      subtitle: 'Machine Safety Inspection and Verification Guide',
      sections: {
        preInspection: 'Pre-Inspection',
        inspectionProcess: 'Inspection Process',
        documentation: 'Documentation',
        followUp: 'Follow-up Actions'
      },
      content: {
        preInspection: {
          title: 'Pre-Inspection Preparation',
          description: 'Preparation work before conducting machine safety inspection',
          items: [
            'Collect relevant technical documents and standards',
            'Prepare inspection checklist and tools',
            'Confirm inspection scope and objectives',
            'Schedule inspection time and personnel',
            'Notify relevant departments and personnel'
          ]
        },
        inspectionProcess: {
          title: 'Inspection Process',
          description: 'Systematic machine safety inspection process',
          items: [
            'Visual inspection of machine appearance and structure',
            'Check safety guard functionality',
            'Verify safety control systems',
            'Test emergency stop functions',
            'Check warning signs and labels',
            'Assess operator working environment'
          ]
        },
        documentation: {
          title: 'Inspection Documentation',
          description: 'Documents to be recorded during inspection',
          items: [
            'Inspection reports and records',
            'List of identified problems and defects',
            'Compliance assessment results',
            'Recommended improvement measures',
            'Inspector signature and date',
            'Relevant photos and video records'
          ]
        },
        followUp: {
          title: 'Follow-up Actions',
          description: 'Follow-up work after inspection completion',
          items: [
            'Problem rectification and verification',
            'Update technical file',
            'Train operators',
            'Regular review plan',
            'Continuous improvement measures',
            'Compliance monitoring'
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

  const InspectionCard = ({ title, description, items, icon: Icon, color = 'blue' }) => {
    const colorClasses = {
      blue: 'border-blue-500 text-blue-500',
      green: 'border-green-500 text-green-500',
      purple: 'border-purple-500 text-purple-500',
      orange: 'border-orange-500 text-orange-500'
    };

    return (
      <div className={`bg-white p-6 rounded-2xl shadow-lg border-l-4 hover:shadow-xl transition-shadow ${colorClasses[color]}`}>
        <div className="flex items-center mb-4">
          {Icon && <Icon className={`w-8 h-8 mr-3 ${colorClasses[color]}`} />}
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        </div>
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
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">{t.title}</h1>
        <p className="text-xl text-gray-600">{t.subtitle}</p>
      </div>

      <InfoBox type="info" title="🔍 檢查重要性" icon={Info}>
        <p className="text-lg">
          {currentLanguage === 'zh' 
            ? '定期檢查是確保機械安全持續符合性的重要手段。'
            : 'Regular inspection is an important means to ensure continuous compliance of machine safety.'
          }
        </p>
      </InfoBox>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <InspectionCard 
          title={t.content.preInspection.title}
          description={t.content.preInspection.description}
          items={t.content.preInspection.items}
          icon={Clock}
          color="blue"
        />
        <InspectionCard 
          title={t.content.inspectionProcess.title}
          description={t.content.inspectionProcess.description}
          items={t.content.inspectionProcess.items}
          icon={Search}
          color="green"
        />
        <InspectionCard 
          title={t.content.documentation.title}
          description={t.content.documentation.description}
          items={t.content.documentation.items}
          icon={FileText}
          color="purple"
        />
        <InspectionCard 
          title={t.content.followUp.title}
          description={t.content.followUp.description}
          items={t.content.followUp.items}
          icon={CheckCircle}
          color="orange"
        />
      </div>

      <InfoBox type="warning" title="⚠️ 檢查要求" icon={AlertTriangle}>
        <div className="space-y-3">
          <p><strong>{currentLanguage === 'zh' ? '檢查必須：' : 'Inspection must:'}</strong></p>
          <ul className="space-y-2">
            <li>• {currentLanguage === 'zh' ? '由合格人員進行' : 'Be conducted by qualified personnel'}</li>
            <li>• {currentLanguage === 'zh' ? '按照標準程序執行' : 'Follow standard procedures'}</li>
            <li>• {currentLanguage === 'zh' ? '完整記錄檢查結果' : 'Completely record inspection results'}</li>
            <li>• {currentLanguage === 'zh' ? '及時處理發現的問題' : 'Timely address identified issues'}</li>
          </ul>
        </div>
      </InfoBox>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl border">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          {currentLanguage === 'zh' ? '📋 檢查頻率建議' : '📋 Inspection Frequency Recommendations'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Clock className="w-8 h-8 text-red-600" />
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">{currentLanguage === 'zh' ? '日常檢查' : 'Daily Inspection'}</h4>
            <p className="text-gray-600 text-sm">{currentLanguage === 'zh' ? '操作前基本檢查' : 'Basic pre-operation check'}</p>
          </div>
          <div className="text-center">
            <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Search className="w-8 h-8 text-yellow-600" />
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">{currentLanguage === 'zh' ? '定期檢查' : 'Regular Inspection'}</h4>
            <p className="text-gray-600 text-sm">{currentLanguage === 'zh' ? '每月或每季度' : 'Monthly or quarterly'}</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">{currentLanguage === 'zh' ? '年度檢查' : 'Annual Inspection'}</h4>
            <p className="text-gray-600 text-sm">{currentLanguage === 'zh' ? '全面安全評估' : 'Comprehensive safety assessment'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inspection; 