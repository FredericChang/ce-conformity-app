import React, { useState } from 'react';
import './1-1.css';

const MachineSafetyTraining = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const showTab = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div className="container">
            <div className="header">
                <h1>🛡️ 機械安全專家培訓</h1>
                <p>Machine Safety Specialist (CE) - 完整TAB模組整理</p>
            </div>

            <div className="tabs-navigation">
                <button 
                    className={`tab-btn ${activeTab === 'tab1' ? 'active' : ''}`} 
                    onClick={() => showTab('tab1')}
                >
                    TAB 1: CE標記立法
                </button>
                <button 
                    className={`tab-btn ${activeTab === 'tab2' ? 'active' : ''}`} 
                    onClick={() => showTab('tab2')}
                >
                    TAB 2: 符合性評估
                </button>
                <button 
                    className={`tab-btn ${activeTab === 'tab3' ? 'active' : ''}`} 
                    onClick={() => showTab('tab3')}
                >
                    TAB 3: 風險評估
                </button>
                <button 
                    className={`tab-btn ${activeTab === 'tab4' ? 'active' : ''}`} 
                    onClick={() => showTab('tab4')}
                >
                    TAB 4: 安全措施
                </button>
                <button 
                    className={`tab-btn ${activeTab === 'tab5' ? 'active' : ''}`} 
                    onClick={() => showTab('tab5')}
                >
                    TAB 5: 法律責任
                </button>
                <button 
                    className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`} 
                    onClick={() => showTab('overview')}
                >
                    📊 總覽對比
                </button>
            </div>

            <div className="content-area">
                {/* TAB 1 Content */}
                <div id="tab1" className={`tab-content ${activeTab === 'tab1' ? 'active' : ''}`}>
                    <h2 className="tab-title">TAB 1: CE標記立法原則</h2>
                    
                    <div className="highlight-box">
                        <h3>🎯 核心概念</h3>
                        <p><strong>Conformité Européenne</strong> - 確保歐洲經濟區內自由貿易的保證</p>
                    </div>

                    <div className="section">
                        <h3>📊 荷蘭工作事故統計</h3>
                        <div className="stats-grid">
                            <div className="stat-card">
                                <div className="stat-number">3,482</div>
                                <div>2021年報告事故</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-number">62</div>
                                <div>2021年致命事故</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-number">2</div>
                                <div>主要事故類型</div>
                                <small>墜落 & 機械接觸</small>
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <h3>📜 機械指令演進歷史</h3>
                        <table className="comparison-table">
                            <thead>
                                <tr>
                                    <th>指令版本</th>
                                    <th>生效時間</th>
                                    <th>狀態</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>89/392/EEC</td>
                                    <td>1995年1月</td>
                                    <td>已廢止</td>
                                </tr>
                                <tr>
                                    <td>98/37/EG</td>
                                    <td>1998年8月</td>
                                    <td>已廢止</td>
                                </tr>
                                <tr>
                                    <td>2006/42/EG</td>
                                    <td>2009年12月</td>
                                    <td>現行有效</td>
                                </tr>
                                <tr>
                                    <td>機械產品法規（續任者）</td>
                                    <td>預計2025年</td>
                                    <td>草案階段</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="section">
                        <h3>📖 機械的法律定義</h3>
                        <div className="info-box">
                            <h4>🇬🇧 英文原文定義（機械指令第2條）：</h4>
                            <p><strong>基本定義：</strong></p>
                            <p style={{fontStyle: 'italic', borderLeft: '3px solid #667eea', paddingLeft: '15px', margin: '10px 0'}}>
                                "an <strong>assembly</strong>, fitted with or intended to be fitted with a drive system other than directly applied human or animal effort, <strong>consisting of linked parts or components, at least one of which moves</strong>, and which are <strong>joined together for a specific application</strong>;"
                            </p>
                            
                            <p><strong>延伸定義：</strong></p>
                            <ul style={{fontStyle: 'italic'}}>
                                <li>"an assembly referred to in the first indent, <strong>missing only the components to connect it on site or to sources of energy and motion</strong>;"</li>
                                <li>"an assembly referred to in the first and second indents, <strong>ready to be installed and able to function as it stands only if mounted on a means of transport, or installed in a building or a structure</strong>;"</li>
                            </ul>
                        </div>

                        <div className="highlight-box">
                            <h4>🇨🇳 中文對照翻譯：</h4>
                            <p><strong>基本定義：</strong></p>
                            <p style={{borderLeft: '3px solid #00d4aa', paddingLeft: '15px', margin: '10px 0'}}>
                                一個<strong>組合體</strong>，配備或打算配備非直接人力或動物力以外的驅動系統，由<strong>相互連接的零件或組件組成，至少有一個零件會移動</strong>，並且這些零件<strong>結合在一起用於特定應用</strong>；
                            </p>
                            
                            <p><strong>延伸定義：</strong></p>
                            <ul>
                                <li>第一段所述的組合體，<strong>僅缺少現場連接或與能源和運動源連接的組件</strong>；</li>
                                <li>第一段和第二段所述的組合體，<strong>準備安裝，只有安裝在運輸工具上或建築物或結構中才能運作</strong>；</li>
                            </ul>
                        </div>

                        <div className="section">
                            <h4>🔑 定義關鍵要素分析：</h4>
                            <div className="stats-grid">
                                <div className="stat-card">
                                    <h4>組合體</h4>
                                    <p>多個零件或組件的集合</p>
                                </div>
                                <div className="stat-card">
                                    <h4>驅動系統</h4>
                                    <p>非人力/動物力的動力源</p>
                                </div>
                                <div className="stat-card">
                                    <h4>運動零件</h4>
                                    <p>至少一個零件會移動</p>
                                </div>
                                <div className="stat-card">
                                    <h4>特定應用</h4>
                                    <p>明確的使用目的</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <h3>🎯 機械指令適用範圍</h3>
                        <h4>✅ 包含的產品：</h4>
                        <ul>
                            <li><strong>機械</strong> - 包括生產線</li>
                            <li><strong>可互換設備</strong> - 改變機械功能的附件</li>
                            <li><strong>安全組件</strong> - 履行安全功能的組件</li>
                            <li><strong>升降附件</strong> - 用於升降作業的配件</li>
                            <li><strong>鏈條、繩索和織帶</strong> - 用於升降目的</li>
                            <li><strong>可拆卸機械傳動裝置</strong></li>
                            <li><strong>不完整機械</strong> - 需要整合的半成品</li>
                        </ul>

                        <h4>❌ 排除的產品：</h4>
                        <ul>
                            <li>遊樂場和娛樂場所的專用設備</li>
                            <li>核用途的專用機械</li>
                            <li>武器（包括火器）</li>
                            <li>海上船隻和海上移動設備</li>
                            <li>軍用或警用專用機械</li>
                            <li>運輸工具（除安裝在其上的機械）</li>
                            <li>電氣和電子產品（在特定電壓範圍內）</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>🔧 不完整機械關鍵概念</h3>
                        <div className="info-box">
                            <p><strong>定義：</strong>幾乎是機械但自身無法執行特定應用的組合體</p>
                            <p><strong>特點：</strong></p>
                            <ul>
                                <li>只能整合到其他機械或設備中</li>
                                <li>不需要CE標記</li>
                                <li>需要提供整合聲明（II.1.B）</li>
                                <li>必須附有安裝說明書</li>
                            </ul>
                        </div>

                        <h4>🤖 工業機器人案例分析：</h4>
                        <table className="comparison-table">
                            <thead>
                                <tr>
                                    <th>情況</th>
                                    <th>分類</th>
                                    <th>原因</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>僅有軸控制，無特定功能</td>
                                    <td>不完整機械</td>
                                    <td>需要進一步構建才能執行特定應用</td>
                                </tr>
                                <tr>
                                    <td>配備末端執行器和控制系統</td>
                                    <td>完整機械</td>
                                    <td>能夠獨立執行特定應用</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="section">
                        <h3>⚠️ 附錄IV"危險"機械</h3>
                        <p>需要特殊符合性評估程序的機械：</p>
                        <ul>
                            <li>便攜式鏈鋸</li>
                            <li>木工機械</li>
                            <li>壓力機（行程&gt;6mm且速度&gt;30mm/s）</li>
                            <li>注塑或壓塑機械</li>
                            <li>地下作業機械</li>
                            <li>垃圾收集車</li>
                            <li>升降人員或人員和貨物的設備（垂直高度&gt;3米）</li>
                            <li>檢測人員存在的保護裝置</li>
                            <li>確保安全功能的邏輯單元</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>🔄 機械改造與重大修改</h3>
                        <h4>現行法規狀況：</h4>
                        <div className="responsibility-flow">
                            <div className="responsibility-step">製造商<br /><small>商品法法令<br />（CE指令）</small></div>
                            <div className="arrow">→</div>
                            <div className="responsibility-step">用戶/雇主<br /><small>職業健康安全法令<br />（工作設備指令）</small></div>
                        </div>
                        
                        <div className="warning-box">
                            <strong>⚠️ 重大修改判斷標準：</strong>
                            <ol>
                                <li>原始性能、目的或類型被修改</li>
                                <li>危險性質改變或風險水平增加</li>
                                <li>產品重新投放市場或投入使用</li>
                            </ol>
                        </div>

                        <h4>🇳🇱 荷蘭勞動監察工作指導：</h4>
                        <ul>
                            <li><strong>路線1：</strong>修改現有CE標記機械 - 可利用原始文件證明未受影響部分的符合性</li>
                            <li><strong>路線2：</strong>修改1995年前無CE標記機械 - 需符合工作設備指令最低要求</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>🏢 經濟運營商責任體系</h3>
                        
                        <h4>製造商何時被認定？</h4>
                        <ol>
                            <li>自行製造或組裝CE強制產品</li>
                            <li><strong>修改或擴展產品，使其視為"新產品"</strong></li>
                            <li>以自有品牌銷售（私人標籤）</li>
                            <li>從非EEA國家進口非CE標記產品</li>
                            <li>將多台新機械連接成機械組合</li>
                        </ol>

                        <div className="responsibility-flow">
                            <div className="responsibility-step">製造商</div>
                            <div className="arrow">→</div>
                            <div className="responsibility-step">授權代表</div>
                            <div className="arrow">→</div>
                            <div className="responsibility-step">進口商</div>
                            <div className="arrow">→</div>
                            <div className="responsibility-step">經銷商</div>
                        </div>
                    </div>

                    <div className="warning-box">
                        <strong>⚠️ 重要限制：</strong>授權代表只能處理行政性任務，不能委託製造過程控制或技術文件編制
                    </div>

                    <div className="section">
                        <h3>🔗 相鄰產品指令</h3>
                        <table className="comparison-table">
                            <thead>
                                <tr>
                                    <th>指令</th>
                                    <th>適用範圍</th>
                                    <th>與機械指令的關係</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>低電壓指令</strong><br />2014/35/EU</td>
                                    <td>50V-1000V(AC)<br />75V-1500V(DC)</td>
                                    <td>機械電氣安裝要求適用，但不在EC符合性聲明中引用</td>
                                </tr>
                                <tr>
                                    <td><strong>EMC指令</strong><br />2014/30/EU</td>
                                    <td>電磁兼容性</td>
                                    <td>固定安裝需要專門的EMC評估</td>
                                </tr>
                                <tr>
                                    <td><strong>壓力設備指令</strong><br />2014/68/EU</td>
                                    <td>設計壓力&gt;0.5bar</td>
                                    <td>機械中的壓力組件需同時符合</td>
                                </tr>
                                <tr>
                                    <td><strong>ATEX指令</strong><br />2014/34/EU</td>
                                    <td>防爆設備</td>
                                    <td>用於潛在爆炸環境的機械需符合</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="exam-question">
                        <div className="question-title">🎯 考試重點問題集</div>
                        <p><strong>問題1：</strong>最終用戶購買多台新機械並組裝成生產線，是否需要申請CE標記？</p>
                        <p><strong>答案：</strong>是的，因為此時最終用戶成為了機械組合的製造商</p>
                        
                        <p><strong>問題2：</strong>傳送帶（新投放市場）是否需要CE標記？</p>
                        <p><strong>答案：</strong>是的，符合機械定義且在指令適用範圍內</p>
                        
                        <p><strong>問題3：</strong>電動自行車的CE符合性聲明是否正確？</p>
                        <p><strong>答案：</strong>需要檢查功率和速度是否超過車輛法規限制</p>
                    </div>
                </div>

                {/* TAB 2 Content */}
                <div id="tab2" className={`tab-content ${activeTab === 'tab2' ? 'active' : ''}`}>
                    <h2 className="tab-title">TAB 2: 符合性評估與文件</h2>
                    
                    <div className="highlight-box">
                        <h3>📋 核心目標</h3>
                        <p>確保產品符合歐盟法規要求，建立完整的技術文件體系</p>
                    </div>

                    <div className="section">
                        <h3>📁 必要文件清單</h3>
                        <table className="comparison-table">
                            <thead>
                                <tr>
                                    <th>文件類型</th>
                                    <th>責任方</th>
                                    <th>保存期限</th>
                                    <th>目的</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>技術檔案</td>
                                    <td>製造商</td>
                                    <td>10年</td>
                                    <td>證明符合性</td>
                                </tr>
                                <tr>
                                    <td>EC符合性聲明</td>
                                    <td>製造商</td>
                                    <td>10年</td>
                                    <td>聲明符合法規</td>
                                </tr>
                                <tr>
                                    <td>使用說明書</td>
                                    <td>製造商</td>
                                    <td>-</td>
                                    <td>安全使用指導</td>
                                </tr>
                                <tr>
                                    <td>CE標記</td>
                                    <td>製造商</td>
                                    <td>-</td>
                                    <td>符合性標識</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="section">
                        <h3>🔍 符合性評估程序</h3>
                        <h4>三種主要模組：</h4>
                        <ul>
                            <li><strong>模組A</strong>：製造商內部控制</li>
                            <li><strong>模組B</strong>：EC型式檢驗</li>
                            <li><strong>模組H</strong>：完全品質保證</li>
                        </ul>
                    </div>

                    <div className="info-box">
                        <strong>💡 提示：</strong>大部分機械可使用模組A（內部控制），只有附錄IV機械或特殊情況需要公告機構介入
                    </div>
                </div>

                {/* TAB 3 Content */}
                <div id="tab3" className={`tab-content ${activeTab === 'tab3' ? 'active' : ''}`}>
                    <h2 className="tab-title">TAB 3: 風險評估</h2>
                    
                    <div className="highlight-box">
                        <h3>🎯 風險評估核心</h3>
                        <p>根據EN-ISO 12100標準，系統性識別、評估和降低機械風險</p>
                    </div>

                    <div className="section">
                        <h3>📋 使用限制定義</h3>
                        <h4>四個關鍵維度：</h4>
                        <ul>
                            <li><strong>預期用途</strong>：機械設計的原始目的</li>
                            <li><strong>空間限制</strong>：使用環境和物理限制</li>
                            <li><strong>時間限制</strong>：預期使用壽命和使用頻率</li>
                            <li><strong>人員限制</strong>：操作員技能、經驗、年齡要求</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>⚠️ 危險識別分類</h3>
                        <div className="stats-grid">
                            <div className="stat-card">
                                <h4>機械危險</h4>
                                <p>壓傷、切傷、撞擊、纏繞</p>
                            </div>
                            <div className="stat-card">
                                <h4>電氣危險</h4>
                                <p>觸電、電弧、靜電</p>
                            </div>
                            <div className="stat-card">
                                <h4>熱危險</h4>
                                <p>燙傷、火災、爆炸</p>
                            </div>
                            <div className="stat-card">
                                <h4>其他危險</h4>
                                <p>噪音、振動、輻射</p>
                            </div>
                        </div>
                    </div>

                    <div className="warning-box">
                        <strong>⚠️ 重要：</strong>必須考慮合理可預見的誤用，包括操作員可能的錯誤行為
                    </div>
                </div>

                {/* TAB 4 Content */}
                <div id="tab4" className={`tab-content ${activeTab === 'tab4' ? 'active' : ''}`}>
                    <h2 className="tab-title">TAB 4: 安全措施與設計</h2>
                    
                    <div className="highlight-box">
                        <h3>🛡️ 風險降低強制順序</h3>
                        <p>機械指令規定的三步驟風險降低方法</p>
                    </div>

                    <div className="section">
                        <h3>📊 三步驟風險降低</h3>
                        <div className="responsibility-flow">
                            <div className="responsibility-step">1. 本質安全設計</div>
                            <div className="arrow">→</div>
                            <div className="responsibility-step">2. 防護措施</div>
                            <div className="arrow">→</div>
                            <div className="responsibility-step">3. 使用資訊</div>
                        </div>

                        <h4>步驟1：本質安全設計措施</h4>
                        <ul>
                            <li>限制力量和能量</li>
                            <li>避免尖銳邊緣和角落</li>
                            <li>使用可靠的材料和組件</li>
                            <li>選擇低噪音的技術方案</li>
                        </ul>

                        <h4>步驟2：防護措施</h4>
                        <ul>
                            <li>固定防護裝置</li>
                            <li>聯鎖防護裝置</li>
                            <li>安全光柵和光幕</li>
                            <li>緊急停止裝置</li>
                        </ul>

                        <h4>步驟3：使用資訊</h4>
                        <ul>
                            <li>警告標誌和標籤</li>
                            <li>使用說明書</li>
                            <li>培訓要求</li>
                            <li>個人防護設備建議</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h3>🔴 緊急停止功能要求</h3>
                        <table className="comparison-table">
                            <thead>
                                <tr>
                                    <th>要求</th>
                                    <th>說明</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>顏色要求</td>
                                    <td>紅色按鈕配黃色背景</td>
                                </tr>
                                <tr>
                                    <td>操作模式</td>
                                    <td>所有操作模式下都必須有效</td>
                                </tr>
                                <tr>
                                    <td>復位方式</td>
                                    <td>必須手動復位</td>
                                </tr>
                                <tr>
                                    <td>作用方式</td>
                                    <td>直接作用於危險的動力源</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="info-box">
                        <strong>💡 性能等級：</strong>安全功能（如緊急停止、安全門鎖）需要根據EN ISO 13849確定所需的性能等級（PLa到PLe）
                    </div>
                </div>

                {/* TAB 5 Content */}
                <div id="tab5" className={`tab-content ${activeTab === 'tab5' ? 'active' : ''}`}>
                    <h2 className="tab-title">TAB 5: 法律責任與工作設備指令</h2>
                    
                    <div className="highlight-box">
                        <h3>⚖️ 責任體系</h3>
                        <p>產品責任與工作場所安全責任的雙重體系</p>
                    </div>

                    <div className="section">
                        <h3>📋 指令對比</h3>
                        <table className="comparison-table">
                            <thead>
                                <tr>
                                    <th>項目</th>
                                    <th>機械指令</th>
                                    <th>工作設備指令</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>法律性質</td>
                                    <td>產品指令</td>
                                    <td>社會指令</td>
                                </tr>
                                <tr>
                                    <td>責任主體</td>
                                    <td>製造商</td>
                                    <td>雇主</td>
                                </tr>
                                <tr>
                                    <td>適用範圍</td>
                                    <td>1995年後投放市場的機械</td>
                                    <td>所有工作設備</td>
                                </tr>
                                <tr>
                                    <td>CE標記</td>
                                    <td>需要</td>
                                    <td>不需要</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="section">
                        <h3>⚖️ 產品責任法</h3>
                        <h4>關鍵要點：</h4>
                        <ul>
                            <li><strong>生效時間</strong>：1990年11月1日</li>
                            <li><strong>責任原則</strong>：生產者對產品缺陷造成的損害承擔責任</li>
                            <li><strong>舉證責任</strong>：製造商需證明受傷與產品不安全無因果關係</li>
                            <li><strong>技術文件作用</strong>：作為免責的重要證據</li>
                        </ul>
                    </div>

                    <div className="warning-box">
                        <strong>⚠️ 事故責任分析：</strong>操作員違規操作導致事故時，雇主仍可能因缺乏適當培訓和監督而承擔責任
                    </div>

                    <div className="exam-question">
                        <div className="question-title">🎯 典型事故案例</div>
                        <p><strong>情況：</strong>操作員移除安全裝置導致事故</p>
                        <p><strong>責任分析：</strong></p>
                        <ul>
                            <li>製造商：需檢查設計是否充分防止繞過</li>
                            <li>雇主：缺乏監督和培訓的責任</li>
                            <li>操作員：違規操作的直接責任</li>
                        </ul>
                    </div>
                </div>

                {/* Overview Content */}
                <div id="overview" className={`tab-content ${activeTab === 'overview' ? 'active' : ''}`}>
                    <h2 className="tab-title">📊 總覽對比</h2>
                    
                    <div className="highlight-box">
                        <h3>🎯 完整學習路徑</h3>
                        <p>從法律框架到實際應用的系統性學習體系</p>
                    </div>

                    <div className="section">
                        <h3>📚 TAB模組關聯圖</h3>
                        <div className="responsibility-flow">
                            <div className="responsibility-step">TAB 1<br />法律基礎</div>
                            <div className="arrow">→</div>
                            <div className="responsibility-step">TAB 2<br />文件體系</div>
                            <div className="arrow">→</div>
                            <div className="responsibility-step">TAB 3<br />風險識別</div>
                            <div className="arrow">→</div>
                            <div className="responsibility-step">TAB 4<br />安全實施</div>
                            <div className="arrow">→</div>
                            <div className="responsibility-step">TAB 5<br />責任界定</div>
                        </div>
                    </div>

                    <div className="section">
                        <h3>🎯 考試重點分布</h3>
                        <div className="stats-grid">
                            <div className="stat-card">
                                <div className="stat-number">30%</div>
                                <div>經濟運營商責任</div>
                                <small>TAB 1 & 5</small>
                            </div>
                            <div className="stat-card">
                                <div className="stat-number">25%</div>
                                <div>技術文件要求</div>
                                <small>TAB 2</small>
                            </div>
                            <div className="stat-card">
                                <div className="stat-number">25%</div>
                                <div>風險評估方法</div>
                                <small>TAB 3</small>
                            </div>
                            <div className="stat-card">
                                <div className="stat-number">20%</div>
                                <div>安全措施設計</div>
                                <small>TAB 4</small>
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <h3>💡 學習建議</h3>
                        <h4>按學習階段：</h4>
                        <ul>
                            <li><strong>基礎階段</strong>：掌握TAB 1的法律框架和責任分工</li>
                            <li><strong>進階階段</strong>：理解TAB 2和3的技術要求</li>
                            <li><strong>應用階段</strong>：熟練TAB 4的實際操作</li>
                            <li><strong>綜合階段</strong>：整合TAB 5的責任體系</li>
                        </ul>

                        <h4>按難度等級：</h4>
                        <ul>
                            <li><strong>70%以下</strong>：重點學習基礎概念和定義</li>
                            <li><strong>70-80%</strong>：加強實際應用和案例分析</li>
                            <li><strong>80-90%</strong>：深入複雜情況和特殊要求</li>
                            <li><strong>90%以上</strong>：掌握綜合分析和問題解決</li>
                        </ul>
                    </div>

                    <div className="info-box">
                        <strong>🏆 考試成功要訣：</strong>理解概念→熟記要求→應用實踐→綜合分析
                    </div>
                </div>
            </div>

            <div className="footer">
                <p>© 2025 機械安全專家培訓資料整理 | 持續更新中...</p>
            </div>
        </div>
    );
};

export default MachineSafetyTraining;
