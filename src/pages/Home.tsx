const issues = [
  {
    id: 1,
    title: 'Mongoose Prototype Pollution vulnerability',
    assignedTo: 'abc',
    status: 'open',
  },
  {
    id: 2,
    title:
      'automattic/mongoose vulnerable to Prototype pollution via Schema.path',
    assignedTo: 'abc',
    status: 'open',
  },
  {
    id: 3,
    title: 'Authorization Bypass Through User-Controlled Key in url-parse',
    assignedTo: 'abc',
    status: 'inprogress',
  },
  {
    id: 4,
    title: 'json-schema is vulnerable to Prototype Pollution Critical',
    assignedTo: 'abc',
    status: 'closed',
  },
  {
    id: 5,
    title: 'Remote code execution in handlebars when compiling templates',
    assignedTo: 'abc',
    status: 'closed',
  },
  {
    id: 6,
    title: 'Prototype Pollution in JSON5 via Parse Method',
    assignedTo: 'abc',
    status: 'open',
  },
  {
    id: 7,
    title: 'decode-uri-component vulnerable to Denial of Service (DoS)',
    assignedTo: 'abc',
    status: 'closed',
  },
  {
    id: 8,
    title:
      'loader-utils is vulnerable to Regular Expression Denial of Service (ReDoS)',
    assignedTo: 'abc',
    status: 'open',
  },
]

export default function HomePage() {
  return (
    <div class='home-grid'>
      <div class='issues-summary'>
        <h1>Issues Summary</h1>
        <div class='summary-container'>
          <div>
            <h3>Open</h3>
            <p class='count'>0</p>
          </div>
          <div>
            <h3>In Progress</h3>
            <p class='count'>0</p>
          </div>
          <div>
            <h3>Closed</h3>
            <p class='count'>0</p>
          </div>
        </div>
      </div>
      <div class='issues-chart'>
        <h1>Issues Chart</h1>
        <div class='chart' id='issues-chart'></div>
      </div>
      <div class='recent-issues'>
        <h1>Recent Issues</h1>
        <ul class='issues'>
          {issues.map((i) => (
            <li>
              <a href={`/issues/${i.id}`}>
                <p>{i.title}</p>
                <p class={i.status.toLowerCase()}>{i.status}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
