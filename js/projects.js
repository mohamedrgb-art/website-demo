'use strict';

/**
 * Central Projects Database & Manager
 * MOHAMEDRGBART Portfolio â€” Single Source of Truth
 */

window.PROJECTS_DATA = [
  {
    id: '1',
    slug: 'formula-one-promo',
    url: 'case-study-1.html',
    title: 'Formula One Promo',
    subtitle: 'A cinematic Formula 1 commercial capturing the speed, intensity and emotion of modern motorsport.',
    category: 'Commercial',
    subCategory: 'Formula 1 Campaign',
    client: 'Personal Project',
    industry: 'Sports Commercial',
    year: '2026',
    role: 'Editing, Motion Graphics, Sound Design',
    rolesList: ['Editing', 'Motion Graphics', 'Sound Design'],
    duration: '0:57',
    coverImage: 'assets/images/f1_thumb.jpg',
    thumbnail: 'assets/images/f1_thumb.jpg',
    videoPoster: 'assets/images/f1-cover.png',
    aspectRatio: '16/9',
    video: 'https://drive.google.com/file/d/1uEyyOfjHxuvt0UJi8hzkOjN69qtP3PCL/preview',
    badge: 'Featured',
    software: [
      { name: 'Adobe Premiere Pro', icon: 'Pr' },
      { name: 'Adobe After Effects', icon: 'Ae' },
      { name: 'Adobe Photoshop', icon: 'Ps' },
      { name: 'Generative AI', icon: 'AI' }
    ],
    projectGoal: {
      heading: 'High Speed. Zero Room for Error.',
      en: 'The goal of this project was to create a complete cinematic commercial without filming a single shot. Using footage collected from different sources, I wanted to demonstrate my ability to take an idea from concept to a polished commercial through storytelling, editing, and sound design.',
      ar: 'Ø§Ù„ÙÙƒØ±Ø© Ù…Ù† Ø§Ù„ÙÙŠØ¯ÙŠÙˆ Ø¯Ù‡ ÙƒØ§Ù†Øª Ø¥Ù†ÙŠ Ø£Ø¹Ù…Ù„ Ø¥Ø¹Ù„Ø§Ù† Ø³ÙŠÙ†Ù…Ø§Ø¦ÙŠ ÙƒØ§Ù…Ù„ Ù…Ù† ØºÙŠØ± Ù…Ø§ Ø£ØµÙˆØ± ÙˆÙ„Ø§ Ø´ÙˆØª Ø¨Ø§Ù„Ø§Ø¹ØªÙ…Ø§Ø¯ Ø¹Ù„Ù‰ Ù„Ù‚Ø·Ø§Øª Ø¬Ù…Ø¹ØªÙ‡Ø§ Ù…Ù† Ù…ØµØ§Ø¯Ø± Ù…Ø®ØªÙ„ÙØ© Ø²ÙŠ Youtube Ùˆ ØºÙŠØ±Ù‡ Ùˆ ÙƒØ§Ù† Ù‡Ø¯ÙÙŠ Ø£ÙˆØ¶Ø­ Ø¥Ù†ÙŠ Ø£Ù‚Ø¯Ø± Ø£Ø­ÙˆÙ„ ÙÙƒØ±Ø© Ø¨Ø³ÙŠØ·Ø© Ù„Ø¥Ø¹Ù„Ø§Ù† ÙƒØ§Ù…Ù„ Ù…Ù† Ø£ÙˆÙ„ Ø§Ù„ÙÙƒØ±Ø© ÙˆØ§Ù„Ø³ÙƒØ±ÙŠØ¨Øª Ù„Ø­Ø¯ Ø§Ù„Ù†Ø³Ø®Ø© Ø§Ù„Ù†Ù‡Ø§Ø¦ÙŠØ©.'
    },
    myApproach: {
      heading: 'My Approach',
      en: 'I started by developing the idea and writing the script with the help of Generative AI, then created the voice-over using AI as well. After collecting the footage, I used Premiere Pro, After Effects, Photoshop, color grading, and sound design to turn separate clips into one cohesive cinematic commercial.',
      ar: 'Ø¨Ø¯Ø£Øª Ø¨ÙƒØªØ§Ø¨Ø© Ø§Ù„ÙÙƒØ±Ø© ÙˆØ§Ù„Ø³ÙƒØ±ÙŠØ¨Øª Ø¨Ù…Ø³Ø§Ø¹Ø¯Ø© Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠØŒ ÙˆØ¨Ø¹Ø¯Ù‡Ø§ Ø¹Ù…Ù„Øª Ø§Ù„ÙÙˆÙŠØ³ Ø£ÙˆÙØ± Ø¨Ù†ÙØ³ Ø§Ù„Ø·Ø±ÙŠÙ‚Ø©. Ø¨Ø¹Ø¯ ÙƒØ¯Ù‡ Ø¬Ù…Ø¹Øª Ø§Ù„Ù„Ù‚Ø·Ø§Øª Ø§Ù„Ù…Ù†Ø§Ø³Ø¨Ø©ØŒ ÙˆØ§Ø³ØªØ®Ø¯Ù…Øª Premiere Pro ÙˆAfter Effects ÙˆPhotoshop Ù…Ø¹ ØªØµØ­ÙŠØ­ Ø§Ù„Ø£Ù„ÙˆØ§Ù† ÙˆØªØµÙ…ÙŠÙ… Ø§Ù„ØµÙˆØª Ø¹Ù„Ø´Ø§Ù† ÙƒÙ„ Ø§Ù„Ù„Ù‚Ø·Ø§Øª ØªØ¨Ø§Ù† ÙƒØ£Ù†Ù‡Ø§ Ù…Ø´Ø±ÙˆØ¹ ÙˆØ§Ø­Ø¯ Ù…ØªØµÙˆØ± Ù…Ø®ØµÙˆØµ.'
    },
    challenges: {
      heading: 'Challenges',
      en: 'The biggest challenge was finding footage from different sources that matched the voice-over and the cinematic pacing I had in mind. Careful shot selection, editing, and rhythm helped transform unrelated clips into one seamless commercial.',
      ar: 'Ø£ÙƒØ¨Ø± ØªØ­Ø¯ÙŠ ÙƒØ§Ù† Ø¥Ù†ÙŠ Ø£Ù„Ø§Ù‚ÙŠ Ù„Ù‚Ø·Ø§Øª Ù…Ù† Ù…ØµØ§Ø¯Ø± Ù…Ø®ØªÙ„ÙØ© ØªÙ…Ø´ÙŠ Ù…Ø¹ Ø§Ù„ÙÙˆÙŠØ³ Ø£ÙˆÙØ± ÙˆØ§Ù„Ø¥ÙŠÙ‚Ø§Ø¹ Ø§Ù„Ù„ÙŠ ÙƒÙ†Øª Ù…ØªØ®ÙŠÙ„Ù‡. Ù‚Ø¶ÙŠØª ÙˆÙ‚Øª ÙÙŠ Ø§Ù„Ø¨Ø­Ø« ÙˆØ§Ø®ØªÙŠØ§Ø± Ø§Ù„Ù„Ù‚Ø·Ø§Øª Ø§Ù„Ù…Ù†Ø§Ø³Ø¨Ø©ØŒ ÙˆØ¨Ø¹Ø¯Ù‡Ø§ Ø§Ø¹ØªÙ…Ø¯Øª Ø¹Ù„Ù‰ Ø§Ù„Ù…ÙˆÙ†ØªØ§Ø¬ ÙˆØ§Ù„Ø¥ÙŠÙ‚Ø§Ø¹ Ø¹Ù„Ø´Ø§Ù† ÙƒÙ„ Ø§Ù„ÙÙŠØ¯ÙŠÙˆÙ‡Ø§Øª ØªØ·Ù„Ø¹ ÙƒØ£Ù†Ù‡Ø§ Ø¥Ø¹Ù„Ø§Ù† ÙˆØ§Ø­Ø¯.'
    },
    workflow: [
      { label: 'Idea', subtext: 'Build excitement before the race even starts.' },
      { label: 'Shoot', subtext: 'Selected the strongest Formula 1 racing moments.' },
      { label: 'Edit', subtext: 'Fast-paced editing synchronized with music and movement.' },
      { label: 'Color', subtext: 'Applied a bold cinematic grade with strong contrast.' },
      { label: 'Sound', subtext: 'Layered engine sounds, impacts, risers and transitions.' },
      { label: 'Deliver', subtext: 'Optimized for social media and digital viewing.' }
    ]
  },
  {
    id: '2',
    slug: 'italian-course-commercial',
    url: 'case-study-2.html',
    title: 'Italian Course Commercial',
    subtitle: 'A cinematic educational commercial designed to transform students\' uncertainty into confidence through storytelling, visual direction, and emotion-driven editing.',
    category: 'Education',
    subCategory: 'Italian Course Campaign',
    client: 'Signorina Marwa',
    industry: 'Education',
    year: '2026',
    role: 'Creative Direction, Shot Planning, Cinematography, Video Editing, Motion Graphics, Color Grading, Sound Design',
    rolesList: ['Creative Direction', 'Cinematography', 'Video Editing', 'Motion Graphics', 'Color Grading', 'Sound Design'],
    duration: '1:01',
    coverImage: 'assets/images/italy_thumb.jpg',
    thumbnail: 'assets/images/italy_thumb.jpg',
    videoPoster: 'assets/images/italy-cover.png',
    aspectRatio: '16/9',
    video: 'https://drive.google.com/file/d/1u02dj9ZrypSbc4tfqgzKthN7iNm6gxJT/preview',
    badge: 'Featured',
    software: [
      { name: 'Adobe Premiere Pro', icon: 'Pr' },
      { name: 'Adobe After Effects', icon: 'Ae' },
      { name: 'DaVinci Resolve', icon: 'Da' },
      { name: 'Adobe Photoshop', icon: 'Ps' },
      { name: 'Generative AI', icon: 'AI' }
    ],
    projectGoal: {
      heading: 'Building Student Confidence',
      en: 'The goal of this commercial was to capture the stress students experience before choosing their elective subject. The story begins with tension and uncertainty, then gradually shifts into a calm and reassuring atmosphere as the instructor explains that the course starts from zero. The objective was to build trust and encourage students to choose Italian.',
      ar: 'Ø§Ù„ÙÙƒØ±Ø© Ù…Ù† Ø§Ù„Ø¥Ø¹Ù„Ø§Ù† ÙƒØ§Ù†Øª Ù†ÙˆØµÙ„ Ù„Ù„Ø·Ø§Ù„Ø¨ Ø§Ù„Ø¥Ø­Ø³Ø§Ø³ Ø§Ù„Ù„ÙŠ Ø¨ÙŠØ­Ø³Ù‡ Ù‚Ø¨Ù„ Ù…Ø§ ÙŠØ®ØªØ§Ø± Ø§Ù„Ù…Ø§Ø¯Ø© ÙˆÙ‡Ùˆ Ø§Ù„ØªÙˆØªØ± ÙˆØ§Ù„Ø®ÙˆÙ Ù…Ù† Ø§Ù„Ù‚Ø±Ø§Ø± Ø¨Ø¯Ø£Ù†Ø§ Ø¨Ø¬Ùˆ Ù…Ø´Ø­ÙˆÙ† Ø¨Ø§Ù„ØªÙˆØªØ± ÙˆØ¨Ø¹Ø¯Ù‡Ø§ Ù‚Ù„Ø¨Ù†Ø§ Ø§Ù„Ø¥Ø­Ø³Ø§Ø³ ØªÙ…Ø§Ù…Ù‹Ø§ Ø£ÙˆÙ„ Ù…Ø§ Ø¯Ø®Ù„Øª Ø§Ù„Ø³ÙŠÙ†ÙŠÙˆØ±Ø© ØªØ·Ù…Ù† Ø§Ù„Ø·Ù„Ø¨Ø© ÙˆØªÙˆØ¶Ø­ Ø¥Ù† Ø§Ù„ÙƒÙˆØ±Ø³ Ø¨ÙŠØ¨Ø¯Ø£ Ù…Ù† Ø§Ù„ØµÙØ± Ø§Ù„Ù‡Ø¯Ù ÙƒØ§Ù† Ø¥Ù† Ø§Ù„Ø·Ø§Ù„Ø¨ ÙŠØ­Ø³ Ø¨Ø§Ù„Ø«Ù‚Ø© ÙˆÙŠØ®ØªØ§Ø± Ù…Ø§Ø¯Ø© Ø§Ù„Ø¥ÙŠØ·Ø§Ù„ÙŠ'
    },
    myApproach: {
      heading: 'My Approach',
      en: 'I handled the project from the planning stage by creating the shot list and selecting the camera angles and shot sizes. I filmed the commercial myself for the first time using an iPhone 17 Pro Max in Apple Log format, then edited it in Premiere Pro, created the motion graphics in After Effects, learned DaVinci Resolve specifically for this project to achieve a cinematic grade, and used Generative AI to help develop the concept and script.',
      ar: 'Ø§Ø´ØªØºÙ„Øª Ø¹Ù„Ù‰ Ø§Ù„Ù…Ø´Ø±ÙˆØ¹ Ù…Ù† Ø£ÙˆÙ„ Ù…Ø±Ø­Ù„Ø© Ø§Ù„ØªØ®Ø·ÙŠØ· ÙØ¹Ù…Ù„Øª Ø§Ù„Ù€ Shot List ÙˆØ§Ø®ØªØ±Øª Ø²ÙˆØ§ÙŠØ§ Ø§Ù„ØªØµÙˆÙŠØ± Ùˆ Ø§Ù„Ù€ Shotsizes ÙˆØ¨Ø¹Ø¯Ù‡Ø§ ØµÙˆØ±Øª Ø§Ù„Ø¥Ø¹Ù„Ø§Ù† Ù„Ø£ÙˆÙ„ Ù…Ø±Ø© Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù… iPhone 17 Pro Max Ø¨ØµÙŠØºØ© Apple Log Ø¹Ù…Ù„Øª Ø§Ù„Ù…ÙˆÙ†ØªØ§Ø¬ ÙÙŠ Premiere Pro ÙˆØ§Ù„Ù…ÙˆØ´Ù† Ø¬Ø±Ø§ÙÙŠÙƒ ÙÙŠ After Effects ÙˆØ§ØªØ¹Ù„Ù…Øª DaVinci Resolve Ù…Ø®ØµÙˆØµ Ù„Ù„Ù…Ø´Ø±ÙˆØ¹ Ø¹Ù„Ø´Ø§Ù† Ø£Ø·Ù„Ø¹ Ø£ÙØ¶Ù„ Ù†ØªÙŠØ¬Ø© ÙÙŠ Ø§Ù„ØªÙ„ÙˆÙŠÙ† ÙˆØ§Ø³ØªØ®Ø¯Ù…Øª Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ ÙÙŠ ØªØ·ÙˆÙŠØ± Ø§Ù„ÙÙƒØ±Ø© ÙˆÙƒØªØ§Ø¨Ø© Ø§Ù„Ø³ÙƒØ±ÙŠØ¨Øª'
    },
    challenges: {
      heading: 'Challenges',
      en: 'The biggest challenge was filming the entire commercial inside a single small room with limited lighting while making it feel like multiple locations. I rearranged the set, optimized the available lighting, and learned DaVinci Resolve to enhance the final look. The entire commercial was planned, filmed, edited, color graded, and delivered within only three days before the school season started.',
      ar: 'Ø£ÙƒØ¨Ø± ØªØ­Ø¯ÙŠ ÙƒØ§Ù† Ø¥Ù† Ø§Ù„ØªØµÙˆÙŠØ± ÙƒÙ„Ù‡ Ø§ØªØ¹Ù…Ù„ ÙÙŠ Ø£ÙˆØ¶Ø© ÙˆØ§Ø­Ø¯Ø© Ø¨Ù…Ø³Ø§Ø­Ø© ÙˆØ¥Ø¶Ø§Ø¡Ø© Ù…Ø­Ø¯ÙˆØ¯Ø© Ù„ÙƒÙ† ØºÙŠØ±Øª ØªÙˆØ²ÙŠØ¹ Ø§Ù„Ø¯ÙŠÙƒÙˆØ± ÙˆØ§Ù„Ø¥Ø¶Ø§Ø¡Ø© Ø¹Ù„Ø´Ø§Ù† Ø£ÙˆØµÙ„ Ø¥Ø­Ø³Ø§Ø³ Ø¥Ù† ÙƒÙ„ Ø¬Ø²Ø¡ Ù…ØªØµÙˆØ± ÙÙŠ Ù…ÙƒØ§Ù† Ù…Ø®ØªÙ„Ù ÙˆØ§ØªØ¹Ù„Ù…Øª DaVinci Resolve Ø¹Ù„Ø´Ø§Ù† Ø£Ø¹ÙˆØ¶ Ù†Ù‚Øµ Ø§Ù„Ø¥Ø¶Ø§Ø¡Ø© Ø¨Ø§Ù„ØªÙ„ÙˆÙŠÙ† ÙˆÙƒÙ…Ø§Ù† ÙƒØ§Ù† Ù„Ø§Ø²Ù… Ø§Ù„Ø¥Ø¹Ù„Ø§Ù† ÙŠØ®Ù„Øµ Ø¨Ø³Ø±Ø¹Ø© Ù„Ø£Ù† Ø§Ù„Ø¯Ø±Ø§Ø³Ø© ÙƒØ§Ù†Øª Ù‡ØªØ¨Ø¯Ø£ Ø¨Ø¹Ø¯ ÙƒØ§Ù… ÙŠÙˆÙ… ÙØªÙ… ØªØµÙˆÙŠØ±Ù‡ ÙˆÙ…ÙˆÙ†ØªØ§Ø¬Ù‡ ÙˆØªØ³Ù„ÙŠÙ…Ù‡ Ø®Ù„Ø§Ù„ 3 Ø£ÙŠØ§Ù… ÙÙ‚Ø·'
    },
    workflow: [
      { label: 'Idea', subtext: 'Turn students\' anxiety into confidence through storytelling.' },
      { label: 'Shoot', subtext: 'Planned every shot to maximize a single small location.' },
      { label: 'Edit', subtext: 'Built emotional pacing using cinematic transitions and rhythm.' },
      { label: 'Color', subtext: 'Created a cold cinematic look that supports the emotional transition.' },
      { label: 'Sound', subtext: 'Designed the sound to move from tension to reassurance.' },
      { label: 'Deliver', subtext: 'Optimized for social media and educational marketing.' }
    ]
  },
  {
    id: '3',
    slug: '36-years',
    url: 'case-study-3.html',
    title: '36 Years',
    subtitle: 'A cinematic football film celebrating Egypt\'s historic return to the World Cup and its journey to the Round of 16.',
    category: 'Commercial',
    subCategory: 'Egypt World Cup Campaign',
    client: 'Personal Project',
    industry: 'Sports / Football',
    year: '2026',
    role: 'Video Editing, Creative Direction, Scriptwriting, Research, Sound Design, Generative AI',
    rolesList: ['Video Editing', 'Creative Direction', 'Scriptwriting', 'Sound Design', 'Generative AI'],
    duration: '1:30',
    coverImage: 'assets/images/36years_thumb.jpg',
    thumbnail: 'assets/images/36years_thumb.jpg',
    videoPoster: 'assets/images/36years-cover.png',
    aspectRatio: '16/9',
    video: 'https://drive.google.com/file/d/1AvWNND22qTPhKX_96FYbDMLugEx4roBA/preview',
    badge: 'Featured',
    software: [
      { name: 'Adobe Premiere Pro', icon: 'Pr' },
      { name: 'Adobe After Effects', icon: 'Ae' },
      { name: 'Adobe Photoshop', icon: 'Ps' },
      { name: 'Generative AI', icon: 'AI' }
    ],
    projectGoal: {
      heading: 'Project Goal',
      en: 'The goal of this project was to capture Egypt reaching the Round of 16 for the first time in its history, following the country\'s return to the World Cup after 36 years. I wanted to turn that moment into a short emotional story that could be released while the event was still fresh and relevant.',
      ar: 'Ø§Ù„ÙÙƒØ±Ø© Ù…Ù† Ø§Ù„ÙÙŠØ¯ÙŠÙˆ ÙƒØ§Ù†Øª Ø¥Ù†ÙŠ Ø£Ø³ØªØºÙ„ ØªØ£Ù‡Ù„ Ù…ØµØ± Ù„Ø¯ÙˆØ± Ø§Ù„Ù€16 Ù„Ø£ÙˆÙ„ Ù…Ø±Ø© ÙÙŠ ØªØ§Ø±ÙŠØ®Ù‡Ø§ØŒ Ø¨Ø¹Ø¯ Ø±Ø¬ÙˆØ¹Ù‡Ø§ Ù„Ù„Ù…Ø´Ø§Ø±ÙƒØ© ÙÙŠ ÙƒØ£Ø³ Ø§Ù„Ø¹Ø§Ù„Ù… Ù„Ø£ÙˆÙ„ Ù…Ø±Ø© Ù…Ù† 36 Ø³Ù†Ø©. Ø­Ø¨ÙŠØª Ø£Ø­ÙˆÙ„ Ø§Ù„Ù„Ø­Ø¸Ø© Ø¯ÙŠ Ù„ÙÙŠØ¯ÙŠÙˆ Ù‚ØµÙŠØ± ÙŠØ­ÙƒÙŠ Ø±Ø­Ù„Ø© Ø§Ù„Ù…Ù†ØªØ®Ø¨ ÙˆØ§Ù„Ø¥Ø­Ø³Ø§Ø³ Ø§Ù„Ù„ÙŠ ÙƒØ§Ù† Ø­ÙˆØ§Ù„ÙŠÙ† Ø§Ù„ØªØ£Ù‡Ù„ØŒ ÙˆÙŠÙƒÙˆÙ† Ù…Ù†Ø§Ø³Ø¨ Ù„Ù„Ù†Ø´Ø± ÙÙŠ Ù†ÙØ³ ÙˆÙ‚Øª Ø§Ù„Ø­Ø¯Ø«.'
    },
    myApproach: {
      heading: 'My Approach',
      en: 'I handled the project from concept and research to scriptwriting, editing, and sound design. I used AI to assist with the script and voice-over, then researched and selected the footage and built the final story around pacing, emotion, and sound.',
      ar: 'Ø§Ø´ØªØºÙ„Øª Ø¹Ù„Ù‰ Ø§Ù„Ù…Ø´Ø±ÙˆØ¹ Ø¨Ø§Ù„ÙƒØ§Ù…Ù„ Ù…Ù† Ø§Ù„ÙÙƒØ±Ø© ÙˆØ§Ù„Ø¨Ø­Ø« ÙˆÙƒØªØ§Ø¨Ø© Ø§Ù„Ø³ÙƒØ±ÙŠØ¨Øª Ù„Ø­Ø¯ Ø§Ù„Ù…ÙˆÙ†ØªØ§Ø¬ ÙˆØªØµÙ…ÙŠÙ… Ø§Ù„ØµÙˆØª. Ø§Ø³ØªØ®Ø¯Ù…Øª Ø§Ù„Ù€ AI ÙÙŠ ÙƒØªØ§Ø¨Ø© Ø§Ù„Ø³ÙƒØ±ÙŠØ¨Øª ÙˆØ¹Ù…Ù„ Ø§Ù„Ù€ Voice OverØŒ ÙˆØ¨Ø¹Ø¯Ù‡Ø§ Ø¬Ù…Ø¹Øª Ø§Ù„Ù„Ù‚Ø·Ø§Øª Ø§Ù„Ù…Ù†Ø§Ø³Ø¨Ø© ÙˆØ¨Ù†ÙŠØª Ù…Ù†Ù‡Ø§ Ø§Ù„Ù‚ØµØ© ÙˆØ§Ù„Ø¥ÙŠÙ‚Ø§Ø¹ ÙˆØ§Ù„Ù…Ø´Ø§Ø¹Ø± Ø§Ù„Ù„ÙŠ ÙƒÙ†Øª Ø¹Ø§ÙŠØ² Ø£ÙˆØµÙ„Ù‡Ø§.'
    },
    challenges: {
      heading: 'Challenges',
      en: 'The biggest challenge was the deadline. The video had to be finished and published the very next day while the event was still fresh. I spent around 18 hours working continuously to make sure the final video was ready in time without compromising the quality.',
      ar: 'Ø£ÙƒØ¨Ø± ØªØ­Ø¯ÙŠ ÙƒØ§Ù† Ø§Ù„ÙˆÙ‚ØªØŒ Ù„Ø£Ù† Ø§Ù„ÙÙŠØ¯ÙŠÙˆ ÙƒØ§Ù† Ù„Ø§Ø²Ù… ÙŠØ®Ù„Øµ ÙˆÙŠØªÙ†Ø´Ø± ØªØ§Ù†ÙŠ ÙŠÙˆÙ… Ù…Ø¨Ø§Ø´Ø±Ø© Ø¨Ø¹Ø¯ Ø§Ù„Ø®Ø±ÙˆØ¬ØŒ ÙÙƒØ§Ù† Ù„Ø§Ø²Ù… Ø£Ø´ØªØºÙ„ Ø¨Ø³Ø±Ø¹Ø© Ø¬Ø¯Ù‹Ø§ Ù…Ù† ØºÙŠØ± Ù…Ø§ Ø£Ø¶Ø­ÙŠ Ø¨Ø¬ÙˆØ¯Ø© Ø§Ù„Ù†ØªÙŠØ¬Ø©. ÙØ¶Ù„Øª Ø­ÙˆØ§Ù„ÙŠ 18 Ø³Ø§Ø¹Ø© Ù…ØªÙˆØ§ØµÙ„ Ø¹Ù„Ù‰ Ø§Ù„Ø¬Ù‡Ø§Ø² Ø¹Ù„Ø´Ø§Ù† Ø§Ù„ÙÙŠØ¯ÙŠÙˆ ÙŠØ·Ù„Ø¹ ÙÙŠ ÙˆÙ‚ØªÙ‡ ÙˆÙŠÙ‚Ø¯Ø± ÙŠØ¹ÙŠØ´ Ø§Ù„Ù„Ø­Ø¸Ø© Ù…Ø¹ Ø§Ù„Ø¬Ù…Ù‡ÙˆØ±.'
    },
    workflow: [
      { label: 'Idea', subtext: 'Turn a historic football moment into an emotional short film.' },
      { label: 'Research', subtext: 'Collected and selected footage that could tell Egypt\'s story and match the narrative.' },
      { label: 'Script', subtext: 'Developed the script with the help of Generative AI.' },
      { label: 'Voice Over', subtext: 'Created the voice-over using AI.' },
      { label: 'Edit', subtext: 'Built the story through pacing, emotional transitions, and cinematic editing.' },
      { label: 'Sound', subtext: 'Designed the sound and music to strengthen the emotional impact.' },
      { label: 'Deliver', subtext: 'Finished and delivered the project under an extremely tight deadline.' }
    ]
  },
  {
    id: '4',
    slug: 'cure-arena-dental',
    url: 'case-study-4.html',
    title: 'Cure Arena â€” Dental Treatment',
    subtitle: 'A creative dental treatment commercial focused on presenting the teeth-cleaning journey in a clean, engaging, and modern way.',
    category: 'Medical',
    subCategory: 'Dental',
    client: 'Cure Arena',
    industry: 'Medical / Dental',
    year: '2026',
    role: 'Video Editing, Sound Design, Color Grading, Motion Graphics',
    rolesList: ['Video Editing', 'Sound Design', 'Color Grading', 'Motion Graphics'],
    duration: '0:34',
    coverImage: 'assets/images/cure_arena_thumb.jpg',
    thumbnail: 'assets/images/cure_arena_thumb.jpg',
    videoPoster: 'assets/images/cure-arena-cover.png',
    aspectRatio: '16/9',
    video: 'https://drive.google.com/file/d/1kNLIei26RqHyA1w0YBVWZsTHcSbvmexR/preview',
    badge: 'Featured',
    software: [
      { name: 'Adobe Premiere Pro', icon: 'Pr' },
      { name: 'Adobe After Effects', icon: 'Ae' }
    ],
    projectGoal: {
      heading: 'Project Goal',
      en: 'The goal was to present a dental treatment journey in a creative and engaging way for the Gulf market. The focus was on making the treatment feel clean, professional, and visually interesting while keeping the content easy to follow.',
      ar: 'Ø§Ù„Ù‡Ø¯Ù Ù…Ù† Ø§Ù„Ø¥Ø¹Ù„Ø§Ù† ÙƒØ§Ù† Ø¥Ù†ÙŠ Ø£Ø¸Ù‡Ø± Ø±Ø­Ù„Ø© ØªÙ†Ø¸ÙŠÙ Ø§Ù„Ø£Ø³Ù†Ø§Ù† Ø¨Ø´ÙƒÙ„ ÙƒØ±ÙŠØªÙŠÙ ÙˆÙ…Ù†Ø§Ø³Ø¨ Ù„Ù„Ø³ÙˆÙ‚ Ø§Ù„Ø®Ù„ÙŠØ¬ÙŠ. Ø±ÙƒØ²Øª Ø¥Ù† Ø´ÙƒÙ„ Ø§Ù„Ø¹Ù„Ø§Ø¬ ÙŠØ¨Ø§Ù† Ù†Ø¶ÙŠÙ ÙˆØ§Ø­ØªØ±Ø§ÙÙŠØŒ ÙˆÙÙŠ Ù†ÙØ³ Ø§Ù„ÙˆÙ‚Øª Ø§Ù„ÙÙŠØ¯ÙŠÙˆ ÙŠÙƒÙˆÙ† Ø®ÙÙŠÙ ÙˆÙ…Ù…ØªØ¹ ÙˆØ³Ù‡Ù„ ÙŠØªØ´Ø§Ù.'
    },
    myApproach: {
      heading: 'My Approach',
      en: 'I worked with the raw footage provided by the client and built the final edit around the treatment journey. I selected a trending track that fit the clinic\'s atmosphere, edited the footage around its tempo, added subtle sound design and smooth transitions, and handled the color grading to create a clean medical look.',
      ar: 'Ø§Ø´ØªØºÙ„Øª Ø¹Ù„Ù‰ Ø§Ù„Ù€ Raw Footage Ø§Ù„Ù„ÙŠ Ø§Ù„Ø¹Ù…ÙŠÙ„ Ø¨Ø¹ØªÙ‡ØŒ ÙˆØ¨Ù†ÙŠØª Ø§Ù„Ù…ÙˆÙ†ØªØ§Ø¬ Ø­ÙˆØ§Ù„ÙŠÙ† Ø±Ø­Ù„Ø© Ø§Ù„Ø¹Ù„Ø§Ø¬. Ø§Ø®ØªØ±Øª Ù…ÙŠÙˆØ²ÙŠÙƒ ØªØ±ÙŠÙ†Ø¯ÙŠ ØªÙƒÙˆÙ† Ù„Ø§ÙŠÙ‚Ø© Ø¹Ù„Ù‰ Ø¬Ùˆ Ø§Ù„Ø¹ÙŠØ§Ø¯Ø©ØŒ ÙˆØ¨Ù†ÙŠØª Ø§Ù„Ù…ÙˆÙ†ØªØ§Ø¬ Ø¹Ù„Ù‰ Ø§Ù„Ù€ Tempo Ø¨ØªØ§Ø¹Ù‡Ø§ØŒ Ù…Ø¹ Sound Design Ø®ÙÙŠÙ ÙˆØªØ±Ø§Ù†Ø²ÙŠØ´Ù† Ù‡Ø§Ø¯ÙŠØ©ØŒ ÙˆÙƒÙ…Ø§Ù† Ø¹Ù…Ù„Øª Ø§Ù„Ù€ Color Grading Ø¹Ù„Ø´Ø§Ù† Ø£Ø·Ù„Ø¹ Ø´ÙƒÙ„ Ù†Ø¶ÙŠÙ ÙŠÙ„ÙŠÙ‚ Ø¨Ø§Ù„Ø¹ÙŠØ§Ø¯Ø©.'
    },
    challenges: {
      heading: 'Challenges',
      en: 'The main challenge was finding a trending track that felt modern enough to keep the video engaging, while still matching the professional atmosphere of a dental clinic. The edit also had to follow the music\'s tempo without making the treatment feel rushed or overly commercial.',
      ar: 'Ø£ÙƒØ¨Ø± ØªØ­Ø¯ÙŠ ÙƒØ§Ù† Ø¥Ù†ÙŠ Ø£Ù„Ø§Ù‚ÙŠ Ù…ÙŠÙˆØ²ÙŠÙƒ ØªØ±ÙŠÙ†Ø¯ÙŠ ØªÙƒÙˆÙ† Ù…ÙˆØ¯Ø±Ù† ÙˆØªØ®Ù„ÙŠ Ø§Ù„ÙÙŠØ¯ÙŠÙˆ Ù…Ù…ØªØ¹ØŒ ÙˆÙÙŠ Ù†ÙØ³ Ø§Ù„ÙˆÙ‚Øª ØªÙ„ÙŠÙ‚ Ø¨Ø¬Ùˆ Ø¹ÙŠØ§Ø¯Ø© Ø§Ù„Ø£Ø³Ù†Ø§Ù† ÙˆØªÙØ¶Ù„ Ø¨Ø±ÙˆÙÙŠØ´Ù†Ø§Ù„. ÙˆÙƒÙ…Ø§Ù† ÙƒØ§Ù† Ù„Ø§Ø²Ù… Ø£Ù…Ø´ÙŠ Ø§Ù„Ù…ÙˆÙ†ØªØ§Ø¬ Ø¹Ù„Ù‰ Ø§Ù„Ù€ Tempo Ù…Ù† ØºÙŠØ± Ù…Ø§ Ø£Ø®Ù„ÙŠ Ø±Ø­Ù„Ø© Ø§Ù„Ø¹Ù„Ø§Ø¬ ØªØ­Ø³ Ø¥Ù†Ù‡Ø§ Ø³Ø±ÙŠØ¹Ø© Ø£Ùˆ Ø£ÙˆÙØ±.'
    },
    workflow: [
      { label: 'Idea', subtext: 'Present the dental treatment journey in a clean and engaging format.' },
      { label: 'Edit', subtext: 'Built the sequence around the treatment process and the rhythm of the music.' },
      { label: 'Music', subtext: 'Selected a trending track that matched the audience and the clinic\'s professional atmosphere.' },
      { label: 'Sound', subtext: 'Added subtle sound design to support the visuals without overpowering them.' },
      { label: 'Transitions', subtext: 'Used smooth transitions to keep the treatment journey natural and easy to follow.' },
      { label: 'Color', subtext: 'Adjusted the raw footage to create a clean and consistent medical look.' }
    ]
  },
  {
    id: '5',
    slug: 'the-capsule-pop-science',
    url: 'case-study-5.html',
    title: 'The Capsule â€” Pop Science Reels',
    subtitle: 'A simple and accessible presentation of scientific content through clean editing, motion graphics, and engaging sound design.',
    category: 'Social Media',
    subCategory: 'Talking Head / Reel',
    client: 'Ali Gilani â€” The Capsule',
    industry: 'Social Media / Pop Science',
    year: '2026',
    role: 'Video Editing, Creative Editing, Motion Graphics, Sound Design',
    rolesList: ['Video Editing', 'Creative Editing', 'Motion Graphics', 'Sound Design'],
    duration: '1:59 & 1:35',
    coverImage: 'assets/images/capsule_thumb.jpg',
    thumbnail: 'assets/images/capsule_thumb.jpg',
    videoPoster: 'assets/images/capsule-cover.png',
    aspectRatio: '9/16',
    video: 'https://drive.google.com/file/d/1zdCBouY6B1uyfQcDSaoCInag5HVLvnPK/preview',
    video2: 'Selected works/Ø§Ù„ÙÙˆØ¯Ø¨Ù„ÙˆØ¬Ø±Ø² 2 (1).mp4',
    badge: 'Featured',
    software: [
      { name: 'Adobe Premiere Pro', icon: 'Pr' },
      { name: 'Adobe After Effects', icon: 'Ae' },
      { name: 'Adobe Photoshop', icon: 'Ps' },
      { name: 'Generative AI', icon: 'AI' }
    ],
    projectGoal: {
      heading: 'Project Goal',
      en: 'The goal was to present scientific content in a simple and accessible way while keeping the edit clean, light, and engaging. The motion graphics were designed to explain and support what was being said without distracting from the information itself.',
      ar: 'Ø§Ù„Ù‡Ø¯Ù ÙƒØ§Ù† ØªÙ‚Ø¯ÙŠÙ… Ù…Ø­ØªÙˆÙ‰ Ø¹Ù„Ù…ÙŠ Ø¨Ø·Ø±ÙŠÙ‚Ø© Ø¨Ø³ÙŠØ·Ø© ÙˆØ³Ù‡Ù„Ø©ØŒ Ù…Ø¹ Ù…ÙˆÙ†ØªØ§Ø¬ Clean ÙˆØ®ÙÙŠÙ ÙŠØ´Ø¯ Ø§Ù„Ø§Ù†ØªØ¨Ø§Ù‡ Ù…Ù† ØºÙŠØ± Ù…Ø§ ÙŠØ´ØªØª Ø¹Ù† Ø§Ù„Ù…Ø¹Ù„ÙˆÙ…Ø©. ÙˆØ§Ø³ØªØ®Ø¯Ù…Øª Ø§Ù„Ù€ Motion Graphics Ø¹Ø´Ø§Ù† ØªØ´Ø±Ø­ ÙˆØªØ¯Ø¹Ù… Ø§Ù„ÙƒÙ„Ø§Ù… Ø§Ù„Ù„ÙŠ Ø¨ÙŠØªÙ‚Ø§Ù„ØŒ Ù…Ø´ Ù…Ø¬Ø±Ø¯ Ø´ÙƒÙ„ ÙˆØ®Ù„Ø§Øµ.'
    },
    myApproach: {
      heading: 'My Approach',
      en: 'I handled the edit from start to finish, beginning with the first cut and hook, then building the subtitles, motion graphics, and sound design around the spoken content. Every editing choice was made to keep the reel engaging while keeping the information at the center.',
      ar: 'Ù…Ù†ØªØ¬Øª Ø§Ù„ÙÙŠØ¯ÙŠÙˆ Ø¨Ø§Ù„ÙƒØ§Ù…Ù„ Ù…Ù† Ø£ÙˆÙ„ Ø§Ù„Ù€ First Cut ÙˆØ§Ù„Ù€ HookØŒ Ù„Ø­Ø¯ Ø§Ù„Ù€ Subtitles ÙˆØ§Ù„Ù€ Motion Graphics ÙˆØ§Ù„Ù€ Sound Design. Ø¨Ù†ÙŠØª Ø§Ù„Ù…ÙˆÙ†ØªØ§Ø¬ ÙƒÙ„Ù‡ Ø­ÙˆØ§Ù„ÙŠÙ† Ø§Ù„ÙƒÙ„Ø§Ù… ÙˆØ§Ù„Ù…Ø¹Ù„ÙˆÙ…Ø©ØŒ Ø¨Ø­ÙŠØ« Ø§Ù„ÙÙŠØ¯ÙŠÙˆ ÙŠÙØ¶Ù„ Ø¬Ø°Ø§Ø¨ Ù…Ù† ØºÙŠØ± Ù…Ø§ Ø§Ù„Ù€ Edit Ù†ÙØ³Ù‡ ÙŠØ§Ø®Ø¯ Ø§Ù„ØªØ±ÙƒÙŠØ² Ù…Ù† Ø§Ù„Ù…Ø­ØªÙˆÙ‰.'
    },
    challenges: {
      heading: 'Challenges',
      en: 'This was my first project working with Pop Science content, so the main challenge was finding the balance between engaging editing and simplicity. The edit had to be interesting enough to hold attention without becoming too heavy or covering up the information the video was built around.',
      ar: 'Ø¯Ù‡ ÙƒØ§Ù† Ø£ÙˆÙ„ ÙÙŠØ¯ÙŠÙˆ Ø£Ø´ØªØºÙ„ Ø¹Ù„ÙŠÙ‡ ÙƒÙ€ Pop ScienceØŒ ÙˆØ£ÙƒØ¨Ø± ØªØ­Ø¯ÙŠ ÙƒØ§Ù† Ø¥Ù†ÙŠ Ø£ÙˆØµÙ„ Ù„Ù„Ù€ Balance Ø¨ÙŠÙ† Ù…ÙˆÙ†ØªØ§Ø¬ ÙŠØ´Ø¯ ÙˆØ¨ÙŠÙ† Ø¥Ù†Ù‡ ÙŠÙØ¶Ù„ Ø¨Ø³ÙŠØ·. ÙƒØ§Ù† Ù„Ø§Ø²Ù… Ø§Ù„ÙÙŠØ¯ÙŠÙˆ ÙŠÙƒÙˆÙ† Ù…Ù…ØªØ¹ ÙˆÙ…Ù„ÙŠØ§Ù† Ø­ÙŠØ§Ø©ØŒ Ø¨Ø³ Ù…Ù† ØºÙŠØ± Ù…Ø§ Ø§Ù„Ù€ Edit ÙŠØ¨Ù‚Ù‰ Over Ø£Ùˆ ÙŠØºØ·ÙŠ Ø¹Ù„Ù‰ Ø§Ù„Ù…Ø¹Ù„ÙˆÙ…Ø© Ø§Ù„Ù„ÙŠ Ø§Ù„ÙÙŠØ¯ÙŠÙˆ Ù…Ø¹Ù…ÙˆÙ„ Ø¹Ø´Ø§Ù†Ù‡Ø§.'
    },
    workflow: [
      { label: 'Idea', subtext: 'Conceptualize scientific facts into digestible narrative beats.' },
      { label: 'First Cut', subtext: 'Assemble raw footage and trim pacing for clear delivery.' },
      { label: 'Hook', subtext: 'Craft an attention-grabbing opening sequence.' },
      { label: 'Subtitles', subtext: 'Design clean and readable subtitle overlays.' },
      { label: 'Motion Graphics', subtext: 'Add visual elements to explain and support complex concepts.' },
      { label: 'Sound Design', subtext: 'Layer background music and audio effects to enhance rhythm.' },
      { label: 'Final Reel', subtext: 'Deliver polished vertical reels optimized for social media.' }
    ]
  },
  {
    id: '6',
    slug: 'maysam-azzam-the-hashoura',
    url: 'case-study-6.html',
    title: 'Maysam Azzam â€” The Hashoura',
    subtitle: 'Why are most pencils yellow? A creative scientific breakdown brought to life with dynamic motion graphics and storytelling.',
    category: 'Social Media',
    subCategory: 'Talking Head / Reel',
    client: 'Maysam Azzam â€” The Hashoura',
    industry: 'Social Media / Pop Science',
    topic: 'Why are most pencils yellow?',
    year: '2026',
    role: 'Video Editing, Motion Graphics, Subtitles, Sound Design',
    rolesList: ['Video Editing', 'Motion Graphics', 'Subtitles', 'Sound Design'],
    duration: '1:07',
    coverImage: 'assets/images/maysam_pencil_thumb.jpg',
    thumbnail: 'assets/images/maysam_pencil_thumb.jpg',
    videoPoster: 'assets/images/maysam-cover.png',
    aspectRatio: '9/16',
    video: 'https://drive.google.com/file/d/1vaCUEQJTUtnoQ-_6bLq2B9IasjGPL5wk/preview',
    badge: 'Featured',
    software: [
      { name: 'Adobe Premiere Pro', icon: 'Pr' },
      { name: 'Adobe After Effects', icon: 'Ae' },
      { name: 'Adobe Photoshop', icon: 'Ps' },
      { name: 'Generative AI', icon: 'AI' }
    ],
    projectGoal: {
      heading: 'Project Goal',
      en: 'The goal was to present a simple scientific answer in an entertaining way and keep the viewer interested throughout the video.',
      ar: 'Ø§Ù„Ù‡Ø¯Ù ÙƒØ§Ù† Ø¥Ù†ÙŠ Ø£Ù‚Ø¯Ù… Ø¥Ø¬Ø§Ø¨Ø© Ø¹Ù„Ù‰ Ø³Ø¤Ø§Ù„ Ø¹Ù„Ù…ÙŠ Ø¨Ø³ÙŠØ· Ø¨Ø·Ø±ÙŠÙ‚Ø© Ù…Ù…ØªØ¹Ø©ØŒ ÙˆØ£Ø®Ù„ÙŠ Ø§Ù„Ù…Ø´Ø§Ù‡Ø¯ Ù…ÙƒÙ…Ù„ Ø§Ù„ÙÙŠØ¯ÙŠÙˆ Ù„Ù„Ø¢Ø®Ø±.'
    },
    myApproach: {
      heading: 'My Approach',
      en: 'I built the edit from the first cut and hook, then used motion graphics heavily to turn the explanation into a visual story. Subtitles and sound design were also used to maintain the pacing and keep the content engaging.',
      ar: 'Ø¨Ù†ÙŠØª Ø§Ù„Ù…ÙˆÙ†ØªØ§Ø¬ Ù…Ù† Ø£ÙˆÙ„ Ø§Ù„Ù€ First Cut ÙˆØ§Ù„Ù€ HookØŒ ÙˆØ§Ø³ØªØ®Ø¯Ù…Øª Ø§Ù„Ù€ Motion Graphics Ø¨Ø´ÙƒÙ„ ÙƒØ¨ÙŠØ± Ø¹Ø´Ø§Ù† Ø£Ø­ÙˆÙ„ Ø§Ù„Ø´Ø±Ø­ Ù„Ù‚ØµØ© Ø¨ØµØ±ÙŠØ©. Ù…Ø¹ Ø§Ù„Ù€ Subtitles ÙˆØ§Ù„Ù€ Sound Design Ø¹Ø´Ø§Ù† Ø£Ø­Ø§ÙØ¸ Ø¹Ù„Ù‰ Ø§Ù„Ù€ Pacing ÙˆØ£Ø®Ù„ÙŠ Ø§Ù„Ù…Ø­ØªÙˆÙ‰ Ù…Ù…ØªØ¹.'
    },
    challenges: {
      heading: 'Challenges',
      en: 'The video was longer than a typical short-form reel, so the main challenge was keeping the viewer engaged without making the motion graphics feel like unnecessary visual noise. Every visual element had to support the information and move the story forward.',
      ar: 'Ø§Ù„ÙÙŠØ¯ÙŠÙˆ ÙƒØ§Ù† Ø£Ø·ÙˆÙ„ Ù…Ù† Ø§Ù„Ø±ÙŠÙ„Ø² Ø§Ù„Ù…Ø¹ØªØ§Ø¯Ø©ØŒ ÙØ§Ù„ØªØ­Ø¯ÙŠ ÙƒØ§Ù† Ø¥Ù†ÙŠ Ø£Ø­Ø§ÙØ¸ Ø¹Ù„Ù‰ Ø§Ù‡ØªÙ…Ø§Ù… Ø§Ù„Ù…Ø´Ø§Ù‡Ø¯ Ù…Ù† ØºÙŠØ± Ù…Ø§ Ø§Ù„Ù€ Motion Graphics ØªØ¨Ù‚Ù‰ Ø²Ø­Ù…Ø© Ø¹Ù„Ù‰ Ø§Ù„Ø´Ø§Ø´Ø©. ÙƒÙ„ Ø­Ø±ÙƒØ© ÙˆÙƒÙ„ Ø¹Ù†ØµØ± ÙƒØ§Ù† Ù„Ø§Ø²Ù… ÙŠØ®Ø¯Ù… Ø§Ù„Ù…Ø¹Ù„ÙˆÙ…Ø© ÙˆÙŠÙƒÙ…Ù„ Ø§Ù„Ù‚ØµØ©.'
    },
    workflow: [
      { label: 'Idea', subtext: 'Conceptualize why pencils are yellow into an engaging explanation.' },
      { label: 'First Cut', subtext: 'Trim talking head footage for optimal pacing and structure.' },
      { label: 'Hook', subtext: 'Design a compelling opening question to lock viewer attention.' },
      { label: 'Subtitles', subtext: 'Format clear dynamic caption overlays.' },
      { label: 'Motion Graphics', subtext: 'Create custom visual animations to illustrate historical facts.' },
      { label: 'Sound Design', subtext: 'Add immersive audio elements and music cues.' },
      { label: 'Final Reel', subtext: 'Render high-quality vertical reel for social media.' }
    ]
  },
  {
    id: '7',
    slug: 'project-7',
    url: 'case-study-7.html',
    title: 'Project 7',
    category: 'Social Media',
    subCategory: 'TBD',
    client: 'TBD',
    industry: 'TBD',
    year: '2026',
    role: 'Content coming soon',
    rolesList: ['Content coming soon'],
    duration: 'TBD',
    coverImage: '',
    thumbnail: '',
    video: '',
    badge: '',
    software: [],
    projectGoal: {
      heading: 'Project Goal',
      en: 'Content coming soon.',
      ar: 'Ø§Ù„Ù…Ø­ØªÙˆÙ‰ Ù‚Ø±ÙŠØ¨Ø§Ù‹.'
    },
    myApproach: {
      heading: 'My Approach',
      en: 'Content coming soon.',
      ar: 'Ø§Ù„Ù…Ø­ØªÙˆÙ‰ Ù‚Ø±ÙŠØ¨Ø§Ù‹.'
    },
    challenges: {
      heading: 'Challenges',
      en: 'Content coming soon.',
      ar: 'Ø§Ù„Ù…Ø­ØªÙˆÙ‰ Ù‚Ø±ÙŠØ¨Ø§Ù‹.'
    },
    workflow: []
  },
  {
    id: '8',
    slug: 'project-8',
    url: 'case-study-8.html',
    title: 'Project 8',
    category: 'Commercial',
    subCategory: 'TBD',
    client: 'TBD',
    industry: 'TBD',
    year: '2026',
    role: 'Content coming soon',
    rolesList: ['Content coming soon'],
    duration: 'TBD',
    coverImage: '',
    thumbnail: '',
    video: '',
    badge: '',
    software: [],
    projectGoal: {
      heading: 'Project Goal',
      en: 'Content coming soon.',
      ar: 'Ø§Ù„Ù…Ø­ØªÙˆÙ‰ Ù‚Ø±ÙŠØ¨Ø§Ù‹.'
    },
    myApproach: {
      heading: 'My Approach',
      en: 'Content coming soon.',
      ar: 'Ø§Ù„Ù…Ø­ØªÙˆÙ‰ Ù‚Ø±ÙŠØ¨Ø§Ù‹.'
    },
    challenges: {
      heading: 'Challenges',
      en: 'Content coming soon.',
      ar: 'Ø§Ù„Ù…Ø­ØªÙˆÙ‰ Ù‚Ø±ÙŠØ¨Ø§Ù‹.'
    },
    workflow: []
  },
  {
    id: '9',
    slug: 'project-9',
    url: 'case-study-9.html',
    title: 'Project 9',
    category: 'Education',
    subCategory: 'TBD',
    client: 'TBD',
    industry: 'TBD',
    year: '2026',
    role: 'Content coming soon',
    rolesList: ['Content coming soon'],
    duration: 'TBD',
    coverImage: '',
    thumbnail: '',
    video: '',
    badge: '',
    software: [],
    projectGoal: {
      heading: 'Project Goal',
      en: 'Content coming soon.',
      ar: 'Ø§Ù„Ù…Ø­ØªÙˆÙ‰ Ù‚Ø±ÙŠØ¨Ø§Ù‹.'
    },
    myApproach: {
      heading: 'My Approach',
      en: 'Content coming soon.',
      ar: 'Ø§Ù„Ù…Ø­ØªÙˆÙ‰ Ù‚Ø±ÙŠØ¨Ø§Ù‹.'
    },
    challenges: {
      heading: 'Challenges',
      en: 'Content coming soon.',
      ar: 'Ø§Ù„Ù…Ø­ØªÙˆÙ‰ Ù‚Ø±ÙŠØ¨Ø§Ù‹.'
    },
    workflow: []
  },
  {
    id: '10',
    slug: 'project-10',
    url: 'case-study-10.html',
    title: 'Project 10',
    category: 'Real Estate',
    subCategory: 'TBD',
    client: 'TBD',
    industry: 'TBD',
    year: '2026',
    role: 'Content coming soon',
    rolesList: ['Content coming soon'],
    duration: 'TBD',
    coverImage: '',
    thumbnail: '',
    video: '',
    badge: '',
    software: [],
    projectGoal: {
      heading: 'Project Goal',
      en: 'Content coming soon.',
      ar: 'Ø§Ù„Ù…Ø­ØªÙˆÙ‰ Ù‚Ø±ÙŠØ¨Ø§Ù‹.'
    },
    myApproach: {
      heading: 'My Approach',
      en: 'Content coming soon.',
      ar: 'Ø§Ù„Ù…Ø­ØªÙˆÙ‰ Ù‚Ø±ÙŠØ¨Ø§Ù‹.'
    },
    challenges: {
      heading: 'Challenges',
      en: 'Content coming soon.',
      ar: 'Ø§Ù„Ù…Ø­ØªÙˆÙ‰ Ù‚Ø±ÙŠØ¨Ø§Ù‹.'
    },
    workflow: []
  }
];

window.ProjectsManager = {
  getAll() {
    return window.PROJECTS_DATA || [];
  },

  getById(id) {
    const list = this.getAll();
    return list.find(p => String(p.id) === String(id) || p.slug === id || p.url.toLowerCase() === String(id).toLowerCase());
  },

  getByUrl(url) {
    const list = this.getAll();
    const cleanUrl = url.split('/').pop().toLowerCase();
    return list.find(p => p.url.toLowerCase() === cleanUrl || p.slug.toLowerCase() === cleanUrl) || list[0];
  },

  getPrevNext(currentIdentifier) {
    const list = this.getAll();
    if (!list.length) return { prev: null, next: null };

    let index = -1;
    if (currentIdentifier) {
      const cleanId = String(currentIdentifier).split('/').pop().toLowerCase();
      index = list.findIndex(p => 
        String(p.id) === cleanId || 
        p.slug.toLowerCase() === cleanId || 
        p.url.toLowerCase() === cleanId
      );
    }

    if (index === -1) index = 0;

    const prevIndex = (index - 1 + list.length) % list.length;
    const nextIndex = (index + 1) % list.length;

    return {
      prev: list[prevIndex],
      next: list[nextIndex],
      current: list[index]
    };
  }
};


