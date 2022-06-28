import moment from 'moment';

export function getApprovalNotes(input: any) {
  let result;

  if (input.meeting) {
    result = {
      link: `/mz/meeting/${input.meeting.id}/notice`,
      title: '会议通知审核',
      content: `会议【${input.meeting.code}】正在等待您审核`,
    }

  } else if (input.meetingTopic) {
    result = {
      link: `/mz/meeting/${input.meetingTopic.meeting.id}/topic/${input.meetingTopic.id}`,
      title: '会议议题审核',
      content: `会议【${input.meetingTopic.meeting.code}】有1份新的会议议题，正在等待您审核`,
    }

  } else if (input.matter) {
    result = {
      link: `/mz/list/matter/${input.matter.id}`,
      title: '措施清单审核',
      content: `问题【${input.matter.code}】更新了措施清单，正在等待您审核`,
    }

  } else if (input.progress) {
    result = {
      link: `/lz/list/progress/${input.progress.id}`,
      title: '履责情况审核',
      content: `措施【${input.progress.measure.code}】提交了履责情况表，正在等待您审核`,
    }

  } else if (input.plan) {
    result = {
      link: `/plan/${input.plan.id}`,
      title: '指标执行计划审核',
      content: `指标执行计划【${input.plan.code}】提交了详细的计划措施，正在等待您审核`,
    }

  } else {
    // todo demo only
    result = {...input};
  }

  result.key = 'approval_' + input.id;
  result.time = moment(input.updateTime).format('MM-DD HH:mm:ss');
  return result;
}