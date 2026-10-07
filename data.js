export const SITE = {
  name: 'CivicForge Studio',
  url: 'https://simpletickets.xyz',
  description: 'CivicForge Studio builds open-source Discord tools that communities run themselves.'
};

export const releases = [
  {
    id: 'erlc-lite',
    name: 'ERLC Lite',
    status: 'In development',
    summary: 'A self-hosted moderation and utility bot for ER:LC communities.',
    about: [
      'CivicForge ERLC Lite gives communities a local-first Discord bot built for moderation, sessions, logs, infractions and support.',
      'You run the bot on your own hardware, keep the database locally and choose the hosting setup that fits your group.'
    ],
    highlights: ['Open source', 'Self-hosted', 'API ready'],
    requires: ['Node.js', 'Discord bot token', 'ER:LC server key'],
    dashboard: false
  },
  {
    id: 'erlc-lite-dashboard',
    name: 'ERLC Lite & Dashboard',
    status: 'In development',
    summary: 'Everything in Lite plus a browser dashboard and remote settings control.',
    about: [
      'Lite & Dashboard adds a browser-based control panel so you can track bot status, review settings and adjust the server without opening Discord.',
      'It keeps the bot local while giving your community a clean web dashboard for operational tasks.'
    ],
    highlights: ['Dashboard', 'Remote settings', 'Bot status'],
    requires: ['Node.js', 'Discord bot token', 'API key', 'ER:LC server key'],
    dashboard: true
  }
];

export const categories = [
  'api_connection',
  'server_status',
  'player_lookup',
  'postal_lookup',
  'wanted_detection',
  'plate_lookup',
  'mod_call_recovery',
  'warn',
  'kick',
  'ban',
  'unban',
  'timeout',
  'case_history',
  'join_leave_logs',
  'kill_logs',
  'command_logs',
  'moderation_logs',
  'system_logs',
  'session_control',
  'session_status',
  'session_voting',
  'session_quick_join',
  'session_history',
  'infraction_issue',
  'infraction_points',
  'infraction_escalation',
  'infraction_logs',
  'ticket_panel',
  'ticket_claim',
  'ticket_close_reopen',
  'ticket_transcripts',
  'ticket_limits',
  'paid_ads',
  'sponsored_giveaways',
  'feature_switches',
  'embed_styling',
  'ad_field_builder',
  'remote_config'
];

