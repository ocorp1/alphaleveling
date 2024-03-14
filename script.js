{\rtf1\ansi\ansicpg1252\cocoartf2709
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 let player = \{\
  level: 1,\
  xp: 0,\
  hp: 100,\
  maxHp: 100,\
  strength: 5,\
  stamina: 5,\
  willpower: 5,\
  intelligence: 5,\
  points: 10 // Initial points available for allocation\
\};\
\
const quests = [\
  \{ id: 1, title: 'Prayer', reward: '50 XP', difficulty: 'Easy' \},\
  \{ id: 2, title: '60 Push-ups', reward: '100 XP', difficulty: 'Medium' \},\
  \{ id: 3, title: '4H Study', reward: '500 XP', difficulty: 'Hard' \}\
];\
\
const statsContainer = document.getElementById('stats');\
const questsContainer = document.getElementById('quests');\
const pointsDisplay = document.getElementById('points');\
\
function updateStats() \{\
  statsContainer.innerHTML = `\
    <h2>Player Stats</h2>\
    <p><strong>Level:</strong> $\{player.level\}</p>\
    <p><strong>XP:</strong> $\{player.xp\}</p>\
    <p><strong>HP:</strong> $\{player.hp\}/$\{player.maxHp\}</p>\
    <p><strong>Strength:</strong> $\{player.strength\}</p>\
    <p><strong>Stamina:</strong> $\{player.stamina\}</p>\
    <p><strong>Willpower:</strong> $\{player.willpower\}</p>\
    <p><strong>Intelligence:</strong> $\{player.intelligence\}</p>\
  `;\
\}\
\
function allocatePoint(attribute) \{\
  if (player.points > 0) \{\
    player[attribute]++;\
    player.points--;\
    pointsDisplay.textContent = player.points;\
    updateStats();\
  \} else \{\
    alert('No points available for allocation!');\
  \}\
\}\
\
// Initialize stats display\
updateStats();\
\
// Display quests\
quests.forEach(quest => \{\
  const questElement = document.createElement('div');\
  questElement.classList.add('quest');\
  questElement.innerHTML = `\
    <h2>$\{quest.title\}</h2>\
    <p><strong>Reward:</strong> $\{quest.reward\}</p>\
    <p><strong>Difficulty:</strong> $\{quest.difficulty\}</p>\
    <button onclick="completeQuest($\{quest.id\})">Complete</button>\
  `;\
  questsContainer.appendChild(questElement);\
\});\
}