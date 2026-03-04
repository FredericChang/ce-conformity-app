import React from 'react';
import { useTranslation } from 'react-i18next';
import { FileText, FolderOpen, Clock, AlertTriangle, CheckCircle, Info } from 'lucide-react';

const TechnicalFile = () => {
  const { t } = useTranslation();

  const reqItems = t('technicalFile.content.requirements.items', { returnObjects: true });
  const structItems = t('technicalFile.content.structure.items', { returnObjects: true });
  const maintItems = t('technicalFile.content.maintenance.items', { returnObjects: true });
  const retItems = t('technicalFile.content.retention.items', { returnObjects: true });

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
        {(Array.isArray(items) ? items : []).map((item, index) => (
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
        <h1 className="text-4xl font-bold text-gray-800 mb-2">{t('technicalFile.title')}</h1>
        <p className="text-xl text-gray-600">{t('technicalFile.subtitle')}</p>
      </div>

      <InfoBox type="info" title={t('technicalFile.infoTitle')} icon={Info}>
        <p className="text-lg">{t('technicalFile.infoDesc')}</p>
      </InfoBox>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <FileCard
          title={t('technicalFile.content.requirements.title')}
          description={t('technicalFile.content.requirements.description')}
          items={reqItems}
          icon={FileText}
        />
        <FileCard
          title={t('technicalFile.content.structure.title')}
          description={t('technicalFile.content.structure.description')}
          items={structItems}
          icon={FolderOpen}
        />
        <FileCard
          title={t('technicalFile.content.maintenance.title')}
          description={t('technicalFile.content.maintenance.description')}
          items={maintItems}
          icon={CheckCircle}
        />
        <FileCard
          title={t('technicalFile.content.retention.title')}
          description={t('technicalFile.content.retention.description')}
          items={retItems}
          icon={Clock}
        />
      </div>

      <InfoBox type="warning" title={t('technicalFile.legalTitle')} icon={AlertTriangle}>
        <div className="space-y-3">
          <p><strong>{t('technicalFile.legalLead')}</strong></p>
          <ul className="space-y-2">
            <li>• {t('technicalFile.legal1')}</li>
            <li>• {t('technicalFile.legal2')}</li>
            <li>• {t('technicalFile.legal3')}</li>
            <li>• {t('technicalFile.legal4')}</li>
          </ul>
        </div>
      </InfoBox>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl border">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          {t('technicalFile.checklistTitle')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">{t('technicalFile.requiredDocs')}</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span>{t('technicalFile.machineDesc')}</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span>{t('technicalFile.designDrawings')}</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span>{t('technicalFile.riskAssessment')}</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span>{t('technicalFile.testReports')}</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">{t('technicalFile.mgmtReqs')}</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span>{t('technicalFile.versionControl')}</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span>{t('technicalFile.regularUpdates')}</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span>{t('technicalFile.secureStorage')}</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span>{t('technicalFile.accessControl')}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalFile;