export const features = [
  { id: 'api_connection', category: 'api', name: 'ERLC API connection', blurb: 'Connect your bot to the ERLC API to pull live game data.', in: ['lite', 'dashboard'], status: 'building' },
  { id: 'server_status', category: 'api', name: 'Server status', blurb: 'Check whether the ERLC server is online and healthy.', in: ['lite', 'dashboard'], status: 'building' },
  { id: 'player_lookup', category: 'api', name: 'Player lookup', blurb: 'Look up players and their current server context.', in: ['lite', 'dashboard'], status: 'building' },
  { id: 'postal_lookup', category: 'api', name: 'Postal lookup', blurb: 'Search postal data for the active player state.', in: ['lite', 'dashboard'], status: 'building' },
  { id: 'wanted_detection', category: 'api', name: 'Wanted detection', blurb: 'Surface wanted notices and active alerts.', in: ['lite', 'dashboard'], status: 'building' },
  { id: 'plate_lookup', category: 'api', name: 'Plate lookup', blurb: 'Resolve plate data for quick moderation checks.', in: ['lite', 'dashboard'], status: 'building' },
  { id: 'mod_call_recovery', category: 'api', name: 'Mod call recovery', blurb: 'Recover and track recent moderation call activity.', in: ['lite', 'dashboard'], status: 'building' },

  { id: 'warn', category: 'moderation', name: 'Warning actions', blurb: 'Issue warnings for minor rule breaks and track them.', in: ['lite', 'dashboard'], status: 'building' },
  { id: 'kick', category: 'moderation', name: 'Kick users', blurb: 'Remove disruptive players quickly and cleanly.', in: ['lite', 'dashboard'], status: 'building' },
  { id: 'ban', category: 'moderation', name: 'Ban users', blurb: 'Handle permanent bans with case-backed controls.', in: ['lite', 'dashboard'], status: 'building' },
  { id: 'unban', category: 'moderation', name: 'Unban users', blurb: 'Lift a ban after review and log the reversal.', in: ['lite', 'dashboard'], status: 'building' },
  { id: 'timeout', category: 'moderation', name: 'Timeout users', blurb: 'Place temporary timeouts for short-term enforcement.', in: ['lite', 'dashboard'], status: 'building' },
  { id: 'case_history', category: 'moderation', name: 'Case history', blurb: 'Review recent moderations from an auditable history.', in: ['lite', 'dashboard'], status: 'building' },

  { id: 'join_leave_logs', category: 'logs', name: 'Join and leave logs', blurb: 'Track when users enter and leave the server.', in: ['lite', 'dashboard'], status: 'building' },
  { id: 'kill_logs', category: 'logs', name: 'Kill logs', blurb: 'Capture combat and kill events for review.', in: ['lite', 'dashboard'], status: 'building' },
  { id: 'command_logs', category: 'logs', name: 'Command logs', blurb: 'Record bot command usage for moderation and support.', in: ['lite', 'dashboard'], status: 'building' },
  { id: 'moderation_logs', category: 'logs', name: 'Moderation logs', blurb: 'Keep a log of all actions taken by staff.', in: ['lite', 'dashboard'], status: 'building' },
  { id: 'system_logs', category: 'logs', name: 'System logs', blurb: 'Monitor bot status, health and operational events.', in: ['lite', 'dashboard'], status: 'building' },

  { id: 'session_control', category: 'sessions', name: 'Session control', blurb: 'Start, end and manage active gameplay sessions.', in: ['lite', 'dashboard'], status: 'building' },
  { id: 'session_status', category: 'sessions', name: 'Session status', blurb: 'View current session state and player totals.', in: ['lite', 'dashboard'], status: 'building' },
  { id: 'session_voting', category: 'sessions', name: 'Session voting', blurb: 'Use vote-based session controls for staff operations.', in: ['lite', 'dashboard'], status: 'building' },
  { id: 'session_quick_join', category: 'sessions', name: 'Quick join', blurb: 'Join active sessions faster from the bot and dashboard.', in: ['lite', 'dashboard'], status: 'building' },
  { id: 'session_history', category: 'sessions', name: 'Session history', blurb: 'Look back at completed sessions and their outcomes.', in: ['lite', 'dashboard'], status: 'building' },

  { id: 'infraction_issue', category: 'infractions', name: 'Issue infractions', blurb: 'Record rule infractions with structured notes.', in: ['lite', 'dashboard'], status: 'building' },
  { id: 'infraction_points', category: 'infractions', name: 'Infraction points', blurb: 'Track cumulative points for repeat offenders.', in: ['lite', 'dashboard'], status: 'building' },
  { id: 'infraction_escalation', category: 'infractions', name: 'Escalation', blurb: 'Escalate repeated behavior automatically.', in: ['lite', 'dashboard'], status: 'building' },
  { id: 'infraction_logs', category: 'infractions', name: 'Infraction logs', blurb: 'Keep an audit trail of all infraction actions.', in: ['lite', 'dashboard'], status: 'building' },

  { id: 'ticket_panel', category: 'tickets', name: 'Ticket panel', blurb: 'Run a visible ticket queue for members.', in: ['lite', 'dashboard'], status: 'building' },
  { id: 'ticket_claim', category: 'tickets', name: 'Claim tickets', blurb: 'Let staff claim support tickets and assign ownership.', in: ['lite', 'dashboard'], status: 'building' },
  { id: 'ticket_close_reopen', category: 'tickets', name: 'Close and reopen', blurb: 'Close resolved tickets and reopen when needed.', in: ['lite', 'dashboard'], status: 'building' },
  { id: 'ticket_transcripts', category: 'tickets', name: 'Transcripts', blurb: 'Save ticket conversations for later review.', in: ['lite', 'dashboard'], status: 'building' },
  { id: 'ticket_limits', category: 'tickets', name: 'Ticket limits', blurb: 'Prevent spam and enforce queue thresholds.', in: ['lite', 'dashboard'], status: 'building' },

  { id: 'paid_ads', category: 'ads', name: 'Paid ads', blurb: 'Run premium ad placements inside the dashboard experience.', in: ['lite', 'dashboard'], status: 'planned' },
  { id: 'sponsored_giveaways', category: 'ads', name: 'Sponsored giveaways', blurb: 'Support sponsored giveaway flows for communities.', in: ['lite', 'dashboard'], status: 'planned' },

  { id: 'feature_switches', category: 'branding', name: 'Feature switches', blurb: 'Toggle bot features from the dashboard.', in: ['dashboard'], status: 'planned' },
  { id: 'embed_styling', category: 'branding', name: 'Embed styling', blurb: 'Customize embed colors and branding.', in: ['dashboard'], status: 'planned' },
  { id: 'ad_field_builder', category: 'branding', name: 'Ad field builder', blurb: 'Assemble custom ad fields and layouts.', in: ['dashboard'], status: 'planned' },
  { id: 'remote_config', category: 'branding', name: 'Remote config', blurb: 'Push configuration updates from the dashboard.', in: ['dashboard'], status: 'planned' }
];

