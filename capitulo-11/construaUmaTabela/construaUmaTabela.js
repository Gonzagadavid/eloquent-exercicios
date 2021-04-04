const MOUNTAINS = [
  { name: 'Kilimanjaro', height: 5895, country: 'Tanzania' },
  { name: 'Everest', height: 8848, country: 'Nepal' },
  { name: 'Mount Fuji', height: 3776, country: 'Japan' },
  { name: 'Mont Blanc', height: 4808, country: 'Italy/France' },
  { name: 'Vaalserberg', height: 323, country: 'Netherlands' },
  { name: 'Denali', height: 6168, country: 'United States' },
  { name: 'Popocatepetl', height: 5465, country: 'Mexico' }
]

const tabela = document.getElementById('Tabela')

function buildTable (data) {
  const tabela = document.createElement('table')
  const ths = document.createElement('tr')
  Object.keys(data[0]).forEach(key => {
    const th = document.createElement('th')
    th.innerHTML = key
    ths.appendChild(th)
  })
  tabela.appendChild(ths)
  data.forEach(obj => {
    const tr = document.createElement('tr')
    Object.values(obj).forEach(el => {
      const td = document.createElement('td')
      td.innerHTML = el
      if (typeof el === 'number') td.style.textAlign = 'right'
      tr.appendChild(td)
    })
    tabela.appendChild(tr)
  })
  return tabela
}

tabela.appendChild(buildTable(MOUNTAINS))
