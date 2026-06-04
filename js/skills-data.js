/*
 * Skills dataset — single source of truth for the Skills section.
 * Each group renders as a card; each item is a chip.
 *
 * item: { name, icon, core? }      core:true = emphasized (primary) chip
 * exploring group items use { labelKey } (translated) + { learning:true }
 *
 * icon: a Font Awesome class ("fa-solid fa-code") or a Devicon class
 *       ("devicon-python-plain colored"). Leave blank for no icon.
 *
 * To add a skill: append an item. To add a group: append a group object.
 */
const SKILL_GROUPS = [
  {
    titleKey: 'skills-languages',
    icon: 'fa-solid fa-code',
    items: [
      { name: 'Python',     icon: 'devicon-python-plain colored',     core: true },
      { name: 'Swift',      icon: 'devicon-swift-plain colored',      core: true },
      { name: 'C++',        icon: 'devicon-cplusplus-plain colored',  core: true },
      { name: 'C#',         icon: 'devicon-csharp-plain colored',     core: true },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
      { name: 'SQL',        icon: 'fa-solid fa-database' }
    ]
  },
  {
    titleKey: 'skills-ai',
    icon: 'fa-solid fa-eye',
    items: [
      { name: 'OpenCV',        icon: 'devicon-opencv-plain colored',  core: true },
      { name: 'PyTorch',       icon: 'devicon-pytorch-original colored', core: true },
      { name: 'YOLO',          icon: 'fa-solid fa-bullseye',          core: true },
      { name: 'MediaPipe',     icon: 'fa-solid fa-hand-pointer' },
      { name: 'OpenPose',      icon: 'fa-solid fa-person-running' },
      { name: 'Apple Vision',  icon: 'fa-brands fa-apple' }
    ]
  },
  {
    titleKey: 'skills-web',
    icon: 'fa-solid fa-server',
    items: [
      { name: 'Flask',        icon: 'devicon-flask-plain colored',  core: true },
      { name: 'SQLAlchemy',   icon: 'fa-solid fa-database',         core: true },
      { name: 'REST API',     icon: 'fa-solid fa-plug',             core: true },
      { name: 'SQLite',       icon: 'devicon-sqlite-plain colored' },
      { name: 'BeautifulSoup',icon: 'fa-solid fa-spider' },
      { name: 'Google OAuth', icon: 'fa-brands fa-google' },
      { name: 'APScheduler',  icon: 'fa-solid fa-clock' }
    ]
  },
  {
    titleKey: 'skills-frontend',
    icon: 'fa-solid fa-palette',
    items: [
      { name: 'HTML5',      icon: 'devicon-html5-plain colored',     core: true },
      { name: 'CSS3',       icon: 'devicon-css3-plain colored',      core: true },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored',core: true },
      { name: 'Bootstrap',  icon: 'devicon-bootstrap-plain colored' },
      { name: 'Chart.js',   icon: 'fa-solid fa-chart-line' },
      { name: 'Responsive', icon: 'fa-solid fa-mobile-screen' }
    ]
  },
  {
    titleKey: 'skills-mobile',
    icon: 'fa-solid fa-mobile-screen-button',
    items: [
      { name: 'SwiftUI',       icon: 'devicon-swift-plain colored', core: true },
      { name: 'ARKit',         icon: 'fa-brands fa-apple',          core: true },
      { name: 'Unity',         icon: 'devicon-unity-plain colored', core: true },
      { name: 'AR Foundation', icon: 'fa-solid fa-vr-cardboard' },
      { name: 'Vuforia',       icon: 'fa-solid fa-vr-cardboard' }
    ]
  },
  {
    titleKey: 'skills-graphics',
    icon: 'fa-solid fa-cube',
    items: [
      { name: 'Open3D',         icon: 'fa-solid fa-cubes-stacked',     core: true },
      { name: 'OpenGL',         icon: 'devicon-opengl-plain colored',  core: true },
      { name: 'PCL',            icon: 'fa-solid fa-braille' },
      { name: 'Blender + Python', icon: 'devicon-blender-original colored' },
      { name: 'Bullet Physics', icon: 'fa-solid fa-atom' },
      { name: 'RGBD Sensors',   icon: 'fa-solid fa-camera' }
    ]
  },
  {
    titleKey: 'skills-cloud',
    icon: 'fa-solid fa-cloud',
    items: [
      { name: 'Docker',       icon: 'devicon-docker-plain colored', core: true },
      { name: 'Git & GitHub', icon: 'devicon-git-plain colored',    core: true },
      { name: 'AWS',          icon: 'fa-brands fa-aws' },
      { name: 'CI/CD',        icon: 'fa-solid fa-arrows-rotate' },
      { name: 'gunicorn',     icon: 'fa-solid fa-server' }
    ]
  },
  {
    titleKey: 'skills-aidev',
    icon: 'fa-solid fa-robot',
    items: [
      { name: 'Claude Code',       icon: 'fa-solid fa-terminal', core: true },
      { name: 'ChatGPT Codex',     icon: 'fa-solid fa-code',     core: true },
      { name: 'Google Antigravity',icon: 'fa-brands fa-google',  core: true },
      { name: 'Google Gemini',     icon: 'fa-solid fa-wand-magic-sparkles' }
    ]
  },
  {
    titleKey: 'skills-exploring',
    icon: 'fa-solid fa-seedling',
    exploring: true,
    items: [
      { labelKey: 'explore-llm',     icon: 'fa-solid fa-robot' },
      { labelKey: 'explore-webtool', icon: 'fa-solid fa-bolt' }
    ]
  }
];
