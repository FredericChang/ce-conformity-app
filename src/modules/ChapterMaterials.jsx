import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FileText, ChevronDown, ChevronRight, FolderOpen, ExternalLink } from 'lucide-react';

const baseUrl = process.env.PUBLIC_URL || '';

const chapterFiles = [
  {
    id: 'Ch0',
    files: [
      '00 01 introduction sheets.pdf',
    ],
  },
  {
    id: 'Ch1',
    files: [
      '11 Legislation on CE marking.pdf',
      '12 Machinery Directive.pdf',
      '13 Adjacent product Directives.pdf',
      '14 Assemblies and modifications.pdf',
      '15 Machinery Regulation (successor Machinery Directive).pdf',
      '19 Assignments and homework principles Machine safety.pdf',
    ],
  },
  {
    id: 'Ch2',
    files: [
      '21 CE-conformity process.pdf',
      '22 Instruction manual.pdf',
      '23 Technical File.pdf',
      '24 Declaration of conformity.pdf',
      '25 Information for use.pdf',
      '29 Assignments CE-process and documentation.pdf',
    ],
  },
  {
    id: 'Ch3',
    files: [
      '31 Process risk assessment.pdf',
      '32 Risk estimation (methods).pdf',
      '39 Assignments Riskassessment.pdf',
      'Oefenblad risico-beoordeling.docx',
    ],
  },
  {
    id: 'Ch4',
    files: [
      '41 Principles risk reduction.pdf',
      '42 Electrical, hydraulic and pneumatic standards.pdf',
      '43 Safety distances.pdf',
      '44 Fixed and interlocking guards.pdf',
      '45 Functional Safety SIL-PL.pdf',
      '46 Fixed means of access.pdf',
      '47 Start, stop and reset.pdf',
      '48 Ergonomics.pdf',
      '49-Assignments elaboration.pdf',
    ],
  },
  {
    id: 'Ch5',
    files: [
      '51 Principles of the Work Equipment Directive.pdf',
      '59 Assignments - elaboration.pdf',
    ],
  },
  {
    id: 'Ch6',
    files: [
      'Tab 6 - Machinery Directive 2006_42_EC.pdf',
    ],
  },
];

const ChapterMaterials = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language && i18n.language.startsWith('zh') ? 'zh' : 'en';
  const [expanded, setExpanded] = useState({ Ch0: true, Ch1: true });

  const chapterTitles = {
    zh: {
      Ch0: '第 0 章：簡介',
      Ch1: '第 1 章：立法與機械指令',
      Ch2: '第 2 章：CE 流程與文件',
      Ch3: '第 3 章：風險評估',
      Ch4: '第 4 章：風險降低與安全措施',
      Ch5: '第 5 章：工作設備指令',
      Ch6: '第 6 章：機械指令 2006/42/EC',
    },
    en: {
      Ch0: 'Chapter 0: Introduction',
      Ch1: 'Chapter 1: Legislation & Machinery Directive',
      Ch2: 'Chapter 2: CE Process & Documentation',
      Ch3: 'Chapter 3: Risk Assessment',
      Ch4: 'Chapter 4: Risk Reduction & Safety Measures',
      Ch5: 'Chapter 5: Work Equipment Directive',
      Ch6: 'Chapter 6: Machinery Directive 2006/42/EC',
    },
  };

  const toggle = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {lang === 'zh' ? '章節教材' : 'Chapter Materials'}
        </h1>
        <p className="text-gray-600">
          {lang === 'zh'
            ? '以下為各章節原始教材 PDF，可點擊開啟或下載。'
            : 'Original PDF materials by chapter. Click to open or download.'}
        </p>
      </div>

      <div className="space-y-2">
        {chapterFiles.map(({ id, files }) => {
          const isOpen = expanded[id] !== false;
          const title = chapterTitles[lang][id] || id;
          return (
            <div key={id} className="bg-white rounded-xl shadow border border-gray-200 overflow-hidden">
              <button
                type="button"
                onClick={() => toggle(id)}
                className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
              >
                <div className="flex items-center gap-3">
                  <FolderOpen className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="font-semibold text-gray-800">{title}</span>
                  <span className="text-sm text-gray-500">({files.length} {lang === 'zh' ? '個檔案' : 'files'})</span>
                </div>
                {isOpen ? (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {isOpen && (
                <div className="border-t border-gray-100 bg-gray-50/50 px-4 py-3">
                  <ul className="space-y-2">
                    {files.map((file) => {
                      const url = `${baseUrl}/${id}/${encodeURIComponent(file)}`;
                      return (
                        <li key={file}>
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-700 transition-colors group"
                          >
                            <FileText className="w-4 h-4 text-gray-400 group-hover:text-blue-500 flex-shrink-0" />
                            <span className="flex-1 truncate">{file}</span>
                            <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 flex-shrink-0" />
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChapterMaterials;
