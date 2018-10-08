export const basic_table = {
    'description': `<p style="font-size: 16px;color: rgb(0, 146, 214);">表一：可以解释患者表型的致病或疑似致病变异：</p><p>下列基因及变异所致的临床表征与患者临床表型吻合，遗传模式符合，变异评级为疑似致病变异或致病变异。建议临床医生高度注意，结合临床并以此进一步进行疾病管理、遗传咨询、生育风险评估/控制等的系列工作。</p>`,
    'gene_table': [
      {'style': {'width': '10%'}, 'header': '基因', 'field': 'gene_name'},
      {'style': {'width': '15%'}, 'header': '染色体位置', 'field': 'chromosome_position'},
      {'style': {'width': '22%'}, 'header': '基因突变信息', 'field': 'variant'},
      {'style': {'width': '8%'}, 'header': '合子\n类型', 'field': 'zygotic_type'},
      {'style': {'width': '20%'}, 'header': '疾病名称', 'field': 'disease_name'},
      {'style': {'width': '8%'}, 'header': '遗传\n模式', 'field': 'genetic_model'},
      {'style': {'width': '8%'}, 'header': '变异\n来源', 'field': 'variation_source'},
      {'style': {'width': '8%'}, 'header': '变异\n类型', 'field': 'variant_level'}
    ],
    template_way: 'detection_results',
    'interpretation_results_key': '结果解读:',
    'interpretation_results': `<p>结果解读：</p><p>关于基因：</p><p>关于变异：</p><p>医学建议：</p>`,
  }
  export const laboratory_statement = `
  <div>
    <p style="font-size: 16px;color: rgb(0, 146, 214);margin:0px">医学建议：</p>
    <p style="line-height:25px;margin:0px">建议临床医生参考本检测报告，结合患者临床表现，完善相应检查，制定治疗方案，进行相应的遗传咨询。</p>
    <p style="font-size: 16px;color: rgb(0, 146, 214);margin:0px">实验室声明：</p>
    <p style="text-indent: 2em;margin: 0px;" style="line-height:25px;margin:0px">
      高通量测序数据量大，结果的分析依赖于临床提供的病史信息、现有的数据库信息和已发表的文献资料，本检测结果只对本次受检样本负责，仅报告与检测项目疾病表型相关的变异结果，供临床医生参考。该实验性能特性由明码生物科技实验室确认，未经过国家食品药品监督管理总局的批准。如对本次检测结果有疑问，请与当地业务员或本实验室联系(电话：021-50461580)。由于标本保存有一定期限，请在自报告日期起的20天内提出复检申请，逾期不再受理复检。
    </p>
    <p style="text-indent: 2em;margin: 0px;" style="line-height:25px;margin:0px">
      鉴于疾病致病基因研究进展迅速，本实验室将会关注已检测病例的后续数据分析和结果解读。如进行此分析时某些特定变异的临床意义可能未明确，可在此报告签发3个月后通过送检医生申请，进行临床外显子测序数据重新分析以及定期的更新问询。
    </p>
    <p style="font-size: 16px;color: rgb(0, 146, 214);margin:0px">检测方法的局限性声明：</p>
    <ul style="line-height:25px;margin:0px">
      <li>
        <div>1）
          <span style="text-indent: 2em;margin: 0px;">采用目标区域捕获高通量测序技术，仅对目标基因编码区域进行测序，数据平均覆盖110-160X。本方法不能完全覆盖重复区域、富含GC区域、假基因区域等。</span>
        </div>
      </li>
      <li>
        <div>2）
          <span style="text-indent: 2em;margin: 0px;">本方法适用于点变异及小片段插入缺失变异，不适用于基因大片段拷贝数变异、动态变异及复杂重组等特殊类型变异的检测，也不适用于检测基因组结构变异、大片段插入变异及位于基因调节区及内含子区±10<br>bp以外的变异。</span>
        </div>
      </li>
      <li>
        <div>3）
          <span style="text-indent: 2em;margin: 0px;">本结果不排除患者表型可由多基因变异所致。</span>
        </div>
      </li>
      <li>
        <div>4）
          <span style="text-indent: 2em;margin: 0px;">对于非明确致病性变异，请结合临床，不宜直接作为临床决策的依据。</span>
        </div>
      </li>
      <li>
        <div>5）
          <span
            style="text-indent: 2em;margin: 0px;">本检测中不会报告所有识别的变异，仅报告已知致病基因中有足够证据表明能够或可能引起送检表型相关疾病的变异。对于良性或疑似良性的变异不会报告。对于假性缺乏（pseudo-deficiency）变异，仅在送检时提供了相关特异生化检测异常结果及怀疑相关疾病时进行报告。</span>
        </div>
      </li>
      <li>
        <div>6）
          <span style="text-indent: 2em;margin: 0px;">本检测适用于遗传性变异的检测和解读，本方法应用的DNA源自受检者血液细胞，而非源自体细胞或生殖细胞，因此不能排除体细胞嵌合现象所致的解读偏差。若血液细胞无法获得，检测的DNA源自受检者的组织细胞时，不能排除体细胞嵌合现象所致的检测或解读偏差。本检测不适用于存在污染可能的样本，假设所获的样本均来自患者。</span>
        </div>
      </li>
      <li>
        <div>7）
          <span style="text-indent: 2em;margin: 0px;">本检测基于假设患者父母亲均为生物学意义上的父母亲，且本报告不涉及血亲关系。</span>
        </div>
      </li>
      <li>
        <div>8）
          <span style="text-indent: 2em;margin: 0px;">本检测结果仅报告与申请时的临床症状相关的变异。若患者签署了知情同意书，本报告将遵照ACMG建议报道的发现进行报告。</span>
        </div>
      </li>
      <li>
        <div>9）
          <span style="text-indent: 2em;margin: 0px;">鉴于目前人类对疾病认识水平的局限性，DNA序列分析的目的是了解疾病发病原因或评估遗传风险，如未检出能够解释患者表型的特定基因及致病变异位点，即检测结果为阴性。但阴性的检测结果并不能排除患者存在某种疾病的可能性，仍然存在其它未知基因或难以检测到、或无法确定的基因变异类型或非遗传因素参与其中。</span>
        </div>
      </li>
      <li>
        <div>10）
          <span style="text-indent: 2em;margin: 0px;">由于目前对某些基因与疾病的认识不够完善，对检出的特定基因变异，在某些情况下，可能并非患者的唯一致病因素， 完整的解释有待新的研究与发现。</span>
        </div>
      </li>
      <li>
        <div>11）
          <span style="text-indent: 2em;margin: 0px;">本检测技术及相关仪器并非常规临床检测项目，目前主要用于辅助临床诊断或科研等相关目的。此外，同其他检验方法一样，基因检测亦存在由于技术、样本以及操作所致低概率的假阴性或假阳性的风险。本检测结果需经临床医师结合各方面情况进行综合判断。</span>
        </div>
      </li>
    </ul>
  </div>
  `
  export const appendix_before_hpo = `
    <h1 style="text-align: center;font-size: 20px;background-color: rgb(234, 246, 253);padding: 10px;font-weight: bold;">报告附件</h1>
    <p style="font-size: 16px;color: rgb(0, 146, 214);margin:0px">本报告依据以下表型</p>
  `
  export const appendix_after_hpo = `
    <p style="font-size: 16px;color: rgb(0, 146, 214);margin:0px">检测方法</p>
    <p style="line-height:25px;margin:0px">
      高通量测序采用Illumina HiSeq 平台，与人类参考基因组序列比对， 98%的目标捕获区域测序深度大于20X。分析采用WuXi NextCODE的临床序列分析软件（Clinical Sequence Analyser, CSA）, 用于发现与患者表型相关的致病基因及具有临床意义的遗传变异。
    </p>
    <div style="padding-bottom:10px">
      <span style="font-size: 16px;color: rgb(0, 146, 214);margin:0px">测序实验：</span>
      <span style="line-height:25px;margin:0px">
      使用安捷伦（Agilent）捕获试剂盒、Illumina Cluster和SBS试剂盒。目标区域平均测序深度110-160X，其中目标序列的98%深度达20X以上。对所有测序片段进行碱基识别。本检测由明码生物科技（上海浦东新区外高桥保税区富特中路288号，CLIA实验室ID:99D2064856）建立并进行了验证。
      </span>
    </div>
    <div style="padding-bottom:10px">
      <span style="font-size: 16px;color: rgb(0, 146, 214);margin:0px">二级分析流程：</span>
      <span style="line-height:25px;margin:0px">
      主要采用 Sentieon软件套装进行测序数据分析。测序片段通过Sentieon BWA与UCSC<br>hg19参考基因组进行比对。
      </span>
    </div>
    <div style="padding-bottom:10px">
      <span style="font-size: 16px;color: rgb(0, 146, 214);margin:0px">变异注释和筛选流程：</span>
      <span style="line-height:25px;margin:0px">
      变异采用明码（WuXi NextCODE）开发的流程进行注释。此外每个碱基的测序深度及变异预测均从所有基因组测序数据中获得。变异采用VEP软件（Variant Effect Predictor）进行注释。三个主要的收录已知或疑似致病变异的数据库，包括ClinVar, OMIM 和HGMD将用于筛选已知的致病变异，同时采用多种工具预测错义变异的功能以及非编码调控序列的注释等等。基于人群的大规模测序数据库用于排除在正常人群中具有较高频率的变异。需注意的是，变异注释过程使用的各公共或私有数据库定期进行更新，因此在分析本例数据时，存在最新的文献证据未同步到相关数据库中的可能，因此检测结果阴性的患者可以申请重新解读，详细请联系客服人员。
      </span>
    </div>
    <div style="padding-bottom:10px">
      <span style="font-size: 16px;color: rgb(0, 146, 214);margin:0px">检测结果解读：</span>
      <span style="line-height:25px;margin:0px">
      每个变异将使用明码（WuXi NextCODE）开发和验证过的临床序列分析软件（Clinic Sequence Analyzer, CSA）进行评估，并依据美国医学遗传学与基因组学学会（ACMG）发布的《序列变异解读标准和指南》对每个变异进行分类。序列变异使用HGVS命名法。
      </span>
    </div>
  `
  export const appendix_table = `
        <div class="single_page">
          <p class="metadata-detail-title">附录：检测基因列表</p>
          <table class="appendix">
            <tr>
              <td>ABHD12</td>
              <td>COCH</td>
              <td>EYA1</td>
              <td>KARS</td>
              <td>NDP</td>
              <td>RMND1</td>
              <td>SUCLA2</td>
            </tr>
            <tr>
              <td>ACTG1</td>
              <td>COL11A1</td>
              <td>EYA4</td>
              <td>KCNE1</td>
              <td>NF2</td>
              <td>RPS6KA3</td>
              <td>SUCLG1</td>
            </tr>
            <tr>
              <td>AIFM1</td>
              <td>COL2A1</td>
              <td>FGF3</td>
              <td>KCNJ10</td>
              <td>NLRP3</td>
              <td>SALL4</td>
              <td>TBC1D24</td>
            </tr>
            <tr>
              <td>ALMS1</td>
              <td>COL4A3</td>
              <td>FOXI1</td>
              <td>KCNQ1</td>
              <td>OPA1</td>
              <td>SEMA3E</td>
              <td>TCOF1</td>
            </tr>
            <tr>
              <td>ANKH</td>
              <td>COL4A4</td>
              <td>GAA</td>
              <td>KCNQ4</td>
              <td>OTOA</td>
              <td>SERPINB6</td>
              <td>TECTA</td>
            </tr>
            <tr>
              <td>ATP6V1B1</td>
              <td>COL4A5</td>
              <td>GALNS</td>
              <td>LHFPL5</td>
              <td>OTOF</td>
              <td>SIX1</td>
              <td>TFAP2A</td>
            </tr>
            <tr>
              <td>BCS1L</td>
              <td>COL4A6</td>
              <td>GATA3</td>
              <td>LOXHD1</td>
              <td>OTOG</td>
              <td>SIX5</td>
              <td>TIMM8A</td>
            </tr>
            <tr>
              <td>BSND</td>
              <td>COL9A1</td>
              <td>GIPC3</td>
              <td>LRP2</td>
              <td>OTOGL</td>
              <td>SLC17A8</td>
              <td>TJP2</td>
            </tr>
            <tr>
              <td>BTD</td>
              <td>COL9A2</td>
              <td>GJB2</td>
              <td>LRTOMT</td>
              <td>PAX3</td>
              <td>SLC19A2</td>
              <td>TMC1</td>
            </tr>
            <tr>
              <td>CABP2</td>
              <td>COL9A3</td>
              <td>GJB3</td>
              <td>MANBA</td>
              <td>PCDH15</td>
              <td>SLC26A4</td>
              <td>TMIE</td>
            </tr>
            <tr>
              <td>CACNA1D</td>
              <td>GSDME</td>
              <td>GJB6</td>
              <td>MARVELD2</td>
              <td>PDZD7</td>
              <td>SLC26A5</td>
              <td>TMPRSS3</td>
            </tr>
            <tr>
              <td>CCDC50</td>
              <td>WHRN</td>
              <td>ADGRV4</td>
              <td>MET</td>
              <td>PHYH</td>
              <td>SLC29A3</td>
              <td>TPRN</td>
            </tr>
            <tr>
              <td>CDH23</td>
              <td>PJVK</td>
              <td>GPSM2</td>
              <td>MITF</td>
              <td>PNPT1</td>
              <td>SLC33A1</td>
              <td>TRIOBP</td>
            </tr>
            <tr>
              <td>CEACAM16</td>
              <td>DIABLO</td>
              <td>GRHL2</td>
              <td>MSRB3</td>
              <td>POLR1C</td>
              <td>SLC52A2</td>
              <td>TSPEAR</td>
            </tr>
            <tr>
              <td>CHD7</td>
              <td>DIAPH1</td>
              <td>GRXCR1</td>
              <td>MYH14</td>
              <td>POLR1D</td>
              <td>SLC52A3</td>
              <td>TYR</td>
            </tr>
            <tr>
              <td>CHSY1</td>
              <td>DSPP</td>
              <td>HARS</td>
              <td>MYH9</td>
              <td>POU3F4</td>
              <td>SMAD4</td>
              <td>USH1C</td>
            </tr>
            <tr>
              <td>CIB2</td>
              <td>EDN3</td>
              <td>HARS2</td>
              <td>MYO15A</td>
              <td>POU4F3</td>
              <td>SMPX</td>
              <td>USH1G</td>
            </tr>
            <tr>
              <td>CISD2</td>
              <td>EDNRB</td>
              <td>HOXB1</td>
              <td>MYO3A</td>
              <td>PRPS1</td>
              <td>SNAI2</td>
              <td>USH2A</td>
            </tr>
            <tr>
              <td>CLDN14</td>
              <td>ESPN</td>
              <td>HSD17B4</td>
              <td>MYO6</td>
              <td>PTPRQ</td>
              <td>SOX10</td>
              <td>WFS1</td>
            </tr>
            <tr>
              <td>CLRN1</td>
              <td>ESRRB</td>
              <td>ILDR1</td>
              <td>MYO7A</td>
              <td>RDX</td>
              <td>STRC</td>
              <td></td>
            </tr>
          </table>
          <p class="metadata-detail-title" style="margin: 10px auto">线粒体耳聋相关位点验证列表</p>
          <table class="chromosome-appendix">
            <tr>
              <td>m.C1494T</td>
              <td>m.A1555G</td>
              <td>m.A7445G</td>
            </tr>
            <tr>
              <td>m.A7445C</td>
              <td>m.T7510C</td>
              <td>m.T7511C</td>
            </tr>
          </table>
        </div>`
  export const basic_template_config = [
    {
      'name': '检测项目:',
      'children': [
        {
          'name': '文本',
          'type': 'text-area',
          'data': ''
        }
      ],
      'type': 'section',
      'field': 'test_project'
    },
    {
      'name': '送检原因:',
      'children': [
        {
          'name': '文本',
          'type': 'text-area',
          'data': ''
        }
      ],
      'type': 'section',
      'field': 'inspection_reason',
    },
    {
      'name': '临床信息:',
      'children': [
        {
          'name': '文本',
          'type': 'text-area',
          'data': ''
        }
      ],
      'type': 'section',
      'field': 'symptom_description',
    },
    {
      'name': '检测结论',
      'children': [
        {
          'name': '段落',
          'type': 'paragraph',
          'data': ''
        }
      ],
      'type': 'section',
      'field': 'detection_conclusion',
    },
    {
      'name': '自定义表',
      'children': [
        {
          'name': '表格',
          'type': 'table',
          'data': basic_table
        }
      ],
      'type': 'section',
      'field': 'detection_results',
    },
    {
      'name': '签字',
      'children': [
        {
          'name': '签字',
          'type': 'sign_style',
          'data': ''
        }
      ],
      'type': 'section',
      'field': 'sign',
    },
    {
      'name': 'page break',
      'children': [
        {
          'name': 'rich text',
          'type': 'rich_text',
          'data': laboratory_statement
        }
      ],
      'type': 'section',
      'field': 'page_break',
    },
    {
      'name': 'page break',
      'children': [
        {
          'name': 'rich text',
          'type': 'rich_text',
          'data': appendix_before_hpo
        },
        {
          'name': 'HPO',
          'type': 'hpo',
          'data': ''
        },
        {
          'name': 'rich text',
          'type': 'rich_text',
          'data': appendix_after_hpo
        }
      ],
      'type': 'section',
      'field': 'page_break',
    },
    {
      'name': 'page break',
      'children': [
        {
          'name': 'rich text',
          'type': 'rich_text',
          'data': appendix_table
        }
      ],
      'type': 'section',
      'field': 'page_break',
    }
  ]
  