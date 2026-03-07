import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronRight, FileText, CheckCircle, AlertTriangle, Info, Globe, Menu, X, Shield, GraduationCap, Wrench, Zap, Calculator } from 'lucide-react';
import { RiskAssessment, TechnicalFile, Inspection, MachineSafetyTraining, MachineryModificationGuide, MachinerySafetyManual, TechnicalFileGuide, MachinerySafetyDocs, MachinerySafetyInfo, RiskAssessmentProcess, RiskReductionPrinciples, MachineSafetyCourse, SafetyDistanceCalculator, MachineGuards, FunctionalSafety, MachineAccessSafety, MachineSafetyModule, WorkEquipmentDirective, getModulesByLanguage } from './modules';

const CEConformityApp = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language || 'zh';
  const [activeSection, setActiveSection] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

  const ProcessStep = ({ title, description }) => (
    <div className="bg-gradient-to-br from-cyan-50 to-pink-50 p-6 rounded-2xl text-center shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300">
      <h4 className="text-gray-800 font-bold text-lg mb-4">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );

  const renderOverviewContent = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-blue-500 pb-4">
        {t('overview.heading')}
      </h2>
      <InfoBox type="warning" title={t('overview.mistakesTitle')} icon={AlertTriangle}>
        <ul className="space-y-3">
          <li>
            <strong>{t('overview.separateRoute')}</strong> "{t('overview.separateRouteQuote')}"
            <ul className="ml-6 mt-2 space-y-1">
              <li>• {t('overview.separateRoute1')}</li>
              <li>• {t('overview.separateRoute2')}</li>
            </ul>
          </li>
          <li>
            <strong>{t('overview.copyPaste')}</strong> "{t('overview.copyPasteQuote')}"
            <ul className="ml-6 mt-2 space-y-1">
              <li>• {t('overview.copyPaste1')}</li>
              <li>• {t('overview.copyPaste2')}</li>
            </ul>
          </li>
        </ul>
      </InfoBox>
      <InfoBox type="success" title={t('overview.bestPracticeTitle')} icon={CheckCircle}>
        <p className="text-lg font-semibold">{t('overview.bestPracticeLead')}</p>
        <p>{t('overview.bestPracticeDesc')}</p>
      </InfoBox>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
        <ProcessStep title={t('overview.stepA')} description={t('overview.stepADesc')} />
        <ProcessStep title={t('overview.stepB')} description={t('overview.stepBDesc')} />
        <ProcessStep title={t('overview.stepC')} description={t('overview.stepCDesc')} />
        <ProcessStep title={t('overview.stepD')} description={t('overview.stepDDesc')} />
      </div>
    </div>
  );

  const annexIVList = t('annexIV', { returnObjects: true });
  const renderResearchContent = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-blue-500 pb-4">
        {t('research.heading')}
      </h2>
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-700">{t('research.annexIVTitle')}</h3>
        <InfoBox type="info" title={t('research.clarificationTitle')} icon={Info}>
          <div className="space-y-3">
            <p><strong>{t('research.clarificationQ')}</strong></p>
            <div className="bg-white/20 p-4 rounded-lg">
              <p className="font-semibold text-blue-100">{t('research.clarificationA')}</p>
              <ul className="mt-2 space-y-1 text-blue-100">
                <li>• <strong>{t('research.clarificationL1')}</strong></li>
                <li>• {t('research.clarificationL2')}</li>
                <li>• {t('research.clarificationL3')}</li>
              </ul>
            </div>
          </div>
        </InfoBox>
        <InfoBox type="warning" title={t('research.annexIVWarning')} icon={AlertTriangle}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.isArray(annexIVList) && annexIVList.map((category, index) => (
              <div key={index} className="bg-white/20 p-4 rounded-lg">
                <h5 className="font-bold text-lg mb-3 text-white">{category.category}</h5>
                <ul className="space-y-1">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-white/90">• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </InfoBox>
      </div>
    </div>
  );

  const renderStandardsContent = () => {
    const typeAExamples = t('standards.typeA.examples', { returnObjects: true });
    const typeBExamples = t('standards.typeB.examples', { returnObjects: true });
    const typeCExamples = t('standards.typeC.examples', { returnObjects: true });
    return (
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-blue-500 pb-4">
          {t('standards.heading')}
        </h2>
        <div className="space-y-6">
          <InfoBox type="info" title={t('standards.introTitle')} icon={Info}>
            <p>{t('standards.introDesc')}</p>
          </InfoBox>
          <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-2xl border-l-4 border-green-500">
            <h3 className="text-xl font-bold text-green-800 mb-3">{t('standards.typeA.title')}</h3>
            <p className="text-green-700 mb-4">{t('standards.typeA.description')}</p>
            <div className="space-y-2">
              <h4 className="font-semibold text-green-800">{t('standards.examples')}</h4>
              <ul className="space-y-1">
                {Array.isArray(typeAExamples) && typeAExamples.map((example, index) => (
                  <li key={index} className="text-green-700">• {example}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-2xl border-l-4 border-blue-500">
            <h3 className="text-xl font-bold text-blue-800 mb-3">{t('standards.typeB.title')}</h3>
            <p className="text-blue-700 mb-4">{t('standards.typeB.description')}</p>
            <div className="space-y-2 mt-4">
              <h4 className="font-semibold text-blue-800">{t('standards.examples')}</h4>
              <ul className="space-y-1">
                {Array.isArray(typeBExamples) && typeBExamples.map((example, index) => (
                  <li key={index} className="text-blue-700">• {example}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-gradient-to-r from-red-50 to-orange-100 p-6 rounded-2xl border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-800 mb-3">{t('standards.typeC.title')}</h3>
            <p className="text-red-700 mb-4">{t('standards.typeC.description')}</p>
            <div className="bg-yellow-100 border border-yellow-300 p-4 rounded-lg mb-4">
              <p className="text-yellow-800 font-semibold">⚠️ {t('standards.criticalImportance')}</p>
              <p className="text-yellow-700 mt-2">{t('standards.typeC.importance')}</p>
            </div>
            <div className="space-y-2 mt-4">
              <h4 className="font-semibold text-red-800">{t('standards.examples')}</h4>
              <ul className="space-y-1">
                {Array.isArray(typeCExamples) && typeCExamples.map((example, index) => (
                  <li key={index} className="text-red-700">• {example}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border">
            <h3 className="text-xl font-bold text-gray-800 mb-4">{t('standards.hierarchyTitle')}</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-red-500 rounded"></div>
                <span className="font-semibold">{t('standards.hierarchyC')}</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-blue-500 rounded"></div>
                <span>{t('standards.hierarchyB')}</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <span>{t('standards.hierarchyA')}</span>
              </div>
            </div>
          </div>
          <InfoBox type="success" title={t('standards.applicationTitle')} icon={CheckCircle}>
            <div className="space-y-3">
              <p><strong>{t('standards.app1')}</strong> {t('standards.app1Desc')}</p>
              <p><strong>{t('standards.app2')}</strong> {t('standards.app2Desc')}</p>
              <p><strong>{t('standards.app3')}</strong> {t('standards.app3Desc')}</p>
              <p><strong>{t('standards.app4')}</strong> {t('standards.app4Desc')}</p>
            </div>
          </InfoBox>
          <div className="bg-gray-50 p-6 rounded-2xl border">
            <h3 className="text-xl font-bold text-gray-800 mb-4">{t('standards.robotExampleTitle')}</h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <thead className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">{t('standards.tableStandard')}</th>
                    <th className="px-4 py-3 text-left">{t('standards.tableTitle')}</th>
                    <th className="px-4 py-3 text-left">{t('standards.tableType')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-mono text-sm">EN 619</td>
                    <td className="px-4 py-3">{t('standards.robotRow1Title')}</td>
                    <td className="px-4 py-3"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-semibold">{t('standards.typeCLabel')}</span></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-mono text-sm">EN ISO 10218-2</td>
                    <td className="px-4 py-3">{t('standards.robotRow2Title')}</td>
                    <td className="px-4 py-3"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-semibold">{t('standards.typeCLabel')}</span></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-mono text-sm">EN ISO 14120</td>
                    <td className="px-4 py-3">{t('standards.robotRow3Title')}</td>
                    <td className="px-4 py-3"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">{t('standards.typeBLabel')}</span></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-mono text-sm">EN ISO 13857</td>
                    <td className="px-4 py-3">{t('standards.robotRow4Title')}</td>
                    <td className="px-4 py-3"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">{t('standards.typeBLabel')}</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return renderOverviewContent();
      case 'machineSafetyTraining':
        return <MachineSafetyTraining />;
      case 'machineryModification':
        return <MachineryModificationGuide />;
      case 'machinerySafetyManual':
        return <MachinerySafetyManual />;
      case 'technicalFileGuide':
        return <TechnicalFileGuide />;
      case 'machinerySafetyDocs':
        return <MachinerySafetyDocs />;
      case 'machinerySafetyInfo':
        return <MachinerySafetyInfo />;
      case 'research':
        return renderResearchContent();
      case 'iterative':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-blue-500 pb-4">
              {t('iterative.heading')}
            </h2>
            <InfoBox type="warning" title={t('iterative.mandatoryTitle')} icon={AlertTriangle}>
              <ol className="space-y-2 list-decimal list-inside">
                <li><span className="bg-orange-500 text-white px-2 py-1 rounded font-bold">{t('iterative.step1')}</span></li>
                <li><span className="bg-orange-500 text-white px-2 py-1 rounded font-bold">{t('iterative.step2')}</span></li>
                <li><span className="bg-orange-500 text-white px-2 py-1 rounded font-bold">{t('iterative.step3')}</span></li>
              </ol>
            </InfoBox>
          </div>
        );
      case 'documentation':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-blue-500 pb-4">
              {t('documentation.heading')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
                <FileText className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="font-bold text-lg mb-2">{t('documentation.c1')}</h3>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
                <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="font-bold text-lg mb-2">{t('documentation.c2')}</h3>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
                <Globe className="w-8 h-8 text-purple-500 mb-4" />
                <h3 className="font-bold text-lg mb-2">{t('documentation.c3')}</h3>
              </div>
            </div>
          </div>
        );
      case 'standards':
        return renderStandardsContent();
      case 'riskAssessment':
        return <RiskAssessment />;
      case 'riskAssessmentProcess':
        return <RiskAssessmentProcess />;
      case 'riskReductionPrinciples':
        return <RiskReductionPrinciples />;
      case 'machineSafetyCourse':
        return <MachineSafetyCourse />;
      case 'safetyDistanceCalculator':
        return <SafetyDistanceCalculator />;
      case 'machineGuards':
        return <MachineGuards />;
      case 'functionalSafety':
        return <FunctionalSafety />;
      case 'machineAccessSafety':
        return <MachineAccessSafety />;
      case 'machineSafetyModule':
        return <MachineSafetyModule />;
      case 'technicalFile':
      case 'technicalFileModule':
        return <TechnicalFile />;
      case 'inspection':
        return <Inspection />;
      case 'practical':
        return <WorkEquipmentDirective />;
      default:
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('selectSection')}</h2>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="bg-white p-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Language switcher */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => i18n.changeLanguage(i18n.language === 'zh' ? 'en' : 'zh')}
          className="bg-white px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex items-center space-x-2"
        >
          <Globe className="w-5 h-5" />
          <span className="font-semibold">{t('langSwitch')}</span>
        </button>
      </div>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 lg:flex-shrink-0 flex flex-col h-full max-h-screen ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Header - 不捲動 */}
        <div className="flex-shrink-0 p-6 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-800">{t('title')}</h1>
          <p className="text-sm text-gray-600 mt-1">{t('subtitle')}</p>
          <p className="text-xs text-gray-500 mt-1">{t('description')}</p>
        </div>

        {/* Navigation - 可捲動 */}
        <nav className="flex-1 min-h-0 overflow-y-auto p-4 space-y-2">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
              {t('navigation')}
            </h3>
            {Object.entries(t('sections', { returnObjects: true }) || {}).map(([key, label]) => (
              <button
                key={key}
                onClick={() => {
                  setActiveSection(key);
                  setSidebarOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 flex items-center justify-between ${
                  activeSection === key
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="font-medium">{label}</span>
                <ChevronRight className={`w-4 h-4 transition-transform ${activeSection === key ? 'rotate-90' : ''}`} />
              </button>
            ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 lg:ml-0 min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100">
        <div className="p-6 lg:p-8">
          {renderContent()}
        </div>
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default CEConformityApp;
