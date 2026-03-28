const WORK_DATA = {
  cases: [
    {
      number: '01',
      title: 'National Grid Outage Scheduler',
      tag: 'Optimisation · Energy Systems',
      year: '2024',
      summary: 'A constraint programming model that compressed Transpower\'s annual outage planning cycle from four months to one, while improving schedule quality by 25%.',
      problem: 'New Zealand\'s national electricity grid requires roughly 2000 planned outage events per year — transmission lines, transformers, and substations taken out of service for maintenance. Each outage must satisfy hard constraints: N-1 security requirements, contractor availability windows, seasonal demand peaks, and interdependencies between adjacent assets. Analysts were building this schedule manually in Excel, a process that consumed four months of specialist time each planning cycle and still produced schedules with identifiable inefficiencies.',
      approach: 'Reformulated the problem as a constraint satisfaction and optimisation model using Google\'s CP-SAT solver via OR-Tools. Hard constraints — security limits, resource conflicts, mandatory outage windows — were encoded as linear and channelling constraints in Python. Soft constraints, such as geographic clustering of concurrent outages and preferred contractor utilisation patterns, became objective terms in the minimisation function. The solver outputs a ranked feasible schedule in minutes, which analysts review and refine rather than construct from scratch.',
      outcomes: [
        'Planning cycle compressed from 4 months to 1',
        '25% improvement in schedule quality vs. manual baseline',
        'Deployed into production planning workflows at Transpower',
        'Full-year horizon solved in a single run'
      ],
      tech: ['CP-SAT', 'OR-Tools', 'Python', 'NumPy', 'pandas'],
      github: 'https://github.com/FoshuaJong/maintenance-window-scheduler'
    },
    {
      number: '02',
      title: 'Outage Planning Analytics',
      tag: 'Data Engineering · BI',
      year: '2023',
      summary: 'A Snowflake-backed BI framework that replaced manual Excel reporting with live, drill-down dashboards — cutting analyst reporting effort by 30%.',
      problem: 'Planning decisions at Transpower depended on reports built manually: analysts extracting data from operational systems, transforming it in Excel, and producing static PowerPoint decks. Reports were days behind the operational state, produced no shared audit trail, and scaled linearly with headcount as the outage portfolio grew. There was no single source of truth for planning data.',
      approach: 'Designed a centralised data warehouse on Snowflake as the single source of truth for outage planning data. Automated ETL pipelines ingest operational data on a scheduled basis, applying consistent business logic that previously lived in individual analyst spreadsheets. Power BI dashboards connect directly to Snowflake and provide real-time, drill-down views of pipeline status, resource utilisation, and schedule risk. Report logic is now version-controlled and auditable.',
      outcomes: [
        '30% reduction in analyst time spent on reporting',
        'Eliminated manual Excel aggregation for key planning KPIs',
        'Reports went from days-old static files to live, sub-minute data',
        'Dashboards used daily across planning and operations teams'
      ],
      tech: ['Snowflake', 'Power BI', 'SQL', 'Python', 'DAX']
    }
  ]
};
