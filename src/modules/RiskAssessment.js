import React from 'react';
import { useTranslation } from 'react-i18next';
import { AlertTriangle, CheckCircle, Info } from 'lucide-react';

const RiskAssessment = () => {
  const { t } = useTranslation();

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

  const idItems = t('riskAssessment.content.identification.items', { returnObjects: true });
  const analysisItems = t('riskAssessment.content.analysis.items', { returnObjects: true });
  const evalItems = t('riskAssessment.content.evaluation.items', { returnObjects: true });
  const reductionItems = t('riskAssessment.content.reduction.items', { returnObjects: true });

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">{t('riskAssessment.title')}</h1>
        <p className="text-xl text-gray-600">{t('riskAssessment.subtitle')}</p>
      </div>

      <InfoBox type="info" title={t('riskAssessment.overviewTitle')} icon={Info}>
        <p className="text-lg">{t('riskAssessment.overviewDesc')}</p>
      </InfoBox>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ProcessCard
          title={t('riskAssessment.content.identification.title')}
          description={t('riskAssessment.content.identification.description')}
          items={Array.isArray(idItems) ? idItems : []}
        />
        <ProcessCard
          title={t('riskAssessment.content.analysis.title')}
          description={t('riskAssessment.content.analysis.description')}
          items={Array.isArray(analysisItems) ? analysisItems : []}
        />
        <ProcessCard
          title={t('riskAssessment.content.evaluation.title')}
          description={t('riskAssessment.content.evaluation.description')}
          items={Array.isArray(evalItems) ? evalItems : []}
        />
        <ProcessCard
          title={t('riskAssessment.content.reduction.title')}
          description={t('riskAssessment.content.reduction.description')}
          items={Array.isArray(reductionItems) ? reductionItems : []}
        />
      </div>

      <InfoBox type="warning" title={t('riskAssessment.mustTitle')} icon={AlertTriangle}>
        <div className="space-y-3">
          <p><strong>{t('riskAssessment.mustLead')}</strong></p>
          <ul className="space-y-2">
            <li>• {t('riskAssessment.must1')}</li>
            <li>• {t('riskAssessment.must2')}</li>
            <li>• {t('riskAssessment.must3')}</li>
            <li>• {t('riskAssessment.must4')}</li>
          </ul>
        </div>
      </InfoBox>
    </div>
  );
};

export default RiskAssessment;
