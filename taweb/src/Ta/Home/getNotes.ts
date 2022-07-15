import moment from 'moment';

export function getApprovalNotes(input: any) {
  let result;
  if (input.plan) {
    result = {
      link: `/ta/plan/${input.plan.id}`,
      title: '指标执行计划审核',
      content: `指标执行计划【${input.plan.code}】提交了详细的计划措施，正在等待您审核`,
    };

  } else {
    // todo demo only
    result = { ...input };
  }

  result.key = 'approval_' + input.id;
  result.time = moment(input.updateTime).format('MM-DD HH:mm:ss');
  return result;
}