
const width = window.innerWidth;
const height = window.innerHeight; 

const svg = d3.select('body').append('body').append('svg')
    .attr('width',width)
    .attr('height',height)

    let t = 0;

    setInterval(() => {
        const data = d3.range(15).map((d,i) => ({
            x: d*60 + 50,
            y: 250 + Math.sin(t+d*0.5)*220,
            r: 20,
        }))
        
      svg
        .selectAll('circle').data(data)
        .data(data)
        .join('circle')
        .attr('r',d => d.r)
        .attr('cx',d => d.x) 
        .attr('cy', d => d.y) 
        
    
    svg
        .selectAll('line')
        .data(data)
        .join('line')
        .attr('x1',d => d.x)
        .attr('y1',d => d.y)
        .attr('x2',(d,i) => {
            const nextElement = data[i+1] 
            if(nextElement){
                return nextElement.x;
            }
            return d.x;
        })
        .attr('y2',(d,i) => {
            const nextElement = data[i+1]
            if(nextElement){
                return nextElement.y;
            }
            return d.y;
        })
        .attr('stroke-width',5)
        .attr('stroke','red')

    t+=0.01
    console.log(t)
    },1000/60)


