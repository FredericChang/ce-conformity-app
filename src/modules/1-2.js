import React from 'react';
import './1-2.css';

const MachineryModificationGuide = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>🔧 現有機械改造指南</h1>
        <p>Modifying Existing Machinery - 重大修改判斷與合規要求</p>
      </div>

      <div className="key-principle">
        <h3>🎯 核心原則</h3>
        <p>當現有機械進行修改時，關鍵問題是：<strong>「這個修改是否構成重大修改（Substantial Modification）？」</strong></p>
        <p>如果是重大修改，修改者將成為新的製造商，必須重新進行CE符合性評估。</p>
      </div>

      <div className="definition-box">
        <h4>🔍 重大修改定義（根據藍皮書指南）</h4>
        <p>產品的修改被認為是<strong>重大修改</strong>，當它：</p>
        <ol style={{ marginTop: '10px' }}>
          <li><strong>改變原始性能、目的或類型</strong>，且原始風險評估中未考慮到</li>
          <li><strong>改變危險性質或增加風險水平</strong>，需參考相關歐盟協調法規</li>
          <li><strong>使產品重新投放市場或投入使用</strong></li>
        </ol>
      </div>

      <div className="flowchart">
        <h3>🤔 重大修改判斷流程</h3>
        <div className="flow-step">
          <div className="step-number">1</div>
          <div className="content">
            <div className="question">修改是否改變機械的性能、目的或類型？</div>
            <div>例：手動機械改為CNC控制</div>
          </div>
        </div>
        <div className="flow-step">
          <div className="step-number">2</div>
          <div className="content">
            <div className="question">修改是否引入新的危險或增加現有風險？</div>
            <div>例：增加自動操作功能</div>
          </div>
        </div>
        <div className="flow-step">
          <div className="step-number">3</div>
          <div className="content">
            <div className="question">修改是否改變安全策略？</div>
            <div>例：用光幕取代物理防護</div>
          </div>
        </div>
        <div className="flow-step">
          <div className="step-number">4</div>
          <div className="content">
            <div className="question">機械是否需要重新投放市場？</div>
            <div>例：修改後轉售給其他用戶</div>
          </div>
        </div>
      </div>

      <div className="decision-matrix">
        <div className="matrix-card substantial">
          <h4>❌ 重大修改情況</h4>
          <ul className="feature-list">
            <li>手動機械改為CNC控制</li>
            <li>增加自動化功能</li>
            <li>改變機械用途</li>
            <li>大幅提升性能參數</li>
            <li>改變安全系統架構</li>
            <li>增加新的危險源</li>
          </ul>
        </div>
        <div className="matrix-card non-substantial">
          <h4>✅ 非重大修改情況</h4>
          <ul className="feature-list">
            <li>更換相同規格零件</li>
            <li>常規維護和保養</li>
            <li>增加安全措施</li>
            <li>外觀或非功能性改進</li>
            <li>軟體小幅更新</li>
            <li>不影響安全的改進</li>
          </ul>
        </div>
      </div>

      <div className="section">
        <h3>📝 典型修改場景分析</h3>
        <div className="examples-grid">
          <div className="example-card substantial">
            <h5>🔴 CNC改造</h5>
            <p><strong>情況：</strong>手動車床改為CNC控制</p>
            <p><strong>判定：</strong>重大修改</p>
            <p><strong>原因：</strong>改變操作方式，引入自動化風險</p>
          </div>

          <div className="example-card substantial">
            <h5>🔴 機器人整合</h5>
            <p><strong>情況：</strong>在沖壓機間增加機器人</p>
            <p><strong>判定：</strong>重大修改</p>
            <p><strong>原因：</strong>形成新的機械組合</p>
          </div>

          <div className="example-card substantial">
            <h5>🔴 安全系統替換</h5>
            <p><strong>情況：</strong>固定護欄改為光幕系統</p>
            <p><strong>判定：</strong>重大修改</p>
            <p><strong>原因：</strong>改變安全策略</p>
          </div>

          <div className="example-card non-substantial">
            <h5>🟢 同類零件更換</h5>
            <p><strong>情況：</strong>更換相同規格的馬達</p>
            <p><strong>判定：</strong>非重大修改</p>
            <p><strong>原因：</strong>功能和風險不變</p>
          </div>

          <div className="example-card non-substantial">
            <h5>🟢 增加安全裝置</h5>
            <p><strong>情況：</strong>增加緊急停止按鈕</p>
            <p><strong>判定：</strong>非重大修改</p>
            <p><strong>原因：</strong>提升安全，不增加風險</p>
          </div>

          <div className="example-card non-substantial">
            <h5>🟢 翻新維護</h5>
            <p><strong>情況：</strong>大修翻新，恢復原性能</p>
            <p><strong>判定：</strong>非重大修改</p>
            <p><strong>原因：</strong>同類替換，性能不變</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h3>⚖️ 法律後果對比</h3>
        <table className="comparison-table">
          <thead>
            <tr>
              <th>項目</th>
              <th>重大修改</th>
              <th>非重大修改</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>法律地位</strong></td>
              <td>修改者成為製造商</td>
              <td>保持原有地位</td>
            </tr>
            <tr>
              <td><strong>CE標記</strong></td>
              <td>必須重新CE標記</td>
              <td>保持原有CE標記</td>
            </tr>
            <tr>
              <td><strong>風險評估</strong></td>
              <td>完整重新評估</td>
              <td>評估修改部分影響</td>
            </tr>
            <tr>
              <td><strong>技術文件</strong></td>
              <td>編制新的技術檔案</td>
              <td>更新相關文件</td>
            </tr>
            <tr>
              <td><strong>符合性聲明</strong></td>
              <td>新的EC Declaration</td>
              <td>原聲明依然有效</td>
            </tr>
            <tr>
              <td><strong>產品責任</strong></td>
              <td>修改者承擔製造商責任</td>
              <td>依工作設備指令</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="responsibilities">
        <h3>📋 重大修改時的責任</h3>
        <p><strong>修改者必須履行製造商義務：</strong></p>
        <ul className="feature-list" style={{ marginTop: '15px' }}>
          <li>進行完整的符合性評估</li>
          <li>編制技術檔案</li>
          <li>發布EC符合性聲明</li>
          <li>貼附CE標記</li>
          <li>提供使用說明書</li>
          <li>承擔產品責任</li>
        </ul>
      </div>

      <div className="section">
        <h3>🔄 部分修改的處理方式</h3>
        <div className="info-box">
          <h4>💡 智慧做法：</h4>
          <p>對於大型複雜機械，<span className="highlight">只有受影響的部分需要重新評估</span>，未受影響的部分不需要新的符合性評估，但應在技術檔案中說明哪些部分未受影響。</p>
        </div>
      </div>

      <div className="section">
        <h3>🏭 機械組合的特殊考量</h3>
        <div className="warning-box">
          <h4>⚠️ 重要提醒：</h4>
          <p>將多台獨立機械連接形成<strong>機械組合</strong>時，連接者成為整個組合的製造商，必須：</p>
          <ul style={{ marginTop: '10px' }}>
            <li>對整個組合進行風險評估</li>
            <li>確保介面安全</li>
            <li>為整個組合提供CE標記</li>
            <li>編制包含所有機械的技術檔案</li>
          </ul>
        </div>
      </div>

      <div className="section">
        <h3>📅 時間節點的重要性</h3>
        <table className="comparison-table">
          <thead>
            <tr>
              <th>機械年代</th>
              <th>原始狀態</th>
              <th>修改後要求</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2009年12月29日後</td>
              <td>有CE標記</td>
              <td>重大修改需重新CE標記</td>
            </tr>
            <tr>
              <td>1995年-2009年</td>
              <td>舊版CE標記</td>
              <td>重大修改需新版CE標記</td>
            </tr>
            <tr>
              <td>1995年前</td>
              <td>無CE標記</td>
              <td>重大修改需CE標記</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="warning-box">
        <h3>🎯 關鍵建議</h3>
        <ol>
          <li><strong>事前評估：</strong>修改前先評估是否構成重大修改</li>
          <li><strong>文件記錄：</strong>所有修改都要妥善記錄</li>
          <li><strong>專業諮詢：</strong>複雜案例建議尋求專業協助</li>
          <li><strong>誠實評估：</strong>不要為了規避責任而錯誤分類</li>
          <li><strong>安全優先：</strong>確保修改後機械的安全性</li>
        </ol>
      </div>

      <div className="key-principle">
        <h3>💡 總結</h3>
        <p>機械修改的合規性取決於修改的<strong>性質和程度</strong>，而非修改的<strong>規模大小</strong>。即使是小的修改，如果改變了安全特性，也可能構成重大修改。相反，大規模的同類零件更換可能不構成重大修改。關鍵是要<strong>誠實評估風險影響</strong>。</p>
      </div>
    </div>
  );
};

export default MachineryModificationGuide;