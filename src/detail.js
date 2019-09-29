import {
  message,
  Card,
  Divider,
  Progress,
  Rate,
  Tabs,
  Table
} from 'antd';
import axios from 'axios';
import React, { Component } from 'react';
import './detail.css';
const { TabPane } = Tabs;

const Star = props => {
  let status = false
  return (
    <div className="star_item">
      <span className="star_name">{props.name}</span>
      <Progress percent={props.rate} strokeColor={props.color} strokeWidth={12} showInfo={status} />
    </div>)
}
export default class DetailResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arcitleTypes: ['记叙文', '说明文', '议论文', '应用文'],
      grades: ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级', '初一', '初二', '初三', '高一', '高二', '高三'],
      confirmLoading: false,
      rate1: 0,
      rate2: 0,
      rate3: 0,
      result: {
        "evaluation": {
          "enhances": [
            {
              "detail": "<p><p>解释：指礼节上应该有来有往。现也指以同样的态度或做法回答对方。<br/><p>出处：《礼记·曲礼上》：“礼尚往来。往而不来，非礼也；来而不往，亦非礼也。”<br/><p>例句：雯青顾全同僚的面子，也只好～，勉强敷衍。（清·曾朴《孽海花》第六回）</p>",
              "tips": "文章出现成语[礼尚往来]"
            },
            {
              "detail": "<p><p><p class=\"zn_source\">原文1：但是，如果反对这宅子的旧主人，怕给</p>解释：指礼节上应该有来有往。现也指以同样的态度或做法回答对方。<br/><p>出处：《礼记·曲礼上》：“礼尚往来。往而不来，非礼也；来而不往，亦非礼也。”<br/><p>例句：雯青顾全同僚的面子，也只好～，勉强敷衍。（清·曾朴《孽海花》第六回）</p>",
              "tips": "文章出现成语[礼尚往来]"
            },
          ],
          "category3Score": 50,
          "paragraphMarkEntityList": [
            {
              "pNo": 1,
              "markContent": "<p id=\"p1\">　　中国一向是所谓“闭关主义”，自己不去，别人也不许来。<span markno=\"1\" class=\"zn_disadvantage_mark\">自从给枪炮打破了大门之后，又碰了一串钉子，到现在，成了什么都是“送去主义”了。</span><span class=\"mark_mac btnShowDisadvantage\" title=\"重复语句\" style=\"background: #FFA200\">1</span><span markno=\"2\" class=\"zn_disadvantage_mark\">别的且不说罢，单是学艺上的东西，近来就先送一批古董到巴黎去展览，但终“不知后事如何”；还有几位“大师”们捧着几张古画和新画，在欧洲各国一路的挂过去，叫作“发扬国光”。</span><span class=\"mark_mac btnShowDisadvantage\" title=\"重复语句\" style=\"background: #FFA200\">2</span><span markno=\"3\" class=\"zn_disadvantage_mark\">听说不远还要送梅兰芳博士到苏联去，以催进“象征主义”，此后是顺便到欧洲传道。</span><span class=\"mark_mac btnShowDisadvantage\" title=\"重复语句\" style=\"background: #FFA200\">3</span><span markno=\"4\" class=\"zn_disadvantage_mark\">我在这里不想讨论梅博士演艺和象征主义的关系，总之，活人替代了古董，我敢说，也可以算得显出一点进步了。</span><span class=\"mark_mac btnShowDisadvantage\" title=\"重复语句\" style=\"background: #FFA200\">4</span></p>",
              "suggestionIdList": [
                "5d8d29c3d4f5dc4ed80d54a2",
                "5d8d29c3d4f5dc4ed80d54a3",
                "5d8d29c3d4f5dc4ed80d54a4",
                "5d8d29c3d4f5dc4ed80d54a5",
                "5d8d29c3d4f5dc4ed80d54a6"
              ],
              "content": "　　中国一向是所谓“闭关主义”，自己不去，别人也不许来。自从给枪炮打破了大门之后，又碰了一串钉子，到现在，成了什么都是“送去主义”了。别的且不说罢，单是学艺上的东西，近来就先送一批古董到巴黎去展览，但终“不知后事如何”；还有几位“大师”们捧着几张古画和新画，在欧洲各国一路的挂过去，叫作“发扬国光”。听说不远还要送梅兰芳博士到苏联去，以催进“象征主义”，此后是顺便到欧洲传道。我在这里不想讨论梅博士演艺和象征主义的关系，总之，活人替代了古董，我敢说，也可以算得显出一点进步了。"
            },
            {
              "pNo": 2,
              "markContent": "<p id=\"p2\">　　<span markno=\"5\" class=\"zn_disadvantage_mark\">但我们没有人根据了“礼尚往来”的仪节，说道：拿来！</span><span class=\"mark_mac btnShowDisadvantage\" title=\"重复语句\" style=\"background: #FFA200\">5</span>中国一向是所谓“闭关主义”，自己不去，别人也不许来。<span markno=\"1\" class=\"zn_disadvantage_mark\">自从给枪炮打破了大门之后，又碰了一串钉子，到现在，成了什么都是“送去主义”了。</span><span class=\"mark_mac btnShowDisadvantage\" title=\"重复语句\" style=\"background: #FFA200\">1</span><span markno=\"2\" class=\"zn_disadvantage_mark\">别的且不说罢，单是学艺上的东西，近来就先送一批古董到巴黎去展览，但终“不知后事如何”；还有几位“大师”们捧着几张古画和新画，在欧洲各国一路的挂过去，叫作“发扬国光”。</span><span class=\"mark_mac btnShowDisadvantage\" title=\"重复语句\" style=\"background: #FFA200\">2</span><span markno=\"3\" class=\"zn_disadvantage_mark\">听说不远还要送梅兰芳博士到苏联去，以催进“象征主义”，此后是顺便到欧洲传道。</span><span class=\"mark_mac btnShowDisadvantage\" title=\"重复语句\" style=\"background: #FFA200\">3</span><span markno=\"4\" class=\"zn_disadvantage_mark\">我在这里不想讨论梅博士演艺和象征主义的关系，总之，活人替代了古董，我敢说，也可以算得显出一点进步了。</span><span class=\"mark_mac btnShowDisadvantage\" title=\"重复语句\" style=\"background: #FFA200\">4</span></p>",
              "suggestionIdList": [
                "5d8d29c3d4f5dc4ed80d54a8",
                "5d8d29c3d4f5dc4ed80d54a9",
                "5d8d29c3d4f5dc4ed80d54aa",
                "5d8d29c3d4f5dc4ed80d54ab",
                "5d8d29c3d4f5dc4ed80d54a7"
              ],
              "content": "　　但我们没有人根据了“礼尚往来”的仪节，说道：拿来！中国一向是所谓“闭关主义”，自己不去，别人也不许来。自从给枪炮打破了大门之后，又碰了一串钉子，到现在，成了什么都是“送去主义”了。别的且不说罢，单是学艺上的东西，近来就先送一批古董到巴黎去展览，但终“不知后事如何”；还有几位“大师”们捧着几张古画和新画，在欧洲各国一路的挂过去，叫作“发扬国光”。听说不远还要送梅兰芳博士到苏联去，以催进“象征主义”，此后是顺便到欧洲传道。我在这里不想讨论梅博士演艺和象征主义的关系，总之，活人替代了古董，我敢说，也可以算得显出一点进步了。"
            },
            {
              "pNo": 3,
              "markContent": "<p id=\"p3\">　　<span markno=\"5\" class=\"zn_disadvantage_mark\">但我们没有人根据了“礼尚往来”的仪节，说道：拿来！</span><span class=\"mark_mac btnShowDisadvantage\" title=\"重复语句\" style=\"background: #FFA200\">5</span></p>",
              "suggestionIdList": [
                "5d8d29c3d4f5dc4ed80d54ac"
              ],
              "content": "　　但我们没有人根据了“礼尚往来”的仪节，说道：拿来！"
            }
          ],
          "remark": "<p style=\"text-indent:2em;\">文章内容与题目无关，结构散乱，辞不意逮，不符合文体要求。</p>",
          "category1ItemList": [
            34,
            45,
            0,
            0,
            0
          ],
          "category1Score": 80,
          "score": 80,
          "category3ItemList": [
            30,
            40,
            0,
            0
          ],
          "weightScore": 0,
          "category2ItemList": [
            100,
            20,
            0,
            0
          ],
          "category2Score": 90,
          "suggestions": [
            {
              "scope": "paragraph",
              "id": "5d8d29c3d4f5dc4ed80d54a2",
              "detail": "<div class=\"zn_tips\">第一段的字数不宜过多，文章一开始应该直接入题，导向主要内容，不宜转弯抹角，旁逸斜出。</div>",
              "tips": "文章第一段所占篇幅太大。"
            },
            {
              "markNo": 1,
              "scope": "paragraph",
              "id": "5d8d29c3d4f5dc4ed80d54a3",
              "detail": "<div class=\"zn_tips\">语句可适当重复，能起到强调的作用，但过多的重复会使表达啰嗦，文章显得累赘。</div>",
              "tips": "请检查重复语句。"
            },
            {
              "markNo": 1,
              "scope": "paragraph",
              "id": "5d8d29c3d4f5dc4ed80d54a8",
              "detail": "<div class=\"zn_tips\">语句可适当重复，能起到强调的作用，但过多的重复会使表达啰嗦，文章显得累赘。</div>",
              "tips": "请检查重复语句。"
            },
            {
              "markNo": 2,
              "scope": "paragraph",
              "id": "5d8d29c3d4f5dc4ed80d54a4",
              "detail": "<div class=\"zn_tips\">语句可适当重复，能起到强调的作用，但过多的重复会使表达啰嗦，文章显得累赘。</div>",
              "tips": "请检查重复语句。"
            },
            {
              "markNo": 2,
              "scope": "paragraph",
              "id": "5d8d29c3d4f5dc4ed80d54a9",
              "detail": "<div class=\"zn_tips\">语句可适当重复，能起到强调的作用，但过多的重复会使表达啰嗦，文章显得累赘。</div>",
              "tips": "请检查重复语句。"
            },
            {
              "markNo": 3,
              "scope": "paragraph",
              "id": "5d8d29c3d4f5dc4ed80d54a5",
              "detail": "<div class=\"zn_tips\">语句可适当重复，能起到强调的作用，但过多的重复会使表达啰嗦，文章显得累赘。</div>",
              "tips": "请检查重复语句。"
            },
            {
              "markNo": 3,
              "scope": "paragraph",
              "id": "5d8d29c3d4f5dc4ed80d54aa",
              "detail": "<div class=\"zn_tips\">语句可适当重复，能起到强调的作用，但过多的重复会使表达啰嗦，文章显得累赘。</div>",
              "tips": "请检查重复语句。"
            },
            {
              "markNo": 4,
              "scope": "paragraph",
              "id": "5d8d29c3d4f5dc4ed80d54a6",
              "detail": "<div class=\"zn_tips\">语句可适当重复，能起到强调的作用，但过多的重复会使表达啰嗦，文章显得累赘。</div>",
              "tips": "请检查重复语句。"
            },
            {
              "markNo": 4,
              "scope": "paragraph",
              "id": "5d8d29c3d4f5dc4ed80d54ab",
              "detail": "<div class=\"zn_tips\">语句可适当重复，能起到强调的作用，但过多的重复会使表达啰嗦，文章显得累赘。</div>",
              "tips": "请检查重复语句。"
            },
            {
              "markNo": 5,
              "scope": "paragraph",
              "id": "5d8d29c3d4f5dc4ed80d54a7",
              "detail": "<div class=\"zn_tips\">语句可适当重复，能起到强调的作用，但过多的重复会使表达啰嗦，文章显得累赘。</div>",
              "tips": "请检查重复语句。"
            },
            {
              "markNo": 5,
              "scope": "paragraph",
              "id": "5d8d29c3d4f5dc4ed80d54ac",
              "detail": "<div class=\"zn_tips\">语句可适当重复，能起到强调的作用，但过多的重复会使表达啰嗦，文章显得累赘。</div>",
              "tips": "请检查重复语句。"
            }
          ],
          "paragraphRemarkEntityList": [{ pNo: 3, remark: "自问自答，突出重点,增强语言气势。运用了因果论证的方法说明事物发生发展的过程，思路较为清晰。" }],
          "ideation": {
            "question": "在把一个简单的材料添枝加叶成一篇文章时，有哪些步骤呢？",
            "answer": "\n\t\t\n\t\t1.找重点，添加情节。拿到素材之后要会找出这个素材的重点部分，并在重点部分添枝加叶。<br/>\n\t\t2.用技巧，描写细节。在添枝加叶的过程中，会巧妙运用所学的写作技巧对事情所发生的环境，对人物的神态、动作、心理活动等细节进行描写。<br/>\n\t\t3.借过渡，巧妙相连。再添加相应内容的同时要注意每个环节之间的连接，使文章语句通顺，并且内容合情合理。\n\t\t\n\t"
          },
          "summaryReportEvaluationResult": {
            "wordCount": 352,
            "distinctWordCount": 70,
            "characterCount": 522,
            "sentenceCount": 12,
            "symbolCount": 78,
            "idiomCount": 1,
            "distinctCharacterCount": 140,
            "paragraphCount": 3
          }
        },
        "code": "000",
        "success": true,
        "message": "作文批改成功"
      },
      grade: sessionStorage.getItem('grade'),
      arcitleType: sessionStorage.getItem('arcitleType'),
      title: sessionStorage.getItem('title'),
      content: sessionStorage.getItem('content')
    }
  }

  componentDidMount() {
    const { grade, arcitleType, content, title } = this.state
    let formData = new FormData()
    formData.append('vendor', 'gaosieduTest')
    formData.append('vendorKey', 'seGOD0633E141dJYUdC')
    formData.append('grade', grade)
    formData.append('arcitleType', arcitleType)
    formData.append('content', content)
    formData.append('title', title)

    axios({
      url: '/vendorEvaluationAction_evaluation',
      method: 'POST',
      data: formData
    }).then(res => {
      if (res.data.success && res.data.code === '000') {
        this.setState({
          result: res.data
        })
        const { category1Score, category2Score, category3Score } = res.data.evaluation
        let rate1 = this.getRate(category1Score / 20)
        let rate2 = this.getRate(category2Score / 20)
        let rate3 = this.getRate(category3Score / 20)
        this.setState({
          rate1,
          rate2,
          rate3
        })
      } else {
        message.error(res.data.message)
      }
    })
  }
  getRate(num) {
    let diff = num - Math.floor(num)
    if (diff > 0.25) {
      return Math.floor(num) + 0.5
    } else {
      return Math.floor(num)
    }
  }
  render() {
    const { grade, arcitleType, title, result, grades, arcitleTypes, rate1, rate2, rate3 } = this.state
    const { enhances, paragraphMarkEntityList, paragraphRemarkEntityList, remark, category1ItemList, category2ItemList, category3ItemList, score, summaryReportEvaluationResult } = result.evaluation

    let count = 0
    let advatages = paragraphMarkEntityList.map(item => {
      return item.markContent
    })
    let str = advatages.join('');
    let reg = new RegExp('markno', 'g')
    count = str.match(reg) ? str.match(reg).length : 0
    const columns = [
      {
        title: '文章闪光点',
        dataIndex: 'advantage',
        key: 'advantage',
        render: text => <div className="CollocationError_count">{text}</div>,
      },
      {
        title: '精彩段点评',
        dataIndex: 'shortcoming',
        key: 'age',
        render: text => <div className="OtherError_count">{text}</div>,
      },
    ]
    const data = [
      {
        key: '1',
        advantage: count,
        shortcoming: paragraphRemarkEntityList.length,
      }]
    const expand = enhances.map((item, index) => {
      return (
        <div className="card" key={index}>
          <div className="expand_tips">{item.tips}</div>
          <div dangerouslySetInnerHTML={{ __html: item.detail }} className="expand_source"></div>
        </div>
      )
    })
    const pNo = paragraphRemarkEntityList.map((item, index) => {
      return item.pNo
    })
    const originComment = paragraphMarkEntityList.map((item, index) => {
      let idx = pNo.indexOf(item.pNo)
      return (
        <div key={index} className="origin">
          <div dangerouslySetInnerHTML={{ __html: item.markContent }}></div>
          {idx > -1 && <div className="paragraph">段评：<span dangerouslySetInnerHTML={{ __html: paragraphRemarkEntityList[idx].remark }} className="origin_source"></span></div>}
        </div>
      )
    })
    return (
      <div className="tab1">
        <Card className="card1">
          <div>
            <span className="text-primary">
              [{grades[grade - 1]}]  [{arcitleTypes[arcitleType - 1]}]
          </span>
            <span className="title">
              标题：
            <span>[{title}]</span>
            </span>
          </div>
        </Card>
        <Card className="card2">
          <div>
            <div className="machineScoreText">
              <div className="total_score">[满分100] 得分</div>
              <Divider className="line" />
              <Progress type="dashboard" className="score" percent={score} strokeWidth={10} strokeColor="rgb(67,192,251)" format={(percent, successPercent) => percent} />
            </div>
            <div className="remark">
              <div className="total_remark">总评</div>
              <Divider className="line" />
              <div dangerouslySetInnerHTML={{ __html: remark }} className="thumbnail_artcle"></div>
            </div>
          </div>
        </Card>
        <div style={{ display: 'flex', flexDecoration: 'row', justifyContent: 'space-between', marginTop: '10px' }} className="card3">
          <Card>
            <div className="categoryCube">
              <span>
                <span className="star_title">
                  内容
                  </span>
                <Rate defaultValue={rate1} size="large" disabled key={this.state.rate1 ? 'notLoadedYet' : 'loaded'} allowHalf className="rate_title" />
              </span>
              <span className="star_blue">
                <Star name="符合题意" rate={category1ItemList[0]} color="rgb(122, 204, 236)" />
                <Star name="中心突出" rate={category1ItemList[1]} color="rgb(122, 204, 236)" />
                <Star name="内容充实" rate={category1ItemList[2]} color="rgb(122, 204, 236)" />
                <Star name="思想健康" rate={category1ItemList[3]} color="rgb(122, 204, 236)" />
                <Star name="感情真挚" rate={category1ItemList[4]} color="rgb(122, 204, 236)" />
              </span>
            </div>
          </Card>
          <Card>
            <div className="categoryCube">
              <span>
                <span className="star_title">
                  表达
                </span>
                <Rate defaultValue={rate2} disabled allowHalf key={this.state.rate2 ? 'notLoadedYet' : 'loaded'} className="rate_title" />
              </span>
              <span className="star_blue">
                <Star name="行文规范" rate={category2ItemList[0]} color="rgb(152, 227, 35)" />
                <Star name="文体符合" rate={category2ItemList[1]} color="rgb(152, 227, 35)" />
                <Star name="结构严谨" rate={category2ItemList[2]} color="rgb(152, 227, 35)" />
                <Star name="语言流畅" rate={category2ItemList[3]} color="rgb(152, 227, 35)" />
              </span>
            </div>
          </Card>
          <Card>
            <div className="categoryCube">
              <span>
                <span className="star_title">
                  发展
                </span>
                <Rate defaultValue={rate3} disabled key={this.state.rate3 ? 'notLoadedYet' : 'loaded'} allowHalf className="rate_title" />
              </span>
              <span className="star_blue">
                <Star name="深刻" rate={category3ItemList[0]} color="#44e97b" />
                <Star name="丰富" rate={category3ItemList[1]} color="#44e97b" />
                <Star name="文采" rate={category3ItemList[2]} color="#44e97b" />
                <Star name="新颖" rate={category3ItemList[3]} color="#44e97b" />
              </span>
            </div>
          </Card>
        </div>
        <Card title="作文点评" extra={`字数：` + summaryReportEvaluationResult.characterCount} style={{ width: '100%', marginTop: '10px' }} className="card4">
          <Tabs defaultActiveKey="1" className="tab" size="large">
            <TabPane tab="原文点评" key="1">
              <Table columns={columns} dataSource={data} pagination={false} bordered align="center" />
              {originComment}
            </TabPane>
            <TabPane tab="拓展学习" key="3">
              {expand}
            </TabPane>
          </Tabs>
        </Card>
      </div>

    )
  }
}