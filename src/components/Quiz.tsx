/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react"
import Question from "./Question"
import Results from "./Results"
import ClientForm from "./ClientForm"

export interface ClientInfo {
  name: string
  email: string
  workoutsPerWeek: number
}

interface QuestionData {
  question: string
  desc?: string
  eachSide?: boolean
  eachSideMessage?: string
  bothSidesTogether?: boolean
  bothSidesTogetherMessage?: string
  numberOfEachSide?: number
  numberOfEachSideMessage?: string[]
  exerciseGroup?: string
}

const questions: QuestionData[] = [
  {
    question: "Dorsiflexion Mobility Test",
    desc: "Record your distance from the wall in inches below",
    eachSide: true,
    exerciseGroup: "Ankle Mobility"
  },
  // {
  //   question: "Wall Sit Test",
  //   desc: "Record the number of seconds you held each test below",
  //   eachSide: true,
  //   eachSideMessage: "Single Leg Wall Sit",
  //   bothSidesTogether: true,
  //   bothSidesTogetherMessage: "Double Leg Wall Sit",
  //   exerciseGroup: "Knee Strength"
  // },
  // {
  //   question: "Side Plank Test",
  //   desc: "Record the number of seconds you held each side below",
  //   eachSide: true,
  //   numberOfEachSide: 2,
  //   numberOfEachSideMessage: ["Version 1", "Version 2"],
  //   exerciseGroup: "Glutueus Medius Strength"
  // },
  // {
  //   question: "Single Leg Bridge Test",
  //   desc: "Record reps below",
  //   eachSide: true,
  //   exerciseGroup: "Gluteus Maximus Strength"
  // },
  // { question: "Hamstring Bridge Test", desc: "Record reps below", eachSide: true, exerciseGroup: "Hamstring Strength" },
  // {
  //   question: "Balance Test",
  //   desc: "Record your results below",
  //   eachSide: true,
  //   numberOfEachSide: 2,
  //   numberOfEachSideMessage: ["Eyes Open", "Eyes Closed"],
  //   exerciseGroup: "Balance"
  // },
  {
    question: "Calf Raise Test",
    desc: "Record reps below",
    eachSide: true,
    exerciseGroup: "Calf Strength"
  }
]

const initializeAnswers = (questions: QuestionData[]) => {
  return questions.map((q) => {
    if (q.eachSide && q.numberOfEachSide) {
      return Array(q.numberOfEachSide * 2 + 1).fill(null)
    } else if (q.eachSide) {
      return [null, null, null]
    } else {
      return [null]
    }
  })
}

// Exercise Plan Generation Code
type Exercise = {
  Month: number
  ExerciseNo: number
  Exercise: string
  Sets: string
  Reps: string
  Hold: string
  Rest: string
  Link: string
  Notes: string
  isAddOn: string
  Category: string
}

type ExerciseCategory = {
  [key: string]: Exercise[]
}

type ExercisePaths = {
  Path: number
  AnkleTestFail: string
  CalfTestFail: string
  WorkoutPerWeekNumber: number
  Workout1: string
  Workout2: string
  Workout3?: string
}

type TestResult = {
  KneeStrength: number
  GluteusMediusStrength: number
  GluteusMaximusStrength: number
  HamstringStrength: number
  Balance: number
  AnkleTestFail: boolean
  CalfTestFail: boolean
}

