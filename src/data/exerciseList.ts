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

export const masterExerciseList: ExerciseCategory = {
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
      Hold: "30-60 secs",
      Rest: "2 mins",
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
      Hold: "30-60 secs",
      Rest: "2 mins",
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
      Hold: "30-60 secs",
      Rest: "2 mins",
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
      Rest: "3 mins",
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
      Rest: "3 mins",
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
      Rest: "3 mins",
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
      Rest: "3 mins",
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
      Rest: "3 mins",
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
      Hold: "30-60 secs",
      Rest: "2 mins",
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
      Hold: "30-60 secs",
      Rest: "2 mins",
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
      Hold: "30-60 secs",
      Rest: "2 mins",
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
      Hold: "30-60 secs",
      Rest: "2 mins",
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
      Hold: "30-60 secs",
      Rest: "2 mins",
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
      Hold: "30-60 secs",
      Rest: "2 mins",
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
      Rest: "2 mins",
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
      Rest: "2 mins",
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
      Rest: "3 mins",
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
      Rest: "3 mins",
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
      Rest: "3 mins",
      Link: "https://youtu.be/R--dDjYEcjg",
      Notes: "",
      isAddOn: "No",
      Category: "Gluteus Maximus Strength"
    },
    {
      Month: 4,
      ExerciseNo: 4,
      Exercise: "lateral step up",
      Sets: "3",
      Reps: "5",
      Hold: "",
      Rest: "3 mins",
      Link: "https://youtube.com/shorts/kJrCHoN1YEY?feature=share",
      Notes: "",
      isAddOn: "No",
      Category: "Gluteus Maximus Strength"
    },
    {
      Month: 5,
      ExerciseNo: 5,
      Exercise: "staggered bench deadlift",
      Sets: "3",
      Reps: "5",
      Hold: "",
      Rest: "3 mins",
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
      Rest: "3 mins",
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
      Rest: "3 mins",
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
      Rest: "3 mins",
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
      Hold: "30-60 secs",
      Rest: "1-2 mins",
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
      Hold: "30-60 secs",
      Rest: "1-2 mins",
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
      Rest: "1-2 mins",
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
      Rest: "1-2 mins",
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
      Rest: "1-2 mins",
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
      Rest: "1-2 mins",
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
      Rest: "1-2 mins",
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
      Rest: "1-2 mins",
      Link: "https://youtube.com/shorts/sagSj0_p-vM?feature=share",
      Notes: "",
      isAddOn: "No",
      Category: "Balance"
    }
  ],
  "Foot Strength": [
    {
      Month: 1,
      ExerciseNo: 1,
      Exercise: "pointe sequencing",
      Sets: "3-4",
      Reps: "15-20",
      Hold: "",
      Rest: "1-2 mins",
      Link: "https://www.youtube.com/watch?v=ZVszMI2LZcQ&feature=youtu.be",
      Notes:
        "Complete the seated version for now. If this is too challenging, back off the number of reps. If this is too easy, then add reps, not weight.",
      isAddOn: "No",
      Category: "Foot Strength"
    },
    {
      Month: 2,
      ExerciseNo: 2,
      Exercise: "pointe sequencing",
      Sets: "3-4",
      Reps: "15-20",
      Hold: "",
      Rest: "1-2 mins",
      Link: "https://www.youtube.com/watch?v=ZVszMI2LZcQ&feature=youtu.be",
      Notes:
        "Complete the seated version for now. If this is too challenging, back off the number of reps. If this is too easy, then add reps, not weight.",
      isAddOn: "No",
      Category: "Foot Strength"
    },
    {
      Month: 3,
      ExerciseNo: 3,
      Exercise: "foot doming",
      Sets: "3-4",
      Reps: "10-15",
      Hold: "",
      Rest: "1-2 mins",
      Link: "https://youtube.com/shorts/fqzpi96TQz4?feature=share",
      Notes: "Find the version that feels most appropriate for you and stick with that one.",
      isAddOn: "No",
      Category: "Foot Strength"
    },
    {
      Month: 4,
      ExerciseNo: 4,
      Exercise: "foot doming",
      Sets: "3-4",
      Reps: "10-15",
      Hold: "",
      Rest: "1-2 mins",
      Link: "https://youtu.be/TSKbSC9F0wU",
      Notes: "Find the version that feels most appropriate for you and stick with that one.",
      isAddOn: "No",
      Category: "Foot Strength"
    },
    {
      Month: 5,
      ExerciseNo: 5,
      Exercise: "pillow balance",
      Sets: "3-4",
      Reps: "10-15",
      Hold: "",
      Rest: "1-2 mins",
      Link: "",
      Notes: "",
      isAddOn: "No",
      Category: "Foot Strength"
    },
    {
      Month: 6,
      ExerciseNo: 6,
      Exercise: "pillow balance with arm motions",
      Sets: "3-4",
      Reps: "10-15",
      Hold: "",
      Rest: "1-2 mins",
      Link: "",
      Notes: "",
      isAddOn: "No",
      Category: "Foot Strength"
    },
    {
      Month: 7,
      ExerciseNo: 7,
      Exercise: "pillow balance with arm motions",
      Sets: "3-4",
      Reps: "10-15",
      Hold: "",
      Rest: "1-2 mins",
      Link: "",
      Notes: "",
      isAddOn: "No",
      Category: "Foot Strength"
    },
    {
      Month: 8,
      ExerciseNo: 8,
      Exercise: "pillow balance with arm motions",
      Sets: "3-4",
      Reps: "10-15",
      Hold: "",
      Rest: "1-2 mins",
      Link: "",
      Notes: "",
      isAddOn: "No",
      Category: "Foot Strength"
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
      Rest: "3 mins",
      Link: "https://youtu.be/hjdEmL-gMOY",
      Notes: "",
      isAddOn: "No",
      Category: "Hamstring Strength"
    },
    {
      Month: 2,
      ExerciseNo: 2,
      Exercise: "single leg iso",
      Sets: "3",
      Reps: "",
      Hold: "",
      Rest: "3 mins",
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
      Rest: "3 mins",
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
      Rest: "3 mins",
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
      Rest: "3 mins",
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
      Rest: "3 mins",
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
      Rest: "3 mins",
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
      Rest: "3 mins",
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
      Rest: "3 mins",
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
      Rest: "3 mins",
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
      Rest: "3 mins",
      Link: "https://youtu.be/SQ0Kx739fmQ",
      Notes: "",
      isAddOn: "No",
      Category: "Hamstring Strength"
    }
  ],
  "Calf Strength": [
    {
      Month: 1,
      ExerciseNo: 1,
      Exercise: "Calf raise progression",
      Sets: "3",
      Reps: "25",
      Hold: "",
      Rest: "",
      Link: "https://youtube.com/shorts/vwUR3nCmIN8?feature=share",
      Notes: "",
      isAddOn: "No",
      Category: "Calf Strength"
    },
    {
      Month: 2,
      ExerciseNo: 2,
      Exercise: "Calf raise progression",
      Sets: "3",
      Reps: "25",
      Hold: "",
      Rest: "",
      Link: "https://youtube.com/shorts/vwUR3nCmIN8?feature=share",
      Notes: "",
      isAddOn: "No",
      Category: "Calf Strength"
    },
    {
      Month: 3,
      ExerciseNo: 3,
      Exercise: "3 way calf raise",
      Sets: "3",
      Reps: "25",
      Hold: "",
      Rest: "",
      Link: "https://youtube.com/shorts/hkz9hQlMgXw?feature=share",
      Notes: "",
      isAddOn: "No",
      Category: "Calf Strength"
    },
    {
      Month: 4,
      ExerciseNo: 4,
      Exercise: "Weighted single leg calf raises (isometric or dynamic)",
      Sets: "3-4",
      Reps: "5",
      Hold: "",
      Rest: "",
      Link: "https://youtube.com/shorts/0w67SFJQ6Zk?feature=share",
      Notes: "",
      isAddOn: "No",
      Category: "Calf Strength"
    },
    {
      Month: 5,
      ExerciseNo: 5,
      Exercise: "Weighted single leg calf raises (isometric or dynamic)",
      Sets: "3-4",
      Reps: "5",
      Hold: "",
      Rest: "",
      Link: "https://youtube.com/shorts/0w67SFJQ6Zk?feature=share",
      Notes: "",
      isAddOn: "No",
      Category: "Calf Strength"
    },
    {
      Month: 6,
      ExerciseNo: 6,
      Exercise: "Weighted single leg calf raises (isometric or dynamic)",
      Sets: "3-4",
      Reps: "5",
      Hold: "",
      Rest: "",
      Link: "https://youtube.com/shorts/0w67SFJQ6Zk?feature=share",
      Notes: "",
      isAddOn: "No",
      Category: "Calf Strength"
    }
  ],
  "Front Planks": [
    {
      Month: 1,
      ExerciseNo: 1,
      Exercise: "Static front plank",
      Sets: "3-4",
      Reps: "",
      Hold: "30-60 secs",
      Rest: "1-2 mins",
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
      Hold: "30-60 secs",
      Rest: "1-2 mins",
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
      Hold: "30-60 secs",
      Rest: "1-2 mins",
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
      Hold: "30-60 secs",
      Rest: "1-2 mins",
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
      Rest: "1-2 mins",
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
      Rest: "1-2 mins",
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
      Rest: "1-2 mins",
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
      Rest: "1-2 mins",
      Link: "https://youtu.be/nqHYCBx4EHo?si=3Vgl9d4fW0H1jjmQ",
      Notes: "",
      isAddOn: "Yes",
      Category: "Front Planks"
    }
  ],
  "Knee Strength Isometrics": [
    {
      Month: 1,
      ExerciseNo: 1,
      Exercise: "Knee isometrics",
      Sets: "4",
      Reps: "",
      Hold: "30-60 secs",
      Rest: "2 mins",
      Link: "https://youtube.com/shorts/x77WsAllbdw",
      Notes: "",
      isAddOn: "Yes",
      Category: "Knee Strength Isometrics"
    },
    {
      Month: 2,
      ExerciseNo: 2,
      Exercise: "Knee isometrics",
      Sets: "4",
      Reps: "",
      Hold: "30-60 secs",
      Rest: "",
      Link: "",
      Notes: "",
      isAddOn: "Yes",
      Category: "Knee Strength Isometrics"
    },
    {
      Month: 3,
      ExerciseNo: 3,
      Exercise: "Knee isometrics",
      Sets: "4",
      Reps: "",
      Hold: "30-60 secs",
      Rest: "",
      Link: "",
      Notes: "",
      isAddOn: "Yes",
      Category: "Knee Strength Isometrics"
    },
    {
      Month: 4,
      ExerciseNo: 4,
      Exercise: "Knee isometrics",
      Sets: "4",
      Reps: "",
      Hold: "30-60 secs",
      Rest: "",
      Link: "",
      Notes: "",
      isAddOn: "Yes",
      Category: "Knee Strength Isometrics"
    },
    {
      Month: 5,
      ExerciseNo: 5,
      Exercise: "Knee isometrics",
      Sets: "4",
      Reps: "",
      Hold: "30-60 secs",
      Rest: "",
      Link: "",
      Notes: "",
      isAddOn: "Yes",
      Category: "Knee Strength Isometrics"
    },
    {
      Month: 6,
      ExerciseNo: 6,
      Exercise: "Knee isometrics",
      Sets: "4",
      Reps: "",
      Hold: "30-60 secs",
      Rest: "",
      Link: "",
      Notes: "",
      isAddOn: "Yes",
      Category: "Knee Strength Isometrics"
    },
    {
      Month: 7,
      ExerciseNo: 7,
      Exercise: "Knee isometrics",
      Sets: "4",
      Reps: "",
      Hold: "30-60 secs",
      Rest: "",
      Link: "",
      Notes: "",
      isAddOn: "Yes",
      Category: "Knee Strength Isometrics"
    },
    {
      Month: 8,
      ExerciseNo: 8,
      Exercise: "Knee isometrics",
      Sets: "4",
      Reps: "",
      Hold: "30-60 secs",
      Rest: "",
      Link: "",
      Notes: "",
      isAddOn: "Yes",
      Category: "Knee Strength Isometrics"
    }
  ]
}

export default masterExerciseList
