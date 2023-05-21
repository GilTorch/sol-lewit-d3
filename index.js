console.log(d3) 
const width = window.innerWidth;
const height = window.innerHeight;

const svg = d3.select('body')
              .append('svg')
              .attr("width",width)
              .attr("height",height);

const renderMask = (selection,id,inverted) => {
    const mask = selection.append('mask')
    .attr('id',id)

    mask
    .append('rect')
    .attr('width',width)
    .attr('height',height)
    .attr('fill', inverted ? 'black' : 'white')


    mask.selectAll('g')
        .data(d3.range(d3.symbols.length))
        .join(enter => 
            enter
                .append('g')
                .append('path')
                .attr('transform',d => `translate(${d*200},${height/2})`)
                .attr('d', d => d3.symbol(d3.symbols[d],10000)())
                .attr('fill',inverted ? 'white' : 'black')
        )
}

svg.call(renderMask,'circle-mask', true)
svg.call(renderMask,'circle-mask-2', false)


const n = 100;


svg.append('g')
    .selectAll('rect')
    .data(d3.range(n))
    .join('rect')
        .attr('y',(d) => d*20)
        .attr('width',width)
        .attr('height',10)
        .attr('mask','url(#circle-mask)')

svg.append('g')
    .selectAll('rect')
    .data(d3.range(n))
    .join('rect')
        .attr('x',d => d*20)
        .attr('width',10)
        .attr('height',height)
        .attr('mask','url(#circle-mask-2)')
