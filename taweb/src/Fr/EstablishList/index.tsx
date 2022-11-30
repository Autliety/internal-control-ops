import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { BackTop, Button, Descriptions, Empty, Progress, Select, Space, Typography } from 'antd';
import moment from 'moment';

import { statusEnum } from '../../utils/nameMapTa';
import { useHttp } from '../../utils/request';
import UserSelectCascader from '../../components/UserSelectCascader';
import BaseDivider from '../../components/BaseDivider';
import { toDate } from '../../utils/map';
import MatterAssignModal from '../MatterList/MatterAssignModal';
import ApprovalTable from '../../components/ApprovalTable';
import ApprovalFooterToolbar from "../../components/ApprovalFooterToolbar";
import { useAuth } from "../../utils/auth";
import { useParams } from "react-router-dom";

type Props = {
  isEstablish?: boolean,
}

function EstablishList(props: Props) {

  const { id } = useParams();
  const { user } = useAuth();
  const { state, loading, http } = useHttp(`/matterform${id ? '/' + id : '?current=true'}`, { initState: {} });
  const { http: updateHttp } = useHttp(`/matterform/${user.id}`, { method: 'POST', isManual: true });

  const [year, setYear] = React.useState(2022);
  const [userInfo, setUserInfo] = React.useState<any>({})
  const [childMatterForm, setChildMatterForm] = React.useState<any>({});
  React.useEffect(() => {
    setUserInfo(state.user);
    setChildMatterForm(state);
  }, [state]);

  return <PageContainer
      extra={
        <Space size={'middle'}>
          <MatterAssignModal self={false} />
          <MatterAssignModal self={true} />
        </Space>
      }
      loading={loading}
  >
    <BackTop />
    <div className={'content'}>
      <Space direction={'vertical'} size={'small'}>
        <p>
          选择年度：<Select onChange={v => setYear(v)} value={year} style={{ width: 200 }}>
          <Select.Option value={2022}>2022年</Select.Option>
          <Select.Option value={2023}>2023年</Select.Option>
          <Select.Option value={2024}>2024年</Select.Option>
        </Select>
        </p>
        {
            <p>
              责任主体：<UserSelectCascader
                onChange={v => {
              setUserInfo(v);
              setChildMatterForm(state.children?.find(item => item.id === v.id));
            }}
                value={userInfo}
                disabled={!props.isEstablish}
            />
              <Button type={'primary'} onClick={() => http()}>查看本人清单</Button>
            </p>
        }
        <Space size={'large'}>
          <span>当前状态：责任清单 {statusEnum[childMatterForm.approval?.status]}  落实情况 {statusEnum[childMatterForm.progressApproval?.status]}</span>
          <span>更新时间：{moment(state.updateTime).format('YYYY-MM-DD HH:mm')}</span>
        </Space>
      </Space>
    </div>

    <BaseDivider title={'责任清单'} />
    <div>
      {
        childMatterForm.matters
            ? childMatterForm.matters?.map(matter => <div
                key={matter.id}
                style={{ backgroundColor: '#fff', padding: 10, marginBottom: 12 }}
            >
              <Descriptions title={null} column={4}>
                <Descriptions.Item label={'问题编号'}>
                  <Typography.Link href={`/fr/mz/list/matter/${matter.id}`}>{matter.code}</Typography.Link>
                </Descriptions.Item>
                <Descriptions.Item label={'责任主体'}>{userInfo?.name}</Descriptions.Item>
                <Descriptions.Item label={'来源及类型'} span={2}>{matter.origin}</Descriptions.Item>
                <Descriptions.Item label={'问题内容'} span={4}>{matter.content}</Descriptions.Item>
                <Descriptions.Item label={'完成时间'}>{matter.endDate}</Descriptions.Item>
                <Descriptions.Item label={'最后更新时间'}>{toDate(matter.updateTime)}</Descriptions.Item>
                <Descriptions.Item label={'措施数量'}>{4}</Descriptions.Item>
                <Descriptions.Item label={'落实进度'}><Progress percent={30} size='small' /></Descriptions.Item>
              </Descriptions>
            </div>)
            : <Empty />
      }
    </div>

    <ApprovalTable value={childMatterForm[props.isEstablish ? 'approval' : 'progressApproval']} />

    <ApprovalFooterToolbar
        value={childMatterForm[props.isEstablish ? 'approval' : 'progressApproval']}
        // onSave={() => updateHttp(null, null, childMatterForm).then(() => window.location.reload())}
        defaultConfig={{ disabled: true }}
    />

  </PageContainer>;
}

export default EstablishList;