const masterExerciseList: ExerciseCategory = {
  "Ankle Mobility": [
    {
      Month: 1,
      ExerciseNo: 1,
      Exercise: "Dorsiflexion isolations",
      Sets: "3-4",
      Reps: "work to 70% fatigue",
      Hold: "",
      Rest: "",
      Link: "https://www.youtube.com/shorts/C1Vdz5QJxvU",
      Notes: "",
      isAddOn: "No",
      Category: "Ankle Mobility"
    },
    {
      Month: 2,
      ExerciseNo: 2,
      Exercise: "Ankle isolations in sitting",
      Sets: "3-4",
      Reps: "work to 70% fatigue",
      Hold: "",
      Rest: "",
      Link: "https://youtube.com/shorts/wqQTNNmPDFY",
      Notes: "",
      isAddOn: "No",
      Category: "Ankle Mobility"
    },
    {
      Month: 3,
      ExerciseNo: 3,
      Exercise: "Dorsiflexion in standing",
      Sets: "3-4",
      Reps: "work to 70% fatigue",
      Hold: "",
      Rest: "",
      Link: "https://youtube.com/shorts/CklWwQP8lSg?feature=share",
      Notes: "",
      isAddOn: "No",
      Category: "Ankle Mobility"
    },
    {
      Month: 4,
      ExerciseNo: 4,
      Exercise: "Ankle isolations in sitting",
      Sets: "3-4",
      Reps: "work to 70% fatigue",
      Hold: "",
      Rest: "",
      Link: "https://youtube.com/shorts/wqQTNNmPDFY",
      Notes: "",
      isAddOn: "No",
      Category: "Ankle Mobility"
    },
    {
      Month: 5,
      ExerciseNo: 5,
      Exercise: "Dorsiflexion in standing",
      Sets: "3-4",
      Reps: "work to 70% fatigue",
      Hold: "",
      Rest: "",
      Link: "https://youtube.com/shorts/CklWwQP8lSg?feature=share",
      Notes: "",
      isAddOn: "No",
      Category: "Ankle Mobility"
    },
    {
      Month: 6,
      ExerciseNo: 6,
      Exercise: "pillow Balance with figure 8 rotations",
      Sets: "3-4",
      Reps: "work to 70% fatigue",
      Hold: "",
      Rest: "",
      Link: "",
      Notes: "",
      isAddOn: "No",
      Category: "Ankle Mobility"
    },
    {
      Month: 7,
      ExerciseNo: 7,
      Exercise: "Resisted ankle isolations in standing",
      Sets: "3-4",
      Reps: "work to 70% fatigue",
      Hold: "",
      Rest: "",
      Link: "",
      Notes: "",
      isAddOn: "No",
      Category: "Ankle Mobility"
    },
    {
      Month: 8,
      ExerciseNo: 8,
      Exercise: "Ankle isolations with pronation and supination",
      Sets: "3-4",
      Reps: "work to 70% fatigue",
      Hold: "",
      Rest: "",
      Link: "",
      Notes: "",
      isAddOn: "No",
      Category: "Ankle Mobility"
    }
  ],
  "Knee Strength": [
    {
      Month: 1,
      ExerciseNo: 1,
      Exercise: "Wall sit phase 1",
      Sets: "4",
      Reps: "",
      Hold: "30-60",
      Rest: "2",
      Link: "https://youtube.com/shorts/dgoCYmbIMdc?feature=share",
      Notes: "",
      isAddOn: "No",
      Category: "Knee Strength"
    },
    {
      Month: 2,
      ExerciseNo: 2,
      Exercise: "staggered wall sit - bodyweight",
      Sets: "4",
      Reps: "",
      Hold: "30-60",
      Rest: "2",
      Link: "https://youtube.com/shorts/KjGzted8oHc?feature=share",
      Notes: "Bodyweight only this month. If you need an additional challenge, hold for longer!",
      isAddOn: "No",
      Category: "Knee Strength"
    },
    {
      Month: 3,
      ExerciseNo: 3,
      Exercise: "staggered wall sit - add weight",
      Sets: "4",
      Reps: "",
      Hold: "30-60",
      Rest: "2",
      Link: "https://youtube.com/shorts/KjGzted8oHc?feature=share",
      Notes:
        "Add weight this month to where 30 seconds is challenging and try to increase the amount of time you hold this each week",
      isAddOn: "No",
      Category: "Knee Strength"
    },
    {
      Month: 4,
      ExerciseNo: 4,
      Exercise: "eccentric single leg squats",
      Sets: "3-4",
      Reps: "5",
      Hold: "",
      Rest: "3",
      Link: "https://youtube.com/shorts/Z0YtJb4rAps",
      Notes: "",
      isAddOn: "No",
      Category: "Knee Strength"
    },
    {
      Month: 5,
      ExerciseNo: 5,
      Exercise: "concentric/eccentric single leg squats",
      Sets: "3-4",
      Reps: "5",
      Hold: "",
      Rest: "3",
      Link: "https://youtube.com/shorts/6nVKgbQ-BSE?feature=share",
      Notes: "",
      isAddOn: "No",
      Category: "Knee Strength"
    },
    {
      Month: 6,
      ExerciseNo: 6,
      Exercise: "weighted concentric/eccentric single leg squats",
      Sets: "3-4",
      Reps: "5",
      Hold: "",
      Rest: "3",
      Link: "https://youtube.com/shorts/HJsDh-_2daQ?feature=share",
      Notes: "",
      isAddOn: "No",
      Category: "Knee Strength"
    },
    {
      Month: 7,
      ExerciseNo: 7,
      Exercise: "split squats (+/- weight)",
      Sets: "3-4",
      Reps: "5",
      Hold: "",
      Rest: "3",
      Link: "https://youtube.com/shorts/qYg0viJ3QnM",
      Notes:
        "Once you can complete 3-4 sets of 5 reps with bodyweight and it requires less than 70% of your effort, add weight to where 5 reps does require a 70% effort on your end.",
      isAddOn: "No",
      Category: "Knee Strength"
    },
    {
      Month: 8,
      ExerciseNo: 8,
      Exercise: "split squats (+/- weight)",
      Sets: "3-4",
      Reps: "5",
      Hold: "",
      Rest: "3",
      Link: "https://youtube.com/shorts/qYg0viJ3QnM",
      Notes:
        "Once you can complete 3-4 sets of 5 reps with bodyweight and it requires less than 70% of your effort, add weight to where 5 reps does require a 70% effort on your end.",
      isAddOn: "No",
      Category: "Knee Strength"
    }
  ],
  "Gluteus Medius Strength": [
    {
      Month: 1,
      ExerciseNo: 1,
      Exercise: "isometric clamshells",
      Sets: "3",
      Reps: "",
      Hold: "30-60",
      Rest: "2",
      Link: "https://youtu.be/47wHU6_SvRk",
      Notes: "",
      isAddOn: "No",
      Category: "Gluteus Medius Strength"
    },
    {
      Month: 2,
      ExerciseNo: 2,
      Exercise: "Side plank (knees bent)",
      Sets: "3",
      Reps: "",
      Hold: "30-60",
      Rest: "2",
      Link: "https://vimeo.com/784946812",
      Notes: "",
      isAddOn: "No",
      Category: "Gluteus Medius Strength"
    },
    {
      Month: 3,
      ExerciseNo: 3,
      Exercise: "side plank (knees bent - leg lifted)",
      Sets: "3",
      Reps: "",
      Hold: "30-60",
      Rest: "2",
      Link: "https://youtu.be/SUizQHKyouY?t=31",
      Notes: "Phase 2 (link will take you directly to that version)",
      isAddOn: "No",
      Category: "Gluteus Medius Strength"
    },
    {
      Month: 4,
      ExerciseNo: 4,
      Exercise: "Side plank (knees straight)",
      Sets: "3",
      Reps: "",
      Hold: "30-60",
      Rest: "2",
      Link: "https://vimeo.com/784946719",
      Notes: "",
      isAddOn: "No",
      Category: "Gluteus Medius Strength"
    },
    {
      Month: 5,
      ExerciseNo: 5,
      Exercise: "side plank (knees straight - leg lifts)",
      Sets: "3",
      Reps: "",
      Hold: "30-60",
      Rest: "2",
      Link: "https://youtu.be/SUizQHKyouY?t=57",
      Notes: "Phase 4 (link will take you directly to that version)",
      isAddOn: "No",
      Category: "Gluteus Medius Strength"
    },
    {
      Month: 6,
      ExerciseNo: 6,
      Exercise: "side plank (feet on bench)",
      Sets: "3",
      Reps: "",
      Hold: "30-60",
      Rest: "2",
      Link: "https://youtu.be/xsFdw7Quanw",
      Notes: "Phase 1",
      isAddOn: "No",
      Category: "Gluteus Medius Strength"
    },
    {
      Month: 7,
      ExerciseNo: 7,
      Exercise: "side plank (feet on bench leg lifted)",
      Sets: "3",
      Reps: "5",
      Hold: "",
      Rest: "2",
      Link: "https://youtu.be/CLpMcmqb4pk?t=31",
      Notes: "Phase 2",
      isAddOn: "No",
      Category: "Gluteus Medius Strength"
    },
    {
      Month: 8,
      ExerciseNo: 8,
      Exercise: "side plank (feet on bench leg lifted)",
      Sets: "3",
      Reps: "6-10",
      Hold: "",
      Rest: "2",
      Link: "https://youtu.be/CLpMcmqb4pk?t=31",
      Notes: "Phase 2",
      isAddOn: "No",
      Category: "Gluteus Medius Strength"
    }
  ],
  "Gluteus Maximus Strength": [
    {
      Month: 1,
      ExerciseNo: 1,
      Exercise: "side lying hip abduction",
      Sets: "3",
      Reps: "15-20",
      Hold: "",
      Rest: "3",
      Link: "https://vimeo.com/784953621?share=copy",
      Notes: "",
      isAddOn: "No",
      Category: "Gluteus Maximus Strength"
    },
    {
      Month: 2,
      ExerciseNo: 2,
      Exercise: "feet elevated glute bridge (banded)",
      Sets: "3",
      Reps: "15-20",
      Hold: "",
      Rest: "3",
      Link: "https://www.youtube.com/watch?v=Bae0rjrDSlk",
      Notes: "Place a resistance band around your knees and think about pulling your knees apart as you lift up.",
      isAddOn: "No",
      Category: "Gluteus Maximus Strength"
    },
    {
      Month: 3,
      ExerciseNo: 3,
      Exercise: "single leg glute bridge",
      Sets: "3",
      Reps: "10",
      Hold: "",
      Rest: "3",
      Link: "https://youtu.be/R--dDjYEcjg",
      Notes: "",
      isAddOn: "No",
      Category: "Gluteus Maximus Strength"
    },
    {
      Month: 4,
      ExericiseNo: 4,
      Exercise: "lateral step up",
      Sets: "3",
      Reps: "5",
      Hold: "",
      Rest: "3",
      Link: "https://youtube.com/shorts/kJrCHoN1YEY?feature=share",
      Notes: "",
      isAddOn: "No",
      Category: "Gluteus Maximus Strength"
    },
    {
      Month: 5,
      ExericiseNo: 5,
      Exercise: "staggered bench deadlift",
      Sets: "3",
      Reps: "5",
      Hold: "",
      Rest: "3",
      Link: "https://youtube.com/shorts/zWj8uWoZL6E?feature=share",
      Notes: "",
      isAddOn: "No",
      Category: "Gluteus Maximus Strength"
    },
    {
      Month: 6,
      ExerciseNo: 6,
      Exercise: "staggered bench deadlift",
      Sets: "3",
      Reps: "5",
      Hold: "",
      Rest: "3",
      Link: "https://youtube.com/shorts/zWj8uWoZL6E?feature=share",
      Notes: "",
      isAddOn: "No",
      Category: "Gluteus Maximus Strength"
    },
    {
      Month: 7,
      ExerciseNo: 7,
      Exercise: "front step up",
      Sets: "3",
      Reps: "5",
      Hold: "",
      Rest: "3",
      Link: "https://youtube.com/shorts/3cveP_4V8tA?feature=share",
      Notes: "",
      isAddOn: "No",
      Category: "Gluteus Maximus Strength"
    },
    {
      Month: 8,
      ExerciseNo: 8,
      Exercise: "front step up",
      Sets: "3",
      Reps: "5",
      Hold: "",
      Rest: "3",
      Link: "https://youtube.com/shorts/3cveP_4V8tA?feature=share",
      Notes: "",
      isAddOn: "No",
      Category: "Gluteus Maximus Strength"
    }
  ],
  Balance: [
    {
      Month: 1,
      ExerciseNo: 1,
      Exercise: "Balance progression",
      Sets: "3-4",
      Reps: "",
      Hold: "30-60",
      Rest: "1-2",
      Link: "https://youtube.com/shorts/FsiLPPYzp5U?feature=share",
      Notes:
        "Choose the phase that feels challenging to reach 30 seconds, then try to increase the amount of time you can hold this version each week",
      isAddOn: "No",
      Category: "Balance"
    },
    {
      Month: 2,
      ExerciseNo: 2,
      Exercise: "Balance progression",
      Sets: "3-4",
      Reps: "",
      Hold: "30-60",
      Rest: "1-2",
      Link: "https://youtube.com/shorts/FsiLPPYzp5U?feature=share",
      Notes:
        "Choose the phase that feels challenging to reach 30 seconds, then try to increase the amount of time you can hold this version each week",
      isAddOn: "No",
      Category: "Balance"
    },
    {
      Month: 3,
      ExerciseNo: 3,
      Exercise: "Star Balance with marching/running",
      Sets: "3-4",
      Reps: "working to 70% fatigue",
      Hold: "",
      Rest: "1-2",
      Link: "https://youtube.com/shorts/5Og8IsnHjVA?feature=share",
      Notes: "",
      isAddOn: "No",
      Category: "Balance"
    },
    {
      Month: 4,
      ExerciseNo: 4,
      Exercise: "4 way step series",
      Sets: "3-4",
      Reps: "working to 70% fatigue",
      Hold: "",
      Rest: "1-2",
      Link: "https://youtube.com/shorts/sagSj0_p-vM?feature=share",
      Notes: "",
      isAddOn: "No",
      Category: "Balance"
    },
    {
      Month: 5,
      ExerciseNo: 5,
      Exercise: "Hip airplanes",
      Sets: "3-4",
      Reps: "working to 70% fatigue",
      Hold: "",
      Rest: "1-2",
      Link: "https://youtu.be/uviEzWu8hzU",
      Notes: "",
      isAddOn: "No",
      Category: "Balance"
    },
    {
      Month: 6,
      ExerciseNo: 6,
      Exercise: "4 way step series",
      Sets: "3-4",
      Reps: "working to 70% fatigue",
      Hold: "",
      Rest: "1-2",
      Link: "https://youtube.com/shorts/sagSj0_p-vM?feature=share",
      Notes: "",
      isAddOn: "No",
      Category: "Balance"
    },
    {
      Month: 7,
      ExerciseNo: 7,
      Exercise: "Star Balance with marching/running",
      Sets: "3-4",
      Reps: "working to 70% fatigue",
      Hold: "",
      Rest: "1-2",
      Link: "https://youtube.com/shorts/5Og8IsnHjVA?feature=share",
      Notes: "",
      isAddOn: "No",
      Category: "Balance"
    },
    {
      Month: 8,
      ExerciseNo: 8,
      Exercise: "4 way step series",
      Sets: "3-4",
      Reps: "working to 70% fatigue",
      Hold: "",
      Rest: "1-2",
      Link: "https://youtube.com/shorts/sagSj0_p-vM?feature=share",
      Notes: "",
      isAddOn: "No",
      Category: "Balance"
    }
  ],
  "Foot Strengthening": [
    {
      Month: 1,
      ExerciseNo: 1,
      Exercise: "pointe sequencing",
      Sets: "3-4",
      Reps: "15-20",
      Hold: "",
      Rest: "1-2",
      Link: "https://www.youtube.com/watch?v=ZVszMI2LZcQ&feature=youtu.be",
      Notes:
        "Complete the seated version for now. If this is too challenging, back off the number of reps. If this is too easy, then add reps, not weight.",
      isAddOn: "No",
      Category: "Foot Strengthening"
    },
    {
      Month: 2,
      ExerciseNo: 2,
      Exercise: "pointe sequencing",
      Sets: "3-4",
      Reps: "15-20",
      Hold: "",
      Rest: "1-2",
      Link: "https://www.youtube.com/watch?v=ZVszMI2LZcQ&feature=youtu.be",
      Notes:
        "Complete the seated version for now. If this is too challenging, back off the number of reps. If this is too easy, then add reps, not weight.",
      isAddOn: "No",
      Category: "Foot Strengthening"
    },
    {
      Month: 3,
      ExerciseNo: 3,
      Exercise: "foot doming",
      Sets: "3-4",
      Reps: "10-15",
      Hold: "",
      Rest: "1-2",
      Link: "https://youtu.be/TSKbSC9F0wU",
      Notes: "Find the version that feels most appropriate for you and stick with that one.",
      isAddOn: "No",
      Category: "Foot Strengthening"
    },
    {
      Month: 4,
      ExerciseNo: 4,
      Exercise: "foot doming",
      Sets: "3-4",
      Reps: "10-15",
      Hold: "",
      Rest: "1-2",
      Link: "https://youtu.be/TSKbSC9F0wU",
      Notes: "Find the version that feels most appropriate for you and stick with that one.",
      isAddOn: "No",
      Category: "Foot Strengthening"
    },
    {
      Month: 5,
      ExerciseNo: 5,
      Exercise: "pillow balance",
      Sets: "3-4",
      Reps: "10-15",
      Hold: "",
      Rest: "1-2",
      Link: "",
      Notes: "",
      isAddOn: "No",
      Category: "Foot Strengthening"
    },
    {
      Month: 6,
      ExerciseNo: 6,
      Exercise: "pillow balance with arm motions",
      Sets: "3-4",
      Reps: "10-15",
      Hold: "",
      Rest: "1-2",
      Link: "",
      Notes: "",
      isAddOn: "No",
      Category: "Foot Strengthening"
    },
    {
      Month: 7,
      ExerciseNo: 7,
      Exercise: "pillow balance with arm motions",
      Sets: "3-4",
      Reps: "10-15",
      Hold: "",
      Rest: "1-2",
      Link: "",
      Notes: "",
      isAddOn: "No",
      Category: "Foot Strengthening"
    },
    {
      Month: 8,
      ExerciseNo: 8,
      Exercise: "pillow balance with arm motions",
      Sets: "3-4",
      Reps: "10-15",
      Hold: "",
      Rest: "1-2",
      Link: "",
      Notes: "",
      isAddOn: "No",
      Category: "Foot Strengthening"
    }
  ],
  "Hamstring Strength": [
    {
      Month: 1,
      ExerciseNo: 1,
      Exercise: "Double leg isometric",
      Sets: "3",
      Reps: "4-6",
      Hold: "",
      Rest: "3",
      Link: "https://youtu.be/hjdEmL-gMOY",
      Notes: "",
      isAddOn: "Yes",
      Category: "Hamstring Strength"
    },
    {
      Month: 2,
      ExerciseNo: 2,
      Exercise: "single leg iso",
      Sets: "3",
      Reps: "",
      Hold: "",
      Rest: "3",
      Link: "https://youtu.be/nxfNuIFzZeU",
      Notes: "",
      isAddOn: "No",
      Category: "Hamstring Strength"
    },
    {
      Month: 3,
      ExerciseNo: 3,
      Exercise: "Double leg isometric",
      Sets: "3",
      Reps: "4-6",
      Hold: "",
      Rest: "3",
      Link: "https://youtu.be/Xb00ssqRNjQ",
      Notes: "",
      isAddOn: "No",
      Category: "Hamstring Strength"
    },
    {
      Month: 4,
      ExerciseNo: 4,
      Exercise: "single leg iso",
      Sets: "3",
      Reps: "",
      Hold: "",
      Rest: "3",
      Link: "https://youtu.be/BufwRxMPmHs",
      Notes: "",
      isAddOn: "No",
      Category: "Hamstring Strength"
    },
    {
      Month: 5,
      ExerciseNo: 5,
      Exercise: "Double leg isometric",
      Sets: "3",
      Reps: "4-6",
      Hold: "",
      Rest: "3",
      Link: "https://youtu.be/nxfNuIFzZeU",
      Notes: "",
      isAddOn: "No",
      Category: "Hamstring Strength"
    },
    {
      Month: 6,
      ExerciseNo: 6,
      Exercise: "single leg iso",
      Sets: "3",
      Reps: "",
      Hold: "",
      Rest: "3",
      Link: "https://youtu.be/8Xtv7WzzSYM",
      Notes: "",
      isAddOn: "No",
      Category: "Hamstring Strength"
    },
    {
      Month: 7,
      ExerciseNo: 7,
      Exercise: "double conc/ecc",
      Sets: "3",
      Reps: "4-6",
      Hold: "",
      Rest: "3",
      Link: "https://youtu.be/spMzsuZ_QRs",
      Notes: "",
      isAddOn: "No",
      Category: "Hamstring Strength"
    },
    {
      Month: 8,
      ExerciseNo: 8,
      Exercise: "barbell single leg iso",
      Sets: "3",
      Reps: "4-6",
      Hold: "",
      Rest: "3",
      Link: "https://youtu.be/hPyaXPn8jCY",
      Notes: "",
      isAddOn: "No",
      Category: "Hamstring Strength"
    },
    {
      Month: 9,
      ExerciseNo: 8,
      Exercise: "barbell single leg dynamic",
      Sets: "3",
      Reps: "4-6",
      Hold: "",
      Rest: "3",
      Link: "https://youtu.be/9cetgBe_0hI",
      Notes: "",
      isAddOn: "No",
      Category: "Hamstring Strength"
    },
    {
      Month: 10,
      ExerciseNo: 10,
      Exercise: "dumbell single leg iso",
      Sets: "3",
      Reps: "4-6",
      Hold: "",
      Rest: "3",
      Link: "https://youtu.be/VJtyEAhKd-s",
      Notes: "",
      isAddOn: "No",
      Category: "Hamstring Strength"
    },
    {
      Month: 11,
      ExerciseNo: 11,
      Exercise: "dumbell single leg dynamic",
      Sets: "3",
      Reps: "4-6",
      Hold: "",
      Rest: "3",
      Link: "https://youtu.be/SQ0Kx739fmQ",
      Notes: "",
      isAddOn: "No",
      Category: "Hamstring Strength"
    }
  ],
  "Front Planks": [
    {
      Month: 1,
      ExerciseNo: 1,
      Exercise: "Static front plank",
      Sets: "3-4",
      Reps: "",
      Hold: "30-60",
      Rest: "1-2",
      Link: "https://vimeo.com/784955485",
      Notes: "",
      isAddOn: "Yes",
      Category: "Front Planks"
    },
    {
      Month: 2,
      ExerciseNo: 2,
      Exercise: "front plank with hip extension",
      Sets: "3-4",
      Reps: "",
      Hold: "30-60",
      Rest: "1-2",
      Link: "https://vimeo.com/784947211",
      Notes: "",
      isAddOn: "Yes",
      Category: "Front Planks"
    },
    {
      Month: 3,
      ExerciseNo: 3,
      Exercise: "front plank with leg lifts",
      Sets: "3-4",
      Reps: "",
      Hold: "30-60",
      Rest: "1-2",
      Link: "https://vimeo.com/784947043",
      Notes: "",
      isAddOn: "Yes",
      Category: "Front Planks"
    },
    {
      Month: 4,
      ExerciseNo: 4,
      Exercise: "Bench lifts",
      Sets: "3-4",
      Reps: "",
      Hold: "30-60",
      Rest: "1-2",
      Link: "https://youtu.be/JkBwNA1air4",
      Notes: "",
      isAddOn: "Yes",
      Category: "Front Planks"
    },
    {
      Month: 5,
      ExerciseNo: 5,
      Exercise: "ball lifts",
      Sets: "3-4",
      Reps: "3-5",
      Hold: "",
      Rest: "1-2",
      Link: "https://youtu.be/nqHYCBx4EHo?si=3Vgl9d4fW0H1jjmQ",
      Notes: "",
      isAddOn: "Yes",
      Category: "Front Planks"
    },
    {
      Month: 6,
      ExerciseNo: 6,
      Exercise: "ball lifts",
      Sets: "3-4",
      Reps: "4-7",
      Hold: "",
      Rest: "1-2",
      Link: "https://youtu.be/nqHYCBx4EHo?si=3Vgl9d4fW0H1jjmQ",
      Notes: "",
      isAddOn: "Yes",
      Category: "Front Planks"
    },
    {
      Month: 7,
      ExerciseNo: 7,
      Exercise: "ball lifts",
      Sets: "3-4",
      Reps: "8-10",
      Hold: "",
      Rest: "1-2",
      Link: "https://youtu.be/nqHYCBx4EHo?si=3Vgl9d4fW0H1jjmQ",
      Notes: "",
      isAddOn: "Yes",
      Category: "Front Planks"
    },
    {
      Month: 8,
      ExerciseNo: 8,
      Exercise: "ball lifts",
      Sets: "3-4",
      Reps: "10-15",
      Hold: "",
      Rest: "1-2",
      Link: "https://youtu.be/nqHYCBx4EHo?si=3Vgl9d4fW0H1jjmQ",
      Notes: "",
      isAddOn: "Yes",
      Category: "Front Planks"
    }
  ],
  "Knee Isometrics": [
    {
      Month: 1,
      ExerciseNo: 1,
      Exercise: "Knee isometrics",
      Sets: "4",
      Reps: "",
      Hold: "30-60",
      Rest: "2",
      Link: "https://youtube.com/shorts/x77WsAllbdw",
      Notes: "",
      isAddOn: "Yes",
      Category: "Knee Isometrics"
    },
    {
      Month: 2,
      ExerciseNo: 2,
      Exercise: "Knee isometrics",
      Sets: "4",
      Reps: "",
      Hold: "30-60",
      Rest: "",
      Link: "",
      Notes: "",
      isAddOn: "Yes",
      Category: "Knee Isometrics"
    },
    {
      Month: 3,
      ExerciseNo: 3,
      Exercise: "Knee isometrics",
      Sets: "4",
      Reps: "",
      Hold: "30-60",
      Rest: "",
      Link: "",
      Notes: "",
      isAddOn: "Yes",
      Category: "Knee Isometrics"
    },
    {
      Month: 4,
      ExerciseNo: 4,
      Exercise: "Knee isometrics",
      Sets: "4",
      Reps: "",
      Hold: "30-60",
      Rest: "",
      Link: "",
      Notes: "",
      isAddOn: "Yes",
      Category: "Knee Isometrics"
    },
    {
      Month: 5,
      ExerciseNo: 5,
      Exercise: "Knee isometrics",
      Sets: "4",
      Reps: "",
      Hold: "30-60",
      Rest: "",
      Link: "",
      Notes: "",
      isAddOn: "Yes",
      Category: "Knee Isometrics"
    },
    {
      Month: 6,
      ExerciseNo: 6,
      Exercise: "Knee isometrics",
      Sets: "4",
      Reps: "",
      Hold: "30-60",
      Rest: "",
      Link: "",
      Notes: "",
      isAddOn: "Yes",
      Category: "Knee Isometrics"
    },
    {
      Month: 7,
      ExerciseNo: 7,
      Exercise: "Knee isometrics",
      Sets: "4",
      Reps: "",
      Hold: "30-60",
      Rest: "",
      Link: "",
      Notes: "",
      isAddOn: "Yes",
      Category: "Knee Isometrics"
    },
    {
      Month: 8,
      ExerciseNo: 8,
      Exercise: "Knee isometrics",
      Sets: "4",
      Reps: "",
      Hold: "30-60",
      Rest: "",
      Link: "",
      Notes: "",
      isAddOn: "Yes",
      Category: "Knee Isometrics"
    }
  ]
}

