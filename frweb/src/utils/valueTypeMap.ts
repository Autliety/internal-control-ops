import numeral from 'numeral';

export default function valueTypeMap(value: any, type: string) {
  return valueTypes[type]?.render(value) ?? value;
}

export const valueTypes = {
  MONEY: {
    name: 'money',
    render: value => `￥${numeral(value).format('0,0.00')}`,
  },
  DOLLAR: {
    name: 'dollar',
    render: value => `$${numeral(value).format('0,0.00')}`,
  },
  PERCENT: {
    name: 'percent',
    render: value => `${numeral(value).format('0.00%')}`,
  },

  AMOUNT: {
    name: 'amount',
    render: value => `${numeral(value).format('0,0')}`,
  },
  POINT: {
    name: 'point',
    render: value => `${numeral(value).format('0,0.0')}`,
  },

  FILE: {
    name: 'file',
    render: value => value,
  },
  RESULT: {
    name: 'result',
    render: value => value,
  },
}