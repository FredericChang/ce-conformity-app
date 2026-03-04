import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './2-2.css';

const MachinerySafetyManual = () => {
    const { i18n } = useTranslation();
    const currentLanguage = i18n.language && i18n.language.startsWith('zh') ? 'zh' : 'en';
    const [activeTab, setActiveTab] = useState('purpose');

    const showTab = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div className="machinery-safety-manual-page">
            <div className="language-selector">
                <button 
                    className={`lang-btn ${currentLanguage === 'zh' ? 'active' : ''}`} 
                    onClick={() => i18n.changeLanguage('zh')}
                >
                    中文
                </button>
                <button 
                    className={`lang-btn ${currentLanguage === 'en' ? 'active' : ''}`} 
                    onClick={() => i18n.changeLanguage('en')}
                >
                    English
                </button>
            </div>

            <div className="container">
                {/* Chinese Content */}
                <div id="zh-content" className={`language-content ${currentLanguage === 'zh' ? 'active' : ''}`}>
                    <div className="header">
                        <h1>🛡️ 機械安全使用說明書</h1>
                        <div className="subtitle">Machinery Safety Specialist (CE) - Tab 2: 使用說明書編制</div>
                        <div className="kader-logo">🔷 Kader Academy</div>
                    </div>

                    <div className="nav-tabs">
                        <button 
                            className={`tab-btn ${activeTab === 'purpose' ? 'active' : ''}`} 
                            onClick={() => showTab('purpose')}
                        >
                            目的與要求
                        </button>
                        <button 
                            className={`tab-btn ${activeTab === 'directive' ? 'active' : ''}`} 
                            onClick={() => showTab('directive')}
                        >
                            機械指令
                        </button>
                        <button 
                            className={`tab-btn ${activeTab === 'assembly' ? 'active' : ''}`} 
                            onClick={() => showTab('assembly')}
                        >
                            組裝說明
                        </button>
                        <button 
                            className={`tab-btn ${activeTab === 'iso12100' ? 'active' : ''}`} 
                            onClick={() => showTab('iso12100')}
                        >
                            ISO 12100
                        </button>
                        <button 
                            className={`tab-btn ${activeTab === 'nen5509' ? 'active' : ''}`} 
                            onClick={() => showTab('nen5509')}
                        >
                            NEN 5509
                        </button>
                        <button 
                            className={`tab-btn ${activeTab === 'practical' ? 'active' : ''}`} 
                            onClick={() => showTab('practical')}
                        >
                            實作流程
                        </button>
                        <button 
                            className={`tab-btn ${activeTab === 'exercise' ? 'active' : ''}`} 
                            onClick={() => showTab('exercise')}
                        >
                            練習
                        </button>
                    </div>

                    <div className="content-area">
                        {/* 目的與要求 */}
                        <div id="zh-purpose" className={`tab-content ${activeTab === 'purpose' ? 'active' : ''}`}>
                            <h2 className="section-title">使用說明書的目的與組裝說明</h2>
                            
                            <div className="highlight-box">
                                <h3>📋 核心目的</h3>
                                <p>確保機械按照提供的說明進行操作，警告殘留風險，描述操作員和維護人員的培訓水平要求</p>
                            </div>

                            <div className="requirement-grid">
                                <div className="requirement-card">
                                    <h4>🔧 安全操作</h4>
                                    <p>按照提供的說明操作機械，確保操作過程的安全性和正確性</p>
                                </div>
                                <div className="requirement-card">
                                    <h4>⚠️ 風險警告</h4>
                                    <p>明確警告機械使用過程中存在的殘留風險和潛在危險</p>
                                </div>
                                <div className="requirement-card">
                                    <h4>👨‍🔧 培訓要求</h4>
                                    <p>描述操作員、維護工人等相關人員的培訓水平和技能要求</p>
                                </div>
                                <div className="requirement-card">
                                    <h4>🛡️ 安全方面</h4>
                                    <p>詳細描述機械使用和維護過程中的各項安全方面和注意事項</p>
                                </div>
                                <div className="requirement-card">
                                    <h4>🔍 維護活動</h4>
                                    <p>描述檢查、維護、修理等各項活動的具體要求和操作程序</p>
                                </div>
                            </div>

                            <div className="info-box">
                                <h4>💡 重要提醒</h4>
                                <p>使用說明書是確保機械安全運行的關鍵文件，必須準確、完整、易於理解，並且要根據實際使用情況定期更新和完善。</p>
                            </div>
                        </div>

                        {/* 機械指令 */}
                        <div id="zh-directive" className={`tab-content ${activeTab === 'directive' ? 'active' : ''}`}>
                            <h2 className="section-title">機械指令 (2006/42/EC) 要求</h2>
                            
                            <div className="highlight-box">
                                <h3>📜 根據附錄I, 1.7.4條款</h3>
                                <p>製造商或進口商必須提供符合法規要求的操作說明書</p>
                            </div>

                            <div className="table-container">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>要求項目</th>
                                            <th>具體規定</th>
                                            <th>備註說明</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>強制提供</strong></td>
                                            <td>製造商或進口商必須提供操作說明</td>
                                            <td>法律義務，不可省略</td>
                                        </tr>
                                        <tr>
                                            <td><strong>語言要求</strong></td>
                                            <td>使用機械所在國家的語言</td>
                                            <td>必須包含原始手冊</td>
                                        </tr>
                                        <tr>
                                            <td><strong>版本標示</strong></td>
                                            <td>清楚標明：原始版本/翻譯版本</td>
                                            <td>避免混淆和誤解</td>
                                        </tr>
                                        <tr>
                                            <td><strong>維護說明</strong></td>
                                            <td>專業人員可使用不同語言</td>
                                            <td>須在製造商權限下工作</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="warning-box">
                                <h4>⚠️ 說明書中的重要內容</h4>
                                <div className="checklist">
                                    <ul>
                                        <li><strong>預期用途和非預期用途</strong> - 明確使用範圍和禁止事項</li>
                                        <li><strong>殘留風險警告</strong> - 無法通過設計消除的風險</li>
                                        <li><strong>所有適用的使用階段</strong> - 涵蓋機械生命週期的各個階段</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 組裝說明 */}
                        <div id="zh-assembly" className={`tab-content ${activeTab === 'assembly' ? 'active' : ''}`}>
                            <h2 className="section-title">組裝說明 - 附錄VI</h2>
                            
                            <div className="highlight-box">
                                <h3>🔧 不完整機械的組裝說明</h3>
                                <p>根據機械指令 (2006/42/EC) 附錄VI的特殊要求</p>
                            </div>

                            <div className="requirement-grid">
                                <div className="requirement-card">
                                    <h4>📋 條件描述</h4>
                                    <p>詳細描述能夠進行正確組裝的各項條件和要求</p>
                                </div>
                                <div className="requirement-card">
                                    <h4>🌍 語言要求</h4>
                                    <p>使用整合機械製造商可接受的歐盟官方語言編制</p>
                                </div>
                                <div className="requirement-card">
                                    <h4>👥 授權代表</h4>
                                    <p>或使用授權代表可接受的語言進行編制</p>
                                </div>
                            </div>

                            <div className="warning-box">
                                <strong>⚠️ 注意事項：</strong>不完整機械不需要CE標記，但必須提供整合聲明（II.1.B）和詳細的組裝說明書。
                            </div>
                        </div>

                        {/* ISO 12100 */}
                        <div id="zh-iso12100" className={`tab-content ${activeTab === 'iso12100' ? 'active' : ''}`}>
                            <h2 className="section-title">EN-ISO 12100 標準要求</h2>
                            
                            <div className="highlight-box">
                                <h3>📐 第6.4章 - 使用資訊架構</h3>
                                <p>系統性規範使用說明書的結構和內容要求</p>
                            </div>

                            <div className="standards-timeline">
                                <div className="timeline-item">
                                    <h4>6.4.1 一般要求資訊</h4>
                                    <p>建立使用說明書的基本架構和一般性要求，確保資訊的完整性和系統性。</p>
                                </div>
                                <div className="timeline-item">
                                    <h4>6.4.2 使用資訊的位置和性質</h4>
                                    <p>規定各類安全資訊應該放置的位置和表達方式，確保用戶能夠及時獲取關鍵資訊。</p>
                                </div>
                                <div className="timeline-item">
                                    <h4>6.4.3 信號和警告裝置</h4>
                                    <p>規範視覺、聽覺警告系統的設計和實施要求，提供即時的安全提醒。</p>
                                </div>
                                <div className="timeline-item">
                                    <h4>6.4.4 標記、標誌和書面警告</h4>
                                    <p>詳細規定機械上的標識、圖形符號和警告文字的設計標準和使用要求。</p>
                                </div>
                                <div className="timeline-item">
                                    <h4>6.4.5 使用手冊</h4>
                                    <p><strong>核心章節</strong> - 詳細規定使用手冊的內容結構和編制要求。</p>
                                </div>
                            </div>

                            <div className="info-box">
                                <h4>📚 6.4.5 使用手冊必須包含的內容</h4>
                                <div className="checklist">
                                    <ul>
                                        <li><strong>運輸和儲存</strong> - 搬運、運輸和存放的安全要求和注意事項</li>
                                        <li><strong>安裝/調試</strong> - 安裝步驟、初始設定和調試程序</li>
                                        <li><strong>機械描述</strong> - 技術規格、功能特點和操作原理說明</li>
                                        <li><strong>預期用途</strong> - 正確的操作方法、設定參數等使用指導</li>
                                        <li><strong>維護保養</strong> - 定期檢查程序和零件更換指南</li>
                                        <li><strong>拆除和處置</strong> - 安全拆卸和環保處置的指導原則</li>
                                        <li><strong>緊急情況</strong> - 應急處理程序和故障排除方法</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* NEN 5509 */}
                        <div id="zh-nen5509" className={`tab-content ${activeTab === 'nen5509' ? 'active' : ''}`}>
                            <h2 className="section-title">NEN 5509 荷蘭標準</h2>
                            
                            <div className="highlight-box">
                                <h3>🇳🇱 符合機械指令要求的標準結構</h3>
                                <p>荷蘭國家標準，提供了完整的說明書編制框架</p>
                            </div>

                            <div className="table-container">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>章節順序</th>
                                            <th>章節名稱</th>
                                            <th>主要內容</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td>1</td><td>標題頁</td><td>產品名稱、型號、製造商資訊</td></tr>
                                        <tr><td>2</td><td>前言</td><td>說明書目的、使用方法、重要提醒</td></tr>
                                        <tr><td>3</td><td>目錄</td><td>完整的章節和頁碼索引</td></tr>
                                        <tr><td>4</td><td>介紹</td><td>產品概述、基本特性</td></tr>
                                        <tr><td>5</td><td>描述和操作</td><td>技術說明和操作方法</td></tr>
                                        <tr><td>6</td><td>安全</td><td>安全要求、警告、防護措施</td></tr>
                                        <tr><td>7</td><td>儲存和運輸</td><td>存放條件、運輸要求</td></tr>
                                        <tr><td>8</td><td>調試、安裝、調整</td><td>安裝程序、初始設定</td></tr>
                                        <tr><td>9</td><td>操作、使用方法、應用</td><td>詳細操作指南、應用實例</td></tr>
                                        <tr><td>10</td><td>維護和維護計劃</td><td>保養程序、維護時間表</td></tr>
                                        <tr><td>11</td><td>故障和維修</td><td>故障診斷、維修指導</td></tr>
                                        <tr><td>12</td><td>拆除</td><td>安全拆卸程序</td></tr>
                                        <tr><td>13</td><td>處置</td><td>環保處理方法</td></tr>
                                        <tr><td>14</td><td>索引和詞彙</td><td>術語解釋、快速查找</td></tr>
                                        <tr><td>15</td><td>附錄</td><td>圖紙、圖表、零件清單等</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* 實作流程 */}
                        <div id="zh-practical" className={`tab-content ${activeTab === 'practical' ? 'active' : ''}`}>
                            <h2 className="section-title">實際編制流程</h2>
                            
                            <div className="highlight-box">
                                <h3>🛠️ 9步驟完整流程</h3>
                                <p>從概念到成品的系統性編制方法</p>
                            </div>

                            <div className="process-flow">
                                <div className="process-step">1. 編寫目錄</div>
                                <div className="arrow">→</div>
                                <div className="process-step">2. 收集資訊</div>
                                <div className="arrow">→</div>
                                <div className="process-step">3. 圖片CAD圖</div>
                            </div>
                            <div className="process-flow">
                                <div className="process-step">4. 確定文本結構</div>
                                <div className="arrow">→</div>
                                <div className="process-step">5. 撰寫內容</div>
                                <div className="arrow">→</div>
                                <div className="process-step">6. 用戶測試</div>
                            </div>
                            <div className="process-flow">
                                <div className="process-step">7. 最終版本</div>
                                <div className="arrow">→</div>
                                <div className="process-step">8. 翻譯</div>
                                <div className="arrow">→</div>
                                <div className="process-step">9. 印刷</div>
                            </div>

                            <div className="info-box">
                                <h4>💡 編制要訣</h4>
                                <div className="checklist">
                                    <ul>
                                        <li><strong>用戶導向</strong> - 從使用者角度出發</li>
                                        <li><strong>清晰簡潔</strong> - 避免技術術語過度使用</li>
                                        <li><strong>視覺化</strong> - 充分利用圖片和圖表</li>
                                        <li><strong>實用性</strong> - 提供具體可操作的指導</li>
                                        <li><strong>安全性</strong> - 突出安全警告和注意事項</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 練習 */}
                        <div id="zh-exercise" className={`tab-content ${activeTab === 'exercise' ? 'active' : ''}`}>
                            <h2 className="section-title">練習</h2>
                            
                            <div className="exercise-box">
                                <div className="exercise-title">🎯 實習練習</div>
                                <p><strong>練習任務：</strong></p>
                                <ol style={{ margin: '15px 0', paddingLeft: '20px' }}>
                                    <li>檢查機械指令基本要求第1.7.4章節</li>
                                    <li>確定EN-ISO 12100中是否包含所有主題</li>
                                    <li>進行全體討論和經驗分享</li>
                                </ol>
                                
                                <div className="info-box">
                                    <h4>💡 討論重點</h4>
                                    <ul style={{ margin: '10px 0', paddingLeft: '20px' }}>
                                        <li>機械指令要求與ISO標準的對應關係</li>
                                        <li>不同類型機械的說明書特殊要求</li>
                                        <li>實際編制過程中遇到的挑戰</li>
                                        <li>用戶測試的重要性和實施方法</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* English Content */}
                <div id="en-content" className={`language-content ${currentLanguage === 'en' ? 'active' : ''}`}>
                    <div className="header">
                        <h1>🛡️ Machinery Safety Manual</h1>
                        <div className="subtitle">Machinery Safety Specialist (CE) - Tab 2: Manual Preparation</div>
                        <div className="kader-logo">🔷 Kader Academy</div>
                    </div>

                    <div className="nav-tabs">
                        <button 
                            className={`tab-btn ${activeTab === 'purpose' ? 'active' : ''}`} 
                            onClick={() => showTab('purpose')}
                        >
                            Purpose & Requirements
                        </button>
                        <button 
                            className={`tab-btn ${activeTab === 'directive' ? 'active' : ''}`} 
                            onClick={() => showTab('directive')}
                        >
                            Machinery Directive
                        </button>
                        <button 
                            className={`tab-btn ${activeTab === 'assembly' ? 'active' : ''}`} 
                            onClick={() => showTab('assembly')}
                        >
                            Assembly Instructions
                        </button>
                        <button 
                            className={`tab-btn ${activeTab === 'iso12100' ? 'active' : ''}`} 
                            onClick={() => showTab('iso12100')}
                        >
                            ISO 12100
                        </button>
                        <button 
                            className={`tab-btn ${activeTab === 'nen5509' ? 'active' : ''}`} 
                            onClick={() => showTab('nen5509')}
                        >
                            NEN 5509
                        </button>
                        <button 
                            className={`tab-btn ${activeTab === 'practical' ? 'active' : ''}`} 
                            onClick={() => showTab('practical')}
                        >
                            Practical Process
                        </button>
                        <button 
                            className={`tab-btn ${activeTab === 'exercise' ? 'active' : ''}`} 
                            onClick={() => showTab('exercise')}
                        >
                            Exercise
                        </button>
                    </div>

                    <div className="content-area">
                        {/* Purpose & Requirements */}
                        <div id="en-purpose" className={`tab-content ${activeTab === 'purpose' ? 'active' : ''}`}>
                            <h2 className="section-title">Purpose and Requirements of Instruction Manuals</h2>
                            
                            <div className="highlight-box">
                                <h3>📋 Core Purpose</h3>
                                <p>Ensure machinery is operated according to provided instructions, warn of residual risks, and describe training level requirements for operators and maintenance personnel</p>
                            </div>

                            <div className="requirement-grid">
                                <div className="requirement-card">
                                    <h4>🔧 Safe Operation</h4>
                                    <p>Operate machinery according to provided instructions, ensuring safety and correctness of operation process</p>
                                </div>
                                <div className="requirement-card">
                                    <h4>⚠️ Risk Warnings</h4>
                                    <p>Clearly warn of residual risks and potential hazards during machinery use</p>
                                </div>
                                <div className="requirement-card">
                                    <h4>👨‍🔧 Training Requirements</h4>
                                    <p>Describe training levels and skill requirements for operators, maintenance workers, and other relevant personnel</p>
                                </div>
                                <div className="requirement-card">
                                    <h4>🛡️ Safety Aspects</h4>
                                    <p>Detail various safety aspects and precautions during machinery use and maintenance</p>
                                </div>
                                <div className="requirement-card">
                                    <h4>🔍 Maintenance Activities</h4>
                                    <p>Describe specific requirements and operating procedures for inspection, maintenance, repair, and other activities</p>
                                </div>
                            </div>

                            <div className="info-box">
                                <h4>💡 Important Reminder</h4>
                                <p>Instruction manuals are key documents for ensuring safe machinery operation. They must be accurate, complete, easy to understand, and regularly updated and improved based on actual usage conditions.</p>
                            </div>
                        </div>

                        {/* Machinery Directive */}
                        <div id="en-directive" className={`tab-content ${activeTab === 'directive' ? 'active' : ''}`}>
                            <h2 className="section-title">Machinery Directive (2006/42/EC) Requirements</h2>
                            
                            <div className="highlight-box">
                                <h3>📜 According to Annex I, Section 1.7.4</h3>
                                <p>Manufacturers or importers must provide operating instructions that comply with regulatory requirements</p>
                            </div>

                            <div className="table-container">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Requirement Item</th>
                                            <th>Specific Regulation</th>
                                            <th>Notes</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Mandatory Provision</strong></td>
                                            <td>Manufacturers or importers must provide operating instructions</td>
                                            <td>Legal obligation, cannot be omitted</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Language Requirements</strong></td>
                                            <td>Use the language of the country where the machinery is located</td>
                                            <td>Must include original manual</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Version Indication</strong></td>
                                            <td>Clearly indicate: original version/translated version</td>
                                            <td>Avoid confusion and misunderstanding</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Maintenance Instructions</strong></td>
                                            <td>Professional personnel may use different languages</td>
                                            <td>Must work under manufacturer's authority</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="warning-box">
                                <h4>⚠️ Important Content in Manuals</h4>
                                <div className="checklist">
                                    <ul>
                                        <li><strong>Intended and unintended uses</strong> - Clearly define scope of use and prohibited activities</li>
                                        <li><strong>Residual risk warnings</strong> - Risks that cannot be eliminated through design</li>
                                        <li><strong>All applicable use phases</strong> - Cover all phases of machinery lifecycle</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Assembly Instructions */}
                        <div id="en-assembly" className={`tab-content ${activeTab === 'assembly' ? 'active' : ''}`}>
                            <h2 className="section-title">Assembly Instructions - Annex VI</h2>
                            
                            <div className="highlight-box">
                                <h3>🔧 Assembly Instructions for Incomplete Machinery</h3>
                                <p>Special requirements according to Machinery Directive (2006/42/EC) Annex VI</p>
                            </div>

                            <div className="requirement-grid">
                                <div className="requirement-card">
                                    <h4>📋 Condition Description</h4>
                                    <p>Detailed description of conditions and requirements for correct assembly</p>
                                </div>
                                <div className="requirement-card">
                                    <h4>🌍 Language Requirements</h4>
                                    <p>Prepare in EU official language acceptable to the manufacturer of the integrated machinery</p>
                                </div>
                                <div className="requirement-card">
                                    <h4>👥 Authorized Representative</h4>
                                    <p>Or prepare in language acceptable to the authorized representative</p>
                                </div>
                            </div>

                            <div className="warning-box">
                                <strong>⚠️ Important Note:</strong> Incomplete machinery does not require CE marking, but must provide integration declaration (II.1.B) and detailed assembly instructions.
                            </div>
                        </div>

                        {/* ISO 12100 */}
                        <div id="en-iso12100" className={`tab-content ${activeTab === 'iso12100' ? 'active' : ''}`}>
                            <h2 className="section-title">EN-ISO 12100 Standard Requirements</h2>
                            
                            <div className="highlight-box">
                                <h3>📐 Chapter 6.4 - Information for Use Structure</h3>
                                <p>Systematic specification of instruction manual structure and content requirements</p>
                            </div>

                            <div className="standards-timeline">
                                <div className="timeline-item">
                                    <h4>6.4.1 General Information Requirements</h4>
                                    <p>Establish basic structure and general requirements for instruction manuals, ensuring completeness and systematic nature of information.</p>
                                </div>
                                <div className="timeline-item">
                                    <h4>6.4.2 Location and Nature of Information for Use</h4>
                                    <p>Specify where and how various safety information should be placed, ensuring users can access critical information in time.</p>
                                </div>
                                <div className="timeline-item">
                                    <h4>6.4.3 Signals and Warning Devices</h4>
                                    <p>Regulate design and implementation requirements for visual and auditory warning systems, providing immediate safety reminders.</p>
                                </div>
                                <div className="timeline-item">
                                    <h4>6.4.4 Marking, Signs and Written Warnings</h4>
                                    <p>Detailed regulations for design standards and usage requirements of markings, graphic symbols, and warning text on machinery.</p>
                                </div>
                                <div className="timeline-item">
                                    <h4>6.4.5 Instructions Handbook</h4>
                                    <p><strong>Core Chapter</strong> - Detailed regulations for content structure and preparation requirements of instruction manuals.</p>
                                </div>
                            </div>

                            <div className="info-box">
                                <h4>📚 6.4.5 Content Required in Instruction Manuals</h4>
                                <div className="checklist">
                                    <ul>
                                        <li><strong>Transport and storage</strong> - Safety requirements and precautions for handling, transport, and storage</li>
                                        <li><strong>Installation/commissioning</strong> - Installation steps, initial settings, and commissioning procedures</li>
                                        <li><strong>Machine description</strong> - Technical specifications, functional features, and operating principle descriptions</li>
                                        <li><strong>Intended use</strong> - Correct operating methods, setting parameters, and usage guidance</li>
                                        <li><strong>Maintenance</strong> - Regular inspection procedures and parts replacement guides</li>
                                        <li><strong>Dismantling and disposal</strong> - Safety disassembly and environmental disposal guidelines</li>
                                        <li><strong>Emergency situations</strong> - Emergency procedures and troubleshooting methods</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* NEN 5509 */}
                        <div id="en-nen5509" className={`tab-content ${activeTab === 'nen5509' ? 'active' : ''}`}>
                            <h2 className="section-title">NEN 5509 Dutch Standard</h2>
                            
                            <div className="highlight-box">
                                <h3>🇳🇱 Standard Structure Compliant with Machinery Directive</h3>
                                <p>Dutch national standard providing complete framework for manual preparation</p>
                            </div>

                            <div className="table-container">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Chapter Order</th>
                                            <th>Chapter Name</th>
                                            <th>Main Content</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td>1</td><td>Title Page</td><td>Product name, model, manufacturer information</td></tr>
                                        <tr><td>2</td><td>Preface</td><td>Manual purpose, usage method, important reminders</td></tr>
                                        <tr><td>3</td><td>Table of Contents</td><td>Complete chapter and page number index</td></tr>
                                        <tr><td>4</td><td>Introduction</td><td>Product overview, basic characteristics</td></tr>
                                        <tr><td>5</td><td>Description and Operation</td><td>Technical description and operating methods</td></tr>
                                        <tr><td>6</td><td>Safety</td><td>Safety requirements, warnings, protective measures</td></tr>
                                        <tr><td>7</td><td>Storage and Transport</td><td>Storage conditions, transport requirements</td></tr>
                                        <tr><td>8</td><td>Commissioning, Installation, Adjustment</td><td>Installation procedures, initial settings</td></tr>
                                        <tr><td>9</td><td>Operation, Usage Methods, Applications</td><td>Detailed operation guides, application examples</td></tr>
                                        <tr><td>10</td><td>Maintenance and Maintenance Schedule</td><td>Maintenance procedures, maintenance schedules</td></tr>
                                        <tr><td>11</td><td>Troubleshooting and Repair</td><td>Fault diagnosis, repair guidance</td></tr>
                                        <tr><td>12</td><td>Dismantling</td><td>Safety disassembly procedures</td></tr>
                                        <tr><td>13</td><td>Disposal</td><td>Environmental treatment methods</td></tr>
                                        <tr><td>14</td><td>Index and Glossary</td><td>Term explanations, quick lookup</td></tr>
                                        <tr><td>15</td><td>Appendices</td><td>Drawings, charts, parts lists, etc.</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Practical Process */}
                        <div id="en-practical" className={`tab-content ${activeTab === 'practical' ? 'active' : ''}`}>
                            <h2 className="section-title">Practical Preparation Process</h2>
                            
                            <div className="highlight-box">
                                <h3>🛠️ 9-Step Complete Process</h3>
                                <p>Systematic preparation method from concept to finished product</p>
                            </div>

                            <div className="process-flow">
                                <div className="process-step">1. Write Table of Contents</div>
                                <div className="arrow">→</div>
                                <div className="process-step">2. Collect Information</div>
                                <div className="arrow">→</div>
                                <div className="process-step">3. Images & CAD Drawings</div>
                            </div>
                            <div className="process-flow">
                                <div className="process-step">4. Determine Text Structure</div>
                                <div className="arrow">→</div>
                                <div className="process-step">5. Write Content</div>
                                <div className="arrow">→</div>
                                <div className="process-step">6. User Testing</div>
                            </div>
                            <div className="process-flow">
                                <div className="process-step">7. Final Version</div>
                                <div className="arrow">→</div>
                                <div className="process-step">8. Translation</div>
                                <div className="arrow">→</div>
                                <div className="process-step">9. Printing</div>
                            </div>

                            <div className="info-box">
                                <h4>💡 Preparation Tips</h4>
                                <div className="checklist">
                                    <ul>
                                        <li><strong>User-oriented</strong> - Start from user perspective</li>
                                        <li><strong>Clear and concise</strong> - Avoid overuse of technical terms</li>
                                        <li><strong>Visualization</strong> - Make full use of images and charts</li>
                                        <li><strong>Practicality</strong> - Provide specific, actionable guidance</li>
                                        <li><strong>Safety</strong> - Highlight safety warnings and precautions</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Exercise */}
                        <div id="en-exercise" className={`tab-content ${activeTab === 'exercise' ? 'active' : ''}`}>
                            <h2 className="section-title">Exercise</h2>
                            
                            <div className="exercise-box">
                                <div className="exercise-title">🎯 Practice Exercise</div>
                                <p><strong>Exercise Tasks:</strong></p>
                                <ol style={{ margin: '15px 0', paddingLeft: '20px' }}>
                                    <li>Check Machinery Directive basic requirements Section 1.7.4</li>
                                    <li>Determine if EN-ISO 12100 includes all topics</li>
                                    <li>Conduct group discussion and experience sharing</li>
                                </ol>
                                
                                <div className="info-box">
                                    <h4>💡 Discussion Points</h4>
                                    <ul style={{ margin: '10px 0', paddingLeft: '20px' }}>
                                        <li>Correspondence between Machinery Directive requirements and ISO standards</li>
                                        <li>Special requirements for different types of machinery manuals</li>
                                        <li>Challenges encountered in actual preparation process</li>
                                        <li>Importance and implementation methods of user testing</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            <div className="footer">
                <p>© 2024 Kader Academy - Machinery Safety Specialist Training</p>
            </div>
        </div>
        </div>
    );
};

export default MachinerySafetyManual;