(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.constColors =  [
    '#7B0600', '#9E4000', '#916400', '#28547C', '#01007E', '#561F4E', '#3C3C3C', '#004FC0',
    '#9D0400', '#BB5510', '#A9790E', '#0D809B', '#020CE2', '#6E1E71', '#565656', '#E01FAD',
    '#C10200', '#D96B20', '#BF8C1B', '#119597', '#4B79FE', '#881D96', '#707070', '#FF7100',
    '#E60000', '#F68030', '#D8A32A', '#6B93A0', '#3296FF', '#9849B7', '#8B8B8B', '#137A19',
    '#DD4545', '#FA9B54', '#EFB738', '#86ACAE', '#18B2FE', '#A774D7', '#A5A5A5', '#70AC00',
    '#D38A8A', '#FDB476', '#FED52C', '#A1C5BD', '#01CCFF', '#B189C7', '#BFBFBF', '#0070c0',
    '#E4A6A6', '#FFCB96', '#FFE476', '#BBDDCB', '#87DBF7', '#BA9EB6', '#D9D9D9', '#20C281'
  ];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.constColors;
  }
})();
