import React from 'react';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import { ProColumns } from '@ant-design/pro-table';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Alert, Button, Descriptions, InputNumber, Tag, Typography } from 'antd';
import showInfo from '../../utils/showInfo';
import BaseEditableTable from '../../components/BaseEditableTable';
import { useHttp } from '../../utils/request';
import { useAuth } from '../../utils/auth';

function Score({ page }) {

  const [search] = useSearchParams();
  let isLeader = search.get('isLeader') === 'true';

  // 被评分人
  const location = useLocation();
  const { state: leaderDestUser }: any = location;

  const { user } = useAuth();

  const { state } = useHttp(`/evaluation/${page}`, { initState: [] });
  const { state: scoreData } = useHttp(`/usereva/score${isLeader ? `?userId=${leaderDestUser.user?.id}` : ''}`, { initState: [] });
  const { http } = useHttp(isLeader ? `/usereva?userId=${leaderDestUser.user?.id}` : '/usereva', {
    isManual: true,
    method: 'POST'
  });

  const columns: ProColumns[] = [
    { title: '序号', dataIndex: 'id', width: 80, editable: false },
    { title: '考评模块', dataIndex: 'type', editable: false },
    { title: '考核指标', dataIndex: 'name', editable: false },
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
          ? <div style={{ color: 'red' }}>
            {text?.substring(0, 20)}
            {text?.length > 20 &&
                <Button type={'link'} onClick={() => showInfo(text)} style={{ color: 'red' }}>...[更多]</Button>}
          </div>
          : <>
            {text?.substring(0, 20)}
            {text?.length > 20 && <Button type={'link'} onClick={() => showInfo(text)}>...[更多]</Button>}
          </>
    },
    { title: '分值', dataIndex: 'value', width: 80, editable: false },
    { title: '考评权重', dataIndex: 'weight', renderText: () => '20%', editable: false },
    {
      title: '考评得分',
      dataIndex: isLeader ? 'leader' : 'self',
      width: 100,
      valueType: 'digit',
      renderFormItem: (r: any) => <InputNumber min={0} max={parseFloat(r.entry?.value)} />
    },
  ];

  const [value, setValue] = React.useState([]);
  React.useEffect(() => {
    setValue(state.map(item => ({ ...item, ...scoreData.find(i => i.evaluation.id === item.id) })))
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
    <Alert type={'warning'} message={'注：每项所填考评得分不得超过该项总分值'} showIcon />
    <br />
    {
        isLeader && <div className={'content'}>
          <Typography.Text>评分人：<Tag color={'processing'}>{user.name}</Tag></Typography.Text>
          <br /><br />
          <Typography.Text>被评人：<Tag color={'success'}>{leaderDestUser.user?.name}</Tag></Typography.Text>
        </div>
    }
    <br />
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
          isLeader ? setCount(getTotal(v, 'leader')) : setCount(getTotal(v, 'self'));
        }}
    />
    <br />
    <Descriptions bordered>
      <Descriptions.Item
          label='总得分'
          labelStyle={{ width: '86%', fontSize: 16 }}
          contentStyle={{ textAlign: 'center', backgroundColor: '#FAFAFA', fontSize: 16 }}
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
              user: isLeader ? leaderDestUser.user : user,
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