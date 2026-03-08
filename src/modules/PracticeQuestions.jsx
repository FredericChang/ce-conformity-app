import React from 'react';
import { useTranslation } from 'react-i18next';
import { FileText, BookOpen, ExternalLink, HelpCircle } from 'lucide-react';

const baseUrl = process.env.PUBLIC_URL || '';

const assignmentLinks = [
  { chapter: 'Ch1', file: '19 Assignments and homework principles Machine safety.pdf', labelZh: '第 1 章：機械安全作業與原則', labelEn: 'Ch1: Assignments and homework principles Machine safety' },
  { chapter: 'Ch2', file: '29 Assignments CE-process and documentation.pdf', labelZh: '第 2 章：CE 流程與文件作業', labelEn: 'Ch2: Assignments CE-process and documentation' },
  { chapter: 'Ch3', file: '39 Assignments Riskassessment.pdf', labelZh: '第 3 章：風險評估作業', labelEn: 'Ch3: Assignments Risk assessment' },
  { chapter: 'Ch4', file: '49-Assignments elaboration.pdf', labelZh: '第 4 章：作業詳解', labelEn: 'Ch4: Assignments elaboration' },
  { chapter: 'Ch5', file: '59 Assignments - elaboration.pdf', labelZh: '第 5 章：工作設備指令作業詳解', labelEn: 'Ch5: Work Equipment Directive Assignments elaboration' },
];

const externalResources = [
  { url: 'https://www.methodfs.com/knowledge/TUV-functional-safety-engineer-exam-questions/index.php', labelZh: 'TÜV Functional Safety Engineer 考古題（可作 CE 練習）', labelEn: 'TÜV Functional Safety Engineer exam questions (for CE practice)' },
];

const PracticeQuestions = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language && i18n.language.startsWith('zh') ? 'zh' : 'en';

  const openSection = (sectionKey) => {
    try {
      if (window.__setActiveSection) window.__setActiveSection(sectionKey);
    } catch (_) {}
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {lang === 'zh' ? '考古題與練習題' : 'Practice & Past Exam Questions'}
        </h1>
        <p className="text-gray-600 mb-4">
          {lang === 'zh'
            ? 'TÜV Functional Safety Engineer 考古題與機械安全專家 (CE) 考試屬同一體系，可一併作為 CE 考古題練習。以下彙整教材內 Assignments 與實務指南題目。'
            : 'TÜV Functional Safety Engineer past exam questions are part of the same system as the Machine Safety Specialist (CE) exam and can be used as CE exam practice. Below: chapter Assignments and practical guide exercises.'}
        </p>
      </div>

      {/* 各章 Assignments */}
      <section className="bg-white rounded-xl shadow-md border border-gray-200 p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <FileText className="w-5 h-5 text-blue-500" />
          {lang === 'zh' ? '各章 Assignments（教材作業）' : 'Chapter Assignments'}
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          {lang === 'zh' ? '點擊開啟或下載 PDF，建議依章節順序練習。' : 'Click to open or download PDFs; practice in chapter order.'}
        </p>
        <ul className="space-y-3">
          {assignmentLinks.map(({ chapter, file, labelZh, labelEn }) => {
            const url = `${baseUrl}/${chapter}/${encodeURIComponent(file)}`;
            const label = lang === 'zh' ? labelZh : labelEn;
            return (
              <li key={chapter}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-700 transition-colors group"
                >
                  <FileText className="w-4 h-4 text-gray-400 group-hover:text-blue-500 flex-shrink-0" />
                  <span className="flex-1">{label}</span>
                  <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 flex-shrink-0" />
                </a>
              </li>
            );
          })}
        </ul>
      </section>

      {/* 實務指南內題目 */}
      <section className="bg-white rounded-xl shadow-md border border-gray-200 p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-green-500" />
          {lang === 'zh' ? '實務指南內題目與練習' : 'Exercises in Practical Guide'}
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          {lang === 'zh'
            ? '左側選單點「實務指南」進入後，可展開：題目 5-1（附錄 I 主題異同）、練習 5-2 / 5-3 / 5-4（工作設備指令情境題與詳解）。'
            : 'Click "Practical Guide" in the sidebar to open: Question 5-1 (Annex I subjects), Exercise 5-2, 5-3, 5-4 (Work Equipment Directive scenarios with answers).'}
        </p>
        <button
          type="button"
          onClick={() => openSection('practical')}
          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg hover:from-green-600 hover:to-blue-700 transition-colors text-sm font-medium"
        >
          {lang === 'zh' ? '前往實務指南' : 'Go to Practical Guide'}
        </button>
      </section>

      {/* 考試形式 */}
      <section className="bg-white rounded-xl shadow-md border border-gray-200 p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-indigo-500" />
          {lang === 'zh' ? '考試形式（機械安全專家 CE）' : 'Exam format (Machine Safety Specialist CE)'}
        </h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          {lang === 'zh' ? (
            <>
              <li>• 45 題選擇（可多選）+ 5 題申論；至少 34 題正確通過</li>
              <li>• Tab 1 約 11 題、Tab 2（CE 流程約 4、文件約 6）、Tab 3 約 4、Tab 4（風險降低約 4、歐洲標準約 13）、Tab 5 約 3、開放題約 5</li>
            </>
          ) : (
            <>
              <li>• 45 multiple-choice (multiple answers may be correct) + 5 open questions; at least 34 correct to pass</li>
              <li>• Tab 1 ~11, Tab 2 (CE process ~4, documentation ~6), Tab 3 ~4, Tab 4 (risk reduction ~4, European standards ~13), Tab 5 ~3, open ~5</li>
            </>
          )}
        </ul>
      </section>

      {/* 外部考古題資源 */}
      <section className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <ExternalLink className="w-5 h-5 text-amber-500" />
          {lang === 'zh' ? '相關考古題資源' : 'Related past exam resources'}
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          {lang === 'zh' ? 'TÜV Functional Safety Engineer 考古題與機械安全專家 (CE) 屬同一認證體系，可作為 CE 考前練習。' : 'TÜV Functional Safety Engineer exam questions are part of the same certification system and can be used for CE exam practice.'}
        </p>
        <ul className="space-y-3">
          {externalResources.map(({ url, labelZh, labelEn }) => (
            <li key={url}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-amber-50 text-gray-700 hover:text-amber-700 transition-colors group"
              >
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-amber-500 flex-shrink-0" />
                <span className="flex-1">{lang === 'zh' ? labelZh : labelEn}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default PracticeQuestions;
