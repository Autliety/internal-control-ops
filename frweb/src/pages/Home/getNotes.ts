import moment from 'moment';

export function getApprovalNotes(input: any) {
  let result: any = {};

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
      link: `/mz/list/matter/${input.matter}`,
      title: '措施清单审核',
      content: `问题【${input.matter.code}】更新了措施清单，正在等待您审核`,
    }

  }

  result.key = 'approval_' + input.id;
  result.time = moment(input.updateTime).format('MM-DD HH:mm:ss');
  return result;
}