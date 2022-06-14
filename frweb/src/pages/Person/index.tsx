import React from 'react';
import { Divider } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import BaseDescriptions from '../../components/BaseDescriptions';
import { baseColumns } from '../PersonList';
import DemoFileDownload from '../../components/DemoFileDownload';

function Person() {

  const data = {
    id: 1,
    user: '王哲',
    userType: '领导干部',
    type: '年度报告',
    time: '2022-05-25',
    content: `（一）本人的婚姻情况；
（二）本人持有普通护照以及因私出国的情况；
（三）本人持有往来港澳通行证、因私持有大陆居民往来台湾通行证以及因私往来港澳、台湾的情况；
（四）子女与外国人、无国籍人通婚的情况；
（五）子女与港澳以及台湾居民通婚的情况；
（六）配偶、子女移居国（境）外的情况，或者虽未移居国（境）外，但连续在国（境）外工作、生活一年以上的情况；
（七）配偶、子女及其配偶的从业情况，含受聘担任私营企业的高级职务，在外商独资企业、中外合资企业、境外非政府组织在境内设立的代表机构中担任由外方委
派、聘任的高级职务，以及在国（境）外的从业情况和职务情况；
（八）配偶、子女及其配偶被司法机关追究刑事责任的情况。`,
    public: '不公开',
    opinion: '情况属实',
  }

  return <PageContainer>

    <BaseDescriptions columns={baseColumns} dataSource={data}/>
    <Divider orientation={'left'}>个人事项报告资料</Divider>
    <DemoFileDownload/>

  </PageContainer>;
}

export default Person;