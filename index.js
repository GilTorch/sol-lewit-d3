const { select, scaleLinear, csv, extent, axisLeft, axisBottom } = d3

const width = window.innerWidth;
const height = window.innerHeight; 

const csvUrl = [
"https://gist.githubusercontent.com/",
"curran/",
"a08a1080b88344b0c8a7/",
"raw/0e7a9b0a5d22642a06d3d5b9bcbad9890c8ee534/",
"iris.csv"
].join('')

const parseRow = (row) => {
    const columns = ['sepal_length', 'sepal_width', 'petal_length', 'petal_width', 'species']
    columns.forEach(column => {
        if(column != "species"){
            row[column] = +row[column]
        }
    })
    return row
}

const svg = select('body')
.append('svg')
.attr('width',width)
.attr('height', height)

const margin = {
    top: 20, 
    right: 20,
    bottom: 20, 
    left: 50, 
}

const xValue = d => d.petal_length;
const yValue = d => d.sepal_length; 

const main = async () => {
  const data = await csv(csvUrl, parseRow)
  const xScale = scaleLinear() 
    .domain(extent(data, xValue))
    .range([margin.left,width - margin.right])

  const yScale = scaleLinear() 
    .domain(extent(data, yValue))
    .range([height - margin.bottom,margin.top])

 const marks = data.map(d => ({
    x: xScale(xValue(d)),
    y: yScale(yValue(d))
 }))

 console.table(marks)

  svg
    .selectAll('circle')
    .data(marks)
    .join('circle') 
    .attr('cx', mark => mark.x)
    .attr('cy', mark => mark.y)
    .attr('r', 5)

  svg
    .append('g')
    .attr('transform', `translate(${margin.left},0)`)
    .call(axisLeft(yScale))

  svg
    .append('g')
    .attr('transform', `translate(0,${height - margin.bottom})`)
    .call(axisBottom(xScale))
}

main()
