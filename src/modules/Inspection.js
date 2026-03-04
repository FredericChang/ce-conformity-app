import React from 'react';
import { useTranslation } from 'react-i18next';
import { Search, CheckCircle, AlertTriangle, Info, Clock, FileText } from 'lucide-react';

const Inspection = () => {
  const { t } = useTranslation();

  const preItems = t('inspection.content.preInspection.items', { returnObjects: true });
  const processItems = t('inspection.content.inspectionProcess.items', { returnObjects: true });
  const docItems = t('inspection.content.documentation.items', { returnObjects: true });
  const followItems = t('inspection.content.followUp.items', { returnObjects: true });

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
          {(Array.isArray(items) ? items : []).map((item, index) => (
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
        <h1 className="text-4xl font-bold text-gray-800 mb-2">{t('inspection.title')}</h1>
        <p className="text-xl text-gray-600">{t('inspection.subtitle')}</p>
      </div>

      <InfoBox type="info" title={t('inspection.infoTitle')} icon={Info}>
        <p className="text-lg">{t('inspection.infoDesc')}</p>
      </InfoBox>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <InspectionCard
          title={t('inspection.content.preInspection.title')}
          description={t('inspection.content.preInspection.description')}
          items={preItems}
          icon={Clock}
          color="blue"
        />
        <InspectionCard
          title={t('inspection.content.inspectionProcess.title')}
          description={t('inspection.content.inspectionProcess.description')}
          items={processItems}
          icon={Search}
          color="green"
        />
        <InspectionCard
          title={t('inspection.content.documentation.title')}
          description={t('inspection.content.documentation.description')}
          items={docItems}
          icon={FileText}
          color="purple"
        />
        <InspectionCard
          title={t('inspection.content.followUp.title')}
          description={t('inspection.content.followUp.description')}
          items={followItems}
          icon={CheckCircle}
          color="orange"
        />
      </div>

      <InfoBox type="warning" title={t('inspection.mustTitle')} icon={AlertTriangle}>
        <div className="space-y-3">
          <p><strong>{t('inspection.mustLead')}</strong></p>
          <ul className="space-y-2">
            <li>• {t('inspection.must1')}</li>
            <li>• {t('inspection.must2')}</li>
            <li>• {t('inspection.must3')}</li>
            <li>• {t('inspection.must4')}</li>
          </ul>
        </div>
      </InfoBox>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl border">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          {t('inspection.freqTitle')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Clock className="w-8 h-8 text-red-600" />
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">{t('inspection.dailyTitle')}</h4>
            <p className="text-gray-600 text-sm">{t('inspection.dailyDesc')}</p>
          </div>
          <div className="text-center">
            <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Search className="w-8 h-8 text-yellow-600" />
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">{t('inspection.regularTitle')}</h4>
            <p className="text-gray-600 text-sm">{t('inspection.regularDesc')}</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">{t('inspection.annualTitle')}</h4>
            <p className="text-gray-600 text-sm">{t('inspection.annualDesc')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inspection;
