const WORK_DATA = {
  cases: [
    {
      number: '01',
      title: 'National Grid Outage Scheduler',
      tag: 'Optimisation · Energy Systems',
      year: '2024',
      summary: 'Replaced a four-month manual Excel planning process with a CP-SAT constraint solver. Cut the planning cycle to one month and improved schedule quality by 25%, freeing analyst time for actual analysis instead of Gantt chart maintenance.',
      problem: 'Transpower plans around 2,000 transmission outages per year: lines, transformers, and substations taken offline for maintenance. Each one has hard constraints: N-1 security requirements, contractor availability windows, seasonal demand peaks, and dependencies between adjacent assets. Analysts were doing this in Excel. Not a lightweight spreadsheet. A multi-tab, macro-heavy process that consumed four months of specialist time per cycle and still produced schedules with known inefficiencies nobody could quantify or fix.',
      approach: 'The first attempt was a greedy heuristic. Fast, reasonable output, but it could not guarantee feasibility, and it gave analysts no way to know how far from optimal they were. Scrapped it. Reformulated the problem as a proper constraint satisfaction model using CP-SAT via OR-Tools.\n\nHard constraints (security limits, resource conflicts, mandatory outage windows) were encoded as linear and channelling constraints in Python. Soft constraints like geographic clustering and contractor utilisation patterns became weighted objective terms. The key design decision was keeping every constraint traceable to a named business rule, so analysts could audit why the solver placed an outage where it did.\n\nThe solver outputs a ranked feasible schedule in minutes. Analysts review and refine rather than build from scratch. That shift, from construction to curation, is where most of the time saving came from.',
      outcomes: [
        'Planning cycle: 4 months to 1 month. The recovered time went into review, iteration, and stakeholder alignment, not just speed.',
        '25% improvement in schedule quality against operational efficiency metrics the team defined',
        'In production for Transpower\'s national grid planning cycle',
        'Full annual horizon solved in a single run. Previously required multiple partial passes through the schedule.'
      ],
      tech: ['CP-SAT', 'OR-Tools', 'Python', 'NumPy', 'pandas'],
      github: 'https://github.com/FoshuaJong/maintenance-window-scheduler'
    },
    {
      number: '02',
      title: 'Outage Planning Analytics',
      tag: 'Data Engineering · BI',
      year: '2023',
      summary: 'Replaced a manual, analyst-driven Excel reporting workflow with a Snowflake data warehouse and live Power BI dashboards. Reports went from days-old static files to sub-minute live views. Analyst time spent on reporting dropped 30%.',
      problem: 'Every planning report was an analyst exercise. Extract from operational systems, transform in Excel, paste into PowerPoint, send to leadership, who then made decisions on numbers already two or three days stale. No audit trail. Business logic lived in individual spreadsheets, and two analysts could produce different figures for the same KPI without either being technically wrong by their own definitions. As the outage portfolio grew, reporting effort scaled with headcount. Nobody thought it was sustainable. Nobody had built an alternative.',
      approach: 'Built a centralised Snowflake warehouse as the single source of truth for outage planning data. Schema design was the hardest part. Not technically hard, but getting six analysts to agree on one definition of "active outage" took more meetings than writing the SQL.\n\nAutomated ETL pipelines ingest from operational systems on a scheduled basis, applying consistent business logic that previously lived in personal spreadsheets. Power BI connects directly to Snowflake and delivers live, drill-down views of pipeline status, resource utilisation, and schedule risk.\n\nEvery metric is now version-controlled and auditable. When an executive asks why a number changed between reports, there is an answer.',
      outcomes: [
        '30% reduction in analyst time on reporting (roughly 6 hours per analyst per week recovered)',
        'Reports went from days-old static files to live, sub-minute data',
        'Killed the "which spreadsheet is the source of truth?" problem for key planning KPIs',
        'Dashboards used daily across planning and operations teams'
      ],
      tech: ['Snowflake', 'Power BI', 'SQL', 'Python', 'DAX']
    }
  ]
};
