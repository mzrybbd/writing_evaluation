import {
  Button,
  Form,
  Input,
  Select,
} from 'antd';
import axios from 'axios';
import React, { Component } from 'react';
const { TextArea } = Input
const { Option } = Select

export default class DetailResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arcitleType: ['记叙文', '说明文', '议论文', '应用文'],
      grade: ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级', '初一', '初二', '初三', '高一', '高二', '高三'],
      confirmLoading: false,
      res: {},
      result: {
        "evaluation": {
          "enhances": [
            {
              "detail": "<p><p>解释：指礼节上应该有来有往。现也指以同样的态度或做法回答对方。<br/><p>出处：《礼记·曲礼上》：“礼尚往来。往而不来，非礼也；来而不往，亦非礼也。”<br/><p>例句：雯青顾全同僚的面子，也只好～，勉强敷衍。（清·曾朴《孽海花》第六回）</p>",
              "tips": "文章出现成语[礼尚往来]"
            }
          ],
          "category3Score": 0,
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
            0,
            0,
            0,
            0,
            0
          ],
          "category1Score": 0,
          "score": 0,
          "category3ItemList": [
            0,
            0,
            0,
            0
          ],
          "weightScore": 0,
          "category2ItemList": [
            0,
            0,
            0,
            0
          ],
          "category2Score": 0,
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
          "paragraphRemarkEntityList": [],
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
      }
    }

  }
  componentDidMount() {
    let grade = sessionStorage.getItem('grade')
    let arcitleType = sessionStorage.getItem('arcitleType')
    let content = sessionStorage.getItem('content')
    let title = sessionStorage.getItem('title')
    axios({
      url: '/api/',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      data: {
        vendor: 'gaosieduTest',
        vendorKey: 'seGOD0633E141dJYUdC',
        grade,
        arcitleType,
        content,
        title
      }
    }).then(res => {
      if (res.result && res.code === '000') {
        this.setState({
          res: this.state.result
        })
      }
    }).catch(e => {
      console.log(e.msg)
    });
  }
  render() {
    return <p>hhhh</p>
  }
}