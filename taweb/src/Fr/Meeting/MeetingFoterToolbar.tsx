import React from 'react';
import { FooterToolbar } from '@ant-design/pro-layout';
import { Button, Input, message, Modal, Space } from 'antd';
import UserSelectCascader from '../../components/UserSelectCascader';
import { useAuth } from '../../utils/auth';
import { useHttp } from '../../utils/request';

type Props = {
  value: any,
  onSave?: () => Promise<any>,
}

function MeetingFoterToolbar({ value, onSave }: Props) {

  const { user } = useAuth();
  const { http } = useHttp('/approval', { method: 'PATCH', isManual: true });

  const [content, setContent] = React.useState<string>('');

  return <>
    {value?.status === 'AWAITING_REVIEW' &&
        <FooterToolbar>
          {value?.approveUser?.id === user?.id ?
              <Space>
                <Button
                    danger
                    onClick={() => Modal.confirm({
                      title: '审核不通过',
                      content: <>审核不通过，退回申请人重新修改。<br/><br/>
                        <Input placeholder={'修改意见'} onChange={e => setContent(e.target.value)}/></>,
                      onOk: () =>
                          http(value.id, null, { status: 'REVIEW_DENIED', content })
                              .then(() => window.location.reload()),
                    })}
                >退回修改</Button>
                <Button
                    type={'primary'}
                    onClick={() => Modal.confirm({
                      title: '确认审核通过',
                      content: '审核完成后将自动发回申请人',
                      onOk: () =>
                          http(value.id, null, { status: 'REVIEWED', content: null })
                              .then(() => window.location.reload()),
                    })}
                >审核通过</Button>
              </Space>
              :
              <Button disabled>等待审核</Button>
          }
        </FooterToolbar>
    }

    {/*{*/}
    {/*    value?.status === 'NONE_REVIEW' &&*/}
    {/*    <FooterToolbar>*/}
    {/*      {value?.requestUser?.id === user?.id*/}
    {/*          ? <Space>*/}
    {/*            <Button*/}
    {/*                disabled={!onSave}*/}
    {/*                onClick={() => onSave().then(() => window.location.reload())}*/}
    {/*            >*/}
    {/*              保存更新*/}
    {/*            </Button>*/}
    {/*            <Button*/}
    {/*                type={'primary'}*/}
    {/*                onClick={() => Modal.confirm({*/}
    {/*                  title: '确认提交审核',*/}
    {/*                  content: <>审核人：<UserSelectCascader disabled value={value.approveUser}/></>,*/}
    {/*                  onOk: () =>*/}
    {/*                      onSave()*/}
    {/*                          .then(() => http(value.id, null, { status: 'REVIEWED', content: null })*/}
    {/*                              .then(() => window.location.reload())*/}
    {/*                          ),*/}
    {/*                })}*/}
    {/*            >重新提交</Button>*/}
    {/*          </Space>*/}
    {/*          : <Button disabled>等待退回修改</Button>*/}
    {/*      }*/}
    {/*    </FooterToolbar>*/}
    {/*}*/}

    {value?.status === 'AWAITING_FIX' &&
        <FooterToolbar>
          {value?.requestUser?.id === user?.id ?
              <Space>
                <Button
                    disabled={!onSave}
                    // todo 保存后续操作
                    onClick={() => onSave().then(() => message.success('保存成功！'))}
                >保存更新</Button>
                <Button
                    type={'primary'}
                    onClick={() => Modal.confirm({
                      title: '确认提交审核',
                      content: <>审核人：<UserSelectCascader disabled value={value.approveUser}/></>,
                      onOk: () =>
                          onSave()
                              .then(() => http(value.id, null, { status: 'FIXED', content: null })
                                  .then(() => window.location.reload())
                              ),
                    })}
                >重新提交</Button>
              </Space>
              : <Button disabled>等待退回修改</Button>
          }
        </FooterToolbar>
    }
  </>;
}

export default MeetingFoterToolbar;