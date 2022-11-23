import React from 'react';
import {FooterToolbar, PageContainer} from '@ant-design/pro-layout';
import {ProColumns} from '@ant-design/pro-table';
import { useSearchParams} from 'react-router-dom';
import {Alert, Button, Descriptions, InputNumber} from 'antd';
import showInfo from '../../utils/showInfo';
import BaseEditableTable from '../../components/BaseEditableTable';
import {useHttp} from '../../utils/request';
import {useAuth} from '../../utils/auth';

function Score({page}) {

  const [search] = useSearchParams();
  let isLeader = search.get('isLeader') === 'true';

  const {user} = useAuth();

  const {state} = useHttp(`/evaluation/${page}`, {initState: []});
  const {state: scoreData} = useHttp(`/evaluation/score${isLeader ? '?userId=10' : ''}` , { initState: []});
  const {http} = useHttp(isLeader ? '/evaluation?userId=10' : '/evaluation', {isManual: true, method:'POST'});

  // todo dev code
  const leaderDestUser = {id: 10}

  const columns: ProColumns[] = [
    {title: '序号', dataIndex: 'id', width: 80, editable: false},
    {title: '考评模块', dataIndex: 'type', editable: false},
    {title: '考核指标', dataIndex: 'name', editable: false},
    {
      title: '考评内容',
      dataIndex: 'content',
      editable: false,
      renderText: text => <>
        {text?.substring(0, 20)}
        {text?.length > 20 && <Button type={'link'} onClick={() => showInfo(text)}>...[更多]</Button>}
      </>,
    },
    {
      title: '系统评价要素',
      dataIndex: 'focus',
      editable: false,
      renderText: (text, record) => record.isColor
          ? <div style={{color: 'red'}}>
            {text?.substring(0, 20)}
            {text?.length > 20 &&
                <Button type={'link'} onClick={() => showInfo(text)} style={{color: 'red'}}>...[更多]</Button>}
          </div>
          : <>
            {text?.substring(0, 20)}
            {text?.length > 20 && <Button type={'link'} onClick={() => showInfo(text)}>...[更多]</Button>}
          </>
    },
    {title: '分值', dataIndex: 'value', width: 80, editable: false},
    {title: '考评权重', dataIndex: 'weight', renderText: () => '20%', editable: false},
    {
      title: '考评得分',
      dataIndex: isLeader ? 'leader' : 'self',
      width: 100,
      renderFormItem: (r: any) => <InputNumber min={0} max={parseFloat(r.entry?.value)}/>
    },
  ];

  const [value, setValue] = React.useState([]);
  React.useEffect(() => {
    setValue(state.map(item => ({...item, ...scoreData.find(i => i.evaluationId === item.id)})))
  }, [state, scoreData]);

  // 求总分
  const [count, setCount] = React.useState<number>(0);
  const getTotal = (array: any, keyName: string) => {
    let total;
    total = array.reduce(function (total, currentValue) {
      return currentValue[keyName] ? (total + parseFloat(currentValue[keyName])) : total;
    }, 0);
    return total;
  }

  return <PageContainer>
    <Alert type={'warning'} message={'注：每项所填考评得分不得超过该项总分值'} showIcon/>
    <br/>
    <BaseEditableTable
        rowkey={'id'}
        columns={isLeader ? columns : columns.filter(item => item.dataIndex !== 'weight')}
        value={value}
        isInEdit
        disableAdd
        isOnlyEdit
        pagination={false}
        onChange={(v) => {
          setValue(v);
          setCount(getTotal(v, 'self'));
        }}
    />
    <br/>
    <Descriptions bordered>
      <Descriptions.Item
          label='总得分'
          labelStyle={{width: '86%', fontSize: 16}}
          contentStyle={{textAlign: 'center', backgroundColor: '#FAFAFA', fontSize: 16}}
      >
        {count.toFixed(2)}
      </Descriptions.Item>
    </Descriptions>

    <FooterToolbar>
      <Button
          type={'primary'}
          onClick={
            () => http(null, null, value.map(item => ({
              evaluation: item,
              user: isLeader ? leaderDestUser : user,
              leaderUser: isLeader ? user : undefined,
              self: item?.self,
              leader: item?.leader,
            }))).then(() => window.location.reload())
          }
      >
        提交
      </Button>
      <Button onClick={() => window.location.reload()}>取消</Button>
    </FooterToolbar>
  </PageContainer>;
}

export default Score;