export const hosting = [
  { id: 'oracle', name: 'Oracle Cloud Always Free', tag: 'Free', blurb: 'A real Linux VM that stays free for personal and small-community use.', url: 'https://www.oracle.com/cloud/free/' },
  { id: 'google-cloud', name: 'Google Cloud free tier', tag: 'Free', blurb: 'A small e2 instance for a lightweight self-hosted bot.', url: 'https://cloud.google.com/free' },
  { id: 'pebblehost', name: 'PebbleHost', tag: 'Paid', blurb: 'Purpose-built hosting for Discord bots with a simple web panel.', url: 'https://www.pebblehost.com/' },
  { id: 'railway', name: 'Railway', tag: 'Paid', blurb: 'Deploy from GitHub and manage a small Node process without extra ops work.', url: 'https://railway.app/' },
  { id: 'digitalocean', name: 'DigitalOcean', tag: 'Paid', blurb: 'A clean VPS option for stable bot hosting and full control.', url: 'https://www.digitalocean.com/' }
];

export const faq = [
  { q: 'What is the link secret?', a: 'A private code your bot creates the first time it starts and stores as CIVICFORGE_API_KEY. It is used to prove the bot is the same one you authorized.' },
  { q: 'What are rate limits?', a: 'Limits stop abuse and keep the public API stable. A bot or browser can only make a certain number of requests in a given window.' },
  { q: 'Where is my data stored?', a: 'Your bot keeps its database on the server where you run it, in a local SQLite file or your own host storage.' },
  { q: 'Do I need the dashboard?', a: 'No. The dashboard is optional, and the app keeps working locally even if the API is unavailable.' },
  { q: 'Is it open source?', a: 'Yes. CivicForge Studio is designed around open-source code, transparent setup and self-hosted control.' }
];

export const setupSteps = [
  { title: '1. Before you start', html: 'You need a Discord server, an ER:LC server key, a host and Node.js.' },
  { title: '2. Create your Discord bot', html: 'Create an application in the Discord developer portal and copy the token.' },
  { title: '3. Invite the bot to your server', html: 'Add the bot with the required permissions and server scopes.' },
  { title: '4. Download CivicForge', html: 'Clone or download the project into a folder you can manage.' },
  { title: '5. Install Node.js', html: 'Install the current LTS version of Node.js on your server or desktop.' },
  { title: '6. Create your .env file', html: 'Add your Discord bot values and any required API configuration.' },
  { title: '7. Install dependencies', html: 'Run npm install in the project folder to install the runtime dependencies.' },
  { title: '8. Start the bot', html: 'Run the app and confirm the bot is connected to Discord.' },
  { title: '9. Check the API', html: 'Open the CivicForge API page and verify the link secret works.' },
  { title: '10. Configure moderation', html: 'Set your staff roles, logs, sessions and support channels.' },
  { title: '11. If something goes wrong', html: 'Review the logs, rerun install and verify your config values.' }
];

export const legal = {
  privacy: {
    title: 'Privacy policy',
    updated: 'October 6, 2026',
    sections: [
      { h: 'Data that stays with you', html: 'CivicForge tools are self-hosted. Whatever a bot stores, such as moderation cases, tickets, logs and settings, stays on your own host and is never sent to us.' },
      { h: 'Browser storage', html: 'If you tick "Remember this key" on the dashboard login, the key is saved only in your browser. Other basic browser data is kept only to improve the user experience.' },
      { h: 'Infrastructure', html: 'The website and API run on Cloudflare, which processes standard request data such as IP addresses to deliver and protect the service.' }
    ]
  },
  terms: {
    title: 'Terms of service',
    updated: 'October 6, 2026',
    sections: [
      { h: 'Using CivicForge', html: 'By using the CivicForge Studio website, API or software, you agree to these terms.' },
      { h: 'The software', html: 'The software is open source and available for self-hosted use under the project license.' },
      { h: 'Responsibility', html: 'You host and operate your own bots and keep your credentials secure.' },
      { h: 'Not affiliated', html: 'CivicForge Studio is independent. It is not affiliated with or endorsed by Discord, Roblox or the developers of ER:LC.' }
    ]
  },
  credits: {
    title: 'Credits',
    updated: 'October 6, 2026',
    sections: [
      { h: 'Open source and community', html: 'CivicForge is built with public community tools, open-source software and self-hosted infrastructure.' },
      { h: 'Platforms', html: 'This site is built for Cloudflare Workers and uses the language and runtime provided by the platform.' }
    ]
  }
};

export function getRelease(id) {
  return releases.find(function(item) {
    return item.id === id;
  });
}

export function tabsFor(release) {
  var tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Features' }
  ];
  if (release.dashboard) {
    tabs.push({ id: 'dashboard', label: 'Dashboard' });
  }
  tabs.push({ id: 'api', label: 'ERLC API' });
  tabs.push({ id: 'setup', label: 'Setup' });
  tabs.push({ id: 'hosting', label: 'Hosting' });
  tabs.push({ id: 'faq', label: 'FAQ' });
  return tabs;
}

export function featuresFor(release) {
  if (!release) return [];
  var allowed = release.dashboard ? ['lite', 'dashboard'] : ['lite'];
  return features.filter(function(item) {
    return item.in.some(function(entry) {
      return allowed.indexOf(entry) !== -1;
    });
  });
}