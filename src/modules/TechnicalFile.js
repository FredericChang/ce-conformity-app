import React from 'react';
import { FileText, FolderOpen, Clock, AlertTriangle, CheckCircle, Info } from 'lucide-react';

const TechnicalFile = ({ currentLanguage }) => {
  const translations = {
    zh: {
      title: '技術檔案管理',
      subtitle: 'CE符合性技術檔案完整指南',
      sections: {
        requirements: '檔案要求',
        structure: '檔案結構',
        maintenance: '檔案維護',
        retention: '保存期限'
      },
      content: {
        requirements: {
          title: '技術檔案要求',
          description: '根據機械指令2006/42/EC附件VII的要求',
          items: [
            '機器的一般描述',
            '設計和製造圖紙',
            '適用標準清單',
            '風險評估文件',
            '技術報告和計算',
            '測試報告',
            '使用說明書',
            'EC符合性聲明'
          ]
        },
        structure: {
          title: '檔案結構建議',
          description: '建議的技術檔案組織結構',
          items: [
            '1. 項目概述和基本信息',
            '2. 設計文件和圖紙',
            '3. 風險評估文件',
            '4. 適用標準和符合性證明',
            '5. 測試和驗證報告',
            '6. 使用說明書和標籤',
            '7. 符合性聲明和CE標記',
            '8. 變更記錄和版本控制'
          ]
        },
        maintenance: {
          title: '檔案維護要求',
          description: '技術檔案的持續維護和更新',
          items: [
            '定期審查和更新',
            '變更管理和版本控制',
            '文件完整性檢查',
            '備份和存檔策略',
            '訪問權限管理',
            '審計準備和配合'
          ]
        },
        retention: {
          title: '保存期限要求',
          description: '技術檔案的法定保存期限',
          items: [
            '自最後一台機器製造完成後保存10年',
            '在歐盟境內保存',
            '可應要求提供給主管當局',
            '電子檔案和紙質檔案均可',
            '確保檔案完整性和可讀性'
          ]
        }
      }
    },
    en: {
      title: 'Technical File Management',
      subtitle: 'Complete Guide for CE Conformity Technical File',
      sections: {
        requirements: 'File Requirements',
        structure: 'File Structure',
        maintenance: 'File Maintenance',
        retention: 'Retention Period'
      },
      content: {
        requirements: {
          title: 'Technical File Requirements',
          description: 'According to Machine Directive 2006/42/EC Annex VII',
          items: [
            'General description of the machine',
            'Design and manufacturing drawings',
            'List of applicable standards',
            'Risk assessment documentation',
            'Technical reports and calculations',
            'Test reports',
            'Instructions for use',
            'EC declaration of conformity'
          ]
        },
        structure: {
          title: 'Recommended File Structure',
          description: 'Suggested organization of technical file',
          items: [
            '1. Project overview and basic information',
            '2. Design documents and drawings',
            '3. Risk assessment documentation',
            '4. Applicable standards and conformity evidence',
            '5. Test and verification reports',
            '6. Instructions for use and labels',
            '7. Declaration of conformity and CE marking',
            '8. Change records and version control'
          ]
        },
        maintenance: {
          title: 'File Maintenance Requirements',
          description: 'Ongoing maintenance and updates of technical file',
          items: [
            'Regular review and updates',
            'Change management and version control',
            'Document integrity checks',
            'Backup and archiving strategy',
            'Access permission management',
            'Audit preparation and cooperation'
          ]
        },
        retention: {
          title: 'Retention Period Requirements',
          description: 'Legal retention period for technical file',
          items: [
            'Keep for 10 years after last machine manufactured',
            'Keep within EU territory',
            'Available to competent authorities on request',
            'Electronic or paper format acceptable',
            'Ensure file integrity and readability'
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

  const FileCard = ({ title, description, items, icon: Icon }) => (
    <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-purple-500 hover:shadow-xl transition-shadow">
      <div className="flex items-center mb-4">
        {Icon && <Icon className="w-8 h-8 text-purple-500 mr-3" />}
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

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">{t.title}</h1>
        <p className="text-xl text-gray-600">{t.subtitle}</p>
      </div>

      <InfoBox type="info" title="📁 技術檔案重要性" icon={Info}>
        <p className="text-lg">
          {currentLanguage === 'zh' 
            ? '技術檔案是CE符合性的核心證據，必須完整、準確且可追溯。'
            : 'Technical file is the core evidence of CE conformity and must be complete, accurate and traceable.'
          }
        </p>
      </InfoBox>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <FileCard 
          title={t.content.requirements.title}
          description={t.content.requirements.description}
          items={t.content.requirements.items}
          icon={FileText}
        />
        <FileCard 
          title={t.content.structure.title}
          description={t.content.structure.description}
          items={t.content.structure.items}
          icon={FolderOpen}
        />
        <FileCard 
          title={t.content.maintenance.title}
          description={t.content.maintenance.description}
          items={t.content.maintenance.items}
          icon={CheckCircle}
        />
        <FileCard 
          title={t.content.retention.title}
          description={t.content.retention.description}
          items={t.content.retention.items}
          icon={Clock}
        />
      </div>

      <InfoBox type="warning" title="⚠️ 法律要求" icon={AlertTriangle}>
        <div className="space-y-3">
          <p><strong>{currentLanguage === 'zh' ? '技術檔案必須：' : 'Technical file must:'}</strong></p>
          <ul className="space-y-2">
            <li>• {currentLanguage === 'zh' ? '包含所有必要的技術信息' : 'Contain all necessary technical information'}</li>
            <li>• {currentLanguage === 'zh' ? '證明符合基本健康和安全要求' : 'Demonstrate compliance with essential health and safety requirements'}</li>
            <li>• {currentLanguage === 'zh' ? '在歐盟境內保存10年' : 'Be kept within EU territory for 10 years'}</li>
            <li>• {currentLanguage === 'zh' ? '可應要求提供給主管當局' : 'Be available to competent authorities on request'}</li>
          </ul>
        </div>
      </InfoBox>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl border">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          {currentLanguage === 'zh' ? '📋 技術檔案檢查清單' : '📋 Technical File Checklist'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">{currentLanguage === 'zh' ? '必需文件' : 'Required Documents'}</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span>{currentLanguage === 'zh' ? '機器描述' : 'Machine description'}</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span>{currentLanguage === 'zh' ? '設計圖紙' : 'Design drawings'}</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span>{currentLanguage === 'zh' ? '風險評估' : 'Risk assessment'}</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span>{currentLanguage === 'zh' ? '測試報告' : 'Test reports'}</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">{currentLanguage === 'zh' ? '管理要求' : 'Management Requirements'}</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span>{currentLanguage === 'zh' ? '版本控制' : 'Version control'}</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span>{currentLanguage === 'zh' ? '定期更新' : 'Regular updates'}</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span>{currentLanguage === 'zh' ? '安全存儲' : 'Secure storage'}</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span>{currentLanguage === 'zh' ? '訪問控制' : 'Access control'}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalFile; 