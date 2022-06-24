import moment from 'moment';

export function getApprovalNotes(input: any) {
  let result;

  if (input.meeting) {
    result = {
      link: `/fr/mz/meeting/${input.meeting.id}/notice`,
      title: '会议通知审核',
      content: `会议【${input.meeting.code}】正在等待您审核`,
    }

  } else if (input.meetingTopic) {
    result = {
      link: `/fr/mz/meeting/${input.meetingTopic.meeting.id}/topic/${input.meetingTopic.id}`,
      title: '会议议题审核',
      content: `会议【${input.meetingTopic.meeting.code}】有1份新的会议议题，正在等待您审核`,
    }

  } else if (input.matter) {
    result = {
      link: `/fr/mz/list/matter/${input.matter.id}`,
      title: '措施清单审核',
      content: `问题【${input.matter.code}】更新了措施清单，正在等待您审核`,
    }

  } else if (input.progress) {
    result = {

      link: `/fr/lz/list/progress/${input.progress.id}`,
      title: '履责情况审核',
      content: `措施【${input.progress.measure.code}】提交了履责情况表，正在等待您审核`,
    }

    // todo demo only
  } else {
    result = {...input};
  }

  result.key = 'approval_' + input.id;
  result.time = moment(input.updateTime).format('YYYY-MM-DD HH:mm');
  return result;
}