const exercisePaths: ExercisePaths[] = [
  {
    Path: 1,
    AnkleTestFail: "YES",
    CalfTestFail: "YES",
    WorkoutPerWeekNumber: 2,
    Workout1: "Calf Strength, Knee Strength, Gluteus Medius Strength, Foot strength",
    Workout2: "Hamstring Strength, Gluteus Maximus Strength, Balance, Ankle Mobility"
  },
  {
    Path: 2,
    AnkleTestFail: "YES",
    CalfTestFail: "NO",
    WorkoutPerWeekNumber: 2,
    Workout1: "Knee Strength, Gluteus Medius Strength, Hamstring Strength, Foot Strength",
    Workout2: "Gluteus Maximus Strength, Balance, Ankle Mobility, Foot Strength"
  },
  {
    Path: 3,
    AnkleTestFail: "NO",
    CalfTestFail: "YES",
    WorkoutPerWeekNumber: 2,
    Workout1: "Calf Strength, Knee Strength, Gluteus Medius Strength, Hamstring Strength",
    Workout2: "Gluteus Maximus Strength, Balance, Knee Strength isometrics, Foot Strength"
  },
  {
    Path: 4,
    AnkleTestFail: "NO",
    CalfTestFail: "NO",
    WorkoutPerWeekNumber: 2,
    Workout1: "Knee Strength, Gluteus Medius Strength, Hamstring Strength, Foot Strength",
    Workout2: "Gluteus Maximus Strength, Balance, Knee Strength isometrics, Foot Strength"
  },
  {
    Path: 5,
    AnkleTestFail: "YES",
    CalfTestFail: "YES",
    WorkoutPerWeekNumber: 3,
    Workout1: "Calf Strength, Knee Strength, Foot Strength",
    Workout2: "Hamstring Strength, Gluteus Maximus Strength, Ankle Mobility",
    Workout3: "Front Plank, Balance, Gluteus Medius Strength"
  },
  {
    Path: 6,
    AnkleTestFail: "YES",
    CalfTestFail: "NO",
    WorkoutPerWeekNumber: 3,
    Workout1: "Knee Strength, Hamstring Strength, Foot Strength",
    Workout2: "Hamstring Strength, Gluteus Maximus Strength, Ankle Mobility",
    Workout3: "Front Plank, Balance, Gluteus Medius Strength"
  },
  {
    Path: 7,
    AnkleTestFail: "NO",
    CalfTestFail: "YES",
    WorkoutPerWeekNumber: 3,
    Workout1: "Calf Strength, Knee Strength, Hamstring Strength",
    Workout2: "Gluteus Maximus Strength, Knee Strength isometrics, Foot Strength",
    Workout3: "Front Plank, Balance, Gluteus Medius Strength"
  },
  {
    Path: 8,
    AnkleTestFail: "NO",
    CalfTestFail: "NO",
    WorkoutPerWeekNumber: 3,
    Workout1: "Knee Strength, Hamstring Strength, Foot Strength",
    Workout2: "Gluteus Maximus Strength, Knee Strength isometrics, Foot Strength",
    Workout3: "Front Plank, Balance, Gluteus Medius Strength"
  }
]

