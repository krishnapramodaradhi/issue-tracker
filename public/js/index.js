const issues = [
  {
    count: 10,
    status: 'open',
  },
  {
    count: 20,
    status: 'inprogress',
  },
  {
    count: 15,
    status: 'closed',
  },
]

const width = 500
const height = 400
const marginTop = 30
const marginRight = 30
const marginBottom = 70
const marginLeft = 20

const svg = d3
  .select('#issues-chart')
  .append('svg')
  .attr('width', width + marginLeft + marginRight)
  .attr('height', height + marginTop + marginBottom)
  .attr('class', 'chart')
  .append('g')
  .attr('transform', `translate(${marginLeft},${marginTop})`)

const x = d3
  .scaleBand()
  .domain(issues.map((i) => i.status))
  .range([0, width])
  .padding(0.6)
svg
  .append('g')
  .attr('transform', `translate(0, ${height})`)
  .call(d3.axisBottom(x))
  .selectAll('text')
  .style('text-transform', 'capitalize')

const y = d3
  .scaleLinear()
  .domain([0, Math.max(...issues.map((i) => i.count))])
  .range([height, 0])
svg.append('g').call(d3.axisLeft(y))

svg
  .selectAll()
  .data(issues)
  .join('rect')
  .attr('x', (d) => x(d.status))
  .attr('y', () => y(0))
  .attr('width', x.bandwidth())
  .attr('height', () => height - y(0))
  .attr('fill', 'var(--accent)')

svg
  .selectAll('rect')
  .transition()
  .duration(800)
  .attr('y', (d) => y(d.count))
  .attr('height', (d) => height - y(d.count))
  .delay((_, i) => i * 200)
