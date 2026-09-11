/**
 * ALICE ESL Phonics P9 - 大魚吃小魚英文冒險題庫 (data.js)
 * 課本學習範圍：Page 02 - 12
 * 主題：Places Around Town & Vehicles
 */

window.BOOK_ID = "P9";
const FISH_QUESTIONS = [
  {
    "id": "fish-qa-1",
    "type": "QA",
    "source": "ALICE ESL Phonics P9 Page 02 - 12",
    "questionEn": "Can we borrow books at the library?",
    "questionZh": "我們能在圖書館借書嗎？",
    "speechText": "Can we borrow books at the library?",
    "options": [
      "Yes, we can.",
      "No, we can't.",
      "Yes, we walk."
    ],
    "correct": "Yes, we can.",
    "audioFallback": "P9_flashcards_audios/P9_library.mp3",
    "theme": "Places Around Town & Vehicles"
  },
  {
    "id": "fish-qa-2",
    "type": "QA",
    "source": "ALICE ESL Phonics P9 Page 02 - 12",
    "questionEn": "Can you take a taxi to the airport?",
    "questionZh": "你能搭計程車去機場嗎？",
    "speechText": "Can you take a taxi to the airport?",
    "options": [
      "Yes, I can.",
      "No, I can't.",
      "No, I hospital."
    ],
    "correct": "Yes, I can.",
    "audioFallback": "P9_flashcards_audios/P9_airport.mp3",
    "theme": "Places Around Town & Vehicles"
  },
  {
    "id": "fish-qa-3",
    "type": "QA",
    "source": "ALICE ESL Phonics P9 Page 02 - 12",
    "questionEn": "Where do you go to buy medicine?",
    "questionZh": "你去哪裡買藥？",
    "speechText": "Where do you go to buy medicine?",
    "options": [
      "pharmacy",
      "park",
      "zoo"
    ],
    "correct": "pharmacy",
    "audioFallback": "P9_flashcards_audios/P9_pharmacy.mp3",
    "theme": "Places Around Town & Vehicles"
  },
  {
    "id": "fish-qa-4",
    "type": "QA",
    "source": "ALICE ESL Phonics P9 Page 02 - 12",
    "questionEn": "Where can you see wild animals?",
    "questionZh": "你在哪裡能看到野生動物？",
    "speechText": "Where can you see wild animals?",
    "options": [
      "zoo",
      "bank",
      "library"
    ],
    "correct": "zoo",
    "audioFallback": "P9_flashcards_audios/P9_zoo.mp3",
    "theme": "Places Around Town & Vehicles"
  },
  {
    "id": "fish-qa-5",
    "type": "QA",
    "source": "ALICE ESL Phonics P9 Page 02 - 12",
    "questionEn": "Which vehicle puts out fires?",
    "questionZh": "哪種車輛負責滅火？",
    "speechText": "Which vehicle puts out fires?",
    "options": [
      "fire truck",
      "taxi",
      "bus"
    ],
    "correct": "fire truck",
    "audioFallback": "P9_flashcards_audios/P9_fire truck.mp3",
    "theme": "Places Around Town & Vehicles"
  },
  {
    "id": "fish-qa-6",
    "type": "QA",
    "source": "ALICE ESL Phonics P9 Page 02 - 12",
    "questionEn": "Which vehicle takes patients?",
    "questionZh": "哪種車輛運送病患？",
    "speechText": "Which vehicle takes patients?",
    "options": [
      "ambulance",
      "tow truck",
      "police car"
    ],
    "correct": "ambulance",
    "audioFallback": "P9_flashcards_audios/P9_ambulance.mp3",
    "theme": "Places Around Town & Vehicles"
  }
];

if (typeof window !== "undefined") {
  window.FISH_QUESTIONS = FISH_QUESTIONS;
}