function getExerciseNumber(score: number, category: string): number {
  if (category === "Knee Strength" || category === "Gluteus Medius Strength") {
    if (score <= 15) return 1
    if (score <= 30) return 2
    if (score <= 60) return 3
    if (score <= 90) return 4
    return 5
  } else if (category === "Hamstring Strength") {
    if (score <= 5) return 1
    if (score <= 10) return 2
    if (score <= 15) return 3
    return 4
  } else if (category === "Gluteus Maximus Strength") {
    if (score <= 10) return 1
    if (score <= 20) return 2
    if (score <= 30) return 3
    return 4
  } else if (category === "Balance") {
    if (score <= 5) return 1
    if (score <= 9) return 2
    return 3
  }
  return 0
}

function generateExercisePlan(testResult: TestResult, month: number): ExercisePaths {
  const {
    KneeStrength,
    HamstringStrength,
    GluteusMediusStrength,
    GluteusMaximusStrength,
    Balance,
    AnkleTestFail,
    CalfTestFail
  } = testResult

  const ankleFail = AnkleTestFail ? "YES" : "NO"
  const calfFail = CalfTestFail ? "YES" : "NO"

  const path = exercisePaths.find((p) => p.AnkleTestFail === ankleFail && p.CalfTestFail === calfFail)
  if (!path) {
    throw new Error("No matching path found for the given test results.")
  }

  const kneeExerciseNo = getExerciseNumber(KneeStrength, "Knee Strength")
  const hamstringExerciseNo = getExerciseNumber(HamstringStrength, "Hamstring Strength")
  const gluteMedExerciseNo = getExerciseNumber(GluteusMediusStrength, "Gluteus Medius Strength")
  const gluteMaxExerciseNo = getExerciseNumber(GluteusMaximusStrength, "Gluteus Maximus Strength")
  const balanceExerciseNo = getExerciseNumber(Balance, "Balance")

  const updatedWorkouts = [path.Workout1, path.Workout2, path.Workout3].filter(Boolean).map((workout) => {
    return workout!
      .split(", ")
      .map((category) => {
        let exerciseNo = 0
        if (category === "Knee Strength") {
          exerciseNo = kneeExerciseNo
        } else if (category === "Hamstring Strength") {
          exerciseNo = hamstringExerciseNo
        } else if (category === "Gluteus Medius Strength") {
          exerciseNo = gluteMedExerciseNo
        } else if (category === "Gluteus Maximus Strength") {
          exerciseNo = gluteMaxExerciseNo
        } else if (category === "Balance") {
          exerciseNo = balanceExerciseNo
        }

        if (category === "Calf Strength" && CalfTestFail) {
          exerciseNo = 1
        }
        if (category === "Ankle Mobility" && AnkleTestFail) {
          exerciseNo = 1
        }

        const exercises = masterExerciseList[category]?.filter((e) => e.Month === month && e.ExerciseNo === exerciseNo)
        return exercises?.length ? exercises[0] : null
      })
      .filter(Boolean)
  })

  return {
    ...path,
    Workout1: updatedWorkouts[0] ? JSON.stringify(updatedWorkouts[0]) : "",
    Workout2: updatedWorkouts[1] ? JSON.stringify(updatedWorkouts[1]) : "",
    Workout3: updatedWorkouts[2] ? JSON.stringify(updatedWorkouts[2]) : ""
  }
}

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[][]>(initializeAnswers(questions))
  const [showResults, setShowResults] = useState(false)
  const [ankleTestFail, setAnkleTestFail] = useState("NO")
  const [calfTestFail, setCalfTestFail] = useState("NO")
  const [clientInfo, setClientInfo] = useState<ClientInfo | null>(null) // State for client information
  const [editMode, setEditMode] = useState(false) // State for edit mode
  const [exercisePlan, setExercisePlan] = useState<ExercisePaths | null>(null) // State for exercise plan

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = parseInt(e.target.value, 10) // Parse input value to number
    if (!isNaN(value)) {
      const newAnswers = [...answers]
      newAnswers[currentQuestion][index] = value
      setAnswers(newAnswers)
    }
  }

  const handleNextClick = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Calculate results
      calculateResults()
      setShowResults(true)
    }
  }

  const calculateResults = () => {
    // Check ankle mobility test
    const ankleTestIndex = questions.findIndex((q) => q.exerciseGroup === "Ankle Mobility")

    if (ankleTestIndex !== -1) {
      const [_, ankleRight, ankleLeft] = answers[ankleTestIndex]
      setAnkleTestFail(ankleRight < 1 || ankleLeft < 1 ? "YES" : "NO")
      console.log("Did ankle test fail?", ankleRight < 1 || ankleLeft < 1 ? "YES" : "NO")
    }
    const calfTestIndex = questions.findIndex((q) => q.exerciseGroup === "Calf Strength")

    if (calfTestIndex !== -1) {
      const [_, calfRight, calfLeft] = answers[calfTestIndex]
      setCalfTestFail(calfRight < 20 || calfLeft < 20 ? "YES" : "NO")
      console.log("Did calf test fail?", calfRight < 20 || calfLeft < 20 ? "YES" : "NO")
    }

    const testResult: TestResult = {
      KneeStrength: answers.find((_, index) => questions[index].exerciseGroup === "Knee Strength")?.[0] || 0,
      HamstringStrength: answers.find((_, index) => questions[index].exerciseGroup === "Hamstring Strength")?.[0] || 0,
      GluteusMediusStrength:
        answers.find((_, index) => questions[index].exerciseGroup === "Gluteus Medius Strength")?.[0] || 0,
      GluteusMaximusStrength:
        answers.find((_, index) => questions[index].exerciseGroup === "Gluteus Maximus Strength")?.[0] || 0,
      Balance: answers.find((_, index) => questions[index].exerciseGroup === "Balance")?.[0] || 0,
      AnkleTestFail: ankleTestFail === "YES",
      CalfTestFail: calfTestFail === "YES"
    }

    // Generate exercise plan
    if (clientInfo) {
      const plan = generateExercisePlan(testResult, 1) // Assuming month 1 for simplicity
      setExercisePlan(plan)
    }
  }

  const handleClientInfoSubmit = (info: ClientInfo) => {
    setClientInfo(info)
    setEditMode(false) // Exit edit mode after submitting
  }

  const handleEditClick = () => {
    setEditMode(true) // Enter edit mode
  }

  const handleCancelEdit = () => {
    setEditMode(false) // Cancel editing and revert changes
  }

  return (
    <div>
      {!clientInfo || editMode ? (
        <ClientForm initialInfo={clientInfo} onSubmit={handleClientInfoSubmit} />
      ) : !showResults ? (
        <>
          <h2>Client Information:</h2>
          <p>Name: {clientInfo.name}</p>
          <p>Email: {clientInfo.email}</p>
          <p>Workouts per Week: {clientInfo.workoutsPerWeek}</p>

          <button onClick={handleEditClick}>Edit</button>

          <Question
            question={questions[currentQuestion].question}
            desc={questions[currentQuestion].desc}
            eachSide={questions[currentQuestion].eachSide}
            eachSideMessage={questions[currentQuestion].eachSideMessage}
            bothSidesTogether={questions[currentQuestion].bothSidesTogether}
            bothSidesTogetherMessage={questions[currentQuestion].bothSidesTogetherMessage}
            numberOfEachSide={questions[currentQuestion].numberOfEachSide}
            numberOfEachSideMessage={questions[currentQuestion].numberOfEachSideMessage}
            exerciseGroup={questions[currentQuestion].exerciseGroup}
            answer={answers[currentQuestion]}
            onAnswerChange={handleAnswerChange}
          />
          <button onClick={handleNextClick}>{currentQuestion < questions.length - 1 ? "Next" : "Finish"}</button>
        </>
      ) : (
        <Results
          ankleTestFail={ankleTestFail}
          calfTestFail={calfTestFail}
          clientInfo={clientInfo}
          exercisePlan={exercisePlan} // Pass the exercise plan to Results
        />
      )}
      {editMode && <button onClick={handleCancelEdit}>Cancel</button>}
    </div>
  )
}

export default Quiz
