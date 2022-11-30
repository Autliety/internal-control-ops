import moment from 'moment';

export function getApprovalNotes(input: any) {
  let result;

  if (input.meeting) {
    result = {
      link: `/fr/mz/meeting/${input.meeting.id}`,
      title: '会议通知审核',
      content: `会议【${input.meeting.code}】正在等待您审核`,
    }

  } else if (input.meetingTopic) {
    result = {
      link: `/fr/mz/meeting/${input.meetingTopic.meeting.id}/topic/${input.meetingTopic.id}`,
      title: '会议议题审核',
      content: `会议【${input.meetingTopic.meeting.code}】有1份新的会议议题，正在等待您审核`,
    }

  } else if (input.matterForm) {
    result = {
      link: `/fr/mz/list/${input.matterForm.id}`,
      title: '责任清单审核',
      content: `【${input.requestUser?.name}】提交了责任清单，正在等待您审核`,
    }
  } else if (input.progressMatterForm) {
    result = {
      link: `/fr/lz/list/${input.progressMatterForm.id}`,
      title: '责任清单落实情况审核',
      content: `【${input.requestUser?.name}】提交了责任清单的落实情况，正在等待您审核`,
    }

    // todo demo only
  } else {
    result = {...input};
  }

  result.key = 'approval_' + input.id;
  result.time = moment(input.updateTime).format('YYYY-MM-DD HH:mm');
  return result;
}

export function getMatterAlertNotes(input: any) {
  return {
    link: `/fr/mz/list/matter/${input.id}`,
    title: '问题清单超时预警',
    content: `问题【${input.code}】措施执行即将或已经超时`,
  }
}

export function getThreeAlertNotes(input: any) {
  return {
    link: `/fr/lz/three/${input.id}`,
    title: '三重一大超时预警',
    content: `三重一大议题【${input.requestTitle}】执行反馈即将或已经超时`,
  }
}