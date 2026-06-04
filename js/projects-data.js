/*
 * Project dataset — single source of truth for the Projects grid.
 * Text (title/description) lives in assets/translations/{en,zh}.json,
 * referenced here by key so the bilingual content stays in one place.
 *
 * To add a new project: append one object below. No HTML editing needed.
 *
 * category: "industry" | "academic" | "personal"
 * img path is relative to assets/img/projects/
 */
const PROJECT_IMG = 'assets/img/projects/';

const PROJECTS = [
  /* ---------------- Industry (Aemass Inc.) ---------------- */
  {
    id: 'flowtracking',
    category: 'industry',
    titleKey: 'project-flowtracking-title',
    descKey: 'project-flowtracking-description',
    tags: ['C#', 'Unity', 'LiDAR', 'AWS'],
    images: ['Project_flow_tracking.gif'],
    award: true,
    links: [
      { type: 'video', id: 'm3LKOHJyJo0' },
      { type: 'news', url: 'https://tw.news.yahoo.com/%E7%A0%94%E7%A9%B6%E5%93%A1%E7%AA%81%E7%99%BC%E5%A5%87%E6%83%B3-%E7%94%A8-%E9%80%99%E6%8B%9B-%E9%98%B2%E7%96%AB%E5%8A%A9%E5%A4%9C%E5%B8%82%E4%BA%BA%E6%BD%AE%E5%9B%9E%E6%B5%81-%E9%82%84%E4%BB%A3%E8%A1%A8%E5%8F%B0%E7%81%A3%E5%A5%AA%E4%B8%8B%E5%9C%8B%E9%9A%9B%E5%A4%A7%E7%8D%8E%E5%86%A0%E8%BB%8D-023800215.html' }
    ]
  },
  {
    id: '3dcapturing',
    category: 'industry',
    titleKey: 'project-3dcapturing-title',
    descKey: 'project-3dcapturing-description',
    tags: ['Swift', 'Xcode', 'ARKit', '3D Reconstruction'],
    images: ['Project_3DCapturing_app_1.png', 'Project_3DCapturing_app_2.png', 'Project_3DCapturing_app_3.png', 'Project_3DCapturing_app_4.png'],
    links: [{ type: 'video', id: 'WlB6M4sPqsk' }]
  },
  {
    id: '3dshare',
    category: 'industry',
    titleKey: 'project-3dshare-title',
    descKey: 'project-3dshare-description',
    tags: ['C#', 'Unity', 'AWS Mobile SDK'],
    images: ['Project_3DShareApp_1.png', 'Project_3DShareApp_2.png', 'Project_3DShareApp_3.png'],
    links: [{ type: 'video', id: 'svzFwCrqKVU' }]
  },
  {
    id: '3dshowcases',
    category: 'industry',
    titleKey: 'project-3dshowcases-title',
    descKey: 'project-3dshowcases-description',
    tags: ['C#', 'Unity', 'Point Cloud'],
    images: ['Project_3DShowcases.jpg'],
    links: [{ type: 'video', id: 'IGXtbqeXf7I' }]
  },
  {
    id: 'visionfusion',
    category: 'industry',
    titleKey: 'project-visionfusion-title',
    descKey: 'project-visionfusion-description',
    tags: ['C++', 'Python', 'OpenCV', 'YOLO', 'MediaPipe', 'OpenPose'],
    images: ['Project_VisionFusion.jpg'],
    links: [{ type: 'video', id: '9IFx1fxFdSw' }]
  },
  {
    id: 'arcollective',
    category: 'industry',
    titleKey: 'project-arcollective-title',
    descKey: 'project-arcollective-description',
    tags: ['C#', 'Unity', 'AR Foundation', 'Vuforia', 'ARKit'],
    images: ['Project_AR_Collective.jpg'],
    links: [{ type: 'video', id: 'gMe7UncNxG0' }]
  },
  {
    id: 'motionviz',
    category: 'industry',
    titleKey: 'project-motionviz-title',
    descKey: 'project-motionviz-description',
    tags: ['C#', 'Unity', 'Visualization'],
    images: ['Project_MotionViz.gif'],
    links: [{ type: 'video', id: 'OJfORON8Yf8' }]
  },
  {
    id: 'futurecity',
    category: 'industry',
    titleKey: 'project-futurecity-title',
    descKey: 'project-futurecity-description',
    tags: ['C#', 'Unity', 'AR'],
    images: ['Project_FutureCity_AR.jpg'],
    links: [{ type: 'video', id: '2xNmT0feSnA' }]
  },

  /* ---------------- Academic ---------------- */
  {
    id: 'fishanalysis',
    category: 'academic',
    titleKey: 'project-fishanalysis-title',
    descKey: 'project-fishanalysis-description',
    tags: ['C++', 'OpenCV', 'SVM', 'MFC'],
    images: ['Analyze_water_quality_studying.png'],
    links: [{ type: 'paper', url: 'https://www.researchgate.net/publication/221544440_Analysis_and_comparison_of_fish_posture_by_image_processing' }]
  },
  {
    id: 'freeview3d',
    category: 'academic',
    titleKey: 'project-freeview3d-title',
    descKey: 'project-freeview3d-description',
    tags: ['C++', 'OpenCV', 'OpenGL', 'Bullet Physics'],
    images: ['Demo_3D_display.jpg', 'Demo_3D_display_ani.gif'],
    links: [{ type: 'video', id: 't1k3yY3yXt4' }]
  },
  {
    id: 'peoplecounting',
    category: 'academic',
    titleKey: 'project-peoplecounting-title',
    descKey: 'project-peoplecounting-description',
    tags: ['C++', 'OpenCV', 'MFC'],
    images: ['Demo_people_counting.jpg'],
    links: [{ type: 'video', id: '6PnRjOveOjQ' }]
  },
  {
    id: 'digitalrecognition',
    category: 'academic',
    titleKey: 'project-digitalrecognition-title',
    descKey: 'project-digitalrecognition-description',
    tags: ['MATLAB', 'SVM', 'PCA'],
    images: ['Demo_digital_recognition.gif'],
    links: [{ type: 'video', id: 'bNErVcbvDdc' }]
  },

  /* ---------------- Personal / Weekend ---------------- */
  {
    id: 'stickergenerator',
    category: 'personal',
    titleKey: 'project-stickergenerator-title',
    descKey: 'project-stickergenerator-description',
    tags: ['Python', 'Flask', 'Pillow', 'Web UI'],
    thumb: 'Project_StickerGenerator_success.png',
    images: ['Project_StickerGenerator_main.png', 'Project_StickerGenerator_preview.png', 'Project_StickerGenerator_config.png', 'Project_StickerGenerator_success.png'],
    links: [{ type: 'github', url: 'https://github.com/BigTsung/sticker-generator' }]
  },
  {
    id: 'starttrackingmeals',
    category: 'personal',
    titleKey: 'project-StartTrackingMeals-title',
    descKey: 'project-StartTrackingMeals-description',
    tags: ['SwiftUI', 'iOS', 'Google Gemini AI'],
    images: ['Project_StartTrackingMeals_app.png', 'Project_StartTrackingMeals_app_1.png', 'Project_StartTrackingMeals_app_2.png', 'Project_StartTrackingMeals_app_3.png'],
    links: []
  },
  {
    id: 'recordyourlove',
    category: 'personal',
    titleKey: 'project-TagandTrack-title',
    descKey: 'project-TagandTrack-description',
    tags: ['Swift', 'Xcode', 'Barcode Scan'],
    images: ['Project_RecordYourLove_5.png', 'Project_RecordYourLove_1.PNG', 'Project_RecordYourLove_2.PNG', 'Project_RecordYourLove_3.png', 'Project_RecordYourLove_4.png'],
    links: []
  },
  {
    id: 'didyousmiletoday',
    category: 'personal',
    titleKey: 'project-didYouSmileToday-title',
    descKey: 'project-didYouSmileToday-description',
    tags: ['SwiftUI', 'iOS', 'Vision'],
    images: ['project_did_you_smile_today.png'],
    links: []
  },
  {
    id: 'flagmaster',
    category: 'personal',
    titleKey: 'project-flagMaster-title',
    descKey: 'project-flagMaster-description',
    tags: ['Unity', 'C#', 'JSON'],
    images: ['Project_FlagMaster_1.webp', 'Project_FlagMaster_2.webp', 'Project_FlagMaster_qr-code.png'],
    links: [{ type: 'video', id: 'VgsMC4MeKuU' }]
  },
  {
    id: 'financeapp',
    category: 'personal',
    titleKey: 'project-financeapp-title',
    descKey: 'project-financeapp-description',
    tags: ['Python', 'twstock', 'macOS'],
    images: ['Demo_finance_app.gif'],
    links: [{ type: 'github', url: 'https://github.com/BigTsung/finance_app?tab=readme-ov-file' }]
  },
  {
    id: 'blinkybox',
    category: 'personal',
    titleKey: 'project-blinkybox-title',
    descKey: 'project-blinkybox-description',
    tags: ['DIY', 'Electronics', 'Toy'],
    images: ['Demo_toy_elements_list.JPG', 'Demo_toy_top_view.JPG', 'Demo_toy_ani.gif'],
    links: [{ type: 'video', id: 'P3EKJGTJfL8' }]
  },
  {
    id: 'safeeats',
    category: 'personal',
    titleKey: 'project-safeeats-title',
    descKey: 'project-safeeats-description',
    tags: ['Unity', 'C#'],
    images: ['Dem_baby_protector_search.jpg', 'Dem_baby_protector_add.jpg', 'Dem_baby_protector_ani.gif'],
    links: [{ type: 'github', url: 'https://github.com/BigTsung/pregnant_women_protector/tree/main' }]
  },
  {
    id: 'trashcan',
    category: 'personal',
    titleKey: 'project-trashcan-title',
    descKey: 'project-trashcan-description',
    tags: ['C++', 'Arduino', 'DIY'],
    images: ['result_small_scaling_half.gif'],
    links: [{ type: 'github', url: 'https://github.com/BigTsung/Arduino/tree/master/Smart_Trash_Can' }]
  }
];

/* Filter categories — labelKey points at an existing translation key.
   Order here also drives the tab order and the "All" display order. */
const PROJECT_CATEGORIES = [
  { key: 'all',      labelKey: 'filter-all' },
  { key: 'personal', labelKey: 'weekend-project' },
  { key: 'industry', labelKey: 'industry-project' },
  { key: 'academic', labelKey: 'academic-project' }
];

/* Display priority for the "All" view (lower = shown first). */
const CATEGORY_ORDER = { personal: 0, industry: 1, academic: 2 };

/* Link type -> { translation key, icon } for buttons inside the project modal. */
const LINK_META = {
  video:  { labelKey: 'watch-video',            icon: 'fa-solid fa-play' },
  github: { labelKey: 'view-project-on-GitHub', icon: 'fa-brands fa-github' },
  news:   { labelKey: 'read-news',              icon: 'fa-solid fa-newspaper' },
  paper:  { labelKey: 'read-paper',             icon: 'fa-solid fa-file-lines' }